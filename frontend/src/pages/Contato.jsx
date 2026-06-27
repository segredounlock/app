import React, { useState } from "react";
import axios from "axios";
import PageShell from "@/components/landing/PageShell";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contato() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ kind: null, msg: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ kind: null, msg: "" });
    try {
      await axios.post(`${API}/contact`, form);
      setStatus({ kind: "ok", msg: "Mensagem recebida. Vamos responder em até 48h." });
      setForm({ name: "", email: "", message: "" });
    } catch (ex) {
      setStatus({ kind: "err", msg: ex?.response?.data?.detail || "Falha ao enviar. Tente novamente." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell
      eyebrow="Contato"
      title="Vamos conversar. Ética, sempre."
      lead="Imprensa, parcerias, vulnerabilidades responsáveis ou simplesmente uma ideia maluca? A gente lê tudo."
    >
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32 }} className="hero-grid">
        <form data-testid="contact-form" onSubmit={submit} className="panel"
              style={{ padding: 32, borderRadius: 18, display: "flex", flexDirection: "column", gap: 14 }}>
          <label className="modal-input">
            <input data-testid="contact-name" required minLength={2} maxLength={80}
                   value={form.name} onChange={update("name")} placeholder="Seu nome" />
          </label>
          <label className="modal-input">
            <Mail size={16} color="var(--neon)" />
            <input data-testid="contact-email" type="email" required
                   value={form.email} onChange={update("email")} placeholder="seu@email.com" />
          </label>
          <label className="modal-input" style={{ alignItems: "flex-start" }}>
            <MessageSquare size={16} color="var(--neon)" style={{ marginTop: 6 }} />
            <textarea data-testid="contact-message" required minLength={4} rows={6}
                      value={form.message} onChange={update("message")}
                      placeholder="Sua mensagem..."
                      style={{ flex: 1, background: "transparent", border: "none", outline: "none",
                               color: "#fff", fontFamily: "'JetBrains Mono', monospace",
                               fontSize: 13, resize: "vertical" }} />
          </label>
          {status.msg && (
            <div data-testid="contact-status"
                 className={status.kind === "ok" ? "modal-error" : "modal-error"}
                 style={status.kind === "ok"
                   ? { background: "rgba(57,255,20,0.06)", borderColor: "rgba(57,255,20,0.35)", color: "var(--neon)" }
                   : {}}>{status.msg}</div>
          )}
          <button data-testid="contact-submit" type="submit" disabled={loading}
                  className="btn-primary" style={{ justifyContent: "center", marginTop: 6 }}>
            <Send size={16} /> {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>

        <aside style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <ContactInfo Icon={Mail} title="E-mail" value="contato@centraldark.io" />
          <ContactInfo Icon={MessageSquare} title="Discord" value="discord.gg/centraldark" />
          <ContactInfo Icon={MapPin} title="Base de Operações" value="São Paulo, Brasil" />
          <div className="panel" style={{ padding: 22, borderRadius: 14 }}>
            <div className="terminal" style={{ background: "transparent", border: "none", boxShadow: "none", padding: 0 }}>
              <div className="term-line">SLA de resposta &lt; 48h</div>
              <div className="term-line">PGP key disponível mediante solicitação</div>
              <div className="term-line">Bug bounty privado — pergunte-nos</div>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function ContactInfo({ Icon, title, value }) {
  return (
    <div className="panel" style={{ padding: 22, borderRadius: 14, display: "flex", gap: 14, alignItems: "center" }}>
      <div className="feature-icon" style={{ marginBottom: 0 }}><Icon size={22} /></div>
      <div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                      letterSpacing: "0.2em", color: "var(--neon)" }}>{title.toUpperCase()}</div>
        <div style={{ color: "#fff", marginTop: 4, fontFamily: "'JetBrains Mono', monospace", fontSize: 14 }}>{value}</div>
      </div>
    </div>
  );
}
