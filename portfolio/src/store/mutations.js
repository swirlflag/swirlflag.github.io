export default {

  LOAD_isMobile(state) {
    state.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },
  
  SET_adminData(state,data){
    state.adminData = data;
  },

  SET_contentsData(state,data){
    state.contentsData = data;
  },

}