<template>
  <section id="content-page" class="router-section" >
    
    <div id="content-image-view">
      <ul id="content-image-container" class="spread-el">
        <li class="content-image-item"><img src="../assets/image/img01.jpg" alt="#"></li>
        <li class="content-image-item"><img src="../assets/image/img02.jpg" alt="#"></li>
        <li class="content-image-item"><img src="../assets/image/img03.jpg" alt="#"></li>
      </ul>  

      <div id="content-image-controls" class="page-controls spread-el">
        <span class="icon-arrow-left button-prev"></span>
        <div id="content-image-number">
          <span id="content-now-number">0</span>
          <span id="content-max-number">0</span>
        </div> 
        <span class="icon-arrow-right button-next"></span>
      </div>

    </div>

    <div id="content-main">
      <div id="content-header">
        <span id="content-category" class="spread-el">category</span>
        <h2 id="content-name" class="spread-el">
          {{this.$route.params.name}}
        </h2>
      </div>

      <div id="content-link" class="page-controls spread-el">
        <a href="#" class="button-link">
          <span>website</span>
          <span class="icon-arrow-right"></span>
        </a>
      </div>

      <div id="content-maintext" class="spread-el">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        
        <!-- {{ this.contentsMainText }} -->
      </div>

      <div id="content-info">
        <ul id="content-info-list">
          <li class="content-info-item spread-el">
            <span class="content-info-property">client</span> 
            <span class="content-info-value">randomised</span> 
          </li>
          <li class="content-info-item spread-el">
            <span class="content-info-property">client</span> 
            <span class="content-info-value">randomised</span> 
          </li>
        </ul>
      </div>

      <div id="content-page-controls" class="page-controls spread-el">
        <a href="#" class="icon-arrow-left button-prev"></a>
        <div id="content-image-number">
          <span id="content-now-number">0</span>
          <span id="content-max-number">0</span>
        </div> 
        <a href="#" class="icon-arrow-right button-next"></a>
      </div>
    </div>

  </section>
</template>

<script>
import workMixin from '../mixins/workMixin.js';
import { mapState , mapGetters , mapMutations} from 'vuex';
import logoViewVue from './logoView.vue';
// import axios from 'axios';

export default {

  data(){
    return {
      contentData : null,
      contentsMainText : null,
      imageView : null,
    }
  },
  mixins : [workMixin],

  computed: {
    
    imageContainer : () => document.getElementById('content-image-container'),
    imageItem : () => document.getElementsByClassName('content-image-item'),
    
    ...mapGetters([
      'GET_contentsData',
      'GET_isPaging',
    ]),
    
  },

  methods : {
    setThisImageView(){
      this.imageView = document.getElementById('content-image-view');
    },
    resizeImageView(){
      this.setThisImageView();
      const h = this.imageView.offsetWidth * (10/15) + 'px';
      for(let i = 0; i < this.imageItem.length; ++i){
        this.imageItem[i].style.height = h;
      };
    },
  },

  created(){
    // for(let i = 0; i < this.GET_contentsData.length; ++i){
    //   if(this.GET_contentsData[i]['content-name'] == this.$route.params.name){
    //     console.log(this.GET_contentsData[i]['content-name']);
    //   }
    // }
  },


  mounted(){
    this.resizeImageView();
    window.addEventListener('resize',this.resizeImageView );
    // console.log(this.$route.params);


  },

  

}
</script>

<style>


[class^="icon-arrow"]{cursor: pointer;}
#content-page{
  background-color: #fff;
  box-sizing: border-box;
}
.page-controls,
.page-controls > a{
  display: flex;
  align-items: center;
}
#content-image-view{
  display: block;
  width: 100%; 
  box-sizing: border-box;
}
#content-image-container{
  width: 300%; height: 100%;
  display: flex;
}
.content-image-item{
  width: 33.333%; height: 100%;
  box-sizing: border-box;
  object-fit: cover;
}
.content-image-item img{
  display: inline-block;
  width: 100%; height: 100%;
  vertical-align: middle;
  object-fit: cover;
}
#content-image-controls{
  margin: 40px;
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
}
#content-image-number{display: inline-block;}
#content-image-number span[id$="number"]{padding: 0 20px;}
#content-now-number{position: relative;}
#content-now-number::before{
  content: '';
  display: inline-block;
  position: absolute; 
  width: 1px;height: 100%;
  top: 0; right: -1px;
  background: #444;
  transform: rotate(30deg);
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
}
#content-link{font-size: 14px;}
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
  #content-image-controls{margin: 20px;}
  #content-header{padding-top : 20px;}
  #content-maintext{padding-left: 0;}
}/*  */

@media screen and (min-width : 1640px){
  #content-image-controls{margin: 3.2vw;}
  #content-image-number span[id$="number"]{
    padding: 0 1.5vw;
    font-size: 1.05vw;
  }
  #content-now-number::before{width: 0.1vw;}
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
