<template>
<nav id="gnb">
  <div id="gnb-inner">

    <div id="gnb-top">
      <h1 id="gnb-logo">
        <a href="#">swirlflag</a>
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
        <span>now</span>
      </p>
      <ul id="gnb-category-list">
        <li class="gnb-category-item">
          <span>item1</span>
        </li>
        <li class="gnb-category-item">
          <span>item2</span>
        </li>
        <li class="gnb-category-item">
          <span>item3</span>
        </li>
        <li class="gnb-category-item">
          <span>item4</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
        <li class="gnb-category-item">
          <span>item5</span>
        </li>
      </ul>
    </div>

    <div id="gnb-contents">
      <ul id="gnb-contents-list">
        <li class="gnb-contents-item">
          <a href="#">content -item</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">content -item</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">content -item</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">content -item</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">content -item</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">content -item</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">content -item</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">content -item</a>
        </li>
        <li class="gnb-contents-item">
          <a href="#">content -item</a>
        </li>

      </ul>
    </div>
  </div>

  <footer id="gnb-bottom">
    gnb bottom
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
    navCreate(){ //임시..
      this.categoryItemHeight = this.categoryNow.offsetHeight;
      this.categoryFullHeight = this.categoryItemHeight * this.categoryItem.length + 1;

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
    }
  },

  created(){
    // this.navCreate();
  },

  mounted(){
    // console.log(this.hey);
    this.navCreate();
  }

}
</script>

<style scoped>

#gnb{
  width: 50%;
  max-width : 500px;
  box-sizing: border-box;
  
  letter-spacing: 0.1em;
  font-size: 1em;
  position: relative;
  overflow-x : hidden;
  /* overflow-y: scroll; */
  overflow-y: auto;
  flex-direction: column;
}

#gnb-inner::-webkit-scrollbar {width: 3px; height: 3px;}
#gnb-inner::-webkit-scrollbar-track {background: #f3f3f3; }
#gnb-inner::-webkit-scrollbar-thumb {background: #333; }
#gnb-inner::-webkit-scrollbar-thumb:hover {}

.dummy{
  height: 200px;
}

#gnb-inner{
  width: 100%; height: 100%;
  padding: 30px 20px 55px;
  padding: 0 40px;
  overflow-y: scroll;
}
#gnb-inner > div[id^="gnb"]{
  margin-bottom: 30px;
}

#gnb-top{
  display: flex;
  border: 1px solid #ddd;
}
#gnb-logo{
  font-size: 24px;
  font-weight: lighter;
  letter-spacing: 0.3em;
}

#gnb-top-menu{
  display: flex;
  margin-left: auto;
  align-items: flex-end;
  
}
#gnb-top-menu > div[id^="gnb-top"]{
  position: relative;
  margin:  0 20px;
}
#gnb-top-menu > div[id^="gnb-top"] a{
  line-height: 0;
}
#gnb-top-menu > div[id^="gnb-top"]::before{
  content : '';
  position: absolute;
  width: 1px; height: 100%;
  right: -20px; top: -1px;
  background: #ddd;
}
#gnb-top-menu > div[id^="gnb-top"]:last-child{margin-right: 0;}
#gnb-top-menu > div[id^="gnb-top"]:last-child::before{display: none;}

#gnb-category{
  border: 1px solid #000 ;  
  overflow-y:hidden;
}
#gnb-category.open{
  
}

#gnb-category-now,
.gnb-category-item{
  padding: 15px;
}

#gnb-category-now span,
.gnb-category-item span{
  border: 1px solid #3d3;
}

#gnb-contents{
  padding-top: 30px;
  border-top: 2px solid #000;
}

#gnb-contents-list .gnb-contents-item{
  /* border: 1px solid #000; */
  margin: 20px 0;
  padding: 0 15px;
  font-size: 16px;
  border: 1px solid #ddd;
}
#gnb-contents-list .gnb-contents-item:first-child{
  margin-top: 0;
}
#gnb-contents-list .gnb-contents-item a{ 
  width: 100%; 
  display: inline-block;
}


#gnb-bottom{
  position: absolute;
  bottom: 0; left: 0;
  width: 100%;
  /* border: 1px solid #000; */
  border-top: 1px solid #000;
  background: #ddd;
  /* margin-top: auto; */
  padding: 15px 0 15px 20px;
  margin-bottom: 0 !important;
}









/* transition */
#gnb-category{
  cursor: pointer;
  transition: all 0.3s ease;
}





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
