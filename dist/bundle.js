/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/frontend.js":
/*!****************************!*\
  !*** ./client/frontend.js ***!
  \****************************/
/***/ (() => {

eval("\nconst BASE_URL = 'http://localhost:3000';\n\nconst body = document.querySelector('body')\nbody.innerHTML = `\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-4\">\n            <div class=\"col-6\"><h1 class=\"h1\">ASYNC RACE</h1></div>\n            <div class=\"mb-3\">\n                <label for=\"name\" class=\"form-label\"></label>\n                <input type=\"text\" id=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"mb-3\">\n                <label for=\"color\" class=\"form-label\"></label>\n                <input type=\"color\" id=\"color\" class=\"form-control\">\n            </div>\n            <button type=\"submit\" id=\"carBtn\" class=\"btn btn-primary\">ADD CAR</button>\n        </div>\n    </div>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col text-center mt-5\">\n            <div class=\"row\">\n                <div class=\"row justify-content-md-center\">\n                    <div class=\"container col-4\">\n                        <div id=\"get_cars_result\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n`\n\ndocument.getElementById('carBtn').addEventListener('click', async () => {\n    // const input = document.getElementById('name');\n    \n    const nameField = document.querySelector('#name')\n    const colorField = document.querySelector('#color')\n    const car = {\n        name: nameField.value,\n        color: colorField.value\n    }\n\n    if(nameField) {\n        const res = await fetch(`${BASE_URL}/garage`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(car)\n        });\n\n        const addedCar = await res.json();\n        console.log(addedCar);\n        carsRender(addedCar);\n\n        nameField.value = '';\n        colorField.value = '#000000';\n    }\n})\n\nasync function getAllCars () {\n    const res = await fetch(`${BASE_URL}/garage`);\n    const cars = await res.json();\n    console.log(cars);\n    cars.forEach(element => {\n        carsRender(element);\n    });\n}\n\nwindow.addEventListener('DOMContentLoaded', getAllCars);\n\nfunction carsRender({id, name, color}) {\n    const carList = document.getElementById('get_cars_result');\n    carList.insertAdjacentHTML('beforeend', `\n    <div className=\"col-4\" id=\"car${id}\"\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">${name}, color: ${color}</li>\n        </ul>\n        <button type=\"submit\" class=\"btn btn-primary\">Edit car</button>\n        <button onclick=\"deleteCar(${id})\" type=\"button\" class=\"btn btn-primary\">Delete car</button>\n    </div>\n    `)\n}\n\n\n\nasync function deleteCar(id) {\n    console.log(id)\n    // const res = await fetch(`${BASE_URL}/garage/${id}`, {\n    //     method: 'DELETE',\n    //     headers: {\n    //         'Content-Type': 'application/json'\n    //     }\n    // });\n\n    // const data = await res.json();\n    // console.log(data);\n\n    // if (data){\n    //     document.getElementById(`car${id}`).remove();\n    // }\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://async-race-api/./client/frontend.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/frontend.js"]();
/******/ 	
/******/ })()
;