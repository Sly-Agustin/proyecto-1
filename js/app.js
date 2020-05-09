function toggleDarkMode() {
    var element = document.body;    // Obtengo el body del documento para modificar las propiedades.
    element.classList.toggle("nocturno");   // Toggle agrega o remueve la clase "nocturno" (en CSS), en este caso a cada elemento del body del documento.
    var joystickToggle = document.getElementById("joystick");
    joystickToggle.classList.toggle("joystickN");

    /*No es clean code, habrá alguna manera mejor de hacer esto? Averiguar*/
    var buttonAux = document.getElementById("buttonDM");
    buttonAux.classList.toggle("darkModeButton");
    buttonAux.classList.toggle("lightModeButton");

    var sumToggle = document.getElementById("addImg");
    sumToggle.classList.toggle("addImgDM");
    var subToggle = document.getElementById("subImg");
    subToggle.classList.toggle("subImgDM");
    /*subToggle.classList.toggle("bg-light");   Agregar bg-light u otro para usar estas dos lineas (para probar después)
    subToggle.classList.toggle("bg-dark");*/
    var mulToggle = document.getElementById("mulImg");
    mulToggle.classList.toggle("mulImgDM");
    var divToggle = document.getElementById("divImg");
    divToggle.classList.toggle("divImgDM");

    /*var headerDiv = element.getElementsByClassName("headerDiv");
    headerDiv.classList.toggle("headerDiv");*/
    /*var headerDiv = document.getElementsByClassName("headerDiv")[0];*/
    /*headerDiv.style.backgroundColor="#FF0000";*/
    /*var joystickImage = element.getElementsByClassName("joystickN")[0];
    joystickImage.src="images/joystickInverted.png"*/
}
