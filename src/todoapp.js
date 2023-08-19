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
    const personalProject = createProject('Personal');
    todoApp.projects.push(personalProject);
};


export { todoApp, defaultProject };