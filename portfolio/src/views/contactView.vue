<template>
<section id="content-page" class="router-section target-section" >
  <div id="content-main">
    <div id="contact-form" class="">
      <form action="get">

        <div class="input-text" id="name">
          <div class="input-icon">
            <span class="triangle"></span>
          </div>
          <div class="input-display placehold" data-placeholder="your name"> 
            your name
          </div>
          <input type="text" placeholder="name" v-bind:disabled="sendCheck">
        </div>  

        <div class="input-email" id="email">
          <div class="input-icon">
            <span class="square"></span>
          </div>
          <div class="input-display placehold" data-placeholder="your@email.com">
            your@email.com
          </div>
          <input type="email" placeholder="email" v-bind:disabled="sendCheck">
        </div>  

        <div class="input-textarea" id="letter">
          <div class="input-icon">
            <span class="pentagon"></span>
          </div>
          <textarea name="contact-text" placeholder="In the letter" v-bind:disabled="sendCheck"></textarea>
        </div>

        <div class="page-controls spread spread-wait input-submit">
          <span id="contact-nextbtn" class="beforebtn" @touchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">next</span>
          <span id="contact-canclebtn" class="checkbtn" stouchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">cancle</span>
          <span id="contact-sendbtn" class="checkbtn" @touchstart="OPR_mobileActiveTouchStart" @touchend="OPR_mobileActiveTouchEnd">send</span>
        </div>
      </form>  
    </div>
  </div>
</section>
</template>

<script>

import { mapMutations , mapGetters } from 'vuex';
import bus from '../utils/bus.js';
export default {
  data(){
    return {
      textareaState : false,  

      nameValue : null,
      emailValue : null,
      letterValue : null,

      sendCheck : false,
    }
  },

  computed : {
    form : () => document.getElementById('contact-form'),
    name : () => document.getElementById('name'),
    email : () => document.getElementById('email'),
    letter : () => document.querySelector('#letter textarea'),
    inputs : () => document.querySelectorAll('.input-text , .input-email , .input-textarea'),

    nextbtn : () => document.getElementById('contact-nextbtn'),
    canclebtn : () => document.getElementById('contact-canclebtn'),
    sendbtn : () => document.getElementById('contact-sendbtn'),
  },

  methods : {

    ...mapMutations([
      'OPR_mobileActiveTouchStart',
      'OPR_mobileActiveTouchEnd',
      'OPR_bottomAlert',
    ]),

    inputFoucsFunc(el){

      let getInputType = function(target){
        if(target.contains(target.getElementsByTagName('input')[0])){
          return target.getElementsByTagName('input')[0];
        }else if(target.contains(target.getElementsByTagName('textarea')[0])){
          return target.getElementsByTagName('textarea')[0];
        }; 
      };  

      let setFoucsBlur = (target,input,display) => {

        target.addEventListener('click', function(){
          input.focus();
        });

        input.addEventListener('focus', function(){
          target.classList.add('focus');
          if(display){
            if(display.classList.contains('placehold')){
              input.value = '';
            }else{
              input.value = display.innerText;
            };
          };
        }); 

        input.addEventListener('blur', function(){
          target.classList.remove('focus');
          if(display){
            if(input.value){
              display.classList.remove('placehold');
              display.innerText = input.value;
            }else{
              display.classList.add('placehold');
              display.innerText = display.getAttribute('data-placeholder');
            };
            input.value = '';
          };
        });
        
      };

      for(let i = 0; i < el.length; ++i){
        const target = el[i];
        let input = getInputType(target);
        let display = target.getElementsByClassName('input-display')[0];
        setFoucsBlur(target,input,display);
      };
    },


    nextbtnSetting(){
      let func = (target) => {

      }
      this.nextbtn.addEventListener('click', () => {

        if(!this.name.innerText || this.name.innerText == 'your name'){
          bus.$emit('bottomAlertRed', '이름을 입력해주세요')
          return;
        }else if(!this.email.innerText || this.email.innerText == 'your@email.com'){
          bus.$emit('bottomAlertRed', '이메일을 입력해주세요')
          return;
        }else if(!this.letter.value){
          bus.$emit('bottomAlertRed', '내용을 입력해주세요')
          return;
        }

        this.form.classList.add('sendcheck');
        this.sendCheck = true;
      });
    },

    canclebtnSetting(){
      this.canclebtn.addEventListener('click', () => {
        this.form.classList.remove('sendcheck');
        this.sendCheck = false;
      });
    },

    sendbtnSetting(){
      this.sendbtn.addEventListener('click', () => {
        this.nameValue = this.name.innerText;
        this.emailValue = this.email.innerText;
        this.letterValue = this.letter.value;
      });
    },
    

    inputSetting(){
      this.inputFoucsFunc(this.inputs);
    },

    buttonSetting(){
      this.nextbtnSetting();
      this.canclebtnSetting();
      this.sendbtnSetting();
    },
  
  },

  mounted(){
    this.inputSetting();
    this.buttonSetting();

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
  -webkit-appearance: none;
  outline: none;
  border-radius: 0;
  padding: 0; margin: 0;
  border: none;
  box-shadow: none !important;
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
  cursor: pointer;
}

.input-icon.alert{
  background: red;
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
  transition: all 0.5s ease;
  overflow: hidden;
  width: 80px;
  text-align: center;
  padding: 10px;
  border: 1px solid #000;
  box-sizing: border-box;
  margin-left: 20px;
  cursor: pointer;
}

.input-submit .checkbtn,
.sendcheck .input-submit .beforebtn{
  width: 0;
  padding: 5px 0;
  border: none;
  margin-left: 0;
}


.sendcheck .input-submit .checkbtn{
  width: 80px;
  padding: 10px 10px;
  border: 1px solid #000;
  margin-left: 20px;
}





.pc-app .input-submit span:hover{
  background-color: #000; 
  color: #fff;
}

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
  padding: 0;
  border: none;
  cursor: auto !important;
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
