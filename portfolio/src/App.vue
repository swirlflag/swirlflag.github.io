<template>
<div id="app">
  <div id="all-wrap">
    <data-render></data-render>
    <gnb></gnb>
    <router-area></router-area>
  </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import 'reset-css';
import './assets/font/font.css';

import dataRender from './components/dataRender.vue'
import gnb from './components/gnb.vue';

import routerArea from './components/routerArea.vue';

export default {

  components : {
    'data-render': dataRender,
    'gnb': gnb,
    'router-area' : routerArea,
  },

  computed : {
    allWrap : () => document.getElementById('all-wrap'),
    ...mapGetters([
      'GET_isMobile',
      'GET_isIOS',
    ]),
  },

  methods : {
    ...mapMutations(['SET_spySubscribe']),
    setIsMobile(){
      this.allWrap.classList.add(this.GET_isMobile ? 'mobile-app' : 'pc-app');
      if(this.GET_isIOS){this.allWrap.classList.add('ios-app')};
    },
  },
  
  created(){

  },

  mounted(){
    this.SET_spySubscribe(function(response){
      // console.log(2, response);
    });
    
    this.setIsMobile();  


  },

}
</script>

<style>
a{text-decoration: none; color: #444;}
li{list-style: none;}
html,body{height: 100%; }
::-webkit-scrollbar {width: 3px !important; height: 3px;}
::-webkit-scrollbar-track {background: #f1f1f1 ; }
::-webkit-scrollbar-thumb {background: #444; }
#app {
  font-family:'Helvetica' , 'Noto Sans KR' , sans-serif;
  font-size: 14px;
  font-weight: 100;
  color: #444;
  width: 100%; height: 100%;
  overflow: hidden;
  letter-spacing: 0.1em;
  word-wrap: keep-all;
}
#all-wrap{
  display: flex;
  width: 100%; height: 100%;
}
[class^="icon-arrow"]{ 
  display: inline-block;
  position: relative;
  width: 26px; height: 16px;
}
[class^="icon-arrow"]::before{
  content: '';
  width: 20px; height: 8px;
  position: absolute; top: 4px; left: 3px;
  background: url(./assets/icons/mini-arrow2.png) no-repeat center;  
  background-size: 100%;
}
.icon-arrow-right{}
.icon-arrow-left{transform: rotate(180deg);}

@media screen and (min-width : 1640px){
  html,body,#app{font-size: 1.1vw !important;}
  ::-webkit-scrollbar {width: 0.25vw !important;}
  [class^="icon-arrow"]{width: 2vw; height: 1.28vw;}
  [class^="icon-arrow"]::before{
    width: 1.6vw; height: 0.64vw; 
    top: 0.32vw; left: 0.2vw; 
  }
}



</style>
