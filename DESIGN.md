---
name: Dax Kenji Tellez Duran — Portfolio
description: Backend & Applied AI engineer portfolio — production evidence over decoration
colors:
  signal-terracotta: "#EC7357"
  system-mint: "#7DD3B0"
  neutral-canvas: "#0B0D13"
  neutral-ink: "#F5F1EA"
  neutral-ink-secondary: "#A7B0BE"
  neutral-ink-muted: "#8B96A7"
  neutral-ink-dim: "#2A3040"
typography:
  display:
    fontFamily: "Space Grotesk, Arial Black, sans-serif"
    fontSize: "clamp(2.35rem, 6vw, 4.9rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, Courier New, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "6px"
components:
  button-primary:
    backgroundColor: "{colors.signal-terracotta}"
    textColor: "#130B08"
    rounded: "{rounded.md}"
    padding: "0.82rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-terracotta}"
  button-secondary:
    backgroundColor: "rgba(245,241,234,0.045)"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.md}"
    padding: "0.82rem 1.25rem"
  button-secondary-hover:
    textColor: "{colors.signal-terracotta}"
  card:
    backgroundColor: "rgba(245,241,234,0.055)"
    rounded: "{rounded.sm}"
    padding: "1.55rem"
---

# Design System: Dax Kenji Tellez Duran — Portfolio

## Overview

**Creative North Star: "The Production Console"**

Este portafolio no vende una estética: presenta evidencia — sistemas reales en producción bancaria, hackathons con posición verificable, tests que corren contra una base de datos real, no contra mocks. El lenguaje visual sigue esa misma lógica: labels en monoespaciada como si fueran output de terminal, números y métricas con el mismo peso que un título, y un fondo oscuro que nunca compite con el dato que tiene encima.

La paleta terracota/menta y las auras laterales que respiran (2026-09-19) son la única concesión atmosférica del sistema, y están calibradas para no distraer: intensidad ajustada para sobrevivir en monitores de gamma alta sin volverse ruido en los de gama baja, con `mix-blend-mode` descartado a favor de un blend normal más predecible tras confirmarse que se diluía casi a cero detrás de las cards.

Rechazos visuales confirmados durante esta sesión: sin `mix-blend-mode: screen` (se probó y se abandonó — diluye el color en vez de sumarlo), sin bordes laterales de acento tipo "side-tab" en cards salvo cuando el grosor codifica información real (la columna de certeza en Trayectoria), sin sombras decorativas fuera de hover.

**Key Characteristics:**
- Mono-labels como convención de "esto es un dato verificable", no decoración
- Terracota = acción humana / menta = señal de sistema — la misma dualidad que separa las dos auras del fondo
- Cero relleno: cada número en el hero (producción, ranking, tests, hackathons) es una cifra real, citable
- Motion con propósito: press feedback real, sin bounce salvo donde hay momentum físico (el arrastre del DK3D)

## Colors

La paleta es intencionalmente corta: dos acentos, una escala de tinta, un piso oscuro elevado para no perderse en pantallas que aplastan el negro puro.

### Primary
- **Signal Terracotta** (`#EC7357`): CTA primario, la K del logotipo, hover de links, bordes de foco. Es la acción — "hacé click acá".

### Secondary
- **System Mint** (`#7DD3B0`, alias `--accent-2` / `--hash-color`): métricas, labels mono secundarios, estado "disponible", partículas minoritarias del DK3D. Es el dato — "esto es una señal del sistema".

### Neutral
- **Neutral Canvas** (`#0B0D13`): piso base. Elevado un paso sobre negro puro a propósito — en paneles gamma 2.2/OLED los primeros valores RGB se aplastan y desaparecen.
- **Neutral Ink** (`#F5F1EA`): texto principal, tono crema cálido, nunca blanco puro.
- **Neutral Ink Secondary** (`#A7B0BE`): texto de apoyo, descripciones.
- **Neutral Ink Muted** (`#8B96A7`): metadata, fechas, links terciarios. Corregido de `#768191` (2026-09-19) tras verificar que fallaba WCAG AA (4.40:1 y 3.98:1 contra las dos superficies principales, mínimo exigido 4.5:1) — el nuevo valor da 5.31:1 y 4.60:1.

