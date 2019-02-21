<template>

<nav id="gnb" class="">
  <div id="gnb-inner">

    <div id="gnb-top">
      <h1 id="gnb-logo">
        <a href="#">swirlflag.</a>
      </h1>
      <div id="gnb-top-menu">
        <div id="gnb-top-about">
          <a href="#">about</a>

        </div>
        <div id="gnb-top-contact">
          <a href="#">contact</a>
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
          <a href="#">Lorem Ipsum</a>
          <span class="gnb-contents-item-arrow"></span>
        </li>
        <li class="gnb-contents-item new-dot">
          <a href="#">only five centuries,</a>
          <span class="gnb-contents-item-arrow"></span>
        </li>
        <li class="gnb-contents-item new-dot">
          <a href="#">type specimen</a>
          <span class="gnb-contents-item-arrow"></span>
        </li>
        <li class="gnb-contents-item new-dot">
          <a href="#">publishing</a>
          <span class="gnb-contents-item-arrow"></span>
        </li>
        <li class="gnb-contents-item">
          <a href="#">software like</a>
          <span class="gnb-contents-item-arrow"></span>
        </li>
        <li class="gnb-contents-item">
          <a href="#">packages and</a>
          <span class="gnb-contents-item-arrow"></span>
        </li>
        <li class="gnb-contents-item">
          <a href="#">Ipsum generators</a>
          <span class="gnb-contents-item-arrow"></span>
        </li>
        <li class="gnb-contents-item">
          <a href="#">or non-characteristic</a>
          <span class="gnb-contents-item-arrow"></span>
        </li>
        <li class="gnb-contents-item">
          <a href="#">The first line</a>
          <span class="gnb-contents-item-arrow"></span>
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
      console.log(this.categoryItemHeight);
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
  },

}
</script>

<style scoped>

.new-dot{
  position: relative;
}
.new-dot::before{
  content : '';
  width: 4px; height: 4px;
  position: absolute; 
  top: calc(50% - 2px); left: 6px;
  background-color: rgb(255, 0, 0);  
  border-radius: 200px;
}

#gnb{
  width: 50%;
  max-width : 520px;
  left: 0%;
  box-sizing: border-box;
  letter-spacing: 0.03em;
  font-size: 1em;
  position: relative;
  overflow-x : hidden;
  flex-direction: column;
  transition: all 2s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #fff;
  font-weight: lighter;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;
}


#gnb.close{/* 임시 */
  margin-left: -50%;
}

.dummy{
  height: 200px;
}

#gnb-inner{
  height: 100%;
  padding: 30px 20px 55px;
  padding: 0 40px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

}
#gnb-inner > div[id^="gnb"]{
  margin-bottom: 30px;
}
/* 
#gnb-inner::-webkit-scrollbar {width: 3px; height: 3px;}
#gnb-inner::-webkit-scrollbar-track {background: #f5f5f5; }
#gnb-inner::-webkit-scrollbar-thumb {background: #444; } */

::-webkit-scrollbar {width: 3px !important; height: 3px !important;}
::-webkit-scrollbar-track {background: #f5f5f5 !important; }
::-webkit-scrollbar-thumb {background: #444 !important; }

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
  letter-spacing: 0.15em;
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
  letter-spacing: 0.1em;
}
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

#gnb-category.open #gnb-category-now .arrow-triangle{
  background-position: 0 -6px;
}

#gnb-category-now,
.gnb-category-item{
  padding: 12px;
  padding-left: 12px;
  box-sizing: border-box;
}

#gnb-category-now-name,
.gnb-category-item span
{
  display: inline-block;
  padding: 4px 5px;
}

#gnb-contents{
  padding-top: 30px;
  border-top: 2px solid #000;
  margin-bottom: 70px !important;
}

#gnb-contents-list .gnb-contents-item{
  margin: 20px 0;
  padding: 0 15px;
  padding-right: 9px;
  font-size: 15px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  font-weight: normal;
  box-sizing:border-box;
}

#gnb-contents-list .gnb-contents-item:first-child{
  margin-top: 0;
}


#gnb-contents-list .gnb-contents-item a{ 
  width: 100%; 
  display: inline-block;
  padding: 5px 0px 6px;
}


#gnb-contents-list .gnb-contents-item.select .gnb-contents-item-arrow{
  right: -30px;
}
#gnb-contents-list .gnb-contents-item.select .gnb-contents-item-arrow::before{
  background-color: #fff;
  left: -23px;
}


