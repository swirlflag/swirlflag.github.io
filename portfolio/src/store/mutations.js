import u from '../utils/utilMethod.js';

export default {

  LOAD_isMobile(state) {
    state.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    state.isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },

  SET_adminData(state,data){
    state.adminData = data;
  },

  SET_appData(state,data){
    state.contentsData = data['contents-data'];
    state.adminData = data['admin-data'];
    state.categoryData = data['admin-data']['category'];
    state.updateDate = u.dateNumberToObject(data['admin-data']['update-date']);
  },

  SET_putIdContentData(state){
    // console.log(state.contentsData.length);

    // for(let i = state.contentsData.length-1; i > 0; --i){
    //   console.log(state.contentsData[i]['content-name']);
    // };
    
    for(let i = 0; i < state.contentsData.length; ++i){
      // console.log(state.contentsData[i]['content-name']);
    }
  },

  SET_gnbSelect(state){
    state.gnb = document.getElementById('gnb');
  },

  SET_gnbItemsSelect(state){
    state.gnbItems = document.getElementsByClassName('gnb-contents-item');
  },

  SET_spyDefine(state){
    const spy = (()=>{
      function spy(){
        this.subscriberList = [];
      };
      spy.prototype.subscribe = function(subscriber){
        this.subscriberList.push(subscriber);
      };
      spy.prototype.unsubscribe = function(subscriber){
        this.subscriberList.remove(subscriber);
      };
      spy.prototype.action = function(response){
        for(let i = 0; i < this.subscriberList.length; ++i){
          this.subscriberList[i](response);
        };
      };
      return spy;
    })();
    state.spy = new spy();
  },

  SET_spySubscribe(state,action){
    state.spy.subscribe(action);
  },
  SET_spyUnsubscribe(state,action){
    state.spy.unsubscribe(action);
  },
  GO_spyAction(state){
    state.spy.action();
  },

  SET_isPaging(state,bool){
    state.isPaging = bool;
  },

  SET_nowURLString(state){
    state.nowUrlString = u.getNowURL();
  },

  SET_contentsData(state,data){
    state.contentsData = data;
  },

  SET_nowGnbContentItem(state,data){
    state.nowGnbContentItem = data;
  },

  SET_contentsItem(state){
    state.contentsItem = document.getElementsByClassName('gnb-contents-item ');
  },

  SET_isMini(state,data){
    state.isMini = data;
  },

  SET_routeDirectionLeft(state,bool){
    state.routeDirectionLeft = bool;
  },

  SET_isGnbOpen(state,bool){
    state.isGnbOpen = bool
  },

}
