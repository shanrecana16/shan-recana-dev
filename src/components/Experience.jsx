import * as motion from "motion/react-client";
import { Section, SectionTitle } from "./UI";
import DATA from "../data/portfolio";

export default function Experience({ t }) {
  const colors = {
    accent: t.accent,
    green: t.green,
    yellow: t.yellow,
  };
  const softColors = {
    accent: t.accentSoft,
    green: t.greenSoft,
    yellow: t.yellowSoft,
  };
  const textColors = {
    accent: t.accentText,
    green: t.green,
    yellow: t.yellow,
  };

  return (
    <Section
      id="experience"
      t={t}
      style={{ borderTop: `1px solid ${t.border}` }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionTitle t={t}>Experience</SectionTitle>

        <div style={{ position: "relative" }}>
          {/* Vertical timeline line */}
          <div
            style={{
              position: "absolute",
              left: 14,
              top: 0,
              bottom: 0,
              width: 1.5,
              background: t.border,
            }}
          />

          {DATA.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ display: "flex", gap: 32, marginBottom: 40 }}
            >
              {/* Timeline dot */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: softColors[exp.color],
                    border: `2px solid ${colors[exp.color]}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: colors[exp.color],
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingTop: 2 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 4,
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Google Sans', sans-serif",
                        fontSize: 18,
                        fontWeight: 500,
                        color: t.text,
                        margin: "0 0 2px",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Google Sans', sans-serif",
                        fontSize: 15,
                        color: textColors[exp.color],
                        fontWeight: 500,
                      }}
                    >
                      {exp.company}
                    </span>
                  </div>

                  {/* Period badge */}
                  <span
                    style={{
                      background: softColors[exp.color],
                      color: textColors[exp.color],
                      padding: "4px 14px",
                      borderRadius: 99,
                      fontSize: 12,
                      fontFamily: "'Google Sans', sans-serif",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "'Google Sans', sans-serif",
                    fontSize: 15,
                    color: t.muted,
                    lineHeight: 1.65,
                    margin: "10px 0 0",
                  }}
                >
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
