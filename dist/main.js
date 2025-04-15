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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root, * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    height: 100vh;\n    width: 100vw;\n}\n\nmain {\n    display: flex;\n    justify-content: space-evenly;\n    gap: 5rem;\n}\n\nheader, footer {\n    background-color: grey;\n    width: 100%;\n}\n\n.battlefield-table {\n    margin: 0;\n    display: inline-block;\n    position: relative;\n}\n\n.battlefield-cell {\n    border: 1px solid #b4b4ff;\n    padding: 0;\n}\n\n.battlefield-cell-content {\n    position: relative;\n    height: 2em;\n    width: 2em;\n}\n\n.marker {\n    position: absolute;\n    font-size: 11px;\n    z-index: -1;\n}\n\n.marker-col {\n    top: -2em;\n    left: 0;\n    width: 100%;\n    text-align: center;\n}\n\n.marker-row {\n    left: -3em;\n    width: 2em;\n    text-align: right;\n    top: 1em;\n    height: 1em;\n}\n\n.gameboard {\n    min-height: 340px;\n    min-width: 340px;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.ship {\n    position: absolute;\n    z-index: 2;\n    border: 2px solid #00F;\n    background:rgba(0,0,255,.05);\n    left: 0;\n    top: 0;\n}\n\n.cell-droppable {\n    box-shadow:inset 0px 0px 0px 2px #9ab118;\n    padding: 0;\n}\n\n.ship-on-droppable {\n    background: rgba(255, 255, 255, 0);\n    border: rgba(255, 255, 255, 0);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship-game/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controller/game/events.js":
/*!***************************************!*\
  !*** ./src/controller/game/events.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shipDragFunction: () => (/* binding */ shipDragFunction)\n/* harmony export */ });\n/* harmony import */ var _view_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/gameboard/gameboard */ \"./src/view/gameboard/gameboard.js\");\nlet currentDroppable = null;\n\nconst DROPPABLE_TD_CLASS = \"cell-droppable\"\nconst ABOVE_DROPPABLE = \"ship-on-droppable\"\n\nfunction enterDroppable(droppable, ship, gameboard, length, orientation) {\n    //things to do on entry of ship to cell droppable\n    // make ship colour on entry to droppable\n    let x = droppable.dataset.x;\n    let y = droppable.dataset.y;\n    x = Number(x);\n    y = Number(y);\n\n    for (let i = 0; i < length; i++) {\n        let td;\n        if(orientation === \"h\") {\n            td = gameboard.querySelector(`div[data-x=\"${x + i}\"][data-y=\"${y}\"]`)\n        } else if (orientation === \"v\") {\n            td = gameboard.querySelector(`div[data-x=\"${x}\"][data-y=\"${y + i}\"]`)\n        }\n        if(td === null) {\n            break;\n        }\n        td.parentNode.classList.add(DROPPABLE_TD_CLASS);\n        ship.classList.add(ABOVE_DROPPABLE);\n    }\n}\n\nfunction leaveDroppable(droppable, ship, gameboard, length, orientation) {\n    //things to do on exit of ship to cell droppable\n    let x = droppable.dataset.x;\n    let y = droppable.dataset.y;\n    x = Number(x);\n    y = Number(y);\n\n    for (let i = 0; i < length; i++) {\n        let td;\n        if(orientation === \"h\") {\n            td = gameboard.querySelector(`div[data-x=\"${x + i}\"][data-y=\"${y}\"]`)\n        } else if (orientation === \"v\") {\n            td = gameboard.querySelector(`div[data-x=\"${x}\"][data-y=\"${y + i}\"]`)\n        }\n        if(td === null) {\n            break;\n        }\n        td.parentNode.classList.remove(DROPPABLE_TD_CLASS);\n        ship.classList.remove(ABOVE_DROPPABLE);\n    }\n}\n\nfunction shipDragFunction(e) {\n    const ship = e.target;\n    const gameboard = ship.closest(\".gameboard\");\n    const shipParent = ship.parentNode;\n\n    let {orientation, length} = ship.dataset;\n    let {x, y} = shipParent.dataset;\n    \n    //set types \n    length = Number(length);\n    x = Number(x);\n    y = Number(y);\n\n    // remove busy status of original cells\n    (0,_view_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__.setTDClass)(gameboard, length, orientation, x, y, false);\n\n    let shiftX = e.clientX - ship.getBoundingClientRect().left;\n    let shiftY = e.clientY - ship.getBoundingClientRect().top;\n\n    document.body.append(ship);\n\n    function moveAt(pageX, pageY) {\n        ship.style.left = pageX - shiftX + 'px';\n        ship.style.top = pageY - shiftY + 'px';\n    }\n\n    function onMouseMove(event) {\n        moveAt(event.pageX, event.pageY);\n\n        ship.hidden = true;\n        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);\n        ship.hidden = false;\n\n        if (!elemBelow) return;\n\n        let droppableBelow = elemBelow.closest('.battlefield-user .battlefield-cell-empty .battlefield-cell-content');\n        if (currentDroppable != droppableBelow) {\n            if (currentDroppable) {\n                leaveDroppable(currentDroppable, ship, gameboard, length, orientation);\n            }\n            currentDroppable = droppableBelow;\n            if (currentDroppable) {\n                enterDroppable(currentDroppable, ship, gameboard, length, orientation);\n            }\n        }\n    }\n\n    moveAt(e.pageX, e.pageY);\n\n    document.addEventListener('mousemove', onMouseMove);\n\n    ship.onmouseup = function() {\n        document.removeEventListener('mousemove', onMouseMove);\n        moveShip(ship, gameboard, currentDroppable, shipParent, length, orientation, x, y);\n        ship.style.left = 0;\n        ship.style.top = 0;\n        ship.onmouseup = null;\n    }\n}\n\nfunction moveShip(ship, gameboard, currentDroppable, shipParent, length, orientation, oldX, oldY) {\n    if (currentDroppable) {\n        // this is where the ship is appended or place ship is called\n        let {x, y} = currentDroppable.dataset;\n        x = Number(x);\n        y = Number(y);\n\n        \n        (0,_view_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__.setTDClass)(gameboard, length, orientation, x, y, true);\n        \n        document.body.removeChild(ship);\n        currentDroppable.appendChild(ship);\n        currentDroppable.removeChild\n        leaveDroppable(currentDroppable, ship, gameboard, length, orientation);\n    } else {\n        // put back to place\n        (0,_view_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__.setTDClass)(gameboard, length, orientation, oldX, oldY, true);\n        document.body.removeChild(ship);\n        shipParent.appendChild(ship);\n    }\n}\n\n//# sourceURL=webpack://odin-battleship-game/./src/controller/game/events.js?");

