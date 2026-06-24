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
metrics: "Latencia de respuesta <1s en producción"
metrics_en: "<1s response latency in production"
---

## Problema
Los sistemas IVR tradicionales responden con menús pregrabados y árboles de opciones rígidos. Un usuario que llama con una pregunta específica tiene que navegar 3-4 niveles antes de hablar con alguien, y si su caso no encaja en ninguna opción, el sistema no sabe qué hacer.

## Solución
Agente de voz que entiende lenguaje natural: el usuario habla, ElevenLabs convierte la voz a texto, GPT-4 clasifica la intención y consulta una base de conocimiento vía RAG, y ElevenLabs vuelve a sintetizar la respuesta en audio en menos de un segundo. Twilio maneja la capa telefónica SIP. Redis cachea el contexto de la conversación para que el agente recuerde lo que se dijo antes en la misma llamada.

## Mi rol
Arquitectura y desarrollo completo: pipeline de audio (Twilio → ElevenLabs → GPT-4 → RAG → ElevenLabs), integración de Redis para contexto de sesión y despliegue del servidor Node.js/TypeScript.

## Resultado
Agente funcional capaz de manejar consultas de soporte de primer nivel sin intervención humana, con latencia de respuesta por debajo de 1 segundo.
