export default {
  GET_gnb(state){
    if(state.gnb == null){
      state.gnb = document.getElementById('gnb');
    };
    return state.gnb;
  },

  GET_gnbItems(state){
    if(state.gnbItems == null){
      state.gnb = document.getElementsByClassName('gnb-contents-item');
    }
    return state.gnbItems;
  }

}