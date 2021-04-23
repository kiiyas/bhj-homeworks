'use strict'

//вариант 1, с простым отсчетом
/*
let goCount = setInterval(countdown, 1000);

function countdown() {   
    const seconds = document.getElementById('timer');    
    
    if (+seconds.textContent == 0) { 
        alert('Вы победили в конкурсе!');
        clearInterval(goCount);  //останавливается на ноле              
    } else { seconds.textContent -= 1; }    
}
*/




//вариант 2, с временем в формате hh:mm:ss

const countString = document.getElementById('status');
countString.innerHTML = 'До окончания конкурса осталось: <span id="timer">...</span>'

const countDate = new Date("Apr 22, 2021 15:37:25").getTime();

const goCount = setInterval(countdownFunc, 1000);
    
    
function countdownFunc() {
  const now = new Date().getTime();  
  const timerLimit = countDate - now;

  // рассчет чч-мм-сс
  //let days = Math.floor(timerLimit / (1000 * 60 * 60 * 24)); // если дней
  const hours = Math.floor((timerLimit % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timerLimit % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timerLimit % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;

  if (timerLimit <= 0) {
    clearInterval(goCount);
    document.getElementById("timer").innerHTML = "А всё... Всё.";
  }
}
//пусть тут будет, я сначала этот вариант пытался, и тут есть, над чем подумать
/*
const countSet = document.getElementById('status');
countSet.innerHTML = 'До окончания конкурса осталось: <span id="timer-hh">10</span>:<span id="timer-mm">30</span>:<span id="timer-ss">00</span>'
const countHH = document.getElementById('timer-hh');
const countMM = document.getElementById('timer-mm');
const countSS = document.getElementById('timer-ss');
let hours = +(countHH.textContent);
let minutes = +(countMM.textContent);
let seconds = +(countSS.textContent);
*/