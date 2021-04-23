let count = document.getElementById('dead');
let defeat = document.getElementById('lost');


for (let i = 1; i <= 9; i++) {
    let hole = document.getElementById(`hole${i}`); 

    hole.onclick = function () {    
        if (hole.className.includes( 'hole_has-mole' )) {
            count.textContent ++;
            console.log(defeat.textContent) 
        }

        if (!hole.className.includes( 'hole_has-mole' )) {
        defeat.textContent ++;
        console.log(defeat.textContent)
        }    
    };

    hole.onclick();
    /*
    if (defeat.textContent = 5) {
        alert('КРОТЫ ПОБЕДИЛИ...')    
    }
    
    if (count.textContent = 10) {
        alert('ПОБЕДА!')    
    }
    */
}


