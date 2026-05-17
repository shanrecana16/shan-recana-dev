import * as motion from "motion/react-client";
import { Section, SectionTitle } from "./UI";
import DATA from "../data/portfolio";
import { useIsMobile } from "../hooks/useMediaQuery";

const INFO_ROWS = [
  { label: "Location", key: "location" },
  { label: "Email",    key: "email"    },
  { label: "GitHub",   key: "github"   },
  { label: "LinkedIn", key: "linkedin" },
];

export default function About({ t }) {
  const isMobile = useIsMobile();
  return (
    <Section id="about" t={t} style={{ borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "0 20px" : "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 64, alignItems: "center" }}>
          <div>
            <SectionTitle t={t}>About me</SectionTitle>
            <p style={{ fontFamily: "'Google Sans', sans-serif", fontSize: 16, color: t.muted, lineHeight: 1.75, margin: "0 0 28px" }}>{DATA.about}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {INFO_ROWS.map(({ label, key }) => (
                <div key={key} style={{ background: t.surface, borderRadius: 12, padding: "14px 16px" }}>
                  <div style={{ fontSize: 10, color: t.hint, fontFamily: "'Google Sans', sans-serif", fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 12, color: t.text, fontFamily: "'Google Sans', sans-serif", fontWeight: 500, wordBreak: "break-all" }}>{DATA[key]}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {DATA.tools.map((tool, i) => (
                <motion.span key={tool} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  style={{ background: t.accentSoft, color: t.accentText, padding: "8px 14px", borderRadius: 99, fontSize: 13, fontFamily: "'Google Sans', sans-serif", fontWeight: 500 }}>
                  {tool}
                </motion.span>
              ))}
            </div>
            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {DATA.stats.map(({ number, label }) => (
                <div key={label} style={{ textAlign: "center", padding: "18px 8px", background: t.surface, borderRadius: 16 }}>
                  <div style={{ fontSize: 24, fontWeight: 400, color: t.accent, fontFamily: "'Google Sans Display', sans-serif", letterSpacing: "-1px" }}>{number}</div>
                  <div style={{ fontSize: 11, color: t.muted, fontFamily: "'Google Sans', sans-serif", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}