---
title: "Sistema de Alerta Temprana para la Deserción Estudiantil"
title_en: "Early Warning System for Student Dropout"
event: "Proyecto de Grado — UTEPSA"
eventType: "personal"
description: "Modelo predictivo que identifica estudiantes en riesgo de abandonar la universidad antes de que ocurra, con un tablero que permite a un área no técnica priorizar a quién atender según su presupuesto real."
description_en: "Predictive model that flags students at risk of dropping out before it happens, with a dashboard that lets a non-technical team prioritize who to reach based on their actual budget."
longDescription: "Análisis de datos de punta a punta sobre 4.424 registros y 37 variables, siguiendo CRISP-DM: exploración (EDA), detección de valores atípicos, correlaciones y tratamiento de desbalanceo de clases. Se compararon seis familias de modelos con validación cruzada estratificada de 5 pliegues y pruebas estadísticas pareadas. La decisión clave no fue técnica sino de negocio: se priorizó Recall sobre exactitud porque el costo de no detectar a alguien es mucho mayor que el de una falsa alarma. El modelo se desplegó como API REST con una interfaz donde Bienestar Universitario ajusta el umbral y ve en vivo a cuántas personas alcanza cada escenario."
longDescription_en: "End-to-end data analysis over 4,424 records and 37 variables following CRISP-DM: exploratory analysis, outlier detection, correlations, and class imbalance handling. Six model families were compared using 5-fold stratified cross-validation and paired statistical tests. The key decision was not technical but a business one: Recall was prioritized over accuracy because the cost of missing someone far outweighs a false alarm. The model was deployed as a REST API with an interface where the student welfare team adjusts the threshold and sees live how many people each scenario reaches."
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

![Qué variables pesan más en la predicción de riesgo](/projects/07_importancia_variables.png)

*Qué mira el modelo para decidir. El rendimiento del segundo semestre domina — y es exactamente lo que un área de Bienestar puede observar a tiempo.*

## Resultado

| Métrica | Valor |
|---|---|
| Recall | 90,49% |
| Precisión | 86,82% |
| ROC-AUC | 0,9677 |

![Curva Precisión-Recall del modelo final](/projects/08_curva_precision_recall.png)

*Curva Precisión-Recall, no ROC. Con clases desbalanceadas la curva ROC se ve optimista porque normaliza los falsos positivos contra un universo grande de negativos; la PR muestra el intercambio real entre a cuántos detecto y a cuántos molesto de más.*

![Matriz de confusión sobre datos de prueba](/projects/05_matriz_confusion.png)

*El mismo resultado en crudo: a cuántos detecta y a cuántos se le escapan, sobre datos que el modelo nunca vio durante el entrenamiento.*

Más allá de los números: el entregable fue un **tablero para gente que no programa**. Bienestar mueve un umbral y ve en vivo cuántas personas entran en la lista de atención según la capacidad real de tutorías que tenga ese período.

![Diagrama de flujo del sistema completo](/projects/09_diagrama_flujo.png)

*De los datos crudos al reporte que llega a Bienestar. El modelo es una pieza del recorrido, no el producto.*

## Una decisión de comunicación, no de modelo

El reporte **nunca dice "desertor"**. Informa nivel de riesgo, el motivo concreto de ese estudiante y una acción sugerida.

Un archivo que circula por una institución etiquetando a alguien por algo que todavía no ocurrió puede provocar exactamente lo que intenta evitar. El sistema ordena y prioriza; la decisión sobre una persona sigue siendo humana.
