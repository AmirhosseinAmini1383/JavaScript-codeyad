const theTimer=document.querySelector(".timer");
const testArea=document.querySelector(".Textarea");
const originText=document.querySelector(".text").innerHTML;
const resetBtn=document.querySelector(".reset");

//daghighe | saniye |
var timer=[0,0,0,0];
var timerRunning=false;
var interval;

function leadingZero(time){
    if (time<=9){
        time="0"+time;
    }
    return time;
}

function runTimer(){
    let currentTime=leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
    theTimer.innerHTML=currentTime;

    timer[3]++;
    timer[0]=Math.floor((timer[3]/100)/60);
    timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
    timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}


function spellCheck(){
    let textEntered=testArea.value;
    let originTextMatch=originText.substring(0,textEntered.length);

    if(textEntered==originText){
        testArea.style.borderColor="green";
        clearInterval(interval);
    }else{
        if(textEntered==originTextMatch){
            testArea.style.borderColor="yellow";
        }else{
            testArea.style.borderColor="red";
        }
    }
}

function reset(){
    clearInterval(interval);
    timer=[0,0,0,0];
    timerRunning=false;
    interval=null;
    testArea.value="";
    theTimer.innerHTML="00:00:00";
    testArea.style.borderColor="#283747";
}

function startTimer(){
    let textEnteredLength=testArea.value.length;
    // if (textEnteredLength==0 && timerRunning==false){
    if (textEnteredLength==0 && !timerRunning){
        timerRunning=true;
        interval=setInterval(runTimer,10);
    }
}
testArea.addEventListener("keypress",startTimer);
testArea.addEventListener("keyup",spellCheck)
resetBtn.addEventListener("click",reset);

