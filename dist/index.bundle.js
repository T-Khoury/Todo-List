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

/***/ "./src/domelements.js":
/*!****************************!*\
  !*** ./src/domelements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domElements: () => (/* binding */ domElements)\n/* harmony export */ });\n/* harmony import */ var _makeElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElem */ \"./src/makeElem.js\");\n/* harmony import */ var _todoapp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoapp */ \"./src/todoapp.js\");\n\n\n\n\n\nconst domElements = {\n    createButtons: function() {\n        const content = document.getElementById('content');\n        const projects = document.getElementById('projects');\n    \n        const newTodo = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {id: 'new-todo-button'}, 'New ToDo');\n        const newProject = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {id: 'new-project-button'}, 'New Project');\n    \n        content.append(newTodo);\n        content.append(newProject);\n    },\n    todoModal: function() {\n        const todoInputModal = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {class: 'modal'});\n        const todoForm = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', {id: 'todo-form'});\n\n        const titleLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-title'}, 'Title');\n        const titleInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'text', id: 'todo-title', name: 'todo-title', placeholder: 'Title', required: ''});\n\n        const descLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-description'}, 'Description');\n        const descInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'text', id: 'todo-description', name: 'todo-description', placeholder: 'Description', required: ''});\n\n        const dueDateLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-dueDate'}, 'Due Date');\n        const dueDateInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'date', id: 'todo-dueDate', name: 'todo-dueDate', required: ''});\n\n        const priorityLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-priority'}, 'Priority');\n        const priorityInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('select', {id: 'todo-priority', name: 'todo-priority'});\n        const priorityOptionLow = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: 'Low'}, 'Low');\n        const priorityOptionMed = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: 'Med'}, 'Med');\n        const priorityOptionHigh = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: 'High'}, 'High');\n\n        priorityInput.append(priorityOptionLow, priorityOptionMed, priorityOptionHigh);\n\n        const projectLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-project'}, 'Project');\n        const projectInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('select', {id: 'todo-project', name: 'todo_project'});\n        _todoapp__WEBPACK_IMPORTED_MODULE_1__.todoApp.projects.map((project) => {\n            projectInput.append((0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: `${project.title}`}, `${project.title}`))\n        });\n\n\n        const todoSubmit = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {type: 'submit', id: 'todo-submit'}, 'Submit');\n\n        todoForm.append(titleLabel, titleInput, descLabel, descInput, dueDateLabel, dueDateInput, priorityLabel, priorityInput, projectLabel, projectInput, todoSubmit);\n\n        todoInputModal.append(todoForm);\n\n        const content = document.getElementById('content');\n        content.append(todoInputModal);\n    },\n    projectModal: function() {\n        const projectInputModal = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {class: 'modal'});\n        const projectForm = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', {id: 'project-form'});\n\n        const titleLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'project-title'}, 'Title');\n        const titleInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'text', id: 'project-title', name: 'project-title', placeholder: 'Title', required: ''});\n\n        const projectSubmit = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {type: 'submit', id: 'project-submit'}, 'Submit');\n\n        projectForm.append(titleLabel, titleInput, projectSubmit);\n        projectInputModal.append(projectForm);\n\n        const content = document.getElementById('content');\n\n        content.append(projectInputModal);\n\n    }\n\n\n\n};\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domelements.js?");

/***/ }),

/***/ "./src/domevents.js":
/*!**************************!*\
  !*** ./src/domevents.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domEvents: () => (/* binding */ domEvents)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n/* harmony import */ var _domelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domelements */ \"./src/domelements.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoapp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoapp */ \"./src/todoapp.js\");\n\n\n\n\n\n\n\nconst domEvents = {\n\n    createModalsWithButtons: function() {\n        const newTodoButton = document.getElementById('new-todo-button');\n        const newProjectButton = document.getElementById('new-project-button');\n\n        newTodoButton.addEventListener('click', function () {\n            _domelements__WEBPACK_IMPORTED_MODULE_1__.domElements.todoModal();\n            domEvents.newTodoSubmission();\n        });\n        newProjectButton.addEventListener('click', function () {\n            _domelements__WEBPACK_IMPORTED_MODULE_1__.domElements.projectModal();\n            domEvents.newProjectSubmission();\n        });\n    },\n\n    newProjectSubmission: function() {\n        const projectTitle = document.getElementById('project-title');\n        \n        const projectSubmitButton = document.getElementById('project-submit');\n        projectSubmitButton.addEventListener('click', (event) => {\n            event.preventDefault();\n            (0,_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projectTitle.value);\n        })\n    },\n\n    newTodoSubmission: function() {\n        const todoTitle = document.getElementById('todo-title');\n        const todoDesc = document.getElementById('todo-description');\n        const todoDate = document.getElementById('todo-dueDate');\n        const todoPriority = document.getElementById('todo-priority');\n        const todoProject = document.getElementById('todo-project');\n        const todoSubmitButton = document.getElementById('todo-submit');\n\n        todoSubmitButton.addEventListener('click', (event) => {\n            event.preventDefault();\n            let newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(todoTitle.value, todoDesc.value, todoDate.value, todoPriority.value);\n            _todoapp__WEBPACK_IMPORTED_MODULE_4__.todoApp.projects.find(({ title }) => title === `${todoProject.value}`).todos.push(newTodo);\n        })\n    }\n\n\n    \n};\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domevents.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _makeElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElem */ \"./src/makeElem.js\");\n/* harmony import */ var _todoapp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoapp */ \"./src/todoapp.js\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconsole.log(_todoapp__WEBPACK_IMPORTED_MODULE_1__.todoApp);\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/makeElem.js":
