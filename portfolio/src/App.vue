<template>
<div id="app">
  <div id="all-wrap">
    <gnb></gnb>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters, mapMutations } from 'vuex';

import 'reset-css';
import './assets/font/font.css';

import gnb from './components/gnb.vue';
import contentView from './views/contentView.vue';
import logoView from './views/logoView.vue';


export default {

  components : {
    'gnb': gnb,
    'content-view' : contentView,
    'logo-view' : logoView,
  },

  computed : {
    allWrap : () => document.getElementById('all-wrap'),
    ...mapState(['axiosData']),
  },

  methods : {
    decisionIsMobile(){
      this.$store.commit('LOAD_isMobile');
    },

    setIsMobile(){
      this.allWrap.classList.add(this.$store.getters.GET_isMobile ? 'mobile-app' : 'pc-app');
    },

  },

  beforeCreated(){
    // axios.get('https://swirlflag.github.io/portfolio/src/data/contentsData.json')
    //   .then(res => {this.$store.state.axiosData = res; console.log(this.axiosData)})
    //   .catch(err => console.log(err));
    
  },
  created(){
    this.decisionIsMobile();
  },
  beforeMount(){
    
    
  },
  mounted(){
    this.setIsMobile();

    // console.log(this.axiosData);
    // console.log(this.$store.state.axiosData);

    axios.get('https://swirlflag.github.io/portfolio/src/data/contentsData.json')
      .then(res => {this.$store.state.axiosData = res; })
      .catch(err => console.log(err));

    // axios.get('https://swirlflag.github.io/portfolio/src/data/adminData.json')
    //   .then(res => )
    //   .catch(err => console.log(err));


  },

}
</script>

<style>

a{text-decoration: none; color: #444;}
li{list-style: none;}
html,body{height: 100%; }
::-webkit-scrollbar {width: 3px !important; height: 3px !important;}
::-webkit-scrollbar-track {background: #f1f1f1 !important; }
::-webkit-scrollbar-thumb {background: #444 !important; }
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
