<template>
  <div  v-if="GET_isMini" id="content-goto-gnb" class="page-controls" @click="this.OPR_gnbOpen">
    <span class="icon-arrow-left"></span>
    <span class="goto-text">BACK TO LIST</span>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
export default {

  
  computed : {
    ...mapGetters([
      'GET_isMini',
    ]),
  },

  methods : {
    ...mapMutations([
      'OPR_gnbOpen'
    ]),
  },

}
</script>

<style>
#content-goto-gnb{
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  cursor: pointer;
  height: 60px;
  display: none;
  letter-spacing: 0.3em;
  background: #fff;
  transition: all 0.5s ease;
}

#content-goto-gnb .icon-arrow-left{margin-right: 15px;}

@media screen and (max-width: 768px) {
  #content-goto-gnb{
    display: flex; 
  }
  .router-section{
    margin-top: 60px;
  }
}

</style>
