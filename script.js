/*==================================
        PRELOADER
==================================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},600);

});

/*==================================
        MOBILE MENU
==================================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});

/*==================================
        HEADER SCROLL
==================================*/

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.classList.add("active");

}else{

header.classList.remove("active");

}

});

/*==================================
      IMAGE POPUP
==================================*/

function openPopup(src){

const popup = document.getElementById("popup");

const img = document.getElementById("popup-img");

popup.style.display="flex";

img.src=src;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

document.getElementById("popup").addEventListener("click",function(e){

if(e.target.id=="popup"){

closePopup();

}

});
