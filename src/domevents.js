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
            domEvents.newTodoSubmission();
        });
        newProjectButton.addEventListener('click', function () {
            domElements.projectModal();
            domEvents.newProjectSubmission();
        });
    },

    deleteModal: function() {
        const currentModal = document.querySelector('.modal');
        currentModal.remove();
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

        todoFormInput.addEventListener('submit', (event) => {
            event.preventDefault();
            let newTodo = createTodo(todoTitleInput.value, todoDescInput.value, todoDateInput.value, todoPriorityInput.value);
            
            /* This finds the project in todoApp array of projects which matches the selected project in the dropdown of todo creation modal, then pushes the todo to that projects array of todos  */
            todoApp.projects.find(({ title }) => title === `${todoProjectInput.value}`).todos.push(newTodo);

            domEvents.deleteModal();


        });
    },

    attachProjectExpand: function() {
        eventsHandler.subscribe('projectCreated', domEvents.displayProjectsTodos);
    },

    displayProjectsTodos: function(project) {
        console.log(project);
        const projectElement = document.querySelector('.project:last-child');
        console.log(projectElement);
        projectElement.addEventListener('click', () => {
                domElements.renderTodos(project);
            });
    },

    
};



export { domEvents };

