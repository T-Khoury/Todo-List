import makeElem from "./makeElem";
import { todoApp } from "./todoapp";



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
        const todoForm = makeElem('form', {id: 'todo-form'});

        const titleLabel = makeElem('label', {for: 'todo-title'}, 'Title');
        const titleInput = makeElem('input', {type: 'text', id: 'todo-title', name: 'todo-title', placeholder: 'Title', required: ''});

        const descLabel = makeElem('label', {for: 'todo-description'}, 'Description');
        const descInput = makeElem('input', {type: 'text', id: 'todo-description', name: 'todo-description', placeholder: 'Description', required: ''});

        const dueDateLabel = makeElem('label', {for: 'todo-dueDate'}, 'Due Date');
        const dueDateInput = makeElem('input', {type: 'date', id: 'todo-dueDate', name: 'todo-dueDate', required: ''});

        const priorityLabel = makeElem('label', {for: 'todo-priority'}, 'Priority');
        const priorityInput = makeElem('select', {id: 'todo-priority', name: 'todo-priority'});
        const priorityOptionLow = makeElem('option', {value: 'Low'}, 'Low');
        const priorityOptionMed = makeElem('option', {value: 'Med'}, 'Med');
        const priorityOptionHigh = makeElem('option', {value: 'High'}, 'High');

        priorityInput.append(priorityOptionLow, priorityOptionMed, priorityOptionHigh);

        const projectLabel = makeElem('label', {for: 'todo-project'}, 'Project');
        const projectInput = makeElem('select', {id: 'todo-project', name: 'todo_project'});
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

        const titleLabel = makeElem('label', {for: 'project-title'}, 'Title');
        const titleInput = makeElem('input', {type: 'text', id: 'project-title', name: 'project-title', placeholder: 'Title', required: ''});

        const projectSubmit = makeElem('button', {type: 'submit', id: 'project-submit'}, 'Submit');

        projectForm.append(titleLabel, titleInput, projectSubmit);
        projectInputModal.append(projectForm);

        const content = document.getElementById('content');

        content.append(projectInputModal);

    }



};




export { domElements };



