import { eventsHandler } from "./pubsub";
import { domElements } from "./domelements";
import createProject from "./project";
import createTodo from "./todo";
import { todoApp } from "./todoapp";



const domEvents = {

    createModalsWithButtons: function() {
        const newTodoButton = document.getElementById('new-todo-button');
        const newProjectButton = document.getElementById('new-project-button');

        newTodoButton.addEventListener('click', function () {
            domElements.todoModal();
            domEvents.closeModalFunction();
            domEvents.newTodoSubmission();
        });
        newProjectButton.addEventListener('click', function () {
            domElements.projectModal();
            domEvents.closeModalFunction();
            domEvents.newProjectSubmission();
        });
    },

    deleteModal: function() {
        const currentModal = document.querySelector('.modal');
        currentModal.remove();
    },

    closeModalFunction: function() {
        const modal = document.querySelector('.modal');
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                console.log('bbbb');
                domEvents.deleteModal();
            };
        });
    },

    newProjectSubmission: function() {
        const projectTitle = document.getElementById('project-title-input');

        const projectForm = document.getElementById('project-form');

        projectForm.addEventListener('submit', (event) => {
            event.preventDefault();
            createProject(projectTitle.value);
            domEvents.deleteModal();
        })
    },

    newTodoSubmission: function() {
        const todoTitleInput = document.getElementById('todo-title-input');
        const todoDescInput = document.getElementById('todo-description-input');
        const todoDateInput = document.getElementById('todo-dueDate-input');
        const todoPriorityInput = document.getElementById('todo-priority-input');
        const todoProjectInput = document.getElementById('todo-project-input');
        const todoFormInput = document.getElementById('todo-form-input');

        const todoContainer = document.getElementById('todo-container');

        todoFormInput.addEventListener('submit', (event) => {
            event.preventDefault();
            createTodo(todoTitleInput.value, todoDescInput.value, todoDateInput.value, todoPriorityInput.value, todoProjectInput.value);
            
           domEvents.deleteModal();


        });
    },

    domUpdates: function() {
        eventsHandler.subscribe('projectDivCreated', domEvents.projectEventListener);
        eventsHandler.subscribe('todoContainerUpdated', domElements.renderTodos);
        eventsHandler.subscribe('todoCreated', domEvents.checkForInstantRender);
        eventsHandler.subscribe('todoDeleted', domElements.renderTodos);
    },


    projectEventListener: function(projectLabel) {
        projectLabel.addEventListener('click', function () {
            domEvents.changeTodoContainerClass(projectLabel);
        });
    },

    changeTodoContainerClass: function(projectLabel) {
        const todoContainer = document.getElementById('todo-container');
        todoContainer.setAttribute('class', `${projectLabel.textContent}`);
        eventsHandler.publish('todoContainerUpdated', todoContainer.getAttribute('class'));
    },

    emptyTodoContainer: function() {
        const todoContainer = document.getElementById('todo-container');
        todoContainer.replaceChildren();
    },

    checkForInstantRender: function(todo) {
        let currentActiveProject = document.getElementById('todo-container').getAttribute('class');
        if (currentActiveProject === todo.project) {
            domElements.renderTodos(todo.project);
        } else {
            return;
        };

    },

    dateListeners: function() {
        const todayButton = document.getElementById('today');
        todayButton.addEventListener('click', () => {
            todoApp.todaysTodos();
        });
        const weekButton = document.getElementById('this-week');
        weekButton.addEventListener('click', () => {
            todoApp.thisWeeksTodos();
        });
        const monthButton = document.getElementById('this-month');
        monthButton.addEventListener('click', () => {
            todoApp.thisMonthsTodos();
        });
    }

};



export { domEvents };

