window.addEventListener('DOMContentLoaded', () => {
    let radioLabels = document.getElementsByClassName('radio__item'),
        radioElems = document.getElementsByName('radio'),
        radioImgs = document.getElementsByClassName('radio__item-checked');

    for (let i = 0; i < radioElems.length; i++) {
        radioLabels[i].addEventListener('click', () => {
            radioElems[i].addEventListener('change', () => {
                for (let k = 0; k < radioElems.length; k++) {
                    if (radioElems[k].checked) {
                        radioLabels[k].classList.add('radio__item-chek__active');
                        radioImgs[k].classList.add('radio__item-checked__active');
                    } else {
                        radioLabels[k].classList.remove('radio__item-chek__active');
                        radioImgs[k].classList.remove('radio__item-checked__active');
                    }
                }
            });
        });
    }
});