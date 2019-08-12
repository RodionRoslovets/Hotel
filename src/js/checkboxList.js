window.addEventListener('DOMContentLoaded', ()=>{
    let checkBox = document.getElementsByClassName('list-item-chek'),
        itemChecked = document.getElementsByClassName('list-item-chek--checked'),
        listItems = document.getElementsByClassName('checkbox-list--list')[0],
        checkBoxArrow = document.getElementsByClassName('checkbox-list--arrow')[0];
    
    checkBoxArrow.addEventListener('click', ()=>{
        if (!listItems.classList.contains('checkbox-list--list-opened')) {
            listItems.style = "display:block;";
            setTimeout(() => {
                listItems.classList.add('checkbox-list--list-opened');
                checkBoxArrow.classList.add('checkbox-list--arrow-rotated');
            }, 100);
        } else {
            listItems.classList.remove('checkbox-list--list-opened');
            checkBoxArrow.classList.remove('checkbox-list--arrow-rotated');
            setTimeout(() => {
                listItems.style = "";
            }, 100);
        }
    });
    
    for(let i = 0; i < checkBox.length; i++){
        checkBox[i].addEventListener('click', ()=>{
            checkBox[i].classList.toggle('list-item-chek-active');
            itemChecked[i].classList.toggle('list-item-chek--checked-active');
        });
    }
});
