(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getSessionKey",(function(){return W})),n.d(r,"getDisplayName",(function(){return A})),n.d(r,"isProbablySignedIn",(function(){return E}));var a={};n.r(a),n.d(a,"setSessionKey",(function(){return V})),n.d(a,"setDisplayName",(function(){return B})),n.d(a,"setLocale",(function(){return M}));var o={};n.r(o),n.d(o,"saveUserStore",(function(){return q})),n.d(o,"logout",(function(){return J})),n.d(o,"login",(function(){return Y})),n.d(o,"setDisplayName",(function(){return z})),n.d(o,"setSessionDoc",(function(){return F})),n.d(o,"setLocale",(function(){return H}));var s={};n.r(s),n.d(s,"getClassIds",(function(){return te})),n.d(s,"getClassById",(function(){return ne})),n.d(s,"getCategoryByClassAndCategoryId",(function(){return re})),n.d(s,"getGradeByClassAndGradeId",(function(){return ae}));var i={};n.r(i),n.d(i,"setClass",(function(){return ie})),n.d(i,"setCategory",(function(){return ce})),n.d(i,"setGrade",(function(){return ue}));var c={};n.r(c),n.d(c,"saveDataStore",(function(){return le})),n.d(c,"addClass",(function(){return de})),n.d(c,"addCategory",(function(){return pe})),n.d(c,"modifyCategory",(function(){return fe})),n.d(c,"setGrade",(function(){return ge}));var u={};n.r(u),n.d(u,"pageTitle",(function(){return be}));var l={};n.r(l),n.d(l,"setPageTitle",(function(){return ye}));var d={};n.r(d),n.d(d,"saveAppStore",(function(){return we})),n.d(d,"setPageTitle",(function(){return xe}));var p=n("967e"),f=n.n(p),g=(n("a481"),n("96cf"),n("fa84")),m=n.n(g),v=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),_=n("b05d"),h=n("436b"),b=n("18d6");v["a"].use(_["a"],{config:{},plugins:{Dialog:h["a"],LocalStorage:b["a"]}});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},w=[],x=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),P=n.n(x),S=n("2f62"),O=n("1f91"),C=n("bf69");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={name:"App",methods:k({},Object(S["b"])(["saveUserStore","saveDataStore","saveAppStore","setLocale"])),mounted:function(){var e=this,t=this.$store.state.user.locale;this.$i18n.locale=t,this.$q.lang.set("en-us"===t?O["a"]:C["a"]),window.addEventListener("beforeunload",(function(){e.saveUserStore(),e.saveDataStore(),e.saveAppStore()}))}},N=D,I=n("2877"),T=Object(I["a"])(N,y,w,!1,null,null,null),L=T.exports;n("f751");function G(){return{displayName:"",sessionKey:"",locale:""}}var K={};b["a"].has("vuex-store-user")&&(K=b["a"].getItem("vuex-store-user"));var U=Object.assign(G(),K);function W(e){return e.sessionKey}function A(e){return e.displayName}function E(e){return e.sessionKey.length>0}function V(e,t){v["a"].set(e,"sessionKey",t)}function B(e,t){v["a"].set(e,"displayName",t)}function M(e,t){v["a"].set(e,"locale",t)}n("551c");var $=n("758b");function q(e){var t=e.state;b["a"].set("vuex-store-user",t)}function J(e){var t=e.commit;return new Promise((function(e,n){localStorage.clear(),t("setSessionKey",""),t("setDisplayName",""),e()}))}function Y(e,t){e.commit,t.username,t.password;return new Promise((function(e,t){e()}))}function z(e,t){var n=e.commit,r=e.dispatch,a=t.displayName;localStorage.setItem("displayName",a),n("setDisplayName",a),r("saveUserStore")}function F(e,t){var n=e.commit,r=e.dispatch,a=t.sessionKey;localStorage.setItem("sessionKey",a),n("setSessionKey",a),r("saveUserStore")}function H(e,t){var n=e.commit,r=e.dispatch,a=t.locale;n("setLocale",a),r("saveUserStore")}var Q={namespaced:!1,getters:r,mutations:a,actions:o,state:U};function R(){return{classes:{}}}var X={};b["a"].has("vuex-store-data")&&(X=b["a"].getItem("vuex-store-data"));var Z=Object.assign(R(),X),ee=n("e3d2");function te(e){return Object.keys(e.classes)}function ne(e){return function(t){return e.classes[t]}}function re(e){return function(t,n){return Object.assign({},Object(ee["a"])(),e.classes[t].categories[n])}}function ae(e){return function(t,n){return Object.assign({},Object(ee["c"])(),e.classes[t].grades[n])}}var oe=n("f3e3"),se=n.n(oe);function ie(e,t){var n=se()(t,2),r=n[0].id,a=n[1];v["a"].set(e.classes,r,a)}function ce(e,t){var n=se()(t,3),r=n[0].classid,a=n[1].id,o=n[2];r in e.classes&&v["a"].set(e.classes[r].categories,a,o)}function ue(e,t){var n=se()(t,3),r=n[0].classid,a=n[1].id,o=n[2];r in e.classes&&v["a"].set(e.classes[r].grades,a,o)}n("8615"),n("7f7f");function le(e){var t=e.state;b["a"].set("vuex-store-data",t)}function de(e,t){var n=e.commit,r=e.state,a=t.name;return new Promise((function(e,t){if(Object.values(r.classes).filter((function(e){return e.name===a})).length>0)t("You may not have a class with the same name");else{var o=Object(ee["b"])();o.name=a,n("setClass",[o,o]),e()}}))}function pe(e,t){var n=e.commit,r=se()(t,2),a=r[0].classid,o=r[1];return new Promise((function(e,t){"id"in o||(o.id=Object(ee["d"])()),n("setCategory",[{classid:a},o,o]),e(o.id)}))}function fe(e,t){var n=e.commit,r=se()(t,2),a=r[0],o=a.classid,s=a.id,i=r[1];return new Promise((function(e,t){n("setCategory",[{classid:o},{id:s},i]),e()}))}function ge(e,t){var n=e.commit,r=se()(t,2),a=r[0],o=a.classid,s=a.id,i=r[1];return new Promise((function(e,t){n("setGrade",[{classid:o},{id:s},i]),e()}))}var me={namespaced:!1,getters:s,mutations:i,actions:c,state:Z};function ve(){return{pageTitle:"Your Final Grade"}}var _e={};b["a"].has("vuex-store-app")&&(_e=b["a"].getItem("vuex-store-app"));var he=Object.assign(ve(),_e);function be(e){return e.pageTitle}function ye(e,t){var n=t.name;e.pageTitle=n}function we(e){var t=e.state;b["a"].set("vuex-store-app",t)}function xe(e,t){var n=e.commit,r=t.name;return new Promise((function(e,t){n("setPageTitle",{name:r}),e()}))}var Pe={namespaced:!1,getters:u,mutations:l,actions:d,state:he};v["a"].use(S["a"]);var Se=function(){var e=new S["a"].Store({modules:{user:Q,data:me,app:Pe},strict:!1});return e},Oe=n("8c4f"),Ce=[{path:"/",component:function(){return Promise.all([n.e("f158389a"),n.e("2d22c0ff")]).then(n.bind(null,"f241"))},children:[{path:"login",component:function(){return Promise.all([n.e("f158389a"),n.e("2d0a314a")]).then(n.bind(null,"013f"))}},{path:"class/:classid",component:function(){return Promise.all([n.e("f158389a"),n.e("ac76b056")]).then(n.bind(null,"24b4"))},props:!0},{path:"",component:function(){return Promise.all([n.e("f158389a"),n.e("7ccfc4eb")]).then(n.bind(null,"f75a"))}}]}];Ce.push({path:"*",component:function(){return Promise.all([n.e("f158389a"),n.e("4b47640d")]).then(n.bind(null,"e51e"))}});var je=Ce;v["a"].use(Oe["a"]);var ke=function(e){var t=e.store,n=new Oe["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:je,mode:"hash",base:""});return n.beforeEach((function(e,n,r){"/login"!==e.fullPath&&0===t.getters.getSessionKey.length?r({path:"/login",replace:!0}):e.params.classid&&!t.getters.getClassById(e.params.classid)?r({path:"/",replace:!0}):r({path:e,replace:!0})})),n},De=function(){var e="function"===typeof Se?Se({Vue:v["a"]}):Se,t="function"===typeof ke?ke({Vue:v["a"],store:e}):ke;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(L)}};return{app:n,store:e,router:t}},Ne=n("a925"),Ie={username:"Username",password:"Password",create_account:"Create Account",logout:"Log out",signin:"Sign in",class_name:"Class name",current_grade:"Current Grade",lowest_possible_grade:"Lowest Possible Grade",highest_possible_grade:"Highest Possible Grade",classes:"Classes",set_grade_properties:"Set grade properties",set_category_properties:"Set category properties",category:"Category",assignment_name:"Assignment Name",category_name:"Category Name",category_weight:"Category Weight",num_dropped_grades:"Number of Dropped Grades",max_percent:"Max Category Weight",max_points:"Max Points",points_earned:"Points Earned",possible_extra_credit:"Possible Extra Credit",toggle_build_up:"Toggle Build Up",toggle_top_worth_more:"Toggle Top Worth More",top_worth_more_num:"Top Worth More #",top_worth_value_percentage:"Top Worth Value %",bot_worth_value_percentage:"Bot Worth Value %",no_categories_entered:"It doesn't look like you have any categories added :(",no_classes_entered:"It doesn't look like you have any classes added :(",why_not_add_one:"Why not add one?",assignment:"Assignment",points:"Points",display_name:"Display Name",need_an_account:"Need an account?",already_have_account:"I already have an account"},Te={username:"用户名",password:"密码",create_account:"注册",logout:"退出",signin:"登录",class_name:"课程名称",current_grade:"当前成绩",lowest_possible_grade:"理论最低得分",highest_possible_grade:"理论最高得分",classes:"课程",set_grade_properties:"添加成绩",set_category_properties:"新建类别",category:"类别",assignment_name:"项目名称",category_name:"类别名称",category_weight:"类别占比",num_dropped_grades:"可以舍弃的最低分数量",max_percent:"类别最大占比",max_points:"总分",points_earned:"得分",possible_extra_credit:"额外加分",toggle_build_up:"累计模式",toggle_top_worth_more:"高分增值模式",top_worth_more_num:"高分增值数量 #",top_worth_value_percentage:"高分占比 %",bot_worth_value_percentage:"其余占比 %",no_categories_entered:"看上去你还没有添加任何类别 :(",no_classes_entered:"看上去你还没有添加任何课程 :(",why_not_add_one:"为什么不添加一个呢?",assignment:"项目",points:"得分",display_name:"呢称",need_an_account:"需要一个账号？",already_have_account:"我已有账号"},Le={"en-us":Ie,"zh-cn":Te};v["a"].use(Ne["a"]);var Ge=new Ne["a"]({locale:_["a"].lang.getLocale(),fallbackLocale:"en-us",messages:Le}),Ke=function(e){var t=e.app;t.i18n=Ge},Ue=De(),We=Ue.app,Ae=Ue.store,Ee=Ue.router;function Ve(){return Be.apply(this,arguments)}function Be(){return Be=m()(f.a.mark((function e(){var t,n,r,a,o;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=!0,n=function(e){t=!1,window.location.href=e},r=window.location.href.replace(window.location.origin,""),a=[Ke,$["b"]],o=0;case 5:if(!(!0===t&&o<a.length)){e.next=23;break}if("function"===typeof a[o]){e.next=8;break}return e.abrupt("continue",20);case 8:return e.prev=8,e.next=11,a[o]({app:We,router:Ee,store:Ae,Vue:v["a"],ssrContext:null,redirect:n,urlPath:r});case 11:e.next=20;break;case 13:if(e.prev=13,e.t0=e["catch"](8),!e.t0||!e.t0.url){e.next=18;break}return window.location.href=e.t0.url,e.abrupt("return");case 18:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 20:o++,e.next=5;break;case 23:if(!1!==t){e.next=25;break}return e.abrupt("return");case 25:new v["a"](We);case 26:case"end":return e.stop()}}),e,null,[[8,13]])}))),Be.apply(this,arguments)}Ve()},"758b":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("967e"),a=n.n(r),o=(n("96cf"),n("fa84")),s=n.n(o),i=n("bc3a"),c=n.n(i),u=c.a.create({baseURL:"https://us-east4-your-final-grade.cloudfunctions.net/api-service"});t["b"]=function(){var e=s()(a.a.mark((function e(t){var n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=u;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},e3d2:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));n("a481"),n("6b54"),n("06db");function r(){var e=((new Date).getTime()/1e3|0).toString(16);return e+"xxxxxxxxxxxxxxxx".replace(/[x]/g,(function(){return(16*Math.random()|0).toString(16)})).toLowerCase()}function a(){return{id:r(),name:"",categories:{},grades:{}}}function o(){return{name:"",weight:0,buildUp:!0,maxPoints:0,droppedGrades:0,maxPercent:0,topWorthMore:0,topWorthValue:0,botWorthValue:0}}function s(){return{category:"",name:"",maxPoints:0,pointsEarned:0,possibleExtraCredit:0}}}},[[0,"runtime","vendor"]]]);