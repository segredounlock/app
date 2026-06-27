import React from "react";
import {
  Terminal,
  Play,
  Shield,
  Scale,
  Users,
  Target,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Trophy,
  Github,
  Send,
  Youtube,
  Twitter,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { LANDING } from "@/constants/testIds";

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="logo-mark">
      <Shield size={22} strokeWidth={2.4} />
    </div>
    <div>
      <div className="logo-wordmark">
        CENTRAL<span style={{ color: "var(--neon)" }}>DARK</span>
      </div>
      <div className="logo-sub">HACK · LEARN · PROTECT</div>
    </div>
  </div>
);

const NavLink = ({ children, active, testid }) => (
  <a
    href={`#${children?.toString().toLowerCase()}`}
    data-testid={testid}
    className={`nav-link ${active ? "active" : ""}`}
  >
    {children}
  </a>
);

const FeatureCard = ({ icon: Icon, title, desc, testid }) => (
  <div className="feature-card" data-testid={testid}>
    <div className="feature-icon">
      <Icon size={26} strokeWidth={1.8} />
    </div>
    <div className="feature-title">{title}</div>
    <div className="feature-desc">{desc}</div>
  </div>
);

const Stat = ({ icon: Icon, value, label, testid }) => (
  <div className="stat" data-testid={testid}>
    <div className="stat-icon">
      <Icon size={22} strokeWidth={1.8} />
    </div>
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

export default function Landing() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Global atmosphere */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(900px 600px at 75% 10%, rgba(45,255,126,0.08), transparent 60%), radial-gradient(700px 500px at 10% 80%, rgba(45,255,126,0.05), transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div className="grid-bg" style={{ position: "fixed", inset: 0, opacity: 0.6, pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "28px 32px 56px" }}>
        {/* NAV */}
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
            <NavLink active testid={LANDING.navInicio}>Início</NavLink>
            <NavLink testid={LANDING.navRecursos}>Recursos</NavLink>
            <NavLink testid={LANDING.navFerramentas}>Ferramentas</NavLink>
            <NavLink testid={LANDING.navPlanos}>Planos</NavLink>
            <NavLink testid={LANDING.navSobre}>Sobre</NavLink>
            <NavLink testid={LANDING.navContato}>Contato</NavLink>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button data-testid={LANDING.navLogin} className="btn-nav">Entrar</button>
            <button data-testid={LANDING.navSignup} className="btn-nav-primary">
              <span className="nav-cta-text">Criar Conta</span>
            </button>
          </div>
        </nav>

        {/* HERO */}
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
          {/* LEFT */}
          <div>
            <div data-testid={LANDING.heroBadge} className="badge rise">
              <span className="dot" /> Plataforma de Cibersegurança
            </div>

            <h1 data-testid={LANDING.heroTitle} className="hero-title rise d1" style={{ marginTop: 28 }}>
              HACKEIE O<br />
              CONHECIMENTO.<br />
              <span className="accent">PROTEJA O FUTURO.</span>
            </h1>

            <p className="rise d2" style={{
              marginTop: 28,
              color: "var(--text-dim)",
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 520,
            }}>
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

          {/* RIGHT — visual */}
          <div className="hero-figure rise d2 noise">
            <div className="world" />

            {/* Silhouette */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "78%",
                height: "92%",
                background:
                  "radial-gradient(ellipse 55% 45% at 50% 28%, #000 0%, rgba(0,0,0,0.95) 40%, transparent 70%), radial-gradient(ellipse 60% 70% at 50% 80%, #000 30%, transparent 75%)",
              }}
            />

            {/* Center brand */}
            <div className="hero-brand">
              <div className="mark">
                <Shield size={56} strokeWidth={2.2} />
              </div>
              <div className="name">CENTRALDARK</div>
            </div>

            {/* Top-left terminal */}
            <div className="float-left">
              <div className="terminal">
                <div className="terminal-header">
                  <span>SCAN NETWORK</span>
                  <span style={{ color: "var(--text-mute)" }}>v2.3</span>
                </div>
                <div className="term-row"><span>192.168.0.1</span><span className="ok">OPEN</span></div>
                <div className="term-row"><span>192.168.0.2</span><span className="ok">OPEN</span></div>
                <div className="term-row"><span>192.168.0.3</span><span className="ok">OPEN</span></div>
                <div className="term-row"><span>192.168.0.4</span><span className="ok">OPEN</span></div>
              </div>
            </div>

            {/* Top-right logs */}
            <div className="float-right">
              <div className="terminal">
                <div className="term-line">nodes: 45 &gt; 23.48.48 targets</div>
                <div className="term-line">enumerating targets...</div>
                <div className="term-line">scan complete.</div>
              </div>
            </div>

            {/* Bottom-left logs */}
            <div className="float-bottom-left">
              <div className="terminal">
                <div className="term-line">analyzing system...</div>
                <div className="term-line">port scan initiated...</div>
                <div className="term-line">5 open ports detected [22,80,443...]</div>
                <div className="term-line">vulnerabilities checking...</div>
                <div className="term-line">no critical vulnerabilities found</div>
                <div className="term-line">system secure</div>
                <div className="term-line">scan completed successfully</div>
              </div>
            </div>

            {/* Bottom-right status */}
            <div className="float-bottom-right">
              <div className="status-card">
                <div className="label">SYSTEM STATUS</div>
                <div className="shield">
                  <ShieldCheck size={28} strokeWidth={2.2} />
                </div>
                <div className="state">PROTECTED</div>
                <div className="sub">last scan: 2 min ago<br />status: secure</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          data-testid={LANDING.featuresSection}
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 22,
            padding: 22,
            border: "1px solid var(--border)",
            borderRadius: 18,
            background: "rgba(10, 15, 13, 0.55)",
            backdropFilter: "blur(8px)",
          }}
        >
          <FeatureCard
            testid={LANDING.featureLabs}
            icon={Target}
            title="LABS PRÁTICOS"
            desc="Ambientes de laboratório para você praticar ataques e defesas com segurança."
          />
          <FeatureCard
            testid={LANDING.featureTools}
            icon={Terminal}
            title="FERRAMENTAS"
            desc="Acesse ferramentas poderosas diretamente na plataforma, sem instalação."
          />
          <FeatureCard
            testid={LANDING.featureContent}
            icon={BookOpen}
            title="CONTEÚDO"
            desc="Cursos, tutoriais e guias atualizados sobre segurança da informação."
          />
          <FeatureCard
            testid={LANDING.featureCommunity}
            icon={Users}
            title="COMUNIDADE"
            desc="Conecte-se com hackers éticos, participe de desafios e evolua junto com a comunidade."
          />
        </section>

        {/* STATS */}
        <section
          data-testid={LANDING.statsSection}
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 8,
            padding: "28px 22px",
            border: "1px solid var(--border)",
            borderRadius: 18,
            background: "rgba(10, 15, 13, 0.55)",
            backdropFilter: "blur(8px)",
            marginTop: 22,
          }}
        >
          <Stat testid={LANDING.statMembers} icon={Users} value="10K+" label="Membros Ativos" />
          <Stat testid={LANDING.statLabs} icon={FlaskConical} value="250+" label="Labs Disponíveis" />
          <Stat testid={LANDING.statTools} icon={Terminal} value="50+" label="Ferramentas" />
          <Stat testid={LANDING.statTutorials} icon={GraduationCap} value="120+" label="Tutoriais" />
          <Stat testid={LANDING.statCtf} icon={Trophy} value="30+" label="CTFs Realizados" />
        </section>

        {/* FOOTER */}
        <footer
          data-testid={LANDING.footer}
          style={{ textAlign: "center", marginTop: 64, paddingBottom: 12 }}
        >
          <p style={{
            color: "var(--text-mute)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            letterSpacing: "0.04em",
          }}>
            Centraldark não compactua com crimes. Use o conhecimento com ética.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 22 }}>
            <a data-testid={LANDING.socialGithub} className="footer-icon" href="#"><Github size={18} /></a>
            <a data-testid={LANDING.socialDiscord} className="footer-icon" href="#"><MessagesSquare size={18} /></a>
            <a data-testid={LANDING.socialTelegram} className="footer-icon" href="#"><Send size={18} /></a>
            <a data-testid={LANDING.socialYoutube} className="footer-icon" href="#"><Youtube size={18} /></a>
            <a data-testid={LANDING.socialTwitter} className="footer-icon" href="#"><Twitter size={18} /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}
