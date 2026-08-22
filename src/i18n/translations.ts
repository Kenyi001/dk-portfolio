export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'meta.title': 'Dax Kenji Tellez Duran — Ingeniero de Sistemas · Datos e IA aplicada',
    'meta.description': 'Portfolio de Dax Kenji Tellez Duran, Ingeniero de Sistemas en Santa Cruz, Bolivia. Análisis de datos, IA aplicada y sistemas backend: Python, SQL, Power BI, RAG, OCR, Node.js y C# .NET.',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'hero.pretitle': 'Ingeniero de Sistemas · Datos e IA aplicada · Santa Cruz, Bolivia',
    'hero.badge': 'Ingeniero de Sistemas · Datos · IA aplicada · Producción bancaria',
    'hero.bio': 'Convierto datos dispersos en reportes y modelos que un equipo puede usar para decidir: Python, SQL, Excel avanzado y Power BI. También construyo los sistemas que los sostienen — APIs, RAG, OCR y servicios cloud con Node.js y C#/.NET.',
    'hero.stats.prod': 'sistemas en producción',
    'hero.stats.rank': 'mundial · DEV3PACK 2026',
    'hero.stats.hackathons': 'hackathons internacionales',
    'hero.cta.connect': 'Contactar',
    'hero.cta.projects': 'Ver proyectos',
    'section.projects': 'Proyectos',
    'section.skills': 'Stack',
    'section.experience': 'Experiencia',
    'section.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    'meta.title': 'Dax Kenji Tellez Duran — Systems Engineer · Data & Applied AI',
    'meta.description': 'Portfolio of Dax Kenji Tellez Duran, Systems Engineer from Santa Cruz, Bolivia. Data analysis, applied AI and backend systems: Python, SQL, Power BI, RAG, OCR, Node.js and C# .NET.',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.pretitle': 'Systems Engineer · Data & Applied AI · Santa Cruz, Bolivia',
    'hero.badge': 'Systems Engineer · Data · Applied AI · Banking workflows',
    'hero.bio': 'I turn scattered data into reports and models a team can actually decide with: Python, SQL, advanced Excel and Power BI. I also build the systems behind them — APIs, RAG, OCR and cloud services with Node.js and C#/.NET.',
    'hero.stats.prod': 'production systems',
    'hero.stats.rank': 'worldwide · DEV3PACK 2026',
    'hero.stats.hackathons': 'international hackathons',
    'hero.cta.connect': 'Contact me',
    'hero.cta.projects': 'View work',
    'section.projects': 'Projects',
    'section.skills': 'Stack',
    'section.experience': 'Experience',
    'section.contact': 'Contact',
    'footer.rights': 'All rights reserved',
  }
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}
