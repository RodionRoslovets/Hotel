window.addEventListener('DOMContentLoaded', () => {
    let dropdownArrow = document.getElementsByClassName('dropdown--dropdown-arrow')[0],
        dropdownList = document.getElementsByClassName('dropdown--dropdown-items')[0],
        dropdownResult = document.getElementsByClassName('dropdown--dropdown-result')[0];

    dropdownArrow.addEventListener('click', () => {
        if (!dropdownList.classList.contains('dropdown--dropdown-items-visible')) {
            dropdownList.style = "display:block;";
            setTimeout(() => {
                dropdownResult.classList.add('dropdown--dropdown-result-opened');
                dropdownList.classList.add('dropdown--dropdown-items-visible');
            }, 100);
        } else {
            dropdownList.classList.remove('dropdown--dropdown-items-visible');
            dropdownResult.classList.remove('dropdown--dropdown-result-opened');
            setTimeout(() => {
                dropdownList.style = "";
            }, 100);
        }
    });

    
});