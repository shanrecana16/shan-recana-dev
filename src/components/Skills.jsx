import * as motion from "motion/react-client";
import { Section, SectionTitle } from "./UI";
import DATA from "../data/portfolio";

const dotColors = {
  accent: (t) => ({ bg: t.accentSoft, dot: t.accent, text: t.accentText }),
  green:  (t) => ({ bg: t.greenSoft,  dot: t.green,  text: t.green       }),
  yellow: (t) => ({ bg: t.yellowSoft, dot: t.yellow, text: t.yellow      }),
};

function SkillCard({ skill, index, t }) {
  const { bg, dot, text } = (dotColors[skill.color] || dotColors.accent)(t);

  // Count how many projects mention this skill (by tag match, case-insensitive)
  const relatedProjects = DATA.projects.filter((p) =>
    p.tags.some((tag) =>
      tag.toLowerCase().includes(skill.name.split(" ")[0].toLowerCase())
    )
  );
  const projectCount = relatedProjects.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: t.card,
        border: `1px solid ${t.border}`,
        borderRadius: 16,
        padding: "22px 24px",
        display: "flex",
        alignItems: "center",
        gap: 18,
      }}
    >
      {/* Color dot */}
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 12,
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: dot,
          }}
        />
      </div>

      {/* Name */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: "'Google Sans', sans-serif",
            fontSize: 15,
            fontWeight: 500,
            color: t.text,
          }}
        >
          {skill.name}
        </div>
        {projectCount > 0 && (
          <div
            style={{
              fontFamily: "'Google Sans', sans-serif",
              fontSize: 12,
              color: t.hint,
              marginTop: 3,
            }}
          >
            {projectCount} project{projectCount !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      {/* Project count badge */}
      <div
        style={{
          background: bg,
          color: text,
          fontFamily: "'Google Sans', sans-serif",
          fontSize: 13,
          fontWeight: 500,
          padding: "5px 12px",
          borderRadius: 99,
          whiteSpace: "nowrap",
        }}
      >
        {projectCount > 0
          ? `${projectCount} project${projectCount !== 1 ? "s" : ""}`
          : "Core skill"}
      </div>
    </motion.div>
  );
}

export default function Skills({ t }) {
  return (
    <Section id="skills" t={t} style={{ background: t.surface }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionTitle t={t}>Skills</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 14,
          }}
        >
          {DATA.skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} t={t} />
          ))}
        </div>
      </div>
    </Section>
  );
}
