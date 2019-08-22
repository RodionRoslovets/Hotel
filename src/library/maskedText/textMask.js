window.addEventListener('DOMContentLoaded', ()=>{
    let inputMasked = document.getElementsByClassName('input-masked')[0];
    
    inputMasked.addEventListener('input', ()=>{
       let splited = inputMasked.value.split('');
       
       if(splited.length == 2){
            inputMasked.value += '.';
       } else if(splited.length == 5){
           inputMasked.value += '.';
       } else if(splited.length >=11){
            splited.pop();
            inputMasked.value = splited.join('');
       }
    });
});