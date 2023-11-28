let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    cart.classList.remove('active');
}