### Named Rules
**The No-Invented-Numbers Rule.** Todo dato mostrado como métrica (stats del hero, badges de logros) tiene que ser verificable — ningún porcentaje o cifra se muestra si no se puede defender en una entrevista.

## Typography

**Display Font:** Space Grotesk (con Arial Black de respaldo)
**Body Font:** Archivo (con system-ui de respaldo — reemplazó a Inter, marcada como tell de diseño generado por IA)
**Label/Mono Font:** JetBrains Mono (con Courier New de respaldo)

**Character:** Grotesca geométrica de peso alto para títulos, sans humanista neutra para lectura larga, monoespaciada para todo lo que se presenta como "dato" — la combinación es deliberadamente técnica, no editorial.

### Hierarchy
- **Display** (700, `clamp(2.35rem, 6vw, 4.9rem)`, line-height 0.94, tracking -0.02em): el titular del hero. Tracking negativo en texto grande — es el único punto del sistema donde el tracking estaba plano antes de esta sesión.
- **Title** (700, 1.35–2.2rem): headers de sección y de card.
- **Body** (400, 1–1.2rem, line-height 1.6–1.8): descripciones, bio.
- **Label** (500, 0.68–0.85rem, tracking 0.02–0.22em, uppercase en la mayoría de usos): metadata, badges, nav, chips de stack técnico.

### Named Rules
**The Tracking-by-Size Rule.** El tracking nunca es un valor fijo repetido en todo el sistema: negativo en texto display grande, cercano a 0 en body, positivo en mono pequeño. Un `letter-spacing` plano en cualquier tamaño es una señal de que no se decidió, no de que se decidió "cero".

## Layout

Contenedor centrado con `max-width` entre 1000–1200px según sección. Sin un grid formal de columnas — las secciones usan flex/grid ad hoc por componente. Densidad alta en el hero (título, badge, bio, stats, CTA, links, todo antes del primer scroll), más respirado en las secciones de contenido.

Responsive calibrado contra viewports reales, no solo anchos de pantalla: el hero tiene capas de breakpoint separadas por **altura útil** (940px "1080p con chrome del navegador", 860px y 700px "laptop", 1161-1360px "2K con chrome", 1361px+ "2K completo"), no solo por ancho — el mismo monitor puede caer en distintas capas según cuánto chrome tenga el navegador abierto (pestañas, marcadores).

## Elevation & Depth

Flat en reposo, material solo con propósito.

### The Purposeful Blur Rule
Nada flota porque sí. Las superficies son planas (fondos `rgba` semitransparentes, sin sombra) salvo donde algo necesita leerse como "objeto físico separado del fondo" — el nav (que se queda fijo sobre contenido que scrollea) y, desde esta sesión, los chips del hero (badge, stat-item, signal-row) que conviven con las auras de fondo. Ahí sí llevan `backdrop-filter: blur()`, escalado por tamaño de superficie (8-18px).

### Shadow Vocabulary
- **Soft lift** (`--shadow-soft: 0 24px 70px rgba(0,0,0,0.34)`): aparece solo en `:hover` de cards — nunca en reposo.
- **CTA glow** (`0 18px 50px rgba(236,115,87,0.16)`): sombra de color en el botón primario, mismo principio — refuerza la acción, no decora la superficie.

## Shapes

Esquinas redondeadas moderadas: `4px` para chips/badges/tags, `6px` para botones y cards. Nunca esquinas vivas de 0px ni radios grandes tipo "pill" (999px) — se auditó y corrigió explícitamente esta sesión, era uno de los tells de diseño genérico detectados por el detector de anti-patrones.

