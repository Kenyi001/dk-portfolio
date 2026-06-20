---
title: "Token Saver System"
event: "Hola S.R.L. · BCP de Bolivia"
eventType: "professional"
description: "Chat widget embebible con crawler + RAG para consultar información de páginas web sin consumir tokens innecesarios. Plugin inyectable via script en cualquier página."
description_en: "Embeddable chat widget with web crawler + RAG to query page content without unnecessary token usage. Script-injectable plugin for any web page."
longDescription: "Plugin de chat desarrollado en C# .NET que se inyecta en cualquier página web mediante un script tag. Al activarse, hace crawling del contenido visible de la página, aplica RAG sobre esa información y permite al usuario consultar el contenido mediante chat sin enviar contexto redundante al LLM. Diseñado para reducir el consumo de tokens en flujos de consulta sobre contenido web del banco."
longDescription_en: "Chat plugin built in C# .NET that injects into any web page via a script tag. When activated, it crawls the visible page content, applies RAG on that information, and lets users query it via chat without sending redundant context to the LLM. Designed to reduce token consumption in bank web content query flows."
role: "Backend Developer — Plugin IA"
role_en: "Backend Developer — AI Plugin"
stack: ["C# .NET", "ASP.NET Core", "RAG", "Web Crawler", "LLM"]
date: "2025-2026"
featured: true
metrics: "✓ En producción en BCP Bolivia · consumo de tokens optimizado via crawler + RAG"
metrics_en: "✓ In production at BCP Bolivia · token consumption optimized via crawler + RAG"
---

## Qué es
Un widget de chat que se agrega a cualquier página web con una sola línea:
```html
<script src="token-saver.js"></script>
```
El widget aparece como un botón flotante. Al abrirlo, el sistema ya tiene el contenido de la página procesado y listo para responder.

## Flujo
1. **Inyección**: el script se carga en la página del banco
2. **Crawling**: extrae el contenido visible de la página (textos, secciones, datos)
3. **RAG**: indexa el contenido y recupera solo los fragmentos relevantes a cada pregunta
4. **Chat**: el usuario pregunta → el LLM recibe solo el contexto relevante → respuesta precisa sin tokens de más

## Por qué importa
Sin este sistema, cada consulta enviaba el contexto completo de la página al LLM — caro e ineficiente. Con crawler + RAG, el modelo recibe solo lo que necesita para responder.

## Mi rol
Diseño e implementación del plugin completo en C# .NET: el crawler, la capa de RAG y la interfaz de chat embebible.
