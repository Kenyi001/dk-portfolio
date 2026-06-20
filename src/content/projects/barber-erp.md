---
title: "The Monarca Barber · ERP"
title_en: "The Monarca Barber · ERP"
event: "Proyecto Personal"
eventType: "personal"
description: "POS + Mini-ERP + Booking público para barbería. Registro de ventas en 3 clics, caja chica con auditoría inmutable, inventario con alertas y reservas con Google OAuth."
description_en: "POS + Mini-ERP + public booking for a barbershop. 3-click sales, immutable cash register audit, inventory alerts, and reservations with Google OAuth."
longDescription: "Sistema operativo completo para barbería: POS con flujo de confirmación por encargado, caja chica con historial inmutable, inventario con descuento automático al confirmar ventas, comisiones por barbero con vista personal, reportes exportables a CSV y booking público sin cuenta del ERP. 81 tests de integración contra DB real. Deploy en Vercel con PostgreSQL serverless (Neon)."
longDescription_en: "Full operating system for a barbershop: POS with manager confirmation flow, immutable cash register log, inventory with auto-deduction on sale confirmation, per-barber commissions with personal view, CSV-exportable reports, and public booking without an ERP account. 81 integration tests against a real DB. Deployed on Vercel with serverless PostgreSQL (Neon)."
role: "Desarrollador Full Stack"
role_en: "Full Stack Developer"
stack: ["React 18", "Node.js", "Express", "PostgreSQL", "Vite", "Tailwind CSS v4", "JWT", "Recharts", "Neon", "Vercel"]
repoUrl: "https://github.com/Kenyi001/erp-barber"
demoUrl: "https://erp-barber.vercel.app"
date: "2025"
featured: true
metrics: "81 tests de integración · 6 módulos · 3 roles · deploy en Vercel"
metrics_en: "81 integration tests · 6 modules · 3 roles · deployed on Vercel"
---

## Problema
Una barbería chica funciona a punta de papel y WhatsApp: las ventas no quedan registradas, la caja se cuadra de memoria, las citas se agendan por teléfono y nadie sabe con certeza qué barbero genera más ni cuánto se le debe en comisiones. Sin datos, cada decisión es un cálculo a ojo.

## Solución
Un sistema operativo completo para el día a día de la barbería. El barbero registra una venta en tres clics y un encargado la confirma antes de que afecte la caja; la caja chica lleva un historial inmutable que se arquea al cierre; el inventario descuenta stock solo y avisa cuando algo baja del mínimo; cada barbero ve sus propios cortes y su comisión estimada; y los clientes reservan desde una página pública sin necesidad de cuenta, con la disponibilidad protegida a nivel de base de datos para que no se crucen dos citas en el mismo horario.

## Mi rol
Full stack, de punta a punta: el frontend en React, la API en Node.js + Express y el modelo de datos en PostgreSQL. Tomé las decisiones de arquitectura que sostienen el sistema —autenticación JWT sin estado con validación de rol en cada endpoint, un historial de caja que ningún rol puede borrar ni editar por auditoría, y el mismo código de Express corriendo local y como función serverless en Vercel.

## Resultado
Desplegado en Vercel sobre PostgreSQL serverless, con 81 tests de integración que corren contra una base de datos real en vez de mocks, para que lo que pasa en las pruebas sea lo que pasa en producción. El aprendizaje: en un negocio real, la confianza en los números importa más que las features —por eso la caja es inmutable y los tests no mienten.
