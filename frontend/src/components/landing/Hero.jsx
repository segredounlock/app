import React from "react";
import { Terminal, Play, Scale, Users, ShieldCheck } from "lucide-react";
import HeroVisual from "@/components/landing/HeroVisual";
import { LANDING } from "@/constants/testIds";

export default function Hero() {
  return (
    <section
      className="hero-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        gap: 56,
        alignItems: "center",
        marginTop: 80,
        marginBottom: 80,
      }}
    >
      <div>
        <div data-testid={LANDING.heroBadge} className="badge rise">
          <span className="dot" /> Plataforma de Cibersegurança
        </div>

        <h1 data-testid={LANDING.heroTitle} className="hero-title rise d1" style={{ marginTop: 28 }}>
          HACKEIE O<br />
          CONHECIMENTO.<br />
          <span className="accent">PROTEJA O FUTURO.</span>
        </h1>

        <p
          className="rise d2"
          style={{
            marginTop: 28,
            color: "var(--text-dim)",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 520,
          }}
        >
          Centraldark é a plataforma completa para quem vive o mundo da segurança
          da informação na prática. Labs, ferramentas e uma comunidade que evolui junto.
        </p>

        <div className="rise d3" style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
          <button data-testid={LANDING.ctaStart} className="btn-primary">
            <Terminal size={16} /> Começar Agora
          </button>
          <button data-testid={LANDING.ctaDemo} className="btn-ghost">
            <Play size={16} /> Ver Demonstração
          </button>
        </div>

        <div className="rise d4" style={{ display: "flex", gap: 28, marginTop: 38, flexWrap: "wrap" }}>
          <span className="trust-item"><ShieldCheck size={16} /> 100% Legal</span>
          <span className="trust-item"><Scale size={16} /> Foco em Ética</span>
          <span className="trust-item"><Users size={16} /> Comunidade Ativa</span>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}
