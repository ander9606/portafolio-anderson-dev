import { useEffect, useRef } from "react";
import VignettePanel from "./VignettePanel";
import LogoBadge from "./LogoBadge";

export default function VignetteModal({ proyecto, phone, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-[5vh]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${proyecto.id}`}
        className="ink-shadow-lg relative w-full max-w-3xl border-[6px] border-line bg-panel px-6 pb-8 pt-7"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute -right-3.5 -top-[18px] flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-line bg-accent font-display text-xl text-accent-ink"
        >
          &times;
        </button>
        <LogoBadge proyecto={proyecto} className="mb-3 h-12 w-12" />
        <h4 id={`modal-title-${proyecto.id}`} className="mb-1 font-body text-2xl font-extrabold text-paper">
          {proyecto.nombre}
        </h4>
        <p className="mb-5 font-mono text-[13px] font-bold uppercase tracking-wide text-accent-2">
          Capturas
        </p>
        <div className="grid grid-cols-1 gap-x-5 gap-y-9 pt-2 sm:grid-cols-2">
          {proyecto.panels.map((panel, index) => (
            <VignettePanel key={panel.label} panel={panel} phone={phone} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
