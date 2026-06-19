---
title: "The Monarca Barber · ERP"
title_en: "The Monarca Barber · ERP"
event: "Proyecto Personal"
eventType: "personal"
description: "POS + Mini-ERP + Booking público para barbería pequeña. Registro de ventas en 3 clics, caja chica con auditoría inmutable, inventario con alertas y reservas con Google OAuth."
description_en: "POS + Mini-ERP + public booking for a small barbershop. 3-click sales, immutable cash register audit, inventory alerts, and reservations with Google OAuth."
longDescription: "Sistema operativo completo para barbería pequeña: POS con flujo de confirmación por encargado, caja chica con historial inmutable, inventario con descuento automático al confirmar ventas, comisiones por barbero con vista personal, reportes exportables a CSV y booking público sin cuenta del ERP. 81 tests de integración contra DB real. Deploy en Vercel con PostgreSQL serverless (Neon)."
longDescription_en: "Full operating system for a small barbershop: POS with manager confirmation flow, immutable cash register log, inventory with auto-deduction on sale confirmation, per-barber commissions with personal view, CSV-exportable reports, and public booking without an ERP account. 81 integration tests against a real DB. Deployed on Vercel with serverless PostgreSQL (Neon)."
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

## Módulos
- **POS** — registro de venta en 3 clics: barbero → servicios/productos → confirmación encargado
- **Caja chica** — apertura de sesión, ingresos/egresos con comprobante, arqueo, historial inmutable
- **Inventario** — alertas de stock mínimo, descuento automático al confirmar ventas
- **Comisiones** — % configurable por barbero, vista personal `/mi-día`, gráficas por período
- **Reportes** — ventas por período, ranking de barberos, productos más vendidos, export CSV
- **Booking público** — `/book` sin login, Google OAuth, protección de solapamiento con `EXCLUDE` en PostgreSQL

## Decisiones técnicas
- JWT sin sesiones — validación de rol en cada endpoint, sin estado en servidor
- Historial de caja inmutable — ningún movimiento se puede borrar ni editar (auditoría)
- Tests contra DB real — no mocks, para evitar divergencia entre test y producción
- Express exportado como serverless function — mismo código local y Vercel
