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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById('game-canvas')\n    canvas.width = 800;\n    canvas.height = 500;\n    console.log(\"Webpack is working!\");\n\n    let ctx = canvas.getContext('2d');\n\n    const mo = new _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n\n    mo.draw(ctx);\n    mo.move()\n    mo.draw(ctx);\n})\n\n\n\n\n;\n\nwindow.MovingObject = _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack://w9d1_p/./src/index.js?");

/***/ }),

/***/ "./src/moving-object.js":
/*!******************************!*\
  !*** ./src/moving-object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MovingObject{\n    constructor(optionsObj){\n        this.pos = optionsObj.pos\n        this.vel = optionsObj.vel\n        this.radius = optionsObj.radius\n        this.color = optionsObj.color\n        console.log(\"constructed moving object\")\n    }\n\n    move(){\n        this.pos[0] += this.vel[0]\n        this.pos[1] += this.vel[1]\n        // debugger\n    }\n\n    \n    draw(ctx){\n        let x = this.pos[0]\n        let y = this.pos[1]\n\n        ctx.beginPath();\n        ctx.arc(x, y, this.radius, 0, 2 * Math.PI);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.stroke();\n    }\n\n    isCollideWith(otherMovingObj){\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\n\n//# sourceURL=webpack://w9d1_p/./src/moving-object.js?");

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