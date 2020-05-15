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
- Inicialmente la página usaba contents para las imágenes, sobre el final me di cuenta que esto solo se podía hacer en safari y chrome (dejando las imagenes en blanco en Edge y Mozilla), asi que si se ven medio hardcodeados los CSS o irregulares respecto a eso es porque hubo que hacer un reemplazo completo a último momento.
- El header está para simular una página real, no hay links hacia otros juegos y el buscador no funciona.
- Las imágenes de las instrucciones se agregan mediante CSS, no modificando el html con JS si no cambiando el background. Esto provoca que al momento de verificar que sea un html5 válido nos diga que falta el source. Sin embargo si agrego el source queda funcionando mal. Una solución "temporal" sin cambiar gran parte del código es agregar un source falso, de todas formas la imagen se cargaba por CSS y no por source, esto genera un documento html5 válido pero provoca errores de carga en la consola (que en realidad no afectan en nada porque las imágenes siguen ahí). Esta falla se debe a una mala decisión de diseño, habría que hacer que JS cambie el html pero no con toglear clases CSS como lo hace actualmente sino cambiando el src de la imagen (esto se puede hacer con jquery, pero como me quedé sin tiempo queda para la reentrega).
