(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fce7"],{ea1f:function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"container"},[s("header",{staticClass:"jumbotron"},[s("h3",[s("strong",[e._v(e._s(e.currentUser.username))]),e._v(" Profile ")])]),s("p",[s("strong",[e._v("Token:")]),e._v(" "+e._s(e.currentUser.accessToken.substring(0,20))+" ... "+e._s(e.currentUser.accessToken.substr(e.currentUser.accessToken.length-20))+" ")]),s("p",[s("strong",[e._v("Id:")]),e._v(" "+e._s(e.currentUser.id)+" ")]),s("p",[s("strong",[e._v("Email:")]),e._v(" "+e._s(e.currentUser.email)+" ")]),s("strong",[e._v("Authorities:")]),s("ul",e._l(e.currentUser.roles,(function(r,t){return s("li",{key:t},[e._v(e._s(r))])})),0)])},n=[],u={name:"Profile",computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/login")}},c=u,o=s("2877"),i=Object(o["a"])(c,t,n,!1,null,null,null);r["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d22fce7.93b8e5b1.js.map