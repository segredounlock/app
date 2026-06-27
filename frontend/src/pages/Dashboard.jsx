import React from "react";
import { Navigate } from "react-router-dom";
import { Terminal, FlaskConical, Trophy, BookOpen } from "lucide-react";
import PageShell from "@/components/landing/PageShell";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh", background: "#060906",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--neon)", fontFamily: "'JetBrains Mono', monospace",
      }}>
        <div className="badge"><span className="dot" /> Carregando sessão...</div>
      </div>
    );
  }
  if (!user) return <Navigate to="/" replace />;

  return (
    <PageShell
      eyebrow={`Sessão ativa · ${user.auth_provider}`}
      title={`Bem-vindo, ${user.username || user.name || user.email}.`}
      lead="Seu workspace pessoal. Continue de onde parou ou comece uma nova trilha."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 32 }}>
        <Tile data-testid="dash-labs" Icon={FlaskConical} value="3" label="Labs em andamento" />
        <Tile data-testid="dash-tools" Icon={Terminal} value="12" label="Ferramentas favoritas" />
        <Tile data-testid="dash-ctf" Icon={Trophy} value="#247" label="Ranking CTF" />
        <Tile data-testid="dash-courses" Icon={BookOpen} value="2" label="Trilhas ativas" />
      </div>

      <div className="panel" style={{ padding: 32, borderRadius: 18 }}>
        <h2 style={{ color: "#fff", margin: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: 18 }}>
          /sessão
        </h2>
        <div style={{ marginTop: 18, fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "var(--text-dim)" }}>
          <div>user_id: <span style={{ color: "var(--neon)" }}>{user.user_id}</span></div>
          <div>email: <span style={{ color: "var(--neon)" }}>{user.email}</span></div>
          <div>provider: <span style={{ color: "var(--neon)" }}>{user.auth_provider}</span></div>
        </div>
      </div>
    </PageShell>
  );
}

function Tile({ Icon, value, label, ...rest }) {
  return (
    <div {...rest} className="panel" style={{ padding: 24, borderRadius: 14 }}>
      <div className="feature-icon"><Icon size={26} strokeWidth={1.8} /></div>
      <div className="stat-value" style={{ marginTop: 8 }}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
