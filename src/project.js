const projectProto = {
    setNewTitle(newTitle) {
        this.title = newTitle;
    }
}

const createProject = (title) => {
    const project = Object.create(projectProto);
    project.title = title;
    project.todos = [];
    return project;
};

export default createProject;