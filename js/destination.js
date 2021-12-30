window.addEventListener('DOMContentLoaded', function(){
    setUpTabs();
})

function setUpTabs(){
    const btns = document.querySelectorAll('.dest-btn');
    btns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const id = btn.dataset.forId;
            const tabsContainer = document.querySelector('.destination-container');
            const activateTab = tabsContainer.querySelector(`.destination-main[data-tab="${id}"]`);
            
            document.querySelectorAll('.destination-main').forEach(function(main){
                main.classList.remove('active-main');
            })
            activateTab.classList.add('active-main');
        })
    })
}
