import { eventsHandler } from "./pubsub";
import { todoApp } from "./todoapp";

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


const createTodo = (title, description, dueDate, priority, project) => {
    let isCompleted = false;
    const toDo = Object.create(todoProto);
    toDo.title = title;
    toDo.description = description;
    toDo.dueDate = dueDate;
    toDo.priority = priority;
    toDo.project = project;
    toDo.isCompleted = false;

    /* This finds the project in todoApp array of projects which matches the selected project in the dropdown of todo creation modal, then pushes the todo to that projects array of todos  */
    todoApp.projects.find(({ title }) => title === `${toDo.project}`).todos.push(toDo);

    eventsHandler.publish('todoCreated', toDo.project);

    
    return toDo;
};

export default createTodo;

