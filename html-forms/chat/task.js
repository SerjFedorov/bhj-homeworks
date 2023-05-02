const widget = document.querySelector('.chat-widget');

function clickWidget (el) {
    let target = el.target;
    if (target.closest('.chat-widget__side')){ //будет выполнено при клике на любой дочерний элемент .chat-widget__side.
        widget.classList.add('chat-widget_active');//по нажатию на сайд бар открываем чат
    }
}
document.addEventListener('click', clickWidget);// обработчик на клик


// widget.addEventListener('click', function() {
//     widget.classList.add('chat-widget_active');
// });

const chat = document.querySelector('.chat-widget__input');//находим строку ввода
const messages = document.querySelector('.chat-widget__messages');//находим строку вывода,куда вставляем текст

chat.addEventListener('keydown', function(e) {//обработчик на окно чата
    if (e.key === "Enter") {
        enterMessage()
    }}
)

function enterMessage() {
    const text = chat.value.trim();//убираем пробелы
    if (text === '') { 
    //    console.log('fail');
        alert ('Ведите сообщение');
        return
    }
    if (text !== '') {//если в тексте нет проблеов добавляем текст по шаблону время-текст
        const message = ` <div class="message message_client">
        <div class="message__time">${getTime()}</div>
        <div class="message__text">${text}</div>
    </div>`;
        messages.insertAdjacentHTML('beforeend', message);// добавляем после .chat-widget__messages'
        chat.value = '';//сбрасыеваем значение окна после ввода
    }
        
        const robotMsg = ` <div class="message">
    <div class="message__time">${getTime()}</div>
    <div class="message__text">${arrRobot()}</div>
    </div>`;
        messages.insertAdjacentHTML('beforeend', robotMsg);//добавляем после message
        chat.value = '';
        messages.lastElementChild.scrollIntoView();//последний элемент сообщений будет виден в области просмотра метод scrollIntoView
}

function getTime() {
    const date = new Date();
    const time = { hour: '2-digit', minute: '2-digit'};
    return date.toLocaleTimeString('en-GB', time);

    //const date = new Date();
    //const hours = date.getHours().toString();
    //const minutes = date.getMinutes().toString();
   // return `${hours}:${minutes}`;
}

function arrRobot() {
    const arr = ['Никого нет дома!', 'Уходите','И вам здраствуйте', '????','РАЗ рАЗ','ПОКА ПОКА!!' ];
    return arr[Math.floor(Math.random() * arr.length)];
}








