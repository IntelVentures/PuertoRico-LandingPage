"use client";

/* PELEP design-system primitives — ported from Carlos's approved design.
   All visual styling lives in CSS custom properties (see globals.css). */

import { useState, type CSSProperties, type ReactNode } from "react";

type Tone = "blue" | "green" | "gold" | "sky" | "neutral";

/* ---------------- Badge ---------------- */
export function Badge({
  tone = "blue",
  variant = "soft",
  children,
  style = {},
}: {
  tone?: Tone;
  variant?: "solid" | "soft";
  children: ReactNode;
  style?: CSSProperties;
}) {
  const tones: Record<string, Record<string, [string, string]>> = {
    blue: { solid: ["var(--blue-700)", "#fff"], soft: ["var(--blue-100)", "var(--blue-700)"] },
    green: { solid: ["var(--green-600)", "#fff"], soft: ["var(--green-100)", "var(--green-700)"] },
    gold: { solid: ["var(--gold-500)", "var(--blue-900)"], soft: ["var(--gold-200)", "var(--gold-700)"] },
    sky: { solid: ["var(--sky-300)", "var(--blue-800)"], soft: ["var(--sky-200)", "var(--blue-700)"] },
    neutral: { solid: ["var(--ink-700)", "#fff"], soft: ["var(--ink-100)", "var(--ink-700)"] },
  };
  const [bg, fg] = (tones[tone] || tones.blue)[variant] || tones.blue.soft;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: "12px",
        letterSpacing: "0.02em",
        lineHeight: 1,
        padding: "5px 10px",
        borderRadius: "var(--radius-pill)",
        background: bg,
        color: fg,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/* ---------------- Button ---------------- */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconRight = null,
  disabled = false,
  type = "button",
  children,
  style = {},
  onClick,
}: {
  variant?: "primary" | "secondary" | "gold" | "green" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  iconRight?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}) {
  const sizes = {
    sm: { padding: "8px 14px", fontSize: "13px", gap: "6px", radius: "var(--radius-sm)" },
    md: { padding: "11px 20px", fontSize: "15px", gap: "8px", radius: "var(--radius-md)" },
    lg: { padding: "15px 28px", fontSize: "16px", gap: "10px", radius: "var(--radius-md)" },
  } as const;
  const s = sizes[size] || sizes.md;
  const palettes: Record<string, CSSProperties> = {
    primary: { background: "var(--blue-700)", color: "#fff", border: "1px solid var(--blue-700)" },
    secondary: { background: "transparent", color: "var(--blue-700)", border: "1.5px solid var(--blue-700)" },
    gold: { background: "var(--gold-500)", color: "var(--blue-900)", border: "1px solid var(--gold-500)" },
    green: { background: "var(--green-600)", color: "#fff", border: "1px solid var(--green-600)" },
    ghost: { background: "transparent", color: "var(--blue-700)", border: "1px solid transparent" },
  };
  const p = palettes[variant] || palettes.primary;
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: "0.01em",
    padding: s.padding,
    borderRadius: s.radius,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    textDecoration: "none",
    transition:
      "filter var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    ...p,
    ...style,
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.filter = "brightness(0.92)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "none";
        e.currentTarget.style.transform = "none";
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "translateY(1px)";
      }}
      onMouseUp={(e) => {
        if (!disabled) e.currentTarget.style.transform = "none";
      }}
    >
      {children}
      {iconRight}
    </button>
  );
}

/* ---------------- Stat ---------------- */
export function Stat({
  value,
  label,
  sublabel,
  tone = "blue",
}: {
  value: string;
  label: string;
  sublabel?: string;
  tone?: "blue" | "green" | "gold";
}) {
  const colors = { blue: "var(--blue-700)", green: "var(--green-600)", gold: "var(--gold-700)" };
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(34px, 4vw, 46px)",
          lineHeight: 1,
          color: colors[tone],
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </div>
      <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-strong)", marginTop: 10 }}>
        {label}
      </div>
      {sublabel && (
        <div style={{ fontSize: 13.5, color: "var(--text-muted)", marginTop: 4, lineHeight: 1.45 }}>
          {sublabel}
        </div>
      )}
    </div>
  );
}

