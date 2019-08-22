window.addEventListener('DOMContentLoaded', () => {
    let minus = document.getElementsByClassName('dropdown-count-minus'),
        plus = document.getElementsByClassName('dropdown-count-plus'),
        count = document.getElementsByClassName('dropdown-count-result'),
        confirmLink = document.getElementsByClassName('confirm-link')[0],
        clearLink = document.getElementsByClassName('clear')[0],
        dropdownResult = document.getElementsByClassName('dropdown--dropdown-result')[0];

    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', function () {
            if (count[i].innerHTML > 0) {
                count[i].innerHTML--;
            }
            if(count[i].innerHTML == 0){
                minus[i].classList.remove('dropdown-count-minus-active');
            }
        });
    }
    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', function () {
            count[i].innerHTML++;
            minus[i].classList.add('dropdown-count-minus-active');
        });
    }

    confirmLink.addEventListener('click', () => {
        let result = 0;
        for (let i = 0; i < count.length; i++) {
            result += +count[i].innerHTML;
        }
        switch (result) {
            case 1:
                dropdownResult.textContent = `${result} гость`;
                break;
            case 2:
            case 3:
            case 4:
                dropdownResult.textContent = `${result} гостя`;
                break;
            default:
                dropdownResult.textContent = `${result} гостей`;
                break;
        }
        clearLink.style = 'display:block;';
    });
    clearLink.addEventListener('click', ()=>{
        dropdownResult.textContent = 'Сколько гостей';
        for(let i=0; i<count.length; i++){
            count[i].innerHTML = 0;
            minus[i].classList.remove('dropdown-count-minus-active');
        }
    });
});