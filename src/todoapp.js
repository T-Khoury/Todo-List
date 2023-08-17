import createProject from "./project";


const todoApp = {
    projects: []
}

function defaultProject() {
    const personalProject = createProject('Personal');
    todoApp.projects.push(personalProject);
}

defaultProject();

export { todoApp };