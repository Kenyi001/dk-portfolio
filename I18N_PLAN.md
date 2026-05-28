# Plan: Multilenguaje ES/EN para daxkenyi.is-a.dev

## Estrategia

- `/` → Español (default, sin prefijo)
- `/en/` → English
- Cada página tiene su versión en ambos idiomas
- hreflang tags en el `<head>` para que Google sepa que son el mismo contenido

## Archivos a crear/modificar

---

### PASO 1 — astro.config.mjs

Agregar configuración i18n de Astro 4+:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://daxkenyi.is-a.dev',
  output: 'static',
  integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } } })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  build: { assets: '_assets' }
});
```

---

### PASO 2 — Crear archivo de traducciones

**Archivo nuevo:** `src/i18n/translations.ts`

```ts
export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    // Meta
    'meta.title': 'Dax Kenji Tellez Duran — Backend Engineer & AI Developer',
    'meta.description': 'Portfolio de Dax Kenji Tellez Duran, Backend Engineer & AI Developer en Santa Cruz, Bolivia. RAG, LLMs, Voice AI, Node.js, TypeScript.',

    // Nav
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',

    // Hero
    'hero.pretitle': '// inicializando · backend → fullstack · santa cruz, bo',
    'hero.badge': '▶ BACKEND & AI · CRECIENDO A FULLSTACK · SCZ, BO',
    'hero.bio': 'Backend engineer especializado en sistemas de IA — construyendo hacia fullstack. De Santa Cruz, Bolivia, en el cruce de producción bancaria y Web3.',
    'hero.cta.connect': '→ CONECTAR_SISTEMA',
    'hero.cta.projects': '→ VER_PROYECTOS',

    // Sections
    'section.projects': 'Proyectos',
    'section.skills': 'Stack',
    'section.experience': 'Experiencia',
    'section.contact': 'Contacto',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    // Meta
    'meta.title': 'Dax Kenji Tellez Duran — Backend Engineer & AI Developer',
    'meta.description': 'Portfolio of Dax Kenji Tellez Duran, Backend Engineer & AI Developer from Santa Cruz, Bolivia. RAG, LLMs, Voice AI, Node.js, TypeScript.',

    // Nav
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.pretitle': '// initializing · backend → fullstack · santa cruz, bo',
    'hero.badge': '▶ BACKEND & AI · GROWING TO FULLSTACK · SCZ, BO',
    'hero.bio': 'Backend engineer specialized in AI systems — building towards fullstack. From Santa Cruz, Bolivia, at the intersection of banking production and Web3.',
    'hero.cta.connect': '→ CONNECT',
    'hero.cta.projects': '→ VIEW_PROJECTS',

    // Sections
    'section.projects': 'Projects',
    'section.skills': 'Stack',
    'section.experience': 'Experience',
    'section.contact': 'Contact',

    // Footer
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
```

---

### PASO 3 — Actualizar BaseLayout.astro

Agregar prop `lang` y hreflang tags:

```astro
---
// agregar al frontmatter
import { getLangFromUrl, useTranslations } from '../i18n/translations';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

interface Props {
  title?: string;
  description?: string;
}
const {
  title = t('meta.title'),
  description = t('meta.description')
} = Astro.props;
---
```

Agregar dentro del `<head>` después del canonical:

```html
<!-- hreflang: le dice a Google que hay versión en otro idioma -->
<link rel="alternate" hreflang="es" href="https://daxkenyi.is-a.dev{Astro.url.pathname}" />
<link rel="alternate" hreflang="en" href="https://daxkenyi.is-a.dev/en{Astro.url.pathname}" />
<link rel="alternate" hreflang="x-default" href="https://daxkenyi.is-a.dev{Astro.url.pathname}" />
```

Cambiar `<html lang="es">` por `<html lang={lang}>`.

---

### PASO 4 — Crear páginas en inglés

**Páginas a crear (copiar las españolas y traducir contenido):**

```
src/pages/en/index.astro       ← copia de src/pages/index.astro
src/pages/en/about.astro       ← copia de src/pages/about.astro
src/pages/en/contact.astro     ← copia de src/pages/contact.astro
src/pages/en/projects/[slug].astro ← copia de src/pages/projects/[slug].astro
```

Cada página en inglés debe pasar `lang="en"` y usar traducciones del archivo en PASO 2.

---

### PASO 5 — Selector de idioma en Nav

**Archivo a modificar:** `src/components/Nav.astro`

Agregar botón de cambio de idioma al lado derecho del nav:

```astro
---
import { getLangFromUrl } from '../i18n/translations';
const lang = getLangFromUrl(Astro.url);
const otherLang = lang === 'es' ? 'en' : 'es';
const otherLangPath = lang === 'es'
  ? `/en${Astro.url.pathname}`
  : Astro.url.pathname.replace(/^\/en/, '') || '/';
---

<!-- Agregar en el nav, después de los links -->
<a href={otherLangPath} class="lang-switch" aria-label="Switch language">
  {lang === 'es' ? 'EN' : 'ES'}
</a>
```

CSS para el botón:
```css
.lang-switch {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--ink-secondary);
  border: 1px solid var(--border-color);
  padding: 4px 10px;
  border-radius: 4px;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;
}
.lang-switch:hover {
  color: var(--accent);
  border-color: var(--accent);
}
```

---

### PASO 6 — Build y verificación

```bash
cd D:\_Dev\Projects\dk-portfolio
npm run build

# Verificar que existen:
# dist/index.html          ← español
# dist/en/index.html       ← inglés
# dist/sitemap-index.xml   ← debe incluir ambas versiones

git add -A
git commit -m "feat: add EN/ES multilanguage with i18n routing and hreflang tags"
git push origin main
```

---

## URLs resultantes

| Página | Español | Inglés |
|--------|---------|--------|
| Home | `daxkenyi.is-a.dev/` | `daxkenyi.is-a.dev/en/` |
| Proyectos | `daxkenyi.is-a.dev/projects` | `daxkenyi.is-a.dev/en/projects` |
| Sobre mí | `daxkenyi.is-a.dev/about` | `daxkenyi.is-a.dev/en/about` |
| Contacto | `daxkenyi.is-a.dev/contact` | `daxkenyi.is-a.dev/en/contact` |

## Notas para el agente

- NO usar `output: 'server'` — mantener SSG estático
- Si una key de traducción no existe en EN, caer al ES por defecto
- El selector de idioma debe funcionar en todas las páginas, no solo el home
- Verificar que hreflang no tenga trailing slash inconsistente
- El sitemap generado por @astrojs/sitemap con i18n config incluye automáticamente
  ambas versiones con los atributos hreflang correctos
