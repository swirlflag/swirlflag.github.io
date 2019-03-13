<template></template>

<script>
import { mapMutations , mapGetters, mapActions} from 'vuex';

export default {
  methods : {
    finishFetchDataFunction(response, actions){
      for(let i =0; i < actions.length; ++i){
        actions[i](response);
      };
    },
    ...mapMutations([
      'LOAD_isMobile',
      'SET_spyDefine',
    ]),
    ...mapActions([
      'settingAllData',
    ]),
  },

  created(){    
    this.SET_spyDefine();
    this.LOAD_isMobile();
    this.settingAllData(this.finishFetchDataFunction);
  },

}
</script>

<style>

</style>
