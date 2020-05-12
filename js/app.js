/*Clases*/
class Operacion{
    constructor(){
      this.signo="";
      this.points=0;
    }
    randomInt(){}
    calculate(num1, num2){}
    getPoints(){return this.points}
    getSigno(){return this.signo}
}

class Suma extends Operacion{
    constructor(){
        super();
        this.signo="+";
        this.points=1;
    }
    randomInt() {
        return randomNumber(1, 10);
    }
    calculate(num1, num2) {
        return num1+num2;
    }
}
class Resta extends Operacion{
    constructor(){
        super();
        this.signo="-";
        this.points=1;
    }
    randomInt() {
        return randomNumber(1, 10);
    }
    calculate(num1, num2) {
        return num1-num2;
    }
}
class Multiplicacion extends Operacion{
    constructor(){
        super();
        this.signo="*";
        this.points=2;
    }
    randomInt() {
        return randomNumber(1, 10);
    }
    calculate(num1, num2) {
        return num1*num2;
    }
}
class Division extends Operacion{
    constructor(){
        super();
        this.signo="/";
        this.points=3;
    }
    randomInt() {
        return randomNumber(1, 50);
    }
    calculate(num1, num2) {
        return Math.floor(num1/num2);
    }
}

class Juego{
    constructor(){
        this.div=new Division();
        this.div=new Division();
        this.sum=new Suma();
        this.mul=new Multiplicacion();
        this.res=new Resta();
        this.score=0;
        this.number1=0
        this.number2=0;
        this.op=null;
    }

    randomSign(){    /*Hardcodeado para probar, refactorear una vez funcione*/
        var signo=randomNumber(0,4);
        if(signo==0){
            return this.sum;
        }
        else{
            if(signo==1){
                return this.res;
            }
            else{
                if(signo==2){
                    return this.mul;
                }
                else{
                    if(signo==3){
                        return this.div;
                    }
                    else{
                        return "errorsigno";
                    }
                }
            }
        }
    }

    resetTextField(){
        var textField=document.getElementById("result");
        textField.value="";
    }

    updateScore() {
        var stringScore="Puntuación: ";
        this.score=this.score+this.op.getPoints();
        var score=document.getElementById("score");
        score.innerHTML=stringScore.concat(this.score);
    }

    updateExpression() {
        var stringExpression="Resolver: ";
        this.op=this.randomSign();
        this.number1=this.op.randomInt();
        this.number2=this.op.randomInt();
        var expression = document.getElementById("expression");
        expression.innerHTML=stringExpression.concat(this.number1, this.op.getSigno(), this.number2);
    }

    checkResult(){
        var result=this.op.calculate(this.number1, this.number2);
        var userResult=document.getElementById("result").value;
        if(userResult==result){
            this.updateScore();
        }
        this.updateExpression();
        this.resetTextField();
    }

    resetScore(){
        var stringScore="Puntuación: ";
        this.score=0;
        var score=document.getElementById("score");
        score.innerHTML=stringScore.concat(this.score);
    }
}

juego=new Juego();

function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
}

CountDownTimer.prototype.start = function() {
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    diff = that.duration - (((Date.now() - start) / 1000) | 0);

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};

/*Funciones que modifican HTML*/
function playGame(){
    createTimer();
    juego.resetScore();
    var playButton=document.getElementById("playButton");
    playButton.disabled=true;
    juego.updateExpression();
}
function gameOver(){
    var playButton=document.getElementById("playButton");
    playButton.disabled=false;
}

function updateTimeLeft(minutes, seconds){
    var timeLeft=document.getElementById("timeLeft");
    var str="Tiempo restante: "+seconds;
    console.log(str);
    timeLeft.innerHTML=str;
}
function createTimer(){
    var timer= new CountDownTimer(30);
    timer.onTick(updateTimeLeft).onTick(expiredTimer).start();
}
function expiredTimer() {
  if(this.expired()) {
      gameOver();
  }
}


/*Funciones que modifican CSS*/
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


/*Funciones de cálculo*/
function randomNumber(min, max) {    /*Devuelve números random entre min y max-1*/
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*Función para chequear tecla pulsada*/
function checkKeyPressed(event){
    var keyPressed=event.key;
    if (keyPressed=="Enter"){
        juego.checkResult();
    }
}



/* Funciones útiles para usar a futuro
Esta función con jquery cambia los colores de todos los divs que no sean azules a azules.
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
