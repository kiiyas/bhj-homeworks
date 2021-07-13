'use strict'
/*
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        xhr.upload.onprogress = function(e) { 
            progress.value = (e.loaded/e.total)
         };        
        xhr.onload = xhr.onerror = function() {
            if (this.status == 200) {
                console.log("success");
            } else {
                console.log("error " + this.status);
            }
            };
        xhr.send(formData); 
    });

    //тут тоже ответ приходит сильно позже полной заполненности прогрессбара

})
*/

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');    

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
        xhr.upload.onprogress = function(e) { 
            progress.value = (e.loaded / e.total)
        };
        xhr.open('POST', form.action);
        xhr.send(formData);      
        
        // xhr.addEventListener('readystatechange', () => {
        //     if (xhr.readyState !== xhr.DONE) {
        //         progress.value += 0.05;
        //     } else console.log('done'); //смог понять об окончании загрузки только так
        // });

        // xhr.addEventListener('load', () => {  //не сработал
        //     console.log('done');
        // });

        xhr.upload.onloadend = function() { alert( 'Данные полностью загружены на сервер!' ); }

        // xhr.upload.onprogress = function(event) {
        //   console.log( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );  //не сработал
        // }

        
        
    }); 
     
})