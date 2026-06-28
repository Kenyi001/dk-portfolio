export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'meta.title': 'Dax Kenji Tellez Duran — AI Backend Engineer',
    'meta.description': 'Portfolio de Dax Kenji Tellez Duran, AI Backend Engineer en Santa Cruz, Bolivia. Sistemas RAG, OCR y LLM en producción bancaria con Node.js, TypeScript y C# .NET.',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'hero.pretitle': 'AI Backend Engineer · Santa Cruz, Bolivia',
    'hero.badge': 'RAG · OCR · LLM cost optimization · Banking production',
    'hero.bio': 'Diseño y construyo sistemas backend con IA para flujos reales de negocio: RAG, OCR, APIs seguras, Redis, Webhooks y servicios cloud listos para producción.',
    'hero.stats.prod': 'sistemas en producción',
    'hero.stats.rank': 'ranking mundial',
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
    'meta.title': 'Dax Kenji Tellez Duran — AI Backend Engineer',
    'meta.description': 'Portfolio of Dax Kenji Tellez Duran, AI Backend Engineer from Santa Cruz, Bolivia. Production RAG, OCR and LLM systems for banking workflows with Node.js, TypeScript and C# .NET.',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.pretitle': 'AI Backend Engineer · Santa Cruz, Bolivia',
    'hero.badge': 'RAG · OCR · LLM cost optimization · Banking production',
    'hero.bio': 'I design and build AI-powered backend systems for real business workflows: RAG, OCR, secure APIs, Redis, Webhooks and cloud services ready for production.',
    'hero.stats.prod': 'production systems',
    'hero.stats.rank': 'global ranking',
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
