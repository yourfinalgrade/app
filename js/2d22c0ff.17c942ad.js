(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh LpR lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",["ClassView"===t.$router.currentRoute.name||"Scan"===t.$router.currentRoute.name?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"clear"},on:{click:function(e){return t.$router.push("/")}}}):a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerLeft=!t.drawerLeft}}}),a("q-toolbar-title",[t._v("\n                "+t._s(t.pageTitle)+"\n            ")]),a("div"),a("q-btn",{attrs:{flat:""},on:{click:t.toggleLang}},[t._v("\n                "+t._s("zh-cn"===t.$i18n.locale?t.enus.nativeName:t.zhhans.nativeName)+"\n            ")]),a("q-btn",{attrs:{flat:"",icon:"linked_camera"},on:{click:function(e){return t.$router.push("/scan")}}}),a("q-btn",{attrs:{flat:"",icon:"share"},on:{click:function(e){t.rightDrawer=!t.rightDrawer}}})],1)],1),a("q-drawer",{attrs:{breakpoint:500,width:250,"show-if-above":"","content-class":""},model:{value:t.drawerLeft,callback:function(e){t.drawerLeft=e},expression:"drawerLeft"}},[a("div",{class:{column:!0,"bg-grey-10":t.getDarkModeEnabled},staticStyle:{height:"99%"}},[a("div",{staticClass:"col",staticStyle:{"margin-top":"0px"}},[a("q-card",{attrs:{flat:"",dark:t.getDarkModeEnabled}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("your_final_grade")))]),a("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.$t("a_tool_built_with_love_by")))]),"en-us"===t.$i18n.locale?a("div",{staticClass:"text-subtitle2"},[t._v("\n                            ("),a("a",{attrs:{href:"https://jcharante.com"}},[t._v("Jyan")]),t._v(", Jack, and James)\n                        ")]):a("div",{staticClass:"text-subtitle2"},[t._v("\n                            ("),a("a",{attrs:{href:"https://jcharante.com"}},[t._v("张坚")]),t._v(", 杨亦诚和机米)\n                        ")])]),a("q-card-section",[a("div",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.$t("our_goal"))+"\n                        ")])]),a("q-card-section",[a("q-list",{attrs:{dense:""}},[a("q-item-label",{attrs:{header:""}},[t._v(t._s(t.$t("feature_roadmap"))+":")]),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"check_box"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("offline_only_mode")))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"cloud_off"}})],1)],1),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"check_box"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("sync_online")))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"cloud"}})],1),t.displayVoting?a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{icon:"plus_one",flat:"",dense:""}})],1):t._e()],1),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"check_box_outline_blank"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("dark_mode")))])],1),t.displayVoting?a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{icon:"plus_one",flat:"",dense:""}})],1):t._e()],1),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"check_box_outline_blank"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("signin_with_google")))])],1),t.displayVoting?a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{icon:"plus_one",flat:"",dense:""}})],1):t._e()],1)],1)],1),a("q-separator",{attrs:{insert:"",dark:""}}),a("q-card-section",[a("div",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.$t("cta"))+"\n                        ")])])],1)],1),a("div",{staticClass:"col"}),a("div",{staticClass:"col-3 row justify-start items-end"},[a("q-card",{class:{"bg-grey-10":t.getDarkModeEnabled},attrs:{flat:"",dark:t.getDarkModeEnabled}},[a("q-card-section",[t.isProbablySignedIn?a("q-toggle",{attrs:{dark:t.getDarkModeEnabled,disable:"",label:t.$t("dark_mode")},model:{value:t.darkModeEnabled,callback:function(e){t.darkModeEnabled=e},expression:"darkModeEnabled"}}):t._e()],1),a("q-card-section",[a("q-toggle",{attrs:{disable:"unregistered"===t.getSessionKey,label:t.$t("enable_online_sync")},model:{value:t.enableOnlineSync,callback:function(e){t.enableOnlineSync=e},expression:"enableOnlineSync"}})],1),a("q-card-section",[t.isProbablySignedIn?a("q-btn",{attrs:{flat:"",color:"accent",dark:t.getDarkModeEnabled,icon:"exit_to_app"},on:{click:function(e){t.userLogout().then(t.dataLogout()).then(t.appLogout()).then(t.$router.push("/login"))}}},[t._v(t._s(t.$t("logout")))]):t._e()],1)],1)],1)])]),a("q-drawer",{attrs:{side:"right","show-if-above":"",width:250},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[a("div",{staticClass:"column justify-center items-center",staticStyle:{height:"95%"}},[a("div",{staticClass:"col-6"},[a("q-card",{attrs:{flat:""}},[a("q-card-section",[a("p",{staticClass:"text-center"},[t._v(t._s(t.$t("share_site_with_friend")))])]),a("q-card-section",[a("div",{attrs:{id:"qrcode"}})])],1)],1)])]),a("q-page-container",[a("router-view")],1)],1)},r=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),i=a.n(o),s=a("d044"),c=a.n(s),l=a("2f62"),d=a("1f91"),u=a("bf69");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(a,!0).forEach((function(e){i()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"MyLayout",computed:g({},Object(l["c"])(["isProbablySignedIn","pageTitle","getDarkModeEnabled","getEnableOnlineSync","getSessionKey"]),{displayVoting:function(){return!1},darkModeEnabled:{set:function(t){this.setDarkModeEnabled({enabled:t})},get:function(){return this.getDarkModeEnabled}},enableOnlineSync:{set:function(t){this.setEnableOnlineSync({enabled:t})},get:function(){return this.getEnableOnlineSync}}}),mounted:function(){this.qrcode=new c.a("qrcode",{width:200,height:200,colorDark:"#ac2b37",colorLight:"#fff"}),this.qrcode.makeCode(window.location.origin)},methods:g({},Object(l["b"])(["userLogout","appLogout","dataLogout","setLocale","setDarkModeEnabled","setEnableOnlineSync"]),{toggleLang:function(){var t=this.$i18n.locale,e="en-us"===t?"zh-cn":"en-us";this.$i18n.locale=e,this.lang.set("en-us"===e?d["a"]:u["a"]),this.setLocale({locale:e})}}),data:function(){return{lang:this.$q.lang,i18n:this.$i18n,drawerLeft:!1,rightDrawer:!1,enus:d["a"],zhhans:u["a"],router:this.$router,qrcode:null}}},_=f,h=a("2877"),q=a("fe09"),m=Object(h["a"])(_,n,r,!1,null,null,null);e["default"]=m.exports;m.options.components=Object.assign({QLayout:q["r"],QHeader:q["l"],QToolbar:q["A"],QBtn:q["c"],QToolbarTitle:q["B"],QDrawer:q["h"],QCard:q["d"],QCardSection:q["f"],QList:q["s"],QItemLabel:q["p"],QItem:q["o"],QItemSection:q["q"],QIcon:q["m"],QSeparator:q["y"],QToggle:q["z"],QPageContainer:q["v"]},m.options.components||{})}}]);