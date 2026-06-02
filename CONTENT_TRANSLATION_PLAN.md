# Plan: Completar Traducciones de Contenido — dk-portfolio

## Directorio de trabajo ÚNICO válido para git push
```
D:\_Dev\Projects\dk-portfolio\
```
> ⚠️ Si trabajas en E:\_Project\Portafolio\dk-portfolio\ no podrás hacer push.
> Copia los archivos editados a D: y haz `git push` solo desde D:.

---

## Pre-flight — Ejecutar ANTES de editar

```bash
# 1. Confirmar directorio y rama
cd D:\_Dev\Projects\dk-portfolio
git status
git branch

# 2. Verificar que no hay cambios sin commitear que puedan perderse
git diff --stat

# 3. Leer CADA archivo antes de editarlo (usar Read, no cat)
#    Archivos a editar en este plan:
#    - src/pages/en/projects/[slug].astro
#    - src/components/ProjectsGrid.astro
#    - src/components/ExperienceSection.astro
#    - src/components/SkillsSection.astro
```

---

## Cambio 1 — `src/pages/en/projects/[slug].astro`
**Objetivo:** usar campos `_en` del frontmatter en la página de detalle en inglés.

### Estado actual (líneas problemáticas)
```astro
// línea 24
<BaseLayout title={`${entry.data.title} | Dax Kenji`} description={entry.data.description}>

// línea 33
<h1 class="title">{entry.data.title}</h1>

// línea 35
<span class="role-line">ROLE → {entry.data.role}</span>

// línea 37
<p class="description">{entry.data.longDescription || entry.data.description}</p>
```

### Cambios con Edit (diff exacto)

**Edit 1 — BaseLayout title y description:**
```
old: <BaseLayout title={`${entry.data.title} | Dax Kenji`} description={entry.data.description}>
new: <BaseLayout title={`${entry.data.title_en || entry.data.title} | Dax Kenji`} description={entry.data.description_en || entry.data.description}>
```

**Edit 2 — h1 title:**
```
old: <h1 class="title">{entry.data.title}</h1>
new: <h1 class="title">{entry.data.title_en || entry.data.title}</h1>
```

**Edit 3 — role-line:**
```
old: <span class="role-line">ROLE → {entry.data.role}</span>
new: <span class="role-line">ROLE → {entry.data.role_en || entry.data.role}</span>
```

**Edit 4 — description paragraph:**
```
old: <p class="description">{entry.data.longDescription || entry.data.description}</p>
new: <p class="description">{entry.data.longDescription_en || entry.data.longDescription || entry.data.description_en || entry.data.description}</p>
```

---

## Cambio 2 — `src/components/ProjectsGrid.astro`
**Objetivo:** traducir los botones de filtro según idioma.

### Estado actual (líneas 26-31 aprox.)
```astro
---
import { getCollection } from 'astro:content';
import ProjectCard from './ProjectCard.astro';
import { getLangFromUrl } from '../i18n/translations';
```
> `getLangFromUrl` ya está importado — solo hay que usarlo para los labels.

### Cambio — frontmatter: agregar variable de labels

Después de la línea `const lang = getLangFromUrl(Astro.url);`, agregar:
```
old: const lang = getLangFromUrl(Astro.url);
new: const lang = getLangFromUrl(Astro.url);

// Filter button labels by language
const filterLabels = {
  all:          lang === 'en' ? '[ ALL ]'          : '[ TODOS ]',
  ai:           '[ AI SYSTEMS ]',
  web3:         '[ WEB3 ]',
  profesional:  lang === 'en' ? '[ PROFESSIONAL ]' : '[ PROFESIONAL ]',
};
```

### Cambio — botones HTML

```
old:         <button class="filter-btn active" data-filter="all">[ TODOS ]</button>
        <button class="filter-btn" data-filter="ai">[ AI SYSTEMS ]</button>
        <button class="filter-btn" data-filter="web3">[ WEB3 ]</button>
        <button class="filter-btn" data-filter="profesional">[ PROFESIONAL ]</button>
new:         <button class="filter-btn active" data-filter="all">{filterLabels.all}</button>
        <button class="filter-btn" data-filter="ai">{filterLabels.ai}</button>
        <button class="filter-btn" data-filter="web3">{filterLabels.web3}</button>
        <button class="filter-btn" data-filter="profesional">{filterLabels.profesional}</button>
```

