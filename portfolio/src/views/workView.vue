<template>
  <section id="content-page" class="router-section target-section" >
    <image-slider v-bind:propsdata="thisRouteData['content-image']"></image-slider>
    <div id="content-main">
      <div id="content-header">
        <span id="content-category" class="spread">
          {{ thisRouteData['content-category'] }}
        </span>
        <h2 id="content-name" class="spread spread-wait">
          {{ removeUnderbar(thisRouteData['content-name']) }}
        </h2>
      </div>

      <div v-if="thisRouteData['website-link']" id="content-link" class="page-controls spread">
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



[class^="icon-arrow"]{cursor: pointer;}
#content-page{
  background-color: #fff;
  box-sizing: border-box;
}


#content-main{padding: 0 42px;}
#content-main > div{margin-bottom: 40px;}
#content-category{font-size: 12px;}

#content-category,
.content-info-property{
  color: #999;
  font-family: 'Ubuntu';
}
#content-name{
  margin-top: 10px;
  font-size: 24px;
  font-weight: normal;
}
#content-link{
  font-size: 14px;
  font-family: 'Ubuntu';
}
#content-link span{
  margin-right: 20px;
  display: inline-block;
}
#content-maintext{
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 40px 0;
  line-height: 24px;
  padding-left: 20%;
}
#content-info{
  display: flex;
  justify-content: flex-start;
}
.content-info-item{
  display: inline-block;
  margin-right: 40px;
}
.content-info-property{
  display: block;
  font-size: 12px;
  margin-bottom: 8px;
}
#content-page-controls{
  margin: 80px 0;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1280px){
  #content-main{padding: 0 23px;}
  #content-header{padding-top : 20px;}
  #content-maintext{padding-left: 0;}
}/*  */

@media screen and (min-width : 1640px){
  #content-main{
    padding: 0 3.2vw;
    font-size: 1.05vw !important;
  }
  #content-main > div{margin-bottom: 3.4vw;}
  #content-category{font-size: 0.8vw;}
  #content-name{
    margin-top: 1vw;
    font-size: 1.8vw;
  }
  #content-link{font-size: 1.05vw;}
  #content-link span{margin-right: 1.5vw;}
  #content-maintext{
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 3.2vw 0;
    line-height: 1.8em;
    padding-left: 25%;
  }
  .content-info-item{margin-right: 3.4vw;}
  .content-info-property{
    font-size: 0.8vw;
    margin-bottom: 0.8vw;
  }
  #content-page-controls{margin: 6.8vw 0;}
}/*  */
</style>
