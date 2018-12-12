var t = document.querySelector('.snap-area');

//무시하삼
(function(){
  if(HTMLElement.prototype.css){return false;};
  HTMLElement.prototype.css = function(prop,value){
    if(typeof prop == 'number' || typeof value == 'number'){
      throw "입력형태가 올바르지 않습니다. HTMLElement.css('prop','value') || HTMLElement.css({'prop' : 'value'})"
    };
    var _this = this;
    function returnStyle(){return window.getComputedStyle(_this);};
    if(!arguments.length){return returnStyle()};
    if(typeof prop  == 'object'){
      for(key in prop){_this.style[key] = prop[key];};
    }else{
      if(prop && !value){
        value = returnStyle()[prop];
        if(/px/g.test(value)){value = parseInt(value);};
        return value;
      }else if(prop && value){_this.style[prop] = value;};
    };
  };
})();

//select

var domEl = document.documentElement;

var body = document.body
  , snapArea = document.querySelector('.snap-area')
  , snapTab = document.querySelectorAll('.snap-area .snap-area-tab')
;

//value
var isSnapState = false
  , snapTabState = 0
  , snapTabLeng = snapTab.length
;


function changeSnapState(){isSnapState = !isSnapState;};


function startSnapArea(){
  console.log('start');
  cssSnapToggle();
};

function endSnapArea(){
  console.log('end');
};

function allScrollEvent(){
  if(isSnapState){
    //종료 조건은 임시임
    if(snapArea.offsetTop >= domEl.scrollTop){
      changeSnapState();
      endSnapArea();
    };
  }else{
    if(snapArea.offsetTop <= domEl.scrollTop){
      changeSnapState();
      startSnapArea();
    };
  };
};







function cssSnapToggle(){
  // body.classList.toggle('catch');
  snapArea.classList.toggle('catch');
};

function snapAreaSizeSet(){
  snapArea.css('height', window.innerHeight + 'px');
};

function cssPotionSet(){
  snapAreaSizeSet();
};

window.addEventListener('DOMContentLoaded', function(){
  cssPotionSet();
});

window.addEventListener('resize', function(){
  cssPotionSet();
});

window.addEventListener('scroll', function(){
  allScrollEvent();
});