/* ---------------- Card ---------------- */
export function Card({
  accent = "none",
  elevation = "sm",
  padding = "lg",
  interactive = false,
  children,
  style = {},
}: {
  accent?: "none" | "gold" | "green" | "blue" | "tricolor";
  elevation?: "none" | "xs" | "sm" | "md" | "lg";
  padding?: "none" | "sm" | "md" | "lg";
  interactive?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const pads = { none: 0, sm: "16px", md: "22px", lg: "28px" };
  const shadows = {
    none: "none",
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
  };
  const accents: Record<string, string> = {
    gold: "var(--gold-500)",
    green: "var(--green-600)",
    blue: "var(--blue-700)",
  };
  const topBorder: CSSProperties =
    accent === "tricolor"
      ? {
          borderTop: "3px solid transparent",
          borderImage:
            "linear-gradient(90deg, var(--pelep-gold) 0 33.33%, var(--pelep-green) 33.33% 66.66%, var(--pelep-blue) 66.66%) 1",
        }
      : accents[accent]
        ? { borderTop: `3px solid ${accents[accent]}` }
        : {};
  const base: CSSProperties = {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "var(--radius-lg)",
    boxShadow: shadows[elevation] || shadows.sm,
    padding: pads[padding] ?? pads.lg,
    transition:
      "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
    ...topBorder,
    ...style,
  };
  return (
    <div
      style={base}
      onMouseEnter={
        interactive
          ? (e) => {
              e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }
          : undefined
      }
      onMouseLeave={
        interactive
          ? (e) => {
              e.currentTarget.style.boxShadow = shadows[elevation] || shadows.sm;
              e.currentTarget.style.transform = "none";
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

/* ---------------- Callout ---------------- */
export function Callout({
  tone = "sky",
  title,
  children,
  style = {},
}: {
  tone?: "sky" | "blue" | "green" | "gold" | "note";
  title?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const tones: Record<string, { bg: string; bar: string; fg: string }> = {
    sky: { bg: "var(--sky-200)", bar: "var(--blue-700)", fg: "var(--blue-800)" },
    blue: { bg: "var(--blue-700)", bar: "var(--gold-500)", fg: "#fff" },
    green: { bg: "var(--green-100)", bar: "var(--green-600)", fg: "var(--green-900)" },
    gold: { bg: "var(--gold-100)", bar: "var(--gold-600)", fg: "var(--blue-900)" },
    note: { bg: "var(--ink-50)", bar: "var(--ink-400)", fg: "var(--ink-700)" },
  };
  const t = tones[tone] || tones.sky;
  return (
    <div
      style={{
        display: "flex",
        gap: "14px",
        background: t.bg,
        color: t.fg,
        borderLeft: `4px solid ${t.bar}`,
        borderRadius: "var(--radius-md)",
        padding: "16px 18px",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <div>
        {title && (
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "15px",
              marginBottom: "4px",
            }}
          >
            {title}
          </div>
        )}
        <div style={{ fontSize: "14px", lineHeight: 1.55, opacity: tone === "blue" ? 0.92 : 1 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Input ---------------- */
export function Input({
  label,
  required = false,
  style = {},
  ...rest
}: {
  label?: string;
  required?: boolean;
  style?: CSSProperties;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  const inputId = label ? label.toLowerCase().replace(/\s+/g, "-") : undefined;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-body)", ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontWeight: 600, fontSize: "13px", color: "var(--text-body)" }}>
          {label}
          {required && <span style={{ color: "var(--status-danger)", marginLeft: 3 }}>*</span>}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fff",
          border: `1.5px solid ${focused ? "var(--blue-500)" : "var(--border-default)"}`,
          borderRadius: "var(--radius-md)",
          padding: "0 12px",
          boxShadow: focused ? "var(--shadow-focus)" : "none",
          transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
        }}
      >
        <input
          id={inputId}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--text-body)",
            padding: "11px 0",
            width: "100%",
          }}
          {...rest}
        />
      </div>
    </div>
  );
}

/* ---------------- Select ---------------- */
export function Select({
  label,
  required = false,
  options = [],
  style = {},
  ...rest
}: {
  label?: string;
  required?: boolean;
  options?: string[];
  style?: CSSProperties;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const [focused, setFocused] = useState(false);
  const inputId = label ? label.toLowerCase().replace(/\s+/g, "-") : undefined;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-body)", ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontWeight: 600, fontSize: "13px", color: "var(--text-body)" }}>
          {label}
          {required && <span style={{ color: "var(--status-danger)", marginLeft: 3 }}>*</span>}
        </label>
      )}
      <select
        id={inputId}
        required={required}
        defaultValue=""
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          appearance: "none",
          background:
            "#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%234d6175' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\") no-repeat right 14px center",
          border: `1.5px solid ${focused ? "var(--blue-500)" : "var(--border-default)"}`,
          borderRadius: "var(--radius-md)",
          padding: "11px 36px 11px 12px",
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          color: "var(--text-body)",
          boxShadow: focused ? "var(--shadow-focus)" : "none",
          transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
          cursor: "pointer",
        }}
        {...rest}
      >
        <option value="" disabled>
          Seleccione…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ---------------- SectionHeading ---------------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
  rule = true,
  style = {},
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  align?: "left" | "center";
  onDark?: boolean;
  rule?: boolean;
  style?: CSSProperties;
}) {
  const titleColor = onDark ? "#fff" : "var(--text-strong)";
  const introColor = onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  const eyebrowColor = onDark ? "var(--gold-400)" : "var(--accent-green)";
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === "center" ? "640px" : "none",
        marginLeft: align === "center" ? "auto" : 0,
        marginRight: align === "center" ? "auto" : 0,
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      {rule && (
        <div
          style={{
            height: 4,
            width: 56,
            borderRadius: 999,
            margin: align === "center" ? "0 auto 16px" : "0 0 16px",
            background:
              "linear-gradient(90deg, var(--pelep-gold) 0 33.33%, var(--pelep-green) 33.33% 66.66%, var(--pelep-blue) 66.66%)",
          }}
        />
      )}
      {eyebrow && (
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontSize: "12px",
            color: eyebrowColor,
            marginBottom: "10px",
          }}
        >
          {eyebrow}
        </div>
      )}
      {title && (
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(26px, 3.4vw, 40px)",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: titleColor,
            margin: 0,
          }}
        >
          {title}
        </h2>
      )}
      {intro && (
        <p style={{ fontSize: "17px", lineHeight: 1.6, color: introColor, marginTop: "14px", marginBottom: 0 }}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------------- PhotoSlot (real image, or dashed placeholder) ---------------- */
export function PhotoSlot({
  label,
  h = 280,
  src,
  style = {},
}: {
  label: string;
  h?: number;
  src?: string;
  style?: CSSProperties;
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={label}
        loading="lazy"
        style={{
          width: "100%",
          height: h,
          objectFit: "cover",
          display: "block",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-md)",
        }}
      />
    );
  }
  return (
    <div
      style={{
        height: h,
        borderRadius: "var(--radius-lg)",
        background: "linear-gradient(135deg, var(--sky-300), var(--sky-200))",
        border: "1px dashed var(--blue-300)",
        display: "flex",
        alignItems: "flex-end",
        padding: 16,
        color: "var(--blue-600)",
        fontFamily: "var(--font-body)",
        fontStyle: "italic",
        fontSize: 13,
        ...style,
      }}
    >
      <span>Fotografía: {label}</span>
    </div>
  );
}