Bordes: 1px, casi siempre en `rgba(245,241,234, α)` sobre fondo oscuro — nunca un `border-left` grueso de acento salvo donde el grosor codifica información real (la única excepción confirmada: la columna de "Trayectoria", donde 3px/2px/1px marca nivel de certeza, no decoración).

## Components

Preciso y con los pies en la tierra: sin florituras, el peso visual viene de que el dato detrás es real, no de un efecto. El feedback es inmediato y físico (responde al pointer-down, no solo al hover) pero nunca teatral.

### Buttons
- **Shape:** `border-radius: 6px`
- **Primary:** fondo Signal Terracotta, texto `#130B08` (oscuro — el terracota como texto claro solo da ~2.6:1, falla contraste; como fondo con texto oscuro da ~6.5:1, pasa AA)
- **Hover:** `translateY(-2px)`, `320ms cubic-bezier(0.22, 1, 0.36, 1)` — desaceleración sin rebote, sin overshoot
- **Press:** cancela el lift, comprime a `scale(0.97)` en `100ms ease-out` — responde al instante de presionar, no solo al soltar
- **Secondary / Ghost:** fondo transparente, borde neutro que vira a terracota en hover, mismo lift y press que el primario

### Chips (tech-tag, badge, filter-btn)
- **Style:** fondo oscuro translúcido, borde 1px sutil, texto mono
- **State:** color cambia con el padre (card hover) o standalone (filtro activo) — siempre con transición, nunca un salto instantáneo

### Cards / Containers
- **Corner Style:** `border-radius: 6px` (project-card, contact-card), `4px` (chips)
- **Background:** gradiente sutil `rgba(245,241,234, 0.02-0.08)` sobre el fondo de sección
- **Shadow Strategy:** ver Elevation & Depth — solo en hover
- **Hover:** `translateY(-4px)` — el doble del lift de un botón, porque una superficie más grande puede cargar más movimiento sin verse nerviosa
- **Press:** `translateY(-1px) scale(0.99)` — se asienta casi del todo pero no llega a baseline; una card grande golpeando el piso de golpe se ve brusco

### Navigation
- Fondo translúcido con `backdrop-filter: blur(18px)`, fijo (`sticky`), underline que crece desde la izquierda en el link activo/hover — sin lift, los links de texto puro nunca se levantan, solo cambian de color

### DK3D (componente de firma)
Nube de ~2.050 partículas (cream/terracota/menta) que convergen en el monograma "DK" al entrar en viewport y se dispersan elásticamente al arrastrar — la metáfora literal de "convierto datos dispersos en modelos legibles" aplicada al propio logo, no solo a la copy. Reemplaza un bloque 3D sólido extruido que se sentía genérico y desconectado de la propuesta de valor del sitio (2026-09-20).

## Do's and Don'ts

### Do:
- **Do** usar mono (`JetBrains Mono`) para cualquier cosa que sea o parezca un dato verificable (métricas, fechas, stack técnico)
- **Do** dar feedback de press (`:active`) real en todo elemento clickeable, no solo hover
- **Do** aplicar `backdrop-filter` solo donde una superficie necesita separarse visualmente de las auras/fondo, nunca como decoración de relleno
- **Do** verificar contraste real contra el fondo compuesto (no solo el hex nominal) antes de usar `--ink-muted` en texto nuevo

### Don't:
- **Don't** usar `border-radius: 999px` (pill) — el sistema usa 4-6px, sin excepción confirmada hasta ahora
- **Don't** agregar un `border-left` grueso de acento a una card como "toque de color" — es el tell más reconocible de diseño generado por IA, y el detector de este proyecto lo señala explícitamente
- **Don't** usar Inter, Roboto, u otras fuentes marcadas como sobreusadas por el detector, salvo decisión de marca explícita y documentada (como Space Grotesk, que se mantiene a propósito)
- **Don't** inventar una métrica o logro para "llenar" una sección — cada número en este sitio tiene que sobrevivir a la pregunta "¿cómo mediste eso?"
