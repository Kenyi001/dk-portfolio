# Plan: Multilenguaje ES/EN para daxkenyi.is-a.dev

---

## ⚠️ INSTRUCCIONES CRÍTICAS PARA EL AGENTE

### Directorio de trabajo correcto

El repositorio real que está conectado a GitHub y Vercel es:
```
D:\_Dev\Projects\dk-portfolio\
```

El directorio `E:\_Project\Portafolio\dk-portfolio\` es un entorno de staging
que NO tiene autenticación de Git configurada — los commits ahí no se pueden
pushear. SIEMPRE trabajar en `D:`.

Antes de cada paso, confirmar ubicación con:
```bash
cd D:\_Dev\Projects\dk-portfolio
git remote get-url origin
# Debe responder: https://github.com/Kenyi001/dk-portfolio.git
git log --oneline -3
# Debe mostrar commits recientes del proyecto
```

### Protocolo de revisión antes de modificar

ANTES de editar cualquier archivo, el agente DEBE leerlo completo con Read tool.
Nunca sobreescribir sin revisar el contenido actual — el archivo puede tener
cambios recientes que no están en este plan.

Orden obligatorio para cada archivo:
1. Leer el archivo completo
2. Identificar qué ya existe vs qué hay que agregar
3. Usar Edit (diff) en lugar de Write (sobreescritura) cuando sea posible
4. Solo usar Write si el archivo NO existe aún

---

## Estrategia de implementación

- `/` → Español (default, sin prefijo de URL)
- `/en/` → English
- Cada página tiene su versión en ambos idiomas
- `hreflang` tags en el `<head>` para que Google indexe ambas versiones

---

## PASO 0 — Pre-flight: leer el estado actual antes de tocar nada

El agente debe ejecutar esto PRIMERO y reportar lo que encuentra:

```bash
# 1. Confirmar directorio correcto
cd D:\_Dev\Projects\dk-portfolio
git status
git log --oneline -5

# 2. Listar estructura de páginas actuales
Get-ChildItem src/pages -Recurse -Filter "*.astro" | Select-Object FullName

# 3. Listar componentes actuales
Get-ChildItem src/components -Filter "*.astro" | Select-Object Name

# 4. Verificar si ya existe algún intento de i18n
Test-Path src/i18n
Test-Path src/pages/en

# 5. Leer los 4 archivos que se van a modificar
# (usar Read tool en cada uno)
# - astro.config.mjs
# - src/layouts/BaseLayout.astro
# - src/components/Nav.astro
# - src/pages/index.astro
```

Si ya existe `src/i18n/` o `src/pages/en/`, reportar el contenido antes de continuar.
No asumir que el estado es el del plan — el estado real manda.

---

## PASO 1 — astro.config.mjs

**Ruta absoluta:** `D:\_Dev\Projects\dk-portfolio\astro.config.mjs`

**Acción:** Leer primero, luego agregar `i18n` y actualizar el `sitemap` integration.
No borrar nada que ya exista — solo agregar lo que falta.

**Estado esperado del archivo antes de editar:**
```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://daxkenyi.is-a.dev',
  output: 'static',
  integrations: [sitemap()],
  build: { assets: '_assets' }
});
```

**Resultado después de editar:**
```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://daxkenyi.is-a.dev',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' }
      }
    })
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  build: { assets: '_assets' }
});
```

---

## PASO 2 — Crear archivo de traducciones (archivo nuevo)

**Ruta absoluta:** `D:\_Dev\Projects\dk-portfolio\src\i18n\translations.ts`

**Acción:** Crear directorio `src/i18n/` si no existe, luego crear el archivo.
Usar Write tool (es archivo nuevo, no existe).

```ts
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
```

---

## PASO 3 — Actualizar BaseLayout.astro

**Ruta absoluta:** `D:\_Dev\Projects\dk-portfolio\src\layouts\BaseLayout.astro`

**Acción:** Leer completo primero. Hacer 3 cambios puntuales con Edit tool:

**Cambio A — Frontmatter:** agregar imports y usar traducciones
```astro
---
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
import Analytics from '@vercel/analytics/astro';
import SpeedInsights from '@vercel/speed-insights/astro';
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

**Cambio B — etiqueta html:** cambiar `lang="es"` fijo por dinámico
```html
<html lang={lang}>
```

