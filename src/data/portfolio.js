// ─────────────────────────────────────────────────────────────────
//  📝 PORTFOLIO DATA — Editá este archivo con tu info real
//  Buscá los comentarios  ← TODO  para saber qué cambiar
// ─────────────────────────────────────────────────────────────────

export const personal = {
  name:       'Andres Quiroga',
  title:      'Ingeniero de Sistemas',
  subtitle:   'Full Stack Developer',
  bio:        'Desarrollador full stack a punto de graduarme en Ingeniería de Sistemas en UNIFRANZ, La Paz. Construyo aplicaciones web y móviles reales — desde plataformas académicas hasta sistemas en producción. Me especializo en Laravel, React y React Native, y disfruto resolver problemas de deployment e infraestructura.',
  location:   'La Paz, Bolivia',
  available:  true,          // cambiar a false si ya no buscás trabajo
  photo:      null,          // ← TODO: poné la URL de tu foto (o null para usar iniciales)
  initials:   'AQ',
  university: 'UNIFRANZ',
};

// ─── Links de contacto ────────────────────────────────────────────
export const links = {
  github:   'https://github.com/tu-usuario',         // ← TODO
  linkedin: 'https://linkedin.com/in/tu-perfil',     // ← TODO
  email:    'tu@email.com',                           // ← TODO
  whatsapp: '+591000000000',                          // ← TODO (formato: +591XXXXXXXXX)
};

// ─── Skills agrupados por categoría ──────────────────────────────
export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'React Native', 'Expo', 'Vite', 'Tailwind CSS', 'Recharts'],
  },
  {
    category: 'Backend',
    items: ['Laravel', 'PHP', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git', 'Vercel', 'Cloudflare', 'Hostinger', 'n8n', 'Linux'],
  },
];

// ─── Proyectos ────────────────────────────────────────────────────
// status: 'production' (verde) | 'deployed' (indigo) | 'personal' (amarillo)
export const projects = [
  {
    id: 1,
    name: 'Real-Time Dashboard',
    description:
      'Dashboard con datos en tiempo real: criptomonedas (CoinGecko), clima (OpenWeatherMap) y noticias (GNews). Integra 3 APIs externas con proxy serverless para evitar CORS.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'Vercel'],
    status: 'production',
    statusLabel: 'En producción',
    link: 'https://real-time-dashboard-zeta.vercel.app/',
  },
  {
    id: 2,
    name: 'Sistema de Calidad del Agua',
    description:
      'Sistema de monitoreo de agua potable. Proyecto de titulación desplegado en producción con infraestructura real: VPS, Docker, Cloudflare y dominio propio.',
    tech: ['Laravel', 'MySQL', 'Docker', 'Cloudflare', 'Hostinger', 'PowerShell'],
    status: 'production',
    statusLabel: 'En producción',
    link: null,
  },
  {
    id: 3,
    name: 'Sistema Fast Food Chain',
    description:
      'Sistema multi-sucursal para cadena de comida rápida. Gestión de pedidos, inventario y reportes por sucursal.',
    tech: ['Laravel 11', 'PostgreSQL'],
    status: 'deployed',
    statusLabel: 'Deployado',
    link: null,
  },
  {
    id: 4,
    name: 'Plataforma de Gestión Académica',
    description:
      'Sistema completo de administración académica universitaria. Gestión de estudiantes, materias, docentes, calificaciones y reportes.',
    tech: ['PHP', 'Laravel', 'PostgreSQL'],
    status: 'deployed',
    statusLabel: 'Deployado',
    link: null,
  },
  {
    id: 5,
    name: 'Sistema de Cafetería',
    description:
      'App de gestión para cafetería con autenticación en tiempo real, menú digital y registro de ventas. Backend serverless con Supabase.',
    tech: ['React', 'Supabase'],
    status: 'deployed',
    statusLabel: 'Deployado',
    link: null,
  },
  {
    id: 6,
    name: 'Plataforma de Aprendizaje de Inglés',
    description:
      'Plataforma educativa interactiva para el aprendizaje de inglés. Desarrollo colaborativo con módulos de práctica y seguimiento de progreso.',
    tech: ['React', 'Node.js'],
    status: 'deployed',
    statusLabel: 'Deployado',
    link: null,
  },
  {
    id: 7,
    name: 'Dev Toolkit',
    description:
      'App móvil personal instalable por APK. Incluye JSON Formatter, Base64, Regex Tester, JWT Decoder, Password Generator y Timestamp Converter.',
    tech: ['React Native', 'Expo'],
    status: 'personal',
    statusLabel: 'App personal',
    link: null,
  },
];
