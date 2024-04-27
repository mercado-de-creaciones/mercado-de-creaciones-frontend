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

| Carpeta / Archivo               | Descripción |
| ------------------------------- | ----------- |
| `/src`                          |             |
| `/src/config`                   |             |
| `/src/config/adapter`           |             |
| `/src/config/helpers`           |             |
| `/src/core`                     |             |
| `/src/core/entities`            |             |
| `/src/core/use-cases`           |             |
| `/src/infrastructure`           |             |
| `/src/infrastructure/entities`  |             |
| `/src/infrastructure/use-cases` |             |
| `/src/presentation`             |             |
| `/src/presentation/pages`       |             |
| `/src/presentation/routes`      |             |
| `/src/presentation/hooks`       |             |
| `/src/presentation/assets`      |             |
| `/src/presentation/components`  |             |
