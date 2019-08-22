window.addEventListener('DOMContentLoaded', () => {
    let radioLabels = document.getElementsByClassName('radio-btns-item-chek'),
        radioElems = document.getElementsByName('radio'),
        radioImgs = document.getElementsByClassName('radio-btns-item-chek--checked');

    for (let i = 0; i < radioElems.length; i++) {
        radioLabels[i].addEventListener('click', () => {
            radioElems[i].addEventListener('change', () => {
                for (let k = 0; k < radioElems.length; k++) {
                    if (radioElems[k].checked) {
                        radioLabels[k].classList.add('radio-btns-item-chek-active');
                        radioImgs[k].classList.add('radio-btns-item-chek--checked-active');
                    } else {
                        radioLabels[k].classList.remove('radio-btns-item-chek-active');
                        radioImgs[k].classList.remove('radio-btns-item-chek--checked-active');
                    }
                }
            });
        });
    }
});