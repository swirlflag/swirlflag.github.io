// swirlflag.js.
// 주 용도는 vanila javascripting에 도움이 되는 기능을 추가합니다
// 즉, 개인적으로 사용하려고 만든 개인적인 라이브러리입니다
// 실용성보다 연습용도 입니다.

function makeVanilaSelector(){
  if($){return }
}


// 2. css();
// HTMLElement를 jquery의 css() 기능처럼 조작하여 사용
// HTMLElement.css() => get;
// HTMLElement.css('prop') => get prop  ;
// HTMLElement.css('prop','value') => set;
// HTMLElement.css({'prop1' : 'value1', 'prop2 : value2'}) => set(object);

function makeCssToHTMLElement(){
  if(HTMLElement.prototype.css){return false;};
  HTMLElement.prototype.css = function(prop,value){
    if(typeof prop == 'number' || typeof value == 'number'){
      throw "입력형태가 올바르지 않습니다. HTMLElement.css('prop','value') || HTMLElement.css({'prop' : 'value'})"
    };
    var _this = this;
    // 전체 스타일 객체 생성
    function returnStyle(){return window.getComputedStyle(_this);};
    // 매개변수가 없으면 전체 css의 객체를 반환. 종료. -> 전제 속성 get
    if(!arguments.length){return returnStyle()};
    //객체형으로 넘어올때, -> 객체 프로퍼티대로 set
    if(typeof prop  == 'object'){
      for(key in prop){_this.style[key] = prop[key];};
    // 변수형으로 넘어올때
    }else{
      // 속성만 매개변수로 넘어올때 ->  해당 속성 get
      if(prop && !value){
        value = returnStyle()[prop];
        //여기서 숫자값이 나올때 무조건 px 이므로 'px'제거, 숫자로 변환
        if(/px/g.test(value)){value = parseInt(value);};
        return value;
      //속성과 셋팅값이 같이넘어올때 -> 해당 속성을 value 로 set
      }else if(prop && value){_this.style[prop] = value;};
    };
  };
};

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

(function(){
  makeCssToHTMLElement();
  makeVanilaSelector();
})();
