let search = document.querySelector('.search');

document.querySelector('#search-btn').onclick=()=>
{
    search.classList.toggle('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>
{
    shoppingCart.classList.toggle('active');
    search.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let login = document.querySelector('.login');

document.querySelector('#login-btn').onclick=()=>
{
    login.classList.toggle('active');
    shoppingCart.classList.remove('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>
{
    navbar.classList.toggle('active');
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
    search.classList.remove('active');
    
}

window.onscroll =() =>{
    search.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
     
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
     
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });