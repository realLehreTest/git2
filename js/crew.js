let index = 1;

function displaySlides(n){
    const slides = document.querySelectorAll('.crew-main');
    const dots = document.querySelectorAll('.dot');

    if(n > slides.length){
        index = 1;
    }
    if(n < 1){
        index = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < dots.length; i++){
        dots[i].classList.remove('active');
    }

    slides[index -1].style.display = 'flex';
    dots[index -1].classList.add('active');
}


function plusSlides(n){
    clearInterval(timer);
    if(n < 0){
        displaySlides(index -=1);
    } else {
        displaySlides(index +=1);
    }

    if(n === -1){
        timer = setInterval(function(){plusSlides(n + 2)}, 4000)
    } else {
        timer = setInterval(function(){plusSlides(n + 1)}, 4000)
    }
}

window.addEventListener('load', function(){
    displaySlides(index);
    timer = setInterval(function(){plusSlides(1)}, 4000)
})

function presentSlide(n){
    clearInterval(timer);
    timer = setInterval(function(){plusSlides(n + 1)}, 4000)
    displaySlides(index = n);
}
