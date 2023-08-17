"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _makeElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElem */ \"./src/makeElem.js\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ \"./src/modals.js\");\n/* harmony import */ var _todoapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoapp */ \"./src/todoapp.js\");\n\n\n\n\n(0,_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/makeElem.js":
/*!*************************!*\
  !*** ./src/makeElem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeElem)\n/* harmony export */ });\nfunction makeElem(type, attributes, text) {\n    const element = document.createElement(type);\n    for (let key in attributes) {\n        element.setAttribute(key, attributes[key])\n    };\n    if (text) {\n        element.textContent = text\n    };\n    return element;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/makeElem.js?");

/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _makeElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElem */ \"./src/makeElem.js\");\n/* harmony import */ var _todoapp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoapp */ \"./src/todoapp.js\");\n\n\n\nfunction todoModal() {\n    const todoInputModal = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {class: 'modal'});\n    const todoForm = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', {id: 'todoForm'});\n\n    const titleLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo_title'}, 'Title');\n    const titleInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'text', id: 'todo_title', name: 'todo_title', placeholder: 'Title', required: ''});\n\n    const descLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo_description'}, 'Description');\n    const descInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'text', id: 'todo_description', name: 'todo_description', placeholder: 'Description', required: ''});\n\n    const dueDateLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo_dueDate'}, 'Due Date');\n    const dueDateInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'date', id: 'todo_dueDate', name: 'todo_dueDate', required: ''});\n\n    const priorityLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo_priority'}, 'Priority');\n    const priorityInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('select', {id: 'todo_priority', name: 'todo_priority'});\n    const priorityOptionLow = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: 'Low'}, 'Low');\n    const priorityOptionMed = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: 'Med'}, 'Med');\n    const priorityOptionHigh = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: 'High'}, 'High');\n\n    priorityInput.append(priorityOptionLow, priorityOptionMed, priorityOptionHigh)\n\n    const projectLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo_project'}, 'Project');\n    const projectInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('select', {id: 'todo_project', name: 'todo_project'});\n    _todoapp__WEBPACK_IMPORTED_MODULE_1__.todoApp.projects.map((project) => {\n        projectInput.append((0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: `${project.title}`}, `${project.title}`))\n    })\n\n\n    const todoSubmit = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {type: 'submit'}, 'Submit');\n\n    todoForm.append(titleLabel, titleInput, descLabel, descInput, dueDateLabel, dueDateInput, priorityLabel, priorityInput, projectLabel, projectInput, todoSubmit);\n\n    todoInputModal.append(todoForm);\n\n    const content = document.getElementById('content');\n    content.append(todoInputModal);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoModal);\n\n//# sourceURL=webpack://todo-list/./src/modals.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectProto = {\n    setNewTitle(newTitle) {\n        this.title = newTitle;\n    }\n}\n\nconst createProject = (title) => {\n    const project = Object.create(projectProto);\n    project.title = title;\n    return project;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todoapp.js":
/*!************************!*\
  !*** ./src/todoapp.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoApp: () => (/* binding */ todoApp)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst todoApp = {\n    projects: []\n}\n\nfunction defaultProject() {\n    const personalProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Personal');\n    todoApp.projects.push(personalProject);\n}\n\ndefaultProject();\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoapp.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);