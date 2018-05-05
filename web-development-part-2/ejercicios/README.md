>Las soluciones, además de estar en los enlaces indicados, las podéis encontrar en la carpeta **soluciones**. ¡No mirar antes de tiempo! :P

##Ejercicio 1
Añadir otro campo a la película (Descripción) y que al pulsarlo se muestre u oculte la siguiente descripción: 
>"Cuando Andy se va de campamento dejando solos a los juguetes, Al McWhiggin, un compulsivo coleccionista de juguetes valiosos, secuestra a Woody. Buzz Lightyear y los demás juguetes tendrán que actuar con rapidez si quieren rescatarlo. Durante la operación de rescate no sólo tendrán que afrontar múltiples peligros, sino que también vivirán divertidas situaciones"

######Solución Ejercicio 1
Ej1. jQueryPart2_Empty - selectores - showHide

https://drive.google.com/open?id=0BwV89gY9gW8aLWxxcFpLU0lHdGc




##Ejercicio 2
Conseguir efecto de selección al pasar por encima de la película. Se le aplicará el color de fondo del footer cuando se le pase el ratón por encima y se le aplicará el de por defecto al apartar el ratón. En todo momento se deben ver las letras de la info de la peli. 

######Solución Ejercicio 2
Ej2. jQueryPart2_Empty - NavegacionDom - OnCss

https://drive.google.com/open?id=0BwV89gY9gW8aTDJXVHgyZ0xMQlE



##Ejercicio 3
Añadir un combo a la página web que al seleccionar el nombre de una peli, se consiga efecto de selección sobre la película en concreto.
Pistas: 
- Navegar por los elementos del dom siguiendo el ejemplo del plunker 2                          
- Mediante la concatenación se puede obtener un selector dinámicamente $('#'+idFilm)

######Solución Ejercicio 3
Ej3. jQueryPart2_Empty - combo 

https://drive.google.com/open?id=0BwV89gY9gW8aVEhfY3hBY1h2UDQ
	
    

##Ejericio 4
Cargar las pelis a partir de una lista en formato JSON  

######Solución Ejericio 4
Ejercicio Ej4. jQueryPart2_Empty - append 

https://drive.google.com/open?id=0BwV89gY9gW8aS0oxYkR6R3JaeWs
	


##Ejericio 5
Cargar películas a través de la api OMDB.
Pistas:
- La URL de la api es la siguiente, donde búsqueda es lo que introduce el usuario
```
'http://www.omdbapi.com/?type=movie&s=' + busqueda;
```
- Por tanto, en este caso, necesitaremos añadir un campo donde el usuario pueda introducir texto, y un botón de buscar. Por ejemplo: 
```
<input id="busqueda" type="text"/>
<button id="busca">Busca</button>
```
- Necesitaremos leer el evento al clickar sobre el botón con jQuery.
- Cuando se haga click, tendremos que invocar a la API, ¿recuerdas el `$.get()`?
- Una vez la llamada a `$.get()` nos devuelva resultados, debemos mostrarlos en la web. Esto podemos hacerlo con la solución del ejercicio anterior: `$('container').append(<html_code>)`

###### Solución Ejercicio 5
Ejercicio Ej5. jQueryPart2_Empty - api 

https://drive.google.com/open?id=0BwV89gY9gW8aQldUMzRpRHdOdmM


##Ejercicio 6 - Sólo para valientes!
¿Te han resultado demasiado sencillos estos ejercicios? Te proponemos algo más complejo. 
Continuar con el ejercicio 5 añadiendo las siguientes features:
- Al hacer click sobre el título de una película, navegar a una nueva página. En la URL, puedes meter el identificador de la película
- En la nueva página, mostrar más información de la película. Sinopsis, actores, etc.

###Solución Ejercicio 6
La encontrarás en la carpeta final-web, a la altura de la carpeta 'exercices'.
