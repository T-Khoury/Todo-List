import eventsHandler from "./pubsub";
import { domElements } from "./domelements";


const domEvents = {

    createModalsWithButtons: function() {
        const newTodoButton = document.getElementById('new-todo-button');
        const newProjectButton = document.getElementById('new-project-button');

        newTodoButton.addEventListener('click', function () {
            domElements.todoModal();
            domElements.newTodoSubmission();
        });
        newProjectButton.addEventListener('click', function () {
            domElements.projectModal();
            domEvents.newProjectSubmission();
        });
    },

    newProjectSubmission: function() {
        const projectSubmitButton = document.getElementById('project-submit');
        projectSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
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

