<template>
<div id="app">
  <div id="all-wrap">
    <gnb></gnb>
    <content-view></content-view>
  </div>
</div>
</template>

<script>
import 'reset-css';

import gnb from './components/gnb.vue';
import contentView from './components/contentView.vue';

export default {

  components : {
    'gnb': gnb,
    'content-view' : contentView,
  },

}
</script>

<style>




html,body{
  height: 100%;
}
#app {
  width: 100%; height: 100%;
  overflow: hidden;
}
#all-wrap{
  display: flex;
  width: 100%; height: 100%;
}



/* transition */

#gnb,
.section
{transition: all 0.3s ease;}

</style>
