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

## Problema
Consultar la información de una página web con un asistente de IA es caro: lo más simple es mandarle al modelo todo el contenido de la página en cada pregunta, lo que dispara el consumo de tokens y la factura, sin que la mayoría de ese texto aporte a la respuesta.

## Solución
Un widget de chat que se incrusta en cualquier página con una sola línea de script. Al cargarse, rastrea el contenido de la página, lo indexa y, en cada pregunta, recupera solo los fragmentos relevantes para enviárselos al modelo. El usuario chatea sobre el contenido de la página y el sistema responde gastando una fracción de los tokens que costaría mandar todo el contexto.

## Mi rol
Desarrollé el plugin completo en C# .NET: el crawler que extrae el contenido de la página, la capa de RAG que selecciona el contexto relevante y la interfaz de chat embebible que se inyecta vía script.

## Resultado
Un componente reutilizable que cualquier página del banco puede montar sin integración compleja, con el consumo de tokens controlado por diseño. Quedó en producción en BCP Bolivia.
