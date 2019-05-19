// (()=>{

// selecting

const isMobile = "win16|win32|win64|mac|macintel".indexOf(navigator.platform.toLowerCase()) < 0;

let closeButton = document.getElementById('close');
let resumeButton = document.getElementById('resume-button');
let stackButton = document.getElementById('stack-button');

let resumePage = document.getElementById('part1');
let stackPage = document.getElementById('part2');

let downloadCall = document.getElementById('down-call');
let downloadButton = document.getElementById('down');

let parts = document.querySelectorAll('#part1, #part2');



//method

const sorryMobile = () => {
  document.body.innerHTML = '';
  let el = document.createElement('div');
  el.innerText = '이 페이지는 모바일을 지원하지 않습니다.';
  el.classList.add('sorry');
  document.body.appendChild(el);
};

const buttonsEvent = () =>{
  resumeButton.addEventListener('click', ()=>{
    resumeButton.classList.add('on');
    stackButton.classList.remove('on');

    resumePage.classList.add('active');
    stackPage.classList.remove('active');
    closeButton.classList.add('show');
  })
  stackButton.addEventListener('click', ()=>{
    resumeButton.classList.remove('on');
    stackButton.classList.add('on');

    resumePage.classList.remove('active');
    stackPage.classList.add('active');
    closeButton.classList.add('show');
  });

  closeButton.addEventListener('click', ()=>{
    resumeButton.classList.remove('on');
    stackButton.classList.remove('on');

    resumePage.classList.remove('active');
    stackPage.classList.remove('active');
    closeButton.classList.remove('show');
  });
};

const download = () => {
  downloadCall.addEventListener('click', ()=>{
    downloadButton.classList.add('show');
    setTimeout(()=>{
      downloadButton.classList.remove('show');
    },3000);
  });

  for(let i = 0; i < parts.length; ++i){
    parts[i].addEventListener('scroll', ()=>{
      if(parts[i].scrollTop >= parts[i].scrollHeight - window.innerHeight -10){
       downloadButton.classList.add('show');
      }else{
        downloadButton.classList.remove('show');
      }
    });
  };
};

var h = document.getElementById('hello');




//control
const DOMinit = () => {
  if(isMobile){
    sorryMobile();
    return;
  }
  buttonsEvent();
  download();
}

document.addEventListener('DOMContentLoaded', DOMinit);

// })();











