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
        while ((this.calculate(nums)==0) || (nums[0]%nums[1]!=0)){
            for(var i=0; i<2; i++){
                nums[i]=randomNumber(1, 10);
            }
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
        while ((this.calculate(nums)==0) || (nums[0]%nums[1]!=0)){
            for(var i=0; i<2; i++){
                nums[i]=randomNumber(1, 10);
            }
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
        while ((this.calculate(nums)==0) || (nums[0]%nums[1]!=0)){
            for(var i=0; i<2; i++){
                nums[i]=randomNumber(1, 10);
            }
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
            nums[i]=randomNumber(2, 200);
        }
        while ((this.calculate(nums)==0) || (nums[0]%nums[1]!=0)){
            for(var i=0; i<2; i++){
                nums[i]=randomNumber(2, 200);
            }
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
        this.statePlaying=false;
    }

    randomSign(){    /*Hardcodeado para probar, refactorear una vez funcione*/
        var signo=randomNumber(0,4);
        switch(signo) {
            case 0:
                return this.sum;
                break;
            case 1:
                return this.res;
                break;
            case 2:
                return this.mul;
                break;
            case 3:
                return this.div;
                break;
            default:
                return "errorSigno";
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
        expression.innerHTML=stringExpression.concat(this.numbers[0], this.op.getSigno(), this.numbers[1]);
    }

    updateAnswerCorrect() {
        var stringExpression="Correcto!";
        var expression = document.getElementById("answer");
        expression.classList.remove("wrongAnswer");
        expression.classList.add("correctAnswer");
        expression.innerHTML=stringExpression;
    }

    updateAnswerIncorrect() {
        var stringExpression="Incorrecto!";
        var expression = document.getElementById("answer");
        expression.classList.remove("correctAnswer");
        expression.classList.add("wrongAnswer");
        expression.innerHTML=stringExpression;
    }

    checkResult(){
        var result=this.op.calculate(this.numbers);
        var userResult=document.getElementById("result").value;
        if(userResult==result){
            this.updateScore();
            this.updateAnswerCorrect();
        }
        else {
            this.updateAnswerIncorrect();
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

    resetCorrectLabel() {
      var stringExpression="";
      var expression = document.getElementById("answer");
      expression.innerHTML=stringExpression;
    }

    getStatePlaying() {
        return this.statePlaying;
    }

    setStatePlaying(state) {
        this.statePlaying=state;
    }

    getScore(){
        return this.score;
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


/*Funciones que actualizan/modifican HTML*/
function playGame(){
    createTimer();
    juego.resetScore();
    juego.resetCorrectLabel();
    juego.setStatePlaying(true);
    var playButton=document.getElementById("playButton");
    playButton.disabled=true;
    juego.updateExpression();
    var sendResultButton=document.getElementById("sendResult");
    sendResultButton.disabled=false;
}
function gameOver(){
    juego.setStatePlaying(false);
    var playButton=document.getElementById("playButton");
    playButton.disabled=false;
    var sendResultButton=document.getElementById("sendResult");
    sendResultButton.disabled=true;
    document.getElementById("timeLeft").classList.remove("timeLeftLow");
    document.getElementById("progressBarTimeLeft").classList.remove("bg-danger");
    showModalGameOver();
}

function updateTimeLeft(minutes, seconds){
    var timeLeft=document.getElementById("timeLeft");
    var str="Tiempo restante: "+seconds;
    if(seconds<=5) {
        timeLeft.classList.add("timeLeftLow");
    }
    timeLeft.innerHTML=str;
}
function updateBar(minutes, seconds){
    var timeLeft=document.getElementById("progressBarTimeLeft");
    $(document).ready(function() {
            $("#progressBarTimeLeft").css("width", seconds/30*100+"%");
            $("#progressBarTimeLeft").attr("aria-valuenow", seconds);
        });
    if(seconds<=5) {
        timeLeft.classList.add("bg-danger");
    }
}
function createTimer(){
    var timer= new CountDownTimer(30);
    timer.onTick(updateTimeLeft).onTick(updateBar).onTick(expiredTimer).start();
}
function expiredTimer() {
  if(this.expired()) {
      gameOver();
  }
}

/**/
function showModalGameOver(){
    var stringGameOverModal="Felicidades! Su puntuación final es: "+juego.getScore();
    var p=document.getElementById("gameOverModalP");
    p.innerHTML=stringGameOverModal;
    $('#gameOverModal').modal('show');
}

/*Funciones de cálculo*/
function randomNumber(min, max) {    /*Devuelve números random entre min y max-1*/
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*Función para chequear tecla pulsada*/
function checkKeyPressed(event){
    var keyPressed=event.key;
    if (keyPressed=="Enter"){
        if (juego.getStatePlaying()) {
            juego.checkResult();
        }
    }
}

/*Inicialización*/
juego=new Juego();
