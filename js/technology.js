window.addEventListener('DOMContentLoaded', function(){
    setUpTabs();
})

function setUpTabs(){
    const techBtns = document.querySelectorAll('.details-index');
    techBtns.forEach(function(techBtn){
        techBtn.addEventListener('click', function(e){
            const id = techBtn.dataset.forId;
            const tabsContainer = document.querySelector('.technology-container');
            const activateTab = tabsContainer.querySelector(`.tech-main[data-tab="${id}"]`);
            
            document.querySelectorAll('.tech-main').forEach(function(main){
                main.classList.remove('active-tech-main');
            })
            activateTab.classList.add('active-tech-main');
            console.log(1);
        })
    })
}