(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getSessionKey",(function(){return W})),n.d(a,"getDisplayName",(function(){return V})),n.d(a,"isProbablySignedIn",(function(){return M})),n.d(a,"getLocale",(function(){return B}));var r={};n.r(r),n.d(r,"setSessionKey",(function(){return $})),n.d(r,"setDisplayName",(function(){return q})),n.d(r,"setLocale",(function(){return F}));var s={};n.r(s),n.d(s,"saveUserStore",(function(){return Y})),n.d(s,"logout",(function(){return H})),n.d(s,"login",(function(){return R})),n.d(s,"setDisplayName",(function(){return z})),n.d(s,"setSessionDoc",(function(){return Q})),n.d(s,"setLocale",(function(){return X}));var o={};n.r(o),n.d(o,"getClassIds",(function(){return re})),n.d(o,"getClassById",(function(){return se})),n.d(o,"getCategoryByClassAndCategoryId",(function(){return oe})),n.d(o,"getGradeByClassAndGradeId",(function(){return ie}));var i={};n.r(i),n.d(i,"setClass",(function(){return le})),n.d(i,"setCategory",(function(){return de})),n.d(i,"setGrade",(function(){return fe})),n.d(i,"setClassName",(function(){return pe})),n.d(i,"deleteGrade",(function(){return _e})),n.d(i,"deleteCategory",(function(){return ge}));var c={};n.r(c),n.d(c,"saveDataStore",(function(){return me})),n.d(c,"addClass",(function(){return ye})),n.d(c,"addCategory",(function(){return he})),n.d(c,"modifyCategory",(function(){return ve})),n.d(c,"setGrade",(function(){return be})),n.d(c,"setClassName",(function(){return we})),n.d(c,"deleteGrade",(function(){return xe})),n.d(c,"deleteCategory",(function(){return Ce}));var u={};n.r(u),n.d(u,"pageTitle",(function(){return De}));var l={};n.r(l),n.d(l,"setPageTitle",(function(){return Ne}));var d={};n.r(d),n.d(d,"saveAppStore",(function(){return ke})),n.d(d,"setPageTitle",(function(){return Ie}));var f=n("967e"),p=n.n(f),_=(n("a481"),n("96cf"),n("fa84")),g=n.n(_),m=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),y=n("b05d"),h=n("436b"),v=n("18d6"),b=n("2a19"),w=n("696d");m["a"].use(y["a"],{config:{},plugins:{Dialog:h["a"],LocalStorage:v["a"],Notify:b["a"],AddressbarColor:w["a"]}});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},C=[],P=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),O=n.n(P),S=n("2f62"),j=n("1f91"),D=n("bf69");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={name:"App",methods:k({},Object(S["b"])(["saveUserStore","saveDataStore","saveAppStore","setLocale"])),mounted:function(){var e=this,t=this.$store.state.user.locale;this.$i18n.locale=t,this.$q.lang.set("en-us"===t?j["a"]:D["a"]),this.$q.addressbarColor.set(),window.addEventListener("beforeunload",(function(){e.saveUserStore(),e.saveDataStore(),e.saveAppStore()}))}},T=I,G=n("2877"),A=Object(G["a"])(T,x,C,!1,null,null,null),E=A.exports;n("f751");function L(){return{displayName:"",sessionKey:"",locale:"en-us"}}var K={};v["a"].has("vuex-store-user")&&(K=v["a"].getItem("vuex-store-user"));var U=Object.assign(L(),K);function W(e){return e.sessionKey}function V(e){return e.displayName}function M(e){return e.sessionKey.length>0}function B(e){return e.locale}function $(e,t){m["a"].set(e,"sessionKey",t)}function q(e,t){m["a"].set(e,"displayName",t)}function F(e,t){m["a"].set(e,"locale",t)}n("551c");var J=n("758b");function Y(e){var t=e.state;v["a"].set("vuex-store-user",t)}function H(e){var t=e.commit;return new Promise((function(e,n){localStorage.clear(),t("setSessionKey",""),t("setDisplayName",""),e()}))}function R(e,t){e.commit,t.username,t.password;return new Promise((function(e,t){e()}))}function z(e,t){var n=e.commit,a=e.dispatch,r=t.displayName;localStorage.setItem("displayName",r),n("setDisplayName",r),a("saveUserStore")}function Q(e,t){var n=e.commit,a=e.dispatch,r=t.sessionKey;localStorage.setItem("sessionKey",r),n("setSessionKey",r),a("saveUserStore")}function X(e,t){var n=e.commit,a=e.dispatch,r=t.locale;n("setLocale",r),a("saveUserStore")}var Z={namespaced:!1,getters:a,mutations:r,actions:s,state:U};function ee(){return{classes:{}}}var te={};v["a"].has("vuex-store-data")&&(te=v["a"].getItem("vuex-store-data"));var ne=Object.assign(ee(),te),ae=n("e3d2");function re(e){return Object.keys(e.classes)}function se(e){return function(t){return e.classes[t]}}function oe(e){return function(t,n){return Object.assign({},Object(ae["a"])(),e.classes[t].categories[n])}}function ie(e){return function(t,n){return Object.assign({},Object(ae["c"])(),e.classes[t].grades[n])}}n("7f7f");var ce=n("f3e3"),ue=n.n(ce);function le(e,t){var n=ue()(t,2),a=n[0].id,r=n[1];m["a"].set(e.classes,a,r)}function de(e,t){var n=ue()(t,3),a=n[0].classid,r=n[1].id,s=n[2];a in e.classes&&m["a"].set(e.classes[a].categories,r,s)}function fe(e,t){var n=ue()(t,3),a=n[0].classid,r=n[1].id,s=n[2];a in e.classes&&m["a"].set(e.classes[a].grades,r,s)}function pe(e,t){var n=ue()(t,2),a=n[0].classid,r=n[1].name;a in e.classes&&m["a"].set(e.classes[a],"name",r)}function _e(e,t){var n=ue()(t,2),a=n[0].classid,r=n[1].id;a in e.classes&&m["a"].delete(e.classes[a].grades,r)}function ge(e,t){var n=ue()(t,2),a=n[0].classid,r=n[1].id;a in e.classes&&m["a"].delete(e.classes[a].categories,r)}n("8615");function me(e){var t=e.state;v["a"].set("vuex-store-data",t)}function ye(e,t){var n=e.commit,a=e.state,r=t.name;return new Promise((function(e,t){if(Object.values(a.classes).filter((function(e){return e.name===r})).length>0)t("You may not have a class with the same name");else{var s=Object(ae["b"])();s.name=r,n("setClass",[s,s]),e()}}))}function he(e,t){var n=e.commit,a=ue()(t,2),r=a[0].classid,s=a[1];return new Promise((function(e,t){"id"in s||(s.id=Object(ae["d"])()),n("setCategory",[{classid:r},s,s]),e(s.id)}))}function ve(e,t){var n=e.commit,a=ue()(t,2),r=a[0],s=r.classid,o=r.id,i=a[1];return new Promise((function(e,t){n("setCategory",[{classid:s},{id:o},i]),e()}))}function be(e,t){var n=e.commit,a=ue()(t,2),r=a[0],s=r.classid,o=r.id,i=a[1];return new Promise((function(e,t){n("setGrade",[{classid:s},{id:o},i]),e()}))}function we(e,t){var n=e.commit,a=ue()(t,2),r=a[0].classid,s=a[1].name;return new Promise((function(e,t){n("setClassName",[{classid:r},{name:s}]),e()}))}function xe(e,t){var n=e.commit,a=ue()(t,2),r=a[0].classid,s=a[1].id;return new Promise((function(e,t){n("deleteGrade",[{classid:r},{id:s}])}))}function Ce(e,t){var n=e.state,a=e.commit,r=ue()(t,2),s=r[0].classid,o=r[1].id;return new Promise((function(e,t){s in n.classes?(Object.values(n.classes[s].grades).filter((function(e){return e.categoryId===o})).forEach((function(e){a("deleteGrade",[{classid:s},{id:e.id}])})),a("deleteCategory",[{classid:s},{id:o}]),e()):t()}))}var Pe={namespaced:!1,getters:o,mutations:i,actions:c,state:ne};function Oe(){return{pageTitle:"Your Final Grade"}}var Se={};v["a"].has("vuex-store-app")&&(Se=v["a"].getItem("vuex-store-app"));var je=Object.assign(Oe(),Se);function De(e){return e.pageTitle}function Ne(e,t){var n=t.name;e.pageTitle=n}function ke(e){var t=e.state;v["a"].set("vuex-store-app",t)}function Ie(e,t){var n=e.commit,a=t.name;return new Promise((function(e,t){n("setPageTitle",{name:a}),e()}))}var Te={namespaced:!1,getters:u,mutations:l,actions:d,state:je};m["a"].use(S["a"]);var Ge=function(){var e=new S["a"].Store({modules:{user:Z,data:Pe,app:Te},strict:!1});return e},Ae=n("8c4f"),Ee=[{path:"/",component:function(){return Promise.all([n.e("7bc175d4"),n.e("2d22c0ff")]).then(n.bind(null,"f241"))},children:[{path:"login",component:function(){return Promise.all([n.e("7bc175d4"),n.e("2d0a314a")]).then(n.bind(null,"013f"))}},{path:"class/:classid",component:function(){return Promise.all([n.e("7bc175d4"),n.e("01f0dd1b")]).then(n.bind(null,"24b4"))},props:!0,name:"ClassView"},{path:"",component:function(){return Promise.all([n.e("7bc175d4"),n.e("3af12c81")]).then(n.bind(null,"f75a"))},name:"Classes"}]}];Ee.push({path:"*",component:function(){return Promise.all([n.e("7bc175d4"),n.e("4b47640d")]).then(n.bind(null,"e51e"))}});var Le=Ee;m["a"].use(Ae["a"]);var Ke=function(e){var t=e.store,n=new Ae["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Le,mode:"hash",base:""});return n.beforeEach((function(e,n,a){"/login"!==e.fullPath&&0===t.getters.getSessionKey.length?a({path:"/login",replace:!0}):e.params.classid&&!t.getters.getClassById(e.params.classid)?a({path:"/",replace:!0}):a({path:e,replace:!0})})),n},Ue=function(){var e="function"===typeof Ge?Ge({Vue:m["a"]}):Ge,t="function"===typeof Ke?Ke({Vue:m["a"],store:e}):Ke;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(E)}};return{app:n,store:e,router:t}},We=n("a925"),Ve={username:"Username",password:"Password",create_account:"Create Account",logout:"Log out",signin:"Sign in",class_name:"Class name",current_grade:"Current Grade",lowest_possible_grade:"Lowest Possible Grade",highest_possible_grade:"Highest Possible Grade",classes:"Classes",set_grade_properties:"Set grade properties",set_category_properties:"Set category properties",category:"Category",assignment_name:"Assignment Name",category_name:"Category Name",category_weight:"Category Weight",num_dropped_grades:"Number of Dropped Grades",max_percent:"Max Category Weight",max_points:"Max Points",points_earned:"Points Earned",possible_extra_credit:"Possible Extra Credit",toggle_build_up:"Toggle Build Up",toggle_top_worth_more:"Toggle Top Worth More",top_worth_more_num:"Top Worth More #",top_worth_value_percentage:"Top Worth Value %",bot_worth_value_percentage:"Bot Worth Value %",no_categories_entered:"It doesn't look like you have any categories added :(",no_classes_entered:"It doesn't look like you have any classes added :(",why_not_add_one:"Why not add one?",assignment:"Assignment",points:"Points",display_name:"Display Name",need_an_account:"Need an account?",already_have_account:"I already have an account",add_new_class:"Add a new class",invalid_submission:"Invalid Submission",try_different_username:"Try a different username ┗(•̀へ •́ ╮ )",invalid_credentials:"(」°ロ°)」 Invalid Credentials ",edit_class_details:"Edit Class Details",your_final_grade:"Your Final Grade",a_tool_built_with_love_by:"A tool built with love by",our_goal:"Our goal is to create the 🔥🔥 ultimate 🔥🔥 final 💪 grade 💯 calculator 🧮 for students🎉👩‍🎓",feature_roadmap:"Feature Roadmap",offline_only_mode:"Offline Only Mode",sync_online:"Sync Online",dark_mode:"Dark Mode",cta:"Found a bug? Have feature suggestions? Do we not support your grading system? Email Jyan at yfg@jcharante.com",not_yet_graded:"Not yet graded",are_you_sure:"Are you sure?",this_will_permanently_delete_the_grade:"This will permanently delete the grade",this_will_permanently_delete_the_category:"This will permanently delete the category AND associated grades",this_will_permanently_delete_the_class:"Are you sure you want to delete this class? This will delete all the entered categories and grades.",enable_online_sync:"Enable Online Sync"},Me={username:"用户名",password:"密码",create_account:"注册",logout:"退出",signin:"登录",class_name:"课程名称",current_grade:"当前成绩",lowest_possible_grade:"理论最低得分",highest_possible_grade:"理论最高得分",classes:"课程",set_grade_properties:"添加成绩",set_category_properties:"新建类别",category:"类别",assignment_name:"项目名称",category_name:"类别名称",category_weight:"类别占比",num_dropped_grades:"可以舍弃的最低分数量",max_percent:"类别最大占比",max_points:"总分",points_earned:"得分",possible_extra_credit:"额外加分",toggle_build_up:"累计模式",toggle_top_worth_more:"高分增值模式",top_worth_more_num:"高分增值数量 #",top_worth_value_percentage:"高分占比 %",bot_worth_value_percentage:"其余占比 %",no_categories_entered:"看上去你还没有添加任何类别 :(",no_classes_entered:"看上去你还没有添加任何课程 :(",why_not_add_one:"为什么不添加一个呢?",assignment:"项目",points:"得分",display_name:"呢称",need_an_account:"需要一个账号？",already_have_account:"我已有账号",add_new_class:"添加一门新的课程",invalid_submission:"提交错误",try_different_username:"用户名已被使用 ┗(•̀へ •́ ╮ )",invalid_credentials:"(」°ロ°)」 用户名或密码错误",edit_class_details:"编辑课程信息",your_final_grade:"你的最终成绩",a_tool_built_with_love_by:"一个用爱创造的工具",our_goal:"我们的目标是给学生👩‍🎓创建一个🔥究极🔥最终💪成绩💯 计算机🧮",feature_roadmap:"额外功能",offline_only_mode:"离线模式",sync_online:"在线同步",dark_mode:"夜间模式",cta:"找到了bug？想要什么有趣的功能？还是我们的网站不支持你学校的打分系统？请给张坚发送邮件：yfg@jcharante.com",not_yet_graded:"尚未批改",are_you_sure:"你确定吗?",this_will_permanently_delete_the_grade:"这将永久删除这个成绩",this_will_permanently_delete_the_category:"这将永久删除这个类别和它附属的成绩",this_will_permanently_delete_the_class:"你确定要删除这门课程吗？这将会删除你所有创建的类别以及成绩。",enable_online_sync:"打开在线同步"},Be={"en-us":Ve,"zh-cn":Me};m["a"].use(We["a"]);var $e=new We["a"]({locale:y["a"].lang.getLocale(),fallbackLocale:"en-us",messages:Be}),qe=function(e){var t=e.app;t.i18n=$e},Fe=function(){w["a"].set("#a2e3fa")},Je=Ue(),Ye=Je.app,He=Je.store,Re=Je.router;function ze(){return Qe.apply(this,arguments)}function Qe(){return Qe=g()(p.a.mark((function e(){var t,n,a,r,s;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=!0,n=function(e){t=!1,window.location.href=e},a=window.location.href.replace(window.location.origin,""),r=[qe,J["b"],Fe],s=0;case 5:if(!(!0===t&&s<r.length)){e.next=23;break}if("function"===typeof r[s]){e.next=8;break}return e.abrupt("continue",20);case 8:return e.prev=8,e.next=11,r[s]({app:Ye,router:Re,store:He,Vue:m["a"],ssrContext:null,redirect:n,urlPath:a});case 11:e.next=20;break;case 13:if(e.prev=13,e.t0=e["catch"](8),!e.t0||!e.t0.url){e.next=18;break}return window.location.href=e.t0.url,e.abrupt("return");case 18:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 20:s++,e.next=5;break;case 23:if(!1!==t){e.next=25;break}return e.abrupt("return");case 25:new m["a"](Ye);case 26:case"end":return e.stop()}}),e,null,[[8,13]])}))),Qe.apply(this,arguments)}ze()},"758b":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("967e"),r=n.n(a),s=(n("96cf"),n("fa84")),o=n.n(s),i=n("bc3a"),c=n.n(i),u=c.a.create({baseURL:"https://us-east4-your-final-grade.cloudfunctions.net/api-service"});t["b"]=function(){var e=o()(r.a.mark((function e(t){var n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=u;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},e3d2:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o}));n("a481"),n("6b54"),n("06db");function a(){var e=((new Date).getTime()/1e3|0).toString(16);return e+"xxxxxxxxxxxxxxxx".replace(/[x]/g,(function(){return(16*Math.random()|0).toString(16)})).toLowerCase()}function r(){return{id:a(),name:"",categories:{},grades:{}}}function s(){return{name:"",weight:0,buildUp:!0,maxPoints:0,droppedGrades:0,maxPercent:0,topWorthMore:0,topWorthValue:0,botWorthValue:0}}function o(){return{category:"",name:"",maxPoints:0,pointsEarned:0,possibleExtraCredit:0}}}},[[0,"runtime","vendor"]]]);