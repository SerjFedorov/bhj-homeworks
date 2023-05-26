const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const loader = document.querySelector('.loader_active');
        loader.classList.remove('loader_active');
                
        const response = JSON.parse(xhr.responseText);
        const valute = response.response.Valute;
        const currencyPos = document.querySelector('#items');

        for ( let key in valute) {//перебираем все свойства
            if (valute.hasOwnProperty(key)) {//ищем нужные значения в свойствах

                let item = valute[key];
                let itemCode = item.CharCode;
                let itemValue = item.Value;

                const currency = document.createElement('div');//чтобы добавлять много элементов нужно создать их в цикле
                currency.classList.add('item');
                currency.innerHTML =`<div class="item__code">${itemCode}</div>
                    <div class="item__value">${itemValue}</div>
                    <div class="item__currency"> руб.</div>`;
                    currencyPos.appendChild(currency);
                }                
            }      
        }
    }
)
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses' , true);
xhr.send()

