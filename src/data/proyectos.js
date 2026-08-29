export const proyectos = [
  {
    id: "logiq360",
    issue: "Issue #01",
    logo: "logos/logiq360.svg",
    nombre: "logiq360",
    rolLinea: "Inventario, productos y facturación",
    problema:
      "Llevar el inventario de carpas y las cotizaciones en Excel y WhatsApp no escala: se pierden reservas, se dañan series y nadie sabe qué hay disponible. logiq360 centraliza inventario, cotizaciones, alquileres y facturación electrónica DIAN en un solo sistema — en producción para Carpas Vento.",
    resultados: [
      "Una cotización pasó de tomar ~20 min a 2–3 min.",
      "Se eliminó el doble alquiler del mismo producto en la misma fecha.",
    ],
    chips: ["Express 5", "MySQL", "React 19", "React Query"],
    repoUrl: null,
    repoPrivadoNota: "Código privado — datos reales de negocio. Te lo muestro con gusto en la entrevista.",
    landingUrl: "https://logiq360.com/",
    panels: [
      {
        label: "Dashboard de operaciones",
        desc: "Eventos activos, alertas de cotizaciones vencidas y costo de personal del mes — integrado en tiempo real con Zaturno.",
        image: "images/logiq360/dashboard-operaciones.jpg",
      },
      {
        label: "Inventario",
        desc: "13 categorías registradas (anclajes, arcos, banderas, madera, maquinaria...) cada una con subcategorías propias.",
        image: "images/logiq360/inventario-categorias.jpg",
      },
      {
        label: "Analítica de inventario",
        desc: "2.084 unidades en 26 tipos de elementos, con el valor total del activo en tiempo real ($166.4M) y alertas automáticas de stock bajo por bodega.",
        image: "images/logiq360/analitica-inventario.jpg",
      },
      {
        label: "Catálogo de plantillas",
        desc: "Cada plantilla lista para cotizar muestra precio, depósito, componentes y disponibilidad en tiempo real — como la carpa 6x9 en sus versiones Compact ($1.890.000) y Perimetral ($282.000).",
        image: "images/logiq360/catalogo-plantillas.jpg",
      },
      {
        label: "Nueva cotización",
        desc: "Flujo guiado en 6 pasos — evento, productos, transporte, viáticos, descuentos y resumen — para armar una cotización completa.",
        image: "images/logiq360/nueva-cotizacion.jpg",
      },
      {
        label: "Detalle del evento",
        desc: "Cliente, fechas y ubicación de cada evento, con el resumen financiero de sus cotizaciones y cuáles siguen pendientes de aprobación.",
        image: "images/logiq360/detalle-evento.jpg",
      },
      {
        label: "Reportes y clientes",
        desc: "Pipeline de cotizaciones con tasa de conversión, ranking de clientes y alertas de clientes que cotizan pero no confirman, para priorizar el seguimiento comercial.",
        image: "images/logiq360/reportes-clientes.jpg",
      },
    ],
  },
  {
    id: "zaturno",
    issue: "Issue #02",
    logo: "logos/zaturno.png",
    nombre: "Zaturno",
    rolLinea: "Turnos, nómina y geocercas",
    problema:
      "Cuadrar turnos, marcar asistencia real y liquidar nómina con recargos legales a mano genera errores y reclamos. Zaturno automatiza geocercas de marcaje, jornadas y liquidación multi-tenant para equipos de campo.",
    resultados: [
      "Se acabaron los cobros imprevistos por turnos mal registrados o poco claros.",
      "Se redujo el tiempo para armar la nómina.",
    ],
    chips: ["Express", "React Native", "Expo", "MySQL"],
    repoUrl: "https://github.com/ander9606/appturnos",
    landingUrl: "https://zaturno.app/",
    panels: [
      {
        label: "Crear turno",
        desc: "Formulario con fecha, horario, lugar geolocalizado y destinatarios (trabajadores, nómina o ambos).",
        image: "images/zaturno/crear-turno.jpg",
      },
      {
        label: "Nómina · Gestor",
        desc: "Período quincenal abierto con registros del equipo, asistencia, reingresos y descansos compensatorios.",
        image: "images/zaturno/nomina-gestor.jpg",
      },
      {
        label: "Marcaje de jornada",
        desc: "El trabajador marca entrada/salida; el sistema confirma la jornada completa y permite solicitar reingreso.",
        image: "images/zaturno/marcaje-jornada.jpg",
      },
      {
        label: "Panel del administrador",
        desc: "Resumen de empleados y turnos del día, con accesos rápidos a nómina, equipo, cargos y puntos de marcaje.",
        image: "images/zaturno/panel-admin.jpg",
      },
    ],
  },
];
