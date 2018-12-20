
var data = [
  '신지혜'
  ,'임경권'
  ,'강윤석'
  ,'이태석'
  ,'김주희'
  ,'이근욱'
  ,'김영주'
  ,'김준곤'
  ,'김아름'
  ,'강승모'
  ,'강필승'
  ,'강순용'
  ,'남궁선'
  ,'김진우'
  ,'이진우'
  ,'홍세희'
  ,'양은주'
  ,'황규연'
  ,'민지영'
  ,'김혜정'
  ,'황수빈'
  ,'박초현'
  ,'조하영'
  ,'박아름'
  ,'이성열'
  ,'하승호'
  ,'강현묵'
  ,'김영승'
  ,'황대훈'
  ,'정겨운'
  ,'오은경'
  ,'임상현'
  ,'박진호'
  ,'임재욱'
  ,'이지은'
  ,'이현재'
  ,'은희현'
  ,'윤승환'
  ,'김효선'
  ,'윤숙연'
  ,'임재광'
  ,'신동주'
  ,'오지은'
  ,'박세진'
  ,'임지혜'
  ,'정유선'
  ,'박미지'
  ,'유경원'
  ,'김종근'
  ,'김성남'
  ,'김지혜'
  ,'지은주'
  ,'양정원'
  ,'노건진'
  ,'조한'
  ,'문소영'
  ,'박보현'
  ,'장혜연'
  ,'한진아'
  ,'함수진'
  ,'김승호'
  ,'이혜원'
  ,'이솔이'
  ,'나지혜'
  ,'김윤정'
  ,'배수현'
  ,'이미경'
  ,'김혜원'
  ,'김준영'
  ,'김현민'
  ,'윤미선'
  ,'강성주'
  ,'전미경'
  ,'유승희'
  ,'마승현'
  ,'권성은'
  ,'조송희'
  ,'나유진'
  ,'최은정'
  ,'김미화'
  ,'김나영'

];
data.sort(function(a, b){return 0.5 - Math.random()});

var getRandomColor = () => {
  return '#' + (Math.random()*0xFFFFFF<<0).toString(16);
};

function getRandomColorRed() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

var h1 = document.querySelector('h1')
  , start = document.querySelector('.start')
  , allwrap = document.querySelector('.allwrap')
  , waitlist = document.querySelector('.wait-list')
  , waitlistSpan
  , pickarea = document.querySelector('.pick-area')
  , picklist = document.querySelector('.pick-list')
;

var setMiddle = (el) => {
  pl = el.parentElement;
  el.style.top = getComputedStyle(pl)['height'].split('px')[0]/2 - getComputedStyle(el)['height'].split('px')[0]/2 + 'px'
};

var setCSSPosition = () => {
  setMiddle(h1);
};

var addPicklist = (t) => {
  var li = document.createElement('li')
    , span = document.createElement('span')
  ;
  span.append(t.innerText);
  li.append(span);
  span.style.background = getRandomColor();
  picklist.append(li);
  pickarea.scrollTo({
    top: pickarea.scrollHeight,
	  left: 0,
    behavior: 'smooth'
  });
  span.addEventListener('click', function(){
    pickItemClickEvent(this,t);
  });
  setTimeout(function(){
    span.classList.add('show');
  },300);
};

var waitItemClickEvent = (t) => {
  if(!(t.classList.contains('pick'))){
    t.classList.add('pick');
    addPicklist(t);
  };
};

var pickItemClickEvent = (t,waititem) => {
  waititem.classList.remove('pick');
  t.classList.remove('show');
  setTimeout(()=>{
    t.parentNode.style.height = '0';
    t.parentNode.style.marginBottom = '0';
  },200);
  setTimeout(()=>{
    t.parentNode.remove();
  },1100);
};

var spreadData = () => {
  for(let v of data){
    var li = document.createElement('li')
      , span = document.createElement('span')
    ;
    span.append(v);
    li.append(span);
    waitlist.append(li);
  };
  waitlistSpan = document.querySelectorAll('.wait-list li span');

  for(let i = 0 ; i < waitlistSpan.length; ++i){
    setInterval(function(){
      waitlistSpan[i].style.opacity = 1;
    },i*50);
    waitlistSpan[i].addEventListener('click', function(evt){
      waitItemClickEvent(this);
    });
  };
};


var h1Click = () => {
  start.style.opacity  = 0;
  setTimeout(function(){
    start.style.display = 'none';
    spreadData();
  },1000);
  allwrap.style.opacity = '1';
};


var readyContent = () => {
  setCSSPosition();
  h1.addEventListener('click', function(){
    h1Click();
  });
};

window.addEventListener('DOMContentLoaded', function(){
  readyContent();
});
