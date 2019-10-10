(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getSessionKey",(function(){return U})),n.d(r,"getDisplayName",(function(){return W})),n.d(r,"isProbablySignedIn",(function(){return V})),n.d(r,"getLocale",(function(){return B}));var a={};n.r(a),n.d(a,"setSessionKey",(function(){return M})),n.d(a,"setDisplayName",(function(){return $})),n.d(a,"setLocale",(function(){return q}));var s={};n.r(s),n.d(s,"saveUserStore",(function(){return Y})),n.d(s,"logout",(function(){return z})),n.d(s,"login",(function(){return F})),n.d(s,"setDisplayName",(function(){return H})),n.d(s,"setSessionDoc",(function(){return Q})),n.d(s,"setLocale",(function(){return R}));var o={};n.r(o),n.d(o,"getClassIds",(function(){return re})),n.d(o,"getClassById",(function(){return ae})),n.d(o,"getCategoryByClassAndCategoryId",(function(){return se})),n.d(o,"getGradeByClassAndGradeId",(function(){return oe}));var i={};n.r(i),n.d(i,"setClass",(function(){return ue})),n.d(i,"setCategory",(function(){return le})),n.d(i,"setGrade",(function(){return de})),n.d(i,"setClassName",(function(){return fe}));var c={};n.r(c),n.d(c,"saveDataStore",(function(){return pe})),n.d(c,"addClass",(function(){return me})),n.d(c,"addCategory",(function(){return ge})),n.d(c,"modifyCategory",(function(){return _e})),n.d(c,"setGrade",(function(){return ve})),n.d(c,"setClassName",(function(){return be}));var u={};n.r(u),n.d(u,"pageTitle",(function(){return Pe}));var l={};n.r(l),n.d(l,"setPageTitle",(function(){return Ce}));var d={};n.r(d),n.d(d,"saveAppStore",(function(){return Se})),n.d(d,"setPageTitle",(function(){return Oe}));var f=n("967e"),p=n.n(f),m=(n("a481"),n("96cf"),n("fa84")),g=n.n(m),_=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),v=n("b05d"),b=n("436b"),h=n("18d6"),y=n("2a19");_["a"].use(v["a"],{config:{},plugins:{Dialog:b["a"],LocalStorage:h["a"],Notify:y["a"]}});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},x=[],P=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),C=n.n(P),S=n("2f62"),O=n("1f91"),j=n("bf69");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={name:"App",methods:D({},Object(S["b"])(["saveUserStore","saveDataStore","saveAppStore","setLocale"])),mounted:function(){var e=this,t=this.$store.state.user.locale;this.$i18n.locale=t,this.$q.lang.set("en-us"===t?O["a"]:j["a"]),window.addEventListener("beforeunload",(function(){e.saveUserStore(),e.saveDataStore(),e.saveAppStore()}))}},I=k,T=n("2877"),L=Object(T["a"])(I,w,x,!1,null,null,null),G=L.exports;n("f751");function K(){return{displayName:"",sessionKey:"",locale:"en-us"}}var A={};h["a"].has("vuex-store-user")&&(A=h["a"].getItem("vuex-store-user"));var E=Object.assign(K(),A);function U(e){return e.sessionKey}function W(e){return e.displayName}function V(e){return e.sessionKey.length>0}function B(e){return e.locale}function M(e,t){_["a"].set(e,"sessionKey",t)}function $(e,t){_["a"].set(e,"displayName",t)}function q(e,t){_["a"].set(e,"locale",t)}n("551c");var J=n("758b");function Y(e){var t=e.state;h["a"].set("vuex-store-user",t)}function z(e){var t=e.commit;return new Promise((function(e,n){localStorage.clear(),t("setSessionKey",""),t("setDisplayName",""),e()}))}function F(e,t){e.commit,t.username,t.password;return new Promise((function(e,t){e()}))}function H(e,t){var n=e.commit,r=e.dispatch,a=t.displayName;localStorage.setItem("displayName",a),n("setDisplayName",a),r("saveUserStore")}function Q(e,t){var n=e.commit,r=e.dispatch,a=t.sessionKey;localStorage.setItem("sessionKey",a),n("setSessionKey",a),r("saveUserStore")}function R(e,t){var n=e.commit,r=e.dispatch,a=t.locale;n("setLocale",a),r("saveUserStore")}var X={namespaced:!1,getters:r,mutations:a,actions:s,state:E};function Z(){return{classes:{}}}var ee={};h["a"].has("vuex-store-data")&&(ee=h["a"].getItem("vuex-store-data"));var te=Object.assign(Z(),ee),ne=n("e3d2");function re(e){return Object.keys(e.classes)}function ae(e){return function(t){return e.classes[t]}}function se(e){return function(t,n){return Object.assign({},Object(ne["a"])(),e.classes[t].categories[n])}}function oe(e){return function(t,n){return Object.assign({},Object(ne["c"])(),e.classes[t].grades[n])}}n("7f7f");var ie=n("f3e3"),ce=n.n(ie);function ue(e,t){var n=ce()(t,2),r=n[0].id,a=n[1];_["a"].set(e.classes,r,a)}function le(e,t){var n=ce()(t,3),r=n[0].classid,a=n[1].id,s=n[2];r in e.classes&&_["a"].set(e.classes[r].categories,a,s)}function de(e,t){var n=ce()(t,3),r=n[0].classid,a=n[1].id,s=n[2];r in e.classes&&_["a"].set(e.classes[r].grades,a,s)}function fe(e,t){var n=ce()(t,2),r=n[0].classid,a=n[1].name;r in e.classes&&_["a"].set(e.classes[r],"name",a)}n("8615");function pe(e){var t=e.state;h["a"].set("vuex-store-data",t)}function me(e,t){var n=e.commit,r=e.state,a=t.name;return new Promise((function(e,t){if(Object.values(r.classes).filter((function(e){return e.name===a})).length>0)t("You may not have a class with the same name");else{var s=Object(ne["b"])();s.name=a,n("setClass",[s,s]),e()}}))}function ge(e,t){var n=e.commit,r=ce()(t,2),a=r[0].classid,s=r[1];return new Promise((function(e,t){"id"in s||(s.id=Object(ne["d"])()),n("setCategory",[{classid:a},s,s]),e(s.id)}))}function _e(e,t){var n=e.commit,r=ce()(t,2),a=r[0],s=a.classid,o=a.id,i=r[1];return new Promise((function(e,t){n("setCategory",[{classid:s},{id:o},i]),e()}))}function ve(e,t){var n=e.commit,r=ce()(t,2),a=r[0],s=a.classid,o=a.id,i=r[1];return new Promise((function(e,t){n("setGrade",[{classid:s},{id:o},i]),e()}))}function be(e,t){var n=e.commit,r=ce()(t,2),a=r[0].classid,s=r[1].name;return new Promise((function(e,t){n("setClassName",[{classid:a},{name:s}]),e()}))}var he={namespaced:!1,getters:o,mutations:i,actions:c,state:te};function ye(){return{pageTitle:"Your Final Grade"}}var we={};h["a"].has("vuex-store-app")&&(we=h["a"].getItem("vuex-store-app"));var xe=Object.assign(ye(),we);function Pe(e){return e.pageTitle}function Ce(e,t){var n=t.name;e.pageTitle=n}function Se(e){var t=e.state;h["a"].set("vuex-store-app",t)}function Oe(e,t){var n=e.commit,r=t.name;return new Promise((function(e,t){n("setPageTitle",{name:r}),e()}))}var je={namespaced:!1,getters:u,mutations:l,actions:d,state:xe};_["a"].use(S["a"]);var Ne=function(){var e=new S["a"].Store({modules:{user:X,data:he,app:je},strict:!1});return e},De=n("8c4f"),ke=[{path:"/",component:function(){return Promise.all([n.e("7bc175d4"),n.e("2d22c0ff")]).then(n.bind(null,"f241"))},children:[{path:"login",component:function(){return Promise.all([n.e("7bc175d4"),n.e("2d0a314a")]).then(n.bind(null,"013f"))}},{path:"class/:classid",component:function(){return Promise.all([n.e("7bc175d4"),n.e("02ebbd2e")]).then(n.bind(null,"24b4"))},props:!0},{path:"",component:function(){return Promise.all([n.e("7bc175d4"),n.e("4efe7cfc")]).then(n.bind(null,"f75a"))}}]}];ke.push({path:"*",component:function(){return Promise.all([n.e("7bc175d4"),n.e("4b47640d")]).then(n.bind(null,"e51e"))}});var Ie=ke;_["a"].use(De["a"]);var Te=function(e){var t=e.store,n=new De["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Ie,mode:"hash",base:""});return n.beforeEach((function(e,n,r){"/login"!==e.fullPath&&0===t.getters.getSessionKey.length?r({path:"/login",replace:!0}):e.params.classid&&!t.getters.getClassById(e.params.classid)?r({path:"/",replace:!0}):r({path:e,replace:!0})})),n},Le=function(){var e="function"===typeof Ne?Ne({Vue:_["a"]}):Ne,t="function"===typeof Te?Te({Vue:_["a"],store:e}):Te;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(G)}};return{app:n,store:e,router:t}},Ge=n("a925"),Ke={username:"Username",password:"Password",create_account:"Create Account",logout:"Log out",signin:"Sign in",class_name:"Class name",current_grade:"Current Grade",lowest_possible_grade:"Lowest Possible Grade",highest_possible_grade:"Highest Possible Grade",classes:"Classes",set_grade_properties:"Set grade properties",set_category_properties:"Set category properties",category:"Category",assignment_name:"Assignment Name",category_name:"Category Name",category_weight:"Category Weight",num_dropped_grades:"Number of Dropped Grades",max_percent:"Max Category Weight",max_points:"Max Points",points_earned:"Points Earned",possible_extra_credit:"Possible Extra Credit",toggle_build_up:"Toggle Build Up",toggle_top_worth_more:"Toggle Top Worth More",top_worth_more_num:"Top Worth More #",top_worth_value_percentage:"Top Worth Value %",bot_worth_value_percentage:"Bot Worth Value %",no_categories_entered:"It doesn't look like you have any categories added :(",no_classes_entered:"It doesn't look like you have any classes added :(",why_not_add_one:"Why not add one?",assignment:"Assignment",points:"Points",display_name:"Display Name",need_an_account:"Need an account?",already_have_account:"I already have an account",add_new_class:"Add a new class",invalid_submission:"Invalid Submission",try_different_username:"Try a different username ┗(•̀へ •́ ╮ )",invalid_credentials:"(」°ロ°)」 Invalid Credentials ",edit_class_details:"Edit Class Details"},Ae={username:"用户名",password:"密码",create_account:"注册",logout:"退出",signin:"登录",class_name:"课程名称",current_grade:"当前成绩",lowest_possible_grade:"理论最低得分",highest_possible_grade:"理论最高得分",classes:"课程",set_grade_properties:"添加成绩",set_category_properties:"新建类别",category:"类别",assignment_name:"项目名称",category_name:"类别名称",category_weight:"类别占比",num_dropped_grades:"可以舍弃的最低分数量",max_percent:"类别最大占比",max_points:"总分",points_earned:"得分",possible_extra_credit:"额外加分",toggle_build_up:"累计模式",toggle_top_worth_more:"高分增值模式",top_worth_more_num:"高分增值数量 #",top_worth_value_percentage:"高分占比 %",bot_worth_value_percentage:"其余占比 %",no_categories_entered:"看上去你还没有添加任何类别 :(",no_classes_entered:"看上去你还没有添加任何课程 :(",why_not_add_one:"为什么不添加一个呢?",assignment:"项目",points:"得分",display_name:"呢称",need_an_account:"需要一个账号？",already_have_account:"我已有账号",add_new_class:"添加一门新的课程",invalid_submission:"提交错误",try_different_username:"用户名已被使用 ┗(•̀へ •́ ╮ )",invalid_credentials:"(」°ロ°)」 用户名或密码错误",edit_class_details:"编辑课程信息"},Ee={"en-us":Ke,"zh-cn":Ae};_["a"].use(Ge["a"]);var Ue=new Ge["a"]({locale:v["a"].lang.getLocale(),fallbackLocale:"en-us",messages:Ee}),We=function(e){var t=e.app;t.i18n=Ue},Ve=Le(),Be=Ve.app,Me=Ve.store,$e=Ve.router;function qe(){return Je.apply(this,arguments)}function Je(){return Je=g()(p.a.mark((function e(){var t,n,r,a,s;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=!0,n=function(e){t=!1,window.location.href=e},r=window.location.href.replace(window.location.origin,""),a=[We,J["b"]],s=0;case 5:if(!(!0===t&&s<a.length)){e.next=23;break}if("function"===typeof a[s]){e.next=8;break}return e.abrupt("continue",20);case 8:return e.prev=8,e.next=11,a[s]({app:Be,router:$e,store:Me,Vue:_["a"],ssrContext:null,redirect:n,urlPath:r});case 11:e.next=20;break;case 13:if(e.prev=13,e.t0=e["catch"](8),!e.t0||!e.t0.url){e.next=18;break}return window.location.href=e.t0.url,e.abrupt("return");case 18:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 20:s++,e.next=5;break;case 23:if(!1!==t){e.next=25;break}return e.abrupt("return");case 25:new _["a"](Be);case 26:case"end":return e.stop()}}),e,null,[[8,13]])}))),Je.apply(this,arguments)}qe()},"758b":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("967e"),a=n.n(r),s=(n("96cf"),n("fa84")),o=n.n(s),i=n("bc3a"),c=n.n(i),u=c.a.create({baseURL:"https://us-east4-your-final-grade.cloudfunctions.net/api-service"});t["b"]=function(){var e=o()(a.a.mark((function e(t){var n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=u;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},e3d2:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o}));n("a481"),n("6b54"),n("06db");function r(){var e=((new Date).getTime()/1e3|0).toString(16);return e+"xxxxxxxxxxxxxxxx".replace(/[x]/g,(function(){return(16*Math.random()|0).toString(16)})).toLowerCase()}function a(){return{id:r(),name:"",categories:{},grades:{}}}function s(){return{name:"",weight:0,buildUp:!0,maxPoints:0,droppedGrades:0,maxPercent:0,topWorthMore:0,topWorthValue:0,botWorthValue:0}}function o(){return{category:"",name:"",maxPoints:0,pointsEarned:0,possibleExtraCredit:0}}}},[[0,"runtime","vendor"]]]);