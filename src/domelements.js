import makeElem from "./makeElem";
import { todoApp } from "./todoapp";
import { eventsHandler } from "./pubsub";
import todoicon from './images/icons/plus-square.svg';



const domElements = {
    createButtons: function() {
        const maincontent = document.getElementById('main');
        const projects = document.getElementById('projects');
    
        const newTodo = makeElem('button', {id: 'new-todo-button'});
        const todoButtonImg = makeElem('img', {src: todoicon, alt: 'New todo button'});
        const newProject = makeElem('button', {id: 'new-project-button'}, 'New Project');

        newTodo.append(todoButtonImg);
    
        maincontent.append(newTodo);
        projects.append(newProject);
    },
    todoModal: function() {
        const todoInputModal = makeElem('div', {class: 'modal'});
        const todoInputModalContent = makeElem('div', {class: 'modal-content'});
        const todoForm = makeElem('form', {id: 'todo-form-input'});

        const titleLabel = makeElem('label', {for: 'todo-title-input'}, 'Title');
        const titleInput = makeElem('input', {type: 'text', id: 'todo-title-input', name: 'todo-title-input', placeholder: 'Title', required: ''});

        const descLabel = makeElem('label', {for: 'todo-description-input'}, 'Description');
        const descInput = makeElem('input', {type: 'text', id: 'todo-description-input', name: 'todo-description-input', placeholder: 'Description', required: ''});

        const dueDateLabel = makeElem('label', {for: 'todo-dueDate-input'}, 'Due Date');
        const dueDateInput = makeElem('input', {type: 'date', id: 'todo-dueDate-input', name: 'todo-dueDate-input', required: ''});

        const priorityLabel = makeElem('label', {for: 'todo-priority-input'}, 'Priority');
        const priorityInput = makeElem('select', {id: 'todo-priority-input', name: 'todo-priority-input'});
        const priorityOptionLow = makeElem('option', {value: 'Low'}, 'Low');
        const priorityOptionMed = makeElem('option', {value: 'Med'}, 'Med');
        const priorityOptionHigh = makeElem('option', {value: 'High'}, 'High');

        priorityInput.append(priorityOptionLow, priorityOptionMed, priorityOptionHigh);

        const projectLabel = makeElem('label', {for: 'todo-project-input'}, 'Project');
        const projectInput = makeElem('select', {id: 'todo-project-input', name: 'todo_project-input'});
        todoApp.projects.map((project) => {
            projectInput.append(makeElem('option', {value: `${project.title}`}, `${project.title}`))
        });


        const todoSubmit = makeElem('button', {type: 'submit', id: 'todo-submit'}, 'Submit');

        todoForm.append(titleLabel, titleInput, descLabel, descInput, dueDateLabel, dueDateInput, priorityLabel, priorityInput, projectLabel, projectInput, todoSubmit);

        todoInputModalContent.append(todoForm);
        todoInputModal.append(todoInputModalContent);

        const content = document.getElementById('content');
        content.append(todoInputModal);

        eventsHandler.publish('modalCreated', )
    },
    projectModal: function() {
        const projectInputModal = makeElem('div', {class: 'modal'});
        const projectInputModalContent = makeElem('div', {class: 'modal-content'});
        const projectForm = makeElem('form', {id: 'project-form'});

        const titleLabel = makeElem('label', {for: 'project-title-input'}, 'Title');
        const titleInput = makeElem('input', {type: 'text', id: 'project-title-input', name: 'project-title-input', placeholder: 'Title', required: ''});

        const projectSubmit = makeElem('button', {type: 'submit', id: 'project-submit'}, 'Submit');

        projectForm.append(titleLabel, titleInput, projectSubmit);
        projectInputModalContent.append(projectForm);
        projectInputModal.append(projectInputModalContent);

        const content = document.getElementById('content');

        content.append(projectInputModal);

    },

    projectElementCreate: function(project) {
        const projectSection = document.getElementById('projects');
        const projectDiv = makeElem('div', {class: 'project'}, `${project.title}`);
        projectSection.append(projectDiv);
        eventsHandler.publish('projectDivCreated', projectDiv);
        console.log(projectDiv);
    },

    todoElementCreate: function(todo) {

        const todoElement = makeElem('div', {class: 'todo-element'});
        const todoCheckBox = makeElem('input', {type: 'checkbox', name: 'complete'});
        const todoTitle = makeElem('p', {class: 'todo-title'}, `${todo.title}`);
        const todoDate = makeElem('p', {class: 'todo-date'}, `${todo.dueDate}`);
        todoElement.append(todoCheckBox, todoTitle, todoDate);

        return todoElement;
    }, 

    renderProjects: function() {
        eventsHandler.subscribe('projectCreated', domElements.projectElementCreate);

    }, 

    renderTodos: function(projectName) {

        const todoContainer = document.getElementById('todo-container');
        const projectObject = todoApp.projects.find(({ title }) => title === `${projectName}`);

        const todoArray = projectObject.todos;
        
        const todoElements = todoArray.map((todo) => domElements.todoElementCreate(todo));

        todoContainer.replaceChildren();

        todoElements.forEach((element) => todoContainer.append(element));

    },


};




export { domElements };



