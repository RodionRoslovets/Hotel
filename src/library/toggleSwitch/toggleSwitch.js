window.addEventListener('DOMContentLoaded', ()=>{
    let toggleWrapper = document.getElementsByClassName('toggle-switch--switchWrapper'),
        switchEl = document.getElementsByClassName('switchWrapper-switch');

    for(let i = 0; i < toggleWrapper.length; i++){
        toggleWrapper[i].addEventListener('click', ()=>{

            toggleWrapper[i].classList.toggle('toggle-switch--switchWrapper-active');
            switchEl[i].classList.toggle('switchWrapper-switch-active');
});}
});