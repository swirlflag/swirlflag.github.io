(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],g=0,d=[];g<r.length;g++)s=r[g],o[s]&&d.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0123":function(t,e,n){},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},1133:function(t,e,n){"use strict";var i=n("d6ec"),o=n.n(i);o.a},3394:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"all-wrap"}},[n("data-render"),n("gnb"),n("router-view")],1)])},a=[],s=n("cebc"),r=n("2f62"),c=(n("fa6d"),n("3394"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")}),l=[],g={methods:Object(s["a"])({finishFetchDataFunction:function(t,e){for(var n=0;n<e.length;++n)e[n](t)}},Object(r["d"])(["LOAD_isMobile","SET_spyDefine"]),Object(r["b"])(["settingAllData"])),created:function(){this.SET_spyDefine(),this.LOAD_isMobile(),this.settingAllData(this.finishFetchDataFunction)}},d=g,m=n("2877"),f=Object(m["a"])(d,c,l,!1,null,null,null),p=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"close",attrs:{id:"gnb"}},[n("div",{attrs:{id:"gnb-inner"}},[n("div",{staticClass:"arrow-icon-right"}),n("div",{attrs:{id:"gnb-top"}},[n("h1",{attrs:{id:"gnb-logo"},on:{touchstart:t.OPR_mobileActiveTouchStart,touchend:t.OPR_mobileActiveTouchEnd}},[n("a",{attrs:{href:"#"}},[t._v("swirlflag.")])]),n("div",{attrs:{id:"gnb-top-menu"}},[n("div",{attrs:{id:"gnb-top-about"},on:{touchstart:t.OPR_mobileActiveTouchStart,touchend:t.OPR_mobileActiveTouchEnd}},[n("router-link",{attrs:{to:"/logo"}},[t._v("\n            about\n          ")])],1),n("div",{attrs:{id:"gnb-top-contact"},on:{touchstart:t.OPR_mobileActiveTouchStart,touchend:t.OPR_mobileActiveTouchEnd}},[n("router-link",{attrs:{to:"/work"}},[t._v("contact")])],1)])]),n("div",{attrs:{id:"gnb-category"},on:{click:t.categoryCheck}},[t._m(0),n("ul",{attrs:{id:"gnb-category-list"}},t._l(t.categoryData,function(e){return n("li",{key:e.id,staticClass:"gnb-category-item"},[n("span",{attrs:{"data-item":JSON.stringify(e)},on:{click:t.categoryItemClick,touchstart:t.OPR_mobileActiveTouchStart,touchend:t.OPR_mobileActiveTouchEnd}},[t._v("\n            "+t._s(e.name)+"\n          ")])])}),0)]),n("div",{attrs:{id:"gnb-contents"}},[n("ul",{attrs:{id:"gnb-contents-list"}},t._l(t.activeCategoryContents,function(e){return n("transition",{key:e.id,attrs:{name:"fade"}},[t.test2?n("li",{staticClass:"gnb-contents-item",on:{click:t.contentsItemClick}},[n("a",{attrs:{href:"#"}},[n("span",[t._v("\n                "+t._s(e["content-name"])+"\n              ")]),n("span",{staticClass:"icon-arrow-right"})])]):t._e()])}),1)])]),t._m(1)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"gnb-category-now"}},[n("span",{attrs:{id:"gnb-category-now-name","data-item":"{id:0,name:all}"}},[t._v("\n          all\n        ")]),n("span",{staticClass:"arrow-triangle"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"gnb-bottom"}},[n("div",{attrs:{id:"gnb-bottom-wrap"}},[n("div",{staticClass:"gnb-bottom-update new-dot"},[t._v("2019.02 update")]),n("div",{staticClass:"gnb-bottom-copyright"},[t._v("2019 swirlflag")])])])}],y=(n("55dd"),n("e814")),_=n.n(y),C=(n("7f7f"),n("28a5"),{utest:function(){console.log(u)},pxDel:function(t){return _()(t.split("px")[0])},getThisIndex:function(t,e){for(var n=0,i=t.length;n<i;++n)if(t[n]==e)return n},preventDuplicationAnimation:function(t,e){return!!t.classList.contains("is-animating")||(e||(e=1),t.classList.add("is-animating"),setTimeout(function(){t.classList.remove("is-animating")},1e3*e),!1)}}),E=n("bc3a"),T=n.n(E),O={baseUrl:"https://swirlflag.github.io/portfolio/src/data"};function D(){return T.a.get("".concat(O.baseUrl,"/appData.json"))}var x={data:function(){return{activeCategory:{id:0,name:"all"},activeCategoryContents:{},categoryItemHeight:0,categoryFullHeight:0,adminData:[],categoryData:[],test:!1,test2:!0}},computed:Object(s["a"])({},Object(r["c"])(["GET_contentsData","GET_adminData","GET_isMobile"]),{gnb:function(){return document.getElementById("gnb")},gnbInner:function(){return document.getElementById("gnb-inner")},category:function(){return document.getElementById("gnb-category")},categoryNow:function(){return document.getElementById("gnb-category-now")},categoryNowName:function(){return document.getElementById("gnb-category-now-name")},categoryItem:function(){return document.getElementsByClassName("gnb-category-item")},contentsItem:function(){return document.getElementsByClassName("gnb-contents-item")}}),methods:Object(s["a"])({},Object(r["d"])(["OPR_scrollCorrection","OPR_gnbOpen","OPR_gnbClose","OPR_textSlide","OPR_mobileActiveTouchStart","OPR_mobileActiveTouchEnd","LOAD_finshedDataLoad","LOAD_isMobile","SET_gnbSelect","SET_spySubscribe"]),Object(r["b"])([]),{setNavCategoryHeight:function(){this.categoryItemHeight=this.categoryNow.offsetHeight,this.categoryFullHeight=this.categoryItemHeight*(this.categoryData.length+1),console.log("set category height!","item : "+this.categoryItemHeight,"full : "+this.categoryFullHeight)},setCategoryData:function(t){this.categoryData=t},getActiveCategory:function(){},setActiveCategory:function(t){this.activeCategory=Object(s["a"])({},t)},setActiveCategoryContents:function(t){if(this.activeCategoryContents={},0==this.activeCategory.id)console.log("all"),this.activeCategoryContents=Object(s["a"])({},t);else for(var e in console.log("not all"),t)t[e]["content-category"]==this.activeCategory.name&&(this.activeCategoryContents[e]=t[e])},setCategoryHeight:function(t){this.category.style.height=_()(t)+"px"},pushCategoryData:function(t){this.categoryData.push(t)},openNavCategoryHeight:function(){C.preventDuplicationAnimation(this.category,1)||(this.category.classList.add("open"),this.setCategoryHeight(this.categoryFullHeight))},closeNavCategoryHeight:function(){C.preventDuplicationAnimation(this.category,1)||(this.category.classList.remove("open"),this.setCategoryHeight(this.categoryItemHeight))},resetSelectContentsItem:function(){for(var t=0;t<this.contentsItem.length;++t)this.contentsItem[t].classList.remove("select")},categoryCheck:function(){this.category.classList.contains("open")?this.closeNavCategoryHeight():this.openNavCategoryHeight()},categoryItemClick:function(t){var e=this,n=t.target,i=JSON.parse(n.getAttribute("data-item")),o=C.getThisIndex(this.categoryItem,n.parentElement),a=this.activeCategory;this.setActiveCategory(i),setTimeout(function(){e.categoryData.splice(o,1),e.categoryData.push(a),e.categoryData.sort(function(t,e){return t.id-e.id})},1e3),setTimeout(function(){e.closeNavCategoryHeight()},100),this.OPR_textSlide({el:this.categoryNowName,msg:this.activeCategory.name}),this.setActiveCategoryContents(this.GET_contentsData)},contentsItemClick:function(t){this.resetSelectContentsItem(),t.target.parentElement.classList.add("select")},dataAwaitGnb:function(t){var e=this;this.setCategoryData(this.GET_adminData.category),this.setActiveCategoryContents(this.GET_contentsData),this.setNavCategoryHeight(),this.closeNavCategoryHeight(),setTimeout(function(){e.setNavCategoryHeight(),e.closeNavCategoryHeight()},1e3),this.OPR_gnbOpen()},testtoggle:function(){this.gnb.classList.toggle("close")},testclose:function(){this.gnb.classList.add("close")},testopen:function(){this.gnb.classList.remove("close")},testaction:function(){this.setActiveCategoryContents(this.GET_contentsData)},testfunction:function(){var t=this;window.testtoggle=this.testtoggle,window.testopen=this.testopen,window.testclose=this.testclose,window.t=this.testaction,window.t1=function(e){console.log(t.test),t.test=e},window.t2=function(){console.log(t.GET_contentsData)}}}),created:function(){},mounted:function(){var t=this;this.OPR_scrollCorrection(this.gnbInner),this.SET_gnbSelect(),this.SET_spySubscribe(this.dataAwaitGnb),window.addEventListener("resize",function(){t.setNavCategoryHeight(),t.closeNavCategoryHeight()}),this.testfunction()}},I=x,S=(n("1133"),Object(m["a"])(I,b,v,!1,null,"483d676a",null)),L=S.exports,j={components:{"data-render":p,gnb:L},computed:Object(s["a"])({allWrap:function(){return document.getElementById("all-wrap")}},Object(r["c"])(["GET_isMobile"])),methods:Object(s["a"])({},Object(r["d"])(["SET_spySubscribe"]),{setIsMobile:function(){this.allWrap.classList.add(this.GET_isMobile?"mobile-app":"pc-app")}}),created:function(){},mounted:function(){this.SET_spySubscribe(function(t){}),this.setIsMobile()}},A=j,H=(n("034f"),Object(m["a"])(A,o,a,!1,null,null,null)),P=H.exports,k=n("8c4f"),N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"content-page"}},[i("div",{staticClass:"page-controls",attrs:{id:"content-goto-gnb"}},[i("span",{staticClass:"icon-arrow-left"}),i("span",[t._v("BACK TO LIST")])]),i("div",{attrs:{id:"content-image-view"}},[i("ul",{attrs:{id:"content-image-container"}},[i("li",{staticClass:"content-image-item"},[i("img",{attrs:{src:n("906a"),alt:"#"}})]),i("li",{staticClass:"content-image-item"},[i("img",{attrs:{src:n("ee68"),alt:"#"}})]),i("li",{staticClass:"content-image-item"},[i("img",{attrs:{src:n("8572"),alt:"#"}})])]),i("div",{staticClass:"page-controls",attrs:{id:"content-image-controls"}},[i("span",{staticClass:"icon-arrow-left button-prev"}),i("div",{attrs:{id:"content-image-number"}},[i("span",{attrs:{id:"content-now-number"}},[t._v("0")]),i("span",{attrs:{id:"content-max-number"}},[t._v("0")])]),i("span",{staticClass:"icon-arrow-right button-next"})])]),i("div",{attrs:{id:"content-main"}},[i("div",{attrs:{id:"content-header"}},[i("span",{attrs:{id:"content-category"}},[t._v("category")]),i("h2",{attrs:{id:"content-name"}},[t._v("Content Name")])]),i("div",{staticClass:"page-controls",attrs:{id:"content-link"}},[i("a",{staticClass:"button-link",attrs:{href:"#"}},[i("span",[t._v("website")]),i("span",{staticClass:"icon-arrow-right"})])]),i("div",{attrs:{id:"content-maintext"}},[t._v("\n      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n      \n      ")]),i("div",{attrs:{id:"content-info"}},[i("ul",{attrs:{id:"content-info-list"}},[i("li",{staticClass:"content-info-item"},[i("span",{staticClass:"content-info-property"},[t._v("client")]),i("span",{staticClass:"content-info-value"},[t._v("randomised")])]),i("li",{staticClass:"content-info-item"},[i("span",{staticClass:"content-info-property"},[t._v("client")]),i("span",{staticClass:"content-info-value"},[t._v("randomised")])])])]),i("div",{staticClass:"page-controls",attrs:{id:"content-page-controls"}},[i("a",{staticClass:"icon-arrow-left button-prev",attrs:{href:"#"}}),i("div",{attrs:{id:"content-image-number"}},[i("span",{attrs:{id:"content-now-number"}},[t._v("0")]),i("span",{attrs:{id:"content-max-number"}},[t._v("0")])]),i("a",{staticClass:"icon-arrow-right button-next",attrs:{href:"#"}})])])])}],M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("img",{attrs:{src:n("cf05"),alt:""}})])}],B={},$=B,F=(n("5880"),Object(m["a"])($,M,G,!1,null,"f1fc6cb2",null)),z=F.exports,V={data:function(){return{contentName:null,contentsData:null,contentsMainText:null}},computed:Object(s["a"])({imageView:function(){return document.getElementById("content-image-view")},imageContainer:function(){return document.getElementById("content-image-container")},imageItem:function(){return document.getElementsByClassName("content-image-item")}},Object(r["c"])(["adminData"])),methods:{resizeImageView:function(){for(var t=this.imageView.offsetWidth*(10/15)+"px",e=0;e<this.imageItem.length;++e)this.imageItem[e].style.height=t}},created:function(){},mounted:function(){this.resizeImageView(),window.addEventListener("resize",this.resizeImageView)}},J=V,W=(n("d5f0"),Object(m["a"])(J,N,R,!1,null,null,null)),U=W.exports;i["a"].use(k["a"]);var K=new k["a"]({mode:"history",routes:[{path:"/",redirect:"/logo"},{path:"/logo",component:z},{path:"/work/:name",component:U}]}),q={spy:null,isMobile:null,contentsData:{},adminData:{},gnb:null,gnbItems:null,mobileActiveElements:[]},Q={GET_isMobile:function(t){return t.isMobile},GET_adminData:function(t){return t.adminData},GET_contentsData:function(t){return t.contentsData},GET_gnb:function(t){return null==t.gnb&&this.commit("SET_gnbSelect"),t.gnb},GET_gnbItems:function(t){return null==t.gnbItems&&(t.gnb=document.getElementsByClassName("gnb-contents-item")),t.gnbItems}},X={LOAD_isMobile:function(t){t.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},SET_adminData:function(t,e){t.adminData=e},SET_appData:function(t,e){t.contentsData=e["contents-data"],t.adminData=e["admin-data"]},SET_gnbSelect:function(t){t.gnb=document.getElementById("gnb")},SET_gnbItemsSelect:function(t){t.gnbItems=document.getElementsByClassName("gnb-contents-item")},SET_spyDefine:function(t){var e=function(){function t(){this.subscriberList=[]}return t.prototype.subscribe=function(t){this.subscriberList.push(t)},t.prototype.unsubscribe=function(t){this.subscriberList.remove(t)},t.prototype.action=function(t){for(var e=0;e<this.subscriberList.length;++e)this.subscriberList[e](t)},t}();t.spy=new e},SET_spySubscribe:function(t,e){t.spy.subscribe(e)},SET_spyUnsubscribe:function(t,e){t.spy.unsubscribe(e)},GO_spyAction:function(t){t.spy.action()}},Y={TEST:function(t,e){console.log(t,e)},OPR_scrollCorrection:function(t,e){e.addEventListener("scroll",function(){e.offsetHeight+e.scrollTop==e.scrollHeight&&(e.scrollTop=e.scrollHeight-(e.scrollHeight-e.scrollTop)-.1)})},OPR_gnbOpen:function(t){t.gnb.classList.remove("close")},OPR_gnbClose:function(t){t.gnb.classList.add("close")},OPR_textSlide:function(t,e){var n=e.el,i=e.msg,o=e.d;if(!n.classList.contains("is-text-sliding")){o||(o=1);var a=getComputedStyle(n);n.classList.add("is-text-sliding");var s=document.createElement("span"),r=document.createElement("span"),c=document.createElement("span");s.style.display="inline-block",r.style.display="inline-block",c.style.display="inline-block",s.style.position="relative",s.style.transition="all ".concat(o,"s ease"),r.innerText=n.innerText,c.innerText=i;var l={w:C.pxDel(a["padding-right"])+C.pxDel(a["border-right"])+C.pxDel(a["padding-left"])+C.pxDel(a["border-left"]),h:C.pxDel(a["padding-top"])+C.pxDel(a["border-top"])+C.pxDel(a["padding-bottom"])+C.pxDel(a["border-bottom"])};c.style.marginTop=l.h+"px","border-box"==a["box-sizing"]&&(w+=2,h+=2),"inline"==a["display"]&&(n.style.display="inline-block"),n.style.width=n.offsetWidth-l.w+"px",n.style.height=n.offsetHeight-l.h+"px",n.innerHTML="",s.append(r),s.append(document.createElement("br")),s.append(c),n.append(s),setTimeout(function(){s.style.marginTop="-"+n.offsetHeight+"px"},10),setTimeout(function(){n.innerHTML=i,n.classList.remove("is-text-sliding")},1e3*o+10)}},OPR_mobileActiveTouchStart:function(t,e){this.getters.GET_isMobile&&e.target.classList.add("mobile-active")},OPR_mobileActiveTouchEnd:function(t,e){e.target.classList.remove("mobile-active")}},Z=(n("96cf"),n("3b8d")),tt=(n("6b54"),{settingAllData:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=Object(Z["a"])(regeneratorRuntime.mark(function t(e,n){var i,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,o=e.state,t.prev=1,t.next=4,D();case 4:return a=t.sent,i("SET_appData",a.data),t.next=8,n(a,o.spy.subscriberList);case 8:t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0,"settingAllData"),setTimeout(function(){console.log("callee"),settingAllData({commit:i,state:o},n)},1e3);case 14:case 15:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e,n){return t.apply(this,arguments)}}())});i["a"].use(r["a"]);var et=new r["a"].Store({state:Object(s["a"])({},q),getters:Object(s["a"])({},Q),mutations:Object(s["a"])({},X,Y),actions:Object(s["a"])({},tt)});i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(P)},router:K,store:et}).$mount("#app")},5880:function(t,e,n){"use strict";var i=n("0123"),o=n.n(i);o.a},"64a9":function(t,e,n){},8572:function(t,e,n){t.exports=n.p+"img/img03.c5d4a09d.jpg"},"906a":function(t,e,n){t.exports=n.p+"img/img01.3f95a059.jpg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d5f0:function(t,e,n){"use strict";var i=n("d81f"),o=n.n(i);o.a},d6ec:function(t,e,n){},d81f:function(t,e,n){},ee68:function(t,e,n){t.exports=n.p+"img/img02.2d26b606.jpg"}});
//# sourceMappingURL=app.c10ac1b5.js.map