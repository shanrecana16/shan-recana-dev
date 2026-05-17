import { useState } from "react";
import * as motion from "motion/react-client";
import { Section, SectionTitle } from "./UI";
import DATA from "../data/portfolio";

const colors = {
  accent: (t) => ({ bg: t.accentSoft, text: t.accentText, border: t.accent }),
  green:  (t) => ({ bg: t.greenSoft,  text: t.green,      border: t.green  }),
  yellow: (t) => ({ bg: t.yellowSoft, text: t.yellow,     border: t.yellow }),
  red:    (t) => ({ bg: t.redSoft,    text: t.red,        border: t.red    }),
};

// ─── PDF Modal ───────────────────────────────────────────────────────────────
function PdfModal({ cert, t, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1,    opacity: 1, y: 0  }}
        exit={{    scale: 0.92, opacity: 0, y: 24 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: t.card,
          borderRadius: 20,
          width: "100%",
          maxWidth: 860,
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
        }}
      >
        {/* Modal header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: `1px solid ${t.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Google Sans', sans-serif",
                fontSize: 17,
                fontWeight: 500,
                color: t.text,
                margin: 0,
              }}
            >
              {cert.name}
            </h3>
            <p
              style={{
                fontFamily: "'Google Sans', sans-serif",
                fontSize: 13,
                color: t.muted,
                margin: "4px 0 0",
              }}
            >
              {cert.issuer} · {cert.year}
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* Download button */}
            <a
              href={cert.pdf}
              download
              style={{
                background: t.accentSoft,
                color: t.accentText,
                border: "none",
                borderRadius: 99,
                padding: "8px 18px",
                fontSize: 13,
                fontFamily: "'Google Sans', sans-serif",
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ↓ Download
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              style={{
                background: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: "50%",
                width: 36,
                height: 36,
                cursor: "pointer",
                fontSize: 18,
                color: t.muted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* PDF embed */}
        <div style={{ flex: 1, overflow: "hidden", minHeight: 0 }}>
          <iframe
            src={cert.pdf}
            title={cert.name}
            style={{ width: "100%", height: "100%", border: "none", minHeight: 520 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Cert Card ────────────────────────────────────────────────────────────────
function CertCard({ cert, index, t, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const c = (colors[cert.color] || colors.accent)(t);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ y: hovered ? -2 : 0 }}
      style={{
        background: t.card,
        border: `1px solid ${hovered ? c.border + "80" : t.border}`,
        borderRadius: 16,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        boxShadow: hovered ? t.shadowHover : t.shadow,
        transition: "border-color 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onClick={() => onOpen(cert)}
    >
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        {/* Icon badge */}
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 12,
            background: c.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          {cert.icon || "🎓"}
        </div>

        {/* Year badge */}
        <span
          style={{
            background: c.bg,
            color: c.text,
            padding: "4px 12px",
            borderRadius: 99,
            fontSize: 12,
            fontFamily: "'Google Sans', sans-serif",
            fontWeight: 500,
          }}
        >
          {cert.year}
        </span>
      </div>

      {/* Info */}
      <div>
        <h3
          style={{
            fontFamily: "'Google Sans', sans-serif",
            fontSize: 16,
            fontWeight: 500,
            color: t.text,
            margin: "0 0 6px",
            lineHeight: 1.3,
          }}
        >
          {cert.name}
        </h3>
        <p
          style={{
            fontFamily: "'Google Sans', sans-serif",
            fontSize: 13,
            color: t.muted,
            margin: 0,
          }}
        >
          {cert.issuer}
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {cert.credentialId && (
          <span
            style={{
              fontFamily: "'Google Sans', sans-serif",
              fontSize: 11,
              color: t.hint,
              letterSpacing: "0.3px",
            }}
          >
            ID: {cert.credentialId}
          </span>
        )}
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "'Google Sans', sans-serif",
            fontSize: 13,
            color: c.text,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          View PDF ↗
        </span>
      </div>
    </motion.div>
  );
}

// ─── Certifications Section ───────────────────────────────────────────────────
export default function Certifications({ t }) {
  const [open, setOpen] = useState(null);

  if (!DATA.certifications?.length) return null;

  return (
    <>
      <Section
        id="certifications"
        t={t}
        style={{ borderTop: `1px solid ${t.border}` }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <SectionTitle t={t}>Certifications</SectionTitle>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            {DATA.certifications.map((cert, i) => (
              <CertCard
                key={cert.name}
                cert={cert}
                index={i}
                t={t}
                onOpen={setOpen}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Modal — rendered outside section so it overlays everything */}
      {open && <PdfModal cert={open} t={t} onClose={() => setOpen(null)} />}
    </>
  );
}
