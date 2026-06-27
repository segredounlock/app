import React, { useState } from "react";
import PageShell from "@/components/landing/PageShell";
import PlanCard from "@/components/landing/PlanCard";

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

const PERIODS = [
  { v: "m", l: "Mensal" },
  { v: "y", l: "Anual (-20%)" },
];

function PeriodToggle({ period, onChange }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 38 }}>
      <div style={{ display: "inline-flex", border: "1px solid var(--border-2)", borderRadius: 999, padding: 4 }}>
        {PERIODS.map((p) => (
          <button
            key={p.v}
            data-testid={`plan-period-${p.v}`}
            onClick={() => onChange(p.v)}
            className={period === p.v ? "btn-nav-primary" : "btn-nav"}
            style={{ border: "none", padding: "8px 18px", fontSize: 12 }}
          >
            {p.l}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Planos() {
  const [period, setPeriod] = useState("m");

  return (
    <PageShell
      eyebrow="Planos"
      title="Escolha sua categoria. Evolua no seu ritmo."
      lead="Sem fidelidade. Cancele quando quiser. Todos os planos incluem acesso ético e legal a ambientes controlados."
    >
      <PeriodToggle period={period} onChange={setPeriod} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
        {PLANS.map((p) => (
          <PlanCard key={p.name} plan={p} period={period} />
        ))}
      </div>
    </PageShell>
  );
}
