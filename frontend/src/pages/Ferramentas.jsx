import React, { useState } from "react";
import PageShell from "@/components/landing/PageShell";
import { Search, Terminal, ExternalLink } from "lucide-react";

const TOOLS = [
  { name: "Nmap", cat: "Recon", desc: "Network mapper para descoberta de hosts e serviços.", cmd: "nmap -sV -p- 10.10.10.10" },
  { name: "Burp Suite", cat: "Web", desc: "Proxy interceptador para testes em aplicações web.", cmd: "burp --project=target" },
  { name: "Metasploit", cat: "Exploit", desc: "Framework de exploração com payloads e auxiliares.", cmd: "msfconsole -q -r run.rc" },
  { name: "Wireshark", cat: "Network", desc: "Analisador de pacotes em tempo real.", cmd: "wireshark -i eth0 -k" },
  { name: "Hydra", cat: "Bruteforce", desc: "Brute force paralelizado para 50+ protocolos.", cmd: "hydra -L users.txt -P pass.txt ssh://host" },
  { name: "John the Ripper", cat: "Password", desc: "Cracker de senhas offline ultra-rápido.", cmd: "john --wordlist=rockyou.txt hash.txt" },
  { name: "Hashcat", cat: "Password", desc: "Cracker GPU-acelerado para hashes modernos.", cmd: "hashcat -m 1000 hash.txt rockyou.txt" },
  { name: "SQLmap", cat: "Web", desc: "Detecção e exploração automática de SQL Injection.", cmd: "sqlmap -u target --dbs --batch" },
  { name: "Gobuster", cat: "Recon", desc: "Fuzzer de diretórios, DNS e vhosts.", cmd: "gobuster dir -u target -w wordlist.txt" },
  { name: "BloodHound", cat: "AD", desc: "Mapeamento de relações em Active Directory.", cmd: "SharpHound.exe -c All" },
  { name: "Mimikatz", cat: "AD", desc: "Extração de credenciais em sistemas Windows.", cmd: "privilege::debug; sekurlsa::logonpasswords" },
  { name: "Aircrack-ng", cat: "Wireless", desc: "Suite de auditoria 802.11.", cmd: "aircrack-ng -w wordlist.txt capture.cap" },
];

const CATS = ["Todas", "Recon", "Web", "Exploit", "Network", "Bruteforce", "Password", "AD", "Wireless"];

export default function Ferramentas() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");

  const filtered = TOOLS.filter(t => {
    const matchCat = cat === "Todas" || t.cat === cat;
    const matchQ = t.name.toLowerCase().includes(q.toLowerCase()) || t.desc.toLowerCase().includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <PageShell
      eyebrow="Ferramentas"
      title="O arsenal completo, direto no navegador."
      lead="Mais de 50 ferramentas pré-configuradas em containers efêmeros. Lance, ataque, descarte. Sem instalação, sem pegada."
    >
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
        <div style={{ flex: 1, minWidth: 280, display: "flex", alignItems: "center", gap: 10,
                      border: "1px solid var(--border-2)", borderRadius: 12, padding: "10px 14px",
                      background: "rgba(57,255,20,0.03)" }}>
          <Search size={16} color="var(--neon)" />
          <input
            data-testid="tools-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar ferramenta..."
            style={{ flex: 1, background: "transparent", border: "none", outline: "none",
                     color: "#fff", fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}
          />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATS.map(c => (
            <button
              key={c}
              data-testid={`tool-cat-${c.toLowerCase()}`}
              onClick={() => setCat(c)}
              className={cat === c ? "btn-nav-primary" : "btn-nav"}
              style={{ padding: "8px 14px", fontSize: 12 }}
            >{c}</button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 16 }}>
        {filtered.map(t => (
          <div key={t.name} data-testid={`tool-${t.name.toLowerCase().replace(/\s/g, "-")}`} className="panel"
               style={{ padding: 22, borderRadius: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div>
                <h3 style={{ margin: 0, color: "#fff", fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 18 }}>
                  {t.name}
                </h3>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                               color: "var(--neon)", letterSpacing: "0.15em" }}>{t.cat.toUpperCase()}</span>
              </div>
              <Terminal size={20} color="var(--neon)" />
            </div>
            <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.5, marginTop: 12 }}>{t.desc}</p>
            <div className="terminal" style={{ marginTop: 14, fontSize: 11 }}>
              <div className="term-line">{t.cmd}</div>
            </div>
            <button data-testid={`launch-${t.name.toLowerCase().replace(/\s/g, "-")}`}
                    className="btn-ghost" style={{ marginTop: 14, padding: "10px 16px", fontSize: 13 }}>
              <ExternalLink size={14} /> Abrir no Lab
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ color: "var(--text-dim)", padding: 40, textAlign: "center" }}>
            Nenhuma ferramenta encontrada.
          </div>
        )}
      </div>
    </PageShell>
  );
}
