# Mercado de creaciones _FrontEnd_ - Enfoque SPA

## Diagrama de arquitectura

![arquitectura-limpia](https://learn.microsoft.com/es-es/dotnet/architecture/modern-web-apps-azure/media/image5-8.png)

## Tecnologías y Bibliotecas:

Para el desarrollo de el _Frontend_ de esta _App Web_ se usaron las siguientes tecnologías y bibliotecas:

- **_HTML:_** Lenguaje de etiquetas para estructurar la app de manera semántica.
- **_Tailwind CSS:_** Framework CSS para aplicar estilos y Responsive Web Design con enfoque Mobile First.
- **_React:_** : Biblioteca JavaScript para interfaces de usuario interactivas y reutilizables.
- **_React Query:_**: Biblioteca para gestionar y sincronizar datos de forma eficiente en aplicaciones React.
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

## Estructura de carpetas y archivos:

| Carpeta / Archivo               | Funcionalidad                                                                                                                                                                                                                                                                                                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/src`                          | Contiene todos los archivos importantes de la aplicación.                                                                                                                                                                                                                                                                                 |
| `/src/config`                   | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src/config/adapter`           | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src/config/helpers`           | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src/core`                     | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src/core/entities`            | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src/core/use-cases`           | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src/infrastructure`           | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src/infrastructure/use-cases` | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src/infrastructure/use-cases` | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src/presentation`             | Contiene todos los componentes _TypeScript_ de la app.                                                                                                                                                                                                                                                                                    |
| `/src/presentation/pages`       | Contiene todas las paginas de la app.                                                                                                                                                                                                                                                                                                     |
| `/src/presentation/helpers`     | Contiene todas las _funciones reutilizables_ de ayuda en nuestra lógica y _constantes_ que se usan en la app(ej. formatear una fecha, formatear numero a peso de venta,funcion para peticiones http, etc). Se recomienda los archivos helpers con la siguiente nomenclatura: `archivoHelper.ts`. Por ejemplo puede ser `formatsHelper.ts` |
| `/src/presentation/routes`      | Contiene todas las funciones que tendran la logica de las funcionalidades de nuestra página.                                                                                                                                                                                                                                              |
| `/src/presentation/hooks`       | Contiene todas las funciones que tendran la logica de las funcionalidades de nuestra página.                                                                                                                                                                                                                                              |
| `/src/presentation/assets`      | Contiene todas las funciones que tendran la logica de las funcionalidades de nuestra página.                                                                                                                                                                                                                                              |
| `/src/presentation/components`  | Contiene todas las funciones que tendran la logica de las funcionalidades de nuestra página.                                                                                                                                                                                                                                              |
