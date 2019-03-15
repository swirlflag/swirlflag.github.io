<template>
<nav id="gnb" class="close">
  <div id="gnb-inner">
    <div class="arrow-icon-right"></div>
    <div id="gnb-top">
      <h1 id="gnb-logo" @touchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">
        <a href="#" class="">swirlflag.</a>
      </h1>
      <div id="gnb-top-menu">
        <div id="gnb-top-about" @touchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">
          <router-link to="/logo">
            about
          </router-link>
        </div>
        <div id="gnb-top-contact" @touchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">
          <router-link to="/work">contact</router-link>
        </div>
      </div>
    </div>
    
    <div id="gnb-category" @click="categoryCheck">
      <p id="gnb-category-now">
        <span id="gnb-category-now-name" data-item="{id:0,name:all}">
          all
        </span>
        <span class="arrow-triangle"></span>
      </p>
      <ul id="gnb-category-list" >
        <li class="gnb-category-item" v-for="item in categoryData" v-bind:key="item.id">
          <span @click="categoryItemClick" v-bind:data-item="JSON.stringify(item)" @touchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>

  
    <div id="gnb-contents">
      <ul id="gnb-contents-list">
        <transition name="fade" v-for="item in activeCategoryContents" :key="item.id">
          <li class="gnb-contents-item" @click="contentsItemClick" v-if="test2">
            <a href="#">
              <span>
                {{ item['content-name'] }}
              </span>
              <span class="icon-arrow-right"></span>
            </a>
          </li>
        </transition>
        <!-- <span v-for="item in activeCategoryContents" :key="item">{{item}}</span> -->
      </ul>
    </div>
  </div>

  <footer id="gnb-bottom">
    <div id="gnb-bottom-wrap">
      <div class="gnb-bottom-update new-dot">2019.02 update</div>
      <div class="gnb-bottom-copyright">2019 swirlflag</div>
    </div>
    
  </footer>

</nav>
</template>

<script>

import u from '../utils/u.js'
import { mapGetters, mapMutations , mapActions} from 'vuex';
import { getAppData } from '../api/index.js';

