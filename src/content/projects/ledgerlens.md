---
title: "Prisma"
title_en: "Prisma"
event: "Aleph Hackathon 2026"
eventType: "hackathon"
description: "Analizador financiero on-chain para billeteras Avalanche y Ethereum. Clasifica wallets Humano vs Bot con IA, detecta estafas y ofrece dashboards con export PDF."
description_en: "On-chain financial analyzer for Avalanche and Ethereum wallets. Classifies wallets as Human vs Bot with AI, detects scams, and offers dashboards with PDF export."
longDescription: "Prisma analiza el historial completo de una wallet en Avalanche y Ethereum: extrae transacciones vía Glacier API, clasifica si la wallet es humana o bot usando modelos de Hugging Face y contratos GenLayer con consenso distribuido, detecta patrones de estafa como dusting y caracteres cirílicos en tokens, y presenta todo en dashboards de ingresos, gastos, eficiencia de gas y reporte exportable a PDF. La API puede correr con un modelo de pago x402 en USDC sobre Avalanche."
longDescription_en: "Prisma analyzes the full transaction history of an Avalanche and Ethereum wallet: fetches data via Glacier API, classifies wallets as Human or Bot using Hugging Face models and GenLayer contracts with distributed consensus, detects scam patterns like dusting attacks and Cyrillic-character tokens, and presents everything in dashboards covering income, expenses, gas efficiency, and a PDF-exportable report. The API can run on an x402 USDC payment model on Avalanche."
role: "Builder · Diseño + Backend"
role_en: "Builder · Design + Backend"
stack: ["Avalanche", "Ethereum", "GenLayer", "Hugging Face", "OpenAI", "React 19", "Node.js", "TypeScript", "Glacier API", "wagmi", "x402", "Recharts"]
repoUrl: "https://github.com/Kenyi001/ledgerlens"
demoUrl: "https://ledgerlens-backend.vercel.app"
date: "2026"
featured: true
---

## Problema
Leer el historial on-chain de una wallet es ilegible para un humano: hashes, transferencias y contratos sin contexto. Peor aún, el ecosistema DeFi está lleno de bots, wallets de estafa y tokens fraudulentos que no se distinguen a simple vista.

## Solución
Prisma conecta una dirección de wallet y devuelve un análisis completo: clasifica si es una wallet humana o un bot usando modelos de Hugging Face más contratos GenLayer que resuelven por consenso distribuido, detecta patrones de ataque conocidos (dusting, tokens con nombres en cirílico), y presenta el resultado en dashboards de ingresos, gastos, eficiencia de gas y una tabla exportable a PDF. La API también implementa x402 — un estándar de pago USDC on-chain que permite cobrar por cada análisis sin ninguna pasarela de pago tradicional.

## Mi rol
Diseño y backend: pipeline de ingesta desde Glacier API, integración con GenLayer (contratos con consenso), clasificación con Hugging Face/OpenAI, middleware x402 para pagos USDC y el frontend en React 19 con Recharts.

## Resultado
Construido para el Aleph Hackathon 2026. El proyecto más técnicamente denso que armé en hackathon: GenLayer obliga a pensar los contratos como funciones que se ejecutan con consenso de múltiples nodos antes de escribir on-chain, lo que cambia completamente la lógica de diseño frente a Solidity o Plutus.
