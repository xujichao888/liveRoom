"use weex:vue";
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 267);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!***************************************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/main.js?{"type":"appStyle"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 15:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!****************************************************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/App.vue?vue&type=style&index=0&lang=scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 267:
/*!***************************************************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/main.js?{"page":"pages%2Ftest%2Findex"} ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_test_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/test/index.nvue?mpType=page */ 268);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_test_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_test_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/test/index'\n        _pages_test_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_test_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMEVBQUc7QUFDWCxRQUFRLDBFQUFHO0FBQ1gsUUFBUSwwRUFBRztBQUNYLGdCQUFnQiwwRUFBRyIsImZpbGUiOiIyNjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL3Rlc3QvaW5kZXgubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy90ZXN0L2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///267\n");

/***/ }),

/***/ 268:
/*!*********************************************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/pages/test/index.nvue?mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_11596e60_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=11596e60&scoped=true&mpType=page */ 269);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 271);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=11596e60&scoped=true&lang=css&mpType=page */ 273).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=11596e60&scoped=true&lang=css&mpType=page */ 273).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_11596e60_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_11596e60_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"11596e60\",\n  \"006ad23e\",\n  false,\n  _index_nvue_vue_type_template_id_11596e60_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/test/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJGQUFrRjtBQUN0SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkZBQWtGO0FBQzNJOztBQUVBOztBQUVBO0FBQ2dLO0FBQ2hLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTE1OTZlNjAmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTExNTk2ZTYwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMTU5NmU2MCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjExNTk2ZTYwXCIsXG4gIFwiMDA2YWQyM2VcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGVzdC9pbmRleC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///268\n");

/***/ }),

/***/ 269:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/pages/test/index.nvue?vue&type=template&id=11596e60&scoped=true&mpType=page ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_11596e60_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=11596e60&scoped=true&mpType=page */ 270);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_11596e60_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_11596e60_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_11596e60_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_11596e60_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 270:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/admin/Desktop/liveRoomByNative/pages/test/index.nvue?vue&type=template&id=11596e60&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", [
        _c("view", { staticClass: ["user1"], on: { click: _vm.user1Nav } }, [
          _c("u-text", [_vm._v("user1")])
        ]),
        _c("view", { staticClass: ["user2"], on: { click: _vm.user2Nav } }, [
          _c("u-text", [_vm._v("user2")])
        ])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 271:
/*!*********************************************************************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/pages/test/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 272);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLHFkQUFHLEVBQUMiLCJmaWxlIjoiMjcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///271\n");

/***/ }),

/***/ 272:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/admin/Desktop/liveRoomByNative/pages/test/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  onLoad: function onLoad() {\n\n  },\n  methods: {\n    user1Nav: function user1Nav() {\n      uni.navigateTo({\n        url: \"/pages/index/index?msg=059b4b9b967bb4ccf9bdb3f5d18fbcba4920b7b6016380d0ccb76fd2f13d753b5\" });\n\n    },\n    user2Nav: function user2Nav() {\n      uni.navigateTo({\n        url: \"/pages/index/index?msg=627fca9561bba7b269e7a88ed8b909e9a825e381099f7b42bab314be03aeff885\" });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGVzdC9pbmRleC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0EsUUFEQSxvQkFDQTs7QUFFQSxHQUhBO0FBSUE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQSx1R0FEQTs7QUFHQSxLQUxBO0FBTUEsWUFOQSxzQkFNQTtBQUNBO0FBQ0EsdUdBREE7O0FBR0EsS0FWQSxFQUpBLEUiLCJmaWxlIjoiMjcyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidXNlcjFcIiBAY2xpY2s9XCJ1c2VyMU5hdlwiPlxyXG5cdFx0XHQ8dGV4dD51c2VyMTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidXNlcjJcIiBAY2xpY2s9XCJ1c2VyMk5hdlwiPlxyXG5cdFx0XHQ8dGV4dD51c2VyMjwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdFxyXG5cdFx0fSxcblx0XHRtZXRob2RzOntcclxuXHRcdFx0dXNlcjFOYXYoKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6XCIvcGFnZXMvaW5kZXgvaW5kZXg/bXNnPTA1OWI0YjliOTY3YmI0Y2NmOWJkYjNmNWQxOGZiY2JhNDkyMGI3YjYwMTYzODBkMGNjYjc2ZmQyZjEzZDc1M2I1XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1c2VyMk5hdigpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDpcIi9wYWdlcy9pbmRleC9pbmRleD9tc2c9NjI3ZmNhOTU2MWJiYTdiMjY5ZTdhODhlZDhiOTA5ZTlhODI1ZTM4MTA5OWY3YjQyYmFiMzE0YmUwM2FlZmY4ODVcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQudXNlcjF7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjJBQjY0O1xyXG5cdFx0bWFyZ2luLXRvcDogMTAwcnB4O1xyXG5cdH1cclxuXHQudXNlcjJ7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QjVDO1xyXG5cdH1cclxuXHQudXNlcjN7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QjVDO1xyXG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///272\n");

/***/ }),

/***/ 273:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/admin/Desktop/liveRoomByNative/pages/test/index.nvue?vue&type=style&index=0&id=11596e60&scoped=true&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_11596e60_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&id=11596e60&scoped=true&lang=css&mpType=page */ 274);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_11596e60_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_11596e60_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_11596e60_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_11596e60_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_11596e60_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 274:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/admin/Desktop/liveRoomByNative/pages/test/index.nvue?vue&type=style&index=0&id=11596e60&scoped=true&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "user1": {
    "width": "100rpx",
    "height": "100rpx",
    "backgroundColor": "#F2AB64",
    "marginTop": "100rpx"
  },
  "user2": {
    "width": "100rpx",
    "height": "100rpx",
    "backgroundColor": "#005B5C"
  },
  "user3": {
    "width": "100rpx",
    "height": "100rpx",
    "backgroundColor": "#005B5C"
  }
}

