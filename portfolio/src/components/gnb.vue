<template>

<nav id="gnb">
  <div id="gnb-inner">
    
    <div class="arrow-icon-right"></div>
    <div id="gnb-top">
      <h1 id="gnb-logo">
        <a href="#">swirlflag.</a>
      </h1>
      <div id="gnb-top-menu">
        <div id="gnb-top-about">
          <router-link to="/logo">about</router-link>
        </div>
        <div id="gnb-top-contact">
          <router-link to="/cont">contact</router-link>
        </div>
      </div>
    </div>
    

    <div id="gnb-category">
      <p id="gnb-category-now">
        <span id="gnb-category-now-name">all</span>
        <span class="arrow-triangle"></span>
      </p>
      <ul id="gnb-category-list">
        <li class="gnb-category-item">
          <span>markup</span>
        </li>
        <li class="gnb-category-item">
          <span>front end</span>
        </li>
        <li class="gnb-category-item">
          <span>framework</span>
        </li>
        <li class="gnb-category-item">
          <span>design</span>
        </li>
        <li class="gnb-category-item">
          <span>etc</span>
        </li>
        <li class="gnb-category-item">
          <span>posts</span>
        </li>
        <li class="gnb-category-item">
          <span>category7</span>
        </li>
      </ul>
    </div>

    

    <div id="gnb-contents">
      <ul id="gnb-contents-list">
        <li class="gnb-contents-item new-dot">
          <a href="#">
            <span>Lorem Ipsum</span>
            <span class="icon-arrow-right"></span>
          </a>
        </li>
        <li class="gnb-contents-item new-dot">
          <a href="#">
            <span>only five centuries,</span>
            <span class="icon-arrow-right"></span>
          </a>
        </li>
        <li class="gnb-contents-item new-dot">
          <a href="#">
            <span>type specimen</span>
            <span class="icon-arrow-right"></span>
          </a>
        </li>
        <li class="gnb-contents-item new-dot">
          <a href="#">
            <span>publishing</span>
            <span class="icon-arrow-right"></span>
          </a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">
            <span>software like</span>
            <span class="icon-arrow-right"></span>
          </a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">
            <span>packages and</span>
            <span class="icon-arrow-right"></span>
          </a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">
            <span>Ipsum generators</span>
            <span class="icon-arrow-right"></span>
          </a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">  
            <span>or non-characteristic</span>
            <span class="icon-arrow-right"></span>
          </a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">  
            <span>The first line</span>
            <span class="icon-arrow-right"></span>
          </a>
        </li>

      </ul>
    </div>
  </div>

  <footer id="gnb-bottom">
    <div id="gnb-bottom-wrap">
      <div class="gnb-bottom-update new-dot">2019.02.18 update</div>
      <div class="gnb-bottom-copyright">2019 swirlflag</div>
    </div>
    
  </footer>

</nav>
</template>

<script>
// const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// import '../css/m_gnb.css';

export default {

  data(){
    return {
      categoryItemHeight : 0,
      categoryFullHeight : 0,
      testdata : true
    }
  },

  computed : {
    gnb: () => document.getElementById('gnb'),
    gnbInner: () => document.getElementById('gnb-inner'),
    category : () => document.getElementById('gnb-category'),
    categoryNow : () => document.getElementById('gnb-category-now'),
    categoryItem : () => document.getElementsByClassName('gnb-category-item'),
    contentsItem : () => document.getElementsByClassName('gnb-contents-item'),
    mobileActiveElements : () => document.querySelectorAll('#gnb-logo a, #gnb-top-menu a,.gnb-category-item span'),
  },
  
  //모든 메소드 임시작성 :  일단모양만 동작하게 값을 전부 즉시변경/. 나중에 무조건 리팩토링 해야함
  methods : {
    
    scrollCorrection(el){
      el.addEventListener('scroll', function(){
        if(el.offsetHeight + el.scrollTop != el.scrollHeight){return};
        el.scrollTop = (el.scrollHeight - (el.scrollHeight - el.scrollTop)) - 0.1;
      });
    },

    setNavCategoryHeight(){
      this.categoryItemHeight = this.categoryNow.offsetHeight;
      this.categoryFullHeight = this.categoryItemHeight * (this.categoryItem.length + 1);
      this.category.style.height = this.categoryFullHeight + 'px';
    },

    resetSelectContentsItem(){
      for(let i = 0; i< this.contentsItem.length; ++i){
        this.contentsItem[i].classList.remove('select');
      };
    },

    testtoggle(){this.gnb.classList.toggle('close')},
    testclose(){this.gnb.classList.add('close')},
    testopen(){this.gnb.classList.remove('close')},

    mobileCSS(){if(!(this.$store.state.isMobile)){return}},
  
    navCreate(){ 
      var _this = this;
      this.scrollCorrection(this.gnbInner);
      this.setNavCategoryHeight();

      this.category.addEventListener('click', () => {
        if(this.category.classList.contains('open')){
          this.category.classList.remove('open')
          this.category.style.height = this.categoryItemHeight + 'px';
        }else{
          this.category.classList.add('open');
          this.category.style.height = this.categoryFullHeight + 'px';
        };
      });

      this.category.style.height = this.categoryItemHeight + 'px';

      for(let i = 0; i < this.contentsItem.length; ++i){
        this.contentsItem[i].addEventListener('click', function(){
          _this.resetSelectContentsItem();
          this.classList.add('select');
        });
      };

      for(let i = 0; i < this.mobileActiveElements.length; ++i){
        this.mobileActiveElements[i].addEventListener('touchstart', (e) =>{
          this.mobileActiveElements[i].classList.add('mobile-active');
        });
        this.mobileActiveElements[i].addEventListener('touchend', (e) =>{
          this.mobileActiveElements[i].classList.remove('mobile-active');
        });
      };

      setInterval(()=>{
        this.setNavCategoryHeight();
        if(this.category.classList.contains('open')){
          this.category.style.height = this.categoryFullHeight + 'px';
        }else{
          this.category.style.height = this.categoryItemHeight + 'px';
        }
      },1000);

    },
  },

  created(){
    // this.navCreate();
  },

  mounted(){
    this.navCreate();
    window.testtoggle = this.testtoggle;
    window.testopen = this.testopen;
    window.testclose = this.testclose;
    // console.log(axios);
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
#gnb-category-now,
.gnb-category-item{
  padding: 12px;
  padding-left: 12px;
  box-sizing: border-box;
}
#gnb-category-now-name,
.gnb-category-item span{
  display: inline-block;
  padding: 4px 5px;
  font-weight: 100;
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
</style>
