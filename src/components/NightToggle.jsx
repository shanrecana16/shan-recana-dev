import * as motion from "motion/react-client";

export default function NightToggle({ isDark, onToggle, t }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span
        style={{
          fontSize: 13,
          color: t.muted,
          fontFamily: "'Google Sans', sans-serif",
        }}
      >
        {isDark ? "☀ Light" : "☾ Dark"}
      </span>

      {/* Toggle track */}
      <div
        style={{
          width: 52,
          height: 28,
          backgroundColor: isDark ? t.accent : t.toggle,
          borderRadius: 50,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: 3,
          justifyContent: isDark ? "flex-end" : "flex-start",
          border: `1.5px solid ${isDark ? t.accent : t.border}`,
          transition: "background 0.3s, border-color 0.3s",
          boxSizing: "border-box",
        }}
      >
        {/* Animated handle using Motion layout */}
        <motion.div
          layout
          transition={{ type: "spring", visualDuration: 0.2, bounce: 0.2 }}
          style={{
            width: 20,
            height: 20,
            backgroundColor: isDark ? t.bg : t.accent,
            borderRadius: "50%",
          }}
        />
      </div>
    </button>
  );
}
