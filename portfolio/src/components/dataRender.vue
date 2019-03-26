<template></template>

<script>
import u from '../utils/utilMethod.js';
import { mapMutations , mapGetters, mapActions} from 'vuex';

export default {

  computed : {
    ...mapGetters([
      'GET_contentsData',
      'GET_updateDate',
    ])
  },
  methods : {

    setActiveCategoryContent(data){
      data = data.sort((a,b) => b['update-date']-a['update-date']);
      this.SET_contentsData(data);
      let updateUTC = u.utc(this.GET_updateDate);

      for(let i = 0 ; i < data.length; ++i){
        let obj = u.dateNumberToObject(data[i]['update-date']);
        data[i]['is-new'] = 
          updateUTC < u.utc(obj) + 2591999999 || updateUTC == u.utc(obj) ?
          true : false;
      };
    },

    setAdminData(data){
      // this.categoryData = data['category'];
      this.SET_categoryData(data['category'])

      // this.updateDate = this.dateNumberToObject(data['update-date']);

      this.SET_updateDate(u.dateNumberToObject(data['update-date']));
    }, 

    finishFetchDataFunction(response, actions){
      for(let i =0, l = actions.length; i < l; ++i){
        actions[i](response);
      };
    },
    ...mapMutations([
      'LOAD_isMobile',
      'SET_spyDefine',
      'SET_putIdContentData',
      'SET_spySubscribe',
      'SET_contentsData',
      'SET_appData',
      'SET_isMini'
    ]),
    ...mapActions([
      'settingAllData',
    ]),
    
    setIsMiniAndResizeHandle(){
      this.SET_isMini(window.innerWidth <= 768 ? true : false);
      window.addEventListener('resize', ()=>{
        this.SET_isMini(window.innerWidth <= 768 ? true : false);
      });
    },

    dataAwaitDataRender(response){
      this.SET_appData(response.data);
      this.SET_putIdContentData();
      this.setActiveCategoryContent(this.GET_contentsData);
    },
  },

  created(){    
    this.SET_spyDefine();
    this.LOAD_isMobile();
    this.settingAllData(this.finishFetchDataFunction);
    this.SET_spySubscribe(this.dataAwaitDataRender);
    this.setIsMiniAndResizeHandle();
  },

}
</script>

<style>

</style>
