function enterTask () {
    const text = task.value.trim();//убираем пробелы
        if (text === '') { // если пустое сообщение алерт
                alert ('Ведите сообщение');
            return
        }    
//шаблон для вставки
    const taskMess = `<div class="task"> 
        <div class="task__title">
        ${text}</div>
        <a href="#" class="task__remove">&times;</a></div>`;

    const taskList = document.querySelector('.tasks__list');//относительно какого элемента будем вставлять
    taskList.insertAdjacentHTML('afterbegin', taskMess);// добавляем перед концом .tasks__list
    task.value = '';//сбрасыеваем значение окна после ввода
}

const task = document.querySelector('.tasks__input');

task.addEventListener('keydown', (event) => { //вызов функции по енттер хотя поле по умалчению отправляет
    if (event.key === 'Enter') {
            event.preventDefault();
        enterTask();
        } 
    }
)

const btn = document.querySelector('.tasks__add');

btn.addEventListener('click', (event) => { // вызов функции по клику на кнопку добавить
    let target = event.target;
        if (target.classList.contains('tasks__add')){// если нажали на кнопку добавить запустим enterTask
            event.preventDefault();
        enterTask();
        }    
    }
)

const del = document.querySelector('.tasks__list');

del.addEventListener('click', (event) => {
    let target = event.target;
        if (target.classList.contains('task__remove')) {
            event.preventDefault();
        target.closest('.task').remove();
        }
    }   
)

// function delTask(event) {
//     let target = event.target;
//     if (target.classList.contains('task__remove')) {
//         target.closest('.task').remove();
    
// }}

// document.addEventListener('click', delTask);

