---
title: "OCR Pipeline Bancario"
event: "Hola S.R.L. · BCP de Bolivia"
eventType: "professional"
description: "Pipeline de procesamiento OCR + restauración de imágenes para digitalización de documentos bancarios. Elimina watermarks y extrae datos estructurados."
longDescription: "Sistema de procesamiento de documentos en producción para el BCP Bolivia. Combina técnicas de computer vision para restaurar imágenes degradadas, eliminar marcas de agua y extraer información estructurada mediante OCR avanzado, reduciendo el trabajo manual de digitalización."
role: "Backend Engineer — Equipo IA"
stack: ["Python", "OpenCV", "Tesseract", "Node.js", "TypeScript", "GCP", "Docker"]
date: "2025-2026"
featured: true
hashId: "p9k1...7m3b"
metrics: "Reducción 80% tiempo de digitalización manual"
---

## Contexto
El BCP Bolivia necesitaba digitalizar grandes volúmenes de documentos físicos con calidad variable (manchas, watermarks, baja resolución).

## Pipeline
1. **Ingesta**: recepción de imágenes vía API REST
2. **Pre-procesamiento**: corrección de perspectiva, eliminación de ruido
3. **Restauración**: remoción de watermarks con inpainting
4. **OCR**: extracción de texto estructurado por campos
5. **Post-procesamiento**: validación y normalización de datos
6. **Output**: JSON estructurado listo para ingesta en core bancario

## Resultado
Pipeline en producción procesando documentos con 95%+ de precisión.
