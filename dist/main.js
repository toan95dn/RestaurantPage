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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nconst loadContact = (() => {\r\n    const contentContainer = document.querySelector(\"#content\");\r\n\r\n    const contactContent = document.createElement('div');\r\n    contactContent.dataset.content = 'Contact';\r\n    contactContent.classList.add('inActive');\r\n\r\n    // Header\r\n    const contactHeader = document.createElement('h1');\r\n    contactHeader.innerText = 'Contact us';\r\n    contactHeader.classList.add('contactHeader');\r\n\r\n    //Contact board\r\n    const contactBoard = document.createElement('div');\r\n    contactBoard.classList.add('contactBoard');\r\n\r\n    //Contact info-------------------------------------------------------------\r\n\r\n    const contactInfo = document.createElement('div');\r\n    contactInfo.classList.add('contactInfo');\r\n    //Adress\r\n    const infoAddress = document.createElement('p');\r\n    const addressIcon = document.createElement('span');\r\n    addressIcon.classList.add('material-icons');\r\n    addressIcon.innerText = 'place';\r\n\r\n    infoAddress.append(addressIcon);\r\n    infoAddress.append('2048 Florwood Avenue', document.createElement('br'), 'Los Angeles, 90260');\r\n    //Time\r\n    const infoTime = document.createElement('p');\r\n    const watchIcon = document.createElement('span');\r\n    watchIcon.classList.add('material-icons');\r\n    watchIcon.innerText = 'schedule';\r\n\r\n    infoTime.append(watchIcon);\r\n    infoTime.append('Mon-Fri: 10:00am-10:00pm', document.createElement('br'), '*****Sat-Sun: 10:00am-05:00pm');\r\n    //Phone\r\n    const infoPhone = document.createElement('p');\r\n    const phoneIcon = document.createElement('span');\r\n    phoneIcon.classList.add('material-icons');\r\n    phoneIcon.innerText = 'phonelink_ring';\r\n    infoPhone.append(phoneIcon, 'Phone: ', '424-111-2233');\r\n\r\n    contactInfo.append(infoAddress, infoTime, infoPhone);\r\n\r\n    //------------------------------------------------------------------------------------\r\n\r\n\r\n    //-----------------------------------------------Contact form---------------------------------------------------//\r\n    const contactForm = document.createElement('form');\r\n    contactForm.classList.add('contactForm');\r\n    contactForm.action = '#';\r\n\r\n    const inviteMessage = document.createElement('p');\r\n    inviteMessage.innerText = '📧 Message us now!';\r\n\r\n    const nameInput = document.createElement('input');\r\n    nameInput.type = 'text';\r\n    nameInput.placeholder = 'Full name';\r\n    const mailInput = document.createElement('input');\r\n    mailInput.type = 'email';\r\n    mailInput.placeholder = 'Email';\r\n    const messageInput = document.createElement('input');\r\n    messageInput.type = 'text';\r\n    messageInput.placeholder = 'Message';\r\n\r\n    const submitButton = document.createElement('button');\r\n    submitButton.id = 'submitFormButton';\r\n    submitButton.innerText = 'Send';\r\n\r\n    contactForm.append(inviteMessage, nameInput, mailInput, messageInput, submitButton);\r\n\r\n    //Map\r\n    const map = document.createElement('iframe');\r\n    map.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52990.84580852239!2d-118.36952511916171!3d33.89151163663563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9dc1cba0a9e1f8b!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1625628516868!5m2!1sen!2sus\";\r\n    map.id = 'map';\r\n\r\n\r\n\r\n    //Add all content to the content container (Contact board hold contact info, form, and map)\r\n    contactBoard.append(contactInfo, contactForm, map);\r\n    contactContent.append(contactHeader, contactBoard);\r\n    contentContainer.append(contactContent);\r\n\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nconst loadHome = (() => {\r\n    const contentContainer = document.querySelector(\"#content\");\r\n\r\n    const homeContent = document.createElement('div');\r\n    homeContent.dataset.content = 'Home';\r\n\r\n    //Welcome message\r\n    const welcomeMessage_1 = document.createElement('h2');\r\n    welcomeMessage_1.innerText = 'Best burgers in the country';\r\n\r\n    const welcomeMessage_2 = document.createElement('h3');\r\n    welcomeMessage_2.innerText = 'Taste & quality you can trust!';\r\n\r\n    //Order button, navigate to menu\r\n    const orderButton = document.createElement('button');\r\n    orderButton.innerText = 'Order now';\r\n    orderButton.id = 'orderButton';\r\n\r\n    //Adress and Time\r\n    const infoPannel = document.createElement('div');\r\n    infoPannel.classList.add('infoPanel');\r\n\r\n    const infoAddress = document.createElement('p');\r\n    const addressIcon = document.createElement('span');\r\n    addressIcon.classList.add('material-icons');\r\n    addressIcon.innerText = 'place';\r\n\r\n    infoAddress.append(addressIcon);\r\n    infoAddress.append('2048 Florwood Avenue', document.createElement('br'), 'Los Angeles, 90260');\r\n\r\n\r\n    const infoTime = document.createElement('p');\r\n    const watchIcon = document.createElement('span');\r\n    watchIcon.classList.add('material-icons');\r\n    watchIcon.innerText = 'schedule';\r\n\r\n    infoTime.append(watchIcon);\r\n    infoTime.append('Mon-Fri: 10:00am-10:00pm', document.createElement('br'), '**Sat-Sun: 10:00am-05:00pm');\r\n\r\n    infoPannel.append(infoAddress, infoTime);\r\n\r\n\r\n    //Add to the homepage container\r\n    homeContent.append(welcomeMessage_1, welcomeMessage_2, infoPannel, orderButton);\r\n\r\n    //Add to the containter\r\n    contentContainer.append(homeContent);\r\n\r\n\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/////////////STYLE FIRST THEN ADD LATER\r\n\r\nconst allTabsInNavBar = document.querySelectorAll('[data-target]');\r\nconst allPages = document.querySelectorAll('[data-content]');\r\n\r\nallTabsInNavBar.forEach((tab) => { //When each tab got clicked\r\n    tab.addEventListener('click', () => {\r\n        const targetPage = document.querySelector(`[data-content = ${tab.dataset.target}]`);\r\n        //Turn off every tab\r\n        allTabsInNavBar.forEach((currTab) => {\r\n            currTab.classList.remove('picked');\r\n        })\r\n\r\n        //Turn off every page\r\n        allPages.forEach((page) => {\r\n\r\n            page.classList.add('inActive');\r\n        })\r\n\r\n        //Highlight the chosen tab\r\n\r\n        //Show the chosen page\r\n        tab.classList.add('picked');\r\n        targetPage.classList.remove('inActive');\r\n    })\r\n})\r\n\r\n//Add burger button dropdown\r\nconst burgerButton = document.querySelector('#burgerButton');\r\nburgerButton.addEventListener('click', () => {\r\n    const dropdownMenu = document.querySelector('.navLinks');\r\n    dropdownMenu.classList.toggle('open');\r\n    burgerButton.classList.toggle('open');\r\n})\r\n\r\n// Send message button\r\nconst submit_FormButton = document.querySelector('#submitFormButton');\r\nsubmit_FormButton.addEventListener('click', () => {\r\n\r\n})\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst loadMenu = (() => {\r\n    const contentContainer = document.querySelector(\"#content\");\r\n\r\n    const menuContent = document.createElement('div');\r\n    menuContent.dataset.content = 'Menu';\r\n    menuContent.classList.add('inActive');\r\n\r\n    //Food container\r\n\r\n    const foodItemsContainer = document.createElement('div');\r\n    foodItemsContainer.classList.add('foodItemsContainer');\r\n\r\n    function addItemToMenu(imageSource, name, price, description) {\r\n        const itemContainer = document.createElement('div');\r\n        itemContainer.classList.add('itemContainer');\r\n        //Image\r\n        const img = document.createElement('img');\r\n        img.src = imageSource;\r\n        //Description\r\n        const descriptionContainer = document.createElement('div');\r\n        const namePrice = document.createElement('h2');\r\n        namePrice.innerText = '$' + price + ' - ' + name;\r\n        const ingredient = document.createElement('p');\r\n        ingredient.innerText = description;\r\n        descriptionContainer.append(namePrice, ingredient);\r\n\r\n        itemContainer.append(img, descriptionContainer);\r\n        foodItemsContainer.append(itemContainer);\r\n    }\r\n\r\n    addItemToMenu('/dist/images/biscuts.png', 'Sausage & Egg Biscuit', '4.99',\r\n        'Breakfast Chicken Fillet, Buttermilk Biscuit,Maple Honey Butter Spread');\r\n    addItemToMenu('/dist/images/fries.png', 'Seasoned Potatoes', '2.99',\r\n        'Seasoned Potatoes, Vegetable Oil, Sugar, Garlic Powder');\r\n    addItemToMenu('/dist/images/croissant.png', 'Bacon Chicken Croissant', '3.99',\r\n        'Breakfast Chicken Fillet, Croissant,Maple Honey Butter Spread');\r\n    addItemToMenu('/dist/images/doubleMeat.png', 'Double Meat Burger', '5.99',\r\n        'Premium Beef, Premium Bun,Crinkle Cut Pickles, Cheese, Lettuce');\r\n    addItemToMenu('/dist/images/friedChicken.png', 'Spicy Chicken Sandwich', '5.99',\r\n        'Spicy Chicken Breast, Premium Bun, Tomato, Mayonnaise, Lettuce');\r\n    addItemToMenu('/dist/images/beefBacon.png', 'Bacon Cheeseburger', '4.99',\r\n        'Hamburger Patty,Tomato,American Cheese Slice, Bacon, Mayonnaise');\r\n    // const menuContainer;\r\n\r\n    menuContent.append(foodItemsContainer);\r\n\r\n\r\n    //Add all to container\r\n    contentContainer.append(menuContent);\r\n\r\n\r\n\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNavbar\": () => (/* binding */ loadNavbar)\n/* harmony export */ });\nconst loadNavbar = (() => {\r\n    const navBar = document.createElement('nav');\r\n\r\n    //Header of navBar\r\n    const headerContainer = document.createElement('div');\r\n    headerContainer.classList.add('header');\r\n\r\n    const restaurantName = document.createElement('h1');\r\n    restaurantName.innerText = '🍔 The-Odin-Burger';\r\n\r\n    //Burger Button \r\n    const burgerButton = document.createElement('div');\r\n    burgerButton.id = 'burgerButton';\r\n    burgerButton.appendChild(document.createElement('div'));\r\n    burgerButton.appendChild(document.createElement('div'));\r\n    burgerButton.appendChild(document.createElement('div'));\r\n\r\n    headerContainer.append(restaurantName, burgerButton);\r\n\r\n\r\n    // All links in navBar\r\n    const allLinks = document.createElement('ul');\r\n    allLinks.classList.add('navLinks');\r\n\r\n    const homeLink = document.createElement('li');\r\n    homeLink.innerText = 'Home';\r\n    homeLink.dataset.target = 'Home';\r\n\r\n    const menuLink = document.createElement('li');\r\n    menuLink.innerText = 'Menu';\r\n    menuLink.dataset.target = 'Menu';\r\n\r\n    const contactLink = document.createElement('li');\r\n    contactLink.innerText = 'Contact';\r\n    contactLink.dataset.target = 'Contact';\r\n\r\n    //Hamburger button\r\n\r\n    //Add all to all links \r\n    allLinks.append(homeLink, menuLink, contactLink);\r\n\r\n    //Add all to the navbar\r\n    navBar.append(headerContainer, allLinks);\r\n\r\n    //Add navbar to container \r\n    const contentContainer = document.querySelector(\"#content\");\r\n    contentContainer.append(navBar);\r\n\r\n\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/navbar.js?");

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