import React, { useCallback, useEffect, useState } from "react";
import { X, Mail, Lock, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import GoogleButton from "@/components/landing/GoogleButton";

export default function SignupModal({ open, onClose, onSwitchToLogin }) {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, handleKey]);

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    setErr(""); setLoading(true);
    try {
      await register(username, email, password);
      onClose();
    } catch (ex) {
      setErr(ex?.response?.data?.detail || "Erro ao registrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="signup-modal-overlay" onClick={onClose} className="modal-overlay">
      <div data-testid="signup-modal" onClick={(e) => e.stopPropagation()} className="modal-card">
        <button data-testid="signup-modal-close" onClick={onClose} className="modal-close"><X size={16} /></button>
        <div className="badge" style={{ marginBottom: 18 }}><span className="dot" /> Acesso Inicial</div>
        <h2 className="modal-title">Criar sua conta</h2>
        <p className="modal-sub">Entre no submundo do conhecimento ético.</p>

        <GoogleButton testid="signup-google-btn" label="Criar conta com Google" />
        <div className="modal-divider"><span>ou com e-mail</span></div>

        <form data-testid="signup-form" onSubmit={submit} className="modal-form">
          <label className="modal-input">
            <User size={16} color="var(--neon)" />
            <input data-testid="signup-username" required minLength={2}
                   value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </label>
          <label className="modal-input">
            <Mail size={16} color="var(--neon)" />
            <input data-testid="signup-email" type="email" required
                   value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
          </label>
          <label className="modal-input">
            <Lock size={16} color="var(--neon)" />
            <input data-testid="signup-password" type="password" required minLength={6}
                   value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha (mín. 6)" />
          </label>
          {err && <div data-testid="signup-error" className="modal-error">{err}</div>}
          <button data-testid="signup-submit" type="submit" disabled={loading}
                  className="btn-primary" style={{ justifyContent: "center", width: "100%" }}>
            {loading ? "..." : ">_ Criar Conta"}
          </button>
        </form>

        <p className="modal-foot">
          Já possui acesso?{" "}
          <span data-testid="switch-to-login" className="modal-link"
                onClick={onSwitchToLogin}>Entrar →</span>
        </p>
      </div>
    </div>
  );
}
