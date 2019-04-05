<template>
  <div id="slider-image-container">
    <ul id="slider-image-view" class="spread spread-wait"> 
      <li v-bind:class="{'image-hide' : isResize}" class="slider-image-item image-hide" v-for="item in propsdata" :key="item.id">
        <img v-bind:src="item['src']" alt="#" draggable="false">
      </li>
    </ul>  

    <div id="slider-image-controls" class="page-controls spread spread-wait">
      <span class="icon-arrow-left button-prev" @click="prevClick"></span>
      <div id="slider-image-number">
        <span id="slider-now-number">1</span>
        <span id="slider-max-number">{{ propsdata.length }}</span>
      </div> 
      <span class="icon-arrow-right button-next" @click="nextClick"></span>
    </div>
  </div>

</template>

<script>
import u from '../utils/utilMethod.js';
import bus from '../utils/bus.js';

import { mapMutations, mapGetters } from 'vuex';

export default {
  props : ['propsdata'],
  data(){
    return {
      now  : 1,  
      // imageView : null,
      test : null,

      isResize : false,
      resizeTimeout : false,
    }
  },

  computed : {
    container : () => document.querySelector('.target-section #slider-image-container'),
    imageView : () => document.querySelector('.target-section #slider-image-view'),
    imageList : () => document.querySelectorAll('.target-section .slider-image-item'),
    nowNumber : () => document.querySelector('.target-section #slider-now-number'),
    revIsResize(){
      return !this.isResize;
    },
  },
  
  methods : {
    ...mapMutations([
      'OPR_textSlide'
    ]),

    setSliderSize(){
      this.imageView.style.width = this.container.offsetWidth * this.imageList.length + 'px';
    },
    // reszietest(){
      // this.isResize = false;
    // },  
    resizeImageView(){  
      // this.isResize = true; 
      if(!this.container){console.log('return') ; return}
      const h = this.container.offsetWidth * (10/15) + 'px';
      this.imageView.style.height = h;
      for(let i = 0; i < this.imageList.length; ++i){
        this.imageList[i].style.height = h;
        this.imageList[i].style.width = this.container.offsetWidth + 'px';
      };

      

      // window.addEventListener('resize', ()=>{
      //   clearTimeout(this.resizeTimeout);
      //   this.resizeTimeout = setTimeout(this.reszietest, 1000);
      // });
    
    },

    go(){
      this.imageView.style.marginLeft = - (this.now - 1)  *  (this.imageView.offsetWidth / this.imageList.length)+ 'px';
    },
    
    prev(){
      if(this.nowNumber.classList.contains('is-text-sliding')){return}
      --this.now;
      if(this.now <= 0){
        this.now = this.imageList.length;
      }
      this.go();
    },

    next(){
      if(this.nowNumber.classList.contains('is-text-sliding')){return}
      ++this.now;
      if(this.now > this.imageList.length){
        this.now = 1;
      }
      this.go();
    },

    prevClick(){
      this.prev();
      this.OPR_textSlide({
        el : this.nowNumber,
        msg : this.now,
        type : 'left-right',
      });       
    },

    nextClick(){
      this.next();
      this.OPR_textSlide({
        el : this.nowNumber,
        msg : this.now,
        type : 'right-left',
      });       
      
    },

  },

  created(){

  },
  mounted(){
    this.setSliderSize();
    this.resizeImageView();
    window.addEventListener('resize',() => {
      this.setSliderSize();
      this.resizeImageView();  
      this.go();
    });

    // 임시코드: 이미지 로드 된다음에  표시하는거 ..... 잘되는거맞나
    let a = document.querySelectorAll('.target-section .image-hide');
    
    for(let i = 0; i < a.length; ++i){
      a[i].children[0].addEventListener('load', function(){
        a[i].classList.remove('image-hide');
      })
    };

    this.OPR_textSlide({
      el : this.nowNumber,
      msg : 1,
      type : 'right-left',
    });       


  },

}
</script>

<style>

.page-controls,
.page-controls > a{
  display: flex;
  align-items: center;
}
#slider-image-container{
  display: block;
  width: 100%; 
  box-sizing: border-box;
  transition: opacity 1s ease;
}
#slider-image-view{
  height: 100%;
  display: block;
  background-color: #f0f0f0;
  transition: margin 1s ease, opacity 1s ease;
}

.slider-image-item{
  display: inline-block;
  height: auto;
  box-sizing: border-box;
  object-fit: cover;
  transition: opacity 1s ease;
}
.slider-image-item img{
  display: inline-block;
  width: 100%; height: 100%;
  vertical-align: middle;
  object-fit: cover;
  transition: opacity 1s ease;
}
#slider-image-controls{
  margin: 40px;
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
}
#slider-image-number{display: flex}
#slider-image-number span[id$="number"]{
  padding: 0 10px;
  margin: 0 10px;
  font-family: 'Ubuntu';
}
#slider-now-number{
  overflow: hidden;
  display: inline-block;
}
#slider-max-number{position: relative;}
#slider-max-number::before{
  content: '';
  display: inline-block;
  position: absolute; 
  width: 1px;height: 100%;
  top: 0; left: -11px;
  background: #444;
  transform: rotate(30deg);
}
.image-hide img{ 
  /* 이미지 로드 되고 나오게하는 로직에 추가 */
  opacity: 0;
}


@media screen and (max-width: 1280px){
  #slider-image-controls{margin: 20px;}
}

@media screen and (min-width : 1640px){
  #slider-image-controls{margin: 2.8vw;}
  #slider-image-number span[id$="number"]{
    padding: 0 0.75vw;
    margin: 0 0.75vw;
    font-size: 1.05vw;
  }
  #slider-max-number::before{
    width: 0.1vw;
    left: -0.75vw;
  }
}


</style>
