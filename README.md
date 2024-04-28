# Mercado de creaciones _FrontEnd_

## Diagrama de arquitectura limpia

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
- **_Vitest:_** Framework de pruebas JavaScript.

---

## Hosting:

Utilizamos Netlify para alojar nuestra aplicación. Ofrece un proceso de implementación rápido y sencillo, con integración de herramientas de automatización y despliegue continuo para una publicación ágil y eficiente en entornos de producción.

[Ir a Netlify](https://app.netlify.com)

---

## ¿Que enfoque usa esta _App Web_?

Esta _App Web_ es una **Single Page Application(_SPA_)** o **Aplicación de una Sola Página** que usa principios de arquitectura limpia.

## Estructura de carpetas y archivos:

| Carpeta                          | Descripción | Formato para nombrar archivo | 
| -------------------------------- | ----------- | ------------------- |
| `/src`                           | Contiene toda el código de la app para producción(casos de uso, UI, configuraciones, etc) |  N/A |
| `/config`                        | Contiene archivos de configuración global para nuestra app(configuraciones de __APIs__, adaptadores, helpers, etc)  | N/A  |
| `/config/adapter`                | Contiene adaptadores que son piezas de código de librerías externas que adapta funcionalidades para que sean flexibles al cambio | `/nombre-contexto/nombre-modulo.adapter.ts` |
| `/config/helpers`                | Contiene funciones que realizan tareas comunes y que pueden ser reutilizadas(por ejemplo, formatear fechas, montos, calculos, etc)  | `nombre-descriptivo.ts` |
| `/core`                          | Contiene la lógica de negocio de nuestra app, como las entidades y casos de uso (esta lógica es independiente a cualquier framework frontend) | N/A |
| `/core/entities`                 | Contiene las _"entidades"_ de nuestra app (objeto que contiene la lógica de negocio o datos que usaremos) | `nombreentidad.entity.ts` |
| `/core/use-cases`                | Contiene los _"casos de uso"_ de nuestra app(un caso de uso es una operación específica que un usuario puede realizar. Ejemplo:  _"Iniciar sesión", "Registrarse", "Crear producto", etc_) | `/nombre-modulo/nombre-caso-uso.use-case.ts` |
| `/infrastructure`                | Es responsable de implementar los detalles de cómo nuestra app interactúa con las __APIs__, etc. | N/A |
| `/infrastructure/interfaces`     | Contiene las interfaces que definen cómo nuestra app interactúa con los sistemas externos (__APIs__, etc) | `nombre-descriptivo.response.ts`  |
| `/infrastructure/mappers`        | Son piezas de código que convierten datos de un formato a otro. | `nombreentidad.mapper.ts` |
| `/presentation`                  | Contiene código relacionado con la interfaz de usuario de nuestra aplicación. | N/A |
| `/presentation/components`       | Contiene  los componentes de React que se utilizan en nuestra aplicación. | `nombre-descriptivo/NombreComponente.tsx` |
| `/presentation/hooks`            | Contiene los hooks personalizados de React que se utilizan en nuestra aplicación. | `modulo/useNombreHook.tsx` |
| `/presentation/layouts`          | Contiene componentes de diseño de páginas que encapsulan la estructura general de una página. | `NombreLayout.tsx` |
| `/presentation/pages`            | Contiene los componentes de página(corresponden a una ruta o pantalla en nuestra app). |  `nombre-descriptivo/NombrePagina.tsx` |
| `/presentation/store`            | Contiene el código relacionado con la gestión del estado de nuestra app(usando Zustand). | `nombre-descriptivo-store.ts` |
| `/src/tests`                     | Aquí se definiran los archivos de prueba |  **_Dentro debe seguir la estructura de carpetas de `/src` y los archivos se definen así:_** `archivo.test.tsx` |
