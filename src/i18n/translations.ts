export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'meta.title': 'Dax Kenji Tellez Duran — AI & Backend Engineer',
    'meta.description': 'Portfolio de Dax Kenji Tellez Duran, AI & Backend Engineer en Santa Cruz, Bolivia. Sistemas LLM en producción bancaria, RAG, Web3, Node.js, TypeScript.',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'hero.pretitle': '// ia_en_producción · web3 · santa cruz, bolivia',
    'hero.badge': '▶ AI ENGINEER · LLM EN BANCA REAL · WEB3 BUILDER',
    'hero.bio': 'Construyo sistemas de IA que corren en producción bancaria — RAG, optimización de tokens, OCR — y smart contracts premiados en hackathons de Cardano y Stellar. Desde Santa Cruz, Bolivia.',
    'hero.cta.connect': '→ CONECTAR_SISTEMA',
    'hero.cta.projects': '→ VER_PROYECTOS',
    'section.projects': 'Proyectos',
    'section.skills': 'Stack',
    'section.experience': 'Experiencia',
    'section.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    'meta.title': 'Dax Kenji Tellez Duran — AI & Backend Engineer',
    'meta.description': 'Portfolio of Dax Kenji Tellez Duran, AI & Backend Engineer from Santa Cruz, Bolivia. LLM systems in banking production, RAG, Web3, Node.js, TypeScript.',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.pretitle': '// ai_in_production · web3 · santa cruz, bolivia',
    'hero.badge': '▶ AI ENGINEER · LLM IN REAL BANKING · WEB3 BUILDER',
    'hero.bio': 'I build AI systems running in banking production — RAG, token optimization, OCR — and award-winning smart contracts from Cardano and Stellar hackathons. From Santa Cruz, Bolivia.',
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