export default {

  data(){
    return {
      activeCategory : {id:0,name:'all'},
      activeCategoryContents : {},
      categoryItemHeight : 0,
      categoryFullHeight : 0,

      adminData : [],
      categoryData : [],
      test : false,
      test2 : true,
    }
  },

  computed : {
    ...mapGetters([
      'GET_contentsData',
      'GET_adminData',
      'GET_isMobile',
    ]),
    gnb: () => document.getElementById('gnb'),
    gnbInner: () => document.getElementById('gnb-inner'),
    category : () => document.getElementById('gnb-category'),
    categoryNow : () => document.getElementById('gnb-category-now'),
    categoryNowName : () => document.getElementById('gnb-category-now-name'),
    categoryItem : () => document.getElementsByClassName('gnb-category-item'),
    contentsItem : () => document.getElementsByClassName('gnb-contents-item'),
  },
  
  methods : {
    ...mapMutations([
      'OPR_scrollCorrection',
      'OPR_gnbOpen',
      'OPR_gnbClose',
      'OPR_textSlide',
      'OPR_mobileActiveTouchStart',
      'OPR_mobileActiveTouchEnd',
      
      'LOAD_finshedDataLoad',
      'LOAD_isMobile',
      'SET_gnbSelect',
      'SET_spySubscribe',
    ]),

    ...mapActions([

    ]),
    
    setNavCategoryHeight(){
      this.categoryItemHeight = this.categoryNow.offsetHeight;
      this.categoryFullHeight = this.categoryItemHeight * (this.categoryData.length + 1);
      console.log('set category height!' ,'item : ' +this.categoryItemHeight, 'full : ' + this.categoryFullHeight);
    },
    setCategoryData(data){
      this.categoryData = data;
    },
    getActiveCategory(){
      
    },
    setActiveCategory(data){
      this.activeCategory = {...data};
    },
    setActiveCategoryContents(data){
      this.activeCategoryContents = {};
      if(this.activeCategory.id == 0){
        console.log('all');
        this.activeCategoryContents = {...data};
      }else{
        console.log('not all');
        for(var key in data){
          if(data[key]['content-category'] == this.activeCategory.name){
            this.activeCategoryContents[key] = data[key];
          }
        }
      };
    },
    setCategoryHeight(num){
      this.category.style.height = parseInt(num) + 'px';
    },
    pushCategoryData(data){
      this.categoryData.push(data);
    },

    openNavCategoryHeight(){
      if(u.preventDuplicationAnimation(this.category,1)){return};
      this.category.classList.add('open');
      this.setCategoryHeight(this.categoryFullHeight);
    },

    closeNavCategoryHeight(){
      if(u.preventDuplicationAnimation(this.category,1)){return};
      this.category.classList.remove('open');
      this.setCategoryHeight(this.categoryItemHeight);
    },

    resetSelectContentsItem(){
      for(let i = 0; i< this.contentsItem.length; ++i){
        this.contentsItem[i].classList.remove('select');
      };
    },

    categoryCheck(){
      this.category.classList.contains('open')? 
        this.closeNavCategoryHeight() :
        this.openNavCategoryHeight();
    },

    categoryItemClick(e){
      const t = e.target;
      const targetdata = JSON.parse(t.getAttribute('data-item'));
      const index = u.getThisIndex(this.categoryItem, t.parentElement);
      const before = this.activeCategory;
      this.setActiveCategory(targetdata);
      setTimeout(()=>{
        this.categoryData.splice(index,1);
        this.categoryData.push(before);  
        this.categoryData.sort((a,b)=>a.id - b.id);
      },1000)

      setTimeout(()=>{
        this.closeNavCategoryHeight();
      },100);

      this.OPR_textSlide({
        el : this.categoryNowName,
        msg : this.activeCategory.name,
      });

      this.setActiveCategoryContents(this.GET_contentsData);

    },

    contentsItemClick(e){
      this.resetSelectContentsItem();
      e.target.parentElement.classList.add('select');
    },

    dataAwaitGnb(response){
      this.setCategoryData(this.GET_adminData.category)
      this.setActiveCategoryContents(this.GET_contentsData);
      this.setNavCategoryHeight();
      this.closeNavCategoryHeight();
      setTimeout(()=>{
        this.setNavCategoryHeight();
        this.closeNavCategoryHeight();
      },1000)
      this.OPR_gnbOpen();
    },

    testtoggle(){this.gnb.classList.toggle('close')},
    testclose(){this.gnb.classList.add('close')},
    testopen(){this.gnb.classList.remove('close')},
    testaction(){
      this.setActiveCategoryContents(this.GET_contentsData);
    },
    testfunction(){
      window.testtoggle = this.testtoggle;
      window.testopen = this.testopen;
      window.testclose = this.testclose;
      window.t = this.testaction;
      window.t1 = (b) =>{
        console.log(this.test)
        this.test = b 
      }
      window.t2 = () =>{
        console.log(this.GET_contentsData);
      }

      // this.testaction();
    },

  }, // method

  created(){
    
  },

  mounted(){
    this.OPR_scrollCorrection(this.gnbInner);
    this.SET_gnbSelect();
    this.SET_spySubscribe(this.dataAwaitGnb);
    
    window.addEventListener('resize', ()=>{
      this.setNavCategoryHeight();
      this.closeNavCategoryHeight();
    });

    this.testfunction();
  },

}
</script>

<style scoped>
#gnb{
  width: 50%;
  max-width : 520px;
  left: 0%;
  box-sizing: border-box;
  font-size: 1em;
  position: relative;
  overflow-x : hidden;
  flex-direction: column;
  transition: all 2s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #fff;
  font-weight: lighter;
  z-index: 10;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;
}
#gnb.close{margin-left: -50%;}
#gnb-inner{
  height: 100%;
  padding: 30px 20px 55px;
  padding: 0 40px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
