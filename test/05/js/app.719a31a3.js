(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],g=0,m=[];g<r.length;g++)o=r[g],s[o]&&m.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0123":function(t,e,n){},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},3394:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"all-wrap"}},[n("data-render"),n("gnb"),n("router-view")],1)])},a=[],o=n("cebc"),r=n("2f62"),c=(n("fa6d"),n("3394"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")}),l=[],u={methods:Object(o["a"])({finishFetchDataFunction:function(t,e){for(var n=0;n<e.length;++n)e[n](t)}},Object(r["d"])(["LOAD_isMobile","SET_spyDefine"]),Object(r["b"])(["settingAllData"])),created:function(){this.SET_spyDefine(),this.LOAD_isMobile(),this.settingAllData(this.finishFetchDataFunction)}},g=u,m=n("2877"),d=Object(m["a"])(g,c,l,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"close",attrs:{id:"gnb"}},[n("div",{attrs:{id:"gnb-inner"}},[n("div",{staticClass:"arrow-icon-right"}),n("div",{attrs:{id:"gnb-top"}},[t._m(0),n("div",{attrs:{id:"gnb-top-menu"}},[n("div",{attrs:{id:"gnb-top-about"}},[n("router-link",{staticClass:"mobile-active-elements",attrs:{to:"/logo"}},[t._v("about")])],1),n("div",{attrs:{id:"gnb-top-contact"}},[n("router-link",{staticClass:"mobile-active-elements",attrs:{to:"/work"}},[t._v("contact")])],1)])]),n("div",{attrs:{id:"gnb-category"},on:{click:this.categoryCheck}},[t._m(1),n("ul",{attrs:{id:"gnb-category-list"}},t._l(t.categoryData,function(e){return n("li",{key:e,staticClass:"gnb-category-item"},[n("span",{staticClass:"mobile-active-elements",attrs:{"data-name":e},on:{click:t.categoryItemClick}},[t._v(t._s(e))])])}),0)]),n("div",{attrs:{id:"gnb-contents"}},[n("ul",{attrs:{id:"gnb-contents-list"}},[n("li",{staticClass:"gnb-contents-item new-dot"},[n("a",{attrs:{href:"#"},on:{click:t.contentsItemClick}},[n("span",[t._v("Lorem Ipsum")]),n("span",{staticClass:"icon-arrow-right"})])]),n("li",{staticClass:"gnb-contents-item new-dot"},[n("a",{attrs:{href:"#"},on:{click:t.contentsItemClick}},[n("span",[t._v("only five centuries,")]),n("span",{staticClass:"icon-arrow-right"})])]),n("li",{staticClass:"gnb-contents-item new-dot"},[n("a",{attrs:{href:"#"},on:{click:t.contentsItemClick}},[n("span",[t._v("type specimen")]),n("span",{staticClass:"icon-arrow-right"})])]),n("li",{staticClass:"gnb-contents-item new-dot"},[n("a",{attrs:{href:"#"},on:{click:t.contentsItemClick}},[n("span",[t._v("publishing")]),n("span",{staticClass:"icon-arrow-right"})])]),n("li",{staticClass:"gnb-contents-item"},[n("a",{attrs:{href:"#"},on:{click:t.contentsItemClick}},[n("span",[t._v("software like")]),n("span",{staticClass:"icon-arrow-right"})])]),n("li",{staticClass:"gnb-contents-item"},[n("a",{attrs:{href:"#"},on:{click:t.contentsItemClick}},[n("span",[t._v("packages and")]),n("span",{staticClass:"icon-arrow-right"})])]),n("li",{staticClass:"gnb-contents-item"},[n("a",{attrs:{href:"#"},on:{click:t.contentsItemClick}},[n("span",[t._v("Ipsum generators")]),n("span",{staticClass:"icon-arrow-right"})])]),n("li",{staticClass:"gnb-contents-item"},[n("a",{attrs:{href:"#"},on:{click:t.contentsItemClick}},[n("span",[t._v("or non-characteristic")]),n("span",{staticClass:"icon-arrow-right"})])]),n("li",{staticClass:"gnb-contents-item"},[n("a",{attrs:{href:"#"},on:{click:t.contentsItemClick}},[n("span",[t._v("The first line")]),n("span",{staticClass:"icon-arrow-right"})])]),n("li",{staticClass:"gnb-contents-item"},[n("router-link",{attrs:{to:"/work"},on:{click:t.contentsItemClick}},[n("span",[t._v("test01")]),n("span",{staticClass:"icon-arrow-right"})])],1),n("li",{staticClass:"gnb-contents-item"},[n("router-link",{attrs:{to:"/work/test02"},on:{click:t.contentsItemClick}},[n("span",[t._v("test02")]),n("span",{staticClass:"icon-arrow-right"})])],1)])])]),t._m(2)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{attrs:{id:"gnb-logo"}},[n("a",{staticClass:"mobile-active-elements",attrs:{href:"#"}},[t._v("swirlflag.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"gnb-category-now"}},[n("span",{attrs:{id:"gnb-category-now-name"}},[t._v("\n          all\n        ")]),n("span",{staticClass:"arrow-triangle"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"gnb-bottom"}},[n("div",{attrs:{id:"gnb-bottom-wrap"}},[n("div",{staticClass:"gnb-bottom-update new-dot"},[t._v("2019.02.18 update")]),n("div",{staticClass:"gnb-bottom-copyright"},[t._v("2019 swirlflag")])])])}],v=n("bc3a"),y=n.n(v),_={baseUrl:"https://swirlflag.github.io/portfolio/src/data"};function C(){return y.a.get("".concat(_.baseUrl,"/appData.json"))}var E={data:function(){return{activeCategory:null,categoryItemHeight:0,categoryFullHeight:0,adminData:[],categoryData:[]}},computed:Object(o["a"])({},Object(r["c"])(["GET_contentsData","GET_adminData","GET_isMobile"]),{gnb:function(){return document.getElementById("gnb")},gnbInner:function(){return document.getElementById("gnb-inner")},category:function(){return document.getElementById("gnb-category")},categoryNow:function(){return document.getElementById("gnb-category-now")},categoryNowName:function(){return document.getElementById("gnb-category-now-name")},categoryItem:function(){return document.getElementsByClassName("gnb-category-item")},contentsItem:function(){return document.getElementsByClassName("gnb-contents-item")}}),methods:Object(o["a"])({},Object(r["d"])(["OPR_scrollCorrection","OPR_gnbOpen","OPR_gnbClose","OPR_textSlide","SET_gnbSelect","SET_MobileActiveElements","LOAD_finshedDataLoad","LOAD_isMobile","SET_spySubscribe"]),Object(r["b"])([]),{setNavCategoryHeight:function(){this.categoryItemHeight=this.categoryNow.offsetHeight,this.categoryFullHeight=this.categoryItemHeight*(this.categoryData.length+1)},setCategoryData:function(t){this.categoryData=t},setActiveCategory:function(t){this.activeCategory=t},setMobileActiveElements:function(t){},openNavCategoryHeight:function(){this.category.classList.add("open"),this.category.style.height=this.categoryFullHeight+"px"},closeNavCategoryHeight:function(){this.category.classList.remove("open"),this.category.style.height=this.categoryItemHeight+"px"},resetSelectContentsItem:function(){for(var t=0;t<this.contentsItem.length;++t)this.contentsItem[t].classList.remove("select")},categoryCheck:function(){this.category.classList.contains("open")?this.closeNavCategoryHeight():this.openNavCategoryHeight()},categoryItemClick:function(t){this.setActiveCategory(t.target.getAttribute("data-name")),this.OPR_textSlide({el:this.categoryNowName,msg:this.activeCategory})},contentsItemClick:function(t){this.resetSelectContentsItem(),t.target.parentElement.classList.add("select")},dataAwaitGnb:function(t){this.setCategoryData(this.GET_adminData.category),this.setNavCategoryHeight(),this.closeNavCategoryHeight(),this.OPR_gnbOpen()},testtoggle:function(){this.gnb.classList.toggle("close")},testclose:function(){this.gnb.classList.add("close")},testopen:function(){this.gnb.classList.remove("close")},testaction:function(){},testfunction:function(){window.testtoggle=this.testtoggle,window.testopen=this.testopen,window.testclose=this.testclose,window.testaction=this.testaction}}),created:function(){},mounted:function(){var t=this;this.OPR_scrollCorrection(this.gnbInner),this.SET_gnbSelect(),this.category.style.height=this.categoryItemHeight+"px",this.SET_spySubscribe(this.dataAwaitGnb),window.addEventListener("resize",function(){t.setNavCategoryHeight(),t.closeNavCategoryHeight()}),this.testfunction()}},I=E,k=(n("641d"),Object(m["a"])(I,p,b,!1,null,"6ff087a1",null)),O=k.exports,T={components:{"data-render":f,gnb:O},computed:Object(o["a"])({allWrap:function(){return document.getElementById("all-wrap")}},Object(r["c"])(["GET_isMobile"])),methods:Object(o["a"])({},Object(r["d"])(["SET_spySubscribe"]),{setIsMobile:function(){this.allWrap.classList.add(this.GET_isMobile?"mobile-app":"pc-app")}}),created:function(){},mounted:function(){this.SET_spySubscribe(function(t){}),this.setIsMobile()}},S=T,x=(n("034f"),Object(m["a"])(S,s,a,!1,null,null,null)),L=x.exports,j=n("8c4f"),D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"content-page"}},[i("div",{staticClass:"page-controls",attrs:{id:"content-goto-gnb"}},[i("span",{staticClass:"icon-arrow-left"}),i("span",[t._v("BACK TO LIST")])]),i("div",{attrs:{id:"content-image-view"}},[i("ul",{attrs:{id:"content-image-container"}},[i("li",{staticClass:"content-image-item"},[i("img",{attrs:{src:n("906a"),alt:"#"}})]),i("li",{staticClass:"content-image-item"},[i("img",{attrs:{src:n("ee68"),alt:"#"}})]),i("li",{staticClass:"content-image-item"},[i("img",{attrs:{src:n("8572"),alt:"#"}})])]),i("div",{staticClass:"page-controls",attrs:{id:"content-image-controls"}},[i("span",{staticClass:"icon-arrow-left button-prev"}),i("div",{attrs:{id:"content-image-number"}},[i("span",{attrs:{id:"content-now-number"}},[t._v("0")]),i("span",{attrs:{id:"content-max-number"}},[t._v("0")])]),i("span",{staticClass:"icon-arrow-right button-next"})])]),i("div",{attrs:{id:"content-main"}},[i("div",{attrs:{id:"content-header"}},[i("span",{attrs:{id:"content-category"}},[t._v("category")]),i("h2",{attrs:{id:"content-name"}},[t._v("Content Name")])]),i("div",{staticClass:"page-controls",attrs:{id:"content-link"}},[i("a",{staticClass:"button-link",attrs:{href:"#"}},[i("span",[t._v("website")]),i("span",{staticClass:"icon-arrow-right"})])]),i("div",{attrs:{id:"content-maintext"}},[t._v("\n      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n      \n      ")]),i("div",{attrs:{id:"content-info"}},[i("ul",{attrs:{id:"content-info-list"}},[i("li",{staticClass:"content-info-item"},[i("span",{staticClass:"content-info-property"},[t._v("client")]),i("span",{staticClass:"content-info-value"},[t._v("randomised")])]),i("li",{staticClass:"content-info-item"},[i("span",{staticClass:"content-info-property"},[t._v("client")]),i("span",{staticClass:"content-info-value"},[t._v("randomised")])])])]),i("div",{staticClass:"page-controls",attrs:{id:"content-page-controls"}},[i("a",{staticClass:"icon-arrow-left button-prev",attrs:{href:"#"}}),i("div",{attrs:{id:"content-image-number"}},[i("span",{attrs:{id:"content-now-number"}},[t._v("0")]),i("span",{attrs:{id:"content-max-number"}},[t._v("0")])]),i("a",{staticClass:"icon-arrow-right button-next",attrs:{href:"#"}})])])])}],H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("img",{attrs:{src:n("cf05"),alt:""}})])}],N={},P=N,B=(n("5880"),Object(m["a"])(P,H,M,!1,null,"f1fc6cb2",null)),G=B.exports,R={data:function(){return{contentName:null,contentsData:null,contentsMainText:null}},computed:Object(o["a"])({imageView:function(){return document.getElementById("content-image-view")},imageContainer:function(){return document.getElementById("content-image-container")},imageItem:function(){return document.getElementsByClassName("content-image-item")}},Object(r["c"])(["adminData"])),methods:{resizeImageView:function(){for(var t=this.imageView.offsetWidth*(10/15)+"px",e=0;e<this.imageItem.length;++e)this.imageItem[e].style.height=t}},created:function(){},mounted:function(){this.resizeImageView(),window.addEventListener("resize",this.resizeImageView)}},$=R,F=(n("d5f0"),Object(m["a"])($,D,A,!1,null,null,null)),z=F.exports;i["a"].use(j["a"]);var V=new j["a"]({mode:"history",routes:[{path:"/",redirect:"/logo"},{path:"/logo",component:G},{path:"/work/:name",component:z}]}),W={spy:null,isMobile:null,contentsData:{},adminData:{},gnb:null,gnbItems:null,mobileActiveElements:[]},U={GET_isMobile:function(t){return t.isMobile},GET_adminData:function(t){return t.adminData},GET_contentsData:function(t){return t.contentsData},GET_gnb:function(t){return null==t.gnb&&this.commit("SET_gnbSelect"),t.gnb},GET_gnbItems:function(t){return null==t.gnbItems&&(t.gnb=document.getElementsByClassName("gnb-contents-item")),t.gnbItems}},J={LOAD_isMobile:function(t){t.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},SET_MobileActiveElements:function(t,e){var n=this;if(this.GET_isMobile){t.mobileActiveElements=document.querySelectorAll(e);for(var i=function(t){n.mobileActiveElements[t].addEventListener("touchstart",function(){n.mobileActiveElements[t].classList.add("mobile-active")}),n.mobileActiveElements[t].addEventListener("touchend",function(){n.mobileActiveElements[t].classList.remove("mobile-active")})},s=0;s<this.mobileActiveElements.length;++s)i(s)}},SET_adminData:function(t,e){t.adminData=e},SET_appData:function(t,e){t.contentsData=e["contents-data"],t.adminData=e["admin-data"]},SET_gnbSelect:function(t){t.gnb=document.getElementById("gnb")},SET_gnbItemsSelect:function(t){t.gnbItems=document.getElementsByClassName("gnb-contents-item")},SET_spyDefine:function(t){var e=function(){function t(){this.subscriberList=[]}return t.prototype.subscribe=function(t){this.subscriberList.push(t)},t.prototype.unsubscribe=function(t){this.subscriberList.remove(t)},t.prototype.action=function(t){for(var e=0;e<this.subscriberList.length;++e)this.subscriberList[e](t)},t}();t.spy=new e},SET_spySubscribe:function(t,e){t.spy.subscribe(e)},SET_spyUnsubscribe:function(t,e){t.spy.unsubscribe(e)},GO_spyAction:function(t){t.spy.action()}},q=(n("28a5"),n("e814")),K=n.n(q),Q={OPR_scrollCorrection:function(t,e){e.addEventListener("scroll",function(){e.offsetHeight+e.scrollTop==e.scrollHeight&&(e.scrollTop=e.scrollHeight-(e.scrollHeight-e.scrollTop)-.1)})},OPR_gnbOpen:function(t){t.gnb.classList.remove("close")},OPR_gnbClose:function(t){t.gnb.classList.add("close")},OPR_textSlide:function(t,e){var n=e.el,i=e.msg,s=e.d;if(!n.classList.contains("is-sl-an")){s||(s=1);var a=function(t){return K()(t.split("px")[0])},o=getComputedStyle(n);n.classList.add("is-sl-an");var r=document.createElement("span"),c=document.createElement("span"),l=document.createElement("span");r.style.display="inline-block",c.style.display="inline-block",l.style.display="inline-block",r.style.position="relative",r.style.transition="all ".concat(s,"s ease"),c.innerText=n.innerText,l.innerText=i;var u={w:a(o["padding-right"])+a(o["border-right"])+a(o["padding-left"])+a(o["border-left"]),h:a(o["padding-top"])+a(o["border-top"])+a(o["padding-bottom"])+a(o["border-bottom"])};l.style.marginTop=u.h+"px","border-box"==o["box-sizing"]&&(w+=2,h+=2),"inline"==o["display"]&&(n.style.display="inline-block"),n.style.width=n.offsetWidth-u.w+"px",n.style.height=n.offsetHeight-u.h+"px",n.innerHTML="",r.append(c),r.append(document.createElement("br")),r.append(l),n.append(r),setTimeout(function(){r.style.marginTop="-"+n.offsetHeight+"px"},10),setTimeout(function(){n.innerHTML=i,n.classList.remove("is-sl-an")},1e3*s+10)}},TEST:function(t,e){console.log(t,e)}},X=(n("96cf"),n("3b8d")),Y={settingAllData:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(e,n){var i,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,s=e.state,t.prev=1,t.next=4,C();case 4:return a=t.sent,i("SET_appData",a.data),t.next=8,n(a,s.spy.subscriberList);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case 14:case"end":return t.stop()}},t,this,[[1,10]])}));function e(e,n){return t.apply(this,arguments)}return e}()};i["a"].use(r["a"]);var Z=new r["a"].Store({state:Object(o["a"])({},W),getters:Object(o["a"])({},U),mutations:Object(o["a"])({},J,Q),actions:Object(o["a"])({},Y)});i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(L)},router:V,store:Z}).$mount("#app")},5880:function(t,e,n){"use strict";var i=n("0123"),s=n.n(i);s.a},"641d":function(t,e,n){"use strict";var i=n("9d7e"),s=n.n(i);s.a},"64a9":function(t,e,n){},8572:function(t,e,n){t.exports=n.p+"img/img03.c5d4a09d.jpg"},"906a":function(t,e,n){t.exports=n.p+"img/img01.3f95a059.jpg"},"9d7e":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d5f0:function(t,e,n){"use strict";var i=n("d81f"),s=n.n(i);s.a},d81f:function(t,e,n){},ee68:function(t,e,n){t.exports=n.p+"img/img02.2d26b606.jpg"}});
//# sourceMappingURL=app.719a31a3.js.map