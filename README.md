# Proyecto 1:  HTML - CSS - Javascript - DOM

## **Video de entrega**
https://www.youtube.com/watch?v=Oc5TmxO9MPQ

## **Introducción**

El proyecto consiste de un videojuego online el cuál consiste en resolver la mayor cantidad de operaciones matemáticas en el menor tiempo posible. El desarrollo del mismo conlleva la utilización de HTML, CSS y JavaScript.

## **Librerías utilizadas**
Se utilizó bootstrap, jquery, popper y Librerías de facebook y twitter para los botones.

## **Consideraciones**
- Funcionando en Google Chrome 81.0.4044.138 , Mozilla Firefox 76.0.1 , Microsoft Edge 44.18362.449.0 y Chronium 80.0.3987.162
- Es un documento HTML5 válido.
- Se utilizan imágenes png.
- Se usa localStorage para guardar datos y que la página se inicie en modo nocturno en caso de haberse cerrado en ese modo pero Edge no soporta localStorage, por lo tanto si bien la página es funcional no puede reiniciarse en modo nocturno.
- Los modos de juego sin limites y multipleChoice no están implementados, iban a agregarse pero me quede corto de tiempo arreglando la página para mozilla y Edge.
- Inicialmente la página usaba contents para las imágenes, sobre el final me di cuenta que esto solo se podía hacer en safari y chrome (dejando las imagenes en blanco en Edge y Mozilla), asi que para la reentrega se cambió la implementación, ya no se togglean clases CSS modificando los backgrounds si no que se cambia el source de la imagen con JavaScript, esto permite que se mantenga el documento HTML5 válido y no tira errores de consola de "source not found" como en la implementación anterior.
- El header está para simular una página real, si bien los botones redirigen a una página de facebook y una de github los links de "Juegos", "Quienes somos" y el buscador no funcionan, solo tiran un alert diciendo que están en construcción.
