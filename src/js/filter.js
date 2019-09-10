window.addEventListener('DOMContentLoaded', ()=>{
    let filterBlock = document.querySelector('.main-content__sidebar'),
        filterBtn = document.querySelector('.main-content__main-filter'),
        searchRoomOverlay = document.querySelector('.searchRoom__overlay'),
        closeOverlay = document.querySelector('.searchRoom__overlay-close');

    filterBtn.addEventListener('click', ()=>{
        let height = document.body.clientHeight;

        searchRoomOverlay.style = `display:block; height:${height}px;`;
        setTimeout(()=>{
            searchRoomOverlay.classList.add('searchRoom__overlay__active');
        }, 1);
        filterBlock.classList.add('main-content__sidebar__active');

    });
    closeOverlay.addEventListener('click', ()=>{
        filterBlock.classList.remove('main-content__sidebar__active');

        searchRoomOverlay.classList.remove('searchRoom__overlay__active');

        setTimeout(()=>{
            searchRoomOverlay.style = `display:none;`;
        }, 100);
    });
});