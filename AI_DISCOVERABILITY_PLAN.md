# Plan: AI Discoverability para daxkenyi.is-a.dev

## ¿Para qué sirve esto?

Cuando un agente de IA (ChatGPT, Claude, Perplexity, Gemini, etc.) busca información
sobre Dax Kenji o su portfolio, estos archivos y configuraciones le permiten:
- Encontrar el sitio más fácilmente
- Entender el contenido sin tener que "adivinar"
- Citar el sitio correctamente en respuestas
- No bloquear rastreo por error

---

## TAREA 1 — llms.txt (EL MÁS IMPORTANTE)

**¿Qué es?**
Es como un robots.txt pero para LLMs. Le da a los agentes de IA un resumen estructurado
del sitio en formato Markdown limpio, sin HTML. Estándar propuesto en llmstxt.org.
Cuando una IA quiere entender tu sitio, lee primero este archivo.

**Archivo a crear:** `public/llms.txt`

**Contenido exacto:**
```
# Dax Kenji Tellez Duran

> Backend Engineer & AI Developer. Santa Cruz, Bolivia.
> Construyo sistemas de IA en producción: RAG pipelines, Voice AI con ElevenLabs, APIs escalables.

## Sobre mí

Backend engineer trabajando en Hola S.R.L. y proyectos en Tigo (telecomunicaciones Bolivia).
Especializado en: Node.js, TypeScript, C# .NET 8, Python, RAG Systems, LLM Optimization.
Cloud: Docker, GCP, Azure, AWS, Redis.
Explorando: Next.js, Web3, Edge Computing.

## Proyectos

- [TrustArk](https://daxkenyi.is-a.dev/projects/trustark): Verificación de identidad Web3 con IA
- [ENAid](https://daxkenyi.is-a.dev/projects/enaid): Agente de voz IA para atención al cliente (ElevenLabs)
- [LedgerLens](https://daxkenyi.is-a.dev/projects/ledgerlens): OCR + IA para facturas y documentos contables
- [WhatsApp RAG Bot](https://daxkenyi.is-a.dev/projects/whatsapp-rag-bot): Asistente con contexto persistente vía WhatsApp

## Contacto

- Email: daxkenyi001@gmail.com
- LinkedIn: https://linkedin.com/in/kenyi001
- GitHub: https://github.com/Kenyi001
- Portfolio: https://daxkenyi.is-a.dev

## Opcional — Uso por IA

Este sitio permite que agentes de IA lean y citen su contenido.
Para contexto completo ver: https://daxkenyi.is-a.dev/llms-full.txt
```

---

## TAREA 2 — llms-full.txt (versión extendida)

**¿Qué es?**
La versión larga del llms.txt — incluye el contenido completo de cada proyecto,
skills detallados, y experiencia laboral. Para cuando un agente necesita más contexto.

**Archivo a crear:** `public/llms-full.txt`

**Contenido exacto:**
```
# Dax Kenji Tellez Duran — Perfil Completo

> Backend Engineer & AI Developer | Santa Cruz, Bolivia
> daxkenyi001@gmail.com | https://daxkenyi.is-a.dev

## Experiencia Laboral

### Backend Developer — Hola S.R.L.
Desarrollo de sistemas de IA, automatización de procesos e integraciones empresariales.
Stack: Node.js, TypeScript, Python, integración con LLMs.

### Proyectos — Tigo Bolivia
Telecomunicaciones, infraestructura de datos, sistemas empresariales.

## Skills Técnicos

Backend: Node.js, TypeScript, C# .NET 8, Python
IA/ML: RAG Systems, LLM Optimization, ElevenLabs Voice AI, OCR
Cloud: Docker, GCP, Azure, AWS, Redis, CI/CD
Frontend (aprendiendo): Next.js, Astro
Web3: Verificación de identidad, contratos inteligentes

## Proyectos Detallados

### TrustArk
URL: https://daxkenyi.is-a.dev/projects/trustark
Sistema de verificación de identidad descentralizado usando Web3 e IA.
Permite validar identidades sin exponer datos sensibles, usando contratos inteligentes
y modelos de IA para detección de fraude.

### ENAid
URL: https://daxkenyi.is-a.dev/projects/enaid
Agente de voz inteligente para atención al cliente construido con ElevenLabs.
Maneja llamadas en lenguaje natural, integra con CRMs, reduce carga de soporte humano.

### LedgerLens
URL: https://daxkenyi.is-a.dev/projects/ledgerlens
Sistema OCR + IA para extracción y clasificación automática de facturas y documentos contables.
Reduce tiempo de procesamiento manual, integra con sistemas de contabilidad.

### WhatsApp RAG Bot
URL: https://daxkenyi.is-a.dev/projects/whatsapp-rag-bot
Asistente conversacional via WhatsApp con memoria persistente y RAG (Retrieval Augmented Generation).
El bot mantiene contexto entre sesiones y responde usando documentos/base de conocimiento propia.

## Contacto y Redes

Portfolio: https://daxkenyi.is-a.dev
Email: daxkenyi001@gmail.com
LinkedIn: https://linkedin.com/in/kenyi001
GitHub: https://github.com/Kenyi001
```

