import React from "react";
import Logo from "@/components/landing/Logo";
import { LANDING } from "@/constants/testIds";

const NAV_ITEMS = [
  { label: "Início", testid: LANDING.navInicio, active: true },
  { label: "Recursos", testid: LANDING.navRecursos },
  { label: "Ferramentas", testid: LANDING.navFerramentas },
  { label: "Planos", testid: LANDING.navPlanos },
  { label: "Sobre", testid: LANDING.navSobre },
  { label: "Contato", testid: LANDING.navContato },
];

export default function Navbar() {
  return (
    <nav
      data-testid={LANDING.nav}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 22px",
        border: "1px solid var(--border)",
        borderRadius: 14,
        background: "rgba(10, 15, 13, 0.6)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Logo />
      <div className="nav-links" style={{ display: "flex", gap: 32 }}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={`#${item.label.toLowerCase()}`}
            data-testid={item.testid}
            className={`nav-link ${item.active ? "active" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button data-testid={LANDING.navLogin} className="btn-nav">Entrar</button>
        <button data-testid={LANDING.navSignup} className="btn-nav-primary">
          <span className="nav-cta-text">Criar Conta</span>
        </button>
      </div>
    </nav>
  );
}