#gnb-inner > div[id^="gnb"]{margin-bottom: 30px;}
#gnb-top{
  display: flex;
  margin-top: 40px;
}
#gnb-logo{
  font-size: 24px;
  font-weight: lighter;
  letter-spacing: 0.2em;
  font-family: 'Shadows Into Light', 'Ubuntu' , sans-serif;  
}
.pc-app #gnb-logo:hover a{
  text-shadow: 0 0 8px #000;
  color: #fff;
}
#gnb-top-menu{
  display: flex;
  margin-left: auto;
  margin-right: -6px;
  align-items: flex-end;
}
#gnb-top-menu > div[id^="gnb-top"]{
  position: relative;
  margin:  0 15px;
}
#gnb-top-menu > div[id^="gnb-top"] a{
  line-height: 0; 
  padding: 2px 5px;
}
#gnb-top-menu > div[id^="gnb-top"]::before{
  content : '';
  position: absolute;
  width: 1px; height: 100%;
  right: -15px; top: 1px;
  background: #ddd;
}
#gnb-top-menu > div[id^="gnb-top"]:last-child{margin-right: 0;}
#gnb-top-menu > div[id^="gnb-top"]:last-child::before{display: none;}
#gnb-category{
  border: 1px solid #000;  
  overflow-y:hidden;
  box-sizing: border-box;
  cursor: pointer;
  overflow-x: hidden;
  font-weight: lighter;
}
#gnb-category,
#gnb-top-menu{font-family: 'Ubuntu';}
#gnb-category::before{
  content: '';
  width: 10px;height: 10px;
}
#gnb-category-now{
  display: flex;
  align-items: center;
}
#gnb-category-now .arrow-triangle{
  width: 10px; height: 6px;
  background: url(../assets/icons/mini_arrow.png) no-repeat;
  background-size: 10px 12px;
  background-position: 0 0px;
  margin-left: auto;
}
#gnb-category.open #gnb-category-now .arrow-triangle{background-position: 0 -6px;}
#gnb-category-now{
  /* border: 1px solid #d3d; */
  box-sizing: border-box;
}
#gnb-category-now-name{
  /* border: 1px solid #3d3;  */
  /* position: relative; */
  /* width: 100%; */
  /* box-sizing: border-box; */
  padding-left: 4px;
  padding: 4px 5px;
  overflow: hidden;
  width: 100%;
  /* height: 50%; */
}
#gnb-category-now-name-item{
  /* display: block; */
  /* border: 1px solid #000; */
}
.gnb-category-item span{
  display: inline-block;
  padding: 4px 5px;
  font-weight: 100;
}
#gnb-category-now,
.gnb-category-item{
  padding: 12px;
  padding-left: 12px;
  box-sizing: border-box;
}



#gnb-contents{
  padding-top: 30px;
  border-top: 2px solid #000;
  margin-bottom: 70px !important;
}
.gnb-contents-item{
  margin: 20px 0;
  font-size: 15px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  font-weight: lighter;
  box-sizing:border-box;
}
.gnb-contents-item:first-child{margin-top: 0 !important;}
.gnb-contents-item a{ 
  width: 100%; 
  display: inline-block;
  padding: 5px 0px 6px 17px;
  display: flex;
  align-items: center;
}
.gnb-contents-item .icon-arrow-right{
  margin-left: auto;
  margin-right: 6px;
}
.gnb-contents-item .icon-arrow-right::after{ 
  content: '';
  display: inline-block;
  background: url(../assets/icons/dot-white.png) no-repeat;
  background-size: cover;
  width: 5px; height: 5px;
  opacity: 0;
  position: absolute;   
  top: 6px;  right: -10px;
}
.gnb-contents-item.select .icon-arrow-right::before,
.pc-app .gnb-contents-item:hover .icon-arrow-right::before{
  left: 20px;   
  opacity: 0;
}
.gnb-contents-item.select .icon-arrow-right::after,
.pc-app .gnb-contents-item:hover .icon-arrow-right::after{
  opacity: 1;
  right: 5px;
}
#gnb-bottom{
  position: absolute;
  width: calc(100% - 3px);
  bottom: 0; left: 0;
  border-top: 1px solid #000;
  background-color: #fff;
  margin-bottom: 0 !important;
  font-size: 10px;
  padding: 15px 0;
}

