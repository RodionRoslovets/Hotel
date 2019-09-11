window.addEventListener('DOMContentLoaded', ()=>{
    let loginBtn = document.querySelectorAll('.header__login-button'),
        registerBtn = document.querySelectorAll('.header__register-button'),
        enterForm = document.querySelectorAll('.main__enterForm'),
        regForm = document.querySelectorAll('.main__regForm');

    for(let i = 0; i < loginBtn.length;i++){
        loginBtn[i].addEventListener('click', ()=>{
            if(regForm[i].classList.contains('main__regForm__active')){
                regForm[i].classList.remove('main__regForm__active');
                
                setTimeout(()=>{
                    enterForm[i].classList.add('main__enterForm__active');
                }, 100);     
            }
        });
    }
    for(let i = 0; i < registerBtn.length;i++){
        registerBtn[i].addEventListener('click', ()=>{
            if(enterForm[i].classList.contains('main__enterForm__active')){
                setTimeout(()=>{
                    
                }, 100);
                enterForm[i].classList.remove('main__enterForm__active');
                setTimeout(()=>{
                    regForm[i].classList.add('main__regForm__active');
                }, 100);  
                
            }
        });
    }
});