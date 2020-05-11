function toggleDarkMode() {
    var element = document.body;    // Obtengo el body del documento para modificar las propiedades.
    element.classList.toggle("nocturno");   // Toggle agrega o remueve la clase "nocturno" (en CSS), en este caso a cada elemento del body del documento.

    changeHrMode();
    changeButtonsMode();
    changeImagesMode();
    changeHeaderMode();
    changeFooterMode();
}

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
    /*No es clean code, habrá alguna manera mejor de hacer esto? Averiguar*/
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

/* Esta función con jquery cambia los colores de todos los divs que no sean azules a azules.
$( document.body ).click(function() {
  $( "div" ).each(function( i ) {
    if ( this.style.color !== "blue" ) {
      this.style.color = "blue";
    } else {
      this.style.color = "";
    }
  });
});*/

/*var headerDiv = element.getElementsByClassName("headerDiv");
headerDiv.classList.toggle("headerDiv");*/
/*var headerDiv = document.getElementsByClassName("headerDiv")[0];*/
/*headerDiv.style.backgroundColor="#FF0000";*/
/*var joystickImage = element.getElementsByClassName("joystickN")[0];
joystickImage.src="images/joystickInverted.png"*/