#gnb-bottom-wrap{  
  padding: 0 40px;
  display: flex;
}
#gnb-bottom .gnb-bottom-update{padding-left: 15px;}
#gnb-bottom .gnb-bottom-copyright{
  padding-left: 15px;
  margin-left: auto;
  margin-right: 2px;
}
.new-dot{position: relative;}
.new-dot::before{
  content: '';
  width: 5px; height: 5px;
  position: absolute;
  left: 5px; top: calc(50% - 2px);
  background: url(../assets/icons/dot-red.png) no-repeat;
  background-size: cover;
}
/* transition */
#gnb-inner,
#gnb-logo a,
#gnb-top-menu > div[id^="gnb-top"],
#gnb-top-menu > div[id^="gnb-top"] a,
#gnb-category-now-name,
.gnb-category-item span,
.gnb-contents-item,
.gnb-contents-item a{
  transition: all 0.2s ease;}

.arrow-triangle,
.gnb-contents-item .icon-arrow-right,
.gnb-contents-item .icon-arrow-right::before,
.gnb-contents-item .icon-arrow-right::after{
  transition: all 0.5s ease;}

#gnb-category{
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);}

.pc-app .gnb-contents-item:hover,
.gnb-contents-item.select{
  background-color: #000;}

.pc-app .gnb-contents-item:hover a,
.gnb-contents-item.select a{
  color: #fff;}

.mobile-app #gnb-logo a,
.mobile-app #gnb-top-menu > div[id^="gnb-top"],
.mobile-app #gnb-top-menu > div[id^="gnb-top"] a,
.mobile-app .gnb-category-item,
.mobile-app .gnb-category-item span{
  transition: none !important; }

.pc-app #gnb-top-menu > div[id^="gnb-top"] a:hover,
.pc-app .gnb-category-item span:hover,
.mobile-app #gnb-top-menu > div[id^="gnb-top"] a.mobile-active,
.mobile-app #gnb-logo a.mobile-active,
.mobile-app .gnb-category-item span.mobile-active{ 
  background: #000;
  color: #fff;
}

.mobile-app #gnb-category-now,
.mobile-app .gnb-category-item{
  padding: 0;}

.mobile-app #gnb-category-now-name,
.mobile-app .gnb-category-item span{
  padding:20px;
  display: block;
  width: 100%;
}
.mobile-app .gnb-bottom-update{padding-left: 20px !important;}
.mobile-app .gnb-bottom-copyright{padding-right: 4px;}
.mobile-app #gnb-bottom{
  width: 100% !important;}

.mobile-app #gnb-top-menu > div[id^="gnb-top"]{margin:0 10px !important;}
.mobile-app #gnb-top-menu > div[id^="gnb-top"]::before{right: -10px !important; }
.mobile-app #gnb-top-menu > div[id^="gnb-top"]:last-child{margin-right: 0 !important;}

@media screen and (max-width: 768px) {
  #gnb{
    position: fixed;
    width: 100%; max-width:100%;height: 100%;
    -webkit-overflow-scrolling: touch;
  }
  #gnb.close{margin-left: -100%;}
  #gnb-contents-list .gnb-contents-item{
    margin: 0;
    font-size: 16px; 
  }
  #gnb-contents-list .gnb-contents-item a{
    padding: 20px 0 20px 20px;
    font-size: 14px;
    box-sizing: border-box;
  }
  #gnb-category-now{position: relative;}
  #gnb-category-now .arrow-triangle{
    position: absolute;
    top: calc(50% -2px); right: 15px;
  }
  .new-dot::before{
    width: 5px; height: 5px; 
    top: calc(50% - 2px);
    border-radius: 2000px;
    left: 5px;
  }
}/*  */

