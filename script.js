/*==============================
        PORTFOLIO JAVASCRIPT
        PREMIUM 2026
==============================*/


// ================= PRELOADER =================

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});



// ================= MOBILE MENU =================


const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");


if(menu){

menu.addEventListener("click",()=>{


    nav.classList.toggle("active");


});


}



// ================= SCROLL HEADER =================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background =
        "rgba(10,10,40,.85)";

    }

    else{

        header.style.background =
        "rgba(255,255,255,.08)";

    }


});



// ================= SCROLL ANIMATION =================


const cards =
document.querySelectorAll(
".about-card, .achievement-card, .timeline-card"
);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{

threshold:.2

});



cards.forEach(card=>{


observer.observe(card);


});




// ================= PROFILE FLOAT =================


const profile =
document.querySelector(".image-box");



let angle=0;


setInterval(()=>{


angle+=0.03;


if(profile){


profile.style.transform =
`translateY(${Math.sin(angle)*10}px)`;


}


},30);





// ================= SMOOTH LINK =================


document.querySelectorAll("a[href^='#']")
.forEach(link=>{


link.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);


if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});




// ================= TYPING EFFECT =================


const text =
document.querySelector(".hero h3");


if(text){


const message =
"Student Portfolio | IT & Medical Informatics";


let index=0;


text.innerHTML="";


function typing(){


if(index < message.length){


text.innerHTML += message[index];

index++;


setTimeout(typing,70);


}


}


typing();


}
