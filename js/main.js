const explore = document.querySelector('.explore');
const exploreGlow = document.querySelector('.explore-glow');

explore.addEventListener('mouseenter', function(){
    exploreGlow.classList.add('glow');
})
explore.addEventListener('mouseleave', function(){
    exploreGlow.classList.remove('glow');
})