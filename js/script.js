let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 

// Shuffle the slides every 5 seconds
const slides = document.querySelectorAll('.home .slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.opacity = '1';
        } else {
            slide.style.opacity = '0';
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
 
