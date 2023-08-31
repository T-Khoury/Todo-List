import createProject from "./project";
import { eventsHandler } from "./pubsub";

const todoApp = {
    projects: [],
    acceptData: function() {
        eventsHandler.subscribe('projectCreated', todoApp.addProject);
        eventsHandler.subscribe('todoCreated', todoApp.addTodo);
    },
    addProject: function(project) {
        todoApp.projects.push(project);

        eventsHandler.publish('todoAppUpdated', todoApp.projects);
    },
    addTodo: function(todo) {
        /* This finds the project in todoApp array of projects which matches the selected project in the dropdown of todo creation modal, then pushes the todo to that projects array of todos  */
        todoApp.projects.find(({ title }) => title === `${todo.project}`).todos.push(todo);

        eventsHandler.publish('todoAppUpdated', todoApp.projects);
    },

    defaultProject: function() {
        createProject('Personal');
    }
};



export { todoApp };