También el texto de la tarjeta "current_build" y el label "EN CONSTRUCCIÓN" deben traducirse.

### Cambio — badge blinking y build card

```
old:             <span class="badge blinking">● EN CONSTRUCCIÓN</span>
            <span class="hash">// pending_deploy</span>
          </div>
          <h3 class="build-title">// current_build</h3>
          <p class="build-desc">
            Diseñando una plataforma RAG unificada para indexación automática y orquestación multi-agente.
          </p>
          <div class="build-counter">
            <span class="days-label">TIEMPO_INCURRIDO →</span>
            <span class="days-value" id="days-count">00</span> días activos
          </div>
new:             <span class="badge blinking">● {lang === 'en' ? 'IN PROGRESS' : 'EN CONSTRUCCIÓN'}</span>
            <span class="hash">// pending_deploy</span>
          </div>
          <h3 class="build-title">// current_build</h3>
          <p class="build-desc">
            {lang === 'en'
              ? 'Designing a unified RAG platform for automatic indexing and multi-agent orchestration.'
              : 'Diseñando una plataforma RAG unificada para indexación automática y orquestación multi-agente.'}
          </p>
          <div class="build-counter">
            <span class="days-label">{lang === 'en' ? 'TIME_ELAPSED →' : 'TIEMPO_INCURRIDO →'}</span>
            <span class="days-value" id="days-count">00</span> {lang === 'en' ? 'active days' : 'días activos'}
          </div>
```

---

## Cambio 3 — `src/components/ExperienceSection.astro`
**Objetivo:** reemplazar todo el contenido hardcodeado en español con versiones bilingües.

### Reescritura completa del frontmatter + template (preservar todo el `<style>` intacto)

Reemplazar TODO el bloque entre `---` y `<style>` con:

```astro
---
import { getLangFromUrl } from '../i18n/translations';
const lang = getLangFromUrl(Astro.url);
---
<section class="experience-section">
  <div class="container">
    <h2 class="section-title">// experience · labor_logs</h2>
    
    <div class="experience-list">
      
      <!-- Hola S.R.L. -->
      <div class="job-card hola-card">
        <div class="job-header">
          <div class="job-title-group">
            <h3 class="role">
              {lang === 'en' ? 'Technical Analyst — AI Team' : 'Analista Técnico — Equipo de IA'}
            </h3>
            <span class="company">Hola S.R.L. · BCP de Bolivia S.A.</span>
          </div>
          <span class="duration">
            {lang === 'en' ? 'Aug 2025 — Apr 2026' : 'Ago 2025 — Abr 2026'}
          </span>
        </div>
        <ul class="job-logros">
          {lang === 'en' ? (
            <>
              <li>Node.js backend services for AI-integrated backoffice.</li>
              <li>RAG system + prompt compression + Redis → drastic reduction in API costs.</li>
              <li>Async pipelines with Webhooks for secure heavy inference processing.</li>
              <li>Automated OCR + advanced image restoration (watermark removal).</li>
            </>
          ) : (
            <>
              <li>Servicios backend Node.js para backoffice con IA integrada.</li>
              <li>Sistema RAG + compresión de prompts + Redis → reducción drástica de costos de API.</li>
              <li>Pipelines asíncronos con Webhooks para el procesamiento seguro de inferencias pesadas.</li>
              <li>OCR automatizado + restauración avanzada de imágenes (watermark removal).</li>
            </>
          )}
        </ul>
      </div>

      <!-- Tigo -->
      <div class="job-card tigo-card">
        <div class="job-header">
          <div class="job-title-group">
            <h3 class="role">
              {lang === 'en' ? 'Internship — Data Analyst & QA' : 'Pasantía — Analista de Datos & QA'}
            </h3>
            <span class="company">Tigo Bolivia · Tigo Money</span>
          </div>
          <span class="duration">Jun 2023 — Jun 2024</span>
        </div>
        <ul class="job-logros">
          {lang === 'en' ? (
            <>
              <li>Python automation → scraping and automatic data cleaning saving 5h/week.</li>
              <li>Tableau/Power BI dashboards for KPIs → 30% improvement in operational visibility.</li>
              <li>QA on payment gateway + ETL process optimization.</li>
            </>
          ) : (
            <>
              <li>Automatización con Python → scraping y limpieza automática de datos con un ahorro de 5h/semana.</li>
              <li>Dashboards Tableau/Power BI para KPIs → mejora de la visibilidad operativa en un 30%.</li>
              <li>QA sobre pasarela de pagos + optimización de procesos ETL.</li>
            </>
          )}
        </ul>
      </div>

    </div>
  </div>
</section>
```
> ⚠️ El bloque `<style>` NO se toca — queda exactamente igual desde la línea actual hasta el final.