/***/ }),

/***/ 3:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/admin/Desktop/liveRoomByNative/App.vue?vue&type=style&index=0&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "row-wrap": {
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "row-reverse-wrap": {
    "flexDirection": "row-reverse",
    "flexWrap": "wrap"
  },
  "row-nowrap": {
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "row-reverse-nowrap": {
    "flexDirection": "row-reverse",
    "flexWrap": "nowrap"
  },
  "row-start": {
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  "row-end": {
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "row-center": {
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "row-space-between": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "row-space-around": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "row-middle-center": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "row-middle-around": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-around"
  },
  "row-middle-between": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "row-top": {
    "flexDirection": "row",
    "alignItems": "flex-start"
  },
  "row-middle": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "row-bottom": {
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "column-column": {
    "flexDirection": "column"
  },
  "column-reverse": {
    "flexDirection": "column-reverse"
  },
  "column-top": {
    "justifyContent": "flex-start"
  },
  "column-bottom": {
    "justifyContent": "flex-end"
  },
  "column-middle": {
    "justifyContent": "center"
  },
  "column-start": {
    "alignItems": "flex-start"
  },
  "column-center": {
    "alignItems": "center"
  },
  "column-end": {
    "alignItems": "flex-end"
  },
  "column-middle-center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "dIcon": {
    "fontFamily": "dIcon"
  },
  "border": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#DCDFE6"
  },
  "border-left": {
    "borderLeftWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#DCDFE6"
  },
  "border-right": {
    "borderRightWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#DCDFE6"
  },
  "border-top": {
    "borderTopWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#DCDFE6"
  },
  "border-bottom": {
    "borderBottomWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#DCDFE6"
  },
  "border-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#E4E7ED"
  },
  "border-deep-left": {
    "borderLeftWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#E4E7ED"
  },
  "border-deep-right": {
    "borderRightWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#E4E7ED"
  },
  "border-deep-top": {
    "borderTopWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#E4E7ED"
  },
  "border-deep-bottom": {
    "borderBottomWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#E4E7ED"
  },
  "border-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#EDEEF5"
  },
  "border-shallow-left": {
    "borderLeftWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#EDEEF5"
  },
  "border-shallow-right": {
    "borderRightWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#EDEEF5"
  },
  "border-shallow-top": {
    "borderTopWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#EDEEF5"
  },
  "border-shallow-bottom": {
    "borderBottomWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#EDEEF5"
  },
  "border-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#F2F6FC"
  },
  "border-light-left": {
    "borderLeftWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#F2F6FC"
  },
  "border-light-right": {
    "borderRightWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#F2F6FC"
  },
  "border-light-top": {
    "borderTopWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#F2F6FC"
  },
  "border-light-bottom": {
    "borderBottomWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#F2F6FC"
  },
  "border-theme": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#409EFF"
  },
  "border-theme-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#3967FF"
  },
  "border-theme-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#BBCDFF"
  },
  "border-theme-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#E7EDFF"
  },
  "border-black": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#000000"
  },
  "border-black-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#333333"
  },
  "border-black-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#666666"
  },
  "border-black-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#999999"
  },
  "border-white": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FFFFFF"
  },
  "border-white-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#F8F8F8"
  },
  "border-white-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#F4F4F4"
  },
  "border-white-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#F1F1F1"
  },
  "border-gray": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#999999"
  },
  "border-gray-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#828282"
  },
  "border-gray-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#CDCDCD"
  },
  "border-gray-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#F4F4F4"
  },
  "border-red": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FA3534"
  },
  "border-red-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#DD6161"
  },
  "border-red-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FAB6B6"
  },
  "border-red-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FEF0F0"
  },
  "border-orange": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FFA500"
  },
  "border-orange-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FF8C00"
  },
  "border-orange-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FFDA9D"
  },
  "border-orange-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FFEBCD"
  },
  "border-yellow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FFF259"
  },
  "border-yellow-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FFD700"
  },
  "border-yellow-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FAFAD2"
  },
  "border-yellow-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#FFFFED"
  },
  "border-green": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#19BE6B"
  },
  "border-green-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#18B566"
  },
  "border-green-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#71D5A1"
  },
  "border-green-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#DBF1E1"
  },
  "border-cyan": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#63FFFA"
  },
  "border-cyan-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#00FFFF"
  },
  "border-cyan-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#BBFFFD"
  },
  "border-cyan-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#E4FFFD"
  },
  "border-blue": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#409EFF"
  },
  "border-blue-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#3967FF"
  },
  "border-blue-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#BBCDFF"
  },
  "border-blue-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#E7EDFF"
  },
  "border-purple": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#BA55D3"
  },
  "border-purple-deep": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#BF3EFF"
  },
  "border-purple-shallow": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#E0AAFF"
  },
  "border-purple-light": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#EED2EE"
  },
  "bg-theme": {
    "backgroundColor": "#409EFF"
  },
  "bg-theme-deep": {
    "backgroundColor": "#3967FF"
  },
  "bg-theme-shallow": {
    "backgroundColor": "#BBCDFF"
  },
  "bg-theme-light": {
    "backgroundColor": "#E7EDFF"
  },
  "bg-black": {
    "backgroundColor": "#000000"
  },
  "bg-black-deep": {
    "backgroundColor": "#333333"
  },
  "bg-black-shallow": {
    "backgroundColor": "#666666"
  },
  "bg-black-light": {
    "backgroundColor": "#999999"
  },
  "bg-white": {
    "backgroundColor": "#FFFFFF"
  },
  "bg-white-deep": {
    "backgroundColor": "#F8F8F8"
  },
  "bg-white-shallow": {
    "backgroundColor": "#F4F4F4"
  },
  "bg-white-light": {
    "backgroundColor": "#F1F1F1"
  },
  "bg-gray": {
    "backgroundColor": "#999999"
  },
  "bg-gray-deep": {
    "backgroundColor": "#828282"
  },
  "bg-gray-shallow": {
    "backgroundColor": "#CDCDCD"
  },
  "bg-gray-light": {
    "backgroundColor": "#F4F4F4"
  },
  "bg-red": {
    "backgroundColor": "#FA3534"
  },
  "bg-red-deep": {
    "backgroundColor": "#DD6161"
  },
  "bg-red-shallow": {
    "backgroundColor": "#FAB6B6"
  },
  "bg-red-light": {
    "backgroundColor": "#FEF0F0"
  },
  "bg-orange": {
    "backgroundColor": "#FFA500"
  },
  "bg-orange-deep": {
    "backgroundColor": "#FF8C00"
  },
  "bg-orange-shallow": {
    "backgroundColor": "#FFDA9D"
  },
  "bg-orange-light": {
    "backgroundColor": "#FFEBCD"
  },
  "bg-yellow": {
    "backgroundColor": "#FFF259"
  },
  "bg-yellow-deep": {
    "backgroundColor": "#FFD700"
  },
  "bg-yellow-shallow": {
    "backgroundColor": "#FAFAD2"
  },
  "bg-yellow-light": {
    "backgroundColor": "#FFFFED"
  },
  "bg-green": {
    "backgroundColor": "#19BE6B"
  },
  "bg-green-deep": {
    "backgroundColor": "#18B566"
  },
  "bg-green-shallow": {
    "backgroundColor": "#71D5A1"
  },
  "bg-green-light": {
    "backgroundColor": "#DBF1E1"
  },
  "bg-cyan": {
    "backgroundColor": "#63FFFA"
  },
  "bg-cyan-deep": {
    "backgroundColor": "#00FFFF"
  },
  "bg-cyan-shallow": {
    "backgroundColor": "#BBFFFD"
  },
  "bg-cyan-light": {
    "backgroundColor": "#E4FFFD"
  },
  "bg-blue": {
    "backgroundColor": "#409EFF"
  },
  "bg-blue-deep": {
    "backgroundColor": "#3967FF"
  },
  "bg-blue-shallow": {
    "backgroundColor": "#BBCDFF"
  },
  "bg-blue-light": {
    "backgroundColor": "#E7EDFF"
  },
  "bg-purple": {
    "backgroundColor": "#BA55D3"
  },
  "bg-purple-deep": {
    "backgroundColor": "#BF3EFF"
  },
  "bg-purple-shallow": {
    "backgroundColor": "#E0AAFF"
  },
  "bg-purple-light": {
    "backgroundColor": "#EED2EE"
  },
  "color-main": {
    "color": "#333333"
  },
  "color-content": {
    "color": "#666666"
  },
  "color-tips": {
    "color": "#999999"
  },
  "color-light": {
    "color": "#CDCDCD"
  },
  "color-theme": {
    "color": "#409EFF"
  },
  "color-theme-deep": {
    "color": "#3967FF"
  },
  "color-theme-shallow": {
    "color": "#BBCDFF"
  },
  "color-theme-light": {
    "color": "#E7EDFF"
  },
  "color-black": {
    "color": "#000000"
  },
  "color-black-deep": {
    "color": "#333333"
  },
  "color-black-shallow": {
    "color": "#666666"
  },
  "color-black-light": {
    "color": "#999999"
  },
  "color-white": {
    "color": "#FFFFFF"
  },
  "color-white-deep": {
    "color": "#F8F8F8"
  },
  "color-white-shallow": {
    "color": "#F4F4F4"
  },
  "color-white-light": {
    "color": "#F1F1F1"
  },
  "color-gray": {
    "color": "#999999"
  },
  "color-gray-deep": {
    "color": "#828282"
  },
  "color-gray-shallow": {
    "color": "#CDCDCD"
  },
  "color-gray-light": {
    "color": "#F4F4F4"
  },
  "color-red": {
    "color": "#FA3534"
  },
  "color-red-deep": {
    "color": "#DD6161"
  },
  "color-red-shallow": {
    "color": "#FAB6B6"
  },
  "color-red-light": {
    "color": "#FEF0F0"
  },
  "color-orange": {
    "color": "#FFA500"
  },
  "color-orange-deep": {
    "color": "#FF8C00"
  },
  "color-orange-shallow": {
    "color": "#FFDA9D"
  },
  "color-orange-light": {
    "color": "#FFEBCD"
  },
  "color-yellow": {
    "color": "#FFF259"
  },
  "color-yellow-deep": {
    "color": "#FFD700"
  },
  "color-yellow-shallow": {
    "color": "#FAFAD2"
  },
  "color-yellow-light": {
    "color": "#FFFFED"
  },
  "color-green": {
    "color": "#19BE6B"
  },
  "color-green-deep": {
    "color": "#18B566"
  },
  "color-green-shallow": {
    "color": "#71D5A1"
  },
  "color-green-light": {
    "color": "#DBF1E1"
  },
  "color-cyan": {
    "color": "#63FFFA"
  },
  "color-cyan-deep": {
    "color": "#00FFFF"
  },
  "color-cyan-shallow": {
    "color": "#BBFFFD"
  },
  "color-cyan-light": {
    "color": "#E4FFFD"
  },
  "color-blue": {
    "color": "#409EFF"
  },
  "color-blue-deep": {
    "color": "#3967FF"
  },
  "color-blue-shallow": {
    "color": "#BBCDFF"
  },
  "color-blue-light": {
    "color": "#E7EDFF"
  },
  "color-purple": {
    "color": "#BA55D3"
  },
  "color-purple-deep": {
    "color": "#BF3EFF"
  },
  "color-purple-shallow": {
    "color": "#E0AAFF"
  },
  "color-purple-light": {
    "color": "#EED2EE"
  },
  "margin-xs": {
    "marginTop": "8rpx",
    "marginRight": "8rpx",
    "marginBottom": "8rpx",
    "marginLeft": "8rpx"
  },
  "margin-top-xs": {
    "marginTop": "8rpx"
  },
  "margin-bottom-xs": {
    "marginBottom": "8rpx"
  },
  "margin-left-xs": {
    "marginLeft": "8rpx"
  },
  "margin-right-xs": {
    "marginRight": "8rpx"
  },
  "margin-lr-xs": {
    "marginLeft": "8rpx",
    "marginRight": "8rpx"
  },
  "margin-lrt-xs": {
    "marginLeft": "8rpx",
    "marginRight": "8rpx",
    "marginTop": "8rpx"
  },
  "margin-lrb-xs": {
    "marginLeft": "8rpx",
    "marginRight": "8rpx",
    "marginBottom": "8rpx"
  },
  "margin-tb-xs": {
    "marginTop": "8rpx",
    "marginBottom": "8rpx"
  },
  "padding-xs": {
    "paddingTop": "8rpx",
    "paddingRight": "8rpx",
    "paddingBottom": "8rpx",
    "paddingLeft": "8rpx"
  },
  "padding-top-xs": {
    "paddingTop": "8rpx"
  },
  "padding-bottom-xs": {
    "paddingBottom": "8rpx"
  },
  "padding-left-xs": {
    "paddingLeft": "8rpx"
  },
  "padding-right-xs": {
    "paddingRight": "8rpx"
  },
  "padding-lr-xs": {
    "paddingLeft": "8rpx",
    "paddingRight": "8rpx"
  },
  "padding-lrt-xs": {
    "paddingLeft": "8rpx",
    "paddingRight": "8rpx",
    "paddingTop": "8rpx"
  },
  "padding-lrb-xs": {
    "paddingLeft": "8rpx",
    "paddingRight": "8rpx",
    "paddingBottom": "8rpx"
  },
  "padding-tb-xs": {
    "paddingTop": "8rpx",
    "paddingBottom": "8rpx"
  },
  "margin-sm": {
    "marginTop": "16rpx",
    "marginRight": "16rpx",
    "marginBottom": "16rpx",
    "marginLeft": "16rpx"
  },
  "margin-top-sm": {
    "marginTop": "16rpx"
  },
  "margin-bottom-sm": {
    "marginBottom": "16rpx"
  },
  "margin-left-sm": {
    "marginLeft": "16rpx"
  },
  "margin-right-sm": {
    "marginRight": "16rpx"
  },
  "margin-lr-sm": {
    "marginLeft": "16rpx",
    "marginRight": "16rpx"
  },
  "margin-lrt-sm": {
    "marginLeft": "16rpx",
    "marginRight": "16rpx",
    "marginTop": "16rpx"
  },
  "margin-lrb-sm": {
    "marginLeft": "16rpx",
    "marginRight": "16rpx",
    "marginBottom": "16rpx"
  },
  "margin-tb-sm": {
    "marginTop": "16rpx",
    "marginBottom": "16rpx"
  },
  "padding-sm": {
    "paddingTop": "16rpx",
    "paddingRight": "16rpx",
    "paddingBottom": "16rpx",
    "paddingLeft": "16rpx"
  },
  "padding-top-sm": {
    "paddingTop": "16rpx"
  },
  "padding-bottom-sm": {
    "paddingBottom": "16rpx"
  },
  "padding-left-sm": {
    "paddingLeft": "16rpx"
  },
  "padding-right-sm": {
    "paddingRight": "16rpx"
  },
  "padding-lr-sm": {
    "paddingLeft": "16rpx",
    "paddingRight": "16rpx"
  },
  "padding-lrt-sm": {
    "paddingLeft": "16rpx",
    "paddingRight": "16rpx",
    "paddingTop": "16rpx"
  },
  "padding-lrb-sm": {
    "paddingLeft": "16rpx",
    "paddingRight": "16rpx",
    "paddingBottom": "16rpx"
  },
  "padding-tb-sm": {
    "paddingTop": "16rpx",
    "paddingBottom": "16rpx"
  },
  "margin-md": {
    "marginTop": "24rpx",
    "marginRight": "24rpx",
    "marginBottom": "24rpx",
    "marginLeft": "24rpx"
  },
  "margin-top-md": {
    "marginTop": "24rpx"
  },
  "margin-bottom-md": {
    "marginBottom": "24rpx"
  },
  "margin-left-md": {
    "marginLeft": "24rpx"
  },
  "margin-right-md": {
    "marginRight": "24rpx"
  },
  "margin-lr-md": {
    "marginLeft": "24rpx",
    "marginRight": "24rpx"
  },
  "margin-lrt-md": {
    "marginLeft": "24rpx",
    "marginRight": "24rpx",
    "marginTop": "24rpx"
  },
  "margin-lrb-md": {
    "marginLeft": "24rpx",
    "marginRight": "24rpx",
    "marginBottom": "24rpx"
  },
  "margin-tb-md": {
    "marginTop": "24rpx",
    "marginBottom": "24rpx"
  },
  "padding-md": {
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx"
  },
  "padding-top-md": {
    "paddingTop": "24rpx"
  },
  "padding-bottom-md": {
    "paddingBottom": "24rpx"
  },
  "padding-left-md": {
    "paddingLeft": "24rpx"
  },
  "padding-right-md": {
    "paddingRight": "24rpx"
  },
  "padding-lr-md": {
    "paddingLeft": "24rpx",
    "paddingRight": "24rpx"
  },
  "padding-lrt-md": {
    "paddingLeft": "24rpx",
    "paddingRight": "24rpx",
    "paddingTop": "24rpx"
  },
  "padding-lrb-md": {
    "paddingLeft": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx"
  },
  "padding-tb-md": {
    "paddingTop": "24rpx",
    "paddingBottom": "24rpx"
  },
  "margin-lg": {
    "marginTop": "32rpx",
    "marginRight": "32rpx",
    "marginBottom": "32rpx",
    "marginLeft": "32rpx"
  },
  "margin-top-lg": {
    "marginTop": "32rpx"
  },
  "margin-bottom-lg": {
    "marginBottom": "32rpx"
  },
  "margin-left-lg": {
    "marginLeft": "32rpx"
  },
  "margin-right-lg": {
    "marginRight": "32rpx"
  },
  "margin-lr-lg": {
    "marginLeft": "32rpx",
    "marginRight": "32rpx"
  },
  "margin-lrt-lg": {
    "marginLeft": "32rpx",
    "marginRight": "32rpx",
    "marginTop": "32rpx"
  },
  "margin-lrb-lg": {
    "marginLeft": "32rpx",
    "marginRight": "32rpx",
    "marginBottom": "32rpx"
  },
  "margin-tb-lg": {
    "marginTop": "32rpx",
    "marginBottom": "32rpx"
  },
  "padding-lg": {
    "paddingTop": "32rpx",
    "paddingRight": "32rpx",
    "paddingBottom": "32rpx",
    "paddingLeft": "32rpx"
  },
  "padding-top-lg": {
    "paddingTop": "32rpx"
  },
  "padding-bottom-lg": {
    "paddingBottom": "32rpx"
  },
  "padding-left-lg": {
    "paddingLeft": "32rpx"
  },
  "padding-right-lg": {
    "paddingRight": "32rpx"
  },
  "padding-lr-lg": {
    "paddingLeft": "32rpx",
    "paddingRight": "32rpx"
  },
  "padding-lrt-lg": {
    "paddingLeft": "32rpx",
    "paddingRight": "32rpx",
    "paddingTop": "32rpx"
  },
  "padding-lrb-lg": {
    "paddingLeft": "32rpx",
    "paddingRight": "32rpx",
    "paddingBottom": "32rpx"
  },
  "padding-tb-lg": {
    "paddingTop": "32rpx",
    "paddingBottom": "32rpx"
  },
  "margin-xl": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "margin-top-xl": {
    "marginTop": "40rpx"
  },
  "margin-bottom-xl": {
    "marginBottom": "40rpx"
  },
  "margin-left-xl": {
    "marginLeft": "40rpx"
  },
  "margin-right-xl": {
    "marginRight": "40rpx"
  },
  "margin-lr-xl": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "margin-lrt-xl": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx",
    "marginTop": "40rpx"
  },
  "margin-lrb-xl": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx"
  },
  "margin-tb-xl": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "padding-xl": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "padding-top-xl": {
    "paddingTop": "40rpx"
  },
  "padding-bottom-xl": {
    "paddingBottom": "40rpx"
  },
  "padding-left-xl": {
    "paddingLeft": "40rpx"
  },
  "padding-right-xl": {
    "paddingRight": "40rpx"
  },
  "padding-lr-xl": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "padding-lrt-xl": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx",
    "paddingTop": "40rpx"
  },
  "padding-lrb-xl": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx"
  },
  "padding-tb-xl": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "margin-xxl": {
    "marginTop": "56rpx",
    "marginRight": "56rpx",
    "marginBottom": "56rpx",
    "marginLeft": "56rpx"
  },
  "margin-top-xxl": {
    "marginTop": "56rpx"
  },
  "margin-bottom-xxl": {
    "marginBottom": "56rpx"
  },
  "margin-left-xxl": {
    "marginLeft": "56rpx"
  },
  "margin-right-xxl": {
    "marginRight": "56rpx"
  },
  "margin-lr-xxl": {
    "marginLeft": "56rpx",
    "marginRight": "56rpx"
  },
  "margin-lrt-xxl": {
    "marginLeft": "56rpx",
    "marginRight": "56rpx",
    "marginTop": "56rpx"
  },
  "margin-lrb-xxl": {
    "marginLeft": "56rpx",
    "marginRight": "56rpx",
    "marginBottom": "56rpx"
  },
  "margin-tb-xxl": {
    "marginTop": "56rpx",
    "marginBottom": "56rpx"
  },
  "padding-xxl": {
    "paddingTop": "56rpx",
    "paddingRight": "56rpx",
    "paddingBottom": "56rpx",
    "paddingLeft": "56rpx"
  },
  "padding-top-xxl": {
    "paddingTop": "56rpx"
  },
  "padding-bottom-xxl": {
    "paddingBottom": "56rpx"
  },
  "padding-left-xxl": {
    "paddingLeft": "56rpx"
  },
  "padding-right-xxl": {
    "paddingRight": "56rpx"
  },
  "padding-lr-xxl": {
    "paddingLeft": "56rpx",
    "paddingRight": "56rpx"
  },
  "padding-lrt-xxl": {
    "paddingLeft": "56rpx",
    "paddingRight": "56rpx",
    "paddingTop": "56rpx"
  },
  "padding-lrb-xxl": {
    "paddingLeft": "56rpx",
    "paddingRight": "56rpx",
    "paddingBottom": "56rpx"
  },
  "padding-tb-xxl": {
    "paddingTop": "56rpx",
    "paddingBottom": "56rpx"
  },
  "text-xs": {
    "fontSize": "20rpx"
  },
  "text-sm": {
    "fontSize": "24rpx"
  },
  "text-md": {
    "fontSize": "28rpx"
  },
  "text-lg": {
    "fontSize": "32rpx"
  },
  "text-xl": {
    "fontSize": "48rpx"
  },
  "text-xxl": {
    "fontSize": "64rpx"
  },
  "radius-xs": {
    "borderRadius": "8rpx"
  },
  "radius-lt-xs": {
    "borderTopLeftRadius": "8rpx"
  },
  "radius-lrt-xs": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "radius-rt-xs": {
    "borderTopRightRadius": "8rpx"
  },
  "radius-rb-xs": {
    "borderBottomRightRadius": "8rpx"
  },
  "radius-lrb-xs": {
    "borderBottomRightRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "radius-lb-xs": {
    "borderBottomLeftRadius": "8rpx"
  },
  "radius-sm": {
    "borderRadius": "12rpx"
  },
  "radius-lt-sm": {
    "borderTopLeftRadius": "12rpx"
  },
  "radius-lrt-sm": {
    "borderTopLeftRadius": "12rpx",
    "borderTopRightRadius": "12rpx"
  },
  "radius-rt-sm": {
    "borderTopRightRadius": "12rpx"
  },
  "radius-rb-sm": {
    "borderBottomRightRadius": "12rpx"
  },
  "radius-lrb-sm": {
    "borderBottomRightRadius": "12rpx",
    "borderBottomLeftRadius": "12rpx"
  },
  "radius-lb-sm": {
    "borderBottomLeftRadius": "12rpx"
  },
  "radius-md": {
    "borderRadius": "16rpx"
  },
  "radius-lt-md": {
    "borderTopLeftRadius": "16rpx"
  },
  "radius-lrt-md": {
    "borderTopLeftRadius": "16rpx",
    "borderTopRightRadius": "16rpx"
  },
  "radius-rt-md": {
    "borderTopRightRadius": "16rpx"
  },
  "radius-rb-md": {
    "borderBottomRightRadius": "16rpx"
  },
  "radius-lrb-md": {
    "borderBottomRightRadius": "16rpx",
    "borderBottomLeftRadius": "16rpx"
  },
  "radius-lb-md": {
    "borderBottomLeftRadius": "16rpx"
  },
  "radius-lg": {
    "borderRadius": "20rpx"
  },
  "radius-lt-lg": {
    "borderTopLeftRadius": "20rpx"
  },
  "radius-lrt-lg": {
    "borderTopLeftRadius": "20rpx",
    "borderTopRightRadius": "20rpx"
  },
  "radius-rt-lg": {
    "borderTopRightRadius": "20rpx"
  },
  "radius-rb-lg": {
    "borderBottomRightRadius": "20rpx"
  },
  "radius-lrb-lg": {
    "borderBottomRightRadius": "20rpx",
    "borderBottomLeftRadius": "20rpx"
  },
  "radius-lb-lg": {
    "borderBottomLeftRadius": "20rpx"
  },
  "radius-xl": {
    "borderRadius": "100rpx"
  },
  "radius-lt-xl": {
    "borderTopLeftRadius": "100rpx"
  },
  "radius-lrt-xl": {
    "borderTopLeftRadius": "100rpx",
    "borderTopRightRadius": "100rpx"
  },
  "radius-rt-xl": {
    "borderTopRightRadius": "100rpx"
  },
  "radius-rb-xl": {
    "borderBottomRightRadius": "100rpx"
  },
  "radius-lrb-xl": {
    "borderBottomRightRadius": "100rpx",
    "borderBottomLeftRadius": "100rpx"
  },
  "radius-lb-xl": {
    "borderBottomLeftRadius": "100rpx"
  },
  "radius-xxl": {
    "borderRadius": "200rpx"
  },
  "radius-lt-xxl": {
    "borderTopLeftRadius": "200rpx"
  },
  "radius-lrt-xxl": {
    "borderTopLeftRadius": "200rpx",
    "borderTopRightRadius": "200rpx"
  },
  "radius-rt-xxl": {
    "borderTopRightRadius": "200rpx"
  },
  "radius-rb-xxl": {
    "borderBottomRightRadius": "200rpx"
  },
  "radius-lrb-xxl": {
    "borderBottomRightRadius": "200rpx",
    "borderBottomLeftRadius": "200rpx"
  },
  "radius-lb-xxl": {
    "borderBottomLeftRadius": "200rpx"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-absolute-lt": {
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "position-absolute-rt": {
    "position": "absolute",
    "right": 0,
    "top": 0
  },
  "position-absolute-lb": {
    "position": "absolute",
    "left": 0,
    "bottom": 0
  },
  "position-absolute-rb": {
    "position": "absolute",
    "right": 0,
    "bottom": 0
  },
  "position-fixed": {
    "position": "fixed"
  },
  "position-sticky": {
    "position": "sticky",
    "top": 0
  },
  "ellipsis-1": {
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "ellipsis-2": {
    "textOverflow": "ellipsis",
    "lines": 2
  },
  "ellipsis-3": {
    "textOverflow": "ellipsis",
    "lines": 3
  },
  "ellipsis-4": {
    "textOverflow": "ellipsis",
    "lines": 4
  },
  "ellipsis-5": {
    "textOverflow": "ellipsis",
    "lines": 5
  },
  "ellipsis-6": {
    "textOverflow": "ellipsis",
    "lines": 6
  },
  "ellipsis-7": {
    "textOverflow": "ellipsis",
    "lines": 7
  },
  "ellipsis-8": {
    "textOverflow": "ellipsis",
    "lines": 8
  },
  "ellipsis-9": {
    "textOverflow": "ellipsis",
    "lines": 9
  },
  "ellipsis-10": {
    "textOverflow": "ellipsis",
    "lines": 10
  },
  "ellipsis-11": {
    "textOverflow": "ellipsis",
    "lines": 11
  },
  "ellipsis-12": {
    "textOverflow": "ellipsis",
    "lines": 12
  },
  "ellipsis-13": {
    "textOverflow": "ellipsis",
    "lines": 13
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "flex-6": {
    "flex": 6
  },
  "flex-7": {
    "flex": 7
  },
  "flex-8": {
    "flex": 8
  },
  "flex-9": {
    "flex": 9
  },
  "flex-10": {
    "flex": 10
  },
  "flex-11": {
    "flex": 11
  },
  "flex-12": {
    "flex": 12
  },
  "flex-13": {
    "flex": 13
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-bold": {
    "fontWeight": "bold"
  },
  "text-decoration": {
    "textDecoration": "line-through"
  }
}

/***/ })

/******/ });