---

## TAREA 3 — robots.txt (actualizar el existente)

**¿Qué es?**
El archivo actual solo dice "Allow: /". Hay que agregar explícitamente
los bots de IA más importantes para que sepan que pueden indexar.

**Archivo a modificar:** `public/robots.txt`

**Contenido nuevo (reemplazar todo):**
```
# Bots de búsqueda tradicionales
User-agent: *
Allow: /

# OpenAI — ChatGPT y GPT-4 browsing
User-agent: GPTBot
Allow: /

# Anthropic — Claude
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /

# Perplexity AI
User-agent: PerplexityBot
Allow: /

# Google — incluyendo AI Overviews (SGE) y Gemini
User-agent: Googlebot
Allow: /
User-agent: Google-Extended
Allow: /

# Microsoft — Bing y Copilot
User-agent: Bingbot
Allow: /

# Meta — para Llama y Meta AI
User-agent: FacebookBot
Allow: /

# Apple — para Siri y Apple Intelligence
User-agent: Applebot
Allow: /
User-agent: Applebot-Extended
Allow: /

# Sitemaps
Sitemap: https://daxkenyi.is-a.dev/sitemap-index.xml
Sitemap: https://daxkenyi.is-a.dev/llms.txt
```

---

## TAREA 4 — Meta tags de AI en BaseLayout.astro

**¿Qué es?**
Tags específicos en el <head> que algunos agentes de IA leen para entender
el propósito del sitio y si pueden usarlo.

**Archivo a modificar:** `src/layouts/BaseLayout.astro`

**Agregar después del bloque de Twitter Card:**
```html
<!-- AI Discoverability -->
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="alternate" type="text/plain" href="https://daxkenyi.is-a.dev/llms.txt" title="LLMs.txt" />
```

---

## TAREA 5 — JSON-LD mejorado (actualizar el existente)

**¿Qué es?**
El JSON-LD que ya existe tiene lo básico. Hay que agregar:
- WebSite schema (permite que Google ofrezca búsqueda dentro del sitio)
- Schemas por proyecto (los bots entienden que son software/apps)

**Archivo a modificar:** `src/layouts/BaseLayout.astro`

**Reemplazar el script JSON-LD existente con este:**
```html
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dax Kenji Tellez Duran",
    "url": "https://daxkenyi.is-a.dev",
    "jobTitle": "Backend Engineer & AI Developer",
    "description": "Backend engineer especializado en sistemas de IA: RAG, LLMs, Voice AI. Santa Cruz, Bolivia.",
    "email": "daxkenyi001@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santa Cruz",
      "addressCountry": "BO"
    },
    "sameAs": [
      "https://linkedin.com/in/kenyi001",
      "https://github.com/Kenyi001"
    ],
    "knowsAbout": [
      "Node.js", "TypeScript", "Python", "C# .NET",
      "RAG Systems", "LLM Optimization", "ElevenLabs",
      "Docker", "GCP", "Azure", "AWS"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dax Kenji — Portfolio",
    "url": "https://daxkenyi.is-a.dev",
    "description": "Portfolio de Dax Kenji Tellez Duran, Backend Engineer & AI Developer.",
    "author": {
      "@type": "Person",
      "name": "Dax Kenji Tellez Duran"
    }
  }
]
</script>
```

---

## TAREA 6 — Verificar build y deploy

```bash
cd D:\_Dev\Projects\dk-portfolio
npm run build
# Verificar que existan en dist/:
#   dist/llms.txt
#   dist/llms-full.txt
#   dist/robots.txt
#   dist/sitemap-index.xml
git add -A
git commit -m "add AI discoverability: llms.txt, llms-full.txt, updated robots.txt, improved JSON-LD"
git push origin main
```

---

## TAREA 7 — Post-deploy: registrar en Google Search Console

Estos pasos los hace el usuario manualmente (requiere login):
1. Ir a https://search.google.com/search-console
2. Agregar propiedad: `https://daxkenyi.is-a.dev`
3. Verificar con el método HTML tag (agregar meta tag que te dan)
4. Ir a Sitemaps → agregar `sitemap-index.xml`
5. En Coverage → inspeccionar URL → solicitar indexación

---

## RESUMEN DE ARCHIVOS

| Archivo | Acción | Prioridad |
|---------|--------|-----------|
| `public/llms.txt` | Crear | 🔴 Alta |
| `public/llms-full.txt` | Crear | 🔴 Alta |
| `public/robots.txt` | Reemplazar | 🔴 Alta |
| `src/layouts/BaseLayout.astro` | Modificar (meta tags + JSON-LD) | 🟡 Media |
| Google Search Console | Manual por usuario | 🟡 Media |
