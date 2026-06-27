import React from "react";
import { Terminal, Users, Target, BookOpen } from "lucide-react";
import { LANDING } from "@/constants/testIds";

const FEATURES = [
  {
    testid: LANDING.featureLabs,
    Icon: Target,
    title: "LABS PRÁTICOS",
    desc: "Ambientes de laboratório para você praticar ataques e defesas com segurança.",
  },
  {
    testid: LANDING.featureTools,
    Icon: Terminal,
    title: "FERRAMENTAS",
    desc: "Acesse ferramentas poderosas diretamente na plataforma, sem instalação.",
  },
  {
    testid: LANDING.featureContent,
    Icon: BookOpen,
    title: "CONTEÚDO",
    desc: "Cursos, tutoriais e guias atualizados sobre segurança da informação.",
  },
  {
    testid: LANDING.featureCommunity,
    Icon: Users,
    title: "COMUNIDADE",
    desc: "Conecte-se com hackers éticos, participe de desafios e evolua junto com a comunidade.",
  },
];

function FeatureCard({ Icon, title, desc, testid }) {
  return (
    <div className="feature-card" data-testid={testid}>
      <div className="feature-icon">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <div className="feature-title">{title}</div>
      <div className="feature-desc">{desc}</div>
    </div>
  );
}

export default function Features() {
  return (
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
      {FEATURES.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </section>
  );
}
