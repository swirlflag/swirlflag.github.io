<template>
  <div id="bottom-alert">
    <div id="bottom-alert-message">{{ message }}</div>
  </div>
</template>

<script>

import { mapGetters , mapMutations } from 'vuex';
import u from '../utils/utilMethod.js'
import bus from '../utils/bus.js'


export default {

  data(){
    return {
      height : 0,
      message : 'null',
      isOn  : false,
    }
  },

  computed : {
    ...mapGetters([
      'GET_isBottomAlert',
    ]),
    
    alert : () => document.getElementById('bottom-alert'),

  },

  methods : {

    setInit(){
      this.height += u.pxDel(getComputedStyle(this.alert)['height']);
      this.height += u.pxDel(getComputedStyle(this.alert)['padding-top']);
      this.height += u.pxDel(getComputedStyle(this.alert)['padding-bottom']);
      this.alert.style.bottom = - this.height + 'px'; 
    },

    open(){
      this.alert.style.bottom = 0;
    },

    close(){
      this.alert.style.bottom =  - this.height + 'px';
    },

    show(message){
      
      this.alert.classList.remove('hide');
      this.message = message;
      this.open();

      setTimeout(()=>{
        this.close();
        setTimeout(()=>{
          this.alert.classList.add('hide');
          this.isOn  = false;
        },1000)
      },3000);
    },

    bottomAlertRed(message){
      if(this.isOn){
        return;
      }else{
        this.isOn = true;
      };
      this.alert.style.background = 'rgba(255, 133, 133, 1)'
      this.show(message);
    },
    bottomAlertGreen(message){
      if(this.isOn){
        return;
      }else{
        this.isOn = true;
      };
      this.alert.style.background = 'rgb(88, 206, 123)';
      this.show(message);
    },

  },

  mounted(){
    bus.$on('bottomAlertRed', this.bottomAlertRed);
    bus.$on('bottomAlertGreen', this.bottomAlertGreen);
    this.setInit();
  },

}
</script>

<style scoped>
#bottom-alert{
  position : fixed;
  width: 100%;
  bottom : -100%; left: 0;
  background: rgb(88, 206, 123);
  color: #fff;
  z-index: 100;
  padding: 20px 0;  
  transition: bottom 0.6s ease;
}
#bottom-alert.hide{
  opacity : 0;
}

#bottom-alert-message{
  text-align: center;
  /* font-size: 10px; */
  font-weight: normal;

}
</style>
