export default{
  OPR_scrollCorrection(state,el){
    el.addEventListener('scroll', function(){
      if(el.offsetHeight + el.scrollTop != el.scrollHeight){return};
      el.scrollTop = (el.scrollHeight - (el.scrollHeight - el.scrollTop)) - 0.1;
    });
  },

  OPR_gnbOpen(state){
    state.gnb.classList.remove('close');
  },  
  
  OPR_gnbClose(state){
    state.gnb.classList.add('close');
  },

  OPR_textSlide(state,{el,msg,d}){
    if(el.classList.contains('is-sl-an')){return};
    if(!d){d = 1};
    const pxDel = npx => parseInt(npx.split('px')[0]);
    const style = getComputedStyle(el);
    el.classList.add('is-sl-an');
    let wrap = document.createElement('span'),
        beforespan = document.createElement('span'),
        afterspan = document.createElement('span');
    wrap.style.display = 'inline-block';
    beforespan.style.display = 'inline-block';
    afterspan.style.display = 'inline-block';
    wrap.style.position = 'relative';
    wrap.style.transition = `all ${d}s ease`;
    beforespan.innerText = el.innerText;
    afterspan.innerText = msg;
    let decrease = {
      w : pxDel(style['padding-right']) + 
          pxDel(style['border-right']) + 
          pxDel(style['padding-left']) + 
          pxDel(style['border-left']),
      h : pxDel(style['padding-top']) + 
          pxDel(style['border-top']) + 
          pxDel(style['padding-bottom']) + 
          pxDel(style['border-bottom']),
    };
    afterspan.style.marginTop = decrease.h + 'px';
    if(style['box-sizing'] == 'border-box'){w += 2; h += 2};
    if(style['display'] == 'inline'){el.style.display = 'inline-block';};
    el.style.width = el.offsetWidth - decrease.w + 'px';
    el.style.height = el.offsetHeight - decrease.h + 'px';
    el.innerHTML = '';
    wrap.append(beforespan);
    wrap.append(document.createElement('br'));
    wrap.append(afterspan);
    el.append(wrap);
    setTimeout(()=>{wrap.style.marginTop = '-' + el.offsetHeight + 'px'},10);
    setTimeout(()=>{
      el.innerHTML = msg;
      el.classList.remove('is-sl-an');
    },d * 1000 + 10);
  },

  TEST(state, payload){
    console.log(state, payload);
  },

}