/*!*************************!*\
  !*** ./src/makeElem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeElem)\n/* harmony export */ });\nfunction makeElem(type, attributes, text) {\n    const element = document.createElement(type);\n    for (let key in attributes) {\n        element.setAttribute(key, attributes[key])\n    };\n    if (text) {\n        element.textContent = text\n    };\n    return element;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/makeElem.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domevents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domevents */ \"./src/domevents.js\");\n/* harmony import */ var _domelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domelements */ \"./src/domelements.js\");\n/* harmony import */ var _todoapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoapp */ \"./src/todoapp.js\");\n\n\n\n\nconst pageLoad = function () {\n    _domelements__WEBPACK_IMPORTED_MODULE_1__.domElements.createButtons();\n    _domevents__WEBPACK_IMPORTED_MODULE_0__.domEvents.createModalsWithButtons();\n    (0,_todoapp__WEBPACK_IMPORTED_MODULE_2__.defaultProject)();\n    _todoapp__WEBPACK_IMPORTED_MODULE_2__.todoApp.acceptData();\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://todo-list/./src/pageLoad.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nconst projectProto = {\n    setNewTitle(newTitle) {\n        this.title = newTitle;\n    }\n}\n\nconst createProject = (title) => {\n    const project = Object.create(projectProto);\n    project.title = title;\n    project.todos = [];\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.eventsHandler.publish('projectCreated', project);\n    return project;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventsHandler: () => (/* binding */ eventsHandler)\n/* harmony export */ });\n\n\nconst eventsHandler = {\n    events: {},\n    subscribe: function(eventName, fn) {\n        this.events[eventName] = this.events[eventName] || [];\n        this.events[eventName].push(fn);\n    },\n    unsubscribe: function(eventName, fn) {\n        if (this.events[eventName]) {\n            for (let i = 0; i < this.events[eventName].length; i++) {\n                if (this.events[eventName][i] === fn) {\n                    this.events[eventName].splice(i, 1);\n                    break;\n                };\n            };\n        };\n    },\n    publish: function(eventName, data) {\n        if (this.events[eventName]) {\n            this.events[eventName].forEach(function(fn) {\n                fn(data);\n            });\n        };\n    }\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/pubsub.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoProto = {\n    toggleComplete() {\n        this.isCompleted = !this.isCompleted;\n    },\n    setNewTitle(newTitle) {\n        this.title = newTitle;\n    },\n    setNewDesc(newDesc) {\n        this.description = newDesc;\n    },\n    setNewDate(newDueDate) {\n        this.dueDate = newDueDate;\n    },\n    setNewPriority(newPriority) {\n        this.priority = newPriority\n    }\n};\n\n\nconst createTodo = (title, description, dueDate, priority) => {\n    let isCompleted = false;\n    const toDo = Object.create(todoProto);\n    toDo.title = title;\n    toDo.description = description;\n    toDo.dueDate = dueDate;\n    toDo.priority = priority;\n    toDo.isCompleted = false;\n    return toDo;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoapp.js":
/*!************************!*\
  !*** ./src/todoapp.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultProject: () => (/* binding */ defaultProject),\n/* harmony export */   todoApp: () => (/* binding */ todoApp)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\n\nconst todoApp = {\n    projects: [],\n    acceptData: function() {\n        _pubsub__WEBPACK_IMPORTED_MODULE_1__.eventsHandler.subscribe('projectCreated', todoApp.addProject);\n    },\n    addProject: function(project) {\n        todoApp.projects.push(project);\n        console.log(todoApp.projects);\n    }\n};\n\n\n\nfunction defaultProject() {\n    const personalProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Personal');\n    todoApp.projects.push(personalProject);\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoapp.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);