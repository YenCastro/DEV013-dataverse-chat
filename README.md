# Dataverse Chat

## Índice
* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Hitos](#6-hitos)
* [7. Criterios de aceptación mínimos del proyecto](#7-criterios-de-aceptación-mínimos-del-proyecto)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)
* [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)
* [10. Consideraciones para pedir tu Project Feedback](#10-consideraciones-para-pedir-tu-project-feedback)

***

## 1. Resumen del proyecto

Bienvenido a Cuantos Cuentos, un espacio donde la magia de la lectura se hace presente y se transforma en una experiencia inolvidable para madres y sus pequeños aventureros. En Cuantos Cuentos, nos enfocamos en simplificar y emocionar la búsqueda y exploración de cuentos, permitiendo que tanto niños como adultos encuentren rápidamente las historias perfectas para disfrutar juntos.

Nuestra página web ofrece una amplia variedad de cuentos, desde los clásicos que han resistido el paso del tiempo hasta los más populares en la actualidad. ¿Quieres sumergirte en cuentos que han cautivado a generaciones enteras, o prefieres descubrir las emocionantes historias que están ganando popularidad en la actualidad? Con Cuantos Cuentos, tienes la libertad de explorar y descubrir cuentos que se adapten a tus gustos y necesidades.

Gracias a nuestra herramienta de filtrado y visualización de datos, podrás navegar fácilmente a través de nuestra colección y encontrar los cuentos que más te interesan. ¿Prefieres buscar por género, edad recomendada o tema? ¡No hay problema! Con solo unos clics, podrás personalizar tu experiencia de lectura y descubrir nuevas aventuras que te encantarán.

Así que adelante, comienza tu viaje de lectura con Cuantos Cuentos y crea recuerdos mágicos con tus pequeños. Sumérgete en un mundo de imaginación y aventura, donde cada página es una nueva oportunidad para explorar, aprender y soñar juntos. ¡Bienvenido a Cuantos Cuentos, donde los cuentos cobran vida y las aventuras nunca terminan!



### Los objetivos generales de este proyecto son los siguientes

* Desarrollar una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicar los conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes
vistas de la aplicación
* Integrar una API externa
* Entender la asincronía en JavaScript
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

## 3. Consideraciones generales

* Este proyecto se ejecutó en dupla.

* El rango de tiempo para finalizar el proyecto fue de 5 sprints.

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS. Para este proyecto **no está permitido** utilizar
  _frameworks_ o librerías de CSS y JS.

* Reutilizar cierta parte del código del proyecto Dataverse, sobre todo el dataset.
  Además debes refactorizar el código para que sea más modular y reutilizable
  implementando nuevas funciones para lograr las funcionalidades requeridas
  en este proyecto.

* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando cualquiera de estas opciones:
  [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).

* La división y organización del trabajo debe permitir, sin excepciones, que
  **cada integrante** del equipo practique el aprendizaje de todo lo involucrado
  en **cada historia**. _No se dividan el trabajo como en una fábrica._
  - ¿Hasta acá has avanzado en tus proyectos con cierta fluidez y sin mayores
    problemas? Sé generosa con tus compañeras, permíteles aprender y practicar
    sin restricciones, aunque tome un poco más de tiempo. Aprovecha de
    _coachearlas_, de hacer _pair programming_, una de las mejores maneras de
    aprender es explicando verbalmente.
  - ¿Se te está haciendo difícil y te cuesta un poco más avanzar? No te quedes
    con las partes "fáciles" del proyecto, conversa, negocia, exige tu oportunidad
    para practicar y aprender lo que se te hace más difícil.
  Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio.

## 4. Funcionalidades

* Bienvenida: Al acceder a Cuantos Cuentos, serás recibido con una cálida bienvenida en la parte superior de la página, que te invita a explorar una amplia selección de cuentos para niños y sus madres.
Bienvenida

* Barra de Filtros y Ordenamiento: En la parte superior de la página, encontrarás filtros intuitivos que te permiten refinar tu búsqueda según el género del cuento y el rango de edad recomendado para los lectores. Además de los filtros, tienes la opción de ordenar los cuentos de manera alfabética, ya sea ascendente (A-Z) o descendente (Z-A), lo que facilita aún más la navegación y la búsqueda de cuentos específicos.
Barra de filtros

* Explorar los Cuentos: En el cuerpo de la página, encontrarás una matriz de 24 tarjetas, cada una representando un cuento diferente. Al posicionar el cursor sobre una tarjeta, se mostrará información detallada del cuento, incluyendo el rango de edad recomendado, el género, una curiosidad y otras características destacadas.

* Interacción Intuitiva: Con esta presentación visual y la información detallada al posicionar el cursor sobre cada tarjeta, la página brinda una experiencia interactiva y envolvente tanto para las madres como para los pequeños. Pueden explorar los cuentos, descubrir nuevos favoritos y tomar decisiones informadas sobre qué historias leer juntos.
Muestra de datos

* Chat con Open IA: Con Cuantos Cuentos: Los usuarios pueden interactuar con un chatbot alimentado por la API de Cuantos Cuentos para obtener respuestas inteligentes sobre libros infantiles. Pueden hacerlo de manera individual, explorando un libro específico.
  
¡Y eso es todo! Con Cuantos Cuentos, la experiencia de encontrar y disfrutar de cuentos para niños se vuelve fácil, divertida y memorable para todas las familias.

## 5. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

El _boilerplate_ que viene con el proyecto es una estructura inicial. Ustedes
deben ir agregando más archivos conforme vayan avanzando en su proyecto.
La siguiente es una estructura de archivos que recomendamos:

```text
.
├── src
|  ├── components
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── dataFunctions.js
|  ├── views
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── dataFunctions.spec.js
|  └── example.spec.js
├── README.md
└── package.json

```

### `src/components`

Esta carpeta contendrá archivos JavaScript
que representan [componentes](https://lenguajejs.com/vuejs/componentes/que-es-un-componente/)
reutilizables de tu aplicación. Estos componentes
pueden ser elementos de la interfaz de usuario que se utilizan en varias partes
de tu aplicación. Organizar tus componentes de esta manera ayuda a mantener un
código más modular y reutilizable.

### `src/data`

En esta carpeta están los datos con los que vas a trabajar (los datos de ejemplo
o los datos que generarías con ayuda de la inteligencia artificial).

### `src/lib`

En esta carpeta, crearás módulos que contengan funcionalidades no relacionadas
al DOM. Aquí podrás incluir el archivo
`dataFunctions.js` que contiene las funciones que te permiten filtrar,
ordenar y hacer cálculos agregados. También podrás crear  archivos con
las funciones que
interactúen con la API de inteligencia artificial o utilidades destinadas
a almacenar datos en el local storage.

### `src/views`

Esta carpeta generalmente contiene archivos de los componentes que
representan las diferentes páginas o vistas de tu aplicación.
Cada vista (view) puede tener su propio archivo
JavaScript, que exporta una función que es responsable de generar
los elementos del DOM.

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. En este archivo
HTML encontrarás un elemento DOM `<div id='root'></div>` donde vas a
renderizar las diferentes vistas de tu aplicación.

### `src/index.js`

El punto de partida para tu SPA sera el archivo `src/index.js`. Acá encontrarás
algunas instrucciones y comentarios para guiarte en el inicio del desarrollo
de tu aplicación.

### `src/router.js`

En este archivo vas a manejar el enrutamiento de tu aplicación. Es un archivo
que debes crearlo por tu cuenta.

### `src/style.css`

Es un archivo que debes crearlo por tu cuenta para agregar los estilos que
necesites para tu aplicación.

### `src/test`

Esta carpeta contiene los tests de tus funciones y componentes. Por ejemplo
los tests de dataFunctions deben estar aquí.

## 6. Historia de usuario y metodología

* Simulaciones de Usuario: Se llevaron a cabo simulaciones para comprender mejor cómo las usuarias interactuarían con el producto en diferentes escenarios.
* Identificación de Intereses Comunes: A partir de las simulaciones, identificamos los intereses más recurrentes entre las usuarias, lo que nos permitió comprender sus necesidades y expectativas de manera más precisa.
* División de Intereses: Categorizamos los intereses identificados en grupos coherentes y significativos, lo que nos proporcionó una base sólida para el diseño de nuestro prototipo.
* Organización de Pasos: Utilizando herramientas como Trello, organizamos los pasos necesarios para avanzar en el diseño y desarrollo del prototipo. Esta plataforma nos permitió visualizar y gestionar de manera eficiente las tareas pendientes, los progresos realizados y las prioridades del proyecto.


## 7. Prototipos

#### Prototipo de baja fidelidad

* Prototipo baja fidelidad mobile


* Prototipo baja fidelidad web

  
* Prototipo alta fidelidad mobile

  
* Prototipo alta fidelidad mobile

  

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuaria (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

Recuerda pedir feedback de tu prototipo a tus compañeras y/o coaches.
