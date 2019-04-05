<template>
<section id="content-page" class="router-section target-section" >
  <div id="content-main">
    <div id="content-header">
      <span id="content-category" class="spread spread-wait">
        ma seung hyun
      </span>
      <h2 id="content-name" class="spread spread-wait">
        swirlflag
      </h2>

      <div id="header-caption">
        <span>front-end developer,</span> 
        <span>web publisher</span>
      </div>

    </div>

    <div id="content-maintext" class="spread spread-wait">
      text
    </div>

    <div id="content-info">
      <ul id="content-info-list">
        <li class="content-info-item spread spread-wait">
          <span class="content-info-property">email</span> 
          <span class="content-info-value">
            swirlflag@gmail.com
          </span> 
        </li>
        <li class="content-info-item spread spread-wait">
          <span class="content-info-property">email</span> 
          <span class="content-info-value">
            swirlflag@gamil.com
          </span> 
        </li>
      </ul>
    </div>

  </div>
</section>
</template>

<script>
export default {

}
</script>

<style>


#header-caption{
  font-family: 'Ubuntu';
  font-size: 14px;
  margin-top: 40px;
}
#header-caption span{
  display: block;
  margin-bottom: 10px;
}
#header-caption span:last-child{
  margin-bottom: 0;
}

@media screen and (max-width: 1280px){

  #header-caption{
    margin-top: 20px !important;
  }

}

@media screen and (min-width : 1640px){

  #header-caption{
    margin-top: 2.8vw;
    font-size: 1vw;
  }
  #header-caption span{
    margin-bottom: 1vw;
  }
}
</style>