---

## Cambio 4 — `src/components/SkillsSection.astro`
**Objetivo:** traducir los 4 ítems en español de la sección AI & ML y Cloud.

### Frontmatter — agregar import (el archivo actualmente tiene frontmatter vacío `--- ---`)

```
old: ---
---
new: ---
import { getLangFromUrl } from '../i18n/translations';
const lang = getLangFromUrl(Astro.url);
---
```

### AI & ML — 3 ítems en español

```
old:           <li>Inferencia LLM (OpenAI, Gemini)</li>
          <li>Orquestación RAG (Pinecone / Chroma)</li>
          <li>Compresión Semántica de Prompts</li>
new:           <li>{lang === 'en' ? 'LLM Inference (OpenAI, Gemini)' : 'Inferencia LLM (OpenAI, Gemini)'}</li>
          <li>{lang === 'en' ? 'RAG Orchestration (Pinecone / Chroma)' : 'Orquestación RAG (Pinecone / Chroma)'}</li>
          <li>{lang === 'en' ? 'Semantic Prompt Compression' : 'Compresión Semántica de Prompts'}</li>
```

### Cloud & DevOps — 1 ítem en español

```
old:           <li>Docker / Contenedores</li>
new:           <li>{lang === 'en' ? 'Docker / Containers' : 'Docker / Contenedores'}</li>
```

---

## Verificación post-edición

```bash
# Desde D:\_Dev\Projects\dk-portfolio\
npm run build

# Debe terminar sin errores TypeScript.
# Páginas esperadas en dist/:
#   dist/index.html
#   dist/en/index.html
#   dist/projects/token-saver/index.html
#   dist/en/projects/token-saver/index.html
#   (y el resto de slugs)
```

Si `npm run build` falla:
- Leer el error completo
- Si es TypeScript en ExperienceSection → verificar que los fragmentos JSX `<>...</>` están correctos en Astro (usar Array map si falla)
- Si es import → verificar ruta `'../i18n/translations'` (ExperienceSection y SkillsSection están en `src/components/`, la ruta es correcta)

---

## Commit y push (solo desde D:)

```bash
cd D:\_Dev\Projects\dk-portfolio

git add src/pages/en/projects/[slug].astro
git add src/components/ProjectsGrid.astro
git add src/components/ExperienceSection.astro
git add src/components/SkillsSection.astro

git commit -m "$(cat <<'EOF'
feat(i18n): complete content translations for EN/ES

- en/projects/[slug].astro: use title_en, role_en, longDescription_en fields
- ProjectsGrid: translate filter buttons and current_build card
- ExperienceSection: full bilingual content with lang detection
- SkillsSection: translate 4 Spanish skill items to EN/ES

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"

git push
```

---

## Checklist final

- [ ] `src/pages/en/projects/[slug].astro` muestra título, rol y descripción en inglés
- [ ] Filtros en inglés en `/en/` → `[ ALL ]`, `[ PROFESSIONAL ]`
- [ ] Filtros en español en `/` → `[ TODOS ]`, `[ PROFESIONAL ]`
- [ ] ExperienceSection en `/en/` → títulos y bullets en inglés
- [ ] SkillsSection en `/en/` → "LLM Inference", "RAG Orchestration", "Semantic Prompt Compression", "Docker / Containers"
- [ ] `npm run build` sin errores
- [ ] Push exitoso a GitHub → Vercel redeploy automático
