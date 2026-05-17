import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import NightToggle from "./NightToggle";
import DATA from "../data/portfolio";
import { useIsMobile } from "../hooks/useMediaQuery";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

// ─── Hamburger icon ───────────────────────────────────────────────────────────
function Hamburger({ open, onClick, t }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        width: 40,
        height: 40,
      }}
    >
      <motion.span
        animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        style={{
          display: "block",
          width: 22,
          height: 2,
          borderRadius: 99,
          background: t.text,
          transformOrigin: "center",
        }}
      />
      <motion.span
        animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        style={{
          display: "block",
          width: 22,
          height: 2,
          borderRadius: 99,
          background: t.text,
        }}
      />
      <motion.span
        animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        style={{
          display: "block",
          width: 22,
          height: 2,
          borderRadius: 99,
          background: t.text,
          transformOrigin: "center",
        }}
      />
    </button>
  );
}

// ─── Mobile slide-in drawer ───────────────────────────────────────────────────
function MobileDrawer({ open, onClose, t, isDark, onToggle }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 98,
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Drawer panel */}
      <motion.div
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          width: "min(80vw, 320px)",
          background: isDark ? "rgba(28,27,31,0.98)" : "rgba(255,255,255,0.98)",
          backdropFilter: "blur(20px)",
          borderLeft: `1px solid ${t.border}`,
          display: "flex",
          flexDirection: "column",
          padding: "80px 32px 40px",
          gap: 4,
          overflowY: "auto",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={onClose}
            initial={false}
            animate={{ opacity: open ? 1 : 0, x: open ? 0 : 20 }}
            transition={{ delay: open ? i * 0.05 + 0.1 : 0, duration: 0.3 }}
            style={{
              fontFamily: "'Google Sans', sans-serif",
              fontSize: 22,
              fontWeight: 500,
              color: t.text,
              textDecoration: "none",
              padding: "14px 0",
              borderBottom: `1px solid ${t.border}`,
              display: "block",
              WebkitTapHighlightColor: "transparent",
              transition: "color 0.15s",
            }}
            onTouchStart={(e) => (e.currentTarget.style.color = t.accent)}
            onTouchEnd={(e) => (e.currentTarget.style.color = t.text)}
          >
            {link}
          </motion.a>
        ))}

        <div style={{ marginTop: 32 }}>
          <NightToggle isDark={isDark} onToggle={onToggle} t={t} />
        </div>
      </motion.div>
    </>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
export default function Nav({ t, isDark, onToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setDrawerOpen(false);
  }, [isMobile]);

  const [firstName, lastName] = DATA.name.split(" ");

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled
            ? isDark ? "rgba(28,27,31,0.92)" : "rgba(255,255,255,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${t.border}` : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 20px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "'Google Sans Display', 'Google Sans', sans-serif",
                fontSize: 20,
                fontWeight: 500,
                color: t.accent,
                letterSpacing: "-0.3px",
              }}
            >
              {firstName}
              <span style={{ color: t.muted, fontWeight: 400 }}>.{lastName}</span>
            </span>
          </a>

          {/* Desktop links + toggle */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <div style={{ display: "flex", gap: 24 }}>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    style={{
                      fontFamily: "'Google Sans', sans-serif",
                      fontSize: 14,
                      color: t.muted,
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = t.text)}
                    onMouseLeave={(e) => (e.target.style.color = t.muted)}
                  >
                    {link}
                  </a>
                ))}
              </div>
              <NightToggle isDark={isDark} onToggle={onToggle} t={t} />
            </div>
          )}

          {/* Mobile: hamburger */}
          {isMobile && (
            <Hamburger open={drawerOpen} onClick={() => setDrawerOpen((v) => !v)} t={t} />
          )}
        </div>
      </motion.nav>

      {isMobile && (
        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          t={t}
          isDark={isDark}
          onToggle={onToggle}
        />
      )}
    </>
  );
}
