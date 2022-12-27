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

/***/ "./client/components/deleteCar.js":
/*!****************************************!*\
  !*** ./client/components/deleteCar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteCar\": () => (/* binding */ deleteCar)\n/* harmony export */ });\n\n\nconst deleteCar = (elemId) => {\n    console.log(elemId)\n    const element = document.getElementById(elemId)\n    element.remove()\n    try {\n        fetch(`${BASE_URL}/garage/${elemId}`, {\n            method: 'delete'\n        })\n    } catch (error) {\n        console.error(error)\n    }\n}\n\n\n\n// const deleteCar = (elemId) => {\n//     console.log(elemId)\n//     document.getElementById(elemId).remove()\n//     try {\n//         const response = fetch(`${BASE_URL}/garage/${elemId}`, {\n//             method: 'delete'\n//         })\n//     } catch (error) {\n//         console.error(error)\n//     }\n// }\n\n\n//# sourceURL=webpack://async-race-api/./client/components/deleteCar.js?");

/***/ }),

/***/ "./client/frontend.js":
/*!****************************!*\
  !*** ./client/frontend.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_deleteCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/deleteCar */ \"./client/components/deleteCar.js\");\n\n\n\nconst BASE_URL = 'http://localhost:3000';\nconst body = document.querySelector('body');\n\n\n\nbody.innerHTML = `\n    <div class=\"mt-4 ml-4\">\n        <div class=\"col-2\">\n            <div class=\"col-6\"><h1 class=\"h1\">ASYNC RACE</h1></div>\n            <div class=\"mb-3\">\n                <label for=\"name\" class=\"form-label\">ADD CAR</label>\n                <input type=\"text\" id=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"mb-3\">\n                <label for=\"color\" class=\"form-label\"></label>\n                <input type=\"color\" id=\"color\" class=\"form-control\">\n            </div>\n            <button type=\"submit\" id=\"carBtn\" class=\"btn btn-primary\">ADD CAR</button>\n\n            <br>\n            <br>\n\n            <div class=\"mb-3\">\n                <label for=\"edit-name\" class=\"form-label\">EDIT CAR</label>\n                <input type=\"text\" id=\"edit-name\" class=\"form-control\">\n            </div>\n            <div class=\"mb-3\">\n                <label for=\"edit-color\" class=\"form-label\"></label>\n                <input type=\"color\" id=\"edit-color\" class=\"form-control\">\n            </div>\n            <button type=\"submit\" id=\"edit-car-btn\" class=\"btn btn-primary\">EDIT CAR</button>\n\n            <br>\n            <br>\n        </div>\n    </div>\n    <div class=\"\">\n        <div class=\"col mt-5\">\n            <div class=\"row\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div id=\"get_cars_result\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n`\n\ndocument.getElementById('carBtn').addEventListener('click', async () => {\n    // const input = document.getElementById('name');\n    const nameField = document.querySelector('#name')\n    const colorField = document.querySelector('#color')\n    const car = {\n        name: nameField.value,\n        color: colorField.value\n    }\n\n    if(nameField) {\n        const res = await fetch(`${BASE_URL}/garage`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(car)\n        });\n\n        const addedCar = await res.json();\n        console.log(addedCar);\n        carsRender(addedCar);\n\n        nameField.value = '';\n        colorField.value = '#000000';\n    }\n})\n\nasync function getAllCars () {\n    const res = await fetch(`${BASE_URL}/garage`);\n    const cars = await res.json();\n    console.log(cars);\n    cars.forEach(element => {\n        carsRender(element);\n    });\n}\n\nwindow.addEventListener('DOMContentLoaded', getAllCars);\n\nconst carList = document.getElementById('get_cars_result');\nfunction carsRender({id, name, color}) {\n    // const carList = document.getElementById('get_cars_result');\n    carList.insertAdjacentHTML('beforeend', `\n    <div className=\"col-4\" id=\"car${id}\">\n        <ul class=\"list-group\" style='padding: 0;'>\n            <li class=\"list-group-item\">${name}, color: ${color}</li>\n        </ul>\n        <div>\n            <button onclick=\"startCar(${id})\" type=\"button\" class=\"btn btn-primary\">Start</button>\n            <button onclick=\"stopCar(${id})\" type=\"button\" class=\"btn btn-primary\">Stop</button>\n        </div>\n\n\n\n        <div style='position: relative; height: 87px'>\n            <div id='car-icon-${id}' style='display: inline-block; position: absolute;'>\n                <svg fill=${color} version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 460.384 460.384\" style=\"enable-background:new 0 0 460.384 460.384;\" xml:space=\"preserve\" width=\"100px\" height=\"87px\" >\n                    <g>\n                        <path d=\"M95.252,283.11c-13.807,0-25.039,11.232-25.039,25.039s11.232,25.039,25.039,25.039s25.039-11.233,25.039-25.039\n                            S109.059,283.11,95.252,283.11z M95.252,318.188c-5.536,0-10.039-4.504-10.039-10.039s4.503-10.039,10.039-10.039\n                            s10.039,4.503,10.039,10.039S100.788,318.188,95.252,318.188z\"/>\n                        <path d=\"M357.012,283.11c-13.807,0-25.04,11.232-25.04,25.039s11.233,25.039,25.04,25.039c13.806,0,25.038-11.233,25.038-25.039\n                            S370.818,283.11,357.012,283.11z M357.012,318.188c-5.536,0-10.04-4.504-10.04-10.039s4.504-10.039,10.04-10.039\n                            c5.535,0,10.038,4.503,10.038,10.039S362.547,318.188,357.012,318.188z\"/>\n                        <path d=\"M409.227,196.421l-66.917-7.645l-35.714-58.056c-10.905-17.728-30.61-28.741-51.424-28.741H133.676\n                            c-34.925,0-65.792,23.518-75.063,57.193l-0.948,3.445c-4.607,16.733-17.845,30.052-34.549,34.762\n                            C9.506,201.217,0,213.773,0,227.914v83.012c0,4.142,3.358,7.5,7.5,7.5h38.557c4.757,22.798,25.006,39.978,49.195,39.978\n                            s44.438-17.18,49.195-39.978h163.37c4.757,22.798,25.006,39.978,49.195,39.978s44.438-17.18,49.195-39.978h40.477\n                            c3.813,0,7.02-2.861,7.452-6.65l5.874-51.483C463.614,228.69,440.834,200.037,409.227,196.421z M15,294.313h31.949\n                            c-0.843,2.938-1.43,5.983-1.724,9.113H15V294.313z M95.252,343.404c-19.44,0-35.255-15.815-35.255-35.255\n                            s15.815-35.256,35.255-35.256s35.255,15.816,35.255,35.256S114.692,343.404,95.252,343.404z M357.012,343.404\n                            c-19.44,0-35.255-15.815-35.255-35.255s15.815-35.256,35.255-35.256s35.255,15.816,35.255,35.256S376.452,343.404,357.012,343.404z\n                            M357.012,257.893c-16.987,0-32.021,8.48-41.122,21.42H182.425c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h126.284\n                            c-0.843,2.938-1.43,5.983-1.724,9.113H145.279c-2.389-25.504-23.909-45.533-50.027-45.533c-16.987,0-32.021,8.48-41.122,21.42H15\n                            v-51.399c0-7.455,5.012-14.075,12.187-16.098c21.728-6.126,38.947-23.452,44.94-45.218l0.948-3.445\n                            c7.484-27.186,32.405-46.174,60.601-46.174h121.496c15.643,0,30.452,8.277,38.647,21.6l37.626,61.164\n                            c1.207,1.962,3.249,3.26,5.537,3.522l70.541,8.059c16.002,1.831,28.943,12.335,34.67,26.276h-23.413c-4.142,0-7.5,3.358-7.5,7.5\n                            s3.358,7.5,7.5,7.5h26.578c0.052,1.975-0.023,3.975-0.253,5.993l-2.364,20.72h-44.608\n                            C389.033,266.373,373.998,257.893,357.012,257.893z M407.038,303.426c-0.293-3.13-0.881-6.175-1.724-9.113h35.716l-1.04,9.113\n                            H407.038z\"/>\n                        <path d=\"M255.565,215.222h-15.76c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.76c4.142,0,7.5-3.358,7.5-7.5\n                            S259.708,215.222,255.565,215.222z\"/>\n                        <path d=\"M154.846,222.722c0-4.142-3.358-7.5-7.5-7.5h-15.76c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.76\n                            C151.488,230.222,154.846,226.864,154.846,222.722z\"/>\n                        <path d=\"M164.136,283.941c-1.314-3.113-4.658-5.069-8.025-4.546c-3.049,0.474-5.522,2.768-6.213,5.776\n                            c-1.496,6.51,6.051,11.564,11.54,7.829C164.343,291.024,165.476,287.186,164.136,283.941\n                            C163.946,283.491,164.326,284.401,164.136,283.941z\"/>\n                        <path d=\"M286.014,143.391c-6.531-10.637-18.348-17.245-30.841-17.245h-121.5c-24.087,0-45.371,16.217-51.761,39.443l-0.943,3.438\n                            c-2.468,8.956-6.268,24.34-6.429,24.991c-0.553,2.238-0.045,4.606,1.376,6.422c1.422,1.815,3.599,2.876,5.905,2.876h227.64\n                            c2.717,0,5.222-1.469,6.547-3.841c1.326-2.372,1.265-5.275-0.159-7.589L286.014,143.391z M199.352,141.145v47.169h-69.054v-47.018\n                            c1.115-0.098,2.24-0.151,3.375-0.151H199.352z M95.432,173.002l0.944-3.441c2.86-10.395,9.865-18.839,18.922-23.747v42.499H91.432\n                            C92.697,183.321,94.242,177.323,95.432,173.002z M214.352,188.314v-47.169h40.821c7.316,0,14.235,3.868,18.062,10.1l22.807,37.069\n                            H214.352z\"/>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                </svg>\n            </div>\n        </div>\n\n        \n        \n\n        <br>\n        <button onclick=\"selectCar(${id})\" type=\"button\" class=\"btn btn-primary\">Select car</button>\n        <button onclick=\"deleteCar(${id})\" type=\"button\" class=\"btn btn-primary\">Delete car</button>\n        <br>\n        <br>\n        <br>\n        <br>\n    </div>\n    `)\n}\n\n\n\nconst editNameField = document.getElementById('edit-name');\nconst editColorField = document.getElementById('edit-color');\nconst editCarBtn = document.getElementById('edit-car-btn');\n\nasync function selectCar(id) {\n    const res = await fetch(`${BASE_URL}/garage/${id}`);\n    const selectedCar = await res.json();\n    editNameField.value = selectedCar.name;\n    editColorField.value = selectedCar.color;\n    editNameField.focus();\n    editNameField.setAttribute('data-id', id);\n    console.log(editNameField.getAttribute('data-id'));\n}\n// editCarBtn.addEventListener('click', editCar(editNameField.getAttribute('data-id')))\n// editCarBtn.addEventListener('click', editCar('ffffff'))\neditCarBtn.addEventListener('click', async () => {\n    const editId = editNameField.getAttribute('data-id')\n    // console.log('async ' + editNameField.getAttribute('data-id'))\n    console.log('async editId ' + editId)\n\n    const editCar = {\n        name: editNameField.value,\n        color: editColorField.value\n    }\n    // console.log(editCar)\n\n    if(editNameField) {\n        const res = await fetch(`${BASE_URL}/garage/${editId}`, {\n            method: 'PUT',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(editCar)\n        });\n        const resEditCar = await res.json();\n        console.log(resEditCar)\n        // console.log('response ' + resEditCar.id);\n        // carsRender(addedCar);\n\n        carList.innerHTML = '';\n        getAllCars ();\n\n        editNameField.value = '';\n        editColorField.value = '#000000';\n    }\n\n})\n\n// async function deleteCar(id) {\n//     console.log(id)\n//     const res = await fetch(`${BASE_URL}/garage/${id}`, {\n//         method: 'DELETE',\n//         headers: {\n//             'Content-Type': 'application/json'\n//         }\n//     });\n\n//     const data = await res.json();\n//     console.log(data);\n\n//     if (data){\n//         document.getElementById(`car${id}`).remove();\n//     }\n// }\n\n\nasync function startCar(id) {\n    console.log(id);\n    const res = await fetch(`${BASE_URL}/engine?id=${id}&status=started`, {\n        method: 'PATCH',\n        // body: JSON.stringify(editCar)\n    });\n    const resStart = await res.json();\n    console.log(resStart);\n\n    const carImage = document.getElementById(`car-icon-${id}`);\n    carImage.classList.add(\"move\");\n    let startTime = new Date().getTime();\n    const makeMove = function () {\n        let currTime = new Date().getTime();\n        let newPos = (0 + ((currTime - startTime) / 1000) * resStart.velocity);\n        carImage.style.left = newPos + 'px';\n\n        if (newPos < 1300 && carImage.classList.contains('move')) {\n            window.requestAnimationFrame(makeMove);\n        }\n        if (!carImage.classList.contains('move')) {\n            carImage.style.left = 0 + 'px';\n        }\n    }\n    makeMove();\n}\n\nasync function stopCar(id) {\n    console.log(id);\n    const res = await fetch(`${BASE_URL}/engine?id=${id}&status=stopped`, {\n        method: 'PATCH',\n        // body: JSON.stringify(editCar)\n    });\n    const resStop = await res.json();\n    console.log(resStop);\n\n    const carImage = document.getElementById(`car-icon-${id}`);\n    carImage.classList.toggle(\"move\");\n}\n\n\n// https://google.com/search?query=test+me%21&tbs=qdr%3Ay\n\n\n//# sourceURL=webpack://async-race-api/./client/frontend.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client/frontend.js");
/******/ 	
/******/ })()
;