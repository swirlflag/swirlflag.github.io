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
        <span class="arrow-bottom"></span>
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
        </li>
        <li class="gnb-contents-item new-dot">
          <a href="#">only five centuries,</a>
        </li>
        <li class="gnb-contents-item new-dot">
          <a href="#">type specimen</a>
        </li>
        <li class="gnb-contents-item new-dot">
          <a href="#">publishing</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">software like</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">packages and</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">Ipsum generators</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">or non-characteristic</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">The first line</a>
        </li>

      </ul>
    </div>
  </div>

  <footer id="gnb-bottom">
    <div id="gnb-bottom-wrap">
      <div class="gnb-bottom-update">2019.02.18 update</div>
      <div class="gnb-bottom-copyright">2019 swirlflag</div>
    </div>
  </footer>

</nav>
</template>

<script>
export default {

  data(){
    return {
      categoryItemHeight : 0,
      categoryFullHeight : 0,
    }
  },

  computed : {
    gnb: () => document.getElementById('gnb'),
    category : () => document.getElementById('gnb-category'),
    categoryNow : () => document.getElementById('gnb-category-now'),
    categoryItem : () => document.getElementsByClassName('gnb-category-item'),
  },
  
  methods : {
    navCreate(){ //임시작성 :  값을 전부 즉시변경
      this.categoryItemHeight = this.categoryNow.offsetHeight;
      this.categoryFullHeight = this.categoryItemHeight * (this.categoryItem.length + 1);

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
    },


    test(){
      this.gnb.classList.toggle('close')
    },

  },

  created(){
    // this.navCreate();
  },

  mounted(){
    // console.log(this.hey);
    this.navCreate();
    window.test = this.test;
  }

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
  top: calc(50% - 2px); left: 5px;
  background-color: red;  
  border-radius: 200px;
}
.new-dot:hover::before{
  background-color: #fff;
}


#gnb{
  width: 50%;
  max-width : 500px;
  left: 0%;
  box-sizing: border-box;
  letter-spacing: 0.03em;
  font-size: 1em;
  position: relative;
  overflow-x : hidden;
  /* overflow: hidden; */
  flex-direction: column;
  transition: all 2.5s ease;
  background: #fff;
  font-weight: lighter;
  /* transform: perspective(500px) translate3d(10px,0px,0px); */
}

#gnb.close{/* 임시 */
  margin-left: -50%;
}

#gnb-inner::-webkit-scrollbar {width: 3px; height: 3px;}
#gnb-inner::-webkit-scrollbar-track {background: #f5f5f5; }
#gnb-inner::-webkit-scrollbar-thumb {background: #444; }
#gnb-inner::-webkit-scrollbar-thumb:hover {}

.dummy{
  height: 200px;
}

#gnb-inner{
  height: 100%;
  padding: 30px 20px 55px;
  padding: 0 40px;
  overflow-y: scroll;
}
#gnb-inner > div[id^="gnb"]{
  margin-bottom: 30px;
}

#gnb-top{
  display: flex;
  margin-top: 30px;
}

#gnb-logo{
  font-size: 24px;
  font-weight: lighter;
  letter-spacing: 0.2em;
  font-family: 'Shadows Into Light', 'Ubuntu' , sans-serif;  
}

#gnb-logo:hover a{
  text-shadow: 0 0 7px #444;
  color: #fff;
}

#gnb-top-menu{
  display: flex;
  margin-left: auto;
  align-items: flex-end;
  
}
#gnb-top-menu > div[id^="gnb-top"]{
  position: relative;
  margin:  0 15px;;
}
#gnb-top-menu > div[id^="gnb-top"] a{
  line-height: 0; 
  padding: 2px;
}
#gnb-top-menu > div[id^="gnb-top"] a:hover{ color: #fff;background: #444;}
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
  border: 1px solid #444 ;  
  overflow-y:hidden;
  box-sizing: border-box;
}
#gnb-category::before{
  content: '';
  width: 10px;height: 10px;
  background-color: #d3d;
}


#gnb-category-now{
  display: flex;
  align-items: center;
}
#gnb-category-now .arrow-bottom{
  width: 10px; height: 6px;
  background: url(../assets/icons/mini_arrow.png) no-repeat;
  background-size: 10px 12px;
  background-position: 0 0px;
  opacity: 0.7;
  margin-left: auto;
}

#gnb-category.open #gnb-category-now .arrow-bottom{
  background-position: 0 -6px;
  opacity: 1;
}

#gnb-category-now,
.gnb-category-item{
  padding: 12px;
  padding-left: 12px;
  box-sizing: border-box;
}

#gnb-category-now-name,
.gnb-category-item span{
  display: inline-block;
  padding: 3px;
}

#gnb-category-now-name:hover,
.gnb-category-item span:hover{
  background: #444;
  color: #fff;
}

#gnb-contents{
  padding-top: 30px;
  border-top: 2px solid #444;
  margin-bottom: 70px !important;
}

#gnb-contents-list .gnb-contents-item{
  margin: 20px 0;
  padding: 0 15px;
  padding-right: 9px;
  font-size: 15px;
  display: flex;
  align-items: center;
}

#gnb-contents-list .gnb-contents-item::after{
  content: '';
  width: 16px;height: 6px;
  background: url(../assets/icons/mini-arrow2.png) no-repeat;
  background-size: contain;
  margin-left: auto;
}

#gnb-contents-list .gnb-contents-item:first-child{
  margin-top: 0;
}
#gnb-contents-list .gnb-contents-item:hover{
  background-color: #444;
}

#gnb-contents-list .gnb-contents-item:hover a{
  color: #fff;
}

#gnb-contents-list .gnb-contents-item a{ 
  width: 100%; 
  display: inline-block;
  padding: 6px 0px;
}


#gnb-bottom{
  position: absolute;
  width: calc(100% - 3px);
  bottom: 0; left: 0;
  border-top: 1px solid #444;
  background-color: #fff;
  margin-bottom: 0 !important;
  font-size: 10px;
  padding: 15px 0;
}


#gnb-bottom-wrap{
  /* margin: 0 40px; */
  padding: 0 40px;
  display: flex;
}
#gnb-bottom .gnb-bottom-update{
  padding-left: 15px;
}

#gnb-bottom .gnb-bottom-copyright{
  padding-left: 15px;
  margin-left: auto;
}



/* transition */
#gnb-category,
#gnb-logo a,
#gnb-top-menu > div[id^="gnb-top"],
#gnb-top-menu > div[id^="gnb-top"] a,
#gnb-category-now span,
.gnb-category-item span,
.gnb-contents-item,
.gnb-contents-item a,
.new-dot::before
{cursor: pointer; transition: all 0.5s ease;}






@media (max-width: 768px) {

  #gnb{
    position: fixed;
    width: 100%; max-width:100%;height: 100%;
    background-color: #ddd;

  }
  #gnb-inner{
    
  }

}
</style>
