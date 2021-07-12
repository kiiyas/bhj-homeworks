'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');    

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
        // xhr.upload.onprogress = function(e) { //это был еще один вариант, но он работает не точнее, чем первый
        //     progress.value = (e.loaded/e.total)
        // };
        // xhr.open('POST', form.action);
        xhr.send(formData);      
        
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState !== xhr.DONE) {
                progress.value += 0.05;
            } else console.log('done'); //смог понять об окончании загрузки только так
        });

        // xhr.addEventListener('load', () => {  //не сработал
        //     console.log('done');
        // });

        //xhr.upload.loadend = function() { alert( 'Данные полностью загружены на сервер!' ); } //не сработал

        // xhr.upload.onprogress = function(event) {
        //   console.log( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );  //не сработал
        // }

        //? при каждом варианте прогрессбар не соответствует реальному прогрессу закачки
        //? не получается получить момент полной загрузки на сервер
        
    }); 
     
})