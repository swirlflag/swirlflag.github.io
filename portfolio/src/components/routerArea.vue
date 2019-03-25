<template>
  <div id="router-area">
    <transition name="page" v-on:before-enter="delayPagingStart" v-on:after-enter="delayPagingEnd">
      <router-view :key="$route.params.name"></router-view>
    </transition>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
import bus from '../utils/bus.js';
import u from '../utils/utilMethod.js';
export default {

  data(){
    return {
      nowURL : '',
    }
  },

  computed : {
    ...mapGetters([
      'GET_isPaging',
    ]),
  },

  methods : {
    ...mapMutations([
      'SET_isPaging',
    ]),
    delayPagingStart(){
      this.SET_isPaging(true);
      // console.log(this.$store.state.nowGnbContentItem)
      // this.$store.state.nowGnbContentItem.classList.add('active');
    },
    delayPagingEnd(){
      this.SET_isPaging(false);
      // console.log(this.$store.state.nowGnbContentItem)
      // this.$store.state.nowGnbContentItem.classList.add('select');
    },

    
    gnbPathCheck(to,from,next){
      bus.$emit('gnbPathCheck', to.path);
    },

  },
    
  
  created(){
    this.$router.push('/');
    this.$router.beforeEach((to,from,next)=>{
      if(!this.GET_isPaging){
        this.gnbPathCheck(to,from,next);
        next();
      };      
    });
  },

}
</script>

<style>
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
.page-enter{
  transition: all 1.5s ease;
  left: 100%;
}
.page-enter-to{
  transition: all 1.5s ease;
  position: absolute;
  left: 0 !important;
  overflow: hidden;
}
.page-leave{
  transition: all 1.5s ease;  
  position: absolute; 
}
.page-leave-to{
  transition: all 1.5s ease;  
  position: absolute;
  left: -100% !important;
  overflow: hidden;
}


</style>
