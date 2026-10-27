import { zaturnoFlujo, zaturnoFunciones, zaturnoRoles, zaturnoNumeros } from "../data/zaturno";

export default function ZaturnoDetalle() {
  return (
    <section id="zaturno" className="mb-12 mt-14">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
        Zaturno por dentro
      </p>
      <h2 className="mb-3 font-display text-4xl leading-none tracking-wide text-paper [text-shadow:3px_3px_0_var(--color-line)] sm:text-5xl">
        EN PRODUCCIÓN, <span className="text-accent">RESOLVIENDO</span> NÓMINAS REALES
      </h2>
      <p className="mb-8 max-w-[62ch] text-[15px] leading-relaxed text-paper-dim">
        Zaturno no es una demo: lo usan empresas con personal en campo para programar turnos,
        controlar la asistencia y liquidar la nómina. Esto es lo que hay debajo.
      </p>

      <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {zaturnoNumeros.map((n) => (
          <div key={n.etiqueta} className="ink-shadow-sm border-[3px] border-line bg-panel px-4 py-4">
            <p className="font-display text-3xl leading-none tracking-wide text-accent-2">{n.valor}</p>
            <p className="mt-1.5 text-[12.5px] leading-snug text-paper-dim">{n.etiqueta}</p>
          </div>
        ))}
      </div>

      <h3 className="mb-3 font-display text-2xl tracking-wide text-accent-2">Cómo funciona</h3>
      <ol className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {zaturnoFlujo.map((p) => (
          <li key={p.paso} className="ink-shadow-sm border-[3px] border-line bg-panel-2 px-4 py-4">
            <span className="font-display text-3xl leading-none text-accent">{p.paso}</span>
            <p className="mb-1 mt-2 font-body text-[15px] font-extrabold text-paper">{p.titulo}</p>
            <p className="text-[13px] leading-relaxed text-paper-dim">{p.texto}</p>
          </li>
        ))}
      </ol>

      <h3 className="mb-3 font-display text-2xl tracking-wide text-accent-2">Lo que hace</h3>
      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {zaturnoFunciones.map((f) => (
          <article key={f.titulo} className="border-[3px] border-line bg-panel px-4 py-4">
            <h4 className="mb-1 font-body text-[15px] font-extrabold text-paper">
              <span className="mr-2 text-accent" aria-hidden="true">
                &#10003;
              </span>
              {f.titulo}
            </h4>
            <p className="text-[13.5px] leading-relaxed text-paper-dim">{f.texto}</p>
          </article>
        ))}
      </div>

      <h3 className="mb-3 font-display text-2xl tracking-wide text-accent-2">Cada quien ve lo suyo</h3>
      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {zaturnoRoles.map((r) => (
          <div key={r.rol} className="border-2 border-line bg-panel-2 px-3.5 py-3">
            <dt className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-accent">{r.rol}</dt>
            <dd className="mt-1 text-[13px] leading-snug text-paper-dim">{r.detalle}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap gap-3.5">
        <a
          href="https://zaturno.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="ink-shadow-sm inline-block border-[3px] border-line bg-accent px-[22px] py-3.5 font-body text-sm font-extrabold uppercase tracking-wide text-accent-ink transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
        >
          Conocer Zaturno
        </a>
        <a
          href="https://github.com/ander9606/appturnos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-[3px] border-line bg-panel px-[22px] py-3.5 font-body text-sm font-extrabold uppercase tracking-wide text-paper transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
        >
          Ver el código
        </a>
      </div>
    </section>
  );
}
