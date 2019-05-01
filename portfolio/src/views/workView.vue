<template>
  <section id="content-page" class="router-section target-section" >
    <image-slider v-bind:propsdata="thisRouteData['content-image']"></image-slider>
    <div id="content-main">
      <div id="content-header">
        <span id="content-category" class="spread spread-wait">
          {{ thisRouteData['content-category'] }}
        </span>
        <h2 id="content-name" class="spread spread-wait">
          {{ removeUnderbar(thisRouteData['content-name']) }}
        </h2>
      </div>

      <div v-if="thisRouteData['website-link']" id="content-link" class="page-controls spread spread-wait">
        <a v-bind:href="thisRouteData['website-link']" class="button-link" target="_blank">
          <span>website</span>
          <span class="icon-arrow-right"></span>
        </a>
      </div>

      <div id="content-maintext" class="spread spread-wait">
        {{ thisRouteData['content-maintext'] }}
      </div>

      <div id="content-info">
        <ul id="content-info-list">
          <li class="content-info-item spread spread-wait" v-for="item in thisRouteData['client']" :key="item">
            <span class="content-info-property">client</span> 
            <span class="content-info-value">
              {{ item }}
            </span> 
          </li>
        </ul>
      </div>

      <div id="content-page-controls" class="page-controls spread spread-wait">
        <router-link 
          :to="prevRoutePath"
          class="icon-arrow-left button-prev">
        </router-link>
        <div id="slider-image-number">
          <span id="slider-now-number">{{ thisRouteNum }}</span>
          <span id="slider-max-number">{{ contentData.length }}</span>
        </div> 
        <router-link 
          :to="nextRoutePath" 
          class="icon-arrow-right button-next">
        </router-link>
      </div>
    </div>

  </section>
</template>

<script>
// import workMixin from '../mixins/workMixin.js';
import { mapState , mapGetters , mapMutations} from 'vuex';

import u from '../utils/utilMethod.js';
import bus from '../utils/bus.js';

import imageSlider from '../components/imageSlider';

export default {

  components : {
    'image-slider' : imageSlider,
  },

  data(){
    return {
      contentData : null,
      thisRouteData : null,
      thisRouteNum : null,
      contentDataleng : null,
      prevRoutePath : null,
      nextRoutePath : null,
    }
  },

  computed: {

    ...mapGetters([
      'GET_contentsData',
    ]),
    
  },

  methods : {

    removeUnderbar : u.removeUnderbar,

    setContentsData(){
      this.contentData = this.GET_contentsData;
      this.contentDataleng = this.GET_contentsData.length;
    },

    setThisRouteData(){
      for(let i = 0, l = this.GET_contentsData.length; i < l; ++i){
        if(this.GET_contentsData[i]['content-name'] == this.$route.params.name){
          this.thisRouteData = this.GET_contentsData[i];
          this.thisRouteNum = this.thisRouteData['content-number'] + 1;
          if(this.thisRouteNum <= 1){
            this.prevRoutePath = `/work/${this.contentData[this.contentDataleng-1]['content-name']}` ;
          }else{
            this.prevRoutePath = `/work/${this.contentData[this.thisRouteNum - 2]['content-name']}` ;
          }
          if(this.thisRouteNum >= this.contentDataleng){
            this.nextRoutePath = `/work/${this.contentData[0]['content-name']}` ;
          }else{
            this.nextRoutePath = `/work/${this.contentData[this.thisRouteNum]['content-name']}` ;
          }
          break;
        };
      };
    },

    setSpreadWaitElements(){
      let t = document.querySelectorAll('.target-section .spread')
      for(let i = 0; i < t.length; ++i){
        t[i].classList.add('spread-wait');
      }
    },

    // resizeImageView(){
    //   this.setThisImageView();
    //   if(!this.imageView){console.log('return') ; return}
    //   setTimeout(()=>{
    //     const h = this.imageView.offsetWidth * (10/15) + 'p
    //     };
    //   },100)


  },

  created(){
    this.setContentsData();
    this.setThisRouteData();
  },

  mounted(){
    this.setSpreadWaitElements();
  },

}
</script>

<style>




</style>
