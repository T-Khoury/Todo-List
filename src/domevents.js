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

    newProjectSubmission: function() {
        const projectTitle = document.getElementById('project-title');
        
        const projectSubmitButton = document.getElementById('project-submit');
        projectSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
            createProject(projectTitle.value);
        })
    },

    newTodoSubmission: function() {
        const todoTitle = document.getElementById('todo-title');
        const todoDesc = document.getElementById('todo-description');
        const todoDate = document.getElementById('todo-dueDate');
        const todoPriority = document.getElementById('todo-priority');
        const todoProject = document.getElementById('todo-project');
        const todoSubmitButton = document.getElementById('todo-submit');

        todoSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
            let newTodo = createTodo(todoTitle.value, todoDesc.value, todoDate.value, todoPriority.value);
            todoApp.projects.find(({ title }) => title === `${todoProject.value}`).todos.push(newTodo);
        })
    }


    
};



export { domEvents };

