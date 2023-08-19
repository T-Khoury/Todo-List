import eventsHandler from "./pubsub";
import { domElements } from "./domelements";
import createProject from "./project";
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

    newProjectSubmission: function() {
        const projectSubmitButton = document.getElementById('project-submit');
        const projectTitle = document.getElementById('project-title')
        projectSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
            createProject(projectTitle.value);
        })
    },

    newTodoSubmission: function() {
        const todoSubmitButton = document.getElementById('todo-submit');
        todoSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
        })
    }


    
};



export { domEvents };

