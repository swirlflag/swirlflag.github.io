export default {
  scrollCorrection(state,el){
    el.addEventListener('scroll', function(){
      if(el.offsetHeight + el.scrollTop != el.scrollHeight){return};
      el.scrollTop = (el.scrollHeight - (el.scrollHeight - el.scrollTop)) - 0.1;
    });
  },
}