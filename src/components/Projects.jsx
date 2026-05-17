import * as motion from "motion/react-client";
import { Section, SectionTitle, Card } from "./UI";
import DATA from "../data/portfolio";

export default function Projects({ t }) {
  const colors = {
    accent: t.accentText,
    green: t.green,
    yellow: t.yellow,
    red: t.red,
  };
  const softColors = {
    accent: t.accentSoft,
    green: t.greenSoft,
    yellow: t.yellowSoft,
    red: t.redSoft,
  };

  return (
    <Section
      id="projects"
      t={t}
      style={{ background: t.surface, borderTop: `1px solid ${t.border}` }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionTitle t={t}>Projects</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {DATA.projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card
                t={t}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                  }}
                >
                  {/* Icon badge */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: softColors[proj.color],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      color: colors[proj.color],
                    }}
                  >
                    {proj.icon}
                  </div>

                  {/* External link */}
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: t.hint,
                      fontSize: 18,
                      textDecoration: "none",
                      lineHeight: 1,
                      padding: "6px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = t.accent)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = t.hint)}
                  >
                    ↗
                  </a>
                </div>

                <h3
                  style={{
                    fontFamily: "'Google Sans', sans-serif",
                    fontSize: 17,
                    fontWeight: 500,
                    color: t.text,
                    margin: "0 0 10px",
                  }}
                >
                  {proj.name}
                </h3>

                <p
                  style={{
                    fontFamily: "'Google Sans', sans-serif",
                    fontSize: 14,
                    color: t.muted,
                    lineHeight: 1.65,
                    margin: "0 0 20px",
                    flex: 1,
                  }}
                >
                  {proj.desc}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: t.surface,
                        color: t.hint,
                        padding: "4px 10px",
                        borderRadius: 6,
                        fontSize: 12,
                        fontFamily: "'Google Sans', sans-serif",
                        fontWeight: 500,
                        border: `1px solid ${t.border}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
