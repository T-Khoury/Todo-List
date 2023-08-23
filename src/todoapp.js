import createProject from "./project";
import { eventsHandler } from "./pubsub";

const todoApp = {
    projects: [],
    acceptData: function() {
        eventsHandler.subscribe('projectCreated', todoApp.addProject);
    },
    addProject: function(project) {
        todoApp.projects.push(project);
        console.log(todoApp.projects);
    }
};



function defaultProject() {
    createProject('Personal');
};


export { todoApp, defaultProject };