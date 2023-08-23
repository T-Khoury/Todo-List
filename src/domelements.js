import makeElem from "./makeElem";
import { todoApp } from "./todoapp";
import { eventsHandler } from "./pubsub"



const domElements = {
    createButtons: function() {
        const content = document.getElementById('content');
        const projects = document.getElementById('projects');
    
        const newTodo = makeElem('button', {id: 'new-todo-button'}, 'New ToDo');
        const newProject = makeElem('button', {id: 'new-project-button'}, 'New Project');
    
        content.append(newTodo);
        content.append(newProject);
    },
    todoModal: function() {
        const todoInputModal = makeElem('div', {class: 'modal'});
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

        todoInputModal.append(todoForm);

        const content = document.getElementById('content');
        content.append(todoInputModal);
    },
    projectModal: function() {
        const projectInputModal = makeElem('div', {class: 'modal'});
        const projectForm = makeElem('form', {id: 'project-form'});

        const titleLabel = makeElem('label', {for: 'project-title-input'}, 'Title');
        const titleInput = makeElem('input', {type: 'text', id: 'project-title-input', name: 'project-title-input', placeholder: 'Title', required: ''});

        const projectSubmit = makeElem('button', {type: 'submit', id: 'project-submit'}, 'Submit');

        projectForm.append(titleLabel, titleInput, projectSubmit);
        projectInputModal.append(projectForm);

        const content = document.getElementById('content');

        content.append(projectInputModal);

    },

    projectElementCreate: function(project) {
        const projectSection = document.getElementById('projects');
        const projectDiv = makeElem('div', {class: 'project'}, `${project.title}`);
        projectSection.append(projectDiv);
    },

    todoElementCreate: function(todo) {

        console.log(todo);

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

    renderTodos: function(project) {

        console.log(project.todos);

        const todoContainer = document.getElementById('todo-container');

        const todoArray = project.todos;
        
        const todoElements = todoArray.map((todo) => domElements.todoElementCreate(todo));

        todoContainer.replaceChildren();

        todoElements.forEach((element) => todoContainer.append(element));

        console.log(todoArray);

     /*   todoElements.forEach((element) => todoContainer.append(element));  */
    }




};




export { domElements };



