import React, { useState } from "react";
import PageShell from "@/components/landing/PageShell";
import { Check, Zap } from "lucide-react";

const PLANS = [
  {
    name: "Recruta", price: { m: 0, y: 0 }, tag: "Comece grátis",
    features: ["10 labs/mês", "Acesso à comunidade", "Trilha iniciante", "CTF mensal público"],
  },
  {
    name: "Operador", price: { m: 49, y: 39 }, tag: "Mais popular", featured: true,
    features: ["Labs ilimitados", "Toolkit cloud completo", "Todas as trilhas", "CTF + ranking privado", "Vault de notas", "Discord VIP"],
  },
  {
    name: "Elite", price: { m: 129, y: 99 }, tag: "Para profissionais",
    features: ["Tudo do Operador", "Mentoria 1:1 (2x/mês)", "AD/Cloud range avançado", "Certificados verificáveis", "Acesso antecipado a labs", "Suporte prioritário"],
  },
];

export default function Planos() {
  const [period, setPeriod] = useState("m");

  return (
    <PageShell
      eyebrow="Planos"
      title="Escolha sua categoria. Evolua no seu ritmo."
      lead="Sem fidelidade. Cancele quando quiser. Todos os planos incluem acesso ético e legal a ambientes controlados."
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 38 }}>
        <div style={{ display: "inline-flex", border: "1px solid var(--border-2)", borderRadius: 999, padding: 4 }}>
          {[
            { v: "m", l: "Mensal" },
            { v: "y", l: "Anual (-20%)" },
          ].map(p => (
            <button key={p.v}
              data-testid={`plan-period-${p.v}`}
              onClick={() => setPeriod(p.v)}
              className={period === p.v ? "btn-nav-primary" : "btn-nav"}
              style={{ border: "none", padding: "8px 18px", fontSize: 12 }}
            >{p.l}</button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
        {PLANS.map(p => (
          <div key={p.name}
               data-testid={`plan-${p.name.toLowerCase()}`}
               className="panel"
               style={{
                 padding: 32, borderRadius: 18, position: "relative",
                 border: p.featured ? "1px solid var(--neon)" : "1px solid var(--border)",
                 boxShadow: p.featured ? "0 0 40px rgba(57, 255, 20, 0.15)" : "none",
               }}>
            {p.featured && (
              <div style={{ position: "absolute", top: -12, right: 24, background: "var(--neon)",
                            color: "#021307", padding: "4px 12px", borderRadius: 999,
                            fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 800,
                            letterSpacing: "0.15em" }}>
                <Zap size={10} style={{ display: "inline", marginRight: 4 }} /> {p.tag.toUpperCase()}
              </div>
            )}
            <h3 style={{ color: "#fff", fontFamily: "'JetBrains Mono', monospace",
                         fontSize: 14, letterSpacing: "0.2em", margin: 0 }}>{p.name.toUpperCase()}</h3>
            {!p.featured && <p style={{ color: "var(--text-mute)", fontSize: 12, marginTop: 4 }}>{p.tag}</p>}
            <div style={{ marginTop: 22, display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontSize: 14, color: "var(--text-dim)" }}>R$</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 48, color: "#fff", lineHeight: 1 }}>
                {p.price[period]}
              </span>
              <span style={{ color: "var(--text-dim)", fontSize: 13 }}>/{period === "m" ? "mês" : "mês*"}</span>
            </div>
            {period === "y" && p.price.y > 0 && (
              <p style={{ color: "var(--neon)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", marginTop: 4 }}>
                * cobrado anualmente
              </p>
            )}

            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 28px" }}>
              {p.features.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0",
                                     color: "var(--text-dim)", fontSize: 14 }}>
                  <Check size={16} color="var(--neon)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button data-testid={`plan-cta-${p.name.toLowerCase()}`}
                    className={p.featured ? "btn-primary" : "btn-ghost"}
                    style={{ width: "100%", justifyContent: "center" }}>
              {p.price[period] === 0 ? "Começar Grátis" : "Assinar Agora"}
            </button>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
