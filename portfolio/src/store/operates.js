import u from '../utils/utilMethod.js'
export default{
  OPR_scrollCorrection(state,el){
    el.addEventListener('scroll', function(){
      if(el.offsetHeight + el.scrollTop != el.scrollHeight){return};
      el.scrollTop = (el.scrollHeight - (el.scrollHeight - el.scrollTop)) - 0.1;
    });
  },

  OPR_gnbOpen(state){
    // console.log('gnb open check before');
    // console.log('gnbopen')
    state.gnb.classList.remove('close');
    // console.log('gnb open check after');
    this.commit('SET_isGnbOpen', true);
  },  
  
  OPR_gnbClose(state){
    state.gnb.classList.add('close');
    this.commit('SET_isGnbOpen', false);
  },


  // 존나대충 만들고 나중에 고치자..
  OPR_textSlide(state,{el,msg,type,d}){
    if(el.classList.contains('is-text-sliding')){return};
    if(!d){d = 1};
    const style = getComputedStyle(el);
    el.classList.add('is-text-sliding');
    let wrap = document.createElement('span'),
        beforespan = document.createElement('span'),
        afterspan = document.createElement('span');
    wrap.style.display = 'inline-block';
    beforespan.style.display = 'inline-block';
    afterspan.style.display = 'inline-block';
    wrap.style.position = 'relative';
    

    beforespan.innerText = el.innerText;
    afterspan.innerText = msg;
    
    let decrease = {
      w : u.pxDel(style['padding-right']) + 
          u.pxDel(style['border-right']) + 
          u.pxDel(style['padding-left']) + 
          u.pxDel(style['border-left']),
      h : u.pxDel(style['padding-top']) + 
          u.pxDel(style['border-top']) + 
          u.pxDel(style['padding-bottom']) + 
          u.pxDel(style['border-bottom']),
    };

    afterspan.style.marginTop = decrease.h + 'px';
    if(style['box-sizing'] == 'border-box'){w += 2; h += 2};
    if(style['display'] == 'inline'){el.style.display = 'inline-block';};
    el.style.width = el.offsetWidth - decrease.w + 'px';
    el.style.height = el.offsetHeight - decrease.h + 'px';
    el.innerHTML = '';

    if(type == 'bottom-top'){
      wrap.append(beforespan);
      wrap.append(document.createElement('br'));
      wrap.append(afterspan);
      wrap.style.transition = `all ${d}s ease`;
      el.append(wrap);
      setTimeout(()=>{wrap.style.marginTop = '-' + el.offsetHeight + 'px'},10);
      
    }else if(type == 'right-left' || type == 'left-right'){
        wrap.append(beforespan);
        wrap.append(afterspan);
        wrap.style.width = el.offsetWidth - decrease.w + 'px';
        wrap.style.height = el.offsetHeight - decrease.h + 'px';
        beforespan.style.position = 'absolute';
        afterspan.style.position = 'absolute';
        beforespan.style.left = '0%'
        beforespan.style.top = '0'
        afterspan.style.top = '0'
        beforespan.style.transition = `all ${d}s ease`;
        afterspan.style.transition = `all ${d}s ease`;
        el.append(wrap);
        if(type == 'right-left'){
          afterspan.style.left = el.offsetWidth + 'px'
          setTimeout(()=>{
            beforespan.style.left = - el.offsetWidth +'px';
            afterspan.style.left = 0;
          },10);
        }else if(type == 'left-right'){
          afterspan.style.left = - el.offsetWidth + 'px'
          setTimeout(()=>{
            beforespan.style.left = el.offsetWidth +'px';
            afterspan.style.left = 0;
          },10);
        }




    };

    setTimeout(()=>{
      el.innerHTML = msg;
      el.classList.remove('is-text-sliding');
    },d * 1000 +10);
  },
  

  OPR_mobileActiveTouchStart(state,e){
    console.log(11);
    if(!this.getters.GET_isMobile){return};
    console.log(e);
    e.target.classList.add('mobile-active');
  },
  
  OPR_mobileActiveTouchEnd(state,e){
    e.target.classList.remove('mobile-active');
  },

}