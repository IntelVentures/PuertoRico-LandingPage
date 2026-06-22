"use client";

/* PELEP marketing site — sections ported from Carlos's approved design.
   The contact form is wired to the existing /api/contact backend. */

import { useState } from "react";
import { Badge, Button, Card, Callout, Input, Select, SectionHeading, Stat, PhotoSlot } from "./ui";

const EMBLEM = "/pelep-emblem.png";

function scrollToId(id: string) {
  if (typeof document !== "undefined") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ---------------- Header ---------------- */
export function SiteHeader() {
  const links: [string, string][] = [
    ["#programa", "El Programa"],
    ["#como", "Cómo Funciona"],
    ["#beneficios", "Beneficios"],
    ["#municipios", "Municipios"],
    ["#contacto", "Contacto"],
  ];
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "saturate(180%) blur(10px)",
        WebkitBackdropFilter: "saturate(180%) blur(10px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "12px 28px", display: "flex", alignItems: "center", gap: 24 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={EMBLEM} alt="PELEP" style={{ height: 42 }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, color: "var(--blue-700)", letterSpacing: "0.01em" }}>
            PELEP
          </span>
        </a>
        <nav className="pelep-nav" style={{ marginLeft: "auto", display: "flex", gap: 26, alignItems: "center" }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14.5, color: "var(--ink-700)", textDecoration: "none" }}>
              {label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => scrollToId("contacto")}
          style={{
            marginLeft: "auto",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 14.5,
            background: "var(--gold-500)",
            color: "var(--blue-900)",
            border: "none",
            padding: "10px 18px",
            borderRadius: "var(--radius-md)",
            cursor: "pointer",
          }}
        >
          Solicitar reunión
        </button>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <section id="top" style={{ background: "linear-gradient(180deg, var(--sky-200) 0%, #fff 100%)" }}>
      <div className="pelep-hero-grid" style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 28px 64px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
            <Badge tone="green">Energía limpia</Badge>
            <Badge tone="sky">Resiliencia</Badge>
            <Badge tone="gold" variant="soft">Desarrollo económico</Badge>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--blue-700)", margin: 0 }}>
            Impulsando la resiliencia y economía de Puerto&nbsp;Rico
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.6, color: "var(--ink-700)", marginTop: 20, maxWidth: 520 }}>
            PELEP es un modelo de financiamiento que permite a propietarios y municipios modernizar su infraestructura energética y de resiliencia, movilizando capital privado.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Button variant="gold" size="lg" onClick={() => scrollToId("contacto")}>Solicitar una reunión</Button>
            <Button variant="secondary" size="lg" iconRight={<span>→</span>} onClick={() => scrollToId("programa")}>Conocer el programa</Button>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-subtle)", marginTop: 22 }}>
            Programa voluntario para propiedades y proyectos elegibles, sujeto a revisión legal y administrativa.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#fff", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", padding: 28, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={EMBLEM} alt="PELEP" style={{ height: 130 }} />
            <div className="pelep-tricolor-rule" style={{ margin: "18px 0 14px" }} />
            <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", color: "var(--blue-600)", margin: 0, fontSize: 15 }}>
              Un programa que impulsa la resiliencia y economía de Puerto Rico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stat band ---------------- */
