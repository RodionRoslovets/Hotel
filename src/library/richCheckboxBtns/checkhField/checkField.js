window.addEventListener('DOMContentLoaded', ()=>{
    let chkBxBtns = document.getElementsByClassName('checkField'),
        chkBxBtnsImg = document.getElementsByClassName('checkField__checked');
    
    for(let i=0; i < chkBxBtns.length; i++){
        chkBxBtns[i].addEventListener('click', ()=>{
            chkBxBtns[i].classList.toggle('checkField__active');
            chkBxBtnsImg[i].classList.toggle('checkField__checked__active');
        });
    }
});