export default function LogoBadge({ proyecto, className = "" }) {
  return (
    <span
      className={`flex items-center justify-center border-[3px] border-line bg-paper p-1.5 ${className}`}
    >
      <img
        src={`${import.meta.env.BASE_URL}${proyecto.logo}`}
        alt={`Logo de ${proyecto.nombre}`}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
