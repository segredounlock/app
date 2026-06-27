import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
function extractSessionId() {
  const match = (window.location.hash || "").match(/session_id=([^&]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

async function exchangeSession(sessionId) {
  return axios.get(`${API}/auth/google/session`, {
    headers: { "X-Session-ID": sessionId },
    withCredentials: true,
  });
}

export default function AuthCallback() {
  const navigate = useNavigate();
  const { refresh } = useAuth();
  const hasProcessed = useRef(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (hasProcessed.current) return;
    hasProcessed.current = true;

    const sessionId = extractSessionId();
    if (!sessionId) {
      navigate("/");
      return;
    }

    (async () => {
      try {
        await exchangeSession(sessionId);
        await refresh();
        window.history.replaceState(null, "", "/dashboard");
        navigate("/dashboard", { replace: true });
      } catch {
        setError("Falha ao autenticar. Tente novamente.");
        setTimeout(() => navigate("/"), 1800);
      }
    })();
  }, [navigate, refresh]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060906",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 18,
        fontFamily: "'JetBrains Mono', monospace",
        color: "#39ff14",
      }}
    >
      <div className="badge"><span className="dot" /> Autenticando...</div>
      {error && <div style={{ color: "#ff4d4d" }}>{error}</div>}
    </div>
  );
}
