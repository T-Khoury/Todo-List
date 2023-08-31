import { eventsHandler } from "./pubsub";
import { todoApp } from "./todoapp";
import { domElements } from "./domelements";
import createProject from "./project";
import createTodo from "./todo";


const storage = {
    getUpdates: function() {
        eventsHandler.subscribe('todoAppUpdated', storage.updateStorage);
    },
    updateStorage: function(projects) {
        localStorage.setItem('mydata', JSON.stringify(projects));
    },
    retrieveStorage: function() {
        if (localStorage.getItem('mydata') == null) {
            todoApp.defaultProject();
        } else {
        const data = localStorage.getItem('mydata');
        const projects = JSON.parse(data);
        console.log(projects);

        projects.forEach((project) => {
            console.log(project);
            createProject(project.title);
            project.todos.forEach((todo) => {
                createTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.project);
            });
        });
        };
    }
};

export default storage;