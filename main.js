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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nconst loadHome = (() => {\r\n    const contentContainer = document.querySelector(\"#content\");\r\n\r\n    const homeContent = document.createElement('div');\r\n    homeContent.dataset.content = 'Home';\r\n\r\n\r\n    //Welcome message\r\n    const welcomeMessage_1 = document.createElement('h2');\r\n    welcomeMessage_1.innerText = 'Best burgers in the country';\r\n\r\n    const welcomeMessage_2 = document.createElement('h3');\r\n    welcomeMessage_2.innerText = 'Taste & quality you can trust!';\r\n\r\n    //Order button, navigate to menu\r\n    const orderButton = document.createElement('button');\r\n    orderButton.innerText = 'Order now';\r\n    orderButton.id = 'orderButton';\r\n\r\n    //Adress and Time\r\n    const infoPannel = document.createElement('div');\r\n    infoPannel.classList.add('infoPanel');\r\n\r\n    const infoAddress = document.createElement('p');\r\n    const addressIcon = document.createElement('span');\r\n    addressIcon.classList.add('material-icons');\r\n    addressIcon.innerText = 'place';\r\n\r\n    infoAddress.append(addressIcon);\r\n    infoAddress.append('2048 Florwood Avenue', document.createElement('br'), 'Los Angeles, 90260');\r\n\r\n\r\n    const infoTime = document.createElement('p');\r\n    const watchIcon = document.createElement('span');\r\n    watchIcon.classList.add('material-icons');\r\n    watchIcon.innerText = 'schedule';\r\n\r\n    infoTime.append(watchIcon);\r\n    infoTime.append('Mon-Fri: 10:00am-10:00pm', document.createElement('br'), '**Sat-Sun: 10:00am-05:00pm');\r\n\r\n    infoPannel.append(infoAddress, infoTime);\r\n\r\n\r\n    //Add to the homepage container\r\n    homeContent.append(welcomeMessage_1, welcomeMessage_2, infoPannel, orderButton);\r\n\r\n    //Add to the containter\r\n    contentContainer.append(homeContent);\r\n\r\n\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\n\r\n\r\n/////////////STYLE FIRST THEN ADD LATER\r\n\r\nconst allTabsInNavBar = document.querySelectorAll('[data-target]');\r\nconst allPages = document.querySelectorAll('[data-content]');\r\n\r\nallTabsInNavBar.forEach((tab) => { //When each tab got clicked\r\n    tab.addEventListener('click', () => {\r\n        //Turn off every tab\r\n\r\n        //Turn off every page\r\n\r\n\r\n        //Highlight the chosen tab\r\n\r\n        //Show the chosen page\r\n        const targetPage = document.querySelector(`[data-content = ${tab.dataset.target}]`);\r\n        targetPage.classList.remove('inActive');\r\n    })\r\n})\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNavbar\": () => (/* binding */ loadNavbar)\n/* harmony export */ });\nconst loadNavbar = (() => {\r\n    const navBar = document.createElement('nav');\r\n\r\n    //Header of navBar\r\n\r\n    const restaurantName = document.createElement('h1');\r\n    restaurantName.innerText = 'DTP-Burger';\r\n\r\n    //Burger Button \r\n    const burgerButton = document.createElement('div');\r\n    burgerButton.classList.add('material-icons');\r\n    burgerButton.innerText = 'menu';\r\n\r\n\r\n\r\n    // All links in navBar\r\n    const allLinks = document.createElement('ul');\r\n    allLinks.classList.add('navLinks');\r\n\r\n    const homeLink = document.createElement('li');\r\n    homeLink.innerText = 'Home';\r\n    homeLink.dataset.target = 'Home';\r\n\r\n    const menuLink = document.createElement('li');\r\n    menuLink.innerText = 'Menu';\r\n    menuLink.dataset.target = 'Menu';\r\n\r\n    const contactLink = document.createElement('li');\r\n    contactLink.innerText = 'Contact';\r\n    contactLink.dataset.target = 'Contact';\r\n\r\n    //Hamburger button\r\n\r\n    //Add all to all links \r\n    allLinks.append(homeLink, menuLink, contactLink);\r\n\r\n    //Add all to the navbar\r\n    navBar.append(restaurantName, allLinks);\r\n\r\n    //Add navbar to container \r\n    const contentContainer = document.querySelector(\"#content\");\r\n    contentContainer.append(navBar);\r\n\r\n\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/navbar.js?");

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