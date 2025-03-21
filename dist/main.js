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

/***/ "./src/helpers/dompoints.js":
/*!**********************************!*\
  !*** ./src/helpers/dompoints.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   body: () => (/* binding */ body)\n/* harmony export */ });\nconst body = document.querySelector(\"body\");\n\n//# sourceURL=webpack://odin-battleship-game/./src/helpers/dompoints.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_dompoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/dompoints */ \"./src/helpers/dompoints.js\");\n/* harmony import */ var _view_navigation_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/navigation/footer */ \"./src/view/navigation/footer.js\");\n/* harmony import */ var _view_navigation_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/navigation/header */ \"./src/view/navigation/header.js\");\n/* harmony import */ var _view_navigation_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/navigation/main */ \"./src/view/navigation/main.js\");\n\n\n\n\n\n_helpers_dompoints__WEBPACK_IMPORTED_MODULE_0__.body.append(_view_navigation_header__WEBPACK_IMPORTED_MODULE_2__.header, _view_navigation_main__WEBPACK_IMPORTED_MODULE_3__.main, _view_navigation_footer__WEBPACK_IMPORTED_MODULE_1__.footer);\n\n//# sourceURL=webpack://odin-battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/view/navigation/footer.js":
/*!***************************************!*\
  !*** ./src/view/navigation/footer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = document.createElement(\"footer\");\n\n//# sourceURL=webpack://odin-battleship-game/./src/view/navigation/footer.js?");

/***/ }),

/***/ "./src/view/navigation/header.js":
/*!***************************************!*\
  !*** ./src/view/navigation/header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\nconst header = document.createElement(\"header\");\n\n//# sourceURL=webpack://odin-battleship-game/./src/view/navigation/header.js?");

/***/ }),

/***/ "./src/view/navigation/main.js":
/*!*************************************!*\
  !*** ./src/view/navigation/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\nconst main = document.createElement(\"main\");\n\n//# sourceURL=webpack://odin-battleship-game/./src/view/navigation/main.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;