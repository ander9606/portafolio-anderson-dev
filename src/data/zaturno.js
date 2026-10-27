export const zaturnoFlujo = [
  { paso: "01", titulo: "Se crea el turno", texto: "El jefe define fecha, horario y lugar geolocalizado, y lo ofrece a su equipo." },
  { paso: "02", titulo: "El trabajador marca", texto: "Entrada y salida desde el celular, solo si está dentro de la geocerca del sitio." },
  { paso: "03", titulo: "Se liquida la nómina", texto: "Horas ordinarias, extras, nocturnas y festivas calculadas con la ley colombiana." },
  { paso: "04", titulo: "Todos ven lo mismo", texto: "Cada rol ve su parte: sin cobros sorpresa ni reclamos por turnos mal registrados." },
];

export const zaturnoFunciones = [
  {
    titulo: "Marcaje con geocerca",
    texto:
      "Radio configurable (100 m por defecto). La app bloquea el botón fuera de rango y el servidor revalida la ubicación, así que no se puede saltar desde el cliente.",
  },
  {
    titulo: "Nómina con recargos legales",
    texto:
      "Nocturno, dominical y festivo según la Ley 2466 de 2025, horas extra sobre la jornada de 42 h, auxilio de transporte y descuentos de salud y pensión.",
  },
  {
    titulo: "Períodos que no se alteran",
    texto:
      "Al cerrar un período se congela el valor hora de cada registro: re-liquidar una quincena vieja da siempre el mismo resultado, aunque cambie el salario o la ley.",
  },
  {
    titulo: "Turnos que cruzan la medianoche",
    texto:
      "Un turno de 10 p. m. a 6 a. m. se cuenta bien para topes de horas, traslapes y vencimiento, sin parches de fechas en cada consulta.",
  },
  {
    titulo: "Contratos y cuentas de cobro",
    texto:
      "Contratos diarios con firma digital y cuentas de cobro para prestación de servicios, listos para exportar en PDF y Excel.",
  },
  {
    titulo: "Avisos automáticos",
    texto:
      "Notificaciones push: recordatorio de ingreso a quien no ha marcado, alerta cuando un turno entra en horas extra y aviso de quién está en descanso compensatorio.",
  },
  {
    titulo: "Ausencias y novedades",
    texto: "Incapacidades, permisos y novedades quedan registradas y se reflejan en la liquidación.",
  },
  {
    titulo: "Integración con logiq360",
    texto:
      "Cada operación de logiq360 recibe su costo real de personal desde Zaturno, con reintentos automáticos si algo falla en el camino.",
  },
];

export const zaturnoRoles = [
  { rol: "Administrador", detalle: "Equipo, cargos, puntos de marcaje, cierre de períodos y plan." },
  { rol: "Jefe de turnos", detalle: "Crea turnos, los ofrece y supervisa el marcaje del día." },
  { rol: "Jefe de nómina", detalle: "Revisa registros, cierra y liquida períodos." },
  { rol: "Nómina", detalle: "Consulta nómina y reportes en modo lectura." },
  { rol: "Trabajador", detalle: "Ve sus turnos, marca entrada y salida y consulta su pago." },
  { rol: "Super admin", detalle: "Panel multiempresa: empresas, pagos y reportes de la plataforma." },
];

export const zaturnoNumeros = [
  { valor: "7", etiqueta: "roles con permisos propios" },
  { valor: "Web + móvil", etiqueta: "un mismo backend, un cliente compartido" },
  { valor: "Multi-tenant", etiqueta: "cada empresa aislada de las demás" },
  { valor: "30 días", etiqueta: "de prueba gratis para empezar" },
];

export const servicios = [
  {
    titulo: "Sistemas de gestión a la medida",
    texto: "Inventario, turnos, cotizaciones, reservas, clientes: lo que hoy vive en Excel y WhatsApp, en un sistema con tus reglas.",
  },
  {
    titulo: "Apps móviles y web",
    texto: "Una app para el personal en campo y un panel para quien administra, conectados a los mismos datos.",
  },
  {
    titulo: "Reglas de negocio complejas",
    texto: "Cobros, recargos, comisiones, planes y pagos en línea. Lo difícil de calcular lo dejo probado y documentado.",
  },
  {
    titulo: "Integraciones",
    texto: "Conecto tu sistema con otros (facturación, pagos, notificaciones) para que los datos se muevan solos.",
  },
];
