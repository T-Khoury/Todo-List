import { eventsHandler } from "./pubsub";

const projectProto = {
    setNewTitle(newTitle) {
        this.title = newTitle;
    }
}

const createProject = (title) => {
    const project = Object.create(projectProto);
    project.title = title;
    project.todos = [];

    eventsHandler.publish('projectCreated', project);
    return project;
};

export default createProject;