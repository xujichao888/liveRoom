!function(r){var o={};function e(t){if(o[t])return o[t].exports;var d=o[t]={i:t,l:!1,exports:{}};return r[t].call(d.exports,d,d.exports,e),d.l=!0,d.exports}e.m=r,e.c=o,e.d=function(r,o,t){e.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,o){if(1&o&&(r=e(r)),8&o)return r;if(4&o&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&o&&"string"!=typeof r)for(var d in r)e.d(t,d,function(o){return r[o]}.bind(null,d));return t},e.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(o,"a",o),o},e.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},e.p="",e(e.s=243)}({0:function(r,o,e){"use strict";function t(r,o,e,t,d,i,l,p,n,a){var g,x="function"==typeof r?r.options:r;if(n){x.components||(x.components={});var b=Object.prototype.hasOwnProperty;for(var s in n)b.call(n,s)&&!b.call(x.components,s)&&(x.components[s]=n[s])}if(a&&((a.beforeCreate||(a.beforeCreate=[])).unshift((function(){this[a.__module]=this})),(x.mixins||(x.mixins=[])).push(a)),o&&(x.render=o,x.staticRenderFns=e,x._compiled=!0),t&&(x.functional=!0),i&&(x._scopeId="data-v-"+i),l?(g=function(r){(r=r||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),d&&d.call(this,r),r&&r._registeredComponents&&r._registeredComponents.add(l)},x._ssrRegister=g):d&&(g=p?function(){d.call(this,this.$root.$options.shadowRoot)}:d),g)if(x.functional){x._injectStyles=g;var m=x.render;x.render=function(r,o){return g.call(o),m(r,o)}}else{var u=x.beforeCreate;x.beforeCreate=u?[].concat(u,g):[g]}return{exports:r,options:x}}e.d(o,"a",(function(){return t}))},105:function(r,o,e){"use strict";var t=e(106),d=e.n(t);o.default=d.a},106:function(r,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={onLoad:function(){},methods:{user1Nav:function(){uni.navigateTo({url:"/pages/index/index?msg=059b4b9b967bb4ccf9bdb3f5d18fbcba4920b7b6016380d0ccb76fd2f13d753b5"})},user2Nav:function(){uni.navigateTo({url:"/pages/index/index?msg=627fca9561bba7b269e7a88ed8b909e9a825e381099f7b42bab314be03aeff885"})}}};o.default=t},107:function(r,o){r.exports={user1:{width:"100rpx",height:"100rpx",backgroundColor:"#F2AB64",marginTop:"100rpx"},user2:{width:"100rpx",height:"100rpx",backgroundColor:"#005B5C"},user3:{width:"100rpx",height:"100rpx",backgroundColor:"#005B5C"}}},109:function(r,o,e){"use strict";e.d(o,"b",(function(){return t})),e.d(o,"c",(function(){return d})),e.d(o,"a",(function(){}));var t=function(){var r=this.$createElement,o=this._self._c||r;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",[o("view",{staticClass:["user1"],on:{click:this.user1Nav}},[o("u-text",[this._v("user1")])]),o("view",{staticClass:["user2"],on:{click:this.user2Nav}},[o("u-text",[this._v("user2")])])])])},d=[]},11:function(r,o,e){"use strict";var t=e(109),d=e(105),i=e(0);var l=Object(i.a)(d.default,t.b,t.c,!1,null,"6fa2fa4a","006ad23e",!1,t.a,void 0);(function(r){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(e(193).default,this.options.style):Object.assign(this.options.style,e(193).default)}).call(l),o.default=l.exports},139:function(r,o,e){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(e(140).default,Vue.prototype.__$appStyle__)},140:function(r,o,e){"use strict";e.r(o);var t=e(5),d=e.n(t);for(var i in t)"default"!==i&&function(r){e.d(o,r,(function(){return t[r]}))}(i);o.default=d.a},193:function(r,o,e){"use strict";e.r(o);var t=e(107),d=e.n(t);for(var i in t)"default"!==i&&function(r){e.d(o,r,(function(){return t[r]}))}(i);o.default=d.a},243:function(r,o,e){"use strict";e.r(o);e(139);var t=e(11);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(r){var o=this.constructor;return this.then((function(e){return o.resolve(r()).then((function(){return e}))}),(function(e){return o.resolve(r()).then((function(){throw e}))}))}),t.default.mpType="page",t.default.route="pages/test/index",t.default.el="#root",new Vue(t.default)},5:function(r,o){r.exports={"row-wrap":{flexDirection:"row",flexWrap:"wrap"},"row-reverse-wrap":{flexDirection:"row-reverse",flexWrap:"wrap"},"row-nowrap":{flexDirection:"row",flexWrap:"nowrap"},"row-reverse-nowrap":{flexDirection:"row-reverse",flexWrap:"nowrap"},"row-start":{flexDirection:"row",justifyContent:"flex-start"},"row-end":{flexDirection:"row",justifyContent:"flex-end"},"row-center":{flexDirection:"row",justifyContent:"center"},"row-space-between":{flexDirection:"row",justifyContent:"space-between"},"row-space-around":{flexDirection:"row",justifyContent:"space-around"},"row-middle-center":{flexDirection:"row",justifyContent:"center",alignItems:"center"},"row-middle-around":{flexDirection:"row",alignItems:"center",justifyContent:"space-around"},"row-middle-between":{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"row-top":{flexDirection:"row",alignItems:"flex-start"},"row-middle":{flexDirection:"row",alignItems:"center"},"row-bottom":{flexDirection:"row",alignItems:"flex-end"},"column-column":{flexDirection:"column"},"column-reverse":{flexDirection:"column-reverse"},"column-top":{justifyContent:"flex-start"},"column-bottom":{justifyContent:"flex-end"},"column-middle":{justifyContent:"center"},"column-start":{alignItems:"flex-start"},"column-center":{alignItems:"center"},"column-end":{alignItems:"flex-end"},"column-middle-center":{justifyContent:"center",alignItems:"center"},dIcon:{fontFamily:"dIcon"},border:{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#DCDFE6"},"border-left":{borderLeftWidth:"2rpx",borderStyle:"solid",borderColor:"#DCDFE6"},"border-right":{borderRightWidth:"2rpx",borderStyle:"solid",borderColor:"#DCDFE6"},"border-top":{borderTopWidth:"2rpx",borderStyle:"solid",borderColor:"#DCDFE6"},"border-bottom":{borderBottomWidth:"2rpx",borderStyle:"solid",borderColor:"#DCDFE6"},"border-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#E4E7ED"},"border-deep-left":{borderLeftWidth:"2rpx",borderStyle:"solid",borderColor:"#E4E7ED"},"border-deep-right":{borderRightWidth:"2rpx",borderStyle:"solid",borderColor:"#E4E7ED"},"border-deep-top":{borderTopWidth:"2rpx",borderStyle:"solid",borderColor:"#E4E7ED"},"border-deep-bottom":{borderBottomWidth:"2rpx",borderStyle:"solid",borderColor:"#E4E7ED"},"border-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#EDEEF5"},"border-shallow-left":{borderLeftWidth:"2rpx",borderStyle:"solid",borderColor:"#EDEEF5"},"border-shallow-right":{borderRightWidth:"2rpx",borderStyle:"solid",borderColor:"#EDEEF5"},"border-shallow-top":{borderTopWidth:"2rpx",borderStyle:"solid",borderColor:"#EDEEF5"},"border-shallow-bottom":{borderBottomWidth:"2rpx",borderStyle:"solid",borderColor:"#EDEEF5"},"border-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#F2F6FC"},"border-light-left":{borderLeftWidth:"2rpx",borderStyle:"solid",borderColor:"#F2F6FC"},"border-light-right":{borderRightWidth:"2rpx",borderStyle:"solid",borderColor:"#F2F6FC"},"border-light-top":{borderTopWidth:"2rpx",borderStyle:"solid",borderColor:"#F2F6FC"},"border-light-bottom":{borderBottomWidth:"2rpx",borderStyle:"solid",borderColor:"#F2F6FC"},"border-theme":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#409EFF"},"border-theme-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#3967FF"},"border-theme-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#BBCDFF"},"border-theme-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#E7EDFF"},"border-black":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#000000"},"border-black-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#333333"},"border-black-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#666666"},"border-black-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#999999"},"border-white":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FFFFFF"},"border-white-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#F8F8F8"},"border-white-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#F4F4F4"},"border-white-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#F1F1F1"},"border-gray":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#999999"},"border-gray-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#828282"},"border-gray-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#CDCDCD"},"border-gray-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#F4F4F4"},"border-red":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FA3534"},"border-red-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#DD6161"},"border-red-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FAB6B6"},"border-red-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FEF0F0"},"border-orange":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FFA500"},"border-orange-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FF8C00"},"border-orange-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FFDA9D"},"border-orange-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FFEBCD"},"border-yellow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FFF259"},"border-yellow-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FFD700"},"border-yellow-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FAFAD2"},"border-yellow-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#FFFFED"},"border-green":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#19BE6B"},"border-green-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#18B566"},"border-green-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#71D5A1"},"border-green-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#DBF1E1"},"border-cyan":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#63FFFA"},"border-cyan-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#00FFFF"},"border-cyan-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#BBFFFD"},"border-cyan-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#E4FFFD"},"border-blue":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#409EFF"},"border-blue-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#3967FF"},"border-blue-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#BBCDFF"},"border-blue-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#E7EDFF"},"border-purple":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#BA55D3"},"border-purple-deep":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#BF3EFF"},"border-purple-shallow":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#E0AAFF"},"border-purple-light":{borderWidth:"2rpx",borderStyle:"solid",borderColor:"#EED2EE"},"bg-theme":{backgroundColor:"#409EFF"},"bg-theme-deep":{backgroundColor:"#3967FF"},"bg-theme-shallow":{backgroundColor:"#BBCDFF"},"bg-theme-light":{backgroundColor:"#E7EDFF"},"bg-black":{backgroundColor:"#000000"},"bg-black-deep":{backgroundColor:"#333333"},"bg-black-shallow":{backgroundColor:"#666666"},"bg-black-light":{backgroundColor:"#999999"},"bg-white":{backgroundColor:"#FFFFFF"},"bg-white-deep":{backgroundColor:"#F8F8F8"},"bg-white-shallow":{backgroundColor:"#F4F4F4"},"bg-white-light":{backgroundColor:"#F1F1F1"},"bg-gray":{backgroundColor:"#999999"},"bg-gray-deep":{backgroundColor:"#828282"},"bg-gray-shallow":{backgroundColor:"#CDCDCD"},"bg-gray-light":{backgroundColor:"#F4F4F4"},"bg-red":{backgroundColor:"#FA3534"},"bg-red-deep":{backgroundColor:"#DD6161"},"bg-red-shallow":{backgroundColor:"#FAB6B6"},"bg-red-light":{backgroundColor:"#FEF0F0"},"bg-orange":{backgroundColor:"#FFA500"},"bg-orange-deep":{backgroundColor:"#FF8C00"},"bg-orange-shallow":{backgroundColor:"#FFDA9D"},"bg-orange-light":{backgroundColor:"#FFEBCD"},"bg-yellow":{backgroundColor:"#FFF259"},"bg-yellow-deep":{backgroundColor:"#FFD700"},"bg-yellow-shallow":{backgroundColor:"#FAFAD2"},"bg-yellow-light":{backgroundColor:"#FFFFED"},"bg-green":{backgroundColor:"#19BE6B"},"bg-green-deep":{backgroundColor:"#18B566"},"bg-green-shallow":{backgroundColor:"#71D5A1"},"bg-green-light":{backgroundColor:"#DBF1E1"},"bg-cyan":{backgroundColor:"#63FFFA"},"bg-cyan-deep":{backgroundColor:"#00FFFF"},"bg-cyan-shallow":{backgroundColor:"#BBFFFD"},"bg-cyan-light":{backgroundColor:"#E4FFFD"},"bg-blue":{backgroundColor:"#409EFF"},"bg-blue-deep":{backgroundColor:"#3967FF"},"bg-blue-shallow":{backgroundColor:"#BBCDFF"},"bg-blue-light":{backgroundColor:"#E7EDFF"},"bg-purple":{backgroundColor:"#BA55D3"},"bg-purple-deep":{backgroundColor:"#BF3EFF"},"bg-purple-shallow":{backgroundColor:"#E0AAFF"},"bg-purple-light":{backgroundColor:"#EED2EE"},"color-main":{color:"#333333"},"color-content":{color:"#666666"},"color-tips":{color:"#999999"},"color-light":{color:"#CDCDCD"},"color-theme":{color:"#409EFF"},"color-theme-deep":{color:"#3967FF"},"color-theme-shallow":{color:"#BBCDFF"},"color-theme-light":{color:"#E7EDFF"},"color-black":{color:"#000000"},"color-black-deep":{color:"#333333"},"color-black-shallow":{color:"#666666"},"color-black-light":{color:"#999999"},"color-white":{color:"#FFFFFF"},"color-white-deep":{color:"#F8F8F8"},"color-white-shallow":{color:"#F4F4F4"},"color-white-light":{color:"#F1F1F1"},"color-gray":{color:"#999999"},"color-gray-deep":{color:"#828282"},"color-gray-shallow":{color:"#CDCDCD"},"color-gray-light":{color:"#F4F4F4"},"color-red":{color:"#FA3534"},"color-red-deep":{color:"#DD6161"},"color-red-shallow":{color:"#FAB6B6"},"color-red-light":{color:"#FEF0F0"},"color-orange":{color:"#FFA500"},"color-orange-deep":{color:"#FF8C00"},"color-orange-shallow":{color:"#FFDA9D"},"color-orange-light":{color:"#FFEBCD"},"color-yellow":{color:"#FFF259"},"color-yellow-deep":{color:"#FFD700"},"color-yellow-shallow":{color:"#FAFAD2"},"color-yellow-light":{color:"#FFFFED"},"color-green":{color:"#19BE6B"},"color-green-deep":{color:"#18B566"},"color-green-shallow":{color:"#71D5A1"},"color-green-light":{color:"#DBF1E1"},"color-cyan":{color:"#63FFFA"},"color-cyan-deep":{color:"#00FFFF"},"color-cyan-shallow":{color:"#BBFFFD"},"color-cyan-light":{color:"#E4FFFD"},"color-blue":{color:"#409EFF"},"color-blue-deep":{color:"#3967FF"},"color-blue-shallow":{color:"#BBCDFF"},"color-blue-light":{color:"#E7EDFF"},"color-purple":{color:"#BA55D3"},"color-purple-deep":{color:"#BF3EFF"},"color-purple-shallow":{color:"#E0AAFF"},"color-purple-light":{color:"#EED2EE"},"margin-xs":{marginTop:"8rpx",marginRight:"8rpx",marginBottom:"8rpx",marginLeft:"8rpx"},"margin-top-xs":{marginTop:"8rpx"},"margin-bottom-xs":{marginBottom:"8rpx"},"margin-left-xs":{marginLeft:"8rpx"},"margin-right-xs":{marginRight:"8rpx"},"margin-lr-xs":{marginLeft:"8rpx",marginRight:"8rpx"},"margin-lrt-xs":{marginLeft:"8rpx",marginRight:"8rpx",marginTop:"8rpx"},"margin-lrb-xs":{marginLeft:"8rpx",marginRight:"8rpx",marginBottom:"8rpx"},"margin-tb-xs":{marginTop:"8rpx",marginBottom:"8rpx"},"padding-xs":{paddingTop:"8rpx",paddingRight:"8rpx",paddingBottom:"8rpx",paddingLeft:"8rpx"},"padding-top-xs":{paddingTop:"8rpx"},"padding-bottom-xs":{paddingBottom:"8rpx"},"padding-left-xs":{paddingLeft:"8rpx"},"padding-right-xs":{paddingRight:"8rpx"},"padding-lr-xs":{paddingLeft:"8rpx",paddingRight:"8rpx"},"padding-lrt-xs":{paddingLeft:"8rpx",paddingRight:"8rpx",paddingTop:"8rpx"},"padding-lrb-xs":{paddingLeft:"8rpx",paddingRight:"8rpx",paddingBottom:"8rpx"},"padding-tb-xs":{paddingTop:"8rpx",paddingBottom:"8rpx"},"margin-sm":{marginTop:"16rpx",marginRight:"16rpx",marginBottom:"16rpx",marginLeft:"16rpx"},"margin-top-sm":{marginTop:"16rpx"},"margin-bottom-sm":{marginBottom:"16rpx"},"margin-left-sm":{marginLeft:"16rpx"},"margin-right-sm":{marginRight:"16rpx"},"margin-lr-sm":{marginLeft:"16rpx",marginRight:"16rpx"},"margin-lrt-sm":{marginLeft:"16rpx",marginRight:"16rpx",marginTop:"16rpx"},"margin-lrb-sm":{marginLeft:"16rpx",marginRight:"16rpx",marginBottom:"16rpx"},"margin-tb-sm":{marginTop:"16rpx",marginBottom:"16rpx"},"padding-sm":{paddingTop:"16rpx",paddingRight:"16rpx",paddingBottom:"16rpx",paddingLeft:"16rpx"},"padding-top-sm":{paddingTop:"16rpx"},"padding-bottom-sm":{paddingBottom:"16rpx"},"padding-left-sm":{paddingLeft:"16rpx"},"padding-right-sm":{paddingRight:"16rpx"},"padding-lr-sm":{paddingLeft:"16rpx",paddingRight:"16rpx"},"padding-lrt-sm":{paddingLeft:"16rpx",paddingRight:"16rpx",paddingTop:"16rpx"},"padding-lrb-sm":{paddingLeft:"16rpx",paddingRight:"16rpx",paddingBottom:"16rpx"},"padding-tb-sm":{paddingTop:"16rpx",paddingBottom:"16rpx"},"margin-md":{marginTop:"24rpx",marginRight:"24rpx",marginBottom:"24rpx",marginLeft:"24rpx"},"margin-top-md":{marginTop:"24rpx"},"margin-bottom-md":{marginBottom:"24rpx"},"margin-left-md":{marginLeft:"24rpx"},"margin-right-md":{marginRight:"24rpx"},"margin-lr-md":{marginLeft:"24rpx",marginRight:"24rpx"},"margin-lrt-md":{marginLeft:"24rpx",marginRight:"24rpx",marginTop:"24rpx"},"margin-lrb-md":{marginLeft:"24rpx",marginRight:"24rpx",marginBottom:"24rpx"},"margin-tb-md":{marginTop:"24rpx",marginBottom:"24rpx"},"padding-md":{paddingTop:"24rpx",paddingRight:"24rpx",paddingBottom:"24rpx",paddingLeft:"24rpx"},"padding-top-md":{paddingTop:"24rpx"},"padding-bottom-md":{paddingBottom:"24rpx"},"padding-left-md":{paddingLeft:"24rpx"},"padding-right-md":{paddingRight:"24rpx"},"padding-lr-md":{paddingLeft:"24rpx",paddingRight:"24rpx"},"padding-lrt-md":{paddingLeft:"24rpx",paddingRight:"24rpx",paddingTop:"24rpx"},"padding-lrb-md":{paddingLeft:"24rpx",paddingRight:"24rpx",paddingBottom:"24rpx"},"padding-tb-md":{paddingTop:"24rpx",paddingBottom:"24rpx"},"margin-lg":{marginTop:"32rpx",marginRight:"32rpx",marginBottom:"32rpx",marginLeft:"32rpx"},"margin-top-lg":{marginTop:"32rpx"},"margin-bottom-lg":{marginBottom:"32rpx"},"margin-left-lg":{marginLeft:"32rpx"},"margin-right-lg":{marginRight:"32rpx"},"margin-lr-lg":{marginLeft:"32rpx",marginRight:"32rpx"},"margin-lrt-lg":{marginLeft:"32rpx",marginRight:"32rpx",marginTop:"32rpx"},"margin-lrb-lg":{marginLeft:"32rpx",marginRight:"32rpx",marginBottom:"32rpx"},"margin-tb-lg":{marginTop:"32rpx",marginBottom:"32rpx"},"padding-lg":{paddingTop:"32rpx",paddingRight:"32rpx",paddingBottom:"32rpx",paddingLeft:"32rpx"},"padding-top-lg":{paddingTop:"32rpx"},"padding-bottom-lg":{paddingBottom:"32rpx"},"padding-left-lg":{paddingLeft:"32rpx"},"padding-right-lg":{paddingRight:"32rpx"},"padding-lr-lg":{paddingLeft:"32rpx",paddingRight:"32rpx"},"padding-lrt-lg":{paddingLeft:"32rpx",paddingRight:"32rpx",paddingTop:"32rpx"},"padding-lrb-lg":{paddingLeft:"32rpx",paddingRight:"32rpx",paddingBottom:"32rpx"},"padding-tb-lg":{paddingTop:"32rpx",paddingBottom:"32rpx"},"margin-xl":{marginTop:"40rpx",marginRight:"40rpx",marginBottom:"40rpx",marginLeft:"40rpx"},"margin-top-xl":{marginTop:"40rpx"},"margin-bottom-xl":{marginBottom:"40rpx"},"margin-left-xl":{marginLeft:"40rpx"},"margin-right-xl":{marginRight:"40rpx"},"margin-lr-xl":{marginLeft:"40rpx",marginRight:"40rpx"},"margin-lrt-xl":{marginLeft:"40rpx",marginRight:"40rpx",marginTop:"40rpx"},"margin-lrb-xl":{marginLeft:"40rpx",marginRight:"40rpx",marginBottom:"40rpx"},"margin-tb-xl":{marginTop:"40rpx",marginBottom:"40rpx"},"padding-xl":{paddingTop:"40rpx",paddingRight:"40rpx",paddingBottom:"40rpx",paddingLeft:"40rpx"},"padding-top-xl":{paddingTop:"40rpx"},"padding-bottom-xl":{paddingBottom:"40rpx"},"padding-left-xl":{paddingLeft:"40rpx"},"padding-right-xl":{paddingRight:"40rpx"},"padding-lr-xl":{paddingLeft:"40rpx",paddingRight:"40rpx"},"padding-lrt-xl":{paddingLeft:"40rpx",paddingRight:"40rpx",paddingTop:"40rpx"},"padding-lrb-xl":{paddingLeft:"40rpx",paddingRight:"40rpx",paddingBottom:"40rpx"},"padding-tb-xl":{paddingTop:"40rpx",paddingBottom:"40rpx"},"margin-xxl":{marginTop:"56rpx",marginRight:"56rpx",marginBottom:"56rpx",marginLeft:"56rpx"},"margin-top-xxl":{marginTop:"56rpx"},"margin-bottom-xxl":{marginBottom:"56rpx"},"margin-left-xxl":{marginLeft:"56rpx"},"margin-right-xxl":{marginRight:"56rpx"},"margin-lr-xxl":{marginLeft:"56rpx",marginRight:"56rpx"},"margin-lrt-xxl":{marginLeft:"56rpx",marginRight:"56rpx",marginTop:"56rpx"},"margin-lrb-xxl":{marginLeft:"56rpx",marginRight:"56rpx",marginBottom:"56rpx"},"margin-tb-xxl":{marginTop:"56rpx",marginBottom:"56rpx"},"padding-xxl":{paddingTop:"56rpx",paddingRight:"56rpx",paddingBottom:"56rpx",paddingLeft:"56rpx"},"padding-top-xxl":{paddingTop:"56rpx"},"padding-bottom-xxl":{paddingBottom:"56rpx"},"padding-left-xxl":{paddingLeft:"56rpx"},"padding-right-xxl":{paddingRight:"56rpx"},"padding-lr-xxl":{paddingLeft:"56rpx",paddingRight:"56rpx"},"padding-lrt-xxl":{paddingLeft:"56rpx",paddingRight:"56rpx",paddingTop:"56rpx"},"padding-lrb-xxl":{paddingLeft:"56rpx",paddingRight:"56rpx",paddingBottom:"56rpx"},"padding-tb-xxl":{paddingTop:"56rpx",paddingBottom:"56rpx"},"text-xs":{fontSize:"20rpx"},"text-sm":{fontSize:"24rpx"},"text-md":{fontSize:"28rpx"},"text-lg":{fontSize:"32rpx"},"text-xl":{fontSize:"48rpx"},"text-xxl":{fontSize:"64rpx"},"radius-xs":{borderRadius:"8rpx"},"radius-lt-xs":{borderTopLeftRadius:"8rpx"},"radius-lrt-xs":{borderTopLeftRadius:"8rpx",borderTopRightRadius:"8rpx"},"radius-rt-xs":{borderTopRightRadius:"8rpx"},"radius-rb-xs":{borderBottomRightRadius:"8rpx"},"radius-lrb-xs":{borderBottomRightRadius:"8rpx",borderBottomLeftRadius:"8rpx"},"radius-lb-xs":{borderBottomLeftRadius:"8rpx"},"radius-sm":{borderRadius:"12rpx"},"radius-lt-sm":{borderTopLeftRadius:"12rpx"},"radius-lrt-sm":{borderTopLeftRadius:"12rpx",borderTopRightRadius:"12rpx"},"radius-rt-sm":{borderTopRightRadius:"12rpx"},"radius-rb-sm":{borderBottomRightRadius:"12rpx"},"radius-lrb-sm":{borderBottomRightRadius:"12rpx",borderBottomLeftRadius:"12rpx"},"radius-lb-sm":{borderBottomLeftRadius:"12rpx"},"radius-md":{borderRadius:"16rpx"},"radius-lt-md":{borderTopLeftRadius:"16rpx"},"radius-lrt-md":{borderTopLeftRadius:"16rpx",borderTopRightRadius:"16rpx"},"radius-rt-md":{borderTopRightRadius:"16rpx"},"radius-rb-md":{borderBottomRightRadius:"16rpx"},"radius-lrb-md":{borderBottomRightRadius:"16rpx",borderBottomLeftRadius:"16rpx"},"radius-lb-md":{borderBottomLeftRadius:"16rpx"},"radius-lg":{borderRadius:"20rpx"},"radius-lt-lg":{borderTopLeftRadius:"20rpx"},"radius-lrt-lg":{borderTopLeftRadius:"20rpx",borderTopRightRadius:"20rpx"},"radius-rt-lg":{borderTopRightRadius:"20rpx"},"radius-rb-lg":{borderBottomRightRadius:"20rpx"},"radius-lrb-lg":{borderBottomRightRadius:"20rpx",borderBottomLeftRadius:"20rpx"},"radius-lb-lg":{borderBottomLeftRadius:"20rpx"},"radius-xl":{borderRadius:"100rpx"},"radius-lt-xl":{borderTopLeftRadius:"100rpx"},"radius-lrt-xl":{borderTopLeftRadius:"100rpx",borderTopRightRadius:"100rpx"},"radius-rt-xl":{borderTopRightRadius:"100rpx"},"radius-rb-xl":{borderBottomRightRadius:"100rpx"},"radius-lrb-xl":{borderBottomRightRadius:"100rpx",borderBottomLeftRadius:"100rpx"},"radius-lb-xl":{borderBottomLeftRadius:"100rpx"},"radius-xxl":{borderRadius:"200rpx"},"radius-lt-xxl":{borderTopLeftRadius:"200rpx"},"radius-lrt-xxl":{borderTopLeftRadius:"200rpx",borderTopRightRadius:"200rpx"},"radius-rt-xxl":{borderTopRightRadius:"200rpx"},"radius-rb-xxl":{borderBottomRightRadius:"200rpx"},"radius-lrb-xxl":{borderBottomRightRadius:"200rpx",borderBottomLeftRadius:"200rpx"},"radius-lb-xxl":{borderBottomLeftRadius:"200rpx"},"position-relative":{position:"relative"},"position-absolute":{position:"absolute"},"position-absolute-lt":{position:"absolute",left:0,top:0},"position-absolute-rt":{position:"absolute",right:0,top:0},"position-absolute-lb":{position:"absolute",left:0,bottom:0},"position-absolute-rb":{position:"absolute",right:0,bottom:0},"position-fixed":{position:"fixed"},"position-sticky":{position:"sticky",top:0},"ellipsis-1":{textOverflow:"ellipsis",lines:1},"ellipsis-2":{textOverflow:"ellipsis",lines:2},"ellipsis-3":{textOverflow:"ellipsis",lines:3},"ellipsis-4":{textOverflow:"ellipsis",lines:4},"ellipsis-5":{textOverflow:"ellipsis",lines:5},"ellipsis-6":{textOverflow:"ellipsis",lines:6},"ellipsis-7":{textOverflow:"ellipsis",lines:7},"ellipsis-8":{textOverflow:"ellipsis",lines:8},"ellipsis-9":{textOverflow:"ellipsis",lines:9},"ellipsis-10":{textOverflow:"ellipsis",lines:10},"ellipsis-11":{textOverflow:"ellipsis",lines:11},"ellipsis-12":{textOverflow:"ellipsis",lines:12},"ellipsis-13":{textOverflow:"ellipsis",lines:13},"flex-1":{flex:1},"flex-2":{flex:2},"flex-3":{flex:3},"flex-4":{flex:4},"flex-5":{flex:5},"flex-6":{flex:6},"flex-7":{flex:7},"flex-8":{flex:8},"flex-9":{flex:9},"flex-10":{flex:10},"flex-11":{flex:11},"flex-12":{flex:12},"flex-13":{flex:13},"text-center":{textAlign:"center"},"text-left":{textAlign:"left"},"text-right":{textAlign:"right"},"text-bold":{fontWeight:"bold"},"text-decoration":{textDecoration:"line-through"}}}});