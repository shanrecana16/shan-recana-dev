import { useTheme } from "./hooks/useTheme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const { isDark, t, toggle } = useTheme();

  return (
    <>
      {/* Global styles — Google Sans fonts + resets */}
      <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500&family=Google+Sans+Display:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; overflow-x: hidden; }
  body { transition: background 0.3s, color 0.3s; overflow-x: hidden; margin: 0; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 99px; }

        
      `}</style>

      <div
        style={{
          background: t.bg,
          color: t.text,
          minHeight: "100vh",
          transition: "background 0.3s, color 0.3s",
        }}
      >
        <Nav t={t} isDark={isDark} onToggle={toggle} />
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Certifications t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </div>
    </>
  );
}
