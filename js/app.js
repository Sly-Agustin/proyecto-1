/*Clases*/
class Operacion{
    constructor(){
      this.signo="";
      this.points=0;
    }
    randomInt(){}
    calculate(nums) {}
    getPoints(){return this.points}
    getSigno(){return this.signo}
}

class Suma extends Operacion{
    constructor(){
        super();
        this.signo="+";
        this.points=1;
    }
    randomInt(){
        var nums=[];
        for(var i=0; i<2; i++){
            nums[i]=randomNumber(1, 10);
        }
        return nums;
    }
    calculate(nums) {
        var result=0;
        for(var i=0; i<nums.length; i++){
            result=result+nums[i];
        }
        return result;
    }
}
class Resta extends Operacion{
    constructor(){
        super();
        this.signo="-";
        this.points=1;
    }
    randomInt(){
        var nums=[];
        for(var i=0; i<2; i++){
            nums[i]=randomNumber(1, 10);
        }
        return nums;
    }
    calculate(nums) {
        var result=nums[0];
        for(var i=1; i<nums.length; i++){
            result=result-nums[i];
        }
        return result;
    }
}
class Multiplicacion extends Operacion{
    constructor(){
        super();
        this.signo="*";
        this.points=2;
    }
    randomInt(){
        var nums=[];
        for(var i=0; i<2; i++){
            nums[i]=randomNumber(1, 10);
        }
        return nums;
    }
    calculate(nums) {
        var result=nums[0];
        for(var i=1; i<nums.length; i++){
            result=result*nums[i];
        }
        return result;
    }
}
class Division extends Operacion{
    constructor(){
        super();
        this.signo="/";
        this.points=3;
    }
    randomInt(){
        var nums=[];
        for(var i=0; i<2; i++){
            nums[i]=randomNumber(1, 10);
        }
        return nums;
    }
    calculate(nums) {
        var result=nums[0];
        for(var i=1; i<nums.length; i++){
            result=Math.floor(result/nums[i]);
        }
        return result;
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
        this.numbers=null;
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
        this.numbers=this.op.randomInt();
        var expression = document.getElementById("expression");
        expression.innerHTML=stringExpression.concat(this.number1, this.op.getSigno(), this.number2);
        expression.innerHTML=stringExpression.concat(this.numbers[0], this.op.getSigno(), this.numbers[1]);
    }

    checkResult(){
        var result=this.op.calculate(this.numbers);
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




/*Funciones de tiempo*/
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
    var sendResultButton=document.getElementById("sendResult");
    sendResultButton.disabled=false;
}
function gameOver(){
    var playButton=document.getElementById("playButton");
    playButton.disabled=false;
    var sendResultButton=document.getElementById("sendResult");
    sendResultButton.disabled=true;
}

function updateTimeLeft(minutes, seconds){
    var timeLeft=document.getElementById("timeLeft");
    var str="Tiempo restante: "+seconds;
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

/*Inicialización*/
juego=new Juego();
