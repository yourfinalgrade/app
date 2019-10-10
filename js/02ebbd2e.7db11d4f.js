(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["02ebbd2e"],{"03cc":function(t,e,a){},"24b4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","max-width":"400px"}},[a("q-list",{attrs:{bordered:""}},[a("q-item",[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("class_name")))])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.classInfo.name))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"edit"},on:{click:t.editClassName}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("current_grade")))])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.currentGrade))])],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("lowest_possible_grade")))])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.lowestGrade))])],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("highest_possible_grade")))])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.highestGrade))])],1)],1)],1),Object.values(t.classInfo.categories).length>0?t._l(Object.values(t.classInfo.categories),(function(e){return a("q-list",{key:e.id,attrs:{bordered:""}},[a("q-item",[a("q-item-section",[a("q-item-label",[a("b",[t._v(t._s(e.name))])])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.getCatGradeString(e.id)))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"edit"},on:{click:function(a){return t.editCategory(e.id)}}})],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"delete"}})],1)],1),t._l(Object.values(t.classInfo.grades).filter((function(t){return t.categoryId===e.id})),(function(e){return a("q-item",{key:e.id},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("assignment"))+":")]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t("points"))+": "+t._s(e.pointsEarned)+"/"+t._s(e.maxPoints))])],1),a("q-item-section",{attrs:{top:""}},[a("q-item-label",[t._v(t._s(e.name))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"edit"},on:{click:function(a){return t.editGrade(e.id)}}})],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"delete"}})],1)],1)}))],2)})):[a("div",{attrs:{id:"no-cat"}},[a("p",{staticClass:"text-center"},[t._v(t._s(t.$t("no_categories_entered")))]),a("p",{staticClass:"text-center"},[t._v(t._s(t.$t("why_not_add_one")))])])]],2),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[0===Object.values(t.classInfo.categories).length?[a("q-btn",{attrs:{fab:"",color:"secondary",icon:"category"},on:{click:t.addCategory}})]:[a("q-fab",{attrs:{color:"accent",icon:"keyboard_arrow_up",direction:"up"}},[a("q-fab-action",{attrs:{color:"primary",icon:"grade"},on:{click:t.addGrade}}),a("q-fab-action",{attrs:{color:"secondary",icon:"category"},on:{click:t.addCategory}})],1)]],2),a("CategoryDialog",{ref:"categoryDialog"}),a("GradeDialog",{ref:"gradeDialog"})],1)},i=[],r=(a("8e6e"),a("8a81"),a("456d"),a("7f7f"),a("ac6a"),a("cadf"),a("06db"),a("8615"),a("c47a")),o=a.n(r),n=a("cfd5"),l=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:""},model:{value:t.vmodel,callback:function(e){t.vmodel=e},expression:"vmodel"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("set_grade_properties")))])]),a("q-card-section",[a("q-input",{attrs:{autofocus:"",dense:"",label:t.$t("category_name")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{attrs:{min:0,type:"number",max:"100",label:t.$t("category_weight")},model:{value:t.weight,callback:function(e){t.weight=t._n(e)},expression:"weight"}}),a("q-input",{attrs:{min:0,type:"number",label:t.$t("num_dropped_grades")},model:{value:t.droppedGrades,callback:function(e){t.droppedGrades=t._n(e)},expression:"droppedGrades"}}),a("q-input",{attrs:{min:0,type:"number",label:t.$t("max_percent")},model:{value:t.maxPercent,callback:function(e){t.maxPercent=t._n(e)},expression:"maxPercent"}}),a("q-separator"),a("q-toggle",{attrs:{label:t.$t("toggle_build_up")},model:{value:t.buildUp,callback:function(e){t.buildUp=e},expression:"buildUp"}}),t.buildUp?t._e():a("q-input",{attrs:{min:0,label:t.$t("max_points")},model:{value:t.maxPoints,callback:function(e){t.maxPoints=t._n(e)},expression:"maxPoints"}}),a("q-separator"),a("q-toggle",{attrs:{label:t.$t("toggle_top_worth_more"),disable:!t.topWorthMoreEnabled&&!t.buildUp},model:{value:t.topWorthMoreEnabled,callback:function(e){t.topWorthMoreEnabled=e},expression:"topWorthMoreEnabled"}}),t.topWorthMoreEnabled?a("q-input",{attrs:{label:t.$t("top_worth_more_num")},model:{value:t.topWorthMore,callback:function(e){t.topWorthMore=t._n(e)},expression:"topWorthMore"}}):t._e(),t.topWorthMoreEnabled?a("q-input",{attrs:{label:t.$t("top_worth_value_percentage")},model:{value:t.topWorthValue,callback:function(e){t.topWorthValue=t._n(e)},expression:"topWorthValue"}}):t._e(),t.topWorthMoreEnabled?a("q-input",{attrs:{label:t.$t("bot_worth_value_percentage")},model:{value:t.botWorthValue,callback:function(e){t.botWorthValue=t._n(e)},expression:"botWorthValue"}}):t._e()],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$q.lang.label.cancel},on:{click:function(e){return t.resetFields()}}}),a("q-btn",{attrs:{flat:"",label:t.$q.lang.label.update},on:{click:t.save}})],1)],1)],1)},d=[],p=a("e3d2");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={name:"CategoryDialog",data:function(){return{vmodel:!1,id:"",classid:"",name:"",weight:0,buildUp:!0,maxPoints:0,droppedGrades:0,maxPercent:0,topWorthMoreEnabled:!1,topWorthMore:0,topWorthValue:0,botWorthValue:0}},watch:{buildUp:function(t){t||(this.topWorthMoreEnabled=!1)}},computed:h({},Object(l["c"])(["getCategoryByClassAndCategoryId"])),methods:h({},Object(l["b"])(["addCategory","modifyCategory"]),{show:function(t){var e=t.editExisting,a=t.categoryId,s=t.classid;if(this.vmodel=!0,this.classid=s,e){var i=this.getCategoryByClassAndCategoryId(s,a);this.id=a,this.name=i.name,this.weight=i.weight,this.buildUp=i.buildUp,this.maxPoints=i.maxPoints,this.droppedGrades=i.droppedGrades,this.maxPercent=i.maxPercent,this.topWorthMoreEnabled=i.topWorthMoreEnabled,this.topWorthMore=i.topWorthMore,this.botWorthValue=i.botWorthValue}else this.id=Object(p["d"])()},save:function(){var t=this,e={id:this.id,name:this.name,weight:this.weight,buildUp:this.buildUp,maxPoints:this.maxPoints,droppedGrades:this.droppedGrades,maxPercent:this.maxPercent,topWorthMoreEnabled:this.topWorthMoreEnabled,topWorthMore:this.topWorthMore,topWorthValue:this.topWorthValue,botWorthValue:this.botWorthValue};this.modifyCategory([{classid:this.classid,id:this.id},e]).then((function(){t.vmodel=!1,t.resetFields()}))},resetFields:function(){this.id="",this.classid="",this.name="",this.weight=0,this.buildUp=!0,this.maxPoints=0,this.droppedGrades=0,this.maxPercent=0,this.topWorthMoreEnabled=!1,this.topWorthMore=0,this.topWorthValue=0,this.botWorthValue=0}})},m=g,b=a("2877"),f=a("fe09"),v=Object(b["a"])(m,c,d,!1,null,"2cee03a7",null),y=v.exports;v.options.components=Object.assign({QDialog:f["g"],QCard:f["d"],QCardSection:f["f"],QInput:f["m"],QSeparator:f["w"],QToggle:f["x"],QCardActions:f["e"],QBtn:f["c"]},v.options.components||{}),v.options.directives=Object.assign({ClosePopup:f["a"]},v.options.directives||{});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:""},model:{value:t.vmodel,callback:function(e){t.vmodel=e},expression:"vmodel"}},[a("q-card",{staticStyle:{"max-width":"100%",width:"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("set_grade_properties")))])]),a("q-card-section",[a("q-select",{attrs:{outlined:"",options:t.categoryOptions,label:t.$t("category")},model:{value:t.categoryModel,callback:function(e){t.categoryModel=e},expression:"categoryModel"}}),a("q-input",{attrs:{label:t.$t("assignment_name")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{attrs:{type:"number",label:t.$t("max_points")},model:{value:t.maxPoints,callback:function(e){t.maxPoints=t._n(e)},expression:"maxPoints"}}),a("q-input",{attrs:{type:"number",min:0,label:t.$t("points_earned")},model:{value:t.pointsEarned,callback:function(e){t.pointsEarned=t._n(e)},expression:"pointsEarned"}}),a("q-input",{attrs:{type:"number",min:0,label:t.$t("possible_extra_credit")},model:{value:t.possibleExtraCredit,callback:function(e){t.possibleExtraCredit=t._n(e)},expression:"possibleExtraCredit"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$q.lang.label.cancel},on:{click:function(e){return t.resetFields()}}}),a("q-btn",{attrs:{flat:"",label:t.$q.lang.label.update},on:{click:t.save}})],1)],1)],1)},_=[];function q(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?q(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var E={name:"GradeDialog.vue",data:function(){return{vmodel:!1,id:"",categoryModel:{},classid:"",categoryId:"",name:"",maxPoints:0,pointsEarned:0,possibleExtraCredit:0}},computed:O({},Object(l["c"])(["getClassById","getGradeByClassAndGradeId"]),{categoryOptions:function(){return""!==this.classid?Object.values(this.getClassById(this.classid).categories).map((function(t){return{label:t.name,value:t.id}})):[]}}),methods:O({},Object(l["b"])(["setGrade"]),{show:function(t){var e=t.editExisting,a=t.classid,s=t.gradeId;if(this.vmodel=!0,this.classid=a,e){this.id=s;var i=this.getGradeByClassAndGradeId(a,s);this.categoryId=i.categoryId,this.categoryId in this.getClassById(this.classid).categories&&(this.categoryModel.value=this.categoryId,this.categoryModel.label=this.getClassById(this.classid).categories[this.categoryId].name),this.name=i.name,this.maxPoints=i.maxPoints,this.pointsEarned=i.pointsEarned,this.possibleExtraCredit=i.possibleExtraCredit}else this.id=Object(p["d"])()},save:function(){var t=this,e={id:this.id,classid:this.classid,categoryId:this.categoryModel.value,name:this.name,maxPoints:this.maxPoints,pointsEarned:this.pointsEarned,possibleExtraCredit:this.possibleExtraCredit};this.setGrade([{classid:this.classid,id:this.id},e]).then((function(){t.vmodel=!1,t.resetFields()}))},resetFields:function(){this.categoryModel={},this.classid="",this.categoryId="",this.name="",this.maxPoints=0,this.pointsEarned=0,this.possibleExtraCredit=0}})},P=E,C=Object(b["a"])(P,x,_,!1,null,"811f5828",null),w=C.exports;function j(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function W(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?j(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}C.options.components=Object.assign({QDialog:f["g"],QCard:f["d"],QCardSection:f["f"],QSelect:f["v"],QInput:f["m"],QCardActions:f["e"],QBtn:f["c"]},C.options.components||{}),C.options.directives=Object.assign({ClosePopup:f["a"]},C.options.directives||{});var G={name:"ClassView",components:{GradeDialog:w,CategoryDialog:y},props:["classid"],computed:W({},Object(l["c"])(["getClassById","getLocale"]),{classInfo:function(){return this.getClassById(this.classid)},dataForCalculator:function(){return{categories:JSON.parse(JSON.stringify(Object.values(this.getClassById(this.classid).categories))).map((function(t){return t.displayName=t.name,t.name=t.id,t})),grades:JSON.parse(JSON.stringify(Object.values(this.getClassById(this.classid).grades))).map((function(t){return t.category=t.categoryId,t})),name:this.getClassById(this.classid).name}},classCalculatorObject:function(){return new n["ClassCalculator"](this.dataForCalculator)},currentGrade:function(){return this.classCalculatorObject.getCurrentGrade()},highestGrade:function(){return this.classCalculatorObject.getHighestGrade()},lowestGrade:function(){return this.classCalculatorObject.getLowestGrade()}}),methods:W({},Object(l["b"])(["setPageTitle","setClassName"]),{addGrade:function(){this.$refs.gradeDialog.show({editExisting:!1,classid:this.classid})},addCategory:function(){this.$refs.categoryDialog.show({editExisting:!1,classid:this.classid})},editCategory:function(t){this.$refs.categoryDialog.show({editExisting:!0,classid:this.classid,categoryId:t})},editGrade:function(t){this.$refs.gradeDialog.show({editExisting:!0,classid:this.classid,gradeId:t})},getCatGradeString:function(t){var e=this.classCalculatorObject.getCatGrade(t);return e.toLocaleString("en",{style:"percent",minimumFractionDigits:2})},editClassName:function(){var t=this;this.$q.dialog({title:this.$t("edit_class_details"),message:this.$t("class_name"),prompt:{model:this.classInfo.name,type:"text"},cancel:!0,persistent:!1}).onOk((function(e){t.setClassName([{classid:t.classInfo.id},{name:e}]).catch((function(e){t.$q.dialog({title:t.$t("invalid_submission"),message:e,persistent:!1})}))}))}}),mounted:function(){this.setPageTitle({name:this.$t("classes")})},watch:{getLocale:function(t){this.setPageTitle({name:this.$t("classes")})}}},$=G,I=(a("bd3c"),Object(b["a"])($,s,i,!1,null,"5c1709e5",null));e["default"]=I.exports;I.options.components=Object.assign({QPage:f["s"],QList:f["r"],QItem:f["n"],QItemSection:f["p"],QItemLabel:f["o"],QIcon:f["l"],QPageSticky:f["u"],QBtn:f["c"],QFab:f["i"],QFabAction:f["j"]},I.options.components||{})},bd3c:function(t,e,a){"use strict";var s=a("03cc"),i=a.n(s);i.a},cfd5:function(t,e){class a{constructor(t){this.categories=t.categories.map(e=>Object.assign({},e,{grades:t.grades.filter(t=>t.category===e.name)})),this.grades=t.grades}getCurrentGrade(){let t=0;return this.categories.forEach(e=>{let a=this.getCatGrade(e.name);t+=this.maxPercent(e,a)}),t}getCatGrade(t){if("string"===typeof t&&(t=JSON.parse(JSON.stringify(this.categories.filter(e=>e.name===t)[0]))),t=this.dropGrades(t),1==t.buildUp){if(t.topWorthMore){t=this.sortHighestFirst(t);let e=0,a=0;for(let s=0;s<t.topWorthMore&&s<t.grades.length;s++)if(void 0!==t.grades[s].pointsEarned){let i=t.grades[s];e+=i.pointsEarned/i.maxPoints*t.topWorthValue,a+=t.topWorthValue}for(let s=t.topWorthMore;s<t.grades.length;s++)if(void 0!==t.grades[s].pointsEarned){let i=t.grades[s];e+=i.pointsEarned/i.maxPoints*t.botWorthValue,a+=t.botWorthValue}return 0==a?1:e/a}let e=0,a=0;for(let s=0;s<t.grades.length;s++)if(void 0!==t.grades[s].pointsEarned){let i=t.grades[s];e+=i.pointsEarned,a+=i.maxPoints}return 0==a?1:e/a}let e=t.maxPoints;for(let a=0;a<t.grades.length;a++)void 0!==t.grades[a].pointsEarned&&(e-=t.grades[a].maxPoints-t.grades[a].pointsEarned,e<0&&(e=0));return 0==t.maxPoints?1:e/t.maxPoints}getHighestGrade(){let t=0;return this.categories.forEach(e=>{let a=this.getCatHighest(e.name);t+=this.maxPercent(e,a)}),t}getCatHighest(t){return t=JSON.parse(JSON.stringify(this.categories.filter(e=>e.name===t)[0])),t.grades.forEach(t=>{void 0===t.pointsEarned&&(t.pointsEarned=t.maxPoints+(t.possibleExtraScore?t.possibleExtraScore:0))}),this.getCatGrade(t)}getLowestGrade(){let t=0;return this.categories.forEach(e=>{let a=this.getCatLowest(e.name);t+=this.maxPercent(e,a)}),t}getCatLowest(t){return t=JSON.parse(JSON.stringify(this.categories.filter(e=>e.name===t)[0])),t.grades.forEach(t=>{void 0===t.pointsEarned&&(t.pointsEarned=0)}),this.getCatGrade(t)}dropGrades(t){return t.droppedGrades&&(t.grades.sort((function(t,e){return void 0===t.pointsEarned&&void 0===e.pointsEarned?0:void 0===t.pointsEarned?1:void 0===e.pointsEarned?-1:t.maxPoints-t.pointsEarned>e.maxPoints-e.pointsEarned?-1:t.maxPoints-t.pointsEarned<e.maxPoints-e.pointsEarned?1:0})),t.grades.splice(0,t.droppedGrades)),t}sortHighestFirst(t){return t.grades.sort((function(t,e){return void 0===t.pointsEarned&&void 0===e.pointsEarned?0:void 0===t.pointsEarned?1:void 0===e.pointsEarned?-1:t.pointsEarned/t.maxPoints>e.pointsEarned/e.maxPoints?-1:t.pointsEarned/t.maxPoints<e.pointsEarned/e.maxPoints?1:0})),t}maxPercent(t,e){let a=e*t.weight;return t.maxPercent&&a>t.maxPercent&&(a=t.maxPercent),a}getA(){return this.data.a}}t.exports={ClassCalculator:a}}}]);