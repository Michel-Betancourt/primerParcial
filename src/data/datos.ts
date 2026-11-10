export type Vacante = {
  id: string;
  proyecto: string;
  empresa: string;
  tecnologias: string[];
  modalidad: 'Presencial' | 'Remoto' | 'Híbrido';
  ubicacion: string;
  descripcion: string;
  requisitos: string[];
};

export const estudiante = {
  nombre: 'Estudiante',
  carrera: 'Ingeniería en Sistemas Computacionales',
  estado: 'Buscando proyecto',
  tramitesPendientes: 2,
  postulaciones: 0,
};

export const avisos = [
  { id: '1', titulo: 'Entrega de carta de presentación', detalle: 'Fecha límite: 15 de noviembre.', fecha: 'Hoy' },
  { id: '2', titulo: 'Nuevas vacantes publicadas', detalle: 'Se agregaron 3 proyectos del sector tecnológico.', fecha: 'Ayer' },
  { id: '3', titulo: 'Reunión informativa', detalle: 'Coordinación de residencias, sala 4, 11:00 h.', fecha: 'Hace 3 días' },
];

export const vacantes: Vacante[] = [
  {
    id: '1',
    proyecto: 'App móvil de seguimiento logístico',
    empresa: 'LogiTrack MX',
    tecnologias: ['React Native', 'TypeScript', 'REST API'],
    modalidad: 'Híbrido',
    ubicacion: 'Querétaro, Qro.',
    descripcion:
      'Participarás en el desarrollo de una aplicación móvil para que los operadores registren entregas y consulten rutas en tiempo real. Trabajarás junto al equipo de producto y backend.',
    requisitos: ['Conocimientos de React Native o React', 'Manejo de Git', 'Disponibilidad de 6 horas diarias', 'Promedio mínimo de 80'],
  },
  {
    id: '2',
    proyecto: 'Panel de analítica de datos',
    empresa: 'DataNova',
    tecnologias: ['Python', 'SQL', 'Power BI'],
    modalidad: 'Remoto',
    ubicacion: 'Remoto (México)',
    descripcion:
      'Construirás tableros que muestren indicadores de ventas y comportamiento de clientes, además de automatizar la limpieza de datos con scripts.',
    requisitos: ['Bases de datos relacionales', 'Python básico o intermedio', 'Capacidad de análisis', 'Comunicación escrita clara'],
  },
  {
    id: '3',
    proyecto: 'Plataforma web de gestión escolar',
    empresa: 'EduSoft',
    tecnologias: ['React', 'Node.js', 'PostgreSQL'],
    modalidad: 'Presencial',
    ubicacion: 'San Juan del Río, Qro.',
    descripcion:
      'Apoyarás en nuevos módulos de una plataforma para administrar calificaciones, horarios y comunicados de escuelas de nivel medio superior.',
    requisitos: ['JavaScript sólido', 'Conocimientos de SQL', 'Trabajo en equipo', 'Disponibilidad de horario completo'],
  },
  {
    id: '4',
    proyecto: 'Modelo de predicción de demanda',
    empresa: 'RetailIA',
    tecnologias: ['Python', 'TensorFlow', 'Pandas'],
    modalidad: 'Híbrido',
    ubicacion: 'Ciudad de México',
    descripcion:
      'Entrenarás y evaluarás modelos de aprendizaje automático para estimar la demanda de productos y reducir el desperdicio de inventario.',
    requisitos: ['Fundamentos de estadística', 'Python y Pandas', 'Interés en aprendizaje automático', 'Inglés técnico de lectura'],
  },
  {
    id: '5',
    proyecto: 'Automatización de pruebas de software',
    empresa: 'QualityLab',
    tecnologias: ['Java', 'Selenium', 'Jenkins'],
    modalidad: 'Remoto',
    ubicacion: 'Remoto (México)',
    descripcion:
      'Diseñarás y mantendrás pruebas automatizadas para aplicaciones web y las integrarás en un flujo de integración continua.',
    requisitos: ['Programación orientada a objetos', 'Nociones de pruebas de software', 'Atención al detalle', 'Manejo de Git'],
  },
];