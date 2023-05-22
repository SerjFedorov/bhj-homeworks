const productDec = document.querySelectorAll('.product__quantity-control_dec');//кнопки + и -
const productInc = document.querySelectorAll('.product__quantity-control_inc');

function productPlus(event) {// при нажатии на плюс прибавляем
    let target = event.target;

    if (target.classList.contains('product__quantity-control_inc')) {
        const productValue = target.parentElement.querySelector('.product__quantity-value');//находим нажатый элемент
        let value = parseInt(productValue.innerText);//приводим к цифре значение
        value++;   
        productValue.innerText = value;
        }
    }


function productMinus(event) {//аналогично при нажатии на минус убавляем 
    let target = event.target;

    if (target.classList.contains('product__quantity-control_dec')) {
        const productValue = target.parentElement.querySelector('.product__quantity-value');
        let value = parseInt(productValue.innerText);
        value--;   
        productValue.innerText = value;

            if (value <= 0) {//ограничение на 0 в корзине
                alert('Корзина пуста,добавтье предметы')
                productValue.innerText = '1';
            }
        }
    }

//обработчкии на каждую кнопку + и -
productDec.forEach(event => {
    event.addEventListener('click', productMinus);
    }
);

productInc.forEach(event => {
    event.addEventListener('click', productPlus);
    }
);



const productAdd = document.querySelectorAll('.product__add');

function addProduct (event) {
    let target = event.target;    
    
    if (target.classList.contains('product__add')){
        
        const productId = target.closest('.product').dataset.id;// продук id
        const productImage = target.closest('.product').querySelector('.product__image').getAttribute('src');// поулчаем ссылку на картинку
        const productCount = parseInt(target.closest('.product').querySelector('.product__quantity-value').innerText);// получаем количества данного продукта при добавлении
        
        const cartProducts = document.querySelector('.cart__products');
        
        const productIdInCart = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);// получаем id конкретного товара
        if (productIdInCart) {// если товар с productId существует в корзине  то
            const productCountInCart = parseInt(productIdInCart.querySelector('.cart__product-count').innerText);//получаем количество из корзины и приводим к цифре
        
            const productValueInCart = productCountInCart + productCount;// складываем бывшие значиние и добавленные
        
            productIdInCart.querySelector('.cart__product-count').innerText = productValueInCart ;// присваиваем текущее значение в корзине
            
        } else {  //шаблон для вставки картинки товара

        const cart = `<div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${productImage}">
        <div class="cart__product-count">${productCount}</div></div>`;
        cartProducts.insertAdjacentHTML('beforeend', cart);
        }    
    }
}

productAdd.forEach(event => {
    event.addEventListener('click', addProduct)
    }
)