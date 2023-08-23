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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domElements: () => (/* binding */ domElements)\n/* harmony export */ });\n/* harmony import */ var _makeElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElem */ \"./src/makeElem.js\");\n/* harmony import */ var _todoapp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoapp */ \"./src/todoapp.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\n\n\n\n\nconst domElements = {\n    createButtons: function() {\n        const content = document.getElementById('content');\n        const projects = document.getElementById('projects');\n    \n        const newTodo = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {id: 'new-todo-button'}, 'New ToDo');\n        const newProject = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {id: 'new-project-button'}, 'New Project');\n    \n        content.append(newTodo);\n        content.append(newProject);\n    },\n    todoModal: function() {\n        const todoInputModal = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {class: 'modal'});\n        const todoForm = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', {id: 'todo-form-input'});\n\n        const titleLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-title-input'}, 'Title');\n        const titleInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'text', id: 'todo-title-input', name: 'todo-title-input', placeholder: 'Title', required: ''});\n\n        const descLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-description-input'}, 'Description');\n        const descInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'text', id: 'todo-description-input', name: 'todo-description-input', placeholder: 'Description', required: ''});\n\n        const dueDateLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-dueDate-input'}, 'Due Date');\n        const dueDateInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'date', id: 'todo-dueDate-input', name: 'todo-dueDate-input', required: ''});\n\n        const priorityLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-priority-input'}, 'Priority');\n        const priorityInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('select', {id: 'todo-priority-input', name: 'todo-priority-input'});\n        const priorityOptionLow = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: 'Low'}, 'Low');\n        const priorityOptionMed = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: 'Med'}, 'Med');\n        const priorityOptionHigh = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: 'High'}, 'High');\n\n        priorityInput.append(priorityOptionLow, priorityOptionMed, priorityOptionHigh);\n\n        const projectLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'todo-project-input'}, 'Project');\n        const projectInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('select', {id: 'todo-project-input', name: 'todo_project-input'});\n        _todoapp__WEBPACK_IMPORTED_MODULE_1__.todoApp.projects.map((project) => {\n            projectInput.append((0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {value: `${project.title}`}, `${project.title}`))\n        });\n\n\n        const todoSubmit = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {type: 'submit', id: 'todo-submit'}, 'Submit');\n\n        todoForm.append(titleLabel, titleInput, descLabel, descInput, dueDateLabel, dueDateInput, priorityLabel, priorityInput, projectLabel, projectInput, todoSubmit);\n\n        todoInputModal.append(todoForm);\n\n        const content = document.getElementById('content');\n        content.append(todoInputModal);\n    },\n    projectModal: function() {\n        const projectInputModal = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {class: 'modal'});\n        const projectForm = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', {id: 'project-form'});\n\n        const titleLabel = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', {for: 'project-title-input'}, 'Title');\n        const titleInput = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'text', id: 'project-title-input', name: 'project-title-input', placeholder: 'Title', required: ''});\n\n        const projectSubmit = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {type: 'submit', id: 'project-submit'}, 'Submit');\n\n        projectForm.append(titleLabel, titleInput, projectSubmit);\n        projectInputModal.append(projectForm);\n\n        const content = document.getElementById('content');\n\n        content.append(projectInputModal);\n\n    },\n\n    projectElementCreate: function(project) {\n        const projectSection = document.getElementById('projects');\n        const projectDiv = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {class: 'project'}, `${project.title}`);\n        projectSection.append(projectDiv);\n    },\n\n    todoElementCreate: function(todo) {\n\n        console.log(todo);\n\n        const todoElement = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {class: 'todo-element'});\n        const todoCheckBox = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', {type: 'checkbox', name: 'complete'});\n        const todoTitle = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', {class: 'todo-title'}, `${todo.title}`);\n        const todoDate = (0,_makeElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', {class: 'todo-date'}, `${todo.dueDate}`);\n        todoElement.append(todoCheckBox, todoTitle, todoDate);\n\n        return todoElement;\n    }, \n\n    renderProjects: function() {\n        _pubsub__WEBPACK_IMPORTED_MODULE_2__.eventsHandler.subscribe('projectCreated', domElements.projectElementCreate);\n\n    },\n\n    renderTodos: function(project) {\n\n        console.log(project.todos);\n\n        const todoContainer = document.getElementById('todo-container');\n\n        const todoArray = project.todos;\n        \n        const todoElements = todoArray.map((todo) => domElements.todoElementCreate(todo));\n\n        todoContainer.replaceChildren();\n\n        todoElements.forEach((element) => todoContainer.append(element));\n\n        console.log(todoArray);\n\n     /*   todoElements.forEach((element) => todoContainer.append(element));  */\n    }\n\n\n\n\n};\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domelements.js?");

/***/ }),

