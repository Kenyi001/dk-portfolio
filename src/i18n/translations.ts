export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'meta.title': 'Dax Kenji Tellez Duran — Backend Engineer & AI Developer',
    'meta.description': 'Portfolio de Dax Kenji Tellez Duran, Backend Engineer & AI Developer en Santa Cruz, Bolivia. RAG, LLMs, Voice AI, Node.js, TypeScript.',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'hero.pretitle': '// inicializando · backend → fullstack · santa cruz, bo',
    'hero.badge': '▶ BACKEND & AI · CRECIENDO A FULLSTACK · SCZ, BO',
    'hero.bio': 'Backend engineer especializado en sistemas de IA — construyendo hacia fullstack. De Santa Cruz, Bolivia, en el cruce de producción bancaria y Web3.',
    'hero.cta.connect': '→ CONECTAR_SISTEMA',
    'hero.cta.projects': '→ VER_PROYECTOS',
    'section.projects': 'Proyectos',
    'section.skills': 'Stack',
    'section.experience': 'Experiencia',
    'section.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    'meta.title': 'Dax Kenji Tellez Duran — Backend Engineer & AI Developer',
    'meta.description': 'Portfolio of Dax Kenji Tellez Duran, Backend Engineer & AI Developer from Santa Cruz, Bolivia. RAG, LLMs, Voice AI, Node.js, TypeScript.',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.pretitle': '// initializing · backend → fullstack · santa cruz, bo',
    'hero.badge': '▶ BACKEND & AI · GROWING TO FULLSTACK · SCZ, BO',
    'hero.bio': 'Backend engineer specialized in AI systems — building towards fullstack. From Santa Cruz, Bolivia, at the intersection of banking production and Web3.',
    'hero.cta.connect': '→ CONNECT',
    'hero.cta.projects': '→ VIEW_PROJECTS',
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
