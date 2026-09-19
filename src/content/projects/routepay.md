---
title: "RoutePay Protocol"
title_en: "RoutePay Protocol"
event: "Ethereum Bolivia Buildathon 2026"
eventType: "hackathon"
description: "Escrow inteligente para flete internacional: el pago en stablecoin se libera al instante cuando el transportista confirma la entrega con una tarjeta física NFC, sin bancos ni intermediarios."
description_en: "Smart escrow for international freight: stablecoin payment releases instantly when the carrier confirms delivery with a physical NFC card, no banks or intermediaries."
longDescription: "RoutePay resuelve el pago de flete internacional en el corredor Arica–Bolivia: hoy pasa por bancos, comisiones altas y semanas de espera. El importador deposita el pago en una stablecoin custodiada por un contrato inteligente en Avalanche. Cuando la carga llega a destino, el transportista confirma la entrega tocando una tarjeta física Tangem NFC, y ese toque libera el pago al instante, sin aprobación bancaria. El protocolo cubre las comisiones de red — ni importador ni transportista pagan gas aparte."
longDescription_en: "RoutePay solves international freight payment on the Arica–Bolivia corridor: today it goes through banks, high fees and weeks of waiting. The importer deposits the freight payment in a stablecoin held by a smart contract on Avalanche. When the cargo arrives, the carrier confirms delivery by tapping a physical Tangem NFC card, and that tap releases the payment instantly, no bank approval needed. The protocol covers network fees — neither party pays gas separately."
role: "Smart Contracts & Backend"
role_en: "Smart Contracts & Backend"
stack: ["Avalanche", "Solidity", "Tangem NFC", "Stablecoin (USDC)", "TypeScript", "Smart Contracts"]
award: "Bounty Winner — Avalanche"
repoUrl: "https://github.com/RoutePay-Protocol/routepay"
date: "2026"
featured: true
metrics: "Equipo ArquiSoft (5) · 48h en Univalle, Cochabamba · testnet Avalanche, contratos verificados"
metrics_en: "ArquiSoft team (5) · 48h at Univalle, Cochabamba · Avalanche testnet, verified contracts"
image: "/projects/routepay-award.jpg"
---

## Problema
Pagar un flete internacional en el corredor Arica–Bolivia hoy pasa por bancos, comisiones altas y semanas de espera hasta que el dinero llega a quien hizo el trabajo.

## Solución
El importador deposita el pago del flete en una stablecoin, custodiada por un contrato inteligente — código que cumple la regla sin que nadie pueda tocar el dinero antes de tiempo. Cuando la carga llega a destino, el transportista confirma la entrega tocando una tarjeta física Tangem NFC. Ese toque libera el pago al instante, sin que un banco ni un intermediario tengan que aprobarlo. El protocolo cubre las comisiones de red, así que ni importador ni transportista pagan gas aparte.

## Mi rol
Contratos inteligentes y backend, en equipo de 5 (ArquiSoft: Ariane Somoza Rocha, Victor Murillo, Raciel Ramos, Ronald Augusto Rodríguez Serrano y yo) durante las 48 horas del Buildathon en Univalle, Cochabamba.

## Resultado
**Bounty Winner de Avalanche** en el Ethereum Bolivia Buildathon 2026. Por ahora corre en testnet de Avalanche, con los contratos verificados y publicados. El caso de uso real (custodia condicionada a una confirmación física NFC, sin intermediario bancario) fue lo que distinguió la propuesta entre los proyectos del evento.
