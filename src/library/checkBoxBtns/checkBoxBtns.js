window.addEventListener('DOMContentLoaded', ()=>{
    let chkBxBtns = document.getElementsByClassName('checkbox-btns-item-chek'),
        chkBxBtnsImg = document.getElementsByClassName('checkbox-btns-item-chek--checked');
    
    for(let i=0; i < chkBxBtns.length; i++){
        chkBxBtns[i].addEventListener('click', ()=>{
            chkBxBtns[i].classList.toggle('checkbox-btns-item-chek-active');
            chkBxBtnsImg[i].classList.toggle('checkbox-btns-item-chek--checked-active');
        });
    }
});