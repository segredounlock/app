import React from "react";
import { Check, Zap } from "lucide-react";

export default function PlanCard({ plan, period }) {
  const price = plan.price[period];
  return (
    <div
      data-testid={`plan-${plan.name.toLowerCase()}`}
      className="panel"
      style={{
        padding: 32,
        borderRadius: 18,
        position: "relative",
        border: plan.featured ? "1px solid var(--neon)" : "1px solid var(--border)",
        boxShadow: plan.featured ? "0 0 40px rgba(57, 255, 20, 0.15)" : "none",
      }}
    >
      {plan.featured && (
        <div
          style={{
            position: "absolute",
            top: -12,
            right: 24,
            background: "var(--neon)",
            color: "#021307",
            padding: "4px 12px",
            borderRadius: 999,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.15em",
          }}
        >
          <Zap size={10} style={{ display: "inline", marginRight: 4 }} /> {plan.tag.toUpperCase()}
        </div>
      )}

      <h3 style={{ color: "#fff", fontFamily: "'JetBrains Mono', monospace", fontSize: 14, letterSpacing: "0.2em", margin: 0 }}>
        {plan.name.toUpperCase()}
      </h3>
      {!plan.featured && <p style={{ color: "var(--text-mute)", fontSize: 12, marginTop: 4 }}>{plan.tag}</p>}

      <div style={{ marginTop: 22, display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontSize: 14, color: "var(--text-dim)" }}>R$</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 48, color: "#fff", lineHeight: 1 }}>{price}</span>
        <span style={{ color: "var(--text-dim)", fontSize: 13 }}>/{period === "m" ? "mês" : "mês*"}</span>
      </div>
      {period === "y" && price > 0 && (
        <p style={{ color: "var(--neon)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", marginTop: 4 }}>
          * cobrado anualmente
        </p>
      )}

      <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 28px" }}>
        {plan.features.map((f) => (
          <li
            key={f}
            style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", color: "var(--text-dim)", fontSize: 14 }}
          >
            <Check size={16} color="var(--neon)" style={{ marginTop: 2, flexShrink: 0 }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        data-testid={`plan-cta-${plan.name.toLowerCase()}`}
        className={plan.featured ? "btn-primary" : "btn-ghost"}
        style={{ width: "100%", justifyContent: "center" }}
      >
        {price === 0 ? "Começar Grátis" : "Assinar Agora"}
      </button>
    </div>
  );
}
