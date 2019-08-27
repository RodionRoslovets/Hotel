import {
    all
} from "q";
import {
    restElement
} from "babel-types";

window.addEventListener('DOMContentLoaded', () => {
    let minus = document.getElementsByClassName('dropdown-count-minus'),
        plus = document.getElementsByClassName('dropdown-count-plus'),
        count = document.getElementsByClassName('dropdown-count-result'),
        confirmLink = document.getElementsByClassName('confirm-link'),
        clearLink = document.getElementsByClassName('clear'),
        dropdownResult = document.getElementsByClassName('dropdown--dropdown-result'),
        dropItems = document.getElementsByClassName('dropdown--dropdown-items');

    let result = 0,
        items = 0, //переменная с которой начнается отсчет
        counts = 0; //переменная до которой идет отсчет

    function getCounts(i) {
        for (let k = 0; k < dropItems[i].children.length; k++) {
            //получаем все элементы item в текущем выпадающем списке
            if (dropItems[i].children[k].classList.contains('dropdown--dropdown-item')) {
                items += 1;
            }
        }

        counts = items * (i + 1);

        if (i == 0) {
            items = 0;
        }
        items *= i;
    }

    function reset() {
        result = 0;
        items = 0;
        counts = 0;
    }
    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', function () {
            if (count[i].innerHTML > 0) {
                count[i].innerHTML--;
            }
            if (count[i].innerHTML == 0) {
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

    for (let i = 0; i < confirmLink.length; i++) {
        confirmLink[i].addEventListener('click', () => {

            getCounts(i);

            for (let k = items; k < counts; k++) {
                result += +count[k].innerHTML;
            }

            switch (result) {
                case 1:
                    dropdownResult[i].textContent = `${result} гость`;
                    break;
                case 2:
                case 3:
                case 4:
                    dropdownResult[i].textContent = `${result} гостя`;
                    break;
                default:
                    dropdownResult[i].textContent = `${result} гостей`;
                    break;
            }
            clearLink[i].style = 'display:block;';

            reset();

        });
    }

    for (let i = 0; i < clearLink.length; i++) {
        clearLink[i].addEventListener('click', () => {
            dropdownResult[i].textContent = 'Сколько гостей';

            getCounts(i);

            for (let i = items; i < counts; i++) {
                count[i].innerHTML = 0;
                minus[i].classList.remove('dropdown-count-minus-active');
            }

            reset();

        });
    }

});