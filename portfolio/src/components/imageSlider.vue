<template>
  <div id="slider-image-container">
    <ul id="slider-image-view" class="spread spread-wait"> 
      <li class="slider-image-item" v-for="item in propsdata" :key="item.id">
        <img class="image-hide" v-bind:src="item['src']" alt="#" draggable="false">
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
      imageView : null,
    }
  },

  computed : {
    container : () => document.getElementById('slider-image-container'),
    
    imageList : () => document.getElementsByClassName('slider-image-item'),
    nowNumber : () => document.getElementById('slider-now-number'),
  },
  
  methods : {
    ...mapMutations([
      'OPR_textSlide'
    ]),

    resizeImageView(){      
      if(!this.container){console.log('return') ; return}

      const h = this.container.offsetWidth * (10/15) + 'px';
      setTimeout(()=>{
        for(let i = 0; i < this.imageList.length; ++i){
          this.imageList[i].style.height = h;
        };
      },10);

    },

  

    go(){
      
      this.imageView = document.getElementById('slider-image-view');
      console.log(this.now, this.imageView.offsetWidth / this.imageList.length);
      
      this.imageView.style.marginLeft = - (this.now - 1)  *  (this.imageView.offsetWidth / this.imageList.length)+ 'px';

      console.log(this.imageView);
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
      
    }

  },

  created(){

  },
  mounted(){
    // bus.$on('resizeImageSet', ()=>{
      this.resizeImageView();
      window.addEventListener('resize',this.resizeImageView );
    // });
    
    // 임시코드: 이미지 로드 된다음에  표시하는거 ..... 잘되는거맞나
    let a = document.querySelectorAll('.slider-image-item img');
    console.log(a);
    for(let i = 0; i < a.length; ++i){
      a[i].addEventListener('load', function(){
        // setTimeout(()=>{
          a[i].classList.remove('image-hide');
        // },1500)
      })
    }

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
}
#slider-image-view{
  width: 300%; height: 100%;
  display: flex;
  background-color: #f0f0f0;
  transition: all 1s ease;
}

.slider-image-item{
  width: 33.333%; 
  height: auto;
  box-sizing: border-box;
  object-fit: cover;
  transition: all 1.5s ease;
}
.slider-image-item img{
  display: inline-block;
  width: 100%; height: 100%;
  vertical-align: middle;
  object-fit: cover;
  /* transition: all 0.3s ease; */
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
.slider-image-item img{
  transition: opacity 1s ease;
}
.image-hide{ 
  /* 이미지 로드 되고 나오게하는 로직에 추가 */
  opacity: 0;
}


@media screen and (max-width: 1280px){
  #slider-image-controls{margin: 20px;}
}

@media screen and (min-width : 1640px){
  #slider-image-controls{margin: 3.2vw;}
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
