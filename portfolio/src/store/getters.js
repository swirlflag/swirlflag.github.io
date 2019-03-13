export default{

  GET_isMobile(state){
    return state.isMobile;
  }, 

  GET_adminData(state){
    return state.adminData;
  },

  GET_contentsData(state){
    return state.contentsData;
  },

  GET_gnb(state){
    if(state.gnb == null){
      this.commit('SET_gnbSelect');
    };
    return state.gnb;
  },

  GET_gnbItems(state){
    if(state.gnbItems == null){
      state.gnb = document.getElementsByClassName('gnb-contents-item');
    }
    return state.gnbItems;
  },

}