/***/ }),

/***/ "./src/controller/game/game-manager.js":
/*!*********************************************!*\
  !*** ./src/controller/game/game-manager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialiseGame: () => (/* binding */ initialiseGame)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/controller/game/ships.js\");\n/* harmony import */ var _gameboards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboards */ \"./src/controller/game/gameboards.js\");\n/* harmony import */ var _view_navigation_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view/navigation/main */ \"./src/view/navigation/main.js\");\n/* harmony import */ var _view_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view/gameboard/gameboard */ \"./src/view/gameboard/gameboard.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ \"./src/controller/game/events.js\");\n\n\n\n\n\n\nasync function initialiseGame() {\n    _gameboards__WEBPACK_IMPORTED_MODULE_1__.userGameboard.placeShipsRandomly(_ships__WEBPACK_IMPORTED_MODULE_0__.userShips)\n    _gameboards__WEBPACK_IMPORTED_MODULE_1__.rivalGameboard.placeShipsRandomly(_ships__WEBPACK_IMPORTED_MODULE_0__.rivalShips);\n    \n    // place userGameboard ships on its UI\n    for (let placedShip of _gameboards__WEBPACK_IMPORTED_MODULE_1__.userGameboard.placedShips) {\n        const {ship, orientation, x, y} = placedShip;\n        (0,_view_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_3__.placeShip)(_view_navigation_main__WEBPACK_IMPORTED_MODULE_2__.userGameboardUI, ship, orientation, x, y);\n    }\n    allowDragging(_view_navigation_main__WEBPACK_IMPORTED_MODULE_2__.userGameboardUI, _events__WEBPACK_IMPORTED_MODULE_4__.shipDragFunction);\n}\n\nfunction allowDragging(gameboard, dragFunction) {\n    gameboard.addEventListener('mousedown', (e) => {\n        let target = e.target;\n        \n        switch(target.className) {\n            case 'ship':\n                console.log(target);\n                dragFunction(e);\n                break;\n        }\n    })\n}\n\n//# sourceURL=webpack://odin-battleship-game/./src/controller/game/game-manager.js?");

