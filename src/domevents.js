import eventsHandler from "./pubsub";
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
        const projectTitle = document.getElementById('project-title');

        const projectForm = document.getElementById('project-form');

        projectForm.addEventListener('submit', (event) => {
            event.preventDefault();
            createProject(projectTitle.value);
            domEvents.deleteModal();
        })
    },

    newTodoSubmission: function() {
        const todoTitle = document.getElementById('todo-title');
        const todoDesc = document.getElementById('todo-description');
        const todoDate = document.getElementById('todo-dueDate');
        const todoPriority = document.getElementById('todo-priority');
        const todoProject = document.getElementById('todo-project');
        const todoForm = document.getElementById('todo-form');

        todoForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let newTodo = createTodo(todoTitle.value, todoDesc.value, todoDate.value, todoPriority.value);
            
            /* This finds the project in todoApp array of projects which matches the selected project in the dropdown of todo creation modal, then pushes the todo to that projects array of todos  */
            todoApp.projects.find(({ title }) => title === `${todoProject.value}`).todos.push(newTodo);

            domEvents.deleteModal();


        });
    }


    
};



export { domEvents };

