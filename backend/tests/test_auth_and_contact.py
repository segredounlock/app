"""
Backend tests for Centraldark auth + contact endpoints.
Covers: /api/auth/register, /api/auth/login, /api/auth/me, /api/auth/logout,
        /api/auth/google/session, /api/contact
"""
import os
import time
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # fall back to reading frontend .env
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def fresh_user():
    ts = int(time.time() * 1000)
    return {
        "username": f"tester{ts}",
        "email": f"tester+{ts}@centraldark.io",
        "password": "Test1234!",
    }


@pytest.fixture
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- root ----------
def test_root(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    assert r.json().get("message") == "Centraldark API"


# ---------- register ----------
def test_register_success(session, fresh_user):
    r = session.post(f"{API}/auth/register", json=fresh_user)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "user" in data and "session_token" in data
    assert data["user"]["email"] == fresh_user["email"].lower()
    assert data["user"]["username"] == fresh_user["username"]
    assert data["user"]["auth_provider"] == "email"
    assert data["session_token"].startswith("st_")
    # Cookie set
    assert "session_token" in session.cookies.get_dict() or any(
        c.name == "session_token" for c in r.cookies
    )
    # Save for later tests on module
    pytest.shared = {
        "token": data["session_token"],
        "user_id": data["user"]["user_id"],
        "email": fresh_user["email"],
        "password": fresh_user["password"],
    }


def test_register_duplicate_email(session, fresh_user):
    r = session.post(f"{API}/auth/register", json=fresh_user)
    assert r.status_code == 409, r.text
    assert "detail" in r.json()


def test_register_invalid_payload(session):
    r = session.post(f"{API}/auth/register", json={"username": "a", "email": "bad", "password": "x"})
    assert r.status_code == 422


# ---------- login ----------
def test_login_success(session):
    creds = {"email": pytest.shared["email"], "password": pytest.shared["password"]}
    r = session.post(f"{API}/auth/login", json=creds)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["user"]["email"] == creds["email"].lower()
    assert data["session_token"].startswith("st_")


def test_login_wrong_password(session):
    r = session.post(
        f"{API}/auth/login",
        json={"email": pytest.shared["email"], "password": "WRONGpassword!"},
    )
    assert r.status_code == 401
    assert r.json().get("detail") == "Credenciais inválidas"


def test_login_unknown_email(session):
    r = session.post(
        f"{API}/auth/login",
        json={"email": f"nouser_{uuid.uuid4().hex}@x.io", "password": "Whatever1!"},
    )
    assert r.status_code == 401


# ---------- me ----------
def test_me_requires_auth(session):
    r = requests.get(f"{API}/auth/me")  # fresh session, no cookie/header
    assert r.status_code == 401


def test_me_with_bearer(session):
    headers = {"Authorization": f"Bearer {pytest.shared['token']}"}
    r = requests.get(f"{API}/auth/me", headers=headers)
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["email"] == pytest.shared["email"]
    assert body["user_id"] == pytest.shared["user_id"]


def test_me_with_bad_bearer(session):
    headers = {"Authorization": "Bearer st_invalidtoken_xxx"}
    r = requests.get(f"{API}/auth/me", headers=headers)
    assert r.status_code == 401


# ---------- google session exchange ----------
def test_google_session_missing_header(session):
    r = session.get(f"{API}/auth/google/session")
    assert r.status_code == 400
    assert "X-Session-ID" in r.json().get("detail", "")


def test_google_session_bogus(session):
    r = session.get(
        f"{API}/auth/google/session",
        headers={"X-Session-ID": f"bogus_{uuid.uuid4().hex}"},
    )
    # Emergent rejects -> 401
    assert r.status_code == 401, r.text


# ---------- logout ----------
def test_logout_clears_session():
    # Use a session with cookie set
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    # login to get cookie
    r = s.post(
        f"{API}/auth/login",
        json={"email": pytest.shared["email"], "password": pytest.shared["password"]},
    )
    assert r.status_code == 200
    token = r.json()["session_token"]

    # /me works with cookie
    r2 = s.get(f"{API}/auth/me")
    assert r2.status_code == 200

    # logout
    r3 = s.post(f"{API}/auth/logout")
    assert r3.status_code == 200
    assert r3.json() == {"ok": True}

    # token via Bearer should no longer work (session row deleted)
    r4 = requests.get(f"{API}/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert r4.status_code == 401


# ---------- contact ----------
def test_contact_success(session):
    payload = {
        "name": "TEST_Contato",
        "email": "TEST_contact@centraldark.io",
        "message": "Olá, gostaria de saber mais sobre o programa de bug bounty.",
    }
    r = session.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["ok"] is True
    assert "id" in data and len(data["id"]) > 0


def test_contact_invalid(session):
    r = session.post(f"{API}/contact", json={"name": "a", "email": "x", "message": "no"})
    assert r.status_code == 422


# ---------- seeded user from playbook (optional) ----------
def test_seeded_user_login_if_exists(session):
    """test@centraldark.io may or may not be seeded. Don't fail if absent."""
    r = session.post(
        f"{API}/auth/login",
        json={"email": "test@centraldark.io", "password": "Test1234!"},
    )
    if r.status_code == 401:
        pytest.skip("Seeded user not present in DB — non-blocking")
    assert r.status_code == 200
