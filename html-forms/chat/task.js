'use strict'

//открытие окна чата при нажатии на красный боковой бэйдж
const chatSide = document.querySelector(`.chat-widget__side`);
const chatWidget = document.querySelector(`.chat-widget`);
chatSide.addEventListener(`click`, () => {
    chatWidget.classList.toggle(`chat-widget_active`);
});

//window.addEventListener('keydown', (e) => ( console.log(e.code) ))

//нажатию Enter отправк в чат непустого текстового сообщения с реальным временем
const clientInput = document.getElementById(`chat-widget__input`);
const chatMessages = document.getElementById(`chat-widget__messages`);
let currentTime;

const botMessages = [
    'Прюуэйт!',
    'Шо ти казау?',
    'Вы кто такие? Я вас не звал..' ,
    'Бамбалэйлоо, бамбалэээйлоооо' ,   
];

clientInput.addEventListener('keydown', (e) => {
    clientInput.value = clientInput.value.trim();
    if ((clientInput.value && e.code == 'Enter') || (clientInput.value && e.code == 'NumpadEnter')) {
        let chatTime = new Date();
        currentTime = chatTime.getHours() + ':' + chatTime.getMinutes();

        chatMessages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">` + currentTime + `</div>
                    <div class="message__text">` + clientInput.value + `</div>
                </div>`;
                       
        clientInput.value = ``;
        

        setTimeout(() => {
            chatMessages.innerHTML += `
                <div class="message">
                    <div class="message__time">` + currentTime + `</div>
                    <div class="message__text">` + botMessages[Math.floor(Math.random() * botMessages.length)] + `</div>
                </div>`;
                      
        }, 1000); 


        //При активном окне чата и простое 30 секунд, робот задать вопрос в чат
        let arr = Array.from(chatMessages.children);          
        let startLength = arr.length;
    
        setTimeout(() => {
            let finishLength = arr.length;
            if ((finishLength - startLength) == 0) {
                chatMessages.innerHTML += `
                <div class="message">
                    <div class="message__time">` + currentTime + `</div>
                    <div class="message__text">` + '...?' + `</div>
                </div>`;
            }
                      
        }, 30000);        
    }    
});


//?Реализуйте автоматическую прокрутку окна чата до блока 
//?последнего комментария после каждого нового комментария.
//clientInput.addEventListener('scroll', () => {})