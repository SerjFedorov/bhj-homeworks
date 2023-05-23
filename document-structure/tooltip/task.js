const tooltipContainer = document.querySelectorAll('.has-tooltip'); // находим все элементы с классом has-tooltip
const tooltipDiv = document.createElement('div');//создаю конт для подсказки
let activeTool = null;//контейнер для хранения текущей подскакзки

function show (event) {
    event.preventDefault();

    const tooltipElement = event.target; // элемент на который кликнули
    const tooltipText = tooltipElement.getAttribute('title'); // пполучаю текст подсказки

    if (activeTool) {//првоерка на активность подсказки
        activeTool.classList.remove('tooltip_active');
        activeTool = null;
    }

    const tooltipDiv = document.createElement('div');//создаю конт для подсказки.
        tooltipDiv.textContent = tooltipText;//запсиываю текст подсказки
        tooltipDiv.classList.add('tooltip');// добавим css конт
                
        document.body.appendChild(tooltipDiv);
        activeTool = tooltipDiv;//записываю подсказку в актвиный контейнер
        tooltipDiv.classList.add('tooltip_active');// добавляю класс видимости

        let getRect = tooltipElement.getBoundingClientRect();//получаю координаты

        tooltipDiv.style.top = `${getRect.bottom}px`;//устанавливаю координаты относительно кликнутой ссылки 
        tooltipDiv.style.left = `${getRect.left}px`;// выравниваю подсказку по нижнему и левому краю ссылки

        tooltipElement.removeEventListener('click', show);
        tooltipElement.addEventListener('click', hide);
}

function hide (event) {//удаление блока подсказки
    const tooltipElement = event.target;
    const tooltipDiv = document.querySelector('.tooltip');
    tooltipDiv.remove();

    tooltipElement.addEventListener('click', show);
}

tooltipContainer.forEach(element => {//обработчик для всех элементов контенейра
    element.addEventListener('click', show);
});
