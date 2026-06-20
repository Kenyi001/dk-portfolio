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
En el flujo de solicitud de procesos del banco, el cliente sube una foto de su documento para validar su identidad por prueba de vida. Pero las imágenes llegaban con marcas de agua corporativas y baja resolución, y el motor de face matching devolvía "no match" aunque la persona frente a la cámara era la misma del documento. Eso se traducía en rechazos incorrectos sobre solicitudes reales.

## Solución
Una capa de mejora de imagen que limpia la foto antes de compararla: con IA de visión de GCP se remueven las marcas de agua y se recupera nitidez, de modo que el comparador de rostros trabaje sobre una imagen utilizable. En paralelo, contenedores con iDlive validan que el documento subido no esté falsificado ni alterado digitalmente. Y para extraer los datos del documento, evalué tres servicios cloud de OCR buscando el más preciso para este caso bancario concreto.

## Mi rol
Backend en el equipo de IA. Construí el pipeline de mejora de imagen, integré iDlive sobre Podman para la verificación de autenticidad, y levanté la comparativa de OCR: en AWS consumí el servicio ya existente, mientras que en Azure y GCP creé y configuré los servicios desde cero para medirlos en igualdad de condiciones.

## Resultado
Entregué una tabla comparativa de precisión, velocidad y costo entre AWS, Azure y GCP para el caso de uso del banco. La tarea asignada quedó cerrada por mi parte en fase de testing; la decisión de llevarlo a producción quedó en manos del banco. El aprendizaje clave: el cuello de botella del face matching no era el modelo, sino la calidad de la imagen de entrada.
