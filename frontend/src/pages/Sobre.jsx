import React from "react";
import PageShell from "@/components/landing/PageShell";
import { ShieldCheck, Scale, Users, Award, Github, Send } from "lucide-react";

const VALUES = [
  { Icon: ShieldCheck, title: "Legal & Ético", desc: "Operamos dentro da lei. Todas as práticas em ambientes isolados, autorizados e auditáveis." },
  { Icon: Scale, title: "Conhecimento Livre", desc: "Defendemos acesso democrático à educação em segurança. Trilha gratuita robusta para sempre." },
  { Icon: Users, title: "Comunidade Primeiro", desc: "Cada decisão de produto passa pelo feedback de quem usa a plataforma diariamente." },
  { Icon: Award, title: "Excelência Técnica", desc: "Conteúdo curado por profissionais ativos no mercado, com experiência comprovada." },
];

const TIMELINE = [
  { y: "2022", t: "Início como newsletter de pentest em PT-BR." },
  { y: "2023", t: "Lançamento da plataforma de labs com 30 ambientes." },
  { y: "2024", t: "10.000 membros ativos. Primeiro CTF nacional." },
  { y: "2026", t: "250+ labs, 50+ ferramentas, parceria com 12 empresas de cyber." },
];

export default function Sobre() {
  return (
    <PageShell
      eyebrow="Sobre"
      title="Construindo a próxima geração de hackers éticos brasileiros."
      lead="Centraldark nasceu da frustração de profissionais que viam talentos enormes parando antes mesmo de começar — por falta de acesso, mentoria ou ambiente seguro para praticar."
    >
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14,
                     letterSpacing: "0.2em", color: "var(--neon)", marginBottom: 24 }}>
          /VALORES
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {VALUES.map(({ Icon, title, desc }) => (
            <div key={title} data-testid={`value-${title.toLowerCase().replace(/\s/g, "-")}`}
                 className="panel" style={{ padding: 26, borderRadius: 14 }}>
              <div className="feature-icon"><Icon size={26} strokeWidth={1.8} /></div>
              <div className="feature-title">{title.toUpperCase()}</div>
              <div className="feature-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 60 }}>
        <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14,
                     letterSpacing: "0.2em", color: "var(--neon)", marginBottom: 24 }}>
          /JORNADA
        </h2>
        <div style={{ position: "relative", paddingLeft: 28, borderLeft: "1px dashed var(--border-2)" }}>
          {TIMELINE.map(({ y, t }) => (
            <div key={y} style={{ marginBottom: 24, position: "relative" }}>
              <div style={{ position: "absolute", left: -36, top: 4, width: 16, height: 16,
                            border: "1px solid var(--neon)", borderRadius: "50%",
                            background: "var(--bg)", boxShadow: "0 0 12px rgba(57,255,20,0.6)" }} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--neon)",
                            fontSize: 14, fontWeight: 700 }}>{y}</div>
              <div style={{ color: "var(--text-dim)", marginTop: 4 }}>{t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel" style={{ padding: 36, borderRadius: 18, textAlign: "center" }}>
        <h2 style={{ color: "#fff", margin: 0, fontFamily: "'JetBrains Mono', monospace",
                     fontSize: 22, letterSpacing: "-0.01em" }}>
          Quer fazer parte do time?
        </h2>
        <p style={{ color: "var(--text-dim)", marginTop: 12, maxWidth: 540, margin: "12px auto 24px" }}>
          Estamos sempre olhando para autores, mentores e operadores que queiram contribuir com conteúdo, labs ou CTFs.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn-primary" href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github size={16} /> Contribuir
          </a>
          <a className="btn-ghost" href="/contato">
            <Send size={16} /> Falar com o time
          </a>
        </div>
      </section>
    </PageShell>
  );
}
