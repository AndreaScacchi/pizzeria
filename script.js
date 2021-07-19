// setup date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


//setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

//show nav
navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");
});

//close nav
navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");
});


//button-top
const buttonTop = function() {
    const btnTop = document.querySelector('.button-top');
    btnTop.addEventListener("click", () => {
        window.scroll({ behavior: 'smooth', top: 0 });
    })
};
buttonTop();


const scrollBtn = document.querySelector('.button-top');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollBtn.style.display = 'block';
        scrollBtn.innerHTML = 'top'.toUpperCase();
        scrollBtn.style.cursor = 'pointer';
    } else {
        scrollBtn.style.display = 'none';
    }
}