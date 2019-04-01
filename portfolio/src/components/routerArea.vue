<template>
  <div id="router-area">
    <contnet-goto-gnb></contnet-goto-gnb>
    <transition 
    v-bind:name="transitionName" 
    v-on:before-enter="delayPagingStart" 
    v-on:after-enter="delayPagingEnd">
      <router-view :key="$route.params.name"></router-view>
    </transition>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
import bus from '../utils/bus.js';
import u from '../utils/utilMethod.js';

import contentGotoGnb from '../components/contentGotoGnb.vue';
export default {

  data(){
    return {
      nowURL : '',
      spreadElements : null,      
      transitionName : 'left-right',
      beforePath : [],
    }
  },

  components : {
    'contnet-goto-gnb' : contentGotoGnb,
  },

  computed : {
    ...mapGetters([
      'GET_isPaging',
      'GET_isMobile',
      'GET_isMini',
      'GET_routeDirectionLeft',
      'GET_isGnbOpen',
    ]),

    routerArea : () => document.getElementById('router-area'),
  },

  methods : {
    ...mapMutations([
      'SET_isPaging',
      'SET_routeDirectionLeft',
      'OPR_gnbOpen',
    ]),


    setSpreadElements(callback){
      this.spreadElements = document.getElementsByClassName('spread');

      setTimeout(()=>{
        for(let i = 0, l = this.spreadElements.length; i < l; ++i){
          setTimeout(()=>{
            if(this.spreadElements[i]){
              this.spreadElements[i].classList.remove('spread-wait');
            }
            if(i+1 == l){callback()}
          },i*100);
        }
      })
    },
    
    gnbPathCheck(to,from,next){
      bus.$emit('gnbPathCheck', to.path);
    },

    pushBeforePath(path){
      this.beforePath.push(path);
    },

    delayPagingStart(){
      this.SET_isPaging(true);
      this.setSpreadElements(()=>{
        // this.SET_isPaging(false);
      });
    },
    delayPagingEnd(){
      this.SET_isPaging(false);
    },

    changeTargetSection(){
      let target = document.getElementsByClassName('target-section');
      if(!target[0]){
        return;
      }else{
        target[0].classList.remove('target-section');  
      }
    },

    setTransitionName(){
      this.transitionName = this.GET_routeDirectionLeft ? 'left-right' : 'right-left';
      // console.log(this.transitionName);
    },

    setRouterAreaScrollTop(){
      this.routerArea.scroll({ 
        top: 0,
        left: 0, 
        behavior: 'smooth',  
      });
    },

  }, //method
    

  created(){

    this.$router.push('/');
    this.$router.beforeEach((to,from,next)=>{
      
      if(!this.GET_isPaging){

        if(to.path == this.beforePath[this.beforePath.length-1]){
          this.SET_routeDirectionLeft(false)
          this.beforePath.pop();
        }else{
          this.SET_routeDirectionLeft(true);
          this.pushBeforePath(from.path);
        }
        this.setTransitionName();
        let delay = this.GET_isMini && this.GET_isGnbOpen ? 600 : 0;
        this.gnbPathCheck(to,from,next);
        this.changeTargetSection();
        setTimeout(()=>{
          // this.setRouterAreaScrollTop();
          next();
        },delay)
      };      
    });
  },

  mounted(){
    console.log(this.routerArea.scrollTop);
  }

  

}
</script>

<style>
.spread{
  transition: all 0.4s ease;
}
.spread.spread-wait{
  opacity: 0;
  /* background-color: #ddd; */
  /* border-radius: 10px; */
  margin-left: -2vw;
}


#router-area{

  display: flex;
  flex : 1;
  position: relative;
  width: 100%; height: 100%;
  overflow-y: scroll;
  overflow-x: hidden; 
}
#router-area.hidden::-webkit-scrollbar {width: 3px !important; height: 3px !important;}
#router-area.hidden::-webkit-scrollbar-track {background: #fff !important; opacity: 0 !important; }
#router-area.hidden::-webkit-scrollbar-thumb {background: #fff !important; opacity: 0 !important; }

.router-section{
  position: absolute;
  top: 0; left: 0;
  width: 100% !important;
  min-height : 100%;
}


.left-right-enter{
  transition: all 1.5s ease;
  left: 100%;
}
.left-right-enter-to{
  transition: all 1.5s ease;
  position: absolute;
  left: 0 !important;
  overflow: hidden;
}
.left-right-leave{
  transition: all 1.5s ease;  
  position: absolute; 
}
.left-right-leave-to{
  transition: all 1.5s ease;  
  position: absolute;
  left: -99%;
  left: calc(-100% + 1px) !important;
  overflow: hidden;
}


.right-left-enter{
  transition: all 1.5s ease;
  left: -100%;
}
.right-left-enter-to{
  transition: all 1.5s ease;
  position: absolute;
  left: 0 !important;
  overflow: hidden;
}
.right-left-leave{
  transition: all 1.5s ease;  
  position: absolute; 
}
.right-left-leave-to{
  transition: all 1.5s ease;  
  position: absolute;
  left: 101%;
  left: calc(100% + 1px) !important;
  overflow: hidden;
}



</style>
