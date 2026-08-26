---
title: "Sistema de Alerta Temprana para la Deserción Estudiantil"
title_en: "Early Warning System for Student Dropout"
event: "Proyecto de Grado — UTEPSA"
eventType: "personal"
description: "Modelo predictivo que identifica estudiantes en riesgo de abandonar la universidad antes de que ocurra. El entregable es una API REST para que la institución la conecte a sus propios sistemas."
description_en: "Predictive model that flags students at risk of dropping out before it happens. The deliverable is a REST API the institution plugs into its own systems."
longDescription: "Análisis de datos de punta a punta sobre 4.424 registros y 37 variables, siguiendo CRISP-DM: exploración (EDA), detección de valores atípicos, correlaciones y tratamiento de desbalanceo de clases. Se compararon seis familias de modelos con validación cruzada estratificada de 5 pliegues y pruebas estadísticas pareadas. La decisión clave no fue técnica sino de negocio: se priorizó Recall sobre exactitud porque el costo de no detectar a alguien es mucho mayor que el de una falsa alarma. El entregable es una API REST desplegada: endpoints de predicción, reporte y salud, con contrato validado, para que la universidad la integre a sus propios sistemas sin depender de un notebook. Se construyó además una interfaz que demuestra esas capacidades a un área no técnica."
longDescription_en: "End-to-end data analysis over 4,424 records and 37 variables following CRISP-DM: exploratory analysis, outlier detection, correlations, and class imbalance handling. Six model families were compared using 5-fold stratified cross-validation and paired statistical tests. The key decision was not technical but a business one: Recall was prioritized over accuracy because the cost of missing someone far outweighs a false alarm. The deliverable is a deployed REST API — prediction, report and health endpoints with a validated contract — so the university can integrate it into its own systems instead of depending on a notebook. An interface was also built to demonstrate those capabilities to a non-technical team."
role: "Análisis de datos, modelado y despliegue"
role_en: "Data analysis, modeling and deployment"
stack: ["Python", "pandas", "scikit-learn", "FastAPI", "Render", "CRISP-DM"]
date: "2026"
featured: true
metrics: "✓ Defensa aprobada (ago 2026) · Recall 90,49% · Precisión 86,82% · ROC-AUC 0,9677 · API desplegada"
metrics_en: "✓ Thesis approved (Aug 2026) · Recall 90.49% · Precision 86.82% · ROC-AUC 0.9677 · API deployed"
image: "/projects/alerta-temprana-interfaz.png"
repoUrl: "https://github.com/Kenyi001/defensa-grado-ia"
demoUrl: "https://defenza-grado-api.onrender.com"
demoNote: "La demo corre en plan gratuito de Render y el servicio se duerme sin tráfico: la primera carga puede tardar hasta un minuto en despertar. Después responde al instante."
demoNote_en: "The demo runs on Render's free tier and sleeps when idle: the first load can take up to a minute to wake up. After that it responds instantly."
---

## Problema

Una universidad se entera de que un estudiante desertó **cuando ya se fue**. En ese momento ninguna intervención es posible. El problema no era predecir por predecir: era invertir el orden, para que el área de Bienestar pudiera actuar mientras todavía había alguien a quien acompañar.

## El dato que define todo el proyecto

Un modelo que dice "nadie deserta", sin mirar ningún dato, acierta el **60,85%** de las veces — porque esa es la proporción de quienes se gradúan. Y detecta **cero** estudiantes en riesgo.

Por eso la métrica de éxito no fue la exactitud sino el **Recall**: de los que realmente están en riesgo, ¿a cuántos alcanzo a detectar? Elegir la métrica según lo que cuesta el error, y no la que se ve mejor en un reporte, fue la decisión más importante del trabajo.

## Análisis

Sobre 4.424 registros y 37 variables: exploración de datos, detección de valores atípicos, correlaciones y tratamiento del desbalanceo de clases.