#gnb-contents-list .gnb-contents-item-arrow{
  width: 16px;height: 6px;
  background: url(../assets/icons/mini-arrow2.png) no-repeat;
  background-size: contain;
  margin-left: auto;
  position: relative;
  right: 0;
}
#gnb-contents-list .gnb-contents-item-arrow::before{
  content: '';
  width: 4px; height: 4px;  border-radius: 200px;
  background: transparent;
  position: absolute;
  left: 30px; top: 1px;
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
  letter-spacing: 0.1em;
}

#gnb-bottom-wrap{  
  padding: 0 40px;
  display: flex;
}
#gnb-bottom .gnb-bottom-update{
  padding-left: 15px;
}

#gnb-bottom .gnb-bottom-copyright{
  padding-left: 15px;
  margin-left: auto;
  margin-right: 2px;
}

/* transition */
#gnb-inner,
#gnb-logo a,
#gnb-top-menu > div[id^="gnb-top"],
#gnb-top-menu > div[id^="gnb-top"] a,
#gnb-category-now-name,
.gnb-category-item span,
.gnb-contents-item,
.gnb-contents-item a,
.new-dot::before
{transition: all 0.2s ease;}

.arrow-triangle,
.gnb-contents-item-arrow,
.gnb-contents-item-arrow::before
{transition: all 0.5s ease;}

#gnb-category
{transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);}

.pc-app #gnb-contents-list .gnb-contents-item:hover,
#gnb-contents-list .gnb-contents-item.select{
  background-color: #000;
}
.pc-app #gnb-contents-list .gnb-contents-item:hover a,
#gnb-contents-list .gnb-contents-item.select a{
  color: #fff;
}

.pc-app #gnb-contents-list .gnb-contents-item:hover .gnb-contents-item-arrow,
.mobile-app #gnb-contents-list .gnb-contents-item.select .gnb-contents-item-arrow
{
  right: -30px;
}
.pc-app #gnb-contents-list .gnb-contents-item:hover .gnb-contents-item-arrow::before,
.mobile-app #gnb-contents-list .gnb-contents-item.select .gnb-contents-item-arrow::before
{
  background-color: #fff;
  left: -23px;
}

.mobile-app #gnb-logo a,
.mobile-app #gnb-top-menu > div[id^="gnb-top"],
.mobile-app #gnb-top-menu > div[id^="gnb-top"] a,
.mobile-app #gnb-category-list .gnb-category-item,
.mobile-app #gnb-category-list .gnb-category-item span
{transition: none !important; }

.pc-app #gnb-top-menu > div[id^="gnb-top"] a:hover,
.pc-app .gnb-category-item span:hover,
.mobile-app #gnb-top-menu > div[id^="gnb-top"] a.mobile-active,
.mobile-app #gnb-logo a.mobile-active,
.mobile-app .gnb-category-item span.mobile-active
{ 
  background: #000;
  color: #fff;
}


.mobile-app #gnb-category-now,
.mobile-app .gnb-category-item{
  padding: 0;
}

.mobile-app .gnb-contents-item{
  padding-left: 20px !important;
}

.mobile-app #gnb-category-now-name,
.mobile-app .gnb-category-item span
{
  padding:20px;
  display: block;
  width: 100%;
}
.mobile-app #gnb-bottom .gnb-bottom-update{
  padding-left: 20px;
}
.mobile-app #gnb-bottom{
  width: 100%;
}
.mobile-app #gnb-top-menu > div[id^="gnb-top"]{margin:0 10px !important;}
.mobile-app #gnb-top-menu > div[id^="gnb-top"]::before{right: -10px !important; }
.mobile-app #gnb-top-menu > div[id^="gnb-top"]:last-child{margin-right: 0 !important;}


@media screen and (max-width: 768px) {

  #gnb{
    position: fixed;
    width: 100%; max-width:100%;height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  #gnb.close{
    margin-left: -100%;
  }
  #gnb-contents-list .gnb-contents-item{
    margin: 0;
    font-size: 16px; 
  }

  #gnb-contents-list .gnb-contents-item a{
    padding: 20px 0;
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


@media screen and (max-width: 1280px ){
  
  #gnb-inner,
  #gnb-bottom-wrap{
    padding: 0 20px;
  }
  #gnb-top{
    margin-top: 30px;
  }


}/*  */


</style>