/***/ }),

/***/ "./src/controller/game/gameboards.js":
/*!*******************************************!*\
  !*** ./src/controller/game/gameboards.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rivalGameboard: () => (/* binding */ rivalGameboard),\n/* harmony export */   userGameboard: () => (/* binding */ userGameboard)\n/* harmony export */ });\n/* harmony import */ var _model_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/Gameboard */ \"./src/model/Gameboard.js\");\n\n\nconst userGameboard = new _model_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard(10, 10);\nconst rivalGameboard = new _model_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard(10, 10);\n\n//# sourceURL=webpack://odin-battleship-game/./src/controller/game/gameboards.js?");

/***/ }),

/***/ "./src/controller/game/ships.js":
/*!**************************************!*\
  !*** ./src/controller/game/ships.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rivalShips: () => (/* binding */ rivalShips),\n/* harmony export */   userShips: () => (/* binding */ userShips)\n/* harmony export */ });\n/* harmony import */ var _ship_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship-manager */ \"./src/controller/ship-manager.js\");\n\n\nconst shipList = [\n    {length: 4, count: 1},\n    {length: 3, count: 2},\n    {length: 2, count: 3},\n    {length: 1, count: 4}\n]\n\nconst userShips = (0,_ship_manager__WEBPACK_IMPORTED_MODULE_0__.makeShips)(shipList);\nconst rivalShips = (0,_ship_manager__WEBPACK_IMPORTED_MODULE_0__.makeShips)(shipList);\n\n\n//# sourceURL=webpack://odin-battleship-game/./src/controller/game/ships.js?");

/***/ }),

/***/ "./src/controller/ship-manager.js":
/*!****************************************!*\
  !*** ./src/controller/ship-manager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeShips: () => (/* binding */ makeShips)\n/* harmony export */ });\n/* harmony import */ var _model_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Ship */ \"./src/model/Ship.js\");\n\n\nfunction makeShips(shipList) {\n    const ships = [];\n    for (let i of shipList) {\n        for (let j = 0; j < i.count; j++){\n            const ship = new _model_Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(i.length);\n            ships.push(ship);\n        }\n    }\n    return ships;\n}\n\n//# sourceURL=webpack://odin-battleship-game/./src/controller/ship-manager.js?");

