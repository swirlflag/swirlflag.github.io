
const curry = (f) => (a,..._) => {
  return _.length ? f(a,..._) : (..._) => f(a,..._);
}

export default{
  utest(){
    console.log(u);
    console.log(this);
  },

  map : curry((f,iter)=>{
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while(!(cur = iter.next()).done){
      const a = cur.value;
      res.push(f(a));
    }
    return res;
  }),

  filter : curry((f, iter)=>{
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while(!(cur = iter.next()).done){
      const a = cur.value;
      if(f(a)){res.push(a)};
    }
    return res;
  }),
  
  pxDel(npx){
    return parseInt(npx.split('px')[0]);
  },

  zs(n){
    if(typeof n != 'number'){n = parseInt(n)};
    return n = n < 10 ? '0' + n : n;
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

  scrollCorrection(el){
    el.addEventListener('scroll', function(){
      if(el.offsetHeight + el.scrollTop != el.scrollHeight){return};
      el.scrollTop = (el.scrollHeight - (el.scrollHeight - el.scrollTop)) - 0.1;
    });
  },

  blankToUnderbar(string){
    return string.replace(' ', '_');
  },

};