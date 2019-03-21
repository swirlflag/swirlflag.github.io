<template>
  <div id="router-area">
    <transition name="page" v-on:before-enter="delayPaging" v-on:after-enter="delayPaging">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods : {
    delayPaging(){
      this.$store.commit('NOT_isPaging');
    },
  }
}
</script>

<style>
#router-area{
  display: flex;
  flex : 1;
  position: relative;
  width: 100%; height: 100%;
  overflow-y: scroll;
  overflow-x: hidden; 
}

.router-section{
  position: absolute;
  top: 0; left: 0;
  width: 100% !important;
  min-height : 100%;
}
.page-enter{
  transition: all 1.5s ease;
  left: 100%;
}
.page-enter-to{
  transition: all 1.5s ease;
  position: absolute;
  left: 0 !important;
  overflow: hidden;
}
.page-leave{
  transition: all 1.5s ease;  
  position: absolute; 
}
.page-leave-to{
  transition: all 1.5s ease;  
  position: absolute;
  left: -100% !important;
  overflow: hidden;
}


</style>
