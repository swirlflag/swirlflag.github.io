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
        <transition name="fade" v-for="item in contentItemData" :key="item.id" leave-active-class="contentstest">
          <li class="gnb-contents-item active" v-bind:class="{'new-dot' : item['is-new']}"@click="contentsItemClick" v-bind:data-content-item="JSON.stringify({category : item['content-category'], update : item['update-date']})">
            <router-link to="/test">
              <span>
                {{ item['content-name'] }}
              </span>
              <span class="icon-arrow-right"></span>
            </router-link>
          </li>
        </transition>
      </ul>
    </div>
  </div>

  <footer id="gnb-bottom">
    <div id="gnb-bottom-wrap">
      <div class="gnb-bottom-update new-dot">{{this.updateDate.y}}.{{this.updateDate.m}} update</div>
      <div class="gnb-bottom-copyright">2019 swirlflag</div>
    </div>
    
  </footer>

</nav>
</template>

<script>

import u from '../utils/utilMethod.js'
import { mapGetters, mapMutations , mapActions} from 'vuex';
import { getAppData } from '../api/index.js';

export default {

  data(){
    return {
      activeCategoryData : {id:0,name:'all'},
      contentItemData : {},
      categoryData : [],
      updateDate : {},
      targetContentList : [],
      categoryItemHeight : 0,
      categoryFullHeight : 0,
    }
  },

  computed : {
    ...mapGetters([
      'GET_contentsData',
      'GET_adminData',
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
      'OPR_gnbOpen',
      'OPR_gnbClose',
      'OPR_textSlide',
      'OPR_mobileActiveTouchStart',
      'OPR_mobileActiveTouchEnd',
      
      'SET_gnbSelect',
      'SET_spySubscribe',
    ]),
    dateNumberToObject(datenum){
      datenum = datenum.toString(10);
      return {
        y : "20" + datenum.substring(0,2),
        m : datenum.substring(2,4),
        d : datenum.substring(4,6),
      }
    },
    utc(dateobj){
      return Date.UTC(dateobj.y, dateobj.m,dateobj.d);
    },
    setNavCategoryHeight(){
      this.categoryItemHeight = this.categoryNow.offsetHeight;
      this.categoryFullHeight = this.categoryItemHeight * (this.categoryData.length + 1);
    },
    setAdminData(data){
      this.categoryData = data['category'];
      this.updateDate = this.dateNumberToObject(data['update-date']);
    },
    setTargetContentList(data){
      this.targetContentList = data;
    },
    setActiveCategory(data){
      this.activeCategoryData = {...data};
    },
    setCategoryHeight(num){
      this.category.style.height = parseInt(num) + 'px';
    },
    pushCategoryData(data){
      this.categoryData.push(data);
    },
    setActiveCategoryContent(data){
      data = data.sort((a,b) => b['update-date']-a['update-date']);
      this.contentItemData = data;
      let updateUTC = this.utc(this.updateDate)
      for(let i = 0 ; i < data.length; ++i){
        let obj = this.dateNumberToObject(data[i]['update-date']);
        data[i]['is-new'] = 
          updateUTC < this.utc(obj) + 2591999999 || updateUTC == this.utc(obj) ?
          true : false;
      };
    },
    showHideContentList(data){
      
      for(let i = 0; i < this.contentsItem.length; ++i){
        this.contentsItem[i].classList.remove('active');
        setTimeout(()=>{
          this.contentsItem[i].classList.add('hidden');
        },1000);
      };

      setTimeout(()=>{
        let condition;
        if(this.activeCategoryData.id == 0){
          condition = u.map(n => n ,this.contentsItem)
        }else{
          condition = u.filter(n => JSON.parse(n.getAttribute('data-content-item'))['category'] == this.activeCategoryData.name, this.contentsItem);
        };

        this.setTargetContentList(condition);

        for(let i = 0, l = this.targetContentList.length; i < l; ++i){
          this.targetContentList[i].classList.remove('hidden');
          setTimeout(()=>{
            this.targetContentList[i].classList.add('active');  
          },(i+1)*130);
        };
      },1000);

    },

    openNavCategoryHeight(){
      // if(u.preventDuplicationAnimation(this.category,1)){return};
      this.category.classList.add('open');
      this.setCategoryHeight(this.categoryFullHeight);
    },
    closeNavCategoryHeight(){
      // if(u.preventDuplicationAnimation(this.category,1)){return};
      this.category.classList.remove('open');
      this.setCategoryHeight(this.categoryItemHeight);
    },
    resetSelectContentsItem(){
      u.map((item)=>{item.classList.remove('select')},this.contentsItem);
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
      const before = this.activeCategoryData;
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
        msg : this.activeCategoryData.name,
      });
      this.showHideContentList(this.GET_contentsData);
    },

    contentsItemClick(e){
      this.resetSelectContentsItem();
      e.target.parentElement.classList.add('select');
    },

    dataAwaitGnb(response){
      this.setAdminData(this.GET_adminData);
      this.setActiveCategoryContent(this.GET_contentsData);
      this.setNavCategoryHeight();
      this.closeNavCategoryHeight();
      this.OPR_gnbOpen();
    },

    testtoggle(){this.gnb.classList.toggle('close')},
    testclose(){this.gnb.classList.add('close')},
    testopen(){this.gnb.classList.remove('close')},
    testaction(){
      this.showHideContentList(this.GET_contentsData);
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
    u.scrollCorrection(this.gnbInner);
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

<style>




</style>

<style scoped>
.ios-app #gnb{
  box-sizing :content-box;
  border-right: 2px solid #000;
}

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
  margin-bottom: 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  font-weight: lighter;
  box-sizing:border-box;
  opacity: 0;
}
.gnb-contents-item.active{
  opacity: 1;
}
.hidden{
  height: none !important;
  margin: none !important;
  opacity: 0;
  font-size: 0;
  display: none !important;
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
  transition: all 0.3s ease;}




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
  font-size: 16px;
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
  .pc-app #gnb-contents-list .gnb-contents-item{
    margin: 10px 0;
  }
  .pc-app #gnb-contents-list .gnb-contents-item a{
    padding: 12px 0 12px 18px;
  }
  .mobile-app #gnb-contents-list .gnb-contents-item a{
    padding: 20px 0 20px 20px;
    font-size: 16px;
    box-sizing: border-box;
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
    margin-bottom: 1.5vw;
    font-size: 1.05vw;
  }
  #gnb-contents-list .gnb-contents-item a{
    padding: 0.3vw 0 0.4vw 1.5vw;
  }
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
  opacity: 1;
  transition: all 3s ease;
  left: 0;
}
.fade-enter, .fade-leave-to {
  transition: all 3s ease;
  opacity: 0;
  position: relative;
  background: #d3d;
  background-color: #fff;
  z-index: 999;
}



</style>

<style>

/* .gnb-contents-item{
  transition: opacity 1s ease !important;
  opacity: 0;
}
.gnb-contents-item.active{
  opacity: 1;
}
.hidden{
  height: none !important;
  margin: none !important;
  opacity: 0;
  font-size: 0;
  display: none !important;
} */

</style>
