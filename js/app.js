function toggleDarkMode() {
    var element = document.body;    // Obtengo el body del documento para modificar las propiedades.
    element.classList.toggle("nocturno");   // Toggle agrega o remueve la clase "nocturno" (en CSS), en este caso a cada elemento del body del documento.
}

function toggleDarkModeExperimental() {
    for (let cssClass of document.body) {
        if (cssClass.contains('nocturno')){
            cssClass.remove('nocturno');
        }
        else {
            cssClass.add('nocturno');
        }
    }
}
