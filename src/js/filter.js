window.addEventListener('DOMContentLoaded', ()=>{
    let filterBlock = document.querySelector('.main-content-sidebar'),
        filterBtn = document.querySelector('.main-content-main--heading-filter'),
        searchRoomOverlay = document.querySelector('.searchRoom-overlay'),
        closeOverlay = document.querySelector('.searchRoom-overlay-close');

    filterBtn.addEventListener('click', ()=>{
        let height = document.body.clientHeight;

        searchRoomOverlay.style = `display:block; height:${height}px;`;
        setTimeout(()=>{
            searchRoomOverlay.classList.add('searchRoom-overlay-active');
        }, 1);
        filterBlock.classList.add('main-content-sidebar-active');

    });
    closeOverlay.addEventListener('click', ()=>{
        filterBlock.classList.remove('main-content-sidebar-active');

        searchRoomOverlay.classList.remove('searchRoom-overlay-active');

        setTimeout(()=>{
            searchRoomOverlay.style = `display:none;`;
        }, 100);
    });
});