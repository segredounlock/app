import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";
import Logo from "@/components/landing/Logo";
import SignupModal from "@/components/landing/SignupModal";
import LoginModal from "@/components/landing/LoginModal";
import { useAuth } from "@/context/AuthContext";
import { LANDING } from "@/constants/testIds";

const NAV_ITEMS = [
  { label: "Início", to: "/", testid: LANDING.navInicio },
  { label: "Recursos", to: "/recursos", testid: LANDING.navRecursos },
  { label: "Ferramentas", to: "/ferramentas", testid: LANDING.navFerramentas },
  { label: "Planos", to: "/planos", testid: LANDING.navPlanos },
  { label: "Sobre", to: "/sobre", testid: LANDING.navSobre },
  { label: "Contato", to: "/contato", testid: LANDING.navContato },
];

export default function Navbar() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <>
      <nav
        data-testid={LANDING.nav}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 8px",
          gap: 16,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}><Logo /></Link>

        <div className="nav-links" style={{ display: "flex", gap: 32 }}>
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                data-testid={item.testid}
                className={`nav-link ${active ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {user ? (
            <>
              <div data-testid="user-chip" className="user-chip">
                <span className="avatar">
                  {(user.username || user.email || "U").slice(0, 1).toUpperCase()}
                </span>
                {user.username || user.email}
              </div>
              <button data-testid="logout-btn" className="btn-nav" onClick={logout}>
                <LogOut size={14} style={{ marginRight: 6 }} /> Sair
              </button>
            </>
          ) : (
            <>
              <button data-testid={LANDING.navLogin} className="btn-nav"
                      onClick={() => setLoginOpen(true)}>Entrar</button>
              <button data-testid={LANDING.navSignup} className="btn-nav-primary"
                      onClick={() => setSignupOpen(true)}>Criar Conta</button>
            </>
          )}
        </div>
      </nav>

      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToSignup={() => { setLoginOpen(false); setSignupOpen(true); }}
      />
      <SignupModal
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSwitchToLogin={() => { setSignupOpen(false); setLoginOpen(true); }}
      />
    </>
  );
}
