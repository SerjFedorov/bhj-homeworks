"use strict"
const showWindow = document.querySelector('#modal_main'); //находим класс modal_main(1 окно)
    showWindow.classList.add('modal_active');// добавляем класс modal_active,показываем окно

const closeWindow = document.querySelectorAll('.modal__close');// находим все классы modal_close
    for (let element of closeWindow) {
        element.onclick = function () {
            this.closest('.modal').classList.remove('modal_active');
        }
    }

const modal = document.querySelector('#modal_success'); //находим класс ....(2 окно)
const show = document.querySelector('.show-success');//находим класс...

    
function onClick() {
    showWindow.classList.remove('modal_active'); // удаляем активный класс для первого окна- showWindow
    modal.classList.add('modal_active');//добавляем активный класс для второго окна - modal
   // modal.classList.toggle('modal_active');?
}

show.addEventListener('click', onClick); 




