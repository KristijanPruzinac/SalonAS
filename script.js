document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio));

//OWL CAROUSEL
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
   
        pagination: false,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
   
});

function MarkDay(){
    //DAY INDICATOR
    const d = new Date();
    let day = (d.getDay() + 6) % 7;

    if (window.innerWidth <= 767){
        let titleElements = document.querySelectorAll(".main-section3-week-day-title");
        titleElements[day].style.fontWeight = "bold";
    }
    else {
        let titleElements = document.querySelectorAll(".main-section3-week-day-title");
        titleElements[day].style.fontWeight = "normal";

        let indicatorElements = document.querySelectorAll(".main-section3-week-day-indicator");
        indicatorElements[day].style.backgroundImage = "url('img/day-indicator.png')";
    }
}

const mql = window.matchMedia("(max-width: 767px)");

mql.onchange = (e) => {
    MarkDay();
};

document.addEventListener("DOMContentLoaded", function() {
    MarkDay();

    //FADE IN
    document.querySelector(".main-section1").classList.add("visible");

    setTimeout(function(){
        document.querySelector(".main-section1-general").classList.add("visible");

        setTimeout(function(){
            document.querySelector(".main-section1-overlay").classList.add("visible");
        }, 200); 
    }, 100); 

    //PARALLAX
    const parallaxImage = document.querySelector('.main-section1-overlay');
    const scrollSpeed = 0.5;

    window.addEventListener('scroll', function() {
        const yOffset = window.scrollY * scrollSpeed;
        parallaxImage.style.transform = `translate3d(0, ${-yOffset}px, 0)`;
    });

    //SCALE
    
});