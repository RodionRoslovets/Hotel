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
        table.forEach(el => {
            el.innerHTML = '';
        });

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

            for(let i = 0; i < dateCell.length; i++){
                if (dateCell[i].innerHTML == todayActive.getDate() && monthHeading[0].innerHTML == months[todayActive.getMonth()].name && yearHeading[0].innerHTML == todayActive.getFullYear()) {
                    dateCell[i].classList.add('today-active');
                }
            }
            
            for(let i = 0; i < dateCell.length; i++){
                dateCell[i].addEventListener('click', (e)=>{
                    dateCell[i].classList.toggle('calendar-month-cell-active');
                    
                    let cellActive = document.querySelectorAll('.calendar-month-cell-active');

                   
                    
                    if(cellActive.length > 2){
                        if(cellActive.length > 2 && e.currentTarget.innerHTML < cellActive[1].innerHTML){
                            cellActive[1].classList.remove('calendar-month-cell-active');
                        }else {
                            cellActive[0].classList.remove('calendar-month-cell-active');
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


});