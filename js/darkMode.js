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

    toggleMode(){
        if (this.getEnabled()) {
            this.setEnabled(false);
        }
        else {
            this.setEnabled(true);
        }
    }

    changeAddImg() {
        if (this.getEnabled()) {
            document.getElementById("addImg").src="css/imagesCSS/sumaInverted.png";
        }
        else {
            document.getElementById("addImg").src="css/imagesCSS/suma.png"
        }
    }
    changeSubImg() {
        if (this.getEnabled()) {
            document.getElementById("subImg").src="css/imagesCSS/restaInverted.png";
        }
        else {
            document.getElementById("subImg").src="css/imagesCSS/resta.png"
        }
    }
    changeMulImg() {
        if (this.getEnabled()) {
            document.getElementById("mulImg").src="css/imagesCSS/multiplicacionInverted.png";
        }
        else {
            document.getElementById("mulImg").src="css/imagesCSS/multiplicacion.png"
        }
    }
    changeDivImg() {
        if (this.getEnabled()) {
            document.getElementById("divImg").src="css/imagesCSS/divisionInverted.png";
        }
        else {
            document.getElementById("divImg").src="css/imagesCSS/division.png"
        }
    }
    changeImages(){
        this.changeAddImg();
        this.changeSubImg();
        this.changeMulImg();
        this.changeDivImg();
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
function changeImagesMode(){
    var joystickToggle = document.getElementById("joystick");
    joystickToggle.classList.toggle("joystickDM");

    modoNocturno.changeAddImg();
    modoNocturno.changeSubImg();
    modoNocturno.changeMulImg();
    modoNocturno.changeDivImg();
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
function changeContainerMode() {
    var containerToggle = document.getElementById("mainContainer");
    containerToggle.classList.toggle("containerBgDM");
}

function readModeLocalStorage(){
    if ($( "#body" ).hasClass("nocturno")){
        localStorage.setItem('darkBtnClicked', "true");
    }
    else {
        localStorage.setItem('darkBtnClicked', "false");
    }
}
function toggleDarkMode() {
    var element = document.body;    // Obtengo el body del documento para modificar las propiedades.
    element.classList.toggle("nocturno");   // Toggle agrega o remueve la clase "nocturno" (en CSS), en este caso a cada elemento del body del documento.

    modoNocturno.toggleMode();

    changeHrMode();
    changeButtonsMode();
    changeImagesMode();
    changeHeaderMode();
    changeFooterMode();
    changeInstructionMode();
    changePlayContainerMode();
    changeContainerMode();

    readModeLocalStorage();
}

modoNocturno = new Oscuro(false);
if((localStorage.getItem('darkBtnClicked'))=="true"){
    toggleDarkMode();
}
