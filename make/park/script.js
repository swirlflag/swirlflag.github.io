

const data = {
    "lawyer" : {
        1 : {
            "q" : "당신은 누구를 발견했다.",
            "a" : {
                "o" : "인사한다",
                "x" : "무시한다",
            },
            "image" : "image.gif",
            "sound" : "sound.mp3",
        },
        
        "end" : {

        },
        
    },
}

let app = document.querySelector('#app');
let process = document.querySelector('#nav-process');
let timer = document.querySelector('#nav-timer');
let title = document.querySelector('#title');

let	page_splash1 = document.querySelector('#page-splash-1');
let page_splash2 = document.querySelector('#page-splash-2');
let page_birth = document.querySelector('#page-birth');



const memofn = () => {
    
    let memo = document.querySelector('#memo');
    let memobtn = document.querySelector('#memobtn');

    if(localStorage.memo == 'on'){
        memo.classList.remove('hide');
    }else{
        memobtn.classList.remove('hide');
    }
    
    memo.addEventListener('click', ()=>{
        memo.classList.add('hide');
        memobtn.classList.remove('hide');
        localStorage.memo = 'off';
    });

    memobtn.addEventListener('click', ()=>{
        memo.classList.remove('hide');
        memobtn.classList.add('hide');
        localStorage.memo = 'on';
    });
};


const initSplash = () =>{


    setTimeout(()=>{
    	page_splash1.classList.add('a');

        setTimeout(()=>{
        	page_splash1.classList.remove('a');
            page_splash2.classList.add('a');

            setTimeout(()=>{
                page_splash2.classList.remove('a');
                page_birth.classList.add('a');
                process.classList.add('a');
                timer.classList.add('a');
                title.classList.add('a');
                app.classList.add('a');
            },1000);    

        },1000);    

    },0);   
    
};  

const initBirth = () => {
    

}


const allInit = (e) => {
    memofn();
    initSplash();
    initBirth();
    
    
};

document.addEventListener('DOMContentLoaded', allInit);