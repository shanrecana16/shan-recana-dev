import * as motion from "motion/react-client";
import { useIsMobile } from "../hooks/useMediaQuery";
import DATA from "../data/portfolio";

export default function Hero({ t }) {
  const isMobile = useIsMobile();
  const colorDots = [t.accent, t.green, t.yellow, t.red];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: isMobile ? "80px 20px 60px" : "0 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        {/* Google-color dots */}
        <div
          style={{ display: "flex", gap: 8, marginBottom: isMobile ? 24 : 32 }}
        >
          {colorDots.map((color, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
              style={{
                width: isMobile ? 10 : 12,
                height: isMobile ? 10 : 12,
                borderRadius: "50%",
                background: color,
              }}
            />
          ))}
        </div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontFamily: "'Google Sans', sans-serif",
            fontSize: isMobile ? 14 : 16,
            color: t.accent,
            fontWeight: 500,
            margin: "0 0 14px",
            letterSpacing: "0.5px",
          }}
        >
          {DATA.role}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Google Sans Display', 'Google Sans', sans-serif",
            fontSize: isMobile
              ? "clamp(38px, 11vw, 56px)"
              : "clamp(42px, 7vw, 80px)",
            fontWeight: 400,
            color: t.text,
            margin: "0 0 20px",
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
          }}
        >
          {DATA.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{
            fontFamily: "'Google Sans', sans-serif",
            fontSize: isMobile ? 16 : "clamp(16px, 2vw, 20px)",
            color: t.muted,
            maxWidth: 560,
            lineHeight: 1.65,
            margin: "0 0 36px",
            fontWeight: 400,
          }}
        >
          {DATA.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 12,
            width: isMobile ? "100%" : "auto",
          }}
        >
          {/* Get in touch */}
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.97 }}
            style={{
              background: t.accent,
              color: "#fff",
              padding: isMobile ? "15px 28px" : "12px 28px",
              borderRadius: 99,
              textDecoration: "none",
              fontFamily: "'Google Sans', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              WebkitTapHighlightColor: "transparent",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              !isMobile && (e.currentTarget.style.opacity = "0.88")
            }
            onMouseLeave={(e) =>
              !isMobile && (e.currentTarget.style.opacity = "1")
            }
          >
            Get in touch
          </motion.a>
          {/* Download CV */}
          <motion.a
            href="/cv/ShanMickle_Recana_CV_.pdf"
            download="ShanMickle_Recana_CV_.pdf"
            whileTap={{ scale: 0.97 }}
            style={{
              border: `1.5px solid ${t.accent}`,
              color: t.accent,
              padding: isMobile ? "15px 28px" : "12px 28px",
              borderRadius: 99,
              textDecoration: "none",
              fontFamily: "'Google Sans', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              WebkitTapHighlightColor: "transparent",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              !isMobile && (e.currentTarget.style.background = t.accentSoft)
            }
            onMouseLeave={(e) =>
              !isMobile && (e.currentTarget.style.background = "transparent")
            }
          >
            ↓ Download CV
          </motion.a>
        </motion.div>

        {/* Scroll indicator — hidden on mobile */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{
              position: "absolute",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: 2,
                height: 32,
                background: `linear-gradient(to bottom, ${t.accent}, transparent)`,
                borderRadius: 99,
                margin: "0 auto",
              }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
