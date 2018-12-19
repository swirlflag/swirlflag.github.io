
var data = [
  '아이템1'
  ,'아이템2'
  ,'아이템3'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템3'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템1'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템2'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템'
  ,'아이템d'
];

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
  // span.style.background = getRandomColor();
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
