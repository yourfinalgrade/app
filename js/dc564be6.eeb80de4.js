(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dc564be6"],{"24b4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","max-width":"500px",margin:"auto"}},[t.$q.platform.is.desktop?a("div",{staticClass:"row",staticStyle:{"padding-bottom":"10px"}},[a("div",{staticClass:"col"},[a("q-btn",{attrs:{icon:"arrow_left",flat:"",label:t.$t("back_to_list_of_classes")},on:{click:function(e){return t.$router.push("/")}}})],1)]):t._e(),a("q-list",{attrs:{bordered:""}},[a("q-item",[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("class_name")))])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.classInfo.name))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"edit"},on:{click:t.editClassName}})],1)],1),a("q-separator"),a("q-item",[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("lowest_possible_grade")))])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.lowestGrade))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{icon:"info",flat:"",color:"info"},on:{click:function(e){return t.showInfo("Lowest Possible Grade")}}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",[a("b",[t._v(t._s(t.$t("current_grade")))])])],1),a("q-item-section",[a("q-item-label",[a("b",[t._v(t._s(t.currentGrade))])])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{icon:"info",flat:"",color:"info"},on:{click:function(e){return t.showInfo("Current Grade")}}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("highest_possible_grade")))])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.highestGrade))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{icon:"info",flat:"",color:"info"},on:{click:function(e){return t.showInfo("Highest Possible Grade")}}})],1)],1)],1),Object.values(t.classInfo.categories).length>0?t._l(Object.values(t.classInfo.categories),(function(e){return a("q-list",{key:e.id,attrs:{bordered:""}},[a("q-item",[a("q-item-section",[a("q-item-label",[a("b",[t._v(t._s(e.name))])])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.getCatGradeString(e.id)))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.getCatGradeInContextString(e.id)))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{icon:"add",dense:"",flat:""},on:{click:function(a){return t.addGradePreselectedCategory(e.id)}}})],1),a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{icon:"more_vert",flat:"",dense:""}},[a("q-menu",[a("q-list",{attrs:{dense:""}},[a("q-item",{attrs:{clickable:""},on:{click:function(a){return t.editCategory(e.id)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"edit"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("edit")))])],1)],1),a("q-item",{attrs:{clickable:""},on:{click:function(a){return t.clickDeleteCategory(e.id)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"delete"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("delete")))])],1)],1)],1)],1)],1)],1)],1),t._l(Object.values(t.classInfo.grades).filter((function(t){return t.categoryId===e.id})),(function(e){return a("q-item",{key:e.id},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("assignment"))+":")]),e.notYetGraded?a("q-item-label",{attrs:{caption:""}},[t._v("\n                            "+t._s(t.$t("not_yet_graded"))+"\n                        ")]):a("q-item-label",{attrs:{caption:""}},[t._v("\n                            "+t._s(t.$t("points"))+": "+t._s(e.pointsEarned)+"/"+t._s(e.maxPoints)+"\n                        ")])],1),a("q-item-section",{attrs:{top:""}},[a("q-item-label",[t._v(t._s(e.name))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{icon:"more_vert",flat:"",dense:""}},[a("q-menu",[a("q-list",{attrs:{dense:""}},[a("q-item",{attrs:{clickable:""},on:{click:function(a){return t.editGrade(e.id)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"edit"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("edit")))])],1)],1),a("q-item",{attrs:{clickable:""},on:{click:function(a){return t.clickDeleteGrade(e.id)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"delete"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("delete")))])],1)],1)],1)],1)],1)],1)],1)}))],2)})):[a("div",{attrs:{id:"no-cat"}},[a("p",{staticClass:"text-center"},[t._v(t._s(t.$t("no_categories_entered")))]),a("p",{staticClass:"text-center"},[t._v(t._s(t.$t("why_not_add_one")))])])]],2),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{fab:"",color:"secondary",icon:"add"},on:{click:t.addCategory}})],1),a("CategoryDialog",{ref:"categoryDialog"}),a("GradeDialog",{ref:"gradeDialog"})],1)},s=[],r=(a("8e6e"),a("8a81"),a("456d"),a("7f7f"),a("ac6a"),a("cadf"),a("06db"),a("8615"),a("c47a")),o=a.n(r),n=a("cfd5"),l=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:""},model:{value:t.vmodel,callback:function(e){t.vmodel=e},expression:"vmodel"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("set_category_properties")))])]),a("q-card-section",[a("q-input",{attrs:{autofocus:"",dense:"",label:t.$t("category_name")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{attrs:{min:0,type:"number",max:100,suffix:"%",hint:t.$t("explain_category_weight"),label:t.$t("category_weight")+" %"},model:{value:t.weight,callback:function(e){t.weight=t._n(e)},expression:"weight"}}),a("q-input",{attrs:{min:0,type:"number",suffix:"%",hint:t.$t("explain_max_percent"),label:t.$t("max_percent")+" %"},model:{value:t.maxPercent,callback:function(e){t.maxPercent=t._n(e)},expression:"maxPercent"}}),a("div",{staticStyle:{"margin-top":"40px"}}),a("q-separator"),a("q-input",{attrs:{min:0,type:"number",hint:t.$t("explain_num_dropped"),label:t.$t("num_dropped_grades")},model:{value:t.droppedGrades,callback:function(e){t.droppedGrades=t._n(e)},expression:"droppedGrades"}}),a("div",{staticStyle:{"margin-top":"20px"}}),a("q-separator"),a("q-field",{attrs:{borderless:""}},[a("q-toggle",{attrs:{label:t.$t("toggle_build_up")},model:{value:t.buildUp,callback:function(e){t.buildUp=e},expression:"buildUp"}})],1),t.buildUp?t._e():a("q-input",{attrs:{min:0,label:t.$t("max_points")},model:{value:t.maxPoints,callback:function(e){t.maxPoints=t._n(e)},expression:"maxPoints"}}),a("q-field",{attrs:{hint:t.$t("explain_top_worth_more"),borderless:""}},[a("q-toggle",{attrs:{label:t.$t("toggle_top_worth_more"),disable:!t.topWorthMoreEnabled&&!t.buildUp},model:{value:t.topWorthMoreEnabled,callback:function(e){t.topWorthMoreEnabled=e},expression:"topWorthMoreEnabled"}})],1),t.topWorthMoreEnabled?a("div",{staticStyle:{"margin-top":"35px"}}):t._e(),t.topWorthMoreEnabled?a("q-input",{attrs:{hint:t.$t("explain_top_worth_more_num"),label:t.$t("top_worth_more_num")},model:{value:t.topWorthMore,callback:function(e){t.topWorthMore=t._n(e)},expression:"topWorthMore"}}):t._e(),t.topWorthMoreEnabled?a("q-input",{attrs:{suffix:"%",hint:t.$t("explain_top_worth_value"),label:t.$t("top_worth_value_percentage")},model:{value:t.topWorthValue,callback:function(e){t.topWorthValue=t._n(e)},expression:"topWorthValue"}}):t._e(),t.topWorthMoreEnabled?a("q-input",{attrs:{suffix:"%",hint:t.$t("explain_bot_worth_value"),label:t.$t("bot_worth_value_percentage")},model:{value:t.botWorthValue,callback:function(e){t.botWorthValue=t._n(e)},expression:"botWorthValue"}}):t._e()],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$q.lang.label.cancel},on:{click:function(e){return t.resetFields()}}}),a("q-btn",{attrs:{flat:"",label:t.$q.lang.label.update},on:{click:t.save}})],1)],1)],1)},d=[],p=a("e3d2");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"CategoryDialog",data:function(){return{vmodel:!1,id:"",classid:"",name:"",weight:0,buildUp:!0,maxPoints:0,droppedGrades:0,maxPercent:0,topWorthMoreEnabled:!1,topWorthMore:0,topWorthValue:0,botWorthValue:0}},watch:{buildUp:function(t){t||(this.topWorthMoreEnabled=!1)}},computed:h({},Object(l["c"])(["getCategoryByClassAndCategoryId"])),methods:h({},Object(l["b"])(["addCategory","modifyCategory"]),{show:function(t){var e=t.editExisting,a=t.categoryId,i=t.classid;if(this.vmodel=!0,this.classid=i,e){var s=this.getCategoryByClassAndCategoryId(i,a);this.id=a,this.name=s.name,this.weight=s.weight,this.buildUp=s.buildUp,this.maxPoints=s.maxPoints,this.droppedGrades=s.droppedGrades,this.maxPercent=s.maxPercent,this.topWorthMoreEnabled=s.topWorthMoreEnabled,this.topWorthMore=s.topWorthMore,this.botWorthValue=s.botWorthValue}else this.id=Object(p["d"])()},save:function(){var t=this,e={id:this.id,name:this.name,weight:this.weight,buildUp:this.buildUp,maxPoints:this.maxPoints,droppedGrades:this.droppedGrades,maxPercent:this.maxPercent,topWorthMoreEnabled:this.topWorthMoreEnabled,topWorthMore:this.topWorthMore,topWorthValue:this.topWorthValue,botWorthValue:this.botWorthValue};this.modifyCategory([{classid:this.classid,id:this.id},e]).then((function(){t.vmodel=!1,t.resetFields()}))},resetFields:function(){this.id="",this.classid="",this.name="",this.weight=0,this.buildUp=!0,this.maxPoints=0,this.droppedGrades=0,this.maxPercent=0,this.topWorthMoreEnabled=!1,this.topWorthMore=0,this.topWorthValue=0,this.botWorthValue=0}})},m=u,b=a("2877"),f=a("fe09"),_=Object(b["a"])(m,c,d,!1,null,"50bbbfde",null),v=_.exports;_.options.components=Object.assign({QDialog:f["g"],QCard:f["d"],QCardSection:f["f"],QInput:f["o"],QSeparator:f["z"],QField:f["k"],QToggle:f["A"],QCardActions:f["e"],QBtn:f["c"]},_.options.components||{}),_.options.directives=Object.assign({ClosePopup:f["a"]},_.options.directives||{});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:""},model:{value:t.vmodel,callback:function(e){t.vmodel=e},expression:"vmodel"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("set_grade_properties")))])]),a("q-card-section",[a("q-select",{attrs:{outlined:"",options:t.categoryOptions,label:t.$t("category")},model:{value:t.categoryModel,callback:function(e){t.categoryModel=e},expression:"categoryModel"}}),a("q-input",{attrs:{label:t.$t("assignment_name")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{attrs:{type:"number",hint:t.$t("explain_max_points"),label:t.$t("max_points")},model:{value:t.maxPoints,callback:function(e){t.maxPoints=t._n(e)},expression:"maxPoints"}}),a("div",{staticStyle:{"margin-top":"20px"}}),t.notYetGraded?t._e():a("q-input",{attrs:{type:"number",hint:t.$t("explain_points_earned"),min:0,label:t.$t("points_earned")},model:{value:t.pointsEarned,callback:function(e){t.pointsEarned=t._n(e)},expression:"pointsEarned"}}),a("q-toggle",{attrs:{label:t.$t("not_yet_graded")},model:{value:t.notYetGraded,callback:function(e){t.notYetGraded=e},expression:"notYetGraded"}}),a("q-input",{attrs:{type:"number",min:0,label:t.$t("possible_extra_credit")},model:{value:t.possibleExtraCredit,callback:function(e){t.possibleExtraCredit=t._n(e)},expression:"possibleExtraCredit"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$q.lang.label.cancel},on:{click:function(e){return t.resetFields()}}}),a("q-btn",{attrs:{flat:"",label:t.$q.lang.label.update},on:{click:t.save}})],1)],1)],1)},x=[];function q(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?q(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var P={name:"GradeDialog.vue",data:function(){return{vmodel:!1,id:"",categoryModel:{},classid:"",categoryId:"",name:"",maxPoints:100,pointsEarned:0,possibleExtraCredit:0,notYetGraded:!1}},computed:C({},Object(l["c"])(["getClassById","getGradeByClassAndGradeId"]),{categoryOptions:function(){return""!==this.classid?Object.values(this.getClassById(this.classid).categories).map((function(t){return{label:t.name,value:t.id}})):[]}}),methods:C({},Object(l["b"])(["setGrade"]),{show:function(t){var e=t.editExisting,a=t.classid,i=t.gradeId,s=t.categoryId;if(this.vmodel=!0,this.classid=a,e){this.id=i;var r=this.getGradeByClassAndGradeId(a,i);this.categoryId=r.categoryId,this.categoryId in this.getClassById(this.classid).categories&&(this.categoryModel.value=this.categoryId,this.categoryModel.label=this.getClassById(this.classid).categories[this.categoryId].name),this.name=r.name,this.maxPoints=r.maxPoints,this.pointsEarned=r.pointsEarned,this.possibleExtraCredit=r.possibleExtraCredit,this.notYetGraded=r.notYetGraded}else this.id=Object(p["d"])(),this.categoryId=s,s&&this.categoryId in this.getClassById(this.classid).categories&&(this.categoryModel.value=this.categoryId,this.categoryModel.label=this.getClassById(this.classid).categories[this.categoryId].name)},save:function(){var t=this,e={id:this.id,classid:this.classid,categoryId:this.categoryModel.value,name:this.name,maxPoints:this.maxPoints,pointsEarned:this.pointsEarned,possibleExtraCredit:this.possibleExtraCredit,notYetGraded:this.notYetGraded};this.setGrade([{classid:this.classid,id:this.id},e]).then((function(){t.vmodel=!1,t.resetFields()}))},resetFields:function(){this.categoryModel={},this.classid="",this.categoryId="",this.name="",this.maxPoints=100,this.pointsEarned=0,this.possibleExtraCredit=0,this.notYetGraded=!1},showInfo:function(t){var e="",a="";switch(t){case"Max Points":e=this.$t("explanation"),a=this.$t("explain_max_points");break;default:break}this.$q.dialog({title:e,message:a,persistent:!1})}})},O=P,E=Object(b["a"])(O,y,x,!1,null,"0dbe641c",null),w=E.exports;function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function G(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?$(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}E.options.components=Object.assign({QDialog:f["g"],QCard:f["d"],QCardSection:f["f"],QSelect:f["y"],QInput:f["o"],QToggle:f["A"],QCardActions:f["e"],QBtn:f["c"]},E.options.components||{}),E.options.directives=Object.assign({ClosePopup:f["a"]},E.options.directives||{});var k={name:"ClassView",components:{GradeDialog:w,CategoryDialog:v},props:["classid"],computed:G({},Object(l["c"])(["getClassById","getLocale","getDarkModeEnabled"]),{classInfo:function(){return this.getClassById(this.classid)},dataForCalculator:function(){return{categories:JSON.parse(JSON.stringify(Object.values(this.getClassById(this.classid).categories))).map((function(t){return t.displayName=t.name,t.name=t.id,t})),grades:JSON.parse(JSON.stringify(Object.values(this.getClassById(this.classid).grades))).map((function(t){return t.category=t.categoryId,t})),name:this.getClassById(this.classid).name}},classCalculatorObject:function(){return new n["ClassCalculator"](this.dataForCalculator)},currentGrade:function(){return(this.classCalculatorObject.getCurrentGrade()/100).toLocaleString("en",{style:"percent",minimumFractionDigits:2})},highestGrade:function(){return(this.classCalculatorObject.getHighestGrade()/100).toLocaleString("en",{style:"percent",minimumFractionDigits:2})},lowestGrade:function(){return(this.classCalculatorObject.getLowestGrade()/100).toLocaleString("en",{style:"percent",minimumFractionDigits:2})}}),methods:G({},Object(l["b"])(["setPageTitle","setClassName","deleteGrade","deleteCategory"]),{addGrade:function(){this.$refs.gradeDialog.show({editExisting:!1,classid:this.classid})},addGradePreselectedCategory:function(t){this.$refs.gradeDialog.show({editExisting:!1,classid:this.classid,categoryId:t})},addCategory:function(){this.$refs.categoryDialog.show({editExisting:!1,classid:this.classid})},editCategory:function(t){this.$refs.categoryDialog.show({editExisting:!0,classid:this.classid,categoryId:t})},editGrade:function(t){this.$refs.gradeDialog.show({editExisting:!0,classid:this.classid,gradeId:t})},clickDeleteGrade:function(t){var e=this;this.$q.dialog({title:this.$t("are_you_sure"),message:this.$t("this_will_permanently_delete_the_grade"),cancel:!0}).onOk((function(a){e.deleteGrade([{classid:e.classid},{id:t}])}))},clickDeleteCategory:function(t){var e=this;this.$q.dialog({title:this.$t("are_you_sure"),message:this.$t("this_will_permanently_delete_the_category"),cancel:!0}).onOk((function(a){e.deleteCategory([{classid:e.classid},{id:t}])}))},getCatGradeInContextString:function(t){var e=(this.classInfo.categories[t].maxPercent/100).toLocaleString("en",{style:"percent",minimumFractionDigits:2}),a=(this.classCalculatorObject.getCatGrade(t,!0)*this.classInfo.categories[t].maxPercent/100).toLocaleString("en",{style:"percent",minimumFractionDigits:2});return"".concat(a," / ").concat(e)},getCatGradeString:function(t){var e=this.classCalculatorObject.getCatGrade(t,!0);return e.toLocaleString("en",{style:"percent",minimumFractionDigits:2})},editClassName:function(){var t=this;this.$q.dialog({title:this.$t("edit_class_details"),message:this.$t("class_name"),prompt:{model:this.classInfo.name,type:"text"},cancel:!0,persistent:!1}).onOk((function(e){t.setClassName([{classid:t.classInfo.id},{name:e}]).catch((function(e){t.$q.dialog({title:t.$t("invalid_submission"),message:e,persistent:!1})}))}))},showInfo:function(t){var e="",a="";switch(t){case"Lowest Possible Grade":e=this.$t("explanation"),a=this.$t("explain_lowest_possible_grade_explanation");break;case"Current Grade":e=this.$t("explanation"),a=this.$t("explain_current_grade_explanation");break;case"Highest Possible Grade":e=this.$t("explanation"),a=this.$t("explain_highest_possible_grade_explanation");break;default:break}this.$q.dialog({title:e,message:a,persistent:!1})}}),mounted:function(){this.setPageTitle({name:this.$t("classes")})},watch:{getLocale:function(t){this.setPageTitle({name:this.$t("classes")})}}},j=k,I=(a("761d"),Object(b["a"])(j,i,s,!1,null,"7018573c",null));e["default"]=I.exports;I.options.components=Object.assign({QPage:f["v"],QBtn:f["c"],QList:f["t"],QItem:f["p"],QItemSection:f["r"],QItemLabel:f["q"],QIcon:f["m"],QSeparator:f["z"],QMenu:f["u"],QPageSticky:f["x"],QFab:f["i"],QFabAction:f["j"]},I.options.components||{})},"761d":function(t,e,a){"use strict";var i=a("f531"),s=a.n(i);s.a},cfd5:function(t,e){class a{constructor(t){this.categories=t.categories.map(e=>Object.assign({},e,{grades:t.grades.filter(t=>t.category===e.name)})),this.grades=t.grades}getCurrentGrade(){let t=0;return this.categories.forEach(e=>{let a=this.getCatGrade(e.name,!0);t+=this.maxPercent(e,a)}),t}getCatGrade(t,e){if("string"===typeof t&&(t=JSON.parse(JSON.stringify(this.categories.filter(e=>e.name===t)[0]))),t=this.dropGrades(t),1==t.buildUp){if(t.topWorthMore){t=this.sortHighestFirst(t);let e=0,a=0;for(let i=0;i<t.topWorthMore&&i<t.grades.length;i++)if(void 0!==t.grades[i].pointsEarned){let s=t.grades[i];e+=s.pointsEarned/s.maxPoints*t.topWorthValue,a+=t.topWorthValue}for(let i=t.topWorthMore;i<t.grades.length;i++)if(void 0!==t.grades[i].pointsEarned){let s=t.grades[i];e+=s.pointsEarned/s.maxPoints*t.botWorthValue,a+=t.botWorthValue}return 0==a?1:e/a}let a=0,i=0;for(let s=0;s<t.grades.length;s++)if(e){if(void 0!==t.grades[s].pointsEarned&&!t.grades[s].notYetGraded){let e=t.grades[s];a+=e.pointsEarned,i+=e.maxPoints}}else if(void 0!==t.grades[s].pointsEarned){let e=t.grades[s];a+=e.pointsEarned,i+=e.maxPoints}return 0==i?1:a/i}let a=t.maxPoints;for(let i=0;i<t.grades.length;i++)void 0!==t.grades[i].pointsEarned&&(a-=t.grades[i].maxPoints-t.grades[i].pointsEarned,a<0&&(a=0));return 0==t.maxPoints?1:a/t.maxPoints}getHighestGrade(){let t=0;return this.categories.forEach(e=>{let a=this.getCatHighest(e.name);t+=this.maxPercent(e,a)}),t}getCatHighest(t){return t=JSON.parse(JSON.stringify(this.categories.filter(e=>e.name===t)[0])),t.grades.forEach(t=>{(void 0===t.pointsEarned||t.notYetGraded)&&(t.pointsEarned=t.maxPoints+(t.possibleExtraScore?t.possibleExtraScore:0))}),this.getCatGrade(t,!1)}getLowestGrade(){let t=0;return this.categories.forEach(e=>{let a=this.getCatLowest(e.name);t+=this.maxPercent(e,a)}),t}getCatLowest(t){return t=JSON.parse(JSON.stringify(this.categories.filter(e=>e.name===t)[0])),console.log(t.grades),0==t.grades.length?0:(t.grades.forEach(t=>{(void 0===t.pointsEarned||t.notYetGraded)&&(t.pointsEarned=0)}),this.getCatGrade(t,!1))}dropGrades(t){return t.droppedGrades&&(t.grades.sort((function(t,e){return void 0===t.pointsEarned&&void 0===e.pointsEarned?0:void 0===t.pointsEarned?1:void 0===e.pointsEarned?-1:t.maxPoints-t.pointsEarned>e.maxPoints-e.pointsEarned?-1:t.maxPoints-t.pointsEarned<e.maxPoints-e.pointsEarned?1:0})),t.grades.splice(0,t.droppedGrades)),t}sortHighestFirst(t){return t.grades.sort((function(t,e){return void 0===t.pointsEarned&&void 0===e.pointsEarned?0:void 0===t.pointsEarned?1:void 0===e.pointsEarned?-1:t.pointsEarned/t.maxPoints>e.pointsEarned/e.maxPoints?-1:t.pointsEarned/t.maxPoints<e.pointsEarned/e.maxPoints?1:0})),t}maxPercent(t,e){let a=e*t.weight;return t.maxPercent&&a>t.maxPercent&&(a=t.maxPercent),a}getA(){return this.data.a}}t.exports={ClassCalculator:a}},f531:function(t,e,a){}}]);