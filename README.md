# Data Lovers

## Rick and Morty
## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Sketch](#3-sketch)
* [4. Diseño de la Interfaz de Usuario](#4-diseño-de-la-interfaz-de-usuario)
* [5. Problemas detectados en los test de usabilidad](#5-problemas-detectados-en-los-test-de-usabilidad)

## 1. Definición del producto

_Rick and Morty_ es una página exclusiva para los fans de la serie. 

¡Aquí podrás ver, filtrar y ordenar todos los datos sobre los personajes de la serie!

Podrás conocer e investigar todo acerca de tu personaje favorito con tan solo un click, desde su origen hasta el número de episodios en los que aparece de la serie, además, tenemos un juego diseñado para retarte a conocer que tan fan eres de Rick y Morty. En este juego de 10 preguntas clasificarás a una de las tres categorias: 1. Not a fan, 2. You are almost a fan, 3. You are a big fan!, tu resultado y puntaje dependerán de cuantas preguntas hayas acertado.

¡Buena suerte! 

## 2. Historias de usuario

A partir de los datos recolectados en archivos referentes (rickandmorty.js y rickandmorty.json) que contienen información relevante sobre 493 personajes de la serie. Para lo anterior, se plantean inicialmente las historias de usuario presentadas a continuación:

### Primera historia: Visualizar

Yo como _usuario_ quiero poder visualizar los personajes de la serie Rick and Morty junto con información relevante.
* El usuario puede visualizar en formato cards tanto el nombre como la imagen de cada uno de los personajes.
* Al dar click en el botón _Read more_ el usuario puede acceder a más información del personaje.
* Puede visualizar nombre, género, especie, lugar de origen, imagen y cantidad de episodios donde aparece cada uno de los personajes.
* El usuario puede visualizar todos los personajes de nuevo a través del botón View All ubicado en el menú de navegación.

### Segunda historia: Filtrar

Yo como _usuario_ quiero poder filtrar los personajes por estado de vida para conocer el total de personsajes vivos, muertos y desconocidos.
* El usuario puede encontrar en el menú de navegación la opción filtrar.
* Puede selecciónar la categoría por la cual va a filtrar los personajes.
* El usuario puede visualizar los personajes filtrados por la categoría seleccionada.

### Tercera historia: Ordenar

Yo como _usuario_ quiero ordenar los personajes alfabéticamente tanto de manera ascendente como descendente para poder encontrarlos facilmente.
* El usuario puede encontrar en el menú de navegación la opción ordenar.
* Al dar click en el botón el usuario puede seleccionar la manera en la que puede ordenar la información.
* El usuario puede visualizar los personajes organizados alfabéticamente.

### Cuarta historia: Calcular
Yo como _usuario_ quiero saber cual es el porcentaje de aparición del personaje en toda la serie.
* El usuario puede encontrar en el menú de navegación la opción Juego: ¿Qué tan fanático eres?.
* Al dar click en el botón aparecerán 10 preguntas de opción múltiple que permitirán evaluar que tanto el usuario conoce de la serie.
* Al colocar el cursor sobre cada una de las imágenes de cada pregunta, el usuario podrá visualizar el porcentaje de apariciones del personaje en toda la serie.
* Al finalizar el juego, el usuario podrá visualizar sus resultados y categoría.

## 3. Sketch

Nuestro prototipo de baja fidelidad lo diseñamos principalmente para dispositivos móviles, y consecuentemente, se diseñaria para computadoras.

  ![Prototipo baja fidelidad](./Prototipo%20baja%20fidelidad%20Rick%20and%20Morty.jpg)

### 4. Diseño de la Interfaz de Usuario 

Realizamos dos opciones muy similares para nuestro prototipo de alta fidelidad para dispositivos móviles, sin embargo, a medida que avanzamos en el proyecto, realizamos cambios y ajustes al diseño inicial.

  [Prototipo alta fidelidad](https://www.figma.com/file/i1JpFTeJd32TGrU6zcfzWm/Prototipo-dispositivo-movil-Data-Lovers)

### 5. Problemas detectados en los test de usabilidad 

* Naming: 
  * Dado que los nombres y las categorías están en inglés, el traductor de google altera los nombres. Lo anterior, puede llevar a confusiones al usuario si no usa el idioma inglés de manera predeterminada. 
* Organización: 
  * En el menú de navegación se encuentran cada una de las funciones a las cuales el usuario puede acceder. Uno de los problemas vistos es que el menú no es visible al realizar scroll en la pantalla cuando aparecen todos los personajes.
* Facilidad de ubicar elementos para First time users: 
  * Las funciones están organizadas de izquierda a derecha por complejidad, de manera que el usuario pueda primero acceder a las más sencillas para familiarizarse con la interfaz.
  * Debido a la cantidad de personajes que aparecen en la primera pantalla, el usuario le resta importancia a la función visualizar y opta por ir a otras donde la cantidad de información mostrada es menor.