**Cambio C — hreflang:** agregar después del `<link rel="canonical">` existente
```html
<!-- hreflang: versiones del sitio en cada idioma -->
<link rel="alternate" hreflang="es" href={`https://daxkenyi.is-a.dev${lang === 'en' ? Astro.url.pathname.replace(/^\/en/, '') || '/' : Astro.url.pathname}`} />
<link rel="alternate" hreflang="en" href={`https://daxkenyi.is-a.dev/en${lang === 'en' ? Astro.url.pathname.replace(/^\/en/, '') || '/' : Astro.url.pathname}`} />
<link rel="alternate" hreflang="x-default" href={`https://daxkenyi.is-a.dev${lang === 'en' ? Astro.url.pathname.replace(/^\/en/, '') || '/' : Astro.url.pathname}`} />
```

---

## PASO 4 — Actualizar Nav.astro

**Ruta absoluta:** `D:\_Dev\Projects\dk-portfolio\src\components\Nav.astro`

**Acción:** Leer completo primero. Agregar selector de idioma.

**Cambio en frontmatter (entre los `---`):** agregar al inicio
```astro
import { getLangFromUrl } from '../i18n/translations';
const lang = getLangFromUrl(Astro.url);
const switchPath = lang === 'es'
  ? `/en${Astro.url.pathname === '/' ? '' : Astro.url.pathname}`
  : Astro.url.pathname.replace(/^\/en/, '') || '/';
```

**Cambio en HTML:** agregar el botón al final del nav, antes del `</nav>` de cierre
```html
<a href={switchPath} class="lang-switch" aria-label="Cambiar idioma">
  {lang === 'es' ? 'EN' : 'ES'}
</a>
```

**Cambio en CSS (dentro del `<style>`):** agregar al final del bloque
```css
.lang-switch {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
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

## PASO 5 — Crear páginas en inglés (archivos nuevos)

**Acción:** Leer cada página española original, luego crear su versión en `/en/`.
Usar Write tool (son archivos nuevos).

### `D:\_Dev\Projects\dk-portfolio\src\pages\en\index.astro`
Leer primero: `D:\_Dev\Projects\dk-portfolio\src\pages\index.astro`
Copiar estructura, cambiar el title/description a traducciones EN.

### `D:\_Dev\Projects\dk-portfolio\src\pages\en\about.astro`
Leer primero: `D:\_Dev\Projects\dk-portfolio\src\pages\about.astro`

### `D:\_Dev\Projects\dk-portfolio\src\pages\en\contact.astro`
Leer primero: `D:\_Dev\Projects\dk-portfolio\src\pages\contact.astro`

### `D:\_Dev\Projects\dk-portfolio\src\pages\en\projects\[slug].astro`
Leer primero: `D:\_Dev\Projects\dk-portfolio\src\pages\projects\[slug].astro`

---

## PASO 6 — Build, verificación y push

```bash
cd D:\_Dev\Projects\dk-portfolio

# Build
npm run build

# Verificar archivos generados
Test-Path dist/index.html          # español ✓
Test-Path dist/en/index.html       # inglés ✓
Test-Path dist/sitemap-index.xml   # sitemap ✓

# Si el build falla:
# 1. Leer el error completo
# 2. NO hacer push
# 3. Corregir y rebuildear antes de continuar

# Si el build pasa:
git add -A
git commit -m "feat: add EN/ES multilanguage with i18n routing and hreflang tags"
git push origin main
# Verificar que el push fue exitoso antes de terminar
```

---

## PASO 7 — Verificación post-deploy

Esperar 3 minutos que Vercel deployé, luego confirmar:

```
https://daxkenyi.is-a.dev/        → debe mostrar sitio en español
https://daxkenyi.is-a.dev/en/     → debe mostrar sitio en inglés
https://daxkenyi.is-a.dev/sitemap-index.xml → debe listar URLs en ambos idiomas
```

El switch ES/EN en el nav debe aparecer en todas las páginas y funcionar correctamente.

---

## URLs resultantes

| Página | Español | Inglés |
|--------|---------|--------|
| Home | `daxkenyi.is-a.dev/` | `daxkenyi.is-a.dev/en/` |
| Proyectos | `daxkenyi.is-a.dev/projects` | `daxkenyi.is-a.dev/en/projects` |
| Sobre mí | `daxkenyi.is-a.dev/about` | `daxkenyi.is-a.dev/en/about` |
| Contacto | `daxkenyi.is-a.dev/contact` | `daxkenyi.is-a.dev/en/contact` |

---

## Reglas para el agente — NO hacer

- ❌ No trabajar en `E:\_Project\Portafolio\dk-portfolio\` (no tiene auth de Git)
- ❌ No usar Write tool en archivos que ya existen — usar Edit (diff)
- ❌ No hacer push si `npm run build` falla
- ❌ No borrar contenido existente de archivos al agregar traducciones
- ❌ No cambiar `output: 'static'` ni quitar los imports de Analytics/SpeedInsights
- ❌ No usar `output: 'server'` — el sitio es SSG
