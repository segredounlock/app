# Centraldark — Auth Testing Playbook

## Manual test credentials (Email/Password)

A seeded test user exists in MongoDB:

- **Email:** test@centraldark.io
- **Password:** Test1234!
- **Username:** testhacker

## Endpoints

- `POST /api/auth/register` — body: `{username, email, password}` → returns `{user, session_token}` and sets `session_token` cookie
- `POST /api/auth/login` — body: `{email, password}` → returns `{user, session_token}` and sets cookie
- `GET /api/auth/google/session` — header: `X-Session-ID: <session_id>` → exchanges Emergent session_id, sets cookie
- `GET /api/auth/me` — uses cookie OR `Authorization: Bearer <token>` → returns user
- `POST /api/auth/logout` — clears session, deletes cookie

## Curl smoke tests

```bash
API=$(grep REACT_APP_BACKEND_URL /app/frontend/.env | cut -d'=' -f2)

# Register
curl -X POST "$API/api/auth/register" -H "Content-Type: application/json" \
  -d '{"username":"hacker1","email":"h1@test.io","password":"Test1234!"}'

# Login
curl -X POST "$API/api/auth/login" -H "Content-Type: application/json" \
  -d '{"email":"h1@test.io","password":"Test1234!"}'

# Me (Bearer)
curl "$API/api/auth/me" -H "Authorization: Bearer <session_token>"
```

## Browser session via mongosh
```
mongosh --eval "
use('test_database');
const u = 'user_test_' + Date.now();
const t = 'tok_' + Date.now();
db.users.insertOne({user_id: u, email: 'sb@test.io', name: 'Sandbox', username: 'sandbox', auth_provider: 'email', password_hash: null, created_at: new Date()});
db.user_sessions.insertOne({user_id: u, session_token: t, expires_at: new Date(Date.now()+7*864e5)});
print(t);"
```

## Notes
- Both providers (email/password & Google) write to the same `users` collection keyed by `user_id` UUID.
- Sessions stored in `user_sessions` keyed by `session_token` with `expires_at` (7 days).
- `_id: 0` projection on every find.
- `session_token` cookie: `httpOnly=True, secure=True, samesite="none", path="/"`.
