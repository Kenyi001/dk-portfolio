---
target: la interfaz completa (homepage/hero + sistema de diseño)
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:D:\\_Dev\\Projects\\dk-portfolio\\src\\pages\\index.astro"
target_fingerprint: "sha256:ebc417badb493e54191520086e1492033947d0c0676a6c3ab739e3c0b04e030c"
target_path: "D:\\_Dev\\Projects\\dk-portfolio\\src\\pages\\index.astro"
timestamp: 2026-09-19T19-17-21Z
slug: src-pages-index-astro
---
Method: dual-agent (A: a587c23f2f46f2ff8 · B: a9d8b1c0345b96473)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Filtro de proyectos tiene un flash visible en la transición (opacity→0 + display:none por setTimeout) |
| 2 | Match System / Real World | 3/4 | Metáforas de terminal/dev encajan bien con la audiencia backend |
| 3 | User Control and Freedom | 3/4 | Idioma persiste, back-link existe; sin gaps reales |
| 4 | Consistency and Standards | 2/4 | Cada sección del About reinventa su propio hover (translateY -4px vs -3px, box-shadow vs border-left) en vez de una clase compartida |
| 5 | Error Prevention | 3/4 | Links externos con rel correcto; sin formularios que rompan |
| 6 | Recognition Rather Than Recall | 3/4 | Estado activo de nav/filtro visible, back-link tipo breadcrumb |
| 7 | Flexibility and Efficiency | n/a | Superficie de showcase, sin flujos repetitivos que optimizar |
| 8 | Aesthetic and Minimalist Design | 2/4 | El hero solo ya corre: palabras de fondo en parallax + pretitle + lockup de nombre + H1 de 5 líneas + badge + bio + grid de 4 stats + signal-row de 6 chips + 2 CTAs + 4 links — sin un solo momento de silencio |
| 9 | Error Recovery | 3/4 | Nada roto observado; no se probó 404 exhaustivamente |
| 10 | Help and Documentation | n/a | No aplica a un portafolio/showcase |
| **Total** | | **22/32** | **Aceptable (69%)** |

## Design Specificity Verdict

**Veredicto dividido — y esa división es el diagnóstico real de "floja."**

