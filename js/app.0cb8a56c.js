(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/hackernews/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),a=s.n(n);a.a},"10a3":function(t,e,s){},4400:function(t,e,s){"use strict";var n=s("10a3"),a=s.n(n);a.a},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="4678"},4918:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("section",[s("v-app",[s("ToolBar",{on:{pass:function(e){t.drawer=!0}}}),s("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",{attrs:{shaped:""}},[s("v-subheader",[t._v("Hackers News")]),s("v-list-item-group",{attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.items,function(e,n){return s("v-list-item",{key:n,attrs:{to:e.to}},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)}),1)],1)],1),s("v-content",[s("transition",{attrs:{name:"fade"}},[s("router-view",{attrs:{id:"router"}})],1)],1)],1)],1)])],1)],1),s("Spinner",{attrs:{loading:t.loading}})],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-bar",{attrs:{absolute:"",color:"primary",dark:"",fixed:""}},[s("v-app-bar-nav-icon",{on:{click:t.sendModal}}),s("v-toolbar-title",[t._v("Hackers News")]),s("div",{staticClass:"flex-grow-1"})],1)},o=[],c={methods:{sendModal(){this.$emit("pass")}}},l=c,u=(s("4400"),s("2877")),d=Object(u["a"])(l,i,o,!1,null,"627698a6",null),m=d.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?s("div",{staticClass:"lds-facebook"},[s("div"),s("div"),s("div")]):t._e()},b=[],p={props:{loading:{type:Boolean,required:!0}}},j=p,v=(s("f22a"),Object(u["a"])(j,f,b,!1,null,null,null)),h=v.exports,_=new n["default"],g={name:"app",data(){return{loading:!1,drawer:!1,item:0,items:[{text:"News",icon:"mdi-newspaper-variant-outline",to:{path:"/news"}},{text:"Ask",icon:"mdi-cloud-question",to:"/ask"},{text:"Jobs",icon:"mdi-laptop",to:"/jobs"}]}},methods:{startSpinner(){this.loading=!0},endSpinner(){this.loading=!1}},created(){_.$on("start:spinner",this.startSpinner),_.$on("end:spinner",this.endSpinner)},beforeDestroy(){_.$off("start:spinner",this.startSpinner),_.$off("end:spinner",this.endSpinner)},components:{ToolBar:m,Spinner:h}},y=g,k=(s("034f"),Object(u["a"])(y,a,r,!1,null,null,null)),w=k.exports,x=s("8c4f"),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ListItem")},E=[],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"grey lighten-5"},[s("h1",{staticClass:"display-3 ml-4 mb-5",attrs:{align:"center"}},[t._v(t._s(this.$route.name.toUpperCase()))]),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",t._l(t.listItems,function(e,n){return s("v-card",{key:n,staticClass:"mx-auto",attrs:{"max-width":"900",outlined:"","two-line":""}},[s("v-list-item-content",{staticClass:"ml-2"},[e.domain?[s("a",{staticClass:"overline mb-4",attrs:{href:"http://"+e.domain}},[t._v(t._s(e.domain))])]:t._e(),s("v-list-item-title",{staticClass:"headline mb-5"},["ask"!==e.type?[s("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])]:[s("router-link",{attrs:{to:"/item/"+e.id}},[t._v(t._s(e.title))])]],2),s("v-list-item-subtitle",[t._v("\n            "+t._s(e.time_ago)+"\n\n            "),"job"!==e.type?[t._v("\n                by\n            "),s("router-link",{attrs:{to:"/user/"+e.user}},[t._v(t._s(e.user))])]:t._e()],2)],2)],1)}),1)],1)],1)},$=[],T=s("2f62"),O={computed:{listItems(){return this.$store.state.list}}},z=O,I=Object(u["a"])(z,S,$,!1,null,null,null),L=I.exports,U={mounted(){_.$emit("end:spinner")}},M={components:{ListItem:L},mixins:[U]},P=M,H=Object(u["a"])(P,C,E,!1,null,null,null),F=H.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ListItem")},B=[],q={components:{ListItem:L},mixins:[U]},G=q,R=Object(u["a"])(G,N,B,!1,null,null,null),D=R.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ListItem")},A=[],Q={components:{ListItem:L},mixins:[U]},K=Q,V=Object(u["a"])(K,J,A,!1,null,null,null),W=V.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("UserProfile")},Y=[],Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",{staticClass:"mx-auto",attrs:{width:"700",outlined:""}},[s("v-list-item",{attrs:{"three-line":""}},[s("v-list-item-content",[s("div",{staticClass:"overline mb-4"},[t._v("User Info")]),s("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(t.user.id))]),s("v-list-item-subtitle",[t._v("karma:"+t._s(t.user.karma))]),s("v-list-item-subtitle",[t._v("created: "+t._s(t._f("date")(t.user.created_time))+" ("+t._s(t.user.created)+")")])],1),s("v-list-item-avatar",{attrs:{tile:"",size:"200",color:"grey"}},[s("v-img",{attrs:{src:"https://source.unsplash.com/random/200x200"}})],1)],1),s("v-card-actions",[s("v-btn",{attrs:{tile:"",raised:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Go Back")])],1)],1)],1)},tt=[],et=s("c1df"),st=s.n(et),nt={computed:{...Object(T["b"])(["user"])},filters:{date:t=>st.a.unix(t).format("llll")}},at=nt,rt=Object(u["a"])(at,Z,tt,!1,null,null,null),it=rt.exports,ot={components:{UserProfile:it},created(){const t=this.$route.params.id;console.log(t),this.$store.dispatch("FETCH_USER",t)}},ct=ot,lt=Object(u["a"])(ct,X,Y,!1,null,null,null),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mx-auto",attrs:{width:"900",outlined:""}},[s("v-list-item",{attrs:{"three-line":""}},[s("v-list-item-content",[s("div",{staticClass:"overline mb-4"},[t._v("Q & A")]),s("v-list-item-title",{staticClass:"text-no-wrap headline mb-1"},[t._v(t._s(t.item.title))]),s("v-list-item-subtitle",[t._v(t._s(t.item.time_ago)+" by \n        "),s("router-link",{attrs:{to:"/user/"+t.item.user}},[t._v("\n        "+t._s(t.item.user)+"\n         ")])],1),s("v-card",{staticClass:"mt-5"},[s("v-card-text",[s("p",{staticClass:"body-1 font-bold font-italic",domProps:{innerHTML:t._s(t.item.content)}})])],1),s("v-card",{staticClass:"mt-5"},[s("v-card-text",[s("v-btn",{staticClass:"overline",attrs:{text:""},on:{click:function(e){t.openComments=!0}}},[t._v("see comments ("+t._s(t.item.comments_count)+")")]),t._l(t.item.comments,function(e,n){return s("p",{directives:[{name:"show",rawName:"v-show",value:t.openComments,expression:"openComments"}],key:n,staticClass:"mt-4",staticStyle:{"margin-bottom":"0px"}},[s("span",{staticClass:"subtitle-2 font-bold",domProps:{innerHTML:t._s(e.content)}}),s("span",{staticClass:"minus",staticStyle:{}},[t._v("\n              "+t._s(e.time_ago)+" by\n              "),s("router-link",{attrs:{to:"/user/"+e.user}},[t._v(t._s(e.user))])],1),s("v-progress-linear",{attrs:{height:"1",opacity:"1",color:"black"}})],1)})],2)],1)],1)],1),s("v-card-actions",[s("v-btn",{attrs:{block:"",tile:"",raised:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Go Back")])],1)],1)},mt=[],ft={data(){return{openComments:!1}},computed:{...Object(T["b"])(["item"])},created(){const t=this.$route.params.id;this.$store.dispatch("FETCH_ITEM",t)}},bt=ft,pt=(s("ac95"),Object(u["a"])(bt,dt,mt,!1,null,null,null)),jt=pt.exports,vt={SET_USER(t,e){t.user=e},SET_ITEM(t,e){t.item=e},SET_LIST(t,e){t.list=e}},ht=s("bc3a"),_t=s.n(ht);const gt={baseUrl:"https://api.hnpwa.com/v0/"};async function yt(t){try{return await _t.a.get(`${gt.baseUrl}${t}/1.json`)}catch(e){console.log(e)}}function kt(t){return _t.a.get(`${gt.baseUrl}user/${t}.json`)}function wt(t){return _t.a.get(`${gt.baseUrl}item/${t}.json`)}var xt={async FETCH_USER(t,e){try{const n=await kt(e);t.commit("SET_USER",n.data)}catch(s){console.log(s)}},async FETCH_ITEM({commit:t},e){try{const{data:n}=await wt(e);t("SET_ITEM",n)}catch(s){console.log(s)}},async FETCH_LIST({commit:t},e){try{const n=await yt(e);return t("SET_LIST",n.data),n}catch(s){console.log(s)}}};n["default"].use(T["a"]);var Ct=new T["a"].Store({state:{user:{},item:{},list:[]},mutations:vt,actions:xt});n["default"].use(x["a"]);var Et=new x["a"]({mode:"history",routes:[{path:"/",redirect:"news"},{name:"news",path:"/news",component:F,beforeEnter:(t,e,s)=>{_.$emit("start:spinner"),Ct.dispatch("FETCH_LIST",t.name).then(()=>{s()}).catch(t=>{console.log(t.message)})}},{name:"ask",path:"/ask",component:W,beforeEnter:(t,e,s)=>{_.$emit("start:spinner"),Ct.dispatch("FETCH_LIST",t.name).then(()=>{s()}).catch(t=>{console.log(t.message)})}},{name:"jobs",path:"/jobs",component:D,beforeEnter:(t,e,s)=>{_.$emit("start:spinner"),Ct.dispatch("FETCH_LIST",t.name).then(()=>{s()}).catch(t=>{console.log(t.message)})}},{name:"user",path:"/user/:id",component:ut},{name:"item",path:"/item/:id",component:jt}]}),St=s("ce5b"),$t=s.n(St);s("bf40");n["default"].use($t.a);var Tt=new $t.a({icons:{iconfont:"mdi"}});n["default"].config.productionTip=!1,new n["default"]({router:Et,vuetify:Tt,store:Ct,moment:st.a,render:t=>t(w)}).$mount("#app")},"5c33":function(t,e,s){},"64a9":function(t,e,s){},ac95:function(t,e,s){"use strict";var n=s("4918"),a=s.n(n);a.a},f22a:function(t,e,s){"use strict";var n=s("5c33"),a=s.n(n);a.a}});
//# sourceMappingURL=app.0cb8a56c.js.map