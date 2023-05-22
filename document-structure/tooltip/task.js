const tooltipContainer = document.querySelectorAll('.has-tooltip'); // находим все элементы с классом has-tooltip
const tooltipDiv = document.createElement('div');//создаю конт для подсказки


function cl(event) {
    event.preventDefault();

    const tooltipElement = event.target; // элемент на который кликнули
    const tooltipText = tooltipElement.getAttribute('title'); // пполучаю текст подсказки

    const tooltipDiv = document.createElement('div');//создаю конт для подсказки

        tooltipDiv.textContent = tooltipText;//запсиываю текст подсказки

        tooltipDiv.classList.add('tooltip');// добавим css конт 
        
        tooltipElement.appendChild(tooltipDiv);
        //tooltipElement.insertAdjacentElement('afterend', tooltipDiv);// помещаю элемент после элемента на ктоторфй кликнул

        tooltipDiv.classList.add('tooltip_active');// добавляю класс видимости
}


tooltipContainer.forEach(element => {//обработчик для всех элементов контенейра
    element.addEventListener('click', cl);
});
