(function(){
  if(HTMLElement.prototype.css){return false;};
  HTMLElement.prototype.css = function(prop,value){
    // if(typeof prop == 'number' || typeof value == 'number'){
    //   throw "입력형태가 올바르지 않습니다. HTMLElement.css('prop','value') || HTMLElement.css({'prop' : 'value'})"
    // };
    var _this = this;
    function returnStyle(){return window.getComputedStyle(_this);};
    if(!arguments.length){return returnStyle()};
    if(typeof prop  == 'object'){
      for(key in prop){
        if(typeof prop[key] == 'number'){
          console.log(1);
          if(!(prop[key] == 'opacity' && prop[key] == 'z-index')){
            _this.style[key] = prop[key] + 'px';
          }else{
            _this.style[key] = prop[key];
          };
        };
      };
    }else{
      if(prop && !value){
        value = returnStyle()[prop];
        if(/px/g.test(value)){value = parseInt(value);};
        return value;
      }else if(prop && value){

        if(typeof value == 'number'){
          if(!(prop == 'opacity' && prop == 'z-index')){
            _this.style[prop] = value + 'px';
          }else{
            _this.style[prop] = value;
          };
        }else{
          _this.style[prop] = value;
        };
      };
    };
  };
})();

//select
var doc = document.documentElement
  , body = document.body
  , snapArea = document.querySelector('.snap-area')
  , snapTab = document.querySelectorAll('.snap-area .snap-area-tab')
;

var agent = navigator.userAgent.toLowerCase();
agent.indexOf("chrome") != -1 ? doc = document.documentElement : doc = document.body;
//value
var isSnapMode = false
  , isScrollBefore
  , snapTabState = 0
  , snapTabLeng = snapTab.length
  , delta = false
  , isTabMoveing = false
  , snapEndDelay = false
;

function justPreventDefault(e){
  e.preventDefault()
};

function preventDocumentScroll(){
  document.addEventListener('scroll', justPreventDefault);
  document.addEventListener('mousewheel', justPreventDefault);
};

function restoreDocumentScroll(){
  document.removeEventListener('scroll', justPreventDefault);
  document.removeEventListener('mousewheel', justPreventDefault);
};

function isScrollBeforeSet(){
  snapTabState == 0 ? isScrollBefore = true : isScrollBefore = false;
};

function changeSnapState(){
  isSnapMode = !isSnapMode;
};

function findFirstActiveTab(){
  isScrollBefore ? gotoSnapTab(0) : gotoSnapTab(snapTabLeng-1);
};

function syncScrollSnapArea(){
  doc.scrollTop = snapArea.offsetTop;
};

function tabMovingDelay(sec){
  isTabMoveing = true;
  if(!sec){sec = 1000};
  if(sec < 100){sec = sec *1000};
  setTimeout(function(){
    isTabMoveing = false;
  },sec)
};

function startSnapMode(){
  isSnapMode = true;
  snapArea.classList.add('catch');
  syncScrollSnapArea();
  preventDocumentScroll();
  gotoSnapTab(snapTabState);
  isScrollBeforeSet();
};

function endSnapMode(){
  isSnapMode = false;
  snapArea.classList.remove('catch');
  syncScrollSnapArea();
  restoreDocumentScroll();
  isScrollBeforeSet();
  snapEndDelay = true;
  setTimeout(function(){
    snapEndDelay = false;
  },300);
};

function detecedSnap(){
  if(isScrollBefore){
    if(snapArea.offsetTop <= doc.scrollTop){
      startSnapMode();
    };
  }else{
    if(snapArea.offsetTop > doc.scrollTop){
      startSnapMode();
    };
  };
};

function gotoSnapTab(idx){
  for(let i = 0; i < snapTabLeng; ++i){
    snapTab[i].classList.remove('active');
  };
  snapTab[idx].classList.add('active');
};

function setDeltaYValue(event){
  delta = event.deltaY >= 0 ? true : false;
};

function prevSnapTab(){
  --snapTabState;
  if(snapTabState < 0){
    snapTabState = 0;
    endSnapMode();
    return;
  };
  tabMovingDelay();
  gotoSnapTab(snapTabState);
};

function nextSnapTab(){
  ++snapTabState;
  if(snapTabState > snapTabLeng-1){
    snapTabState = snapTabLeng-1;
    endSnapMode();
    return;
  };
  tabMovingDelay();
  gotoSnapTab(snapTabState);
};

function allScrollEvent(){
  if(isTabMoveing){return};
  if(isSnapMode){
    delta ? nextSnapTab() : prevSnapTab();
  }else{
    if(!snapEndDelay){detecedSnap()};
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
  allScrollEvent();
});
