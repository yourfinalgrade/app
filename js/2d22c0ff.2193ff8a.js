(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawerLeft=!e.drawerLeft}}}),n("q-toolbar-title",[e._v("\n                "+e._s(e.pageTitle)+"\n            ")]),n("div"),n("q-btn",{attrs:{flat:""},on:{click:function(t){e.$q.lang.isoName="en-us"===e.$q.lang.isoName?"zh-cn":"en-us"}}},[e._v("\n                "+e._s("zh-cn"===e.$q.lang.isoName?e.$t("english"):e.$t("chinese"))+"\n            ")])],1)],1),n("q-drawer",{attrs:{"content-class":"bg-secondary text-white",elevated:""},model:{value:e.drawerLeft,callback:function(t){e.drawerLeft=t},expression:"drawerLeft"}},[e.isProbablySignedIn?n("q-btn",{attrs:{flat:"",icon:"exit_to_app"},on:{click:function(t){e.logout().then(e.$router.push("/login"))}}},[e._v(e._s(e.$t("logout")))]):e._e()],1),n("q-page-container",[n("router-view")],1)],1)},o=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),c=n.n(a),i=n("2f62");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={name:"MyLayout",computed:s({},Object(i["c"])(["isProbablySignedIn","pageTitle"])),methods:s({},Object(i["b"])(["logout"])),data:function(){return{lang:this.$q.lang,drawerLeft:!1}}},f=u,p=n("2877"),b=n("fe09"),d=Object(p["a"])(f,r,o,!1,null,null,null);t["default"]=d.exports;d.options.components=Object.assign({QLayout:b["q"],QHeader:b["k"],QToolbar:b["y"],QBtn:b["c"],QToolbarTitle:b["z"],QDrawer:b["h"],QPageContainer:b["t"]},d.options.components||{})}}]);