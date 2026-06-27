import React from "react";
import { Terminal, Users, FlaskConical, GraduationCap, Trophy } from "lucide-react";
import { LANDING } from "@/constants/testIds";

const STATS = [
  { testid: LANDING.statMembers, Icon: Users, value: "10K+", label: "Membros Ativos" },
  { testid: LANDING.statLabs, Icon: FlaskConical, value: "250+", label: "Labs Disponíveis" },
  { testid: LANDING.statTools, Icon: Terminal, value: "50+", label: "Ferramentas" },
  { testid: LANDING.statTutorials, Icon: GraduationCap, value: "120+", label: "Tutoriais" },
  { testid: LANDING.statCtf, Icon: Trophy, value: "30+", label: "CTFs Realizados" },
];

function StatItem({ Icon, value, label, testid }) {
  return (
    <div className="stat" data-testid={testid}>
      <div className="stat-icon">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
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
      {STATS.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </section>
  );
}