/***/ "./src/domevents.js":
/*!**************************!*\
  !*** ./src/domevents.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domEvents: () => (/* binding */ domEvents)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n/* harmony import */ var _domelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domelements */ \"./src/domelements.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoapp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoapp */ \"./src/todoapp.js\");\n\n\n\n\n\n\n\nconst domEvents = {\n\n    createModalsWithButtons: function() {\n        const newTodoButton = document.getElementById('new-todo-button');\n        const newProjectButton = document.getElementById('new-project-button');\n\n        newTodoButton.addEventListener('click', function () {\n            _domelements__WEBPACK_IMPORTED_MODULE_1__.domElements.todoModal();\n            domEvents.newTodoSubmission();\n        });\n        newProjectButton.addEventListener('click', function () {\n            _domelements__WEBPACK_IMPORTED_MODULE_1__.domElements.projectModal();\n            domEvents.newProjectSubmission();\n        });\n    },\n\n    deleteModal: function() {\n        const currentModal = document.querySelector('.modal');\n        currentModal.remove();\n    },\n\n    newProjectSubmission: function() {\n        const projectTitle = document.getElementById('project-title-input');\n\n        const projectForm = document.getElementById('project-form');\n\n        projectForm.addEventListener('submit', (event) => {\n            event.preventDefault();\n            (0,_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projectTitle.value);\n            domEvents.deleteModal();\n        })\n    },\n\n    newTodoSubmission: function() {\n        const todoTitleInput = document.getElementById('todo-title-input');\n        const todoDescInput = document.getElementById('todo-description-input');\n        const todoDateInput = document.getElementById('todo-dueDate-input');\n        const todoPriorityInput = document.getElementById('todo-priority-input');\n        const todoProjectInput = document.getElementById('todo-project-input');\n        const todoFormInput = document.getElementById('todo-form-input');\n\n        todoFormInput.addEventListener('submit', (event) => {\n            event.preventDefault();\n            let newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(todoTitleInput.value, todoDescInput.value, todoDateInput.value, todoPriorityInput.value);\n            \n            /* This finds the project in todoApp array of projects which matches the selected project in the dropdown of todo creation modal, then pushes the todo to that projects array of todos  */\n            _todoapp__WEBPACK_IMPORTED_MODULE_4__.todoApp.projects.find(({ title }) => title === `${todoProjectInput.value}`).todos.push(newTodo);\n\n            domEvents.deleteModal();\n\n\n        });\n    },\n\n    attachProjectExpand: function() {\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__.eventsHandler.subscribe('projectCreated', domEvents.displayProjectsTodos);\n    },\n\n    displayProjectsTodos: function(project) {\n        console.log(project);\n        const projectElement = document.querySelector('.project:last-child');\n        console.log(projectElement);\n        projectElement.addEventListener('click', () => {\n                _domelements__WEBPACK_IMPORTED_MODULE_1__.domElements.renderTodos(project);\n            });\n    },\n\n    \n};\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domevents.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domevents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domevents */ \"./src/domevents.js\");\n/* harmony import */ var _domelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domelements */ \"./src/domelements.js\");\n/* harmony import */ var _todoapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoapp */ \"./src/todoapp.js\");\n\n\n\n\nconst pageLoad = function () {\n    _domelements__WEBPACK_IMPORTED_MODULE_1__.domElements.createButtons();\n    _domevents__WEBPACK_IMPORTED_MODULE_0__.domEvents.createModalsWithButtons();\n    _todoapp__WEBPACK_IMPORTED_MODULE_2__.todoApp.acceptData();\n    _domelements__WEBPACK_IMPORTED_MODULE_1__.domElements.renderProjects();\n    _domevents__WEBPACK_IMPORTED_MODULE_0__.domEvents.attachProjectExpand();\n    (0,_todoapp__WEBPACK_IMPORTED_MODULE_2__.defaultProject)();\n\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://todo-list/./src/pageLoad.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nconst projectProto = {\n    setNewTitle(newTitle) {\n        this.title = newTitle;\n    }\n}\n\nconst createProject = (title) => {\n    const project = Object.create(projectProto);\n    project.title = title;\n    project.todos = [];\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.eventsHandler.publish('projectCreated', project);\n    \n    return project;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultProject: () => (/* binding */ defaultProject),\n/* harmony export */   todoApp: () => (/* binding */ todoApp)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\n\nconst todoApp = {\n    projects: [],\n    acceptData: function() {\n        _pubsub__WEBPACK_IMPORTED_MODULE_1__.eventsHandler.subscribe('projectCreated', todoApp.addProject);\n    },\n    addProject: function(project) {\n        todoApp.projects.push(project);\n        console.log(todoApp.projects);\n    }\n};\n\n\n\nfunction defaultProject() {\n    (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Personal');\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoapp.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);