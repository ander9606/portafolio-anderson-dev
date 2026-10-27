import { servicios } from "../data/zaturno";

const WHATSAPP =
  "https://wa.me/573204143661?text=Hola%20Anderson%2C%20vi%20tu%20portafolio%20y%20quiero%20una%20app%20para%20mi%20negocio";

export default function Servicios() {
  return (
    <section className="mb-12">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
        Qué puedo hacer por tu negocio
      </p>
      <div className="ink-shadow-md relative overflow-hidden border-[5px] border-line bg-panel px-6 py-8 sm:px-8">
        <div className="halftone opacity-20" />
        <div className="relative z-10">
          <h2 className="mb-2 font-display text-4xl leading-none tracking-wide text-paper [text-shadow:3px_3px_0_var(--color-line)] sm:text-5xl">
            ¿TU NEGOCIO NECESITA SU PROPIA <span className="text-accent">APP</span>?
          </h2>
          <p className="mb-6 max-w-[62ch] text-[15px] leading-relaxed text-paper-dim">
            Ya construí dos sistemas que funcionan todos los días en empresas reales. Puedo
            desarrollar apps como estas, o más complejas, adaptadas a cómo trabaja tu negocio.
          </p>
          <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {servicios.map((s) => (
              <article key={s.titulo} className="border-[3px] border-line bg-panel-2 px-4 py-4">
                <h3 className="mb-1 font-body text-[15px] font-extrabold text-accent-2">{s.titulo}</h3>
                <p className="text-[13.5px] leading-relaxed text-paper-dim">{s.texto}</p>
              </article>
            ))}
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-shadow-sm inline-block border-[3px] border-line bg-accent-2 px-[22px] py-3.5 font-body text-sm font-extrabold uppercase tracking-wide text-accent-ink transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
          >
            Cuéntame tu idea por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