/***/ }),

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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_dompoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/dompoints */ \"./src/helpers/dompoints.js\");\n/* harmony import */ var _view_navigation_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/navigation/footer */ \"./src/view/navigation/footer.js\");\n/* harmony import */ var _view_navigation_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/navigation/header */ \"./src/view/navigation/header.js\");\n/* harmony import */ var _view_navigation_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/navigation/main */ \"./src/view/navigation/main.js\");\n/* harmony import */ var _controller_game_game_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller/game/game-manager */ \"./src/controller/game/game-manager.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\n\n\n_helpers_dompoints__WEBPACK_IMPORTED_MODULE_0__.body.append(_view_navigation_header__WEBPACK_IMPORTED_MODULE_2__.header, _view_navigation_main__WEBPACK_IMPORTED_MODULE_3__.main, _view_navigation_footer__WEBPACK_IMPORTED_MODULE_1__.footer);\nawait (0,_controller_game_game_manager__WEBPACK_IMPORTED_MODULE_4__.initialiseGame)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://odin-battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/model/Gameboard.js":
/*!********************************!*\
  !*** ./src/model/Gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Coordinate: () => (/* binding */ Coordinate),\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/model/Ship.js\");\n\n\nclass Gameboard {\n    constructor(width = 0, height = 0){\n        this.width = width;\n        this.height = height;\n        this.placedShips = [];\n        this.shipsSunk = 0;\n        this.buildGrid();\n    }\n\n    buildGrid(){\n        this.grid = [];\n        for(let i = 0; i < this.height; i++){\n            this.grid.push([])\n            for(let j = 0; j < this.width; j++) {\n                this.grid[i].push(new Coordinate);\n            }\n        }\n    }\n    #clearShipFromCoordinates(coordinates) {\n        for(let coordinate of coordinates) {\n            coordinate.ship = null; \n        }\n    }\n    placeShip(orientation, ship, x, y) {\n        // returns true if ship was placed correctly\n        // returns false if not\n        const length = ship.length;\n\n        if (ship.coordinates.length > 0) {\n            this.#clearShipFromCoordinates(ship.coordinates);\n            // this looks a little bit coupled\n            ship.coordinates = [];\n        }\n\n        if(length > this.width || length > this.height) {\n            return;\n        }\n\n        if(x > this.width - 1) {\n            return;\n        }\n\n        if(y > this.height - 1) {\n            return;\n        }\n\n        if(orientation === \"v\" && ((y + length) > (this.height))) {\n            //this.height was used instead of this.height - 1\n            // because y is the where the ship will be initially placed\n            // and therefore the equation is really \n            // ((y - 1 + length) > (this.height - 1))   \n            return;\n        }\n\n        if(orientation === \"h\" && ((x + length) > (this.width))){\n            return;\n        }\n        \n        const iCondition = orientation === \"h\" ? y + 1 : y + length + 1;\n        const jCondition = orientation === \"h\" ? x + length + 1 : x + 1;\n        //new checking loop for h\n        for(let i = y - 1; i < iCondition; i++) { //1,1\n            // check for i extreme < 0\n            if(i < 0) {\n                continue; // skip\n            }\n            // check for i extreme > grid.length\n            if(i >= this.grid.length) {\n                break; // stop altogether\n            }\n            for(let j = x - 1; j < jCondition; j++) {\n                // check for j extreme -1\n                if (j < 0) {\n                    continue; //skip\n                }\n                // check for j extreme > grid.length\n                if (j >= this.grid[i].length) {\n                    break; //skip altogether\n                }\n                let coordinate = this.grid[i][j];\n\n                if (coordinate.ship instanceof _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship || coordinate.ship === 0) {\n                    return false;\n                }\n            }\n        }\n\n\n         for(let i = y - 1; i < iCondition; i++) { //1,1\n             // check for i extreme < 0\n             if(i < 0) {\n                 continue; // skip\n             }\n             // check for i extreme > grid.length\n             if(i >= this.grid.length) {\n                 break; // stop altogether\n             }\n             for(let j = x - 1; j < jCondition; j++) {\n                 // check for j extreme -1\n                 if (j < 0) {\n                     continue; //skip\n                 }\n                 // check for j extreme > grid.length\n                 if (j >= this.grid[i].length) {\n                     break; //skip altogether\n                 }\n                 let coordinate = this.grid[i][j];\n\n                 const outerLeftEq = orientation === \"h\" ? i : j;\n                 const innerLeftEq = orientation === \"h\" ? j : i;\n                 const outerRightEq = orientation === \"h\" ? y : x;\n                 const innerRightEq = orientation === \"h\" ? x : y;\n                \n                 // all\n                 if ((outerLeftEq === outerRightEq && (innerLeftEq === innerRightEq - 1 || innerLeftEq === innerRightEq + length + 1)) || outerLeftEq === outerRightEq - 1 || outerLeftEq === outerRightEq + 1) {\n                     coordinate.ship = 0;\n                 } else if (outerLeftEq ===outerRightEq && !(innerLeftEq === innerRightEq - 1 || innerLeftEq === innerRightEq + length + 1)) {\n                     coordinate.ship = ship;\n                     ship.coordinates.push(coordinate);\n                 }\n                 \n             }\n         }\n\n\n        let shipIndex = this.placedShips.findIndex((e) => e.ship == ship);\n        if (shipIndex !== -1) {\n            this.placedShips.splice(shipIndex, 1);\n        }\n        this.placedShips.push({\n                  ship, \n                  orientation, \n                  x, \n                  y\n                });\n\n        return true;\n    }\n\n\n    #getRandomX() {\n        return Math.abs(Math.round(Math.random() * this.width - 1));\n    }\n\n    #getRandomY() {\n        return Math.abs(Math.round(Math.random() * this.height - 1));\n    }\n\n    #getRandomDir() {\n        let randomDirection = Math.abs(Math.round(Math.random() * 1));\n        if (randomDirection == 0) {\n            return \"h\";\n        } else {\n            return \"v\";\n        }\n    }\n\n    placeShipsRandomly(ships) {\n        // can only place up to n ships equal to width or height\n        if(ships.length > this.width || ships.length > this.height) {\n            return false;\n        }\n        for (let ship of ships) {\n            if (ship.length > this.width || ship.length > this.height) {\n                return;\n            }\n\n            let shipPlaced = false;\n            while(!shipPlaced) {\n                shipPlaced = this.placeShip(\n                    this.#getRandomDir(),\n                    ship,\n                    this.#getRandomX(),\n                    this.#getRandomY());\n            }\n        }\n        return true;\n    }\n\n    hit(x,y) {\n        let coordinate = this.grid[y][x];\n        if (coordinate.hit) {\n            return;\n        }\n        coordinate.hit = true;\n        if (coordinate.miss) {\n            return;\n        }\n        coordinate.ship.hit();\n        if (coordinate.ship.isSunk()) {\n            this.shipsSunk += 1;\n        }\n    }\n\n    get allShipsSunk() {\n        return this.placedShips.length <= this.shipsSunk;\n    }\n\n    get size(){\n        return this.width * this.height;\n    }\n}\n\nclass Coordinate{\n    constructor() {\n        this.hit = false;\n        this.ship = null;\n    }\n\n    get miss(){\n        return !(this.hit && this.ship instanceof _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship);\n    }\n}\n\n//# sourceURL=webpack://odin-battleship-game/./src/model/Gameboard.js?");

