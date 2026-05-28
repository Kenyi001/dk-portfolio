---
title: "AI Voice Agent"
event: "Proyecto Personal"
eventType: "personal"
description: "Agente de voz con IA que maneja llamadas entrantes, clasifica intención y responde en lenguaje natural usando ElevenLabs + GPT-4."
description_en: "AI voice agent that handles incoming calls, classifies intent, and responds in natural language using ElevenLabs + GPT-4."
longDescription: "Sistema de atención telefónica automatizada construido con ElevenLabs para síntesis de voz natural, GPT-4 para comprensión y generación de respuestas, y Twilio para la capa de telefonía. El agente detecta intención, consulta una base de conocimiento RAG y responde en tiempo real con latencia <1s."
longDescription_en: "Automated phone support system built with ElevenLabs for natural voice synthesis, GPT-4 for understanding and response generation, and Twilio for the telephony layer. The agent detects intent, queries a RAG knowledge base, and responds in real time with <1s latency."
role: "Arquitecto & Desarrollador Full Stack"
role_en: "Architect & Full Stack Developer"
stack: ["ElevenLabs", "GPT-4", "Twilio", "Node.js", "TypeScript", "RAG", "Redis"]
date: "2025"
featured: true
hashId: "v7f3...9a2c"
metrics: "Latencia de respuesta <1s en producción"
metrics_en: "<1s response latency in production"
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
