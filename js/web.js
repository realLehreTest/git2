const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.burger');
const links = document.querySelector('.header_links');
const navItems = document.querySelectorAll('.nav-item');
console.log(navItems);


menuBtn.addEventListener('click', function(e){
    burger.classList.toggle('open');
    if(!links.classList.contains('open')){
        links.classList.add('open');
        navItems.forEach(function(nav){
            nav.classList.add('open');
        })
        links.style.display = 'initial';
    } else {
        links.classList.remove('open');
        navItems.forEach(function(nav){
            nav.classList.remove('open');
        })
        links.style.transition = "all 0.5s ease-in-out";
    }
})

document.addEventListener('scroll', function(){
   if(document.documentElement.scrollTop >= 75){
    header.classList.add('addbg');
   } else {
    header.classList.remove('addbg');
   }
})



