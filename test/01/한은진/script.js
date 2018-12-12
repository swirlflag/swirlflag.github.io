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
  , delta = false;
;


function changeSnapState(){isSnapState = !isSnapState;};

function findFirstActiveTab(){
  //맨처음 로딩시 누가 액티브인지 체크
};

function startSnapArea(){
  isSnapState = true;
  ++snapTabState;
  startSnapModeCss();
  gotoSnapTab(snapTabState-1);
};

function endSnapArea(){
  console.log('end');
};

function detecedSnap(){
// snap 상태가 아니며 snap을 지속적으로 찾음
  if(snapArea.offsetTop <= domEl.scrollTop){
    console.log('발견');
    startSnapArea();
  };
};

function gotoSnapTab(num){
  for(let i = 0; i < snapTabLeng; ++i){
    snapTab[i].classList.remove('active');
  };
  snapTab[num].classList.add('active');
};
function setDeltaYValue(event){
  delta = event.deltaY >= 0 ? true : false;
};

function allScrollEvent(){

  if(isSnapState){


  }else{
    detecedSnap();
  };

};





function startSnapModeCss(){
  // body.classList.add('catch');
  snapArea.classList.add('catch');
};

function endSnapModeCss(){
  snapArea.classList.remove('catch');
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
window.addEventListener('mousewheel', function(event){
  setDeltaYValue(event);
});
