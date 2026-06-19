---
title: "Token Saver System"
event: "Hola S.R.L. · BCP de Bolivia"
eventType: "professional"
description: "Sistema RAG + compresión de prompts + Redis cache para reducir costos LLM en producción bancaria."
description_en: "RAG + prompt compression + Redis cache system to reduce LLM costs in banking production."
longDescription: "Diseñé e implementé un sistema que combina RAG, algoritmos de compresión de prompts y Redis para reducir los costos de API y la latencia de LLMs en un entorno bancario de producción real."
longDescription_en: "I designed and implemented a system combining RAG, prompt compression algorithms, and Redis to significantly reduce API costs and LLM latency in a real banking production environment."
role: "Backend Lead & Arquitecto"
role_en: "Backend Lead & Architect"
stack: ["RAG", "Redis", "Node.js", "TypeScript", "LLM", "Prompt Engineering"]
date: "2025-2026"
featured: true
metrics: "✓ En producción en BCP Bolivia · ↓ costos API · cache hits en milisegundos"
metrics_en: "✓ In production at BCP Bolivia · ↓ API costs · cache hits in milliseconds"
---

## Problema
El principal obstáculo para adoptar LLMs en producción empresarial: los costos recurrentes de API por tokens y la latencia de respuesta en sistemas críticos. Cada consulta de los canales bancarios arrastraba contexto redundante que inflaba la factura sin mejorar las respuestas.

## Solución
Capa middleware entre los canales bancarios y los proveedores de LLM, con tres mecanismos combinados:

- **RAG** para inyectar solo el contexto relevante a cada consulta, en lugar de contexto completo
- **Compresión semántica de prompts** con un algoritmo heurístico que recorta entrada redundante sin degradar el rendimiento del modelo
- **Caché Redis** que sirve las consultas frecuentes sin tocar el LLM — los cache hits responden en milisegundos

## Mi rol
Backend Lead & Arquitecto: diseño de la arquitectura del middleware y su implementación en Node.js/TypeScript.

## Resultado
**En producción en el Banco de Crédito de Bolivia (BCP).** Reducción significativa de costos de API y de latencia en los flujos frecuentes. Aprendizaje clave: comprimir prompts sin degradar respuestas no es un problema de algoritmos solamente — exige evaluación continua contra casos reales del banco.
