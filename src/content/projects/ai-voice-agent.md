---
title: "AI Voice Agent"
event: "Proyecto Personal"
eventType: "personal"
description: "Agente de voz con IA que maneja llamadas entrantes, clasifica intención y responde en lenguaje natural usando ElevenLabs + GPT-4."
longDescription: "Sistema de atención telefónica automatizada construido con ElevenLabs para síntesis de voz natural, GPT-4 para comprensión y generación de respuestas, y Twilio para la capa de telefonía. El agente detecta intención, consulta una base de conocimiento RAG y responde en tiempo real con latencia <1s."
role: "Arquitecto & Desarrollador Full Stack"
stack: ["ElevenLabs", "GPT-4", "Twilio", "Node.js", "TypeScript", "RAG", "Redis"]
date: "2025"
featured: true
hashId: "v7f3...9a2c"
metrics: "Latencia de respuesta <1s en producción"
---

## Problema
Las soluciones tradicionales de IVR son rígidas y frustran a los usuarios con menús pregrabados. Se necesitaba un agente que entendiera lenguaje natural.

## Solución Técnica
- **ElevenLabs Conversational AI** para voz natural bidireccional
- **Pipeline RAG** con embeddings locales para base de conocimiento
- **Redis** como caché de contexto de conversación
- **Twilio** como capa de telefonía SIP

## Resultado
Agente completamente funcional con capacidad de manejar consultas de soporte técnico de primer nivel sin intervención humana.
