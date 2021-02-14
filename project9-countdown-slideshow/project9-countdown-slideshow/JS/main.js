



//COUNTDOWN BY SECONDS//
function countdown() {
    var seconds= document.getElementById("seconds").value;

    function tick() {
        seconds= seconds-1;
        timer.innnerHTML= seconds;
        setTimeout(tick, 1000);         //setTimeout--means the program is pausing for 1000 milliseconds or 1 second)//
    if (seconds == -1) {
        alert("Time's up!");   //alert show after seconds input runs out//
    }
        }
    tick();
}

//SLIDESHOW//
var slideIndex = 1;
    showSlides(slideIndex);

//NEXT & PREVIOUS CONTROLS//
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//THUMBNAIL IMG CONTROLS//
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides= document.getElementsByClassName("mySlides");
    var dots= document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex= slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display= "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className= dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display= "block";
    dots[slideIndex-1].className += " active";
}
