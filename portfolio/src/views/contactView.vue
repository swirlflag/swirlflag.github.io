<template>
<section id="content-page" class="router-section target-section" >
  <div id="content-main">
    <div id="contact-form" class="sendcheckd">
      <form action="get">

        <div class="input-text">
          <div class="input-icon">
            <span class="triangle"></span>
          </div>
          <div v-bind:class="{'placehold' : !nameValue}" class="input-display">
            {{ nameValue || 'your name'}}
          </div>
          <input id="name" type="text" placeholder="name">
        </div>  

        <div class="input-email">
          <div class="input-icon">
            <span class="square"></span>
          </div>
          <div v-bind:class="{'placehold' : !emailValue}" class="input-display">
            {{ emailValue || 'your@email.com'}}
          </div>
          <input id="email" type="email" placeholder="email">
        </div>  

        <div class="input-textarea">
          <div class="input-icon">
            <span class="pentagon"></span>
          </div>
          <textarea name="contact-text" id="letter" placeholder="In the letter" v-bind:disabled="textareaState"></textarea>
        </div>

        <div class="page-controls spread spread-wait input-submit">
          <span class="beforebtn" @touchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">next</span>
          <span class="checkbtn" stouchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">cancle</span>
          <span class="checkbtn" @touchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">send</span>
        </div>
      </form>  
    </div>
  </div>
</section>
</template>

<script>

import { mapMutations , mapGetters } from 'vuex';
export default {
  data(){
    return {
      textareaState : false,  

      nameValue : null,
      emailValue : null,
      letterValue : null,
    }
  },

  computed : {
    nameInput : () => document.getElementsByClassName('input-text'),
    mailInput : () => document.getElementsByClassName('input-email'),
    textarea : () => document.querySelector('.input-textarea'),
  },

  methods : {

    ...mapMutations([
      'OPR_mobileActiveTouchStart',
      'OPR_mobileActiveTouchEnd',
    ]),

    settingInputs(){

      // for(let i = 0; i < this.inputs.length; ++i){
        // let target = this.inputs[i];
        // let input = this.inputs[i].getElementsByTagName('input')[0];
        target.addEventListener('click', function(){
          input.focus();
        });

        input.addEventListener('focus', function(){
          target.classList.add('focus');
        });

        input.addEventListener('blur', function(){
          target.classList.remove('focus');
        });

      // };
    },

    settingTextarea(){
      let input = this.textarea.getElementsByTagName('textarea')[0];
      this.textarea.addEventListener('click', function(){
        input.focus();
      })
      input.addEventListener('focus', () =>{
        this.textarea.classList.add('focus');
      });
      input.addEventListener('blur', () =>{
        this.textarea.classList.remove('focus');
      });
    },

    
 
  },

  mounted(){
    this.settingInputs();
    this.settingTextarea();
  }
}
</script>
<style>



.triangle{background: url(../assets/icons/figure-03.png) no-repeat;background-size: cover; }
.square{background: url(../assets/icons/figure-04.png) no-repeat;background-size: cover;}
.pentagon{background: url(../assets/icons/figure-05.png) no-repeat;background-size: cover;}
.focus .pentagon{background: url(../assets/icons/figure-05-white.png) no-repeat  !important;background-size: cover;}
.heptagon{background: url(../assets/icons/figure-07.png) no-repeat;background-size: cover;}

input,textarea{
  outline: none;
  border-radius: 0;
  padding: 0; margin: 0;
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  resize:none;
  font-size: 14px;
}
input::placeholder,
textarea::placeholder{
  color: #ccc;
}



#contact-form{
  margin-top: 40px;
}
#contact-form form > div{
  margin-bottom: 20px;
  transition: all 0.5s ease;
}

.input-text,
.input-email{
  width: 100%; height: 46px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.input-icon{
  width: 46px; height: 46px;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  position: absolute;
  align-items: center;
  justify-content: center;
}
@keyframes rotate {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
.input-icon span{
  width: 10px; height: 10px;
  animation-duration: 2.8s;
  animation-name: rotate;
  animation-timing-function:linear;
  animation-iteration-count: infinite;
}
.focus .input-icon{display: none;}
.input-display{
  width: 100px; height: 100%;
  border-bottom: 1px solid #000;
  position: absolute; top: 0; left: 66px;
  width: 100%;
  box-sizing: border-box;
  line-height: 46px;
  transition: all 0.5s ease;
}
.input-display.placehold{
  color: #ccc;
}
.focus .input-display{left: 0; opacity: 0;}
.input-text input,
.input-email input{
  position: absolute;
  top: 0; left: 0;
  display: inline-block;
  width: 46px; height: 100%;
  border: 1px solid #000;
  cursor: pointer;
  padding: 0 20px;
}
.focus input{
  cursor: auto;
  width: 100% !important;
}
.focus input,
.focus textarea{
  background-color: #000;
  color: #fff;
}
input::placeholder{opacity: 0;}
.focus input::placeholder{opacity: 1;}


.input-textarea{
  border: 1px solid #000;
  position: relative;
  height: 50vh;
}

.input-textarea textarea{
  box-sizing: border-box;
  width: 100%; height: 100%;
  padding: 20px 0 30px 66px;
}

.input-submit{
  /* border: 1px solid #000; */
  display: flex;
  justify-content: flex-end;
  overflow-x: hidden;
}
.input-submit span{
  transition:  all 0.5s ease;
  overflow: hidden;
}
.input-submit .beforebtn,
.sendcheck .input-submit .checkbtn{
  width: auto;
  padding: 10px 20px;
  border: 1px solid #000;
  cursor: pointer;
  margin-left: 20px;
  opacity: 1;
}

.input-submit .checkbtn,
.sendcheck .beforebtn{
  opacity: 0; width: 0; 
  padding-left: 0; 
  padding-right: 0;
}




.pc-app .input-next:hover{background-color: #d3d;}

#contact-form input,
#contact-form textarea,
.input-icon,
.input-display{
  transition : all 0.8s ease;
}






@media screen and (max-width: 1280px){


}

@media screen and (min-width : 1640px){

  #contact-form{
    margin-top: 2.8vw;
    font-size: 1vw;
  }
  #contact-form form > div{
    margin-bottom: 2.8vw;
  }

  .input-text,
  .input-email{
    height: 3.5vw;
  }

  .input-icon{
    width: 3.5vw; height: 3.5vw;
  }
  .input-display{
    left: 6vw;
    line-height: 3.5vw;
  }
  .input-text input,
  .input-email input{
    width: 3.5vw; height: 100%;
  }
  
  .focus  input{
    padding: 0 3vw;
  }

  .input-textarea textarea{
    padding: 2vw 0 2vw 6vw;
  }

  .input-next{
    padding: 1vw 2vw;
  }
  input,textarea{
    font-size: 1vw;
  }


}









#contact-form.sendcheck form > div{
  margin-bottom: 0 !important;
}
.sendcheck input{
  width: 0;
  border: none;
  cursor: default !important;
}
.sendcheck .input-icon{
  opacity: 0;
  cursor: default;
}
.sendcheck .input-display{
  left: 0;
  border-color: #fff;
  line-height: 1em;
  cursor: default;
  
}
.sendcheck textarea{
  left: 0;
  padding-left: 0;
  padding-right: 0;
  cursor: default;
}
.sendcheck .input-textarea{
  border-color: #fff;
}

</style>
