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

var domEl = document.documentElement;

var body = document.body
  , snapArea = document.querySelector('.snap-area')
  , snapTab = document.querySelectorAll('.snap-area .snap-area-tab')
;

//value
var isSnapMode = false
  , isScrollBefore
  , snapTabState = 0
  , snapTabLeng = snapTab.length
  , delta = false
  , isTabMoveing = false
;

function justPreventDefault(e){e.preventDefault()};

function preventDocumentScroll(){
  console.log('스크롤 막음!');
  document.addEventListener('scroll', justPreventDefault);
  document.addEventListener('mousewheel', justPreventDefault);
};

function restoreDocumentScroll(){
  console.log('스크롤 재생!');
  document.removeEventListener('scroll', justPreventDefault);
  document.removeEventListener('mousewheel', justPreventDefault);
};

function isScrollBeforeSet(){
  snapArea.offsetTop > domEl.scrollTop ? isScrollBefore = true : isScrollBefore = false;
};

function changeSnapState(){
  isSnapMode = !isSnapMode;
};

function findFirstActiveTab(){
  isScrollBefore ? gotoSnapTab(0) : gotoSnapTab(snapTabLeng-1);
};

function syncScrollSnapArea(){
  domEl.scrollTop = snapArea.offsetTop;
};

function tabMovingDelay(sec){
  isTabMoveing = true;
  if(sec < 100){sec = sec *1000};
  setTimeout(function(){
    isTabMoveing = false;
  },sec)
};


function allScrollEvent(){
  if(isSnapMode && !isTabMoveing){
    if(delta){
      nextSnapTab();
    }else{
      prevSnapTab();
    };
  }else{
    detecedSnap();
  };
};


function snapAreaSizeSet(){
  snapArea.css('height', window.innerHeight + 'px');
};

function cssPotionSet(){
  snapAreaSizeSet();
};

window.addEventListener('DOMContentLoaded', function(){
  isScrollBeforeSet();
  findFirstActiveTab();
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
