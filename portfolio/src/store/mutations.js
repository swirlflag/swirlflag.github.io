export default {

  LOAD_isMobile(state) {
    const isMobileFilter = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    isMobileFilter ? state.isMobile = true : state.isMobile = false;
  },

}