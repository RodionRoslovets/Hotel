window.addEventListener('DOMContentLoaded', ()=>{
    let loginBtn = document.querySelectorAll('.header--login-button'),
        registerBtn = document.querySelectorAll('.header--register-button'),
        enterForm = document.querySelectorAll('.registration-main-enterForm'),
        regForm = document.querySelectorAll('.registration-main-regForm');

    for(let i = 0; i < loginBtn.length;i++){
        loginBtn[i].addEventListener('click', ()=>{
            if(regForm[i].classList.contains('registration-main-regForm--active')){
                regForm[i].classList.remove('registration-main-regForm--active');
                
                setTimeout(()=>{
                    enterForm[i].classList.add('registration-main-enterForm--active');
                }, 100);     
            }
        });
    }
    for(let i = 0; i < registerBtn.length;i++){
        registerBtn[i].addEventListener('click', ()=>{
            if(enterForm[i].classList.contains('registration-main-enterForm--active')){
                setTimeout(()=>{
                    
                }, 100);
                enterForm[i].classList.remove('registration-main-enterForm--active');
                setTimeout(()=>{
                    regForm[i].classList.add('registration-main-regForm--active');
                }, 100);  
                
            }
        });
    }
});