@media screen and (min-width : 1040px){
  #gnb.close{margin-left: -520px;}
}

@media screen and (max-width: 1280px ){
  #gnb-inner,
  #gnb-bottom-wrap{
    padding: 0 20px;}

  #gnb-top{margin-top: 30px;}
}/*  */

@media screen and (min-width : 1640px){
  #gnb{
    width: 36.6% !important;
    max-width: none;
  }
  #gnb.close{margin-left: -36.6%;}
  #gnb-inner{padding: 0 3vw;}
  #gnb-inner > div[id^="gnb"]{margin-bottom: 2.8vw;}
  #gnb-logo{font-size: 1.8vw;}
  .pc-app #gnb-logo:hover a{text-shadow: 0 0 0.7vw #000;}
  #gnb-top{margin-top: 3.5vw;}
  #gnb-top-menu{
    margin-right: -0.4vw;
    font-size: 1vw;
  }
  #gnb-top-menu > div[id^="gnb-top"]{margin:  0 1vw;}
  #gnb-top-menu > div[id^="gnb-top"] a{padding: 0.2vw 0.4vw;}
  #gnb-top-menu > div[id^="gnb-top"]::before{
    width: 0.1vw; height: 100%;
    right: -1vw;
  } 
  #gnb-category-now .arrow-triangle{
    width: 1vw; height: 0.6vw;
    background-size: 1vw 1.2vw;
  }

  #gnb-category.open #gnb-category-now .arrow-triangle{background-position: 0 -0.6vw;}
  #gnb-category-now,
  .gnb-category-item{
    padding: 1.05vw;
    padding-left: 1.05vw;
  }
  #gnb-category-now-name,
  .gnb-category-item span{
    padding: 0.3vw 0.4vw;
    font-size: 1vw;
  }
  #gnb-contents{
    padding-top: 2.8vw;
    border-top: 0.15vw solid #000;
    margin-bottom: 5.5vw !important;
  }
  #gnb-contents-list .gnb-contents-item{
    margin: 1.5vw 0;
    font-size: 1.05vw;
  }
  #gnb-contents-list .gnb-contents-item a{padding: 0.3vw 0 0.4vw 1.5vw;}
  #gnb-bottom{
    width: calc(100% - 0.25vw);
    font-size: 0.8vw;
    padding: 1.2vw 0;
  }
  #gnb-bottom-wrap{  padding:0 3vw;}
  #gnb-bottom .gnb-bottom-update{padding-left: 1.5vw;}
  #gnb-bottom .gnb-bottom-copyright{
    padding-left: 2vw;
    margin-right: 0.1vw;
  }
  .new-dot::before{
    width: 0.4vw ; height: 0.4vw;
    left: 0.4vw; 
    top: calc(50% - 0.2vw);
  }
  .gnb-contents-item .icon-arrow-right{margin-right: 0.5vw;}
  .gnb-contents-item .icon-arrow-right::after{
    width: 0.4vw ; height: 0.4vw;
    top: 0.5vw; right: -0.5vw;
  }
  .gnb-contents-item.select .icon-arrow-right::before,
  .pc-app .gnb-contents-item:hover .icon-arrow-right::before{
    opacity: 0;
    left: 1vw;
  }
  .gnb-contents-item.select .icon-arrow-right::after,
  .pc-app .gnb-contents-item:hover .icon-arrow-right::after{
    opacity: 1;
    right: 0.5vw;
  }

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
