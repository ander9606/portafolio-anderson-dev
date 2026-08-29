import { useState } from "react";
import Chip from "./Chip";
import VignetteModal from "./VignetteModal";
import LogoBadge from "./LogoBadge";

export default function ProjectCard({ proyecto, rotate, phone }) {
  const [showVignettes, setShowVignettes] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <article
        className={`project-card relative ink-shadow-md border-[5px] border-line bg-panel px-[22px] pb-6 pt-[26px] ${rotate}`}
      >
        <LogoBadge proyecto={proyecto} className="absolute -top-5 left-[18px] h-12 w-12" />

        <h3 className="mb-1 mt-3.5 font-body text-[22px] font-extrabold text-paper">
          {proyecto.nombre}
        </h3>
        <p className="mb-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-accent-2">
          {proyecto.rolLinea}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {proyecto.chips.map((chip) => (
            <Chip key={chip}>{chip}</Chip>
          ))}
        </div>

        <ul className="mb-5 space-y-1.5">
          {proyecto.resultados.map((resultado) => (
            <li
              key={resultado}
              className="flex items-start gap-2 text-[13.5px] leading-snug text-paper-dim"
            >
              <span className="mt-0.5 text-accent-2" aria-hidden="true">
                &#10003;
              </span>
              {resultado}
            </li>
          ))}
        </ul>

        <div className="mb-5 flex flex-wrap items-center gap-4">
          {proyecto.repoUrl ? (
            <a
              className="inline-flex items-center gap-1.5 border-b-2 border-accent pb-0.5 font-body text-[13px] font-extrabold uppercase tracking-wide text-paper hover:text-accent"
              href={proyecto.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver repositorio &rarr;
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 font-body text-[13px] font-extrabold uppercase tracking-wide text-muted"
              title={proyecto.repoPrivadoNota}
            >
              &#128274; Repositorio privado
            </span>
          )}
          <a
            className="inline-flex items-center gap-1.5 border-b-2 border-accent pb-0.5 font-body text-[13px] font-extrabold uppercase tracking-wide text-paper hover:text-accent"
            href={proyecto.landingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver landing &rarr;
          </a>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-1.5 border-2 border-line bg-panel-2 px-3 py-1.5 font-mono text-[11.5px] font-bold uppercase tracking-wider text-paper hover:border-accent hover:text-accent"
        >
          {expanded ? "Ver menos ▲" : "El problema y las capturas ▾"}
        </button>

        <div className={`reveal ${expanded ? "is-open" : ""}`}>
          <span className="mb-2 inline-block border-2 border-line bg-accent-2 px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-wider text-accent-ink">
            El problema
          </span>
          <p className="mb-3.5 text-[14.5px] leading-relaxed text-paper-dim">{proyecto.problema}</p>
          <button
            type="button"
            onClick={() => setShowVignettes(true)}
            className="inline-flex items-center gap-1.5 border-b-2 border-accent bg-transparent pb-0.5 font-body text-[13px] font-extrabold uppercase tracking-wide text-paper hover:text-accent"
          >
            Ver capturas &rarr;
          </button>
        </div>
      </article>

      {showVignettes && (
        <VignetteModal proyecto={proyecto} phone={phone} onClose={() => setShowVignettes(false)} />
      )}
    </>
  );
}
