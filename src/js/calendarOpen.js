window.addEventListener('DOMContentLoaded', ()=>{
    let dateDropArrow = document.querySelectorAll('.date-dropdown--dropdown-arrow'),
        dateCalendar = document.querySelectorAll('.calendar')[0];

    for(let i = 0; i < dateDropArrow.length; i++){
        dateDropArrow[i].addEventListener('click', ()=>{
            if (!dateCalendar.classList.contains('calendar-active')) {
                dateCalendar.style = "display:block;";
                setTimeout(() => {
                    dateCalendar.classList.add('calendar-active');
                }, 100);
            } else {
                dateCalendar.classList.remove('calendar-active');
                setTimeout(() => {
                    dateCalendar.style = "";
                }, 100);
            } 
        });
    }    
});