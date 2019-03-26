export default{

  GET_isMobile(state){
    return state.isMobile;
  }, 
  GET_isIOS(state){
    return state.isIOS;
  }, 
  GET_isPaging(state){
    return state.isPaging;
  },

  GET_adminData(state){
    return state.adminData;
  },

  GET_categoryData(state){
    return state.categoryData;
  },

  GET_contentsData(state){
    return state.contentsData;
  },

  GET_updateDate(state){
    return state.updateDate;
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

  GET_nowGnbContentItem(state){
    return state.nowGnbContentItem;
  },

  GET_contentsItem(state){
    return state.contentsItem;
  },

  GET_isMini(state){
    return state.isMini;
  },

}