El *contenido* es específico y difícil de fingir: empleadores reales (Hola S.R.L./BCP Bolivia), un sistema real en producción bancaria (Token Saver: crawler+RAG+Redis, 80% reducción de tokens), un ranking real de hackathon mundial (#89/3.500+ equipos), stacks específicos por proyecto (contratos de consenso GenLayer, middleware x402 USDC, Plutus/Haskell). `DK3D.astro` es una proyección 3D isométrica hecha a mano (matrices de rotación, pintado por z-order, drag, "explode" por scroll) — trabajo de autor real, no una escena de Three.js de stock.

El *envoltorio visual* de ese contenido, en cambio, es exactamente el vocabulario más genérico de "portafolio dev hecho con IA" ahora mismo: fondo oscuro + par terracota/menta, labels mono tipo sistema (`// build_success`), puntos verdes parpadeantes (3 instancias independientes), cards con borde+glow+lift idénticos usados para skills, experiencia, logros, comunidad y proyectos por igual. Nada de esto está mal aislado, pero es *el* output por defecto de generación de portafolios con IA en 2025-2026 — un reclutador que ya vio diez de estos este mes reconoce el envoltorio antes de registrar el contenido de adentro.

Por eso "se ve algo floja" es correcto y estructural, no cosmético: la página tiene munición real (banca en producción, hackathon top mundial) pero la dispara a través de una plantilla que le da a una pasantía de soporte IT y a un resultado top-100-mundial **exactamente el mismo peso visual**. Misma card, mismo borde, mismo hover. El único flag que distingue algo (`isTokenSaver` en ProjectCard.astro) es un booleano legado que ya no describe lo que marca.

**Escaneo determinista** (`impeccable detect`): 3 side-tab borders (el tell más reconocible de UI generada por IA), fuente Space Grotesk sobreusada (cargada además duplicada: `@import` + `<link>`), 2 animaciones de layout-thrash (`max-height/padding` en Nav, `width` en scroll-bar). El agente de evidencia técnica confirmó los side-tabs en vivo — y encontró que el de `CommunityNodes.astro` no es solo estético: el borde de 3px que aparece solo en `:hover` desplaza el contenido de la card ~2px porque no hay ancho reservado. Es un bug de layout, no solo un tell visual.

## Overall Impression

El contenido de este portafolio es más fuerte que el 90% de portafolios junior/semi-senior que existen. El problema no es lo que dice, es que lo dice todo al mismo volumen. Un reclutador que ve el banking-production Token Saver y el script de WhatsApp masivo en la misma card, mismo borde, mismo peso — no tiene forma de saber en 3 segundos cuál es el proyecto que importa.

## What's Working

- **DK3D.astro**: 3D isométrico hecho a mano, drag-to-rotate, explode por scroll. La señal de especificidad más fuerte del sitio, y está sub-explotada (oculta por completo debajo de 1200px de ancho).
- **Hero stat row** (2 en producción / #89 mundial / 81 tests / 4+ hackathons): buen instinto — convierte auto-descripción vaga en números verificables de inmediato.
- **CSS con medidas documentadas en comentarios** en `[slug].astro` (mediciones reales antes/después de refactor). Invisible para el visitante, pero señala rigor real de iteración.

## Priority Issues

**[P0] El hero mobile entierra la prueba y el CTA bajo ~1.5 pantallas de preámbulo**
Confirmado por captura directa en 375×812: pretitle → nombre → H1 de 5 líneas → badge → bio completo, todo renderiza antes de que el stat-grid o cualquier CTA sea visible. Un link de portafolio se abre desproporcionadamente desde mobile (compartido por LinkedIn/WhatsApp) — es el punto de entrada de mayor tráfico siendo el peor optimizado para llegar rápido a la prueba.
**Fix:** en mobile, comprimir el título a 2-3 líneas y mover `.hero-stats` arriba del bio, o cortar el bio a una oración y dejar que el stat-grid quede justo debajo del badge.
**Comando sugerido:** `/impeccable adapt`

**[P1] La identidad se repite 3 veces en 3 registros tipográficos antes de agregar información nueva**
`pre-title`, `badge-role` y `signal-row` dicen "hago backend/IA/datos" en tres formatos distintos dentro de ~400px, contribuyendo directamente al problema de scroll del P0.
**Fix:** cortar `signal-row` del hero (ya está repetido en SkillsSection) o fusionarlo en el badge; mantener una sola declaración de identidad.
**Comando sugerido:** `/impeccable distill`

**[P1] 13 project cards con el mismo peso visual, con solo un booleano legado distinguiendo dos**
`isTokenSaver` (título/slug hardcodeados) es la única diferenciación visual en todo el grid, y su nombre ya no coincide con lo que marca. El proyecto con más prueba real (banking production) tiene el mismo chrome que un script personal de WhatsApp.
**Fix:** el campo `featured: true` ya existe en el frontmatter pero no está conectado a ningún tratamiento visual en ProjectCard.astro — conectarlo, y dar a los featured una tipografía/tamaño genuinamente distinto, no solo un borde con más alfa.
**Comando sugerido:** `/impeccable bolder` (scope: ProjectCard.astro, cards featured)

**[P1] Redirect de idioma client-side causa flash + doble navegación**
`src/pages/index.astro` hace un check de `navigator.language` después de que la página ES ya renderizó completo, y fuerza un `window.location.replace('/en/')` — un visitante angloparlante ve un flash de español seguido de una recarga completa hasta que `sessionStorage` marca `lang-chosen`. Confirmado en vivo durante la auditoría.
**Fix:** mover el check a middleware de Astro leyendo `Accept-Language` server-side, en vez de un reload client-side.
**Comando sugerido:** `/impeccable harden`

**[P2] Seis-más elementos animados compitiendo sin jerarquía**
Dos auras a la deriva, una capa de palabras en parallax, tres puntos parpadeantes definidos independientemente (Nav, contact, ProjectsGrid — mismo keyframe copiado 3 veces), un pulse-glow, y la rotación idle de DK3D — nada cede protagonismo a lo demás.
**Fix:** elegir una firma de movimiento (candidato: DK3D, es lo más propio) y atenuar o quitar el resto — especialmente los puntos parpadeantes redundantes.
**Comando sugerido:** `/impeccable quieter`

**[P2] Prisma/LedgerLens: nombre inconsistente de punta a punta**
El archivo de contenido dice `title: "Prisma"` en todos lados, pero el nombre de archivo, la ruta (`/projects/ledgerlens`), la URL del repo y ahora la imagen (`/projects/prisma-dashboard.jpg`) siguen diciendo "ledgerlens". Un hiring manager técnico que revisa el link del repo ve dos nombres distintos para un proyecto — se lee como un rename sin terminar.
**Fix:** renombrar el slug/archivo a `prisma.md` para que la identidad sea consistente de punta a punta.
**Comando sugerido:** `/impeccable harden`

## Persona Red Flags

**Reclutador, skim de 30 segundos (probablemente mobile):**
- Nunca ve un stat o CTA antes de scrollear todo el preámbulo del hero (P0) — probablemente rebota antes de llegar a "2 en producción / #89 mundial."
- Si llega al grid, las 13 cards pesan lo mismo visualmente — nada le dice en 3 segundos cuál proyecto es "el real" (banca en producción) vs. un build de fin de semana.
- El link de CV en el Hero está hardcodeado al mismo PDF en español tanto en ES como EN (`lang` no se chequea en ese href) — un reclutador angloparlante que clickea "CV" desde `/en/` recibe un archivo cuyo nombre señala español.

**Hiring manager técnico, lectura profunda:**
- Respondería bien a la especificidad de ExperienceSection (crawler+RAG+Redis, 80% reducción) — legible, creíble, bien escrito.
- Se topa con el mismatch Prisma/LedgerLens en el primer proyecto que abre y lo registra como un gap de revisión — desgasta la confianza que la sección de experiencia acababa de construir.
- Sin señal de profundidad de ownership en las listas de stack: 12 chips planos en Prisma no distinguen "construí esta integración" de "llamé a esta API."

## Minor Observations

- `Nav.astro` define `@keyframes blink` que nunca se aplica a ningún elemento — CSS muerto.
- La animación blink está redefinida independientemente en `contact.astro` y `ProjectsGrid.astro` (mismo keyframe de 4 líneas, copy-pasteado dos veces) en vez de vivir una vez en global.css.
- `EducationSection.astro` es casi un duplicado estructural de una sola job-card de ExperienceSection, pero recibe su propia sección de ancho completo con su propio eyebrow/H2 — un beat entero de página para el contenido de una sola entrada.
- Google Fonts (Space Grotesk) se carga duplicado: una vez vía `@import` en global.css y otra vía `<link>` en BaseLayout — fetch/parse doble en cache fría.
- Durante scroll rápido, la sección Skills puede verse momentáneamente lavada/ilegible mientras el `IntersectionObserver` de `[data-reveal]` (600ms) se pone al día — se resuelve en ~1s, no es grave pero es real.

## Questions to Consider

- ¿Qué pasaría si el hero mostrara *solo* los stats y el nombre en el primer viewport mobile, y todo lo demás quedara un scroll más abajo?
- ¿El grid de proyectos necesita 13 cards al mismo volumen, o 3-4 "featured" y el resto en una lista más compacta?
- ¿Qué versión de este portafolio se sentiría segura de sí misma sin necesitar seis elementos en movimiento para sostener la atención?
