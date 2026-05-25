---
title: "WhatsApp RAG Bot"
event: "Proyecto Personal"
eventType: "personal"
description: "Bot de WhatsApp con RAG que responde preguntas sobre documentación técnica. Integra Base de Conocimiento propia con búsqueda semántica."
longDescription: "Chatbot empresarial sobre WhatsApp Business API que utiliza Retrieval-Augmented Generation para responder preguntas sobre documentación interna. Los documentos se indexan con embeddings, se almacenan en vector DB y se recuperan semánticamente en cada consulta."
role: "Desarrollador Full Stack & Arquitecto IA"
stack: ["WhatsApp Business API", "Node.js", "TypeScript", "OpenAI", "Pinecone", "RAG", "Redis"]
date: "2025"
featured: false
hashId: "w4r8...5n6d"
metrics: "< 2s tiempo de respuesta con contexto de 50+ documentos"
---

## Arquitectura RAG
- **Ingesta**: documentos PDF/DOCX → chunks → embeddings → Pinecone
- **Query**: mensaje usuario → embedding → similarity search → contexto
- **Generación**: contexto + query → GPT-4 → respuesta natural
- **Caché**: Redis para queries frecuentes → latencia 100ms

## Integración WhatsApp
Webhook Node.js que recibe mensajes, los procesa y responde vía WhatsApp Business API con soporte para texto, listas y botones interactivos.
