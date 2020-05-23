/*Clase que guarda si estamos en modo nocturno o no, se utiliza para toglear las imágenes*/
class Oscuro {
    constructor(enabled) {
        this.enabled=enabled;
    }

    setEnabled(enabled){
        this.enabled=enabled;
    }
    getEnabled(){
        return this.enabled;
    }
}

/*Funciones que modifican CSS*/
function changeHrMode(){
    $( document.body ).each(function() {
        $( "hr" ).each(function( i, obj ) {       /*En lugar de obj puede usarse this. para decir que hace referencia a si mismo, es decir this.style.color = black x ej*/
            if ( obj.style.color == "white") {
                obj.style.color = "black";
                obj.style.borderTop = "1px solid rgba(0,0,0,.1)";
            } else {
                obj.style.color = "white";
                obj.style.borderTop = "1px solid #494949";
            }
        });
    });
}
function changeButtonsMode(){
    var buttonAux = document.getElementById("buttonDM");
    buttonAux.classList.toggle("darkModeButton");
    buttonAux.classList.toggle("lightModeButton");
}
function changeAddImg() {
    if (modoNocturno.getEnabled()) {
        document.getElementById("addImg").src="css/imagesCSS/sumaInverted.png";
    }
    else {
        document.getElementById("addImg").src="css/imagesCSS/suma.png"
    }
}
function changeSubImg() {
    if (modoNocturno.getEnabled()) {
        document.getElementById("subImg").src="css/imagesCSS/restaInverted.png";
    }
    else {
        document.getElementById("subImg").src="css/imagesCSS/resta.png"
    }
}
function changeMulImg() {
    if (modoNocturno.getEnabled()) {
        document.getElementById("mulImg").src="css/imagesCSS/multiplicacionInverted.png";
    }
    else {
        document.getElementById("mulImg").src="css/imagesCSS/multiplicacion.png"
    }
}
function changeDivImg() {
    if (modoNocturno.getEnabled()) {
        document.getElementById("divImg").src="css/imagesCSS/divisionInverted.png";
    }
    else {
        document.getElementById("divImg").src="css/imagesCSS/division.png"
    }
}
function changeImagesMode(){
    var joystickToggle = document.getElementById("joystick");
    joystickToggle.classList.toggle("joystickDM");

    changeAddImg();
    changeSubImg();
    changeMulImg();
    changeDivImg();
}
function changeHeaderMode(){
    var headerToggle = document.getElementById("header");
    headerToggle.classList.toggle("bgHeaderDM");
}
function changeFooterMode(){
    var footerToggle = document.getElementsByClassName("footer");
    for(var i=0; i<footerToggle.length; i++) {
        footerToggle[i].classList.toggle("footerDM");
    }
}
function changeInstructionMode(){
    var instructionToggle = document.getElementById("instructionContainer");
    instructionToggle.classList.toggle("borderGrey");
    instructionToggle.classList.toggle("borderLightGrey");
}
function changePlayContainerMode(){
    var playToggle = document.getElementById("playContainer");
    playToggle.classList.toggle("borderGrey");
    playToggle.classList.toggle("borderLightGrey");
    playToggle.classList.toggle("containerPlayDM");
    playToggle.classList.toggle("containerPlay");
}

function toggleDarkMode() {
    var element = document.body;    // Obtengo el body del documento para modificar las propiedades.
    element.classList.toggle("nocturno");   // Toggle agrega o remueve la clase "nocturno" (en CSS), en este caso a cada elemento del body del documento.

    if (modoNocturno.getEnabled()) {
        modoNocturno.setEnabled(false);
    }
    else {
        modoNocturno.setEnabled(true);
    }

    changeHrMode();
    changeButtonsMode();
    changeImagesMode();
    changeHeaderMode();
    changeFooterMode();
    changeInstructionMode();
    changePlayContainerMode();

    if ($( "#body" ).hasClass("nocturno")){
        localStorage.setItem('darkBtnClicked', "true");
    }
    else {
        localStorage.setItem('darkBtnClicked', "false");
    }
}

modoNocturno = new Oscuro(false);
if((localStorage.getItem('darkBtnClicked'))=="true"){
    toggleDarkMode();
}

/*Código útil a futuro
-- Se usa para toglear clases y cambiar imágenes
var subToggle = document.getElementById("subImg");
subToggle.classList.toggle("subImgDM");*/
