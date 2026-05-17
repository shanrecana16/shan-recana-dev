import { useState } from "react";
import * as motion from "motion/react-client";

// ─── Section wrapper with scroll-triggered fade-in ────────────────────────────
export function Section({ id, children, t, style }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ padding: "64px 0", ...style }}
    >
      {children}
    </motion.section>
  );
}

// ─── Section heading with colored underline accent ────────────────────────────
export function SectionTitle({ children, t }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: "'Google Sans Display', 'Google Sans', sans-serif",
          fontSize: 28,
          fontWeight: 400,
          color: t.text,
          margin: 0,
          letterSpacing: "-0.3px",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          width: 32,
          height: 3,
          borderRadius: 99,
          background: t.accent,
          marginTop: 10,
        }}
      />
    </div>
  );
}

// ─── Hoverable card with lift animation ───────────────────────────────────────
export function Card({ children, t, style }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ y: hovered ? -2 : 0 }}
      transition={{ duration: 0.2 }}
      style={{
        background: t.card,
        border: `1px solid ${hovered ? t.accent + "60" : t.border}`,
        borderRadius: 16,
        padding: "28px 28px",
        boxShadow: hovered ? t.shadowHover : t.shadow,
        transition: "border-color 0.2s, box-shadow 0.2s",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
``