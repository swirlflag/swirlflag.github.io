<template>
<div id="app">
  <div id="all-wrap">
    <gnb></gnb>
    <content-view></content-view>
  </div>
</div>
</template>

<script>
import 'reset-css';
import './assets/font/font.css';

import gnb from './components/gnb.vue';
import contentView from './components/contentView.vue';

export default {

  components : {
    'gnb': gnb,
    'content-view' : contentView,
  },

  computed : {
    allWrap : () => document.getElementById('all-wrap'),
  },

  methods : {
    setisMobile(){
      this.$store.commit('LOAD_isMobile');
      if(this.$store.getters.GET_isMobile){
        this.allWrap.classList.add('mobile-app');
      }else{
        this.allWrap.classList.add('pc-app');
      }
      
    },
  },

  created(){
    console.log('create');
  },

  mounted(){
    this.setisMobile();

  },

}
</script>

<style>
a{text-decoration: none; color: #444;}
li{list-style: none;}
html,body{
  
  
  font-family:'Helvetica' , 'Noto Sans KR' , sans-serif;
  
  height: 100%; color: #444; overflow: hidden;
  font-size: 14px;
  font-weight: 100;
}
#app {
  width: 100%; height: 100%;
  overflow: hidden;
}
#all-wrap{
  display: flex;
  width: 100%; height: 100%;
}


/* transition */

#gnb,
.section
{transition: all 0.3s ease;}

</style>
