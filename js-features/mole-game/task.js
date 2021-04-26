'use strict';

let count = document.getElementById('dead');
let defeat = document.getElementById('lost');


for (let i = 1; i <= 9; i++) {
    let hole = document.getElementById(`hole${i}`); 

    hole.onclick = function () {    
        if (hole.className.includes( 'hole_has-mole' )) {
            count.textContent ++;
            if (count.textContent == 10) {
                alert('ПОБЕДА!');
                count.textContent = 0; 
                defeat.textContent = 0; 
            }
        }

        if (!hole.className.includes( 'hole_has-mole' )) {
            defeat.textContent ++;
            if (defeat.textContent == 5) {
                alert('КРОТЫ ПОБЕДИЛИ...');
                count.textContent = 0; 
                defeat.textContent = 0;     
            }
        }    
    };     
}






