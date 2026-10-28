export default function SobreMi() {
  return (
    <section className="mb-12">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">Sobre mí</p>
      <div className="ink-shadow-sm border-[3px] border-line bg-panel px-6 py-6 sm:px-8">
        <h2 className="mb-3 font-display text-3xl leading-none tracking-wide text-paper sm:text-4xl">
          HOLA, SOY <span className="text-accent">ANDERSON</span>
        </h2>
        <div className="max-w-[68ch] space-y-3 text-[15px] leading-relaxed text-paper-dim">
          <p>
            Soy desarrollador full-stack en Colombia. Me gusta entender cómo trabaja un negocio
            antes de escribir código: por eso Zaturno y logiq360 nacieron de problemas reales, no
            de ejercicios.
          </p>
          <p>
            Yo diseño la arquitectura, las reglas de negocio y el modelo de datos, y decido qué se
            construye en cada momento. Uso Claude Code como colaborador que implementa bajo mi
            dirección: reviso cada cambio y entiendo cada parte del sistema lo suficiente para
            explicarla.
          </p>
          <p>
            Mi forma de trabajar es construir por etapas, poner algo útil en manos de las personas
            pronto y seguir mejorándolo con lo que se aprende en producción.
          </p>
        </div>
      </div>
    </section>
  );
}
