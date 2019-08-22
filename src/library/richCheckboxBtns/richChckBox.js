window.addEventListener('DOMContentLoaded', ()=>{
    let richChkBxBtns = document.getElementsByClassName('richCheckBox--items-item-chek'),
        richChkBxBtnsImg = document.getElementsByClassName('richCheckBox--items-item-chek--checked');
    
    for(let i=0; i < richChkBxBtns.length; i++){
        richChkBxBtns[i].addEventListener('click', ()=>{
            richChkBxBtns[i].classList.toggle('richCheckBox--items-item-chek-active');
            richChkBxBtnsImg[i].classList.toggle('richCheckBox--items-item-chek--checked-active');
        });
    }
});