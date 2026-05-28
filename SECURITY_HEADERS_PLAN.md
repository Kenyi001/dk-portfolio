# Plan: Security Headers A+ para daxkenyi.is-a.dev

## Contexto del problema

El scanner securityheaders.com escaneó http://daxkenyi.is-a.dev (HTTP, no HTTPS)
y recibió un 308 Redirect con Content-Type: text/plain — eso es un response del
servidor de redirección de Vercel, no nuestro HTML. Por eso los headers que pusimos
en vercel.json no aparecen: son para el HTML final, no para el redirect.

Hay dos cosas a resolver:

1. El scanner debe escanear HTTPS directamente. La nota real es en:
   https://securityheaders.com/?q=https://daxkenyi.is-a.dev&followRedirects=on

2. Faltan 3 headers avanzados (Cross-Origin) que dan el salto de A → A+

---

## ¿Por qué importa la nota A+?

- Confianza: Un portfolio de developer con A+ demuestra que sabés de seguridad
- SEO: Google favorece sitios con buenas prácticas de seguridad
- Entrevistas: Si alguien revisa tu sitio técnicamente, lo nota

---

## TAREA 1 — Agregar los 3 headers Cross-Origin (COEP, COOP, CORP)

**Archivo a modificar:** `vercel.json`

**¿Qué hace cada uno?**

- `Cross-Origin-Opener-Policy: same-origin`
  → Aísla tu página de otras ventanas/tabs. Si alguien abre tu sitio desde otro sitio,
    no puede acceder a tu window object. Previene ataques Spectre/Meltdown via JS.

- `Cross-Origin-Embedder-Policy: require-corp`
  → Solo carga recursos externos que explícitamente permiten ser cargados.
  ⚠️ OJO: Esto puede romper Google Fonts si no se configura bien.
  Valor seguro para portfolio: `unsafe-none` (sin bloqueo) o `credentialless`

- `Cross-Origin-Resource-Policy: same-origin`
  → Tus recursos (imágenes, scripts) solo pueden ser cargados desde tu propio dominio.

**En `vercel.json`, dentro del bloque `"source": "/(.*)"`, agregar DESPUÉS de Permissions-Policy:**

```json
{
  "key": "Cross-Origin-Opener-Policy",
  "value": "same-origin"
},
{
  "key": "Cross-Origin-Embedder-Policy",
  "value": "credentialless"
},
{
  "key": "Cross-Origin-Resource-Policy",
  "value": "cross-origin"
}
```

NOTA: `Cross-Origin-Resource-Policy: cross-origin` (no `same-origin`) porque el portfolio
carga Google Fonts desde fonts.gstatic.com — si ponemos `same-origin` se rompen las fuentes.

---

## TAREA 2 — Actualizar Content-Security-Policy

El CSP actual tiene `unsafe-inline` para scripts (necesario para Astro + Vercel Analytics).
Agregar también el dominio de boxicons si se usa, y asegurar que Google Fonts esté explícito.

**Valor actualizado:**
```
default-src 'self';
script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vitals.vercel-insights.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com data:;
img-src 'self' data: https:;
connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com;
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
```

Cambios respecto al anterior:
- `frame-ancestors 'none'` → refuerza X-Frame-Options desde el CSP mismo
- `base-uri 'self'` → previene ataques de base tag injection
- `form-action 'self'` → si hay formularios, solo pueden enviar a tu propio dominio
- `font-src` agrega `data:` para fuentes embebidas si las hay

---

## TAREA 3 — Verificar build y deploy

```bash
cd D:\_Dev\Projects\dk-portfolio
npm run build
# El build debe completar sin errores

git add vercel.json
git commit -m "security: add COEP, COOP, CORP headers + harden CSP for A+ rating"
git push origin main
```

---

## TAREA 4 — Verificación post-deploy (hacer después del deploy)

Esperar 2-3 minutos que Vercel deployé, luego verificar:

1. Nota general:
   https://securityheaders.com/?q=https%3A%2F%2Fdaxkenyi.is-a.dev&followRedirects=on
   → Esperado: A+

2. Que Google Fonts siga cargando (las fuentes no se rompieron):
   https://daxkenyi.is-a.dev
   → Las fuentes Space Grotesk / JetBrains Mono / Inter deben verse correctamente

3. Que Vercel Analytics siga funcionando:
   → En vercel.com → proyecto daxkenyi → tab Analytics → debe registrar la visita

4. Rich Results (JSON-LD intacto):
   https://search.google.com/test/rich-results?url=https://daxkenyi.is-a.dev
   → Person y WebSite schemas sin errores

---

## RESUMEN DE CAMBIOS EN vercel.json

El bloque de headers globales (`"source": "/(.*)"`) debe quedar así (orden importa):

```json
{
  "key": "X-Content-Type-Options",
  "value": "nosniff"
},
{
  "key": "X-Frame-Options",
  "value": "DENY"
},
{
  "key": "X-XSS-Protection",
  "value": "1; mode=block"
},
{
  "key": "Referrer-Policy",
  "value": "strict-origin-when-cross-origin"
},
{
  "key": "Permissions-Policy",
  "value": "camera=(), microphone=(), geolocation=(), interest-cohort=()"
},
{
  "key": "Strict-Transport-Security",
  "value": "max-age=63072000; includeSubDomains; preload"
},
{
  "key": "Cross-Origin-Opener-Policy",
  "value": "same-origin"
},
{
  "key": "Cross-Origin-Embedder-Policy",
  "value": "credentialless"
},
{
  "key": "Cross-Origin-Resource-Policy",
  "value": "cross-origin"
},
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vitals.vercel-insights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
}
```

---

## NOTA PARA EL AGENTE

Si Google Fonts se rompe después del deploy:
→ Cambiar `Cross-Origin-Embedder-Policy` de `credentialless` a `unsafe-none`
→ Hacer commit con mensaje: "fix: relax COEP to unsafe-none for Google Fonts compat"

Si Vercel Analytics no registra visitas:
→ Revisar que `va.vercel-scripts.com` está en connect-src del CSP
→ Si falta, agregarlo

El plan se considera completo cuando securityheaders.com devuelve A+ en HTTPS.
