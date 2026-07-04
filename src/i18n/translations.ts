export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'meta.title': 'Dax Kenji Tellez Duran — Backend & Fullstack Engineer',
    'meta.description': 'Portfolio de Dax Kenji Tellez Duran, Backend & Fullstack Engineer en Santa Cruz, Bolivia. Node.js, TypeScript, C# .NET, sistemas RAG, OCR y productos web.',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'hero.pretitle': 'Backend & Fullstack Engineer · Santa Cruz, Bolivia',
    'hero.badge': 'Backend · Fullstack · Applied AI · Banking workflows',
    'hero.bio': 'Construyo APIs, backoffices y productos web con Node.js, TypeScript y C#/.NET. También llevo IA aplicada a flujos reales: RAG, OCR, Redis, Webhooks y servicios cloud.',
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
    'meta.title': 'Dax Kenji Tellez Duran — Backend & Fullstack Engineer',
    'meta.description': 'Portfolio of Dax Kenji Tellez Duran, Backend & Fullstack Engineer from Santa Cruz, Bolivia. Node.js, TypeScript, C# .NET, RAG, OCR and shipped web products.',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.pretitle': 'Backend & Fullstack Engineer · Santa Cruz, Bolivia',
    'hero.badge': 'Backend · Fullstack · Applied AI · Banking workflows',
    'hero.bio': 'I build APIs, backoffices and web products with Node.js, TypeScript and C#/.NET. I also bring applied AI into real workflows: RAG, OCR, Redis, Webhooks and cloud services.',
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
