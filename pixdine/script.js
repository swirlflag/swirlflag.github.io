//(function(){

// DOM get,set CSS function
HTMLElement.prototype.css = function(prop,setValue){
  var returnStyleValue = function(t){
    var style = window.getComputedStyle(t);
    return style;
  };
  if(!arguments.length){return returnStyleValue(this)};
  var value = returnStyleValue(this)[prop];
  if(prop && !setValue){
    if(/px/g.test(value)){
      value = Math.round(value.split('px')[0]);
      if(!/[^0-9]/g.test(value)){
        value = parseInt(value);
      };
    };
    return value;
  }else if(prop && setValue){
    if(typeof setValue == 'number'){
      this.style[prop] = setValue + 'px';
      return;
    };
    var unitTest = /px|%|vw|vh|pt/gi
    ,   unit = ''
    ,   justValue = setValue
    ;
    if(unitTest.test(setValue)){
      unit = setValue.match(unitTest)
      ,justValue = setValue.split(unit)[0]
      ;
    };
    this.style[prop] = justValue + unit;
    return;
  };
};

//DOMselect
var resultDisplay = document.getElementsByClassName('result-display')[0]
,   resultValue = document.getElementsByClassName('result-value')[0]
,   decisionBtn = document.querySelector('.decision-btn .btn')
,   listBtn = document.getElementsByClassName('list-btn')[0]
,   listDisplay = document.getElementsByClassName('list-display')[0]
,   restaurantAddBtn = document.getElementsByClassName('restaurant-add-btn')[0]
,   restaurantList = document.getElementsByClassName('restaurant-list')[0]
,   restaurantAddDisplay = document.getElementsByClassName('restaurant-add-display')[0]
;

// ajax
var dataObject, jsonhttp, dataArray;

function getDataAjax(){
  jsonhttp = new XMLHttpRequest();
  jsonhttp.onreadystatechange = function() {
      if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
        dataObject = JSON.parse(jsonhttp.response);
        dataObjectReady();
      };
  };
  jsonhttp.open("GET", "data.json", true);
  jsonhttp.send();
};

function getRandomValue(json){
  var i = 0;
  for(var key in json){++i;};
  return json[Math.floor(Math.random() * i)];
};

function resultDisplayPosition(){
  var w = window.innerHeight/2 - resultDisplay.css('height')/2 -10;
  resultDisplay.css('margin-top',w);
};

function configRestaurantList(json){
  var restaurantListString = '';
  for(var key in json){
    var loopString  = '<li>' + json[key]['name'] + '</li>';
    restaurantListString += loopString;
  };
  restaurantList.innerHTML = restaurantListString;
};

function randomizingData(){

  dataArray = [];
  for(var key in dataObject){
    dataArray.push(dataObject[key]);
  };

  dataArray.sort(function(){
    return Math.random() - Math.random();
  })
};

function decisionBtnAction(){
  var sto;
  clearTimeout(sto);
  decisionBtn.classList.add('touch');
  sto = setTimeout(function(){
    decisionBtn.classList.remove('touch');
  },200);
};

function listBtnToggle(){
  if(listBtn.classList.contains('open')){
    listBtn.classList.remove('open');
  }else{
    listBtn.classList.add('open');
  };
};

function listDisplayToggle(){
  if(listDisplay.classList.contains('open')){
    listDisplay.classList.remove('open');
  }else{
    listDisplay.classList.add('open');
  };
};

function writeInResultValue(ran){
  resultValue.innerText = ran['name'] ;
};

function resultValueAction(){
  var qu01,qu02;
  var randomValue;
  qu01 = setTimeout(function(){
    resultValue.classList.remove('conclusion');
    resultValue.classList.add('calculating');
    randomValue = getRandomValue(dataArray);
  },400);
  qu02 = setTimeout(function(){
    writeInResultValue(randomValue);
    resultValue.classList.remove('calculating');
    resultValue.classList.add('conclusion');
  },1000);
};

function restaurantAddDisplayAction(bool){
  bool ? restaurantAddDisplay.classList.add('open') : restaurantAddDisplay.classList.remove('open')
};


function decisionBtnTouchstart(){
  decisionBtn.addEventListener('touchstart', function(){
    decisionBtnAction();
    resultValueAction();
  });
};

function listBtnTouchstart(){
  listBtn.addEventListener('touchstart', function(){
    listBtnToggle();
    listDisplayToggle();
  });
};

function restaurantAddBtnTouchstart(){
  restaurantAddBtn.addEventListener('touchstart', function(){
    restaurantAddDisplayAction(true);
    setTimeout(function(){
        restaurantAddDisplayAction(false);
    },900)
  });
};

function restaurantListTouchStart(){
//   restaurantList.addEventListener('touchstart', function(){
//     restaurantAddDisplayAction(false);
//   });
};

function cssClassEvent(){
  decisionBtnTouchstart();
  listBtnTouchstart();
  restaurantListTouchStart();
  restaurantAddBtnTouchstart();
};

function dataObjectReady(){
  randomizingData();
  configRestaurantList(dataArray);
};

function documentDraggableSet(){
  document.body.setAttribute('oncontextmenu','return false');
  document.body.setAttribute('ondragstart','return false');
  document.body.setAttribute('onselectstart','return false');
};

window.addEventListener('DOMContentLoaded', function(){
  resultDisplayPosition();
  documentDraggableSet();
  getDataAjax();
  dataObjectReady();
  cssClassEvent();
});
window.addEventListener('resize', function(){
  resultDisplayPosition();
});

//})();//f
