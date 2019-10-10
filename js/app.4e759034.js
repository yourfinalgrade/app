(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getSessionKey",(function(){return L})),n.d(a,"getDisplayName",(function(){return W})),n.d(a,"isProbablySignedIn",(function(){return V})),n.d(a,"getLocale",(function(){return B})),n.d(a,"getDarkModeEnabled",(function(){return F})),n.d(a,"getEnableOnlineSync",(function(){return $}));var r={};n.r(r),n.d(r,"setSessionKey",(function(){return q})),n.d(r,"setDisplayName",(function(){return R})),n.d(r,"setLocale",(function(){return Y})),n.d(r,"setDarkModeEnabled",(function(){return J})),n.d(r,"setEnableOnlineSync",(function(){return H})),n.d(r,"recoverUserFromAnotherStore",(function(){return z}));var o={};n.r(o),n.d(o,"saveUserStore",(function(){return X})),n.d(o,"userLogout",(function(){return Z})),n.d(o,"login",(function(){return ee})),n.d(o,"setDisplayName",(function(){return te})),n.d(o,"setSessionDoc",(function(){return ne})),n.d(o,"setLocale",(function(){return ae})),n.d(o,"setDarkModeEnabled",(function(){return re})),n.d(o,"setEnableOnlineSync",(function(){return oe}));var s={};n.r(s),n.d(s,"getClassIds",(function(){return de})),n.d(s,"getClassById",(function(){return pe})),n.d(s,"getCategoryByClassAndCategoryId",(function(){return _e})),n.d(s,"getGradeByClassAndGradeId",(function(){return fe}));var i={};n.r(i),n.d(i,"setClass",(function(){return he})),n.d(i,"setCategory",(function(){return ye})),n.d(i,"setGrade",(function(){return be})),n.d(i,"setClassName",(function(){return ve})),n.d(i,"deleteGrade",(function(){return we})),n.d(i,"deleteCategory",(function(){return xe})),n.d(i,"wipeStore",(function(){return Se})),n.d(i,"recoverDataFromAnotherStore",(function(){return Oe}));var c={};n.r(c),n.d(c,"saveDataStore",(function(){return De})),n.d(c,"dataLogout",(function(){return Pe})),n.d(c,"addClass",(function(){return Ce})),n.d(c,"addCategory",(function(){return ke})),n.d(c,"modifyCategory",(function(){return Ee})),n.d(c,"setGrade",(function(){return Te})),n.d(c,"setClassName",(function(){return je})),n.d(c,"deleteGrade",(function(){return Ke})),n.d(c,"deleteCategory",(function(){return Ne}));var u={};n.r(u),n.d(u,"pageTitle",(function(){return Ie}));var l={};n.r(l),n.d(l,"setPageTitle",(function(){return Le}));var d={};n.r(d),n.d(d,"appLogout",(function(){return We})),n.d(d,"saveAppStore",(function(){return Ve})),n.d(d,"setPageTitle",(function(){return Be})),n.d(d,"smartUploadDataStore",(function(){return Fe})),n.d(d,"uploadDataStore",(function(){return $e})),n.d(d,"smartRetrieveDataStore",(function(){return qe})),n.d(d,"retrieveDataStore",(function(){return Re}));var p=n("967e"),_=n.n(p),f=(n("a481"),n("96cf"),n("fa84")),g=n.n(f),m=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),h=n("b05d"),y=n("436b"),b=n("18d6"),v=n("2a19"),w=n("696d");m["a"].use(h["a"],{config:{},plugins:{Dialog:y["a"],LocalStorage:b["a"],Notify:v["a"],AddressbarColor:w["a"]}});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"bg-grey-10":e.getDarkModeEnabled},attrs:{id:"q-app"}},[n("router-view")],1)},S=[],O=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),D=n.n(O),P=n("2f62"),C=n("1f91"),k=n("bf69");function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){D()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={name:"App",methods:T({},Object(P["b"])(["saveUserStore","saveDataStore","saveAppStore","setLocale","smartRetrieveDataStore"])),computed:T({},Object(P["c"])(["getDarkModeEnabled"])),mounted:function(){var e=this,t=this.$store.state.user.locale;this.$i18n.locale=t,this.$q.lang.set("en-us"===t?C["a"]:k["a"]),this.$q.addressbarColor.set(),this.smartRetrieveDataStore(),window.addEventListener("beforeunload",(function(){e.saveUserStore(),e.saveDataStore(),e.saveAppStore()}))}},K=j,N=n("2877"),U=Object(N["a"])(K,x,S,!1,null,null,null),A=U.exports;n("f751");function M(){return{displayName:"",sessionKey:"",locale:"en-us",darkModeEnabled:!1,enableOnlineSync:!1}}var G={};b["a"].has("vuex-store-user")&&(G=b["a"].getItem("vuex-store-user"));var I=Object.assign(M(),G);function L(e){return e.sessionKey}function W(e){return e.displayName}function V(e){return e.sessionKey.length>0}function B(e){return e.locale}function F(e){return e.darkModeEnabled}function $(e){return e.enableOnlineSync}function q(e,t){m["a"].set(e,"sessionKey",t)}function R(e,t){m["a"].set(e,"displayName",t)}function Y(e,t){m["a"].set(e,"locale",t)}function J(e,t){m["a"].set(e,"darkModeEnabled",t)}function H(e,t){m["a"].set(e,"enableOnlineSync",t)}function z(e,t){m["a"].set(e,"darkModeEnabled",t.darkModeEnabled),m["a"].set(e,"enableOnlineSync",t.enableOnlineSync),m["a"].set(e,"locale",t.locale)}n("551c");var Q=n("758b");function X(e){var t=e.state;b["a"].set("vuex-store-user",t)}function Z(e){var t=e.commit,n=e.dispatch;return new Promise((function(e,a){t("setSessionKey",""),t("setDisplayName",""),n("saveUserStore"),e()}))}function ee(e,t){e.commit,t.username,t.password;return new Promise((function(e,t){e()}))}function te(e,t){var n=e.commit,a=e.dispatch,r=t.displayName;localStorage.setItem("displayName",r),n("setDisplayName",r),a("saveUserStore")}function ne(e,t){var n=e.commit,a=e.dispatch,r=t.sessionKey;localStorage.setItem("sessionKey",r),n("setSessionKey",r),a("saveUserStore")}function ae(e,t){var n=e.commit,a=e.dispatch,r=t.locale;n("setLocale",r),a("saveUserStore"),a("smartUploadDataStore")}function re(e,t){var n=e.commit,a=e.dispatch,r=t.enabled;n("setDarkModeEnabled",r),a("smartUploadDataStore")}function oe(e,t){var n=e.commit,a=t.enabled;n("setEnableOnlineSync",a)}var se={namespaced:!1,getters:a,mutations:r,actions:o,state:I};function ie(){return{classes:{}}}var ce={};b["a"].has("vuex-store-data")&&(ce=b["a"].getItem("vuex-store-data"));var ue=Object.assign(ie(),ce),le=n("e3d2");function de(e){return Object.keys(e.classes)}function pe(e){return function(t){return e.classes[t]}}function _e(e){return function(t,n){return Object.assign({},Object(le["a"])(),e.classes[t].categories[n])}}function fe(e){return function(t,n){return Object.assign({},Object(le["c"])(),e.classes[t].grades[n])}}n("7f7f");var ge=n("f3e3"),me=n.n(ge);function he(e,t){var n=me()(t,2),a=n[0].id,r=n[1];m["a"].set(e.classes,a,r)}function ye(e,t){var n=me()(t,3),a=n[0].classid,r=n[1].id,o=n[2];a in e.classes&&m["a"].set(e.classes[a].categories,r,o)}function be(e,t){var n=me()(t,3),a=n[0].classid,r=n[1].id,o=n[2];a in e.classes&&m["a"].set(e.classes[a].grades,r,o)}function ve(e,t){var n=me()(t,2),a=n[0].classid,r=n[1].name;a in e.classes&&m["a"].set(e.classes[a],"name",r)}function we(e,t){var n=me()(t,2),a=n[0].classid,r=n[1].id;a in e.classes&&m["a"].delete(e.classes[a].grades,r)}function xe(e,t){var n=me()(t,2),a=n[0].classid,r=n[1].id;a in e.classes&&m["a"].delete(e.classes[a].categories,r)}function Se(e){m["a"].set(e,"classes",{})}function Oe(e,t){m["a"].set(e,"classes",t.classes)}n("8615");function De(e){var t=e.state;b["a"].set("vuex-store-data",t)}function Pe(e){var t=e.commit,n=e.dispatch;return new Promise((function(e,a){t("wipeStore"),n("saveDataStore"),e()}))}function Ce(e,t){var n=e.commit,a=e.state,r=t.name;return new Promise((function(e,t){if(Object.values(a.classes).filter((function(e){return e.name===r})).length>0)t("You may not have a class with the same name");else{var o=Object(le["b"])();o.name=r,n("setClass",[o,o]),e()}}))}function ke(e,t){var n=e.commit,a=me()(t,2),r=a[0].classid,o=a[1];return new Promise((function(e,t){"id"in o||(o.id=Object(le["d"])()),n("setCategory",[{classid:r},o,o]),e(o.id)}))}function Ee(e,t){var n=e.commit,a=e.dispatch,r=(e.getters,me()(t,2)),o=r[0],s=o.classid,i=o.id,c=r[1];return new Promise((function(e,t){n("setCategory",[{classid:s},{id:i},c]),a("smartUploadDataStore"),e()}))}function Te(e,t){var n=e.commit,a=e.dispatch,r=me()(t,2),o=r[0],s=o.classid,i=o.id,c=r[1];return new Promise((function(e,t){n("setGrade",[{classid:s},{id:i},c]),a("smartUploadDataStore"),e()}))}function je(e,t){var n=e.commit,a=e.dispatch,r=me()(t,2),o=r[0].classid,s=r[1].name;return new Promise((function(e,t){n("setClassName",[{classid:o},{name:s}]),a("smartUploadDataStore"),e()}))}function Ke(e,t){var n=e.commit,a=e.dispatch,r=me()(t,2),o=r[0].classid,s=r[1].id;return new Promise((function(e,t){n("deleteGrade",[{classid:o},{id:s}]),a("smartUploadDataStore")}))}function Ne(e,t){var n=e.state,a=e.commit,r=e.dispatch,o=me()(t,2),s=o[0].classid,i=o[1].id;return new Promise((function(e,t){s in n.classes?(Object.values(n.classes[s].grades).filter((function(e){return e.categoryId===i})).forEach((function(e){a("deleteGrade",[{classid:s},{id:e.id}])})),a("deleteCategory",[{classid:s},{id:i}]),r("smartUploadDataStore"),e()):t()}))}var Ue={namespaced:!1,getters:s,mutations:i,actions:c,state:ue};function Ae(){return{pageTitle:"Your Final Grade"}}var Me={};b["a"].has("vuex-store-app")&&(Me=b["a"].getItem("vuex-store-app"));var Ge=Object.assign(Ae(),Me);function Ie(e){return e.pageTitle}function Le(e,t){var n=t.name;e.pageTitle=n}function We(e){e.commit;var t=e.dispatch;return new Promise((function(e,n){t("saveAppStore"),e()}))}function Ve(e){var t=e.state;b["a"].set("vuex-store-app",t)}function Be(e,t){var n=e.commit,a=t.name;return new Promise((function(e,t){n("setPageTitle",{name:a}),e()}))}function Fe(e){var t=e.dispatch,n=e.getters;return new Promise((function(e,a){0!==n.getSessionKey.length&&"unregistered"!==n.getSessionKey&&n.getEnableOnlineSync?(t("uploadDataStore"),e()):e()}))}function $e(e){var t=e.rootState,n=e.getters;return new Promise((function(e,a){0!==n.getSessionKey.length&&"unregistered"!==n.getSessionKey?Q["a"].post("/",{sessionKey:n.getSessionKey,requestType:"updateStore",dataStore:{app:t.app,data:t.data,user:t.user}}).then(e()).catch((function(e){a(e)})):a()}))}function qe(e){var t=e.dispatch,n=e.getters;return new Promise((function(e,a){0!==n.getSessionKey.length&&"unregistered"!==n.getSessionKey&&n.getEnableOnlineSync?(t("retrieveDataStore"),e()):e()}))}function Re(e){var t=e.commit,n=(e.dispatch,e.getters);return new Promise((function(e,a){0!==n.getSessionKey.length&&"unregistered"!==n.getSessionKey?Q["a"].post("/",{sessionKey:n.getSessionKey,requestType:"getStore"}).then((function(n){var a=n.data.dataStore,r=a.data,o=(a.app,a.user);t("recoverDataFromAnotherStore",r),t("recoverUserFromAnotherStore",o),e()})).catch((function(e){return a(e)})):a()}))}var Ye={namespaced:!1,getters:u,mutations:l,actions:d,state:Ge};m["a"].use(P["a"]);var Je=function(){var e=new P["a"].Store({modules:{user:se,data:Ue,app:Ye},strict:!1});return e},He=n("8c4f"),ze=[{path:"/",component:function(){return Promise.all([n.e("7bc175d4"),n.e("2d22c0ff")]).then(n.bind(null,"f241"))},children:[{path:"login",component:function(){return Promise.all([n.e("7bc175d4"),n.e("2d0a314a")]).then(n.bind(null,"013f"))}},{path:"class/:classid",component:function(){return Promise.all([n.e("7bc175d4"),n.e("dc564be6")]).then(n.bind(null,"24b4"))},props:!0,name:"ClassView"},{path:"",component:function(){return Promise.all([n.e("7bc175d4"),n.e("29051c5c")]).then(n.bind(null,"f75a"))},name:"Classes"}]}];ze.push({path:"*",component:function(){return Promise.all([n.e("7bc175d4"),n.e("4b47640d")]).then(n.bind(null,"e51e"))}});var Qe=ze;m["a"].use(He["a"]);var Xe=function(e){var t=e.store,n=new He["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Qe,mode:"hash",base:""});return n.beforeEach((function(e,n,a){"/login"!==e.fullPath&&0===t.getters.getSessionKey.length?a({path:"/login",replace:!0}):e.params.classid&&!t.getters.getClassById(e.params.classid)?a({path:"/",replace:!0}):a({path:e,replace:!0})})),n},Ze=function(){var e="function"===typeof Je?Je({Vue:m["a"]}):Je,t="function"===typeof Xe?Xe({Vue:m["a"],store:e}):Xe;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(A)}};return{app:n,store:e,router:t}},et=n("a925"),tt={username:"Username",password:"Password",create_account:"Create Account",logout:"Log out",signin:"Sign in",class_name:"Class name",current_grade:"Current Grade",lowest_possible_grade:"Lowest Possible Grade",highest_possible_grade:"Highest Possible Grade",classes:"Classes",set_grade_properties:"Set grade properties",set_category_properties:"Set category properties",category:"Category",assignment_name:"Assignment Name",category_name:"Category Name",category_weight:"Category Weight",num_dropped_grades:"Number of Dropped Grades",max_percent:"Max Category Weight",max_points:"Max Points",points_earned:"Points Earned",possible_extra_credit:"Possible Extra Credit",toggle_build_up:"Toggle Build Up",toggle_top_worth_more:"Toggle Top Worth More",top_worth_more_num:"Top Worth More #",top_worth_value_percentage:"Top Worth Value %",bot_worth_value_percentage:"Bot Worth Value %",no_categories_entered:"It doesn't look like you have any categories added :(",no_classes_entered:"It doesn't look like you have any classes added :(",why_not_add_one:"Why not add one?",assignment:"Assignment",points:"Points",display_name:"Display Name",need_an_account:"Need an account?",already_have_account:"I already have an account",add_new_class:"Add a new class",invalid_submission:"Invalid Submission",try_different_username:"Try a different username ┗(•̀へ •́ ╮ )",invalid_credentials:"(」°ロ°)」 Invalid Credentials ",edit_class_details:"Edit Class Details",your_final_grade:"Your Final Grade",a_tool_built_with_love_by:"A tool built with love by",our_goal:"Our goal is to create the 🔥🔥 ultimate 🔥🔥 final 💪 grade 💯 calculator 🧮 for students🎉👩‍🎓",feature_roadmap:"Feature Roadmap",offline_only_mode:"Offline Only Mode",sync_online:"Sync Online",dark_mode:"Dark Mode",cta:"Found a bug? Have feature suggestions? Do we not support your grading system? Email Jyan at yfg@jcharante.com",not_yet_graded:"Not yet graded",are_you_sure:"Are you sure?",this_will_permanently_delete_the_grade:"This will permanently delete the grade",this_will_permanently_delete_the_category:"This will permanently delete the category AND associated grades",this_will_permanently_delete_the_class:"Are you sure you want to delete this class? This will delete all the entered categories and grades.",enable_online_sync:"Enable Online Sync",delete:"Delete",edit:"Edit",explanation:"Explanation",explain_lowest_possible_grade_explanation:"This is the grade that you'll receive if you get a 0% on all assignments that are yet to be graded.",explain_current_grade_explanation:"This is your calculated with only assignments that have been graded.",explain_highest_possible_grade_explanation:"This is the grade that you'll receive if you get a 100% on all assignments that are yet to be graded.",back_to_list_of_classes:"Back to list of classes",or_continue_without_account:"Or continue without an account",continue_without_account_notice:"(You will not be able to use Cloud Sync)",explain_max_points:"The maximum amount of points you can get excluding extra credit.",explain_points_earned:"The amount of points you actually got.",explain_category_weight:"The percentage of this category in overall grade",explain_num_dropped:"The number of assignments you can drop in this category",explain_max_percent:"The maximum value of weight. Usually used if extra credit is capped and cannot the weight cannot be exceeded.",explain_top_worth_more:"When assignments with a higher grade are counted differently (usually more) from assignments with lower grades",explain_top_worth_more_num:"Number of assignments that will be counted more",explain_top_worth_value:"Weight in percentage of each top assignment",explain_bot_worth_value:"Weight in percentage of the rest of the assignments",signin_with_google:"Sign in with Google"},nt={username:"用户名",password:"密码",create_account:"注册",logout:"退出",signin:"登录",class_name:"课程名称",current_grade:"当前成绩",lowest_possible_grade:"理论最低得分",highest_possible_grade:"理论最高得分",classes:"课程",set_grade_properties:"添加成绩",set_category_properties:"新建类别",category:"类别",assignment_name:"项目名称",category_name:"类别名称",category_weight:"类别占比",num_dropped_grades:"可以舍弃的最低分数量",max_percent:"类别最大占比",max_points:"总分",points_earned:"得分",possible_extra_credit:"额外加分",toggle_build_up:"累计模式",toggle_top_worth_more:"高分增值模式",top_worth_more_num:"高分增值数量 #",top_worth_value_percentage:"高分占比 %",bot_worth_value_percentage:"其余占比 %",no_categories_entered:"看上去你还没有添加任何类别 :(",no_classes_entered:"看上去你还没有添加任何课程 :(",why_not_add_one:"为什么不添加一个呢?",assignment:"项目",points:"得分",display_name:"呢称",need_an_account:"需要一个账号？",already_have_account:"我已有账号",add_new_class:"添加一门新的课程",invalid_submission:"提交错误",try_different_username:"用户名已被使用 ┗(•̀へ •́ ╮ )",invalid_credentials:"(」°ロ°)」 用户名或密码错误",edit_class_details:"编辑课程信息",your_final_grade:"你的最终成绩",a_tool_built_with_love_by:"一个用爱创造的工具",our_goal:"我们的目标是给学生👩‍🎓创建一个🔥究极🔥最终💪成绩💯 计算机🧮",feature_roadmap:"额外功能",offline_only_mode:"离线模式",sync_online:"在线同步",dark_mode:"夜间模式",cta:"找到了bug？想要什么有趣的功能？还是我们的网站不支持你学校的打分系统？请给张坚发送邮件：yfg@jcharante.com",not_yet_graded:"尚未批改",are_you_sure:"你确定吗?",this_will_permanently_delete_the_grade:"这将永久删除这个成绩",this_will_permanently_delete_the_category:"这将永久删除这个类别和它附属的成绩",this_will_permanently_delete_the_class:"你确定要删除这门课程吗？这将会删除你所有创建的类别以及成绩。",enable_online_sync:"打开在线同步",delete:"删除",edit:"编辑",explanation:"说明",explain_lowest_possible_grade_explanation:"这是假设你在所有未批改的作业中全部获得0%后计算出的成绩。",explain_current_grade_explanation:"这是你的现有成绩，只计算了所有批改过的作业",explain_highest_possible_grade_explanation:"这是假设你在所有未批改的作业中全部获得100%后计算出的成绩。",or_continue_without_account:"以游客身份继续",continue_without_account_notice:"(你将无法使用在线同步功能)",explain_max_points:"你能获得的最高得分，不包括额外加分。",explain_points_earned:"你的实际得分。",explain_category_weight:"该类别在总成绩中的占比",explain_num_dropped:"该类别中可以被舍弃的最低分数量",explain_max_percent:"该类别的最大占比。意味着即便获得了额外得分，总占比也不会超过最大占比。",explain_top_worth_more:"得分高的项目与得分底的项目的得分占比不同。通常情况下得分高的占比高。",explain_top_worth_more_num:"占比高的项目数量",explain_top_worth_value:"每个占比高的项目的占比",explain_bot_worth_value:"每个占比低的项目的占比",back_to_list_of_classes:"回到课程列表",signin_with_google:"用Google账户登陆"},at={"en-us":tt,"zh-cn":nt};m["a"].use(et["a"]);var rt=new et["a"]({locale:h["a"].lang.getLocale(),fallbackLocale:"en-us",messages:at}),ot=function(e){var t=e.app;t.i18n=rt},st=function(){w["a"].set("#a2e3fa")},it=Ze(),ct=it.app,ut=it.store,lt=it.router;function dt(){return pt.apply(this,arguments)}function pt(){return pt=g()(_.a.mark((function e(){var t,n,a,r,o;return _.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=!0,n=function(e){t=!1,window.location.href=e},a=window.location.href.replace(window.location.origin,""),r=[ot,Q["b"],st],o=0;case 5:if(!(!0===t&&o<r.length)){e.next=23;break}if("function"===typeof r[o]){e.next=8;break}return e.abrupt("continue",20);case 8:return e.prev=8,e.next=11,r[o]({app:ct,router:lt,store:ut,Vue:m["a"],ssrContext:null,redirect:n,urlPath:a});case 11:e.next=20;break;case 13:if(e.prev=13,e.t0=e["catch"](8),!e.t0||!e.t0.url){e.next=18;break}return window.location.href=e.t0.url,e.abrupt("return");case 18:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 20:o++,e.next=5;break;case 23:if(!1!==t){e.next=25;break}return e.abrupt("return");case 25:new m["a"](ct);case 26:case"end":return e.stop()}}),e,null,[[8,13]])}))),pt.apply(this,arguments)}dt()},"758b":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("967e"),r=n.n(a),o=(n("96cf"),n("fa84")),s=n.n(o),i=n("bc3a"),c=n.n(i),u=c.a.create({baseURL:"https://us-east4-your-final-grade.cloudfunctions.net/api-service"});t["b"]=function(){var e=s()(r.a.mark((function e(t){var n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=u;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},e3d2:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));n("a481"),n("6b54"),n("06db");function a(){var e=((new Date).getTime()/1e3|0).toString(16);return e+"xxxxxxxxxxxxxxxx".replace(/[x]/g,(function(){return(16*Math.random()|0).toString(16)})).toLowerCase()}function r(){return{id:a(),name:"",categories:{},grades:{}}}function o(){return{name:"",weight:0,buildUp:!0,maxPoints:0,droppedGrades:0,maxPercent:0,topWorthMore:0,topWorthValue:0,botWorthValue:0}}function s(){return{category:"",name:"",maxPoints:0,pointsEarned:0,possibleExtraCredit:0}}}},[[0,"runtime","vendor"]]]);