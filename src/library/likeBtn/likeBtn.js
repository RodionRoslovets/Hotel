window.addEventListener('DOMContentLoaded', ()=>{
    let likeWrap = document.getElementsByClassName('like-wrapper'),
        likeBorder = document.getElementsByClassName('like__border'),
        likeHeart = document.getElementsByClassName('like__heart-icon'),
        likeNum = document.getElementsByClassName('like__num'),
        likeNumIn = document.getElementsByClassName('.like__num-inner');
    
    for(let i = 0; i < likeWrap.length; i++){
        likeWrap[i].addEventListener('click', ()=>{
            likeBorder[i].classList.toggle('like__border__active');
            likeHeart[i].classList.toggle('like__heart-icon__active');
            if(likeHeart[i].classList.contains('like__heart-icon__active')){
                likeHeart[i].innerHTML = 'favorite';
            } else {
                likeHeart[i].innerHTML = 'favorite_border';
            }
            likeNum[i].classList.toggle('like__num__active');
            if(likeNum[i].classList.contains('like__num__active')){
                likeNumIn[i].innerHTML = +(likeNumIn[i].innerHTML) + 1;
            } else {
                likeNumIn[i].innerHTML = +(likeNumIn[i].innerHTML) - 1;
            }
        });
    }
    
});