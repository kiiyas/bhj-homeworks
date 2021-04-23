const image = document.getElementById('cookie');
const times = document.getElementById('clicker__counter');
let start = new Date; // or Date.now()
let finish;
let speed = document.getElementById('clicker__speed');


image.onclick = function () {    
    times.textContent ++;
    times.textContent % 2 == 0 ? image.width = 200 : image.width = 220;
    finish = new Date;
    speed.textContent = (1 / ((finish.getTime() - start.getTime()) / 1000)).toFixed(2);
    start = finish;
}


 