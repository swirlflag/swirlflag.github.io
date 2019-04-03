<template>
  <section id="contact-page" class="router-section target-section">
    <div id="content-main">
      <div id="contact-header" class="spread spread-wait">
        <h2 id="content-name">Contact</h2>
      </div>      
      <form id="contact-form" action="get">
        <div class="inputbox spread spread-wait">
          <div class="input-inner">
            <input type="text" id="name" class="contact-input" placeholder="name">
            <span class="input-icon triangle"></span>
          </div>
          <div class="input-display">
            <span class="input-category">name</span>
            <span class="input-value">{{ nameValue || 'your name' }}</span>
          </div>  
        </div>

        <div class="inputbox spread spread-wait">
          
          <div class="input-inner">
            <input type="email" id="email" class="contact-input" placeholder="email">
            <span class="input-icon square"></span>
          </div>
          <div class="input-display">
            <span class="input-category">email</span>
            <span class="input-value">{{ emailValue || 'your email' }}</span>
          </div>  
        </div>

        <div class="textareabox spread spread-wait">
          <span class="textarea-icon pentagon"></span>
          <div class="textarea-wrap">
            <textarea name="textarea" id="textarea" placeholder="Contents of the letter"></textarea> 
          </div>	         
        </div>
      </form>

      <div class="page-controls spread spread-wait">
        <div id="contact-next">
          <span>next</span>
        </div>
      </div>
      

      <!-- <div id="confirm-area" class="close">
        slide confirm 만들자
      </div> -->

    </div>
  </section>
</template>

<style>


/* #confirm-area{
  position: fixed;
  top: 50%; left: 0;
  width: 100%; height: 50%;
  background: #ddd;
  border: 1px solid #000;
  display: flex;
} */
</style>


<script>

export default {
  data(){
    return {
      iconPos : ['v','h'],
      nameValue : '',
      emailValue : '',
    }
  },

  computed : {
    sizeTarget :() => document.getElementById('gnb-category'),

    inputBoxs : () => document.querySelectorAll('.inputbox'),
    inputBoxsInput : () => document.querySelectorAll('.inputbox input'),
    inputBoxsInner : () => document.querySelectorAll('.inputbox .input-inner'),
    inputBoxsDisplay : () => document.querySelectorAll('.inputbox .input-display'), 
    inputIcon : () => document.getElementsByClassName('input-icon'),
    textareabox : () => document.querySelectorAll('.textareabox'),

    inputName : () => document.querySelector('input#name'),
    inputEmail : () => document.querySelector('input#email'),
    inputText : () => document.querySelector('textarea#textarea'),


  },

  methods : {
    setInputsSize(){

      let height = document.getElementById('gnb-category-now').offsetHeight,
          size01 = parseInt(getComputedStyle(document.getElementById('content-main'))['padding-left'].split('px')[0]);
    
      for(let i = 0, l = this.inputBoxs.length; i < l; ++i){
        this.inputBoxs[i].style.height = height + 'px';
        this.inputBoxsInner[i].style.width = height + 'px'
        this.inputBoxsDisplay[i].style.left = height + 'px'
        this.inputBoxsDisplay[i].style.marginLeft = size01 + 'px'
        this.inputIcon[i].style.left = getComputedStyle(this.inputIcon[i])['top'];
      }

      this.iconPos = [
        getComputedStyle(this.inputIcon[0])['top'], 
        getComputedStyle(this.inputIcon[0])['left']
      ];
      
      for(let i = 0, l = this.textareabox.length; i < l; ++i){
        let text = this.textareabox[i].getElementsByTagName('textarea')[0],
            icon = this.textareabox[i].getElementsByClassName('textarea-icon')[0],
            wrap = this.textareabox[i].getElementsByClassName('textarea-wrap')[0];

        icon.style.top = this.iconPos[0];
        icon.style.left = this.iconPos[1];
        text.style.paddingLeft = (height + size01)  + 'px';
        text.style.paddingRight = size01 + 'px';
      };
    
    },
    
    setInputFocus(){
      for(let i = 0, l = this.inputBoxsInput.length; i < l; ++i){
        let input = this.inputBoxsInput[i],
            inner = input.parentElement,
            box = inner.parentElement;

        input.addEventListener('focus', () => {inner.classList.add('focus')});
        input.addEventListener('blur', () => {inner.classList.remove('focus')});
        box.addEventListener('click', () => {input.focus()});
      };

      for(let i = 0, l = this.textareabox.length; i < l; ++i){
        let box = this.textareabox[i],
            text = box.getElementsByTagName('textarea')[0];

        text.addEventListener('focus', ()=>{box.classList.add('focus')});
        text.addEventListener('blur', ()=>{box.classList.remove('focus')});
        box.addEventListener('click', ()=>{text.focus()});
            
      }

    },

    setInputModel(){
      this.inputName.addEventListener('focus', ()=>{
        this.inputName.value = this.nameValue;
      });
      this.inputName.addEventListener('blur', ()=>{
        this.nameValue = this.inputName.value;
        this.inputName.value = '';
      });
      this.inputEmail.addEventListener('focus', ()=>{
        this.inputEmail.value = this.emailValue;
      });
      this.inputEmail.addEventListener('blur', ()=>{
        this.emailValue = this.inputEmail.value;
        this.inputEmail.value = '';
      });
      
    }
  },
  

  mounted(){
    this.setInputFocus();
    this.setInputsSize();
    this.setInputModel();

    window.addEventListener('resize', ()=>{
      setTimeout(()=>{
        this.setInputsSize();
      },1500);
      
    });
  }


  

}
</script>

