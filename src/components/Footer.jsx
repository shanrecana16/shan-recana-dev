import DATA from "../data/portfolio";

export default function Footer({ t }) {
  return (
    <footer
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Google Sans', sans-serif",
          fontSize: 14,
          color: t.hint,
          margin: 0,
        }}
      >
        © {new Date().getFullYear()} {DATA.name} · Crafted with care
      </p>
    </footer>
  );
}
