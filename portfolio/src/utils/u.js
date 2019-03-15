export default{
  utest(){
    console.log(u)
  },
  
  pxDel(npx){
    return parseInt(npx.split('px')[0]);
  },
  
  getThisIndex(parent,element){
    for(let i = 0, l = parent.length; i < l; ++i){
      if(parent[i] == element){
        return i;
      };
    };
  },
  
  preventDuplicationAnimation(element,duration){
    if(element.classList.contains('is-animating')){return true};
    if(!duration){duration = 1};
    element.classList.add('is-animating');
    setTimeout(()=>{
      element.classList.remove('is-animating');
    },duration * 1000);
    return false;
  },

};