export function StatBand() {
  const stats: [string, string, string, "blue" | "green" | "gold"][] = [
    ["$0", "Subsidios públicos requeridos", "Movilización de capital privado", "green"],
    ["6", "Tipos de mejoras elegibles", "Solar, baterías, eficiencia y más", "blue"],
    ["100%", "Participación voluntaria", "Para propiedades elegibles", "gold"],
    ["78", "Municipios en Puerto Rico", "Marco escalable isla-wide", "blue"],
  ];
  return (
    <section style={{ background: "#fff", borderTop: "1px solid var(--ink-100)", borderBottom: "1px solid var(--ink-100)" }}>
      <div className="pelep-grid-4" style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 28px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
        {stats.map(([v, l, s, t]) => (
          <Stat key={l} value={v} label={l} sublabel={s} tone={t} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- ¿Qué es PELEP? ---------------- */
export function WhatIs() {
  const features: [string, "green" | "gold" | "blue"][] = [
    ["Solar y baterías", "green"],
    ["Eficiencia energética", "gold"],
    ["Endurecimiento ante huracanes", "blue"],
    ["Conservación de agua", "green"],
  ];
  return (
    <section id="programa" style={{ background: "#fff" }}>
      <div className="pelep-split" style={{ maxWidth: 1180, margin: "0 auto", padding: "76px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <PhotoSlot label="instalación solar en comunidad de Puerto Rico" h={340} />
        <div>
          <SectionHeading
            eyebrow="¿Qué es el PELEP?"
            title="Un marco de financiamiento para infraestructura resiliente"
            intro="PELEP (Programa de Energía Limpia con Evaluación de Propiedades) es un modelo inspirado en programas PACE de los Estados Unidos. Permite financiar mejoras elegibles de energía y resiliencia a través de una estructura de repago vinculada a la propiedad."
          />
          <div className="pelep-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 26 }}>
            {features.map(([t, tone]) => (
              <Card key={t} accent={tone} elevation="sm" padding="md">
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)" }}>{t}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Cómo funciona ---------------- */
export function HowItWorks() {
  const steps: [string, string][] = [
    ["El propietario solicita", "Un propietario elegible aplica para financiar una mejora."],
    ["Se evalúa la propiedad", "Se revisa la propiedad y se aprueban los fondos elegibles."],
    ["El contratista ejecuta", "Un contratista aprobado realiza la obra certificada."],
    ["Se incorpora el repago", "El repago se estructura mediante la contribución vinculada a la propiedad."],
    ["Se reembolsa en el tiempo", "Los fondos se reembolsan a través de los años, de forma transparente."],
  ];
  return (
    <section id="como" style={{ background: "var(--sky-200)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "76px 28px" }}>
        <SectionHeading align="center" eyebrow="Cómo funciona" title="Cinco pasos, una plataforma repetible" />
        <div className="pelep-grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 44 }}>
          {steps.map(([t, d], i) => (
            <Card key={t} elevation="sm" padding="md" style={{ background: "#fff" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--blue-700)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, marginBottom: 14 }}>{i + 1}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)", marginBottom: 6 }}>{t}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)" }}>{d}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Beneficios ---------------- */
export function Benefits() {
  const items: [string, string, "green" | "gold" | "blue"][] = [
    ["Resiliencia energética", "Endurece hogares, edificios y comunidades ante huracanes e inestabilidad de la red.", "green"],
    ["Estimula la economía local", "Apoya a contratistas locales y crea empleos en cada municipio.", "gold"],
    ["Aumenta el valor de las propiedades", "Las mejoras modernizan y revalorizan el inventario construido.", "blue"],
    ["Atrae inversión privada", "Moviliza capital privado sin depender de subsidios públicos.", "green"],
    ["Marco administrativo escalable", "Estándares consistentes, reglas claras y supervisión sólida.", "blue"],
    ["Protección al consumidor", "Reglas de elegibilidad, divulgaciones y verificación de proyectos.", "gold"],
  ];
  return (
    <section id="beneficios" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "76px 28px" }}>
        <SectionHeading eyebrow="Beneficios para Puerto Rico" title="Valor público, no solo financiamiento" intro="PELEP convierte prioridades de política en proyectos ejecutables, con beneficios medibles para municipios, propietarios y comunidades." />
        <div className="pelep-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 40 }}>
          {items.map(([t, d, tone]) => (
            <Card key={t} accent={tone} elevation="sm" interactive>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--text-strong)", marginBottom: 8 }}>{t}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-muted)" }}>{d}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Municipios (navy band) ---------------- */
export function Municipios() {
  return (
    <section id="municipios" style={{ background: "var(--blue-700)", color: "#fff" }}>
      <div className="pelep-split" style={{ maxWidth: 1180, margin: "0 auto", padding: "76px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <SectionHeading
            onDark
            eyebrow="Para municipios"
            title="Una herramienta para la recuperación y el desarrollo sostenible"
            intro="PELEP ofrece a los municipios un marco escalable para apoyar la resiliencia, el desarrollo económico y el acceso a capital de sus constituyentes."
          />
          <div style={{ marginTop: 28 }}>
            <Callout tone="blue" title="Colaboración público-privada">
              El gobierno habilita el marco; el capital privado y los participantes aprobados ayudan a ejecutar las mejoras elegibles.
            </Callout>
          </div>
        </div>
        <PhotoSlot
          label="alcaldía / edificio municipal de Puerto Rico"
          h={320}
          style={{ background: "rgba(255,255,255,0.08)", border: "1px dashed rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.8)" }}
        />
      </div>
    </section>
  );
}

/* ---------------- Contacto (wired to /api/contact) ---------------- */
export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nombre = String(fd.get("nombre") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const rol = String(fd.get("rol") || "").trim();
    const municipio = String(fd.get("municipio") || "").trim();
    const telefono = String(fd.get("telefono") || "").trim();

    if (!nombre || !email || !rol || !municipio) {
      setError("Por favor complete los campos requeridos.");
      return;
    }

    // The backend stores nombre / email / comentarios. Fold the extra
    // fields into comentarios so no Google Apps Script change is needed.
    const comentarios = [
      `Rol: ${rol}`,
      `Municipio o agencia: ${municipio}`,
      telefono ? `Teléfono: ${telefono}` : null,
      "",
      "Solicitud de reunión enviada desde pelep.org",
    ]
      .filter((l) => l !== null)
      .join("\n");

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, comentarios }),
      });
      const json = await res.json();
      if (json.message === "success") {
        setSent(true);
      } else {
        setError(json.error || "Hubo un error al enviar la solicitud.");
      }
    } catch {
      setError("Error de conexión. Inténtelo nuevamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" style={{ background: "var(--ink-50)" }}>
      <div className="pelep-split" style={{ maxWidth: 1180, margin: "0 auto", padding: "76px 28px", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "start" }}>
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Solicite una reunión introductoria"
            intro="Cuéntenos sobre su municipio o agencia. Coordinaremos una conversación breve para explicar cómo PELEP puede apoyar sus prioridades."
          />
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <Callout tone="note">El objetivo de este primer contacto es coordinar una reunión, no cerrar un acuerdo.</Callout>
          </div>
        </div>
        <Card accent="tricolor" elevation="md" padding="lg">
          {sent ? (
            <div style={{ textAlign: "center", padding: "28px 8px" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--green-100)", color: "var(--green-700)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 26 }}>✓</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--text-strong)" }}>Solicitud recibida</div>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", marginTop: 8 }}>
                Gracias. El equipo de relaciones de gobierno de PELEP le contactará para coordinar.
              </p>
              <div style={{ marginTop: 16 }}>
                <Button variant="secondary" onClick={() => setSent(false)}>Enviar otra</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pelep-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Input label="Nombre completo" name="nombre" placeholder="Nombre y apellido" required />
              <Select label="Rol" name="rol" required options={["Alcalde / Ejecutivo municipal", "Director de Finanzas", "Asesor Legal", "Desarrollo Económico", "Legislatura", "Otro"]} />
              <Input label="Municipio o agencia" name="municipio" placeholder="Ej. Municipio de Caguas" required style={{ gridColumn: "1 / -1" }} />
              <Input label="Correo electrónico" name="email" type="email" placeholder="gobierno@municipio.pr" required />
              <Input label="Teléfono" name="telefono" placeholder="787-000-0000" />
              {error && (
                <div style={{ gridColumn: "1 / -1", color: "var(--status-danger)", fontFamily: "var(--font-body)", fontSize: 13.5 }}>
                  {error}
                </div>
              )}
              <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-subtle)" }}>Sujeto a revisión legal y administrativa.</span>
                <Button variant="gold" type="submit" size="lg" disabled={loading}>
                  {loading ? "Enviando…" : "Solicitar reunión"}
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function SiteFooter() {
  return (
    <footer style={{ background: "var(--blue-900)", color: "rgba(255,255,255,0.82)" }}>
      <div style={{ height: 4, background: "linear-gradient(90deg, var(--pelep-gold) 0 33.33%, var(--pelep-green) 33.33% 66.66%, var(--pelep-blue) 66.66%)" }} />
      <div className="pelep-split" style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 28px 28px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={EMBLEM} alt="PELEP" style={{ height: 44 }} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, color: "#fff" }}>PELEP</span>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 14, maxWidth: 320, lineHeight: 1.5 }}>
            Impulsando la resiliencia y economía de Puerto Rico.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 14 }}>Programa</div>
          {[
            ["#programa", "El Programa"],
            ["#como", "Cómo Funciona"],
            ["#beneficios", "Beneficios"],
            ["#municipios", "Municipios"],
          ].map(([href, l]) => (
            <a key={l} href={href} style={{ display: "block", color: "rgba(255,255,255,0.82)", textDecoration: "none", fontSize: 14, marginBottom: 8, fontFamily: "var(--font-body)" }}>{l}</a>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 14 }}>Contacto</div>
          <a href="mailto:Gobierno@pelep.org" style={{ display: "block", color: "rgba(255,255,255,0.82)", textDecoration: "none", fontSize: 14, marginBottom: 8, fontFamily: "var(--font-body)" }}>Gobierno@pelep.org</a>
          <a href="#top" style={{ display: "block", color: "rgba(255,255,255,0.82)", textDecoration: "none", fontSize: 14, marginBottom: 8, fontFamily: "var(--font-body)" }}>www.PELEP.org</a>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 28px 8px", borderTop: "1px solid rgba(255,255,255,0.12)", fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
        PELEP es un concepto de plataforma de financiamiento de infraestructura. Participación voluntaria para propiedades y proyectos elegibles. Cualquier implementación requeriría revisión legal, municipal y administrativa. Este material es informativo y no constituye asesoría legal o financiera.
      </div>
    </footer>
  );
}
