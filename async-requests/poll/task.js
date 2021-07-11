'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('poll__title');
    const answerField = document.getElementById('poll__answers');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {        
        title.innerText = xhr.response.data.title;

        const answers = xhr.response.data.answers;
        answers.forEach(answer => {
            answerField.innerHTML += `<button class="poll__answer">${answer}</button>`;
        });

        const buttons = document.getElementsByClassName('poll__answer');
        
        for (let button of buttons) {    
            button.addEventListener('click', function (e) {                
                alert('Спасибо, ваш голос засчитан!');                
                answerField.innerHTML = '';

                const finalXhr = new XMLHttpRequest();
                finalXhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                finalXhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                finalXhr.responseType = '';

                finalXhr.addEventListener('load', function () {
                    let responses = JSON.parse(this.responseText).stat;

                    let i = 0;
                    let arr = [];
                    for (let item of responses) {
                        i = item.votes;
                        arr.push(i);                        
                    }
                    let votersSum = arr.reduce((a, b) => a + b);
                    //console.log('votersSum = ', votersSum);                    

                    responses.forEach(elem => {
                        title.insertAdjacentHTML('beforeend',
                        `<div class="poll__title" id="poll__title">
                        ${elem.answer}: ${(elem.votes * 100 / votersSum).toFixed(2)}%
                        </div>`);                        
                    });
                })

                let userAnswer;
                const answersArr = Object.entries(answers);
                answersArr.forEach( (elem) => {
                    if (e.target.innerText == elem[1]) {
                        userAnswer = Number(elem[0]); //индекс_ответа_в_массиве_ответов
                    }
                });    
                
                const vote = xhr.response.id;

                finalXhr.send( `vote=${vote}&answer=${userAnswer}` );                
            })
        }        
    })
    xhr.send();
})