window.addEventListener('DOMContentLoaded', ()=>{
    let toggleWrapper = document.getElementsByClassName('toggle-switch__switchWrapper'),
        switchEl = document.getElementsByClassName('toggle-switch__switch');

    for(let i = 0; i < toggleWrapper.length; i++){
        toggleWrapper[i].addEventListener('click', ()=>{

            toggleWrapper[i].classList.toggle('toggle-switch__switchWrapper__active');
            switchEl[i].classList.toggle('toggle-switch__switch__active');
});}
});