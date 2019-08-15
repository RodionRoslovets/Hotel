window.addEventListener('DOMContentLoaded', ()=>{
    let likeWrap = document.getElementsByClassName('likeBtn-wrapper'),
        likeBorder = document.getElementsByClassName('likeBtnBorder'),
        likeHeart = document.getElementsByClassName('likeBtn--heart-icon'),
        likeNum = document.getElementsByClassName('likeBtn--num'),
        likeNumIn = document.getElementsByClassName('likeBtn--num-inner');
    
    for(let i = 0; i < likeWrap.length; i++){
        likeWrap[i].addEventListener('click', ()=>{
            likeBorder[i].classList.toggle('likeBtnBorder-active');
            likeHeart[i].classList.toggle('likeBtn--heart-icon-active');
            if(likeHeart[i].classList.contains('likeBtn--heart-icon-active')){
                likeHeart[i].innerHTML = 'favorite';
            } else {
                likeHeart[i].innerHTML = 'favorite_border';
            }
            likeNum[i].classList.toggle('likeBtn--num-active');
            if(likeNum[i].classList.contains('likeBtn--num-active')){
                likeNumIn[i].innerHTML = +(likeNumIn[i].innerHTML) + 1;
            } else {
                likeNumIn[i].innerHTML = +(likeNumIn[i].innerHTML) - 1;
            }
        });
    }
    
});