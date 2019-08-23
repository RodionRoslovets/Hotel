
window.addEventListener('DOMContentLoaded', () => {
    let dropdownArrow = document.getElementsByClassName('dropdown--dropdown-arrow'),
        dropdownList = document.getElementsByClassName('dropdown--dropdown-items'),
        dropdownResult = document.getElementsByClassName('dropdown--dropdown-result');

    for(let i = 0; i < dropdownResult.length; i++){
        dropdownArrow[i].addEventListener('click', () => {
            if (!dropdownList[i].classList.contains('dropdown--dropdown-items-visible')) {
                dropdownList[i].style = "display:block;";
                setTimeout(() => {
                    dropdownResult[i].classList.add('dropdown--dropdown-result-opened');
                    dropdownList[i].classList.add('dropdown--dropdown-items-visible');
                }, 100);
            } else {
                dropdownList[i].classList.remove('dropdown--dropdown-items-visible');
                dropdownResult[i].classList.remove('dropdown--dropdown-result-opened');
                setTimeout(() => {
                    dropdownList[i].style = "";
                }, 100);
            }
        });
    }
    

    
});