Un hallazgo del análisis exploratorio cambió el preprocesamiento: 718 notas en cero durante el primer semestre **no eran datos faltantes** — coincidían exactamente con quienes no aprobaron ninguna materia. Imputarlas habría borrado la señal más fuerte del conjunto.

Se compararon seis alternativas con validación cruzada estratificada y pruebas estadísticas pareadas, documentando cuándo las diferencias eran significativas y cuándo no se distinguían del ruido.

<figure class="fig fig-wide">
  <img src="/projects/07_importancia_variables.png" alt="Ranking de las 10 variables más influyentes en la predicción de riesgo" loading="lazy" decoding="async" />
  <figcaption>Qué mira el modelo para decidir. El rendimiento del segundo semestre domina — y es exactamente lo que un área de Bienestar puede observar a tiempo.</figcaption>
</figure>

## Resultado

<div class="stat-row">
  <div class="stat">
    <span class="stat-num">90,49%</span>
    <span class="stat-lbl">Recall</span>
    <span class="stat-sub">De los que sí desertan, a cuántos alcanza a detectar</span>
  </div>
  <div class="stat">
    <span class="stat-num">86,82%</span>
    <span class="stat-lbl">Precisión</span>
    <span class="stat-sub">De los que marca como riesgo, cuántos lo eran de verdad</span>
  </div>
  <div class="stat">
    <span class="stat-num">0,9677</span>
    <span class="stat-lbl">ROC-AUC</span>
    <span class="stat-sub">Capacidad general de separar los dos grupos</span>
  </div>
</div>

<div class="fig-pair">
  <figure class="fig">
    <img src="/projects/08_curva_precision_recall.png" alt="Curva Precisión-Recall del modelo final sobre el conjunto de prueba" loading="lazy" decoding="async" />
    <figcaption>Curva Precisión-Recall, no ROC. Con clases desbalanceadas la ROC se ve optimista porque normaliza los falsos positivos contra un universo grande de negativos; la PR muestra el intercambio real entre a cuántos detecto y a cuántos molesto de más.</figcaption>
  </figure>
  <figure class="fig">
    <img src="/projects/05_matriz_confusion.png" alt="Matriz de confusión sobre el conjunto de prueba" loading="lazy" decoding="async" />
    <figcaption>El mismo resultado en crudo: a cuántos detecta y a cuántos se le escapan, sobre datos que el modelo nunca vio durante el entrenamiento.</figcaption>
  </figure>
</div>

## El entregable es una API, no un tablero

Un modelo dentro de un notebook no lo usa nadie. Por eso lo que se entrega es una **API REST desplegada**, con endpoints de predicción, reporte y estado del servicio, y el contrato validado: si llega un valor fuera de rango, responde con el error correspondiente en vez de devolver una predicción sin sentido.

Eso permite que la universidad la **conecte a sus propios sistemas** — al que ya usa para matrículas, notas o seguimiento — sin depender de que alguien abra un notebook y corra celdas.

Encima de esa API construí una interfaz, y su función es distinta: **demostrar las capacidades del servicio a quien no programa**. Ahí se mueve el umbral y se ve en vivo a cuántas personas alcanza cada escenario según la capacidad real de tutorías del período. La interfaz existe para que se entienda qué hace la API; el producto integrable es la API.

<figure class="fig fig-tall">
  <img src="/projects/09_diagrama_flujo.png" alt="Diagrama de flujo del sistema: de los datos crudos al reporte en producción" loading="lazy" decoding="async" />
  <figcaption>De los datos crudos al servicio en producción. El modelo es una pieza del recorrido, no el producto.</figcaption>
</figure>

## Una decisión de comunicación, no de modelo

El reporte **nunca dice "desertor"**. Informa nivel de riesgo, el motivo concreto de ese estudiante y una acción sugerida.

Un archivo que circula por una institución etiquetando a alguien por algo que todavía no ocurrió puede provocar exactamente lo que intenta evitar. El sistema ordena y prioriza; la decisión sobre una persona sigue siendo humana.
