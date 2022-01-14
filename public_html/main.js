/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@tunanyugen/component-maker/./src/index.scss?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\n// Write your code here\nconsole.log(\"Hello World!\");\n// Write your code here\nvar menu = document.getElementById(\"menu\");\nvar navigation = document.getElementsByClassName(\"cec92063641b1475a94e0154fc3e918a8__mobile__modal\");\nvar close = document.getElementById(\"close-navigation\");\nmenu.addEventListener(\"click\", function () {\n    navigation[0].classList.add(\"is-show\");\n    close.classList.add(\"is-show\");\n});\nclose.addEventListener(\"click\", function () {\n    document.getElementById(\"navigation\").classList.remove(\"is-show\");\n    close.classList.remove(\"is-show\");\n});\nvar mobile_submenu = Array.from(document.querySelectorAll(\".cec92063641b1475a94e0154fc3e918a8__mobile__item\"));\nmobile_submenu.forEach(function (element) {\n    var submenu = element.querySelector(\".cec92063641b1475a94e0154fc3e918a8__mobile__submenu\");\n    if (!submenu) {\n        return;\n    }\n    element.addEventListener(\"pointerenter\", function (e) {\n        submenu.style.height = \"auto\";\n        var height = submenu.offsetHeight;\n        submenu.style.height = \"0px\";\n        setTimeout(function () {\n            submenu.style.height = \"\".concat(height, \"px\");\n        }, 16);\n    });\n    element.addEventListener(\"pointerleave\", function (e) {\n        submenu.style.height = null;\n    });\n});\n\n\n//# sourceURL=webpack://@tunanyugen/component-maker/./src/index.tsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;