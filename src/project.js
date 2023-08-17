const projectProto = {
    setNewTitle(newTitle) {
        this.title = newTitle;
    }
}

const createProject = (title) => {
    const project = Object.create(projectProto);
    project.title = title;
    return project;
};

export default createProject;