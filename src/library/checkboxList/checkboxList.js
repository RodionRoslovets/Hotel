window.addEventListener('DOMContentLoaded', ()=>{
    let listItems = document.getElementsByClassName('checkbox-list__list'),
        checkBoxArrow = document.getElementsByClassName('checkbox-list__head-arrow');
    
        for(let i = 0; i < checkBoxArrow.length; i++){
            checkBoxArrow[i].addEventListener('click', ()=>{
                if (!listItems[i].classList.contains('checkbox-list__list__opened')) {
                    listItems[i].style = "display:block;";
                    setTimeout(() => {
                        listItems[i].classList.add('checkbox-list__list__opened');
                        checkBoxArrow[i].classList.add('checkbox-list__head-arrow-rotated');
                    }, 100);
                } else {
                    listItems[i].classList.remove('checkbox-list__list__opened');
                    checkBoxArrow[i].classList.remove('checkbox-list__head-arrow-rotated');
                    setTimeout(() => {
                        listItems[i].style = "";
                    }, 100);
                }
            });
        }
});