/***/ }),

/***/ "./src/model/Ship.js":
/*!***************************!*\
  !*** ./src/model/Ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length = 0) {\n        this.length = length;\n        this.hits = 0;\n        this.coordinates = [];\n    }\n\n    hit() {\n        this.hits += 1;\n        return;\n    }\n    \n    isSunk() {\n        return this.hits >= this.length;\n    }\n}\n\n//# sourceURL=webpack://odin-battleship-game/./src/model/Ship.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship-game/./src/styles/style.css?");

/***/ }),

/***/ "./src/view/gameboard/gameboard.js":
/*!*****************************************!*\
  !*** ./src/view/gameboard/gameboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameboardUIElement: () => (/* binding */ createGameboardUIElement),\n/* harmony export */   placeShip: () => (/* binding */ placeShip),\n/* harmony export */   setTDClass: () => (/* binding */ setTDClass)\n/* harmony export */ });\nconst GAMEBOARD = \"gameboard\"\nconst BATTLEFIELD_TABLE = \"battlefield-table\"\nconst BATTLEFIELD_ROW = \"battlefield-row\"\nconst BATTLEFIELD_USER = \"battlefield-user\"\nconst BATTLEFIELD_RIVAL = \"battlefield-rival\"\nconst BATTLEFIELD_CELL = \"battlefield-cell\"\nconst BATTLEFIELD_CELL_EMPTY = \"battlefield-cell-empty\";\nconst BATTLEFIELD_CELL_BUSY = \"battlefield-cell-busy\";\nconst BATTLEFIELD_CELL_CONTENT = \"battlefield-cell-content\";\nconst MARKER = \"marker\";\nconst MARKER_COL = \"marker-col\";\nconst MARKER_ROW = \"marker-row\";\nconst SHIP = \"ship\";\n\nfunction createGameboardUIElement(height = 10, width = 10, isUser = true) {\n    const gameboard = document.createElement(\"div\");\n    gameboard.classList.add(GAMEBOARD);\n    const gameboardTable = document.createElement(\"table\");\n    gameboardTable.classList.add(BATTLEFIELD_TABLE);\n    gameboardTable.classList.add(isUser ? BATTLEFIELD_USER : BATTLEFIELD_RIVAL);\n    const gameboardTableBody = document.createElement(\"tbody\");\n\n    for(let i = 0; i < height; i++) {\n        const row = document.createElement(\"tr\");\n        row.classList.add(BATTLEFIELD_ROW);\n        gameboardTableBody.appendChild(row)\n        for (let j = 0; j < width; j++){\n            const col = document.createElement(\"td\");\n            col.classList.add(BATTLEFIELD_CELL, BATTLEFIELD_CELL_EMPTY);\n            \n            const innerDiv = document.createElement(\"div\");\n            innerDiv.dataset.y = i;\n            innerDiv.dataset.x = j;\n            innerDiv.classList.add(BATTLEFIELD_CELL_CONTENT)\n            \n            const innerSpan = document.createElement(\"span\");\n\n            innerDiv.appendChild(innerSpan);\n\n            if(i === 0) {\n                const divMarker = document.createElement(\"div\");\n                divMarker.textContent = j + 1;\n                divMarker.classList.add(MARKER, MARKER_COL);\n                innerDiv.appendChild(divMarker);\n            }\n            if(j === 0) {\n                const divMarker = document.createElement(\"div\");\n                divMarker.classList.add(MARKER, MARKER_ROW);\n                divMarker.textContent = i + 1;\n                innerDiv.appendChild(divMarker); \n            }\n            col.appendChild(innerDiv);\n            row.appendChild(col);\n\n        }\n    }\n    gameboardTable.appendChild(gameboardTableBody);\n    gameboard.appendChild(gameboardTable);\n    return gameboard;\n};\n\nfunction placeShip(gameboard, ship, orientation, x, y) {\n    // query    \n    const startingTD = gameboard.querySelector(`div[data-x=\"${x}\"][data-y=\"${y}\"]`)\n    const shipDiv = document.createElement(\"div\");\n    // set length or height\n    const shipDivLengthEm = `${ship.length * 2}em`;\n    if (orientation == \"h\") {\n        shipDiv.style.marginLeft = \"-2px\";\n        shipDiv.style.paddingRight = shipDivLengthEm;\n        shipDiv.style.width = shipDivLengthEm;\n        shipDiv.style.height = \"2em\";\n    } else if (orientation == \"v\") {\n        shipDiv.style.marginTop = \"-2px\";\n        shipDiv.style.paddingBottom = shipDivLengthEm;\n        shipDiv.style.width = \"2em\";\n        shipDiv.style.height = shipDivLengthEm;\n    }\n    shipDiv.dataset.length = ship.length;\n    shipDiv.dataset.orientation = orientation;\n    shipDiv.classList.add(SHIP);\n    startingTD.appendChild(shipDiv);\n    \n    setTDClass(gameboard, ship.length, orientation, x, y);\n}\n\nfunction setTDClass(gameboard, length, orientation, x, y, isBusy = true) {\n    const toRemove = isBusy ? BATTLEFIELD_CELL_EMPTY : BATTLEFIELD_CELL_BUSY;\n    const toAdd = isBusy ? BATTLEFIELD_CELL_BUSY : BATTLEFIELD_CELL_EMPTY;\n    for (let i = 0; i < length; i++){\n        let td;\n        if(orientation === \"h\") {\n            td = gameboard.querySelector(`div[data-x=\"${x + i}\"][data-y=\"${y}\"]`)\n        } else if (orientation === \"v\") {\n            td = gameboard.querySelector(`div[data-x=\"${x}\"][data-y=\"${y + i}\"]`)\n        }\n        if(td === null) {\n            break;\n        }\n        td.parentNode.classList.remove(toRemove);\n        td.parentNode.classList.add(toAdd);\n    }\n}\n\n\n//# sourceURL=webpack://odin-battleship-game/./src/view/gameboard/gameboard.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   oppGameboardUI: () => (/* binding */ rivalGameboardUI),\n/* harmony export */   userGameboardUI: () => (/* binding */ userGameboardUI)\n/* harmony export */ });\n/* harmony import */ var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard/gameboard */ \"./src/view/gameboard/gameboard.js\");\n\n\nconst userGameboardUI = (0,_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__.createGameboardUIElement)(10, 10, true);\nconst rivalGameboardUI = (0,_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__.createGameboardUIElement)(10, 10, false);\n\nconst main = document.createElement(\"main\");\nmain.append(userGameboardUI, rivalGameboardUI);\n\n// placeShip(userGameboard, {length: 3}, \"h\", 5, 6);\n// placeShip(userGameboard, {length: 1}, \"v\", 0, 3);\n// placeShip(userGameboard, {length: 2}, \"h\", 3, 3);\n// placeShip(userGameboard, {length: 3}, \"v\", 4, 5);\n\n\n\n//# sourceURL=webpack://odin-battleship-game/./src/view/navigation/main.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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