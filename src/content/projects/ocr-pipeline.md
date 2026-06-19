---
title: "OCR Pipeline Bancario"
title_en: "Banking OCR Pipeline"
event: "Hola S.R.L. · BCP de Bolivia"
eventType: "professional"
description: "Pipeline de procesamiento OCR + restauración de imágenes para digitalización de documentos bancarios. Elimina watermarks y extrae datos estructurados."
description_en: "OCR processing + image restoration pipeline for banking document digitization. Removes watermarks and extracts structured data."
longDescription: "Sistema de procesamiento de documentos en producción para el BCP Bolivia. Combina técnicas de computer vision para restaurar imágenes degradadas, eliminar marcas de agua y extraer información estructurada mediante OCR avanzado, reduciendo el trabajo manual de digitalización."
longDescription_en: "Production document processing system for BCP Bolivia. Combines computer vision techniques to restore degraded images, remove watermarks, and extract structured information through advanced OCR, reducing manual digitization work."
role: "Backend Engineer — Equipo IA"
role_en: "Backend Engineer — AI Team"
stack: ["Python", "OpenCV", "Tesseract", "Node.js", "TypeScript", "GCP", "Docker"]
date: "2025-2026"
featured: true
metrics: "Reducción 80% tiempo de digitalización manual"
metrics_en: "80% reduction in manual digitization time"
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
