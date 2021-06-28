'use strict'

const cart = document.getElementsByClassName('cart');
const cartProducts = document.getElementsByClassName('cart__products')[0];
const cartIsFull = document.getElementsByClassName('cart__product');


function seeCart() {    
    if (!cartIsFull[0]) {
        cart[0].classList.add('invisible');
    } else {cart[0].classList.remove('invisible'); }    
}
seeCart();


//изменение кол-ва товара
const productControls = document.getElementsByClassName('product__quantity-control');
for (const control of productControls) {
    control.addEventListener('click', () => {
        let quantity = control.closest('div.product__quantity-controls').children[1];        
        
        if (control.classList.contains('product__quantity-control_dec') && (quantity.innerHTML >= 2)) {
            quantity.innerHTML = +(quantity.innerHTML) - 1;
        } else if (control.classList.contains('product__quantity-control_inc')) {
            quantity.innerHTML = +(quantity.innerHTML) + 1;
        }
    });
}

//добавлеие в корзинчку
 
const addToCartButton = document.getElementsByClassName('product__add');
for (let button of addToCartButton) {
    const product = button.closest('.product');
    const productID = product.dataset.id;
   
    
    button.addEventListener('click', (e) => {         
        //let target = e.target;
        let newCartProduct = document.createElement('div');
        newCartProduct.className = 'cart__product';
        newCartProduct.dataset.id = productID;

        const image = product.getElementsByClassName('product__image')[0].src;
        const quantity = product.getElementsByClassName('product__quantity-value')[0].innerText;

        newCartProduct.innerHTML = '<img class="cart__product-image" src="' + image + '"> \
                <div class="cart__product-count">' + quantity + '</div> \
                <div class="product__remove"> Убрать </div> \
                </div>';
           
        //cartProducts.append(newCartProduct);
        
        const cartArray = Array.from(document.getElementsByClassName('cart__product'));
        let gettedCartProduct = cartArray.find((e) => {
            if (e.getAttribute(`data-id`) == productID) {
               return e; 
            };            
        })
        
        if (gettedCartProduct == undefined) {
            cartProducts.append(newCartProduct);
        } else {
            for (let item of cartIsFull) {
                if (item.getAttribute(`data-id`) == productID) {
                    let cartProductCount = parseInt(item.querySelector(`.cart__product-count`).textContent);
                    let newProductValue = cartProductCount + parseInt(quantity);
                    item.querySelector(`.cart__product-count`).textContent = newProductValue;
                    break;
                }
            }
        }
                
        seeCart();

        //удаление из корзины
        const removeFromCartButton = document.getElementsByClassName('product__remove');
        for (let button of removeFromCartButton) {
            button.addEventListener('click', () => {
                const productToRemove = button.closest('.cart__product');
                productToRemove.remove();
                seeCart();                
            })            
        }
        })
};      
      




