
var ul = document.getElementsByTagName('ul')
  , li = document.getElementsByTagName('li')
;



for(let i = 0; i < li.length; ++i){
  li[i].addEventListener('click', function(){
    console.log(this);;
    this.classList.add('click');
  });
};



window.addEventListener('DOMContentLoaded', function(){
  // fn();
})
