
window.addEventListener('DOMContentLoaded', () => {
    let dropdownArrow = document.getElementsByClassName('dropdown__arrow '),
        dropdownList = document.getElementsByClassName('dropdown__items'),
        dropdownResult = document.getElementsByClassName('dropdown__input');

    for(let i = 0; i < dropdownResult.length; i++){
        dropdownArrow[i].addEventListener('click', () => {
            if (!dropdownList[i].classList.contains('dropdown__items__visible')) {
                dropdownList[i].style = "display:block;";
                setTimeout(() => {
                    dropdownResult[i].classList.add('dropdown__input__opened');
                    dropdownList[i].classList.add('dropdown__items__visible');
                }, 100);
            } else {
                dropdownList[i].classList.remove('dropdown__items__visible');
                dropdownResult[i].classList.remove('dropdown__input__opened');
                setTimeout(() => {
                    dropdownList[i].style = "";
                }, 100);
            }
        });
    }
    

    
});