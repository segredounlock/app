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
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        alignItems: "stretch",
        marginTop: 24,
        minHeight: "76vh",
      }}
    >
      <div style={{ padding: "60px 20px 60px 8px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div data-testid={LANDING.heroBadge} className="badge rise" style={{ alignSelf: "flex-start" }}>
          PLATAFORMA DE CIBERSEGURANÇA
        </div>

        <h1 data-testid={LANDING.heroTitle} className="hero-title rise d1" style={{ marginTop: 32 }}>
          HACKEIE O<br />
          CONHECIMENTO.<br />
          <span className="accent">PROTEJA O FUTURO.</span>
        </h1>

        <p
          className="rise d2"
          style={{
            marginTop: 32,
            color: "#a9c3b6",
            fontSize: 17,
            lineHeight: 1.65,
            maxWidth: 480,
          }}
        >
          Centraldark é a plataforma completa para quem vive o mundo da segurança
          da informação na prática.
        </p>

        <div className="rise d3" style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
          <button data-testid={LANDING.ctaStart} className="btn-primary">
            <Terminal size={18} strokeWidth={2.4} /> Começar Agora
          </button>
          <button data-testid={LANDING.ctaDemo} className="btn-ghost">
            <Play size={18} strokeWidth={2.2} /> Ver Demonstração
          </button>
        </div>

        <div className="rise d4" style={{ display: "flex", gap: 32, marginTop: 44, flexWrap: "wrap" }}>
          <span className="trust-item"><ShieldCheck size={18} /> 100% Legal</span>
          <span className="trust-item"><Scale size={18} /> Foco em Ética</span>
          <span className="trust-item"><Users size={18} /> Comunidade Ativa</span>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}
