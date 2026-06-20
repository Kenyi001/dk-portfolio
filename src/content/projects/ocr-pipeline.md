---
title: "OCR + Prueba de Vida Bancaria"
title_en: "Banking Liveness & OCR Research"
event: "Hola S.R.L. · BCP de Bolivia"
eventType: "professional"
description: "Mejora de calidad de imagen para prueba de vida bancaria + evaluación comparativa de OCR en AWS, Azure y GCP. Las imágenes con watermarks causaban falsos negativos en face matching."
description_en: "Image quality improvement for banking liveness verification + comparative OCR evaluation across AWS, Azure, and GCP. Watermarked images caused false negatives in face matching."
longDescription: "En el flujo de solicitud de procesos bancarios, los clientes subían imágenes de documentos con marcas de agua y baja calidad. El sistema de prueba de vida (face matching) devolvía 'no match' aunque era la misma persona. Mi aporte: pipeline de mejora de imagen con IA de GCP para limpiar las imágenes antes del matching, contenedores Podman + iDlive para verificación de autenticidad de documentos, y una evaluación comparativa de tres servicios cloud de OCR para identificar el mejor para el caso bancario."
longDescription_en: "In the bank process request flow, customers uploaded documents with watermarks and poor quality. The liveness system (face matching) returned 'no match' even when it was the same person. My contribution: GCP AI-powered image enhancement pipeline to clean images before matching, Podman + iDlive containers for document authenticity verification, and a comparative evaluation of three cloud OCR services to identify the best fit for the banking use case."
role: "Backend Engineer — Equipo IA"
role_en: "Backend Engineer — AI Team"
stack: ["Python", "OpenCV", "GCP Vision AI", "Azure Cognitive Services", "AWS Rekognition", "Podman", "iDlive", "C# .NET"]
date: "2025-2026"
featured: true
metrics: "Evaluación 3 clouds (AWS · Azure · GCP) · tabla comparativa de precisión · entregado en testing"
metrics_en: "3-cloud evaluation (AWS · Azure · GCP) · precision comparison table · delivered in testing"
---

## Problema
El flujo de prueba de vida del banco fallaba con frecuencia: los documentos de identidad llegaban con marcas de agua corporativas y baja resolución. El motor de face matching devolvía "no match" aunque la persona era la misma, generando rechazos incorrectos en solicitudes bancarias reales.

## Mi aporte

### Mejora de imagen
Pipeline en Python + OpenCV + GCP Vision AI para limpiar imágenes antes del matching:
- Detección y remoción de watermarks
- Mejora de contraste y resolución
- Normalización antes de pasar al comparador de rostros

### Verificación de autenticidad
Integración de contenedores Podman con iDlive Document para validar que los documentos subidos no fueran falsificados o alterados digitalmente.

### Evaluación comparativa de OCR
Evaluación de tres proveedores cloud para extraer texto de documentos bancarios:

| Cloud | Mi rol | Servicios usados |
|-------|--------|-----------------|
| AWS | Llamé al servicio existente | Rekognition / Textract |
| Azure | Creé y configuré los servicios | Cognitive Services / Form Recognizer |
| GCP | Creé y configuré los servicios | Vision AI / Document AI |

Resultado: tabla comparativa de precisión, velocidad y costo para el caso de uso específico del banco.

## Estado
Entregado en fase de testing. La tarea asignada fue completada — la decisión de continuar o desplegar a producción quedó en manos del equipo del banco.
