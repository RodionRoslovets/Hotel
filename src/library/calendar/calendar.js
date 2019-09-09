window.addEventListener('DOMContentLoaded', () => {
    let monthHeading = document.querySelectorAll('.calendar-month'),
        yearHeading = document.querySelectorAll('.calendar-year'),
        calendarHeading = document.querySelectorAll('.calendar-heading-title'),
        months = [{
            name: 'Январь',
            length: 31
        }, {
            name: 'Февраль',
            length: 28
        }, {
            name: 'Март',
            length: 31
        }, {
            name: 'Апрель',
            length: 30
        }, {
            name: 'Май',
            length: 31
        }, {
            name: 'Июнь',
            length: 30
        }, {
            name: 'Июль',
            length: 31
        }, {
            name: 'Август',
            length: 31
        }, {
            name: 'Сентябрь',
            length: 30
        }, {
            name: 'Октябрь',
            length: 31
        }, {
            name: 'Ноябрь',
            length: 30
        }, {
            name: 'Декабрь',
            length: 31
        }],
        arrowLeft = document.querySelectorAll('.calendar-heading-arrow-left'),
        arrowRight = document.querySelectorAll('.calendar-heading-arrow-right'),
        table = document.querySelectorAll('.calendar-table-body');

    
    
    //Получаем сегодняшнюю дату и месяц-год записываем в заголовок
    let month = new Date();
    monthHeading.forEach(el => {
        el.innerHTML = `${months[month.getMonth()].name}`;
    });
    yearHeading.forEach(el => {
        el.innerHTML = `${month.getFullYear()}`;
    });

    //Заполняем таблицу числами 
    function fillTable() {
        //очистили таблицу
        for(let i = 0; i < table.length; i++){
            table[i].innerHTML = '';
        }
        
        function addRangeClass() {//Добавили класс для диапазона выбраных ячеек
            for (let j = 0; j < dateCell.length; j++) {
                if (dateCell[j].classList.contains('calendar-month-cell-active-start')) {
                    dateCell[j + 1].classList.add('calendar-month-cell-active-range');

                } else if (dateCell[j].classList.contains('calendar-month-cell-active-end')) {
                    if(dateCell[j].classList.contains('calendar-month-cell-active-range')){
                        dateCell[j].classList.remove('calendar-month-cell-active-range');
                    }
                    break;
                } else if (dateCell[j].classList.contains('calendar-month-cell-active-range') && !dateCell[j + 1].classList.contains('calendar-month-cell-active-end')) {
                    dateCell[j + 1].classList.add('calendar-month-cell-active-range');
                }
            }
        }

        function removeRangeClass(){//Убрали выделение диапазона
            for (let i = 0; i < dateCell.length; i++) {
                if (dateCell[i].classList.contains('calendar-month-cell-active-range')) {
                    dateCell[i].classList.remove('calendar-month-cell-active-range');
                }
            }
        }

        let day,
            date = month.getDate();
        //вернулись к первому дню месяца
        for (let i = date; i >= 1; i--) {
            let firstDay = new Date(month.getFullYear(), month.getMonth(), i);
            day = firstDay.getDay();
            date = firstDay.getDate();
        }

        if (day == 0) {
            day = 7;
        }
        // заполнили таблицу

        function createRow() { //создаем строку и заполняем пустыми ячейками
            let tRow = document.createElement('tr');

            for (let i = 0; i < 7; i++) {
                let tCell = document.createElement('td');
                tCell.classList.add('calendar-month-cell');
                tRow.appendChild(tCell);
            }
            return tRow;
        }

        for (let i = 0; date <= months[month.getMonth()].length; i++) {
            let tRow = createRow();
            table[0].appendChild(tRow);
            let dateCell = document.querySelectorAll('.calendar-month-cell');

            if (date == 1) { //переименовываем ячейки предыдущего месяца
                for (let k = day - 2; k >= 0; k--) {
                    dateCell[k].classList.remove('calendar-month-cell');
                    dateCell[k].classList.add('calendar-last-month');
                }
                dateCell = document.querySelectorAll('.calendar-month-cell');
                for (let k = 0; k < dateCell.length; k++) { //заполняем первую строку
                    dateCell[k].innerHTML = date;
                    date++;
                }
            } else {
                dateCell = document.querySelectorAll('.calendar-month-cell');

                for (let k = 0; k < tRow.cells.length; k++) {
                    tRow.cells[k].innerHTML = date; //заполняем другие строки
                    date++;
                    if (date > months[month.getMonth()].length) { //проверка на количество дней в месяце и выход из цикла
                        for (let j = k + 1; j < tRow.cells.length; j++) {
                            tRow.cells[j].classList.remove('calendar-month-cell');
                            tRow.cells[j].classList.add('calendar-next-month');
                        }
                        break;
                    }
                }
            }

        }
        //Заполняем ячейки предыдущего месяца
        let lastMonthCells = document.querySelectorAll('.calendar-last-month'),
            lastMonth = new Date(month.getFullYear(), month.getMonth() - 1),
            lastDay;

        for (let i = lastMonth.getDate(); i <= months[lastMonth.getMonth()].length; i++) {
            let a = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), i);
            lastDay = a.getDate();
        }

        for (let i = lastMonthCells.length - 1; i >= 0; i--) {
            lastMonthCells[i].innerHTML = lastDay;
            lastDay--;
        }
        //заполняем ячейки следующего месяца
        let nextMonthCells = document.querySelectorAll('.calendar-next-month'),
            a = 1;
        nextMonthCells.forEach(el => {
            el.innerHTML = a;
            a++;
        });


        let dateCell = document.querySelectorAll('.calendar-month-cell'),
            todayActive = new Date();

        for (let i = 0; i < dateCell.length; i++) {
            if (dateCell[i].innerHTML == todayActive.getDate() && monthHeading[0].innerHTML == months[todayActive.getMonth()].name && yearHeading[0].innerHTML == todayActive.getFullYear()) {
                dateCell[i].classList.add('today-active');
            }
        }
        //Выделение ячеек и назначение диапазона
        for (let i = 0; i < dateCell.length; i++) {
            dateCell[i].addEventListener('click', (e) => {
                dateCell[i].classList.toggle('calendar-month-cell-active');

                
                let cellActive = document.querySelectorAll('.calendar-month-cell-active');
                if (cellActive.length < 2) {
                    removeRangeClass();
                }
                if (cellActive.length == 2) {
                    for (let k = 0; k < dateCell.length; k++) {
                        dateCell[k].classList.remove('calendar-month-cell-active-start');
                        dateCell[k].classList.remove('calendar-month-cell-active-end');
                    }

                    cellActive = document.querySelectorAll('.calendar-month-cell-active');
                    if (cellActive.length < 2) {
                        removeRangeClass();
                    }
                    cellActive[0].classList.add('calendar-month-cell-active-start');
                    cellActive[1].classList.add('calendar-month-cell-active-end');
                    addRangeClass();

                } else {
                    for (let k = 0; k < dateCell.length; k++) {
                        dateCell[k].classList.remove('calendar-month-cell-active-start');
                        dateCell[k].classList.remove('calendar-month-cell-active-end');
                    }
                }

                if (cellActive.length > 2) {
                    if (+e.currentTarget.innerHTML <= +cellActive[0].innerHTML || +e.currentTarget.innerHTML >= +cellActive[2].innerHTML) {
                        for (let i = 0; i < dateCell.length; i++) {
                            if (dateCell[i].classList.contains('calendar-month-cell-active')) {
                                if (dateCell[i].innerHTML == cellActive[1].innerHTML) {
                                    dateCell[i].classList.remove('calendar-month-cell-active');
                                    cellActive = document.querySelectorAll('.calendar-month-cell-active');
                                    if (cellActive.length < 2) {
                                        removeRangeClass();
                                    }
                                    cellActive[0].classList.add('calendar-month-cell-active-start');
                                    cellActive[1].classList.add('calendar-month-cell-active-end');
                                    addRangeClass();
                                    break;
                                }
                            }
                        }
                    } else if (+e.currentTarget.innerHTML > +cellActive[0].innerHTML && +e.currentTarget.innerHTML < +cellActive[2].innerHTML) {
                        for (let i = 0; i < dateCell.length; i++) {
                            if (dateCell[i].classList.contains('calendar-month-cell-active')) {
                                if (dateCell[i].innerHTML == cellActive[2].innerHTML) {
                                    dateCell[i].classList.remove('calendar-month-cell-active');
                                    cellActive = document.querySelectorAll('.calendar-month-cell-active');
                                    
                                    removeRangeClass();

                                    cellActive[0].classList.add('calendar-month-cell-active-start');
                                    cellActive[1].classList.add('calendar-month-cell-active-end');
                                    addRangeClass();
                                    break;
                                }
                            }
                        }
                    }
                }
             });
        } 
    }
    fillTable(); 

    //Назначаем функции стрелкам
    for (let i = 0; i < arrowRight.length; i++) {
        arrowRight[i].addEventListener('click', () => {
            let nextMonth = month.getMonth() + 1;
            if (nextMonth > 0 && nextMonth <= 11) {
                monthHeading[i].innerHTML = `${months[nextMonth].name}`;
                month.setMonth(nextMonth);
            } else {
                nextMonth = 0;
                monthHeading[i].innerHTML = `${months[nextMonth].name}`;
                month.setMonth(nextMonth);
            }
            if (nextMonth == 0) {
                let nextMonth = month.getFullYear() + 1;
                yearHeading[i].innerHTML = `${nextMonth}`;
                month.setFullYear(nextMonth);
            }
            fillTable();
        });
    }
    for (let i = 0; i < arrowLeft.length; i++) {
        arrowLeft[i].addEventListener('click', () => {
            let prevMonth = month.getMonth() - 1;
            if (prevMonth >= 0 && prevMonth < 11) {
                monthHeading[i].innerHTML = `${months[prevMonth].name}`;
                month.setMonth(prevMonth);
            } else {
                prevMonth = 11;
                monthHeading[i].innerHTML = `${months[prevMonth].name}`;
                month.setMonth(prevMonth);
            }
            if (prevMonth == 11) {
                let prevYear = month.getFullYear() - 1;
                yearHeading[i].innerHTML = `${prevYear}`;
                month.setFullYear(prevYear);
            }
            fillTable();
        });
    }
    //Выводим результат
    let acceptButton = document.querySelectorAll('.calendar-confirm-link'), 
		dateField = document.querySelectorAll('.date-dropdown__result'),
		calendarClear = document.querySelectorAll('.calendar-clear-link');    
    
		for(let i = 0;i < acceptButton.length; i++){
			acceptButton[i].addEventListener('click', ()=>{
				let res,
                    res2,
                    resMonth,
				    firstday = document.querySelectorAll('.calendar-month-cell-active-start')[i].innerHTML,
                    lastday = document.querySelectorAll('.calendar-month-cell-active-end')[i].innerHTML;
                
                function firstDecadeZero(a){
                    if(a >= 1 && a <10){
                        a = '0' + a;
                    }
                    return a;
                }
                
                firstday = firstDecadeZero(firstday);
                lastday = firstDecadeZero(lastday);

                for(let k = 0; k < months.length; k++){
                    if(months[k].name == monthHeading[i].innerHTML){
                        resMonth = firstDecadeZero(k + 1);
                        
                    }
                }

				res = firstday + '.' + resMonth + '.' + yearHeading[i].innerHTML;
				res2 = lastday + '.' + resMonth + '.' + yearHeading[i].innerHTML;
				dateField[0].textContent = res;
				dateField[1].textContent = res2;
				
				calendarClear[i].classList.add('calendar-clear-link--active');
				
			});
		}
		
		for(let i = 0; i < calendarClear.length; i++){
			calendarClear[i].addEventListener('click', ()=>{
				dateField.forEach(el => {
                    el.innerHTML = 'ДД.ММ.ГГГГ';
                });
                let dateCell = document.querySelectorAll('.calendar-month-cell');
                dateCell.forEach(el => {
                    el.classList.remove('calendar-month-cell-active-start');
                    el.classList.remove('calendar-month-cell-active-end');
                    el.classList.remove('calendar-month-cell-active');
                    el.classList.remove('calendar-month-cell-active-range');
                });
                calendarClear[i].classList.remove('calendar-clear-link--active');
			});
		}
});