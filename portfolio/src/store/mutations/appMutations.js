export default {

  LOAD_isMobile(state) {
    state.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },

  LOAD_finshedDataLoad(state){
    console.log('DATA LOAD');
    console.log('contents : ',this.contentsData);
    console.log('admin : ',this.adminData);
    console.log(state);
    this.SET_gnbValue();
    this.CL_gnbClose();
  },
  
  SET_adminData(state,data){
    state.adminData = data;
  },

  SET_appData(state,data){
    state.contentsData = data['contents-data'];
    state.adminData = data['admin-data'];
  },

  

}