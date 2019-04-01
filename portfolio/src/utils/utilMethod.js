
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
  
  preventDuplicationAnimation(element,className,duration){
    if(!className){className = 'is-animating'}
    if(element.classList.contains(className)){return true};
    if(!duration){duration = 1};
    element.classList.add(className);
    setTimeout(()=>{
      element.classList.remove(className);
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

  getNowURL(){
    return '/' + window.location.href.replace('https://' && 'http://', '').split('/').slice(1).join('/');
  },
  utc(dateobj){
    return Date.UTC(dateobj.y, dateobj.m,dateobj.d);
  },
  removeUnderbar(string){
    return string.replace(/_/gi, ' ');
  },
  blankToUnderbar(string){
    // return string.replace(/_/gi, ' ');
  },

  dateNumberToObject(datenum){
    datenum = datenum.toString(10);
    return {
      y : "20" + datenum.substring(0,2),
      m : datenum.substring(2,4),
      d : datenum.substring(4,6),
    }
  },
  
  Slider(){
    let container = document.getElementById('content-image-container');
    let itemList = document.getElementsByClassName('content-image-item') ;
  
    let leng = itemList.length;
    // console.log(leng);

    let index = 0;

    return {
      prev(){
        --index;
        if(index == -1){
          index = leng -1;
        };
        container.style.marginLeft = - container.offsetWidth / leng * index + 'px';

      },
      next(){
        ++index;
        if(index == leng){
          index = 0
        };
        container.style.marginLeft = - container.offsetWidth / leng * index + 'px';

      },
    }
  },

  




      // const loop = (cd,fn) => {
    //   const vf = typeof cd == 'function' ? cd() : cd;
    //   vf ? fn() : setTimeout(()=>{loop(cd,fn)},100);
    // };

};