<style scoped>


#contact-header{
  margin-top: 40px;
  margin-bottom: 30px !important;
}


.inputbox{
  cursor: pointer;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
}
.inputbox input{
  outline: none;
  border: 1px solid #000;
  box-sizing: border-box;
  width: 100%; height: 100%;
  padding: 0 20px;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
  transition: all 0.5s ease;
}

.inputbox input:focus{
  cursor: auto;
  background-color: #000;
  color: #fff;
}

.input-inner{
  height: 100%;
  transition: all 0.6s ease;
  position: relative;
}


.input-inner.focus{
  width: 100% !important;
}

.input-display{
  position: absolute;
  left: 0; top: 0;
  margin-left: 20px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: -1;
  transition: all 0.8s ease;
  border-bottom: 1px solid #000;
}

.input-display span{
  display: block;
}
.input-inner.focus + .input-display{
  opacity: 0;
  left: 0 !important;
}

.input-category{
  font-size: 12px;
  color: #999;
  font-family:  'Ubuntu' , sans-serif;  
}
.input-value{
  font-size: 16px;
  line-height: 2.2em;
}


@keyframes rotate {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

.input-inner .input-icon,
.textarea-icon{
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  width: 10px; height: 10px;
  top: calc(50% - 5px);
  animation-duration: 2.8s;
  animation-name: rotate;
  animation-timing-function:linear;
  animation-iteration-count: infinite;
}

.input-inner.focus .input-icon{
  opacity: 0;
}


.triangle{background: url(../assets/icons/figure-03.png) no-repeat;background-size: cover; }

.square{background: url(../assets/icons/figure-04.png) no-repeat;background-size: cover;}
.pentagon{background: url(../assets/icons/figure-05.png) no-repeat;background-size: cover;}
.focus .pentagon{background: url(../assets/icons/figure-05-white.png) no-repeat ;background-size: cover;}
.heptagon{background: url(../assets/icons/figure-07.png) no-repeat;background-size: cover;}


.textareabox{
  position: relative;
  display: flex;
  border: 1px solid #000;
  cursor: pointer;
  margin-bottom: 30px;
  box-sizing: border-box;
}
.textareabox.focus{
  cursor: auto;
}

.textarea-wrap{
  width: 100%;
}
.textarea-wrap textarea{
  width: 100%;
  box-sizing: border-box;
  padding: 0 ;margin: 0;
  display: flex;
  resize: none;border: none;outline: none;
  min-height: 30vh;
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 14px;
  line-height: 2em;
  transition: all 0.5s ease;
  cursor: pointer;
}
.textareabox.focus textarea{
  background-color: #000;
  color: #fff;
  cursor: auto;
}

.inputbox input::placeholder{opacity: 0;}
.inputbox input:focus::placeholder{opacity: 1;}
.inputbox input::placeholder,
.textareabox textarea::placeholder{
  font-family: 'Ubuntu';
  color: #999;
  font-size: 12px;
  font-weight : lighter;
  letter-spacing: 0.1em;
}

#contact-next{ 
  display: inline-block;
  text-align: right;
  cursor: pointer;
  margin-left: auto;
  border: 1px solid #000;
  padding: 10px 20px;
  font-family: 'Ubuntu';
  transition: all 0.3s ease;
}
.pc-app #contact-next:hover{
  background-color: #000;
  color: #fff;
}


@media screen and (max-width: 1280px ){
  #contact-header{
    margin-top: 30px !important;
  }
}
@media screen and (min-width : 1640px){
  #contact-header{
    margin-top: 3.5vw !important;
    margin-bottom: 2.8vw !important;
  }
  .inputbox,
  .textareabox{
    margin-bottom: 2.8vw;
  }
  .inputbox input{
    padding: 0 1.4vw;
    font-size: 1vw;
  }

  .input-display{
    margin-left: 3.2vw;
  }

  .input-value{
    font-size: 1.1vw;
    line-height: 2.2em;
  }
  .input-inner .input-icon,
  .textarea-icon{
    width: 1vw; height: 1vw;
    top: calc(50% - 0.5vw);
  }
  .textarea-wrap textarea{

    padding-top: 1vw;
    padding-bottom: 3vw;
    font-size: 1.1vw;
    line-height: 2.2em;
  }
  .inputbox input::placeholder,
  .textareabox textarea::placeholder{
    font-size: 0.8vw !important; 
    letter-spacing: 0.1em;
  }
  #contact-next{
    padding: 1vw 2vw;
  }
}



</style>
