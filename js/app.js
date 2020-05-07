function toggleDarkMode() {
    var element = document.body;    // Obtengo el body del documento para modificar las propiedades.
    element.classList.toggle("nocturno");   // Toggle agrega o remueve la clase "nocturno" (en CSS), en este caso a cada elemento del body del documento.
    var joystickToggle = document.getElementById("joystick");
    joystickToggle.classList.toggle("joystickN");
    /*var headerDiv = element.getElementsByClassName("headerDiv");
    headerDiv.classList.toggle("headerDiv");*/
    /*var headerDiv = document.getElementsByClassName("headerDiv")[0];*/
    /*headerDiv.style.backgroundColor="#FF0000";*/
    /*var joystickImage = element.getElementsByClassName("joystickN")[0];
    joystickImage.src="images/joystickInverted.png"*/
}
