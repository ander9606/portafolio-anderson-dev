import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { proyectos } from "./data/proyectos";

const THEMES = [
  { id: "red", label: "Kapow Red" },
  { id: "blue", label: "Bam Blue" },
  { id: "purple", label: "Zap Purple" },
];

function loadThemeIndex() {
  const saved = window.localStorage.getItem("theme");
  const index = THEMES.findIndex((t) => t.id === saved);
  return index === -1 ? 0 : index;
}

export default function App() {
  const [themeIndex, setThemeIndex] = useState(loadThemeIndex);
  const theme = THEMES[themeIndex];

  useEffect(() => {
    document.documentElement.dataset.theme = theme.id;
    window.localStorage.setItem("theme", theme.id);
  }, [theme.id]);

  return (
    <div className="mx-auto max-w-5xl px-5 pb-20 pt-7">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="font-display text-2xl tracking-wide text-paper [text-shadow:2px_2px_0_var(--color-line)] sm:text-[30px]">
          ANDERSON<span className="text-accent">.</span>DEV
        </div>
        <button
          type="button"
          onClick={() => setThemeIndex((i) => (i + 1) % THEMES.length)}
          title="Cambiar tema de color"
          className="border-2 border-accent px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-accent-ink"
        >
          {theme.label}
        </button>
      </div>

      <Hero />

      <Skills />

      <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">Proyectos</p>
      <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-2">
        <ProjectCard proyecto={proyectos[0]} rotate="-rotate-[0.6deg]" phone={false} />
        <ProjectCard proyecto={proyectos[1]} rotate="rotate-[0.6deg]" phone={true} />
      </div>

      <Footer />
    </div>
  );
}
