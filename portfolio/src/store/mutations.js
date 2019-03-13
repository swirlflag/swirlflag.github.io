export default {


  LOAD_isMobile(state) {
    state.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },

  // LOAD_finshedDataLoad(state){
  //   // console.log('LOAD DATA');
  //   // console.log('content :', state.contentsData);
  //   // console.log('admin :', state.adminData);
  //   this.commit('SET_gnbSelect');
  //   this.commit('ACT_gnbClose');
  // },
  
  SET_MobileActiveElements(state,elements){
    
    if(!this.GET_isMobile){return};
    
    state.mobileActiveElements = document.querySelectorAll(elements);
    for(let i = 0; i < this.mobileActiveElements.length; ++i){
      this.mobileActiveElements[i].addEventListener('touchstart', () =>{
        this.mobileActiveElements[i].classList.add('mobile-active');
      });
      this.mobileActiveElements[i].addEventListener('touchend', () =>{
        this.mobileActiveElements[i].classList.remove('mobile-active');
      });
    }

  },

  SET_adminData(state,data){
    state.adminData = data;
  },

  SET_appData(state,data){
    state.contentsData = data['contents-data'];
    state.adminData = data['admin-data'];
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

}
