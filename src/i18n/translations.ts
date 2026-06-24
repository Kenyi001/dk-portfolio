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
    'hero.badge': 'AI Engineer · LLM en producción bancaria · Web3',
    'hero.bio': 'Construyo sistemas de IA que corren en producción bancaria: RAG, optimización de tokens y OCR. También construyo en Web3 con contratos en Cardano y Stellar. Desde Santa Cruz, Bolivia.',
    'hero.stats.prod': 'en producción',
    'hero.stats.rank': 'mundial DEV3PACK',
    'hero.stats.hackathons': 'hackathons',
    'hero.cta.connect': '→ Hablemos',
    'hero.cta.projects': '→ Ver proyectos',
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
    'hero.badge': 'AI Engineer · LLM in banking production · Web3',
    'hero.bio': 'I build AI systems running in banking production: RAG, token optimization and OCR. I also build on Web3 with smart contracts on Cardano and Stellar. From Santa Cruz, Bolivia.',
    'hero.stats.prod': 'in production',
    'hero.stats.rank': 'worldwide DEV3PACK',
    'hero.stats.hackathons': 'hackathons',
    'hero.cta.connect': '→ Let\'s talk',
    'hero.cta.projects': '→ View projects',
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
