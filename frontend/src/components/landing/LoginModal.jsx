import React, { useCallback, useEffect, useState } from "react";
import { X, Mail, Lock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import GoogleButton from "@/components/landing/GoogleButton";

export default function LoginModal({ open, onClose, onSwitchToSignup }) {
  const { login } = useAuth();
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
      await login(email, password);
      onClose();
    } catch (ex) {
      setErr(ex?.response?.data?.detail || "Erro ao entrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="login-modal-overlay" onClick={onClose} className="modal-overlay">
      <div data-testid="login-modal" onClick={(e) => e.stopPropagation()} className="modal-card">
        <button data-testid="login-modal-close" onClick={onClose} className="modal-close"><X size={16} /></button>
        <div className="badge" style={{ marginBottom: 18 }}><span className="dot" /> Acesso seguro</div>
        <h2 className="modal-title">Entrar</h2>
        <p className="modal-sub">Acesse seu workspace de cibersegurança.</p>

        <GoogleButton testid="login-google-btn" label="Entrar com Google" />
        <div className="modal-divider"><span>ou com e-mail</span></div>

        <form data-testid="login-form" onSubmit={submit} className="modal-form">
          <label className="modal-input">
            <Mail size={16} color="var(--neon)" />
            <input
              data-testid="login-email"
              type="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
            />
          </label>
          <label className="modal-input">
            <Lock size={16} color="var(--neon)" />
            <input
              data-testid="login-password"
              type="password" required value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
          </label>
          {err && <div data-testid="login-error" className="modal-error">{err}</div>}
          <button data-testid="login-submit" type="submit" disabled={loading}
                  className="btn-primary" style={{ justifyContent: "center", width: "100%" }}>
            {loading ? "..." : ">_ Entrar"}
          </button>
        </form>

        <p className="modal-foot">
          Não tem conta?{" "}
          <span data-testid="switch-to-signup" className="modal-link"
                onClick={onSwitchToSignup}>Criar conta →</span>
        </p>
      </div>
    </div>
  );
}
