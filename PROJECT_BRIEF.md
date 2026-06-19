# PROJECT_BRIEF — Dominio del portafolio

Guía para entender y **defender** tu propia web. Leéla una vez y vas a poder
explicar cualquier parte en una entrevista.

---

## 1. Qué es, en una frase
Un portafolio **estático y bilingüe (ES/EN)** hecho con **Astro 6**, desplegado
en **Vercel**. No usa React/Next para las páginas: Astro genera HTML en el
*build*, así que carga rapidísimo y casi no manda JavaScript al navegador.

## 2. Stack y por qué
| Pieza | Qué hace | Por qué se eligió |
|-------|----------|-------------------|
| **Astro 6** | Framework de sitios estáticos | HTML en build-time = velocidad + SEO. "Islands": JS solo donde hace falta. |
| **Vercel** | Hosting + deploy | Deploy automático desde git, CDN global, analytics. |
| **Content Collections** | Proyectos en Markdown | Cada proyecto es un `.md` validado por un schema (Zod). |
| **@fontsource** | Fuentes self-hosted | Space Grotesk + JetBrains Mono sin depender de Google Fonts en runtime. |
| **Satori / resvg** | Genera la imagen OG | `og.png` social se crea en build desde código. |

## 3. Mapa de archivos (lo que importa)
```
src/
├── pages/            ← cada archivo = una URL
│   ├── index.astro          /            (home español)
│   ├── en/index.astro       /en/         (home inglés)
│   ├── about|contact|...    /about, /contact …
│   ├── projects/[slug].astro  /projects/token-saver  (página por proyecto)
│   └── og.png.ts            genera la imagen social
├── components/       ← bloques reutilizables (.astro)
│   ├── Hero, ProjectsGrid, ProjectCard, SkillsSection,
│   │   ExperienceSection, EducationSection, CommunityNodes,
│   │   LearningPath, Nav, Footer, DK3D (canvas del fondo)
├── content/projects/ ← los 7 proyectos en Markdown (la "base de datos")
├── content.config.ts ← schema: qué campos puede tener un proyecto
├── i18n/translations.ts ← todos los textos ES/EN del hero/nav
├── layouts/BaseLayout.astro ← cabecera HTML común (meta, fuentes, canvas)
└── styles/global.css ← variables de color, tipografía, fondo
```

## 4. Cómo funcionan las 3 cosas que te van a preguntar

### a) i18n (los dos idiomas)
- Español vive en `/`, inglés en `/en/`. Son páginas separadas que comparten
  componentes.
- Los componentes detectan el idioma con `getLangFromUrl(Astro.url)` (mira si la
  URL empieza con `/en`) y eligen el texto con `useTranslations()`
  (`src/i18n/translations.ts`).
- En `index.astro` hay un script que **redirige a `/en/` si el navegador está en
  inglés**, salvo que el usuario ya haya elegido idioma a mano (`sessionStorage`).

### b) Los proyectos (Content Collections)
- Cada proyecto es un archivo en `src/content/projects/*.md` con un *front-matter*
  (title, stack, role, metrics, repoUrl, demoUrl…) + cuerpo en Markdown.
- El **schema** en `content.config.ts` valida esos campos: si te falta uno
  obligatorio, **el build falla**. Por eso es confiable.
- `ProjectsGrid.astro` los carga con `getCollection('projects')`, los ordena por
  fecha y los pinta como `ProjectCard`. La página individual la genera
  `projects/[slug].astro` (una por proyecto, automático).
- **Para editar/añadir un proyecto: tocás solo su `.md`.** No hay base de datos.

### c) El fondo y el render
- `DK3D.astro` y el canvas `#bg-grid` dibujan la grilla de puntos reactiva al
  mouse. Es lo más "propio" del diseño.
- Los colores y fuentes son **variables CSS** en `global.css` (`--accent`,
  `--ink-primary`, etc.). Cambiar el tema = cambiar esas variables.

## 5. Comandos
```bash
npm run dev      # servidor local (localhost:4321)
npm run build    # genera dist/ (valida el schema)
npm run preview  # sirve el build ya hecho
```

## 6. Decisiones de diseño que conviene poder justificar
- **¿Por qué Astro y no Next?** "Es un sitio de contenido, no una app. Astro
  manda casi cero JS, así que es más rápido y mejor para SEO. Si necesito
  interactividad puntual, uso una isla."
- **¿Por qué Markdown para los proyectos?** "Para separar contenido de
  presentación y poder agregar un proyecto sin tocar componentes. El schema Zod
  me garantiza que los datos están completos."
- **¿Por qué bilingüe?** "Mi mercado es local (Bolivia) y remoto/global. ES por
  defecto, EN para reclutadores internacionales."

## 7. Pendientes honestos (para no inventar en una entrevista)
- **Evidencia mixta:** solo `enaid` y `ledgerlens` tienen `repoUrl`/`demoUrl`
  públicos. Los proyectos del banco (token-saver, ocr-pipeline) son privados por
  NDA: eso se dice tal cual, no se inventan repos ni cifras.
- Si conseguís repos/demos públicos de los otros proyectos, agregá `repoUrl:` y
  `demoUrl:` en su `.md` y la tarjeta muestra sola los botones `[ OPEN_SOURCE ]`
  / `[ LIVE_DEMO ]`.
- Las métricas (`metrics:` en cada `.md`) deberían ser números reales y
  verificables. Donde no tengas un número medido, describí el resultado sin
  porcentajes inventados.
