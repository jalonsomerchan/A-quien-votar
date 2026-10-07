# ¿A quién votar?

Webapp Angular para comparar respuestas personales con propuestas de los programas electorales de las generales de 2023 y de las elecciones a la Asamblea de Extremadura de 2025.

## Ejecutar en local

```sh
npm install
npm start
```

## Añadir otra edición

Cada edición tiene un JSON con sus preguntas en `public/data/`. Registra el nuevo año y la ruta del archivo en `public/data/ediciones.json`. El formato de cada pregunta guarda los partidos que apoyan o rechazan la propuesta y las referencias a sus programas.

Cada partido puede declarar `program` con la ruta local de su PDF. El validador exige que sus evidencias apunten a ese archivo. Si se omite, conserva la convención de las generales de 2023 (`/programas/{año}/programa_electoral_{partido}.pdf`). Añade también un identificador visual local en `logo`.

Solo se compara un partido en un tema cuando el programa expresa una postura clara. Las respuestas que se pasan y las posturas no declaradas no se incluyen en el porcentaje.

Cada pregunta incluye `testLevel`: `rapido` para el test rápido, `normal` para las preguntas que se añaden al rápido y `extenso` para las preguntas que completan el test extenso. El test normal reúne `rapido` y `normal`; el extenso incluye todas las preguntas.

La edición de 2023 contiene 111 preguntas: 10 en el test rápido, 30 en el normal y las 111 en el extenso. Las 51 preguntas añadidas se han contrastado con los PDF locales de los nueve partidos. Sus referencias indican la página del PDF (contada desde la portada, que puede diferir de la numeración impresa) y enlazan directamente a ella.

Las preguntas distinguen el alcance de cada propuesta: por ejemplo, la derogación íntegra de una ley frente a su reforma parcial, o una prestación universal frente a una ayuda para rentas bajas. Una postura no se deduce del silencio de un programa ni de la ideología del partido. Las referencias son resúmenes de las propuestas, no citas literales.

La edición de Extremadura 2025 está en `public/data/preguntas-extremadura-2025.json` y contiene 110 preguntas: 10 en el test rápido, 30 en el normal y 110 en el extenso. Incluye los cuatro programas aportados: PP, PSOE, Unidas por Extremadura y Vox. Las referencias enlazan a la página del PDF contada desde la portada. Las 46 posturas de Vox se han contrastado con el PDF con texto extraíble y sus referencias incluyen el número de medida. En el PDF del PSOE se ha consultado el texto visible para evitar atribuir a una página contenido oculto repetido de otras páginas.

La comparación se limita a esos cuatro programas y no pretende ser un listado completo de candidaturas. Los enunciados describen propuestas electorales; las medidas que requieren al Estado u otras administraciones no se presentan como competencias exclusivas de la Junta. El identificador de Unidas es tipográfico; las fuentes visuales están documentadas en `public/logos/partidos/FUENTES.md`.

## Validar los datos

```sh
npm run validate:data
npm run build
```

La validación comprueba el mínimo de 100 preguntas por edición, los identificadores y enunciados duplicados, los tres niveles del test, la cobertura de todos los partidos en cada modalidad, la correspondencia entre posturas y evidencias, y la existencia de los programas y símbolos enlazados. La fidelidad de cada resumen al programa requiere revisión editorial.

## Desplegar en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila la app y la publica en GitHub Pages cuando hay cambios en `main` o al ejecutarlo manualmente desde la pestaña Actions. El dominio personalizado previsto es `aquienvotar.alon.one`.

Para activar el despliegue:

1. En el repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
2. En esa misma página, configura `aquienvotar.alon.one` como dominio personalizado.
3. En el proveedor DNS de `alon.one`, crea un registro `CNAME` para `aquienvotar` que apunte a `jalonsomerchan.github.io`.
4. Cuando GitHub haya emitido el certificado, activa **Enforce HTTPS** en Settings → Pages.

El archivo `public/CNAME` conserva el dominio junto al contenido estático. GitHub requiere que el dominio también se configure en Settings → Pages al publicar con un workflow personalizado.
