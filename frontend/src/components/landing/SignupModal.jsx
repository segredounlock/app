import React, { useEffect } from "react";
import { X, Mail, Lock, User } from "lucide-react";

export default function SignupModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      data-testid="signup-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.78)",
        backdropFilter: "blur(8px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        data-testid="signup-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 460,
          background: "linear-gradient(180deg, #0d1411 0%, #050807 100%)",
          border: "1px solid var(--border-2)",
          borderRadius: 18,
          padding: 36,
          position: "relative",
          boxShadow: "0 0 80px rgba(45, 255, 126, 0.15)",
        }}
      >
        <button
          data-testid="signup-modal-close"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "transparent",
            border: "1px solid var(--border-2)",
            borderRadius: 8,
            color: "var(--text-dim)",
            width: 34,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <X size={16} />
        </button>

        <div className="badge" style={{ marginBottom: 18 }}>
          <span className="dot" /> Acesso Inicial
        </div>

        <h2
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 24,
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Criar sua conta
        </h2>
        <p
          style={{
            color: "var(--text-dim)",
            fontSize: 13,
            marginTop: 8,
            marginBottom: 24,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Entre no submundo do conhecimento ético.
        </p>

        <form
          data-testid="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          <ModalInput Icon={User} placeholder="Username" testid="signup-username" />
          <ModalInput Icon={Mail} type="email" placeholder="seu@email.com" testid="signup-email" />
          <ModalInput Icon={Lock} type="password" placeholder="Senha" testid="signup-password" />

          <button
            data-testid="signup-submit"
            type="submit"
            className="btn-primary"
            style={{ justifyContent: "center", marginTop: 8, width: "100%" }}
          >
            &gt;_ Criar Conta
          </button>
        </form>

        <p
          style={{
            color: "var(--text-mute)",
            fontSize: 11,
            marginTop: 18,
            fontFamily: "'JetBrains Mono', monospace",
            textAlign: "center",
          }}
        >
          Já possui acesso? <span style={{ color: "var(--neon)", cursor: "pointer" }}>Entrar →</span>
        </p>
      </div>
    </div>
  );
}

function ModalInput({ Icon, type = "text", placeholder, testid }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "rgba(45, 255, 126, 0.03)",
        border: "1px solid var(--border-2)",
        borderRadius: 10,
        padding: "12px 14px",
      }}
    >
      <Icon size={16} color="var(--neon)" />
      <input
        data-testid={testid}
        type={type}
        placeholder={placeholder}
        required
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          color: "#fff",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
        }}
      />
    </label>
  );
}
