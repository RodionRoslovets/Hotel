window.addEventListener('DOMContentLoaded', ()=>{
    let monthHeading = document.querySelectorAll('.calendar-month'),
        yearHeading = document.querySelectorAll('.calendar-year'),
        months = [
            {
                name:'Январь',
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
                name:'Май',
                length:31
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
        el.innerHTML = months[month.getMonth()].name + ' ';
    });
    yearHeading.forEach(el =>{
        el.innerHTML = month.getFullYear();
    });
    //Заполняем таблицу числами 
    function fillTable(){
        //очистили таблицу
         table.forEach(el => {
            el.innerHTML = '';
        }); 

        let day,
            date = month.getDate();
        //вернулись к первому дню месяца
        for(let i = date; i >= 1; i--){
            let firstDay = new Date(month.getFullYear(), month.getMonth(), i);
            day = firstDay.getDay();
            date = firstDay.getDate();
        }
        
        if(day == 0){
            day = 7;
        }
        // заполнили таблицу
        
         for(let i = 0; i < months[month.getMonth()].length/7; i++){
            let tableRow = document.createElement('tr');
            
            for(let k = 0; k < 7; k++){
                let tableCell = document.createElement('td');
                tableCell.classList.add('calendar-month-cell');
                tableCell.innerHTML = 1;
                tableRow.appendChild(tableCell);
            }
        
            table[0].appendChild(tableRow);

        } 

        let dateCell = document.querySelectorAll('.calendar-month-cell');

        for(let j = day - 1; date <= months[month.getMonth()].length; j++){
            dateCell[j].innerHTML = date;
            date++;
        } 
       
    }
    fillTable();
    
    

    //Назначаем функции стрелкам
    for(let i = 0; i < arrowRight.length; i++){
        arrowRight[i].addEventListener('click', ()=>{
            let nextMonth = month.getMonth() + 1;
            if(nextMonth > 0 && nextMonth <= 11){
                monthHeading[i].innerHTML = months[nextMonth].name + ' ';
                month.setMonth(nextMonth);
            } else {
                nextMonth = 0;
                monthHeading[i].innerHTML = months[nextMonth].name + ' ';
                month.setMonth(nextMonth);
            }
            if(nextMonth == 0){
                let nextMonth = month.getFullYear() + 1;
                yearHeading[i].innerHTML = nextMonth;
                month.setFullYear(nextMonth);
            }
            fillTable();
        });
    }
    for(let i = 0; i < arrowLeft.length; i++){        
        arrowLeft[i].addEventListener('click', ()=>{
            let prevMonth = month.getMonth() - 1;
            if(prevMonth >= 0 && prevMonth < 11){
                monthHeading[i].innerHTML = months[prevMonth].name + ' ';
                month.setMonth(prevMonth);
            } else {
                prevMonth = 11;
                monthHeading[i].innerHTML = months[prevMonth].name + ' ';
                month.setMonth(prevMonth);
            }
            if(prevMonth == 11){
                let prevYear = month.getFullYear() - 1;
                yearHeading[i].innerHTML = prevYear;
                month.setFullYear(prevYear);
            } 
            fillTable();           
        });
    }
    

});