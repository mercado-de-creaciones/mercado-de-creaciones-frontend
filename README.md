# Mercado de creaciones _FrontEnd_ - Enfoque SPA

## Diagrama de arquitectura

![SPA](https://jonmircha.com/img/blog/arquitectura-spa.png)

### Explicacion:

1. **_Cliente (Frontend):_**

   - En la parte izquierda del diagrama, vemos la sección del cliente o frontend de la aplicación. Esta área representa la interfaz de usuario que los usuarios interactúan directamente en el navegador web.

   - Hay una sección **SPA** que indica que se utiliza tecnologías web estándar como HTML para la estructura, CSS para los estilos y JavaScript para la interactividad y la lógica del cliente.

2. **_Servidor (Backend):_**

   - En la parte **_Servidor App_** del diagrama, encontramos la sección del servidor o backend de la aplicación. Esta área representa el servidor que proporciona los datos y la funcionalidad para la aplicación.
   - Se menciona "API REST", lo que sugiere que la **SPA** se comunica con el backend a través de una interfaz de programación de aplicaciones **(API) RESTFULL** para obtener y enviar datos.

3. **_Base de Datos:_**

   - En la parte derecha del diagrama, hay una sección etiquetada como **"BBDD"**. Esto indica que la aplicación puede almacenar y recuperar datos de una base de datos para su procesamiento y presentación.

---

## Tecnologías:

Para el desarrollo de el _Frontend_ de esta _App Web_ se usaron las siguientes tecnologías:

- **_HTML:_** Utilizamos este lenguaje de etiquetas para maquetar semánticamente la estructura de la _app_.
- **_Tailwind CSS:_** Utilizamos este framework **CSS** para aplicar estilos y **_Responsive Web Design_** a la _app_ con un enfoque _Mobile First_.
- **_Vanilla JS:_** Utilizamos este lenguaje de programación para agregar funcionalidad a la _App Web_.
- **_NPM:_** Utilizamos este gestor de dependecias de _NodeJS_ para instalar librerías de _JS_.

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

| Carpeta / Archivo | Funcionalidad                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/app`            | Contiene todos los archivos importantes de la aplicación.                                                                                                                                                                                                                                                                                 |
| `/app/assets`     | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/app/components` | Contiene todos los componentes _Javascript_ de la app.                                                                                                                                                                                                                                                                                    |
| `/app/pages`      | Contiene todas las paginas de la app.                                                                                                                                                                                                                                                                                                     |
| `/app/helpers`    | Contiene todas las _funciones reutilizables_ de ayuda en nuestra lógica y _constantes_ que se usan en la app(ej. formatear una fecha, formatear numero a peso de venta,funcion para peticiones http, etc). Se recomienda los archivos helpers con la siguiente nomenclatura: `archivoHelper.js`. Por ejemplo puede ser `formatsHelper.js` |
| `/app/functions`  | Contiene todas las funciones que tendran la logica de las funcionalidades de nuestra página(ej. logica del carrito, ,menu hamburguesa, etc).                                                                                                                                                                                              |
| `/app/Router.js`  | Maneja la lógica al cambiar el _hash_ de la url y carga la data de APIs, archivos persistentes, etc (En nuestro caso controla la carga de la pagina de incio, tienda,sobre mí, contacto, etc).                                                                                                                                            |
| `App.js`          | Se encarga de renderizar los _componentes_ de la app y tambien el _Router_.                                                                                                                                                                                                                                                               |
| `index.html`      | Único archivo _HTML_ donde carga todo el contenido de una vez con todos los recursos y el JS                                                                                                                                                                                                                                              |
| `index.js`        | Archivo que se encarga de renderizar el contenido de la _SPA_ de una sola vez y cada vez que cambia el _hash_ de la url.                                                                                                                                                                                                                  |
| `db.json`         | JSON de **JSON server** que tendrá toda la data de productos, entre otros y creará nuestros _endpoints_.                                                                                                                                                                                                                                  |
| `/node_modules`   | Carpeta que guarda las dependecias instaladas con _NPM_.                                                                                                                                                                                                                                                                                  |
| `package.json`    | Archivo de configuración de dependencias de _NodeJS_.                                                                                                                                                                                                                                                                                     |
| `.gitignore`      | Establece carpetas o archivos que son de desarrollo y no tendrán seguimiento con _Git_.                                                                                                                                                                                                                                                   |
|  |

---

## Enlaces Utiles:

- [Documentación Tailwind](https://tailwindcss.com/)
- [Tutorial Vanilla JavaScript](https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&ab_channel=jonmircha)
- [Artículo sobre Single Page Application](https://jonmircha.com/spa)

- [Artículo sobre HTML y CSS](https://jonmircha.com/html)

- [Artículo sobre Responsive Desing](https://jonmircha.com/responsive)

- [Artículo sobre Base de Datos](https://jonmircha.com/bd)

- [Artículo sobre node.js](https://jonmircha.com/nodejs)
