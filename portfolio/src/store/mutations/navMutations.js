export default {
    
  SET_gnbSelect(state){
    state.gnb = document.getElementById('gnb');
  },

  CL_gnbClose(state){
    state.gnb.classList.remove('close');
  },
  
}