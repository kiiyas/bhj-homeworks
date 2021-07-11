'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('loader');    

    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    //xhr.responseType = 'json';
    xhr.addEventListener('load', function() {
        const output = document.getElementById('items');
        let data = JSON.parse(this.responseText);  
        let arr = Object.entries(data.response.Valute);
        arr.forEach(elem => {
            output.innerHTML += `<div class="item">
            <div class="item__code">${elem[1].CharCode}</div>
            <div class="item__value">....${elem[1].Value}</div>
            <div class="item__currency">руб.</div>
            </div>`;           
            
            return output;
        });        
        preloader.classList.remove('loader_active');
    })
    xhr.send();
})