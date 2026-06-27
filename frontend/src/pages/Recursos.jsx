import React from "react";
import { Target, Terminal, BookOpen, Users, ShieldCheck, Trophy, FlaskConical, Lock, Zap, Network } from "lucide-react";
import PageShell from "@/components/landing/PageShell";

const RESOURCES = [
  { Icon: Target, title: "Labs Práticos", desc: "Mais de 250 ambientes isolados para praticar técnicas ofensivas e defensivas. Vulnerabilidades reais, sem risco legal." },
  { Icon: Terminal, title: "Toolkit Cloud", desc: "Burp, Nmap, Metasploit, Wireshark e mais — pré-configurados no navegador. Zero instalação." },
  { Icon: BookOpen, title: "Trilhas de Estudo", desc: "Roadmaps guiados: Web Hacking, OSINT, Red Team, Blue Team, Mobile, Cloud Security." },
  { Icon: Trophy, title: "CTFs Mensais", desc: "Competições com prêmios, ranking público e badges verificáveis para seu portfólio." },
  { Icon: Users, title: "Mentoria 1:1", desc: "Sessões com profissionais sênior de empresas como Tempest, NCC Group, Bishop Fox." },
  { Icon: ShieldCheck, title: "Certificações", desc: "Prepare-se para OSCP, eJPT, CEH, CRTP com simulados e labs equivalentes." },
  { Icon: FlaskConical, title: "Sandbox Malware", desc: "Análise estática e dinâmica de amostras reais em ambiente totalmente isolado." },
  { Icon: Lock, title: "Vault Privado", desc: "Suas anotações, scripts e payloads — criptografados client-side, sincronizados entre dispositivos." },
  { Icon: Zap, title: "API Pública", desc: "Integre nossos labs e scoring em sua própria plataforma educacional ou interna." },
  { Icon: Network, title: "Network Pentest Range", desc: "Topologias completas com AD, DMZ, pivoting e segmentação — para treino de red team." },
];

export default function Recursos() {
  return (
    <PageShell
      eyebrow="Recursos"
      title="Tudo o que você precisa para se tornar uma máquina ofensiva."
      lead="Uma plataforma única que reúne labs, ferramentas, conteúdo, comunidade e mentoria. Sem fricção, sem instalação, sem desculpas."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
        {RESOURCES.map(({ Icon, title, desc }) => (
          <div key={title} data-testid={`resource-${title.toLowerCase().replace(/\s/g, "-")}`} className="feature-card panel" style={{ borderRight: "1px solid var(--border)", borderRadius: 14 }}>
            <div className="feature-icon"><Icon size={26} strokeWidth={1.8} /></div>
            <div className="feature-title">{title.toUpperCase()}</div>
            <div className="feature-desc">{desc}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
