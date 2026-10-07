# QA de diseño — animación de puntuaciones

**Fuente visual**

- Referencia seleccionada: `/Users/jorgealonso/.codex/generated_images/01a115d9-a10a-7413-b291-7d1475daaa47/exec-237fbf8e-ef4f-4ee9-b8a8-8e264b2a66c9.png` (1512 × 941 px).
- Implementación: captura del Codex In-App Browser en `http://localhost:4200/`, emitida en línea durante la comparación. La captura disponible en este flujo no ofrece una ruta local persistible.
- Comparación de escritorio: viewport capturado a 1512 × 941 CSS px; imágenes de 1512 × 941 px; el factor de densidad no está expuesto por la captura integrada y no se aplicó reescalado.
- Comprobación móvil adicional: viewport de 390 × 844 CSS px.
- Estado de comparación: test rápido de Generales 2023 tras responder «Sí», segundo impacto revelado. La referencia muestra 2 de 5; la pregunta aleatoria de la implementación mostró 2 de 8. La fase, el orden y la estructura del componente coinciden; la pregunta y el número de partidos dependen de los datos reales.
- Comparación de vista completa: referencia e implementación se capturaron juntas en la misma entrada visual y al mismo tamaño. Se revisaron el fondo translúcido, el panel, la jerarquía, el progreso, los marcadores, los logos, los resultados acumulados y los espacios para los siguientes impactos.
- Comparación de detalle: no hizo falta recortar otra imagen; el panel central ocupa unos 620 px de ancho y permite evaluar con claridad logos, nombres, números y etiquetas.

**Hallazgos**

- No quedan diferencias P0, P1 o P2 pendientes.
- Tipografía: se conserva la serif editorial para los nombres y una sans legible para las etiquetas. El número del cambio domina cada fila y mantiene `+1` y `−1` fáciles de distinguir.
- Espaciado y composición: el panel centrado y la lista vertical siguen la referencia. Su altura se adapta al número real de partidos y queda limitada al viewport; en móvil la lista conserva los seis impactos de la muestra sin desbordar horizontalmente.
- Color: fondo marfil con velo oscuro translúcido, verde para sumar, coral para restar y tonos neutros para los pasos futuros.
- Imágenes: la interfaz usa los logos de partido disponibles en el proyecto. Las filas futuras quedan como marcadores neutros hasta su turno.
- Texto: el estado de respuesta, el contador y las etiquetas de puntos aparecen en español.
- Accesibilidad y movimiento: el progreso tiene etiqueta y valores accesibles; las filas aún no reveladas se ocultan al lector de pantalla. Se conserva el ajuste global de movimiento reducido.

**Historial de comparación**

1. La primera vista tenía el contenido más pequeño que la referencia y las filas futuras heredaban el color del partido. Se aumentó la escala de nombres, logos y cambios; los pasos futuros ahora usan tonos neutros.
2. Al adaptar la altura a cantidades menores de partidos, una captura mostró espacio vacío al pie del panel. La lista ahora crece para ocupar el espacio disponible y el alto mínimo depende del número de impactos.
3. La captura final, al segundo resultado, confirma la jerarquía, el progreso y la acumulación de filas. Se comprobó también la versión móvil con seis partidos y la animación de resta en una ejecución previa.

**Lista de implementación**

- Mantener cada impacto anterior debajo del siguiente.
- Resaltar el paso activo en la línea temporal numerada y en la barra de progreso.
- Animar la entrada de la fila y el cambio grande de puntos.
- Dejar las filas futuras como guía visual hasta que se revelen.
- Conservar el avance automático y el tratamiento de ganancia/pérdida existentes.
- Adaptar el panel a escritorio, móvil y movimiento reducido.

**Resultado final: passed**
