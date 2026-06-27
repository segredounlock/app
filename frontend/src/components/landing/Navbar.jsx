import React, { useState } from "react";
import Logo from "@/components/landing/Logo";
import SignupModal from "@/components/landing/SignupModal";
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
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <nav
        data-testid={LANDING.nav}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 8px",
        }}
      >
        <Logo />
        <div className="nav-links" style={{ display: "flex", gap: 36 }}>
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
          <button
            data-testid={LANDING.navSignup}
            className="btn-nav-primary"
            onClick={() => setSignupOpen(true)}
          >
            Criar Conta
          </button>
        </div>
      </nav>

      <SignupModal open={signupOpen} onClose={() => setSignupOpen(false)} />
    </>
  );
}
