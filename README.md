# Mercado de creaciones _FrontEnd_ - Enfoque SPA

## Diagrama de arquitectura

![SPA](https://jonmircha.com/img/blog/arquitectura-spa.png)

## Tecnologías:

Para el desarrollo de el _Frontend_ de esta _App Web_ se usaron las siguientes tecnologías:

- **_HTML:_** Lenguaje de etiquetas para estructurar la app de manera semántica.
- **_Tailwind CSS:_** Framework CSS para aplicar estilos y Responsive Web Design con enfoque Mobile First.
- **_TypeScript:_** Agrega tipado estático a la aplicación para mayor robustez.
- **_NPM:_** Gestor de dependencias de Node.js para instalar librerías en TypeScript.
- **_Figma:_** Herramienta para diseñar y prototipar la interfaz de usuario.
- **_Git:_** Sistema de control de versiones para una colaboración efectiva.
- **_Jest:_** Framework de pruebas JavaScript.

---

## Hosting:

Utilizamos Netlify para alojar nuestra aplicación. Ofrece un proceso de implementación rápido y sencillo, con integración de herramientas de automatización y despliegue continuo para una publicación ágil y eficiente en entornos de producción.

[Ir a Netlify](https://app.netlify.com)

---

## ¿Que enfoque usa esta _App Web_?

Esta _App Web_ es una **Single Page Application(_SPA_)** o **Aplicación de una Sola Página**.

### ¿Por qué esta web es una **_SPA_**?

- Porque todo el contenido carga de una sola vez, es decir, el navegador descarga solo un archivo _HTML_ con todos los recursos haciendo que la navegación sea más rápida y fluida.
- Porque carga contenido de forma dinámica sin necesidad de recargar la página usando **_AJAX_**.
- Porque mediante una _API_ conecta el _Frontend_ con el _Backend_, y este último mencionado es independiente a la _SPA_ importando poco en que lenguaje esté programado o que patrones use.
- Porque el _Frontend_, _Backend_ y la _persistencia de datos_ estan desacoplados y descentralizados de sí mismos.

---

## Estructura de carpetas y archivos:

| Carpeta / Archivo    | Funcionalidad                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/app`               | Contiene todos los archivos importantes de la aplicación.                                                                                                                                                                                                                                                                                 |
| `/app/assets`        | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/app/components`    | Contiene todos los componentes _TypeScript_ de la app.                                                                                                                                                                                                                                                                                    |
| `/app/pages`         | Contiene todas las paginas de la app.                                                                                                                                                                                                                                                                                                     |
| `/app/helpers`       | Contiene todas las _funciones reutilizables_ de ayuda en nuestra lógica y _constantes_ que se usan en la app(ej. formatear una fecha, formatear numero a peso de venta,funcion para peticiones http, etc). Se recomienda los archivos helpers con la siguiente nomenclatura: `archivoHelper.ts`. Por ejemplo puede ser `formatsHelper.ts` |
| `/app/functions`     | Contiene todas las funciones que tendran la logica de las funcionalidades de nuestra página.                                                                                                                                                                                                                                              |
| `/app/Router.ts`     | Maneja la lógica al cambiar el _hash_ de la url y carga la data de APIs, archivos persistentes.                                                                                                                                                                                                                                           |
| `/tests`             | Contiene archivos de pruebas unitarias e integración para asegurar la funcionalidad y calidad del código.                                                                                                                                                                                                                                                    |
| `App.ts`             | Se encarga de renderizar los _componentes_ de la app y tambien el _Router_.                                                                                                                                                                                                                                                               |
| `index.html`         | Único archivo _HTML_ donde carga todo el contenido de una vez con todos los recursos y el JS                                                                                                                                                                                                                                              |
| `index.ts`           | Archivo que se encarga de renderizar el contenido de la _SPA_ de una sola vez y cada vez que cambia el _hash_ de la url.                                                                                                                                                                                                                  |
| `Tailwind.config.ts` | El archivo "tailwind.config.js" personaliza las opciones de Tailwind CSS, como colores, fuentes y márgenes, para adaptarse a las necesidades del proyecto.                                                                                                                                                                                | \_. |
| `package.json`       | Archivo de configuración de dependencias de _NodeJS_. ##                                                                                                                                                                                                                                                                                  |
