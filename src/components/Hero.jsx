import { useEffect, useRef, useState } from "react";

const EMAIL = "anderson960616@gmail.com";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const contactRef = useRef(null);

  async function handleEmailClick() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
        setShowContact(false);
      }, 1400);
    } catch {
      setShowContact(false);
    }
  }

  useEffect(() => {
    if (!showContact) return;

    function handleClickOutside(event) {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setShowContact(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") setShowContact(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showContact]);

  return (
    <section className="ink-shadow-lg relative mb-12 overflow-hidden border-[6px] border-line bg-panel px-6 py-10 sm:px-10 sm:py-14">
      <div className="halftone" />
      <div className="relative z-10">
        <span className="mb-4 inline-block -rotate-2 border-[3px] border-line bg-paper px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest text-ink">
          Portafolio &mdash; 2026
        </span>

        <h1 className="mb-1.5 font-display text-[52px] leading-[0.92] tracking-wide text-paper [text-shadow:4px_4px_0_var(--color-line)] sm:text-[80px] lg:text-[104px]">
          ANDERSON
          <br />
          DEV<span className="text-accent">!</span>
        </h1>
        <p className="mb-6 font-body text-lg font-extrabold uppercase tracking-wide text-accent-2 sm:text-2xl">
          Full&#8209;Stack Developer
        </p>

        <div className="relative mb-7 flex items-center gap-4">
          <div
            className="burst burst-anim absolute -left-3.5 top-1/2 z-0 h-[120px] w-[120px] -translate-y-1/2 bg-accent-2 opacity-90"
            aria-hidden="true"
          />
          <p className="relative z-10 max-w-[52ch] border-[3px] border-line bg-panel-2 px-[18px] py-3.5 text-[15px] leading-relaxed text-paper sm:text-lg">
            Construyo sistemas que corren en producción de verdad:{" "}
            <strong className="text-accent">inventario y alquileres</strong> para un negocio de
            eventos, y <strong className="text-accent">turnos + nómina</strong> multi&#8209;tenant
            con geocercas.
          </p>
        </div>

        <div className="flex flex-wrap gap-3.5">
          <a
            href="https://github.com/ander9606"
            target="_blank"
            rel="noopener noreferrer"
            className="ink-shadow-sm inline-block border-[3px] border-line bg-accent px-[22px] py-3.5 font-body text-sm font-extrabold uppercase tracking-wide text-accent-ink transition-transform hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1.5 active:translate-y-1.5"
          >
            Ver en GitHub
          </a>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="inline-block border-[3px] border-line bg-panel px-[22px] py-3.5 font-body text-sm font-extrabold uppercase tracking-wide text-paper transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
          >
            Descargar CV
          </a>
          <div ref={contactRef} className="relative">
            <button
              type="button"
              onClick={() => setShowContact((v) => !v)}
              aria-expanded={showContact}
              aria-haspopup="true"
              className="ink-shadow-sm inline-block border-[3px] border-line bg-accent-2 px-[22px] py-3.5 font-body text-sm font-extrabold uppercase tracking-wide text-accent-ink transition-transform hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1.5 active:translate-y-1.5"
            >
              Hablemos
            </button>

            {showContact && (
              <div className="ink-shadow-sm absolute left-0 top-[calc(100%+10px)] z-20 min-w-[240px] border-[3px] border-line bg-panel-2 p-2 font-mono text-xs">
                <a
                  href="https://wa.me/573204143661?text=Hola%20Anderson%2C%20vi%20tu%20portafolio%20y%20quiero%20hablar%20contigo"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowContact(false)}
                  className="flex items-center gap-2 border-2 border-transparent px-2.5 py-2 uppercase tracking-wider text-paper hover:border-accent hover:text-accent"
                >
                  <span className="text-accent-2" aria-hidden="true">
                    &gt;
                  </span>
                  contactar --whatsapp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 border-2 border-transparent px-2.5 py-2 uppercase tracking-wider text-paper hover:border-accent hover:text-accent"
                >
                  <span className="text-accent-2" aria-hidden="true">
                    &gt;
                  </span>
                  {emailCopied ? "¡correo copiado!" : "contactar --correo"}
                </a>
              </div>
            )}
          </div>
        </div>

        <a
          href="https://github.com/ander9606"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 border-2 border-line bg-panel-2 px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted hover:border-accent hover:text-accent"
        >
          <span className="text-accent" aria-hidden="true">
            &#9679;
          </span>
          Commits activos &mdash; repos actualizados cada semana
        </a>
      </div>
    </section>
  );
}
