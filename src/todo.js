const todoProto = {
    toggleComplete() {
        this.isCompleted = !this.isCompleted;
    },
    setNewTitle(newTitle) {
        this.title = newTitle;
    },
    setNewDesc(newDesc) {
        this.description = newDesc;
    },
    setNewDate(newDueDate) {
        this.dueDate = newDueDate;
    },
    setNewPriority(newPriority) {
        this.priority = newPriority
    }
};


const createTodo = (title, description, dueDate, priority) => {
    let isCompleted = false;
    const toDo = Object.create(todoProto);
    toDo.title = title;
    toDo.description = description;
    toDo.dueDate = dueDate;
    toDo.priority = priority;
    toDo.isCompleted = false;
    return toDo;
};

export default createTodo;

