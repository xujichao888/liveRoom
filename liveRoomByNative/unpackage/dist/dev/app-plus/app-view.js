/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/main.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);

function initView() {
  function injectStyles(context) {

    var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 2);
    if (style0.__inject__) style0.__inject__(context);

  }
  typeof injectStyles === 'function' && injectStyles();

  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!**************************************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/pages.json?{"type":"view"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
window.__uniConfig = { "window": { "navigationBarTextStyle": "black", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#F8F8F8", "backgroundColor": "#F8F8F8" } };
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}

/***/ }),
/* 2 */
/*!*****************************************************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/admin/Desktop/liveRoomByNative/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 6).default
var update = add("204eead4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/admin/Desktop/liveRoomByNative/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/* 主题色配置 */\r\n/* 文字颜色 */\r\n/* 边框颜色 */\r\n/* 黑 */\r\n/* 白 */\r\n/* 灰 */\r\n/* 红 */\r\n/* 橙 */\r\n/* 黄 */\r\n/* 绿 */\r\n/* 青 */\r\n/* 蓝 */\r\n/* 紫 */\r\n/* 文字尺寸 */\r\n/* 内外边距 */\r\n/* 圆角尺寸 */\r\n/*核心scss文件 */\r\n/************************************************\r\n  **********   dNvue-ui作者:邓琪昌    **********\r\n   **********    版本号:1.1.1        **********\r\n   *********************************************/\r\n/*****************************************************************************************************************\r\n******如果dnvue-ui应用到非法的程序中，比如涉及赌博，暴力等方面。因此产生纠纷等法律问题，dnvue-ui不承担任何责任********\r\n*****************************************************************************************************************/\r\n/* ====================\r\n\t\t行向布局\r\n ======================*/\r\n/* 如果存在direction:ltr，则从左到右排布；如果存在direction:rtl，则从右到左排布,默认direction:ltr。 */\n.row-wrap {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-flex-wrap: wrap;\r\n          flex-wrap: wrap;\n}\r\n/* 排布方向与flex-direction:row相反 */\n.row-reverse-wrap {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: reverse;\r\n  -webkit-flex-direction: row-reverse;\r\n          flex-direction: row-reverse;\r\n  -webkit-flex-wrap: wrap;\r\n          flex-wrap: wrap;\n}\r\n/* //如果存在direction:ltr，则从左到右排布；如果存在direction:rtl，则从右到左排布,默认direction:ltr。 */\n.row-nowrap {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-flex-wrap: nowrap;\r\n          flex-wrap: nowrap;\n}\r\n/* 排布方向与flex-direction:row相反 */\n.row-reverse-nowrap {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: reverse;\r\n  -webkit-flex-direction: row-reverse;\r\n          flex-direction: row-reverse;\r\n  -webkit-flex-wrap: nowrap;\r\n          flex-wrap: nowrap;\n}\r\n/* 是默认值，所有的 flex 成员项都排列在容器的前部（默认） */\n.row-start {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n  -webkit-justify-content: flex-start;\r\n          justify-content: flex-start;\n}\r\n/* 成员项排列在容器的后部 */\n.row-end {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n          justify-content: flex-end;\n}\r\n/* 成员项排列在容器居中 */\n.row-center {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\n}\r\n/* 横向两端对齐,位于各行之间留有空白的容器内 */\n.row-space-between {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n          justify-content: space-between;\n}\r\n/* 横向两端对齐,位于各行之前、之间、之后都留有空白的容器内 */\n.row-space-around {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-justify-content: space-around;\r\n          justify-content: space-around;\n}\r\n/* 行垂直居中 */\n.row-middle-center {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\n}\r\n/* 垂直横向两端对齐,位于各行之前、之间、之后都留有空白的容器内 */\n.row-middle-around {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  -webkit-justify-content: space-around;\r\n          justify-content: space-around;\n}\r\n/* 垂直横向两端对齐,位于各行之间留有空白的容器内 */\n.row-middle-between {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n          justify-content: space-between;\n}\r\n/* 则是上对齐，所有的成员项排列在容器顶部； */\n.row-top {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: start;\r\n  -webkit-align-items: flex-start;\r\n          align-items: flex-start;\n}\r\n/* 是中间对齐，所有成员项都垂直地居中显示。 */\n.row-middle {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\n}\r\n/* 是底部对齐，所有成员项都垂直地居底显示。 */\n.row-bottom {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: end;\r\n  -webkit-align-items: flex-end;\r\n          align-items: flex-end;\n}\r\n/* ====================\r\n\t\t列向布局\r\n ======================*/\r\n/* 从上到下排布 */\n.column-column {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n          flex-direction: column;\n}\r\n/* 从下到上排布 */\n.column-reverse {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: reverse;\r\n  -webkit-flex-direction: column-reverse;\r\n          flex-direction: column-reverse;\n}\r\n/* 是默认值，所有的 flex 成员项都排列在容器的前部（默认） */\n.column-top {\r\n  -webkit-box-pack: start;\r\n  -webkit-justify-content: flex-start;\r\n          justify-content: flex-start;\n}\r\n/* 成员项排列在容器的后部 */\n.column-bottom {\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n          justify-content: flex-end;\n}\r\n/* 成员项排列在容器垂直中间 */\n.column-middle {\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\n}\r\n/* 则是上对齐，所有的成员项排列在容器顶部； */\n.column-start {\r\n  -webkit-box-align: start;\r\n  -webkit-align-items: flex-start;\r\n          align-items: flex-start;\n}\r\n/* 是中间对齐，所有成员项都垂直地居中显示。 */\n.column-center {\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\n}\r\n/* 是底部对齐，所有成员项都垂直地居底显示。 */\n.column-end {\r\n  -webkit-box-align: end;\r\n  -webkit-align-items: flex-end;\r\n          align-items: flex-end;\n}\r\n/* 列垂直居中 */\n.column-middle-center {\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\n}\r\n/* ====================\r\n\t\t字体图标\r\n ======================*/\n.dIcon {\r\n  font-family: dIcon;\n}\r\n/* ====================\r\n\t\t边框颜色\r\n=======================*/\n.border {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #DCDFE6;\n}\n.border-left {\r\n  border-left-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #DCDFE6;\n}\n.border-right {\r\n  border-right-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #DCDFE6;\n}\n.border-top {\r\n  border-top-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #DCDFE6;\n}\n.border-bottom {\r\n  border-bottom-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #DCDFE6;\n}\n.border-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #E4E7ED;\n}\n.border-deep-left {\r\n  border-left-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #E4E7ED;\n}\n.border-deep-right {\r\n  border-right-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #E4E7ED;\n}\n.border-deep-top {\r\n  border-top-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #E4E7ED;\n}\n.border-deep-bottom {\r\n  border-bottom-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #E4E7ED;\n}\n.border-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #EDEEF5;\n}\n.border-shallow-left {\r\n  border-left-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #EDEEF5;\n}\n.border-shallow-right {\r\n  border-right-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #EDEEF5;\n}\n.border-shallow-top {\r\n  border-top-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #EDEEF5;\n}\n.border-shallow-bottom {\r\n  border-bottom-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #EDEEF5;\n}\n.border-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #F2F6FC;\n}\n.border-light-left {\r\n  border-left-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #F2F6FC;\n}\n.border-light-right {\r\n  border-right-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #F2F6FC;\n}\n.border-light-top {\r\n  border-top-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #F2F6FC;\n}\n.border-light-bottom {\r\n  border-bottom-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #F2F6FC;\n}\r\n/* 主题色 */\n.border-theme {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #409EFF;\n}\n.border-theme-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #3967FF;\n}\n.border-theme-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #BBCDFF;\n}\n.border-theme-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #E7EDFF;\n}\r\n/* 黑 */\n.border-black {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #000000;\n}\n.border-black-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #333333;\n}\n.border-black-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #666666;\n}\n.border-black-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #999999;\n}\r\n/* 白 */\n.border-white {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FFFFFF;\n}\n.border-white-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #F8F8F8;\n}\n.border-white-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #F4F4F4;\n}\n.border-white-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #F1F1F1;\n}\r\n/* 灰 */\n.border-gray {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #999999;\n}\n.border-gray-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #828282;\n}\n.border-gray-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #CDCDCD;\n}\n.border-gray-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #F4F4F4;\n}\r\n/* 红 */\n.border-red {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FA3534;\n}\n.border-red-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #DD6161;\n}\n.border-red-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FAB6B6;\n}\n.border-red-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FEF0F0;\n}\r\n/* 橙 */\n.border-orange {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FFA500;\n}\n.border-orange-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FF8C00;\n}\n.border-orange-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FFDA9D;\n}\n.border-orange-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FFEBCD;\n}\r\n/* 黄 */\n.border-yellow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FFF259;\n}\n.border-yellow-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FFD700;\n}\n.border-yellow-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FAFAD2;\n}\n.border-yellow-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #FFFFED;\n}\r\n/* 绿 */\n.border-green {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #19BE6B;\n}\n.border-green-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #18B566;\n}\n.border-green-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #71D5A1;\n}\n.border-green-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #DBF1E1;\n}\r\n/* 青 */\n.border-cyan {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #63FFFA;\n}\n.border-cyan-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #00FFFF;\n}\n.border-cyan-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #BBFFFD;\n}\n.border-cyan-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #E4FFFD;\n}\r\n/* 蓝 */\n.border-blue {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #409EFF;\n}\n.border-blue-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #3967FF;\n}\n.border-blue-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #BBCDFF;\n}\n.border-blue-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #E7EDFF;\n}\r\n/* 紫 */\n.border-purple {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #BA55D3;\n}\n.border-purple-deep {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #BF3EFF;\n}\n.border-purple-shallow {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #E0AAFF;\n}\n.border-purple-light {\r\n  border-width: 2rpx;\r\n  border-style: solid;\r\n  border-color: #EED2EE;\n}\r\n/* ====================\r\n\t\t背景色\r\n=======================*/\r\n/* 主题色 */\n.bg-theme {\r\n  background-color: #409EFF;\n}\n.bg-theme-deep {\r\n  background-color: #3967FF;\n}\n.bg-theme-shallow {\r\n  background-color: #BBCDFF;\n}\n.bg-theme-light {\r\n  background-color: #E7EDFF;\n}\r\n/* 黑 */\n.bg-black {\r\n  background-color: #000000;\n}\n.bg-black-deep {\r\n  background-color: #333333;\n}\n.bg-black-shallow {\r\n  background-color: #666666;\n}\n.bg-black-light {\r\n  background-color: #999999;\n}\r\n/* 白 */\n.bg-white {\r\n  background-color: #FFFFFF;\n}\n.bg-white-deep {\r\n  background-color: #F8F8F8;\n}\n.bg-white-shallow {\r\n  background-color: #F4F4F4;\n}\n.bg-white-light {\r\n  background-color: #F1F1F1;\n}\r\n/* 灰 */\n.bg-gray {\r\n  background-color: #999999;\n}\n.bg-gray-deep {\r\n  background-color: #828282;\n}\n.bg-gray-shallow {\r\n  background-color: #CDCDCD;\n}\n.bg-gray-light {\r\n  background-color: #F4F4F4;\n}\r\n/* 红 */\n.bg-red {\r\n  background-color: #FA3534;\n}\n.bg-red-deep {\r\n  background-color: #DD6161;\n}\n.bg-red-shallow {\r\n  background-color: #FAB6B6;\n}\n.bg-red-light {\r\n  background-color: #FEF0F0;\n}\r\n/* 橙 */\n.bg-orange {\r\n  background-color: #FFA500;\n}\n.bg-orange-deep {\r\n  background-color: #FF8C00;\n}\n.bg-orange-shallow {\r\n  background-color: #FFDA9D;\n}\n.bg-orange-light {\r\n  background-color: #FFEBCD;\n}\r\n/* 黄 */\n.bg-yellow {\r\n  background-color: #FFF259;\n}\n.bg-yellow-deep {\r\n  background-color: #FFD700;\n}\n.bg-yellow-shallow {\r\n  background-color: #FAFAD2;\n}\n.bg-yellow-light {\r\n  background-color: #FFFFED;\n}\r\n/* 绿 */\n.bg-green {\r\n  background-color: #19BE6B;\n}\n.bg-green-deep {\r\n  background-color: #18B566;\n}\n.bg-green-shallow {\r\n  background-color: #71D5A1;\n}\n.bg-green-light {\r\n  background-color: #DBF1E1;\n}\r\n/* 青 */\n.bg-cyan {\r\n  background-color: #63FFFA;\n}\n.bg-cyan-deep {\r\n  background-color: #00FFFF;\n}\n.bg-cyan-shallow {\r\n  background-color: #BBFFFD;\n}\n.bg-cyan-light {\r\n  background-color: #E4FFFD;\n}\r\n/* 蓝 */\n.bg-blue {\r\n  background-color: #409EFF;\n}\n.bg-blue-deep {\r\n  background-color: #3967FF;\n}\n.bg-blue-shallow {\r\n  background-color: #BBCDFF;\n}\n.bg-blue-light {\r\n  background-color: #E7EDFF;\n}\r\n/* 紫 */\n.bg-purple {\r\n  background-color: #BA55D3;\n}\n.bg-purple-deep {\r\n  background-color: #BF3EFF;\n}\n.bg-purple-shallow {\r\n  background-color: #E0AAFF;\n}\n.bg-purple-light {\r\n  background-color: #EED2EE;\n}\r\n/* ====================\r\n\t\t文本色\r\n=======================*/\n.color-main {\r\n  color: #333333;\n}\n.color-content {\r\n  color: #666666;\n}\n.color-tips {\r\n  color: #999999;\n}\n.color-light {\r\n  color: #CDCDCD;\n}\r\n/* 主题色 */\n.color-theme {\r\n  color: #409EFF;\n}\n.color-theme-deep {\r\n  color: #3967FF;\n}\n.color-theme-shallow {\r\n  color: #BBCDFF;\n}\n.color-theme-light {\r\n  color: #E7EDFF;\n}\r\n/* 黑 */\n.color-black {\r\n  color: #000000;\n}\n.color-black-deep {\r\n  color: #333333;\n}\n.color-black-shallow {\r\n  color: #666666;\n}\n.color-black-light {\r\n  color: #999999;\n}\r\n/* 白 */\n.color-white {\r\n  color: #FFFFFF;\n}\n.color-white-deep {\r\n  color: #F8F8F8;\n}\n.color-white-shallow {\r\n  color: #F4F4F4;\n}\n.color-white-light {\r\n  color: #F1F1F1;\n}\r\n/* 灰 */\n.color-gray {\r\n  color: #999999;\n}\n.color-gray-deep {\r\n  color: #828282;\n}\n.color-gray-shallow {\r\n  color: #CDCDCD;\n}\n.color-gray-light {\r\n  color: #F4F4F4;\n}\r\n/* 红 */\n.color-red {\r\n  color: #FA3534;\n}\n.color-red-deep {\r\n  color: #DD6161;\n}\n.color-red-shallow {\r\n  color: #FAB6B6;\n}\n.color-red-light {\r\n  color: #FEF0F0;\n}\r\n/* 橙 */\n.color-orange {\r\n  color: #FFA500;\n}\n.color-orange-deep {\r\n  color: #FF8C00;\n}\n.color-orange-shallow {\r\n  color: #FFDA9D;\n}\n.color-orange-light {\r\n  color: #FFEBCD;\n}\r\n/* 黄 */\n.color-yellow {\r\n  color: #FFF259;\n}\n.color-yellow-deep {\r\n  color: #FFD700;\n}\n.color-yellow-shallow {\r\n  color: #FAFAD2;\n}\n.color-yellow-light {\r\n  color: #FFFFED;\n}\r\n/* 绿 */\n.color-green {\r\n  color: #19BE6B;\n}\n.color-green-deep {\r\n  color: #18B566;\n}\n.color-green-shallow {\r\n  color: #71D5A1;\n}\n.color-green-light {\r\n  color: #DBF1E1;\n}\r\n/* 青 */\n.color-cyan {\r\n  color: #63FFFA;\n}\n.color-cyan-deep {\r\n  color: #00FFFF;\n}\n.color-cyan-shallow {\r\n  color: #BBFFFD;\n}\n.color-cyan-light {\r\n  color: #E4FFFD;\n}\r\n/* 蓝 */\n.color-blue {\r\n  color: #409EFF;\n}\n.color-blue-deep {\r\n  color: #3967FF;\n}\n.color-blue-shallow {\r\n  color: #BBCDFF;\n}\n.color-blue-light {\r\n  color: #E7EDFF;\n}\r\n/* 紫 */\n.color-purple {\r\n  color: #BA55D3;\n}\n.color-purple-deep {\r\n  color: #BF3EFF;\n}\n.color-purple-shallow {\r\n  color: #E0AAFF;\n}\n.color-purple-light {\r\n  color: #EED2EE;\n}\r\n/* ====================\r\n\t\t内、外边距\r\n ======================*/\r\n/* 外边距 */\n.margin-xs {\r\n  margin: 8rpx;\n}\r\n/* 外边距顶部距离 */\n.margin-top-xs {\r\n  margin-top: 8rpx;\n}\r\n/* 外边距底部距离 */\n.margin-bottom-xs {\r\n  margin-bottom: 8rpx;\n}\r\n/* 外边距左边距离 */\n.margin-left-xs {\r\n  margin-left: 8rpx;\n}\r\n/* 外边距右边距离 */\n.margin-right-xs {\r\n  margin-right: 8rpx;\n}\r\n/* 水平方向外边距 */\n.margin-lr-xs {\r\n  margin-left: 8rpx;\r\n  margin-right: 8rpx;\n}\r\n/* 左右上方向外边距 */\n.margin-lrt-xs {\r\n  margin-left: 8rpx;\r\n  margin-right: 8rpx;\r\n  margin-top: 8rpx;\n}\r\n/* 左右下方向外边距 */\n.margin-lrb-xs {\r\n  margin-left: 8rpx;\r\n  margin-right: 8rpx;\r\n  margin-bottom: 8rpx;\n}\r\n/* 垂直方向外边距 */\n.margin-tb-xs {\r\n  margin-top: 8rpx;\r\n  margin-bottom: 8rpx;\n}\r\n/* 内边距*/\n.padding-xs {\r\n  padding: 8rpx;\n}\r\n/* 内边距顶部距离 */\n.padding-top-xs {\r\n  padding-top: 8rpx;\n}\r\n/* 内边距底部距离 */\n.padding-bottom-xs {\r\n  padding-bottom: 8rpx;\n}\r\n/* 内边距左边距离 */\n.padding-left-xs {\r\n  padding-left: 8rpx;\n}\r\n/* 内边距右边距离 */\n.padding-right-xs {\r\n  padding-right: 8rpx;\n}\r\n/* 水平方向内边距 */\n.padding-lr-xs {\r\n  padding-left: 8rpx;\r\n  padding-right: 8rpx;\n}\r\n/* 左右上方向内边距 */\n.padding-lrt-xs {\r\n  padding-left: 8rpx;\r\n  padding-right: 8rpx;\r\n  padding-top: 8rpx;\n}\r\n/* 左右下方向内边距 */\n.padding-lrb-xs {\r\n  padding-left: 8rpx;\r\n  padding-right: 8rpx;\r\n  padding-bottom: 8rpx;\n}\r\n/* 垂直方向内边距 */\n.padding-tb-xs {\r\n  padding-top: 8rpx;\r\n  padding-bottom: 8rpx;\n}\r\n/* 外边距 */\n.margin-sm {\r\n  margin: 16rpx;\n}\r\n/* 外边距顶部距离 */\n.margin-top-sm {\r\n  margin-top: 16rpx;\n}\r\n/* 外边距底部距离 */\n.margin-bottom-sm {\r\n  margin-bottom: 16rpx;\n}\r\n/* 外边距左边距离 */\n.margin-left-sm {\r\n  margin-left: 16rpx;\n}\r\n/* 外边距右边距离 */\n.margin-right-sm {\r\n  margin-right: 16rpx;\n}\r\n/* 水平方向外边距 */\n.margin-lr-sm {\r\n  margin-left: 16rpx;\r\n  margin-right: 16rpx;\n}\r\n/* 左右上方向外边距 */\n.margin-lrt-sm {\r\n  margin-left: 16rpx;\r\n  margin-right: 16rpx;\r\n  margin-top: 16rpx;\n}\r\n/* 左右下方向外边距 */\n.margin-lrb-sm {\r\n  margin-left: 16rpx;\r\n  margin-right: 16rpx;\r\n  margin-bottom: 16rpx;\n}\r\n/* 垂直方向外边距 */\n.margin-tb-sm {\r\n  margin-top: 16rpx;\r\n  margin-bottom: 16rpx;\n}\r\n/* 内边距*/\n.padding-sm {\r\n  padding: 16rpx;\n}\r\n/* 内边距顶部距离 */\n.padding-top-sm {\r\n  padding-top: 16rpx;\n}\r\n/* 内边距底部距离 */\n.padding-bottom-sm {\r\n  padding-bottom: 16rpx;\n}\r\n/* 内边距左边距离 */\n.padding-left-sm {\r\n  padding-left: 16rpx;\n}\r\n/* 内边距右边距离 */\n.padding-right-sm {\r\n  padding-right: 16rpx;\n}\r\n/* 水平方向内边距 */\n.padding-lr-sm {\r\n  padding-left: 16rpx;\r\n  padding-right: 16rpx;\n}\r\n/* 左右上方向内边距 */\n.padding-lrt-sm {\r\n  padding-left: 16rpx;\r\n  padding-right: 16rpx;\r\n  padding-top: 16rpx;\n}\r\n/* 左右下方向内边距 */\n.padding-lrb-sm {\r\n  padding-left: 16rpx;\r\n  padding-right: 16rpx;\r\n  padding-bottom: 16rpx;\n}\r\n/* 垂直方向内边距 */\n.padding-tb-sm {\r\n  padding-top: 16rpx;\r\n  padding-bottom: 16rpx;\n}\r\n/* 外边距 */\n.margin-md {\r\n  margin: 24rpx;\n}\r\n/* 外边距顶部距离 */\n.margin-top-md {\r\n  margin-top: 24rpx;\n}\r\n/* 外边距底部距离 */\n.margin-bottom-md {\r\n  margin-bottom: 24rpx;\n}\r\n/* 外边距左边距离 */\n.margin-left-md {\r\n  margin-left: 24rpx;\n}\r\n/* 外边距右边距离 */\n.margin-right-md {\r\n  margin-right: 24rpx;\n}\r\n/* 水平方向外边距 */\n.margin-lr-md {\r\n  margin-left: 24rpx;\r\n  margin-right: 24rpx;\n}\r\n/* 左右上方向外边距 */\n.margin-lrt-md {\r\n  margin-left: 24rpx;\r\n  margin-right: 24rpx;\r\n  margin-top: 24rpx;\n}\r\n/* 左右下方向外边距 */\n.margin-lrb-md {\r\n  margin-left: 24rpx;\r\n  margin-right: 24rpx;\r\n  margin-bottom: 24rpx;\n}\r\n/* 垂直方向外边距 */\n.margin-tb-md {\r\n  margin-top: 24rpx;\r\n  margin-bottom: 24rpx;\n}\r\n/* 内边距*/\n.padding-md {\r\n  padding: 24rpx;\n}\r\n/* 内边距顶部距离 */\n.padding-top-md {\r\n  padding-top: 24rpx;\n}\r\n/* 内边距底部距离 */\n.padding-bottom-md {\r\n  padding-bottom: 24rpx;\n}\r\n/* 内边距左边距离 */\n.padding-left-md {\r\n  padding-left: 24rpx;\n}\r\n/* 内边距右边距离 */\n.padding-right-md {\r\n  padding-right: 24rpx;\n}\r\n/* 水平方向内边距 */\n.padding-lr-md {\r\n  padding-left: 24rpx;\r\n  padding-right: 24rpx;\n}\r\n/* 左右上方向内边距 */\n.padding-lrt-md {\r\n  padding-left: 24rpx;\r\n  padding-right: 24rpx;\r\n  padding-top: 24rpx;\n}\r\n/* 左右下方向内边距 */\n.padding-lrb-md {\r\n  padding-left: 24rpx;\r\n  padding-right: 24rpx;\r\n  padding-bottom: 24rpx;\n}\r\n/* 垂直方向内边距 */\n.padding-tb-md {\r\n  padding-top: 24rpx;\r\n  padding-bottom: 24rpx;\n}\r\n/* 外边距 */\n.margin-lg {\r\n  margin: 32rpx;\n}\r\n/* 外边距顶部距离 */\n.margin-top-lg {\r\n  margin-top: 32rpx;\n}\r\n/* 外边距底部距离 */\n.margin-bottom-lg {\r\n  margin-bottom: 32rpx;\n}\r\n/* 外边距左边距离 */\n.margin-left-lg {\r\n  margin-left: 32rpx;\n}\r\n/* 外边距右边距离 */\n.margin-right-lg {\r\n  margin-right: 32rpx;\n}\r\n/* 水平方向外边距 */\n.margin-lr-lg {\r\n  margin-left: 32rpx;\r\n  margin-right: 32rpx;\n}\r\n/* 左右上方向外边距 */\n.margin-lrt-lg {\r\n  margin-left: 32rpx;\r\n  margin-right: 32rpx;\r\n  margin-top: 32rpx;\n}\r\n/* 左右下方向外边距 */\n.margin-lrb-lg {\r\n  margin-left: 32rpx;\r\n  margin-right: 32rpx;\r\n  margin-bottom: 32rpx;\n}\r\n/* 垂直方向外边距 */\n.margin-tb-lg {\r\n  margin-top: 32rpx;\r\n  margin-bottom: 32rpx;\n}\r\n/* 内边距*/\n.padding-lg {\r\n  padding: 32rpx;\n}\r\n/* 内边距顶部距离 */\n.padding-top-lg {\r\n  padding-top: 32rpx;\n}\r\n/* 内边距底部距离 */\n.padding-bottom-lg {\r\n  padding-bottom: 32rpx;\n}\r\n/* 内边距左边距离 */\n.padding-left-lg {\r\n  padding-left: 32rpx;\n}\r\n/* 内边距右边距离 */\n.padding-right-lg {\r\n  padding-right: 32rpx;\n}\r\n/* 水平方向内边距 */\n.padding-lr-lg {\r\n  padding-left: 32rpx;\r\n  padding-right: 32rpx;\n}\r\n/* 左右上方向内边距 */\n.padding-lrt-lg {\r\n  padding-left: 32rpx;\r\n  padding-right: 32rpx;\r\n  padding-top: 32rpx;\n}\r\n/* 左右下方向内边距 */\n.padding-lrb-lg {\r\n  padding-left: 32rpx;\r\n  padding-right: 32rpx;\r\n  padding-bottom: 32rpx;\n}\r\n/* 垂直方向内边距 */\n.padding-tb-lg {\r\n  padding-top: 32rpx;\r\n  padding-bottom: 32rpx;\n}\r\n/* 外边距 */\n.margin-xl {\r\n  margin: 40rpx;\n}\r\n/* 外边距顶部距离 */\n.margin-top-xl {\r\n  margin-top: 40rpx;\n}\r\n/* 外边距底部距离 */\n.margin-bottom-xl {\r\n  margin-bottom: 40rpx;\n}\r\n/* 外边距左边距离 */\n.margin-left-xl {\r\n  margin-left: 40rpx;\n}\r\n/* 外边距右边距离 */\n.margin-right-xl {\r\n  margin-right: 40rpx;\n}\r\n/* 水平方向外边距 */\n.margin-lr-xl {\r\n  margin-left: 40rpx;\r\n  margin-right: 40rpx;\n}\r\n/* 左右上方向外边距 */\n.margin-lrt-xl {\r\n  margin-left: 40rpx;\r\n  margin-right: 40rpx;\r\n  margin-top: 40rpx;\n}\r\n/* 左右下方向外边距 */\n.margin-lrb-xl {\r\n  margin-left: 40rpx;\r\n  margin-right: 40rpx;\r\n  margin-bottom: 40rpx;\n}\r\n/* 垂直方向外边距 */\n.margin-tb-xl {\r\n  margin-top: 40rpx;\r\n  margin-bottom: 40rpx;\n}\r\n/* 内边距*/\n.padding-xl {\r\n  padding: 40rpx;\n}\r\n/* 内边距顶部距离 */\n.padding-top-xl {\r\n  padding-top: 40rpx;\n}\r\n/* 内边距底部距离 */\n.padding-bottom-xl {\r\n  padding-bottom: 40rpx;\n}\r\n/* 内边距左边距离 */\n.padding-left-xl {\r\n  padding-left: 40rpx;\n}\r\n/* 内边距右边距离 */\n.padding-right-xl {\r\n  padding-right: 40rpx;\n}\r\n/* 水平方向内边距 */\n.padding-lr-xl {\r\n  padding-left: 40rpx;\r\n  padding-right: 40rpx;\n}\r\n/* 左右上方向内边距 */\n.padding-lrt-xl {\r\n  padding-left: 40rpx;\r\n  padding-right: 40rpx;\r\n  padding-top: 40rpx;\n}\r\n/* 左右下方向内边距 */\n.padding-lrb-xl {\r\n  padding-left: 40rpx;\r\n  padding-right: 40rpx;\r\n  padding-bottom: 40rpx;\n}\r\n/* 垂直方向内边距 */\n.padding-tb-xl {\r\n  padding-top: 40rpx;\r\n  padding-bottom: 40rpx;\n}\r\n/* 外边距 */\n.margin-xxl {\r\n  margin: 56rpx;\n}\r\n/* 外边距顶部距离 */\n.margin-top-xxl {\r\n  margin-top: 56rpx;\n}\r\n/* 外边距底部距离 */\n.margin-bottom-xxl {\r\n  margin-bottom: 56rpx;\n}\r\n/* 外边距左边距离 */\n.margin-left-xxl {\r\n  margin-left: 56rpx;\n}\r\n/* 外边距右边距离 */\n.margin-right-xxl {\r\n  margin-right: 56rpx;\n}\r\n/* 水平方向外边距 */\n.margin-lr-xxl {\r\n  margin-left: 56rpx;\r\n  margin-right: 56rpx;\n}\r\n/* 左右上方向外边距 */\n.margin-lrt-xxl {\r\n  margin-left: 56rpx;\r\n  margin-right: 56rpx;\r\n  margin-top: 56rpx;\n}\r\n/* 左右下方向外边距 */\n.margin-lrb-xxl {\r\n  margin-left: 56rpx;\r\n  margin-right: 56rpx;\r\n  margin-bottom: 56rpx;\n}\r\n/* 垂直方向外边距 */\n.margin-tb-xxl {\r\n  margin-top: 56rpx;\r\n  margin-bottom: 56rpx;\n}\r\n/* 内边距*/\n.padding-xxl {\r\n  padding: 56rpx;\n}\r\n/* 内边距顶部距离 */\n.padding-top-xxl {\r\n  padding-top: 56rpx;\n}\r\n/* 内边距底部距离 */\n.padding-bottom-xxl {\r\n  padding-bottom: 56rpx;\n}\r\n/* 内边距左边距离 */\n.padding-left-xxl {\r\n  padding-left: 56rpx;\n}\r\n/* 内边距右边距离 */\n.padding-right-xxl {\r\n  padding-right: 56rpx;\n}\r\n/* 水平方向内边距 */\n.padding-lr-xxl {\r\n  padding-left: 56rpx;\r\n  padding-right: 56rpx;\n}\r\n/* 左右上方向内边距 */\n.padding-lrt-xxl {\r\n  padding-left: 56rpx;\r\n  padding-right: 56rpx;\r\n  padding-top: 56rpx;\n}\r\n/* 左右下方向内边距 */\n.padding-lrb-xxl {\r\n  padding-left: 56rpx;\r\n  padding-right: 56rpx;\r\n  padding-bottom: 56rpx;\n}\r\n/* 垂直方向内边距 */\n.padding-tb-xxl {\r\n  padding-top: 56rpx;\r\n  padding-bottom: 56rpx;\n}\r\n/* ====================\r\n\t\t文字尺寸\r\n ======================*/\n.text-xs {\r\n  font-size: 20rpx !important;\n}\n.text-sm {\r\n  font-size: 24rpx !important;\n}\n.text-md {\r\n  font-size: 28rpx !important;\n}\n.text-lg {\r\n  font-size: 32rpx !important;\n}\n.text-xl {\r\n  font-size: 48rpx !important;\n}\n.text-xxl {\r\n  font-size: 64rpx !important;\n}\r\n/* ====================\r\n\t\t圆角尺寸\r\n ======================*/\r\n/* 全角 */\n.radius-xs {\r\n  border-radius: 8rpx;\n}\r\n/* 左上角 */\n.radius-lt-xs {\r\n  border-top-left-radius: 8rpx;\n}\r\n/* 上左右角 */\n.radius-lrt-xs {\r\n  border-top-left-radius: 8rpx;\r\n  border-top-right-radius: 8rpx;\n}\r\n/* 右上角 */\n.radius-rt-xs {\r\n  border-top-right-radius: 8rpx;\n}\r\n/* 左下角 */\n.radius-rb-xs {\r\n  border-bottom-right-radius: 8rpx;\n}\r\n/* 下左右角 */\n.radius-lrb-xs {\r\n  border-bottom-right-radius: 8rpx;\r\n  border-bottom-left-radius: 8rpx;\n}\r\n/* 右下角 */\n.radius-lb-xs {\r\n  border-bottom-left-radius: 8rpx;\n}\r\n/* 全角 */\n.radius-sm {\r\n  border-radius: 12rpx;\n}\r\n/* 左上角 */\n.radius-lt-sm {\r\n  border-top-left-radius: 12rpx;\n}\r\n/* 上左右角 */\n.radius-lrt-sm {\r\n  border-top-left-radius: 12rpx;\r\n  border-top-right-radius: 12rpx;\n}\r\n/* 右上角 */\n.radius-rt-sm {\r\n  border-top-right-radius: 12rpx;\n}\r\n/* 左下角 */\n.radius-rb-sm {\r\n  border-bottom-right-radius: 12rpx;\n}\r\n/* 下左右角 */\n.radius-lrb-sm {\r\n  border-bottom-right-radius: 12rpx;\r\n  border-bottom-left-radius: 12rpx;\n}\r\n/* 右下角 */\n.radius-lb-sm {\r\n  border-bottom-left-radius: 12rpx;\n}\r\n/* 全角 */\n.radius-md {\r\n  border-radius: 16rpx;\n}\r\n/* 左上角 */\n.radius-lt-md {\r\n  border-top-left-radius: 16rpx;\n}\r\n/* 上左右角 */\n.radius-lrt-md {\r\n  border-top-left-radius: 16rpx;\r\n  border-top-right-radius: 16rpx;\n}\r\n/* 右上角 */\n.radius-rt-md {\r\n  border-top-right-radius: 16rpx;\n}\r\n/* 左下角 */\n.radius-rb-md {\r\n  border-bottom-right-radius: 16rpx;\n}\r\n/* 下左右角 */\n.radius-lrb-md {\r\n  border-bottom-right-radius: 16rpx;\r\n  border-bottom-left-radius: 16rpx;\n}\r\n/* 右下角 */\n.radius-lb-md {\r\n  border-bottom-left-radius: 16rpx;\n}\r\n/* 全角 */\n.radius-lg {\r\n  border-radius: 20rpx;\n}\r\n/* 左上角 */\n.radius-lt-lg {\r\n  border-top-left-radius: 20rpx;\n}\r\n/* 上左右角 */\n.radius-lrt-lg {\r\n  border-top-left-radius: 20rpx;\r\n  border-top-right-radius: 20rpx;\n}\r\n/* 右上角 */\n.radius-rt-lg {\r\n  border-top-right-radius: 20rpx;\n}\r\n/* 左下角 */\n.radius-rb-lg {\r\n  border-bottom-right-radius: 20rpx;\n}\r\n/* 下左右角 */\n.radius-lrb-lg {\r\n  border-bottom-right-radius: 20rpx;\r\n  border-bottom-left-radius: 20rpx;\n}\r\n/* 右下角 */\n.radius-lb-lg {\r\n  border-bottom-left-radius: 20rpx;\n}\r\n/* 全角 */\n.radius-xl {\r\n  border-radius: 100rpx;\n}\r\n/* 左上角 */\n.radius-lt-xl {\r\n  border-top-left-radius: 100rpx;\n}\r\n/* 上左右角 */\n.radius-lrt-xl {\r\n  border-top-left-radius: 100rpx;\r\n  border-top-right-radius: 100rpx;\n}\r\n/* 右上角 */\n.radius-rt-xl {\r\n  border-top-right-radius: 100rpx;\n}\r\n/* 左下角 */\n.radius-rb-xl {\r\n  border-bottom-right-radius: 100rpx;\n}\r\n/* 下左右角 */\n.radius-lrb-xl {\r\n  border-bottom-right-radius: 100rpx;\r\n  border-bottom-left-radius: 100rpx;\n}\r\n/* 右下角 */\n.radius-lb-xl {\r\n  border-bottom-left-radius: 100rpx;\n}\r\n/* 全角 */\n.radius-xxl {\r\n  border-radius: 200rpx;\n}\r\n/* 左上角 */\n.radius-lt-xxl {\r\n  border-top-left-radius: 200rpx;\n}\r\n/* 上左右角 */\n.radius-lrt-xxl {\r\n  border-top-left-radius: 200rpx;\r\n  border-top-right-radius: 200rpx;\n}\r\n/* 右上角 */\n.radius-rt-xxl {\r\n  border-top-right-radius: 200rpx;\n}\r\n/* 左下角 */\n.radius-rb-xxl {\r\n  border-bottom-right-radius: 200rpx;\n}\r\n/* 下左右角 */\n.radius-lrb-xxl {\r\n  border-bottom-right-radius: 200rpx;\r\n  border-bottom-left-radius: 200rpx;\n}\r\n/* 右下角 */\n.radius-lb-xxl {\r\n  border-bottom-left-radius: 200rpx;\n}\r\n/* ====================\r\n\t\t定位\r\n ======================*/\n.position-relative {\r\n  position: relative;\n}\r\n/* 相对定位 */\n.position-absolute {\r\n  position: absolute;\n}\r\n/* 绝对定位 */\n.position-absolute-lt {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\n}\r\n/* 左上角 */\n.position-absolute-rt {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\n}\r\n/* 右上角 */\n.position-absolute-lb {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\n}\r\n/* 左下角 */\n.position-absolute-rb {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\n}\r\n/* 右下角 */\r\n/* 保证元素在页面窗口中的对应位置显示 */\n.position-fixed {\r\n  position: fixed;\n}\r\n/* 指的是仅当元素滚动到页面之外时，元素会固定在页面窗口的顶部 */\n.position-sticky {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\n}\r\n/* =====================\r\n\t\t基础CLASS\r\n =======================*/\r\n/* 超出行数隐藏（ellipsis-{1-12}）*/\n.ellipsis-1 {\r\n  text-overflow: ellipsis;\r\n  lines: 1;\n}\n.ellipsis-2 {\r\n  text-overflow: ellipsis;\r\n  lines: 2;\n}\n.ellipsis-3 {\r\n  text-overflow: ellipsis;\r\n  lines: 3;\n}\n.ellipsis-4 {\r\n  text-overflow: ellipsis;\r\n  lines: 4;\n}\n.ellipsis-5 {\r\n  text-overflow: ellipsis;\r\n  lines: 5;\n}\n.ellipsis-6 {\r\n  text-overflow: ellipsis;\r\n  lines: 6;\n}\n.ellipsis-7 {\r\n  text-overflow: ellipsis;\r\n  lines: 7;\n}\n.ellipsis-8 {\r\n  text-overflow: ellipsis;\r\n  lines: 8;\n}\n.ellipsis-9 {\r\n  text-overflow: ellipsis;\r\n  lines: 9;\n}\n.ellipsis-10 {\r\n  text-overflow: ellipsis;\r\n  lines: 10;\n}\n.ellipsis-11 {\r\n  text-overflow: ellipsis;\r\n  lines: 11;\n}\n.ellipsis-12 {\r\n  text-overflow: ellipsis;\r\n  lines: 12;\n}\n.ellipsis-13 {\r\n  text-overflow: ellipsis;\r\n  lines: 13;\n}\r\n/* flex-{1~12} */\n.flex-1 {\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1;\r\n          flex: 1;\n}\n.flex-2 {\r\n  -webkit-box-flex: 2;\r\n  -webkit-flex: 2;\r\n          flex: 2;\n}\n.flex-3 {\r\n  -webkit-box-flex: 3;\r\n  -webkit-flex: 3;\r\n          flex: 3;\n}\n.flex-4 {\r\n  -webkit-box-flex: 4;\r\n  -webkit-flex: 4;\r\n          flex: 4;\n}\n.flex-5 {\r\n  -webkit-box-flex: 5;\r\n  -webkit-flex: 5;\r\n          flex: 5;\n}\n.flex-6 {\r\n  -webkit-box-flex: 6;\r\n  -webkit-flex: 6;\r\n          flex: 6;\n}\n.flex-7 {\r\n  -webkit-box-flex: 7;\r\n  -webkit-flex: 7;\r\n          flex: 7;\n}\n.flex-8 {\r\n  -webkit-box-flex: 8;\r\n  -webkit-flex: 8;\r\n          flex: 8;\n}\n.flex-9 {\r\n  -webkit-box-flex: 9;\r\n  -webkit-flex: 9;\r\n          flex: 9;\n}\n.flex-10 {\r\n  -webkit-box-flex: 10;\r\n  -webkit-flex: 10;\r\n          flex: 10;\n}\n.flex-11 {\r\n  -webkit-box-flex: 11;\r\n  -webkit-flex: 11;\r\n          flex: 11;\n}\n.flex-12 {\r\n  -webkit-box-flex: 12;\r\n  -webkit-flex: 12;\r\n          flex: 12;\n}\n.flex-13 {\r\n  -webkit-box-flex: 13;\r\n  -webkit-flex: 13;\r\n          flex: 13;\n}\r\n/* 文字位置*/\n.text-center {\r\n  text-align: center;\n}\n.text-left {\r\n  text-align: left;\n}\n.text-right {\r\n  text-align: right;\n}\n.text-bold {\r\n  font-weight: bold;\n}\n.text-decoration {\r\n  text-decoration: line-through;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 7);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /\b([+-]?\d+(\.\d+)?)[r|u]px\b/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
  return css.replace(/\{[\s\S]+?\}/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 7 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);