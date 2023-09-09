import makeElem from "./makeElem";
import createTodo from "./todo";
import { todoApp } from "./todoapp";
import { eventsHandler } from "./pubsub";
import todoicon from './assets/icons/plus-square (1)-cropped.svg';
import projecticon from './assets/icons/plus-circle.svg';
import todoexpandicon from './assets/icons/chevron-down.svg';
import todocollapseicon from './assets/icons/chevron-up.svg';
import deleteicon from './assets/icons/trash-2.svg';
import todoediticon from './assets/icons/edit.svg';
import { domEvents } from "./domevents";



const domElements = {
    createButtons: function() {
        const maincontent = document.getElementById('main');
        const projects = document.getElementById('projects');
        const projectsContainer = document.getElementById('projects-container');
    
        const newTodo = makeElem('button', {id: 'new-todo-button'});
        const todoButtonImg = makeElem('img', {src: todoicon, alt: 'New todo button'});
        const newProject = makeElem('button', {id: 'new-project-button'});
        const projectButtonImg = makeElem('img', {src: projecticon, alt: 'New project button'});

        newTodo.append(todoButtonImg);
        newProject.append(projectButtonImg);
    
        maincontent.append(newTodo);
        projects.insertBefore(newProject, projectsContainer);
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

    },

    editTodoModal: function(todo) {
        const todoInputModal = makeElem('div', {class: 'modal'});
        const todoInputModalContent = makeElem('div', {class: 'modal-content'});
        const todoForm = makeElem('form', {id: 'todo-form-input'});

        const titleLabel = makeElem('label', {for: 'todo-title-input'}, 'Title');
        const titleInput = makeElem('input', {type: 'text', id: 'todo-title-input', name: 'todo-title-input', value: `${todo.title}`, required: ''});

        const descLabel = makeElem('label', {for: 'todo-description-input'}, 'Description');
        const descInput = makeElem('input', {type: 'text', id: 'todo-description-input', name: 'todo-description-input', value: `${todo.description}`, required: ''});

        const dueDateLabel = makeElem('label', {for: 'todo-dueDate-input'}, 'Due Date');
        const dueDateInput = makeElem('input', {type: 'date', id: 'todo-dueDate-input', name: 'todo-dueDate-input', value: `${todo.dueDate}`, required: ''});

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

        const projectOptions = todoForm.querySelectorAll('select#todo-project-input > option');
        const selectedProject = Array.from(projectOptions).find(({ value }) => value === document.getElementById('todo-container').getAttribute('class'));
        selectedProject.setAttribute('selected', '');

        todoInputModalContent.append(todoForm);
        todoInputModal.append(todoInputModalContent);

        const content = document.getElementById('content');
        content.append(todoInputModal);

        const todoTitleInput = document.getElementById('todo-title-input');
        const todoDescInput = document.getElementById('todo-description-input');
        const todoDateInput = document.getElementById('todo-dueDate-input');
        const todoPriorityInput = document.getElementById('todo-priority-input');
        const todoProjectInput = document.getElementById('todo-project-input');


        todoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(todo);
            todoApp.deleteTodo(todo);
            createTodo(todoTitleInput.value, todoDescInput.value, todoDateInput.value, todoPriorityInput.value, todoProjectInput.value);
            
            domEvents.deleteModal();
        })
    },

    projectModal: function() {
        const projectInputModal = makeElem('div', {class: 'modal'});
        const projectInputModalContent = makeElem('div', {class: 'modal-content'});
        const projectForm = makeElem('form', {id: 'project-form'});

        const titleLabel = makeElem('label', {for: 'project-title-input'}, 'Title');
        const titleInput = makeElem('input', {type: 'text', id: 'project-title-input', name: 'project-title-input', placeholder: 'Project title', required: ''});

        const projectSubmit = makeElem('button', {type: 'submit', id: 'project-submit'}, 'Submit');

        projectForm.append(titleLabel, titleInput, projectSubmit);
        projectInputModalContent.append(projectForm);
        projectInputModal.append(projectInputModalContent);

        const content = document.getElementById('content');

        content.append(projectInputModal);

    },

    projectElementCreate: function(project) {
        const projectSection = document.getElementById('projects-container');
        const projectDiv = makeElem('div', {class: 'project'});
        const projectLabel = makeElem('p', {class: 'label'}, `${project.title}`)

        const projectDeleteButton = makeElem('img', {src: deleteicon});
        projectDeleteButton.addEventListener('click', () => {
            todoApp.deleteProject(project);
        })
        projectDiv.append(projectLabel, projectDeleteButton)
        projectSection.append(projectDiv);
        eventsHandler.publish('projectDivCreated', projectLabel);
        console.log(projectDiv);
    },

    projectContainerRefresh: function(projects) {
        const projectContainer = document.getElementById('projects-container');
        projectContainer.replaceChildren();
        projects.forEach((project) => domElements.projectElementCreate(project));

    },

    todoElementCreate: function(todo) {

        const todoElement = makeElem('div', {class: 'todo-element'});
        const todoCheckBox = makeElem('input', {type: 'checkbox', name: 'complete'});
        const todoTitle = makeElem('p', {class: 'todo-title'}, `${todo.title}`);
        const todoDate = makeElem('p', {class: 'todo-date'}, `${todo.dueDate}`);
        const todoDescription = makeElem('p', {class: 'todo-description'}, `${todo.description}`);

        todoDescription.classList.toggle('hidden');


        const todoExpandButton = makeElem('img', {src: todoexpandicon, alt: 'Expand todo', class: 'todo-expand'});

        todoExpandButton.addEventListener('click', () => {
            todoDescription.classList.toggle('hidden');

            (todoExpandButton.getAttribute('src') === todoexpandicon) ? todoExpandButton.setAttribute('src', todocollapseicon) : todoExpandButton.setAttribute('src', todoexpandicon);
        });

        const todoEditButton = makeElem('img', {src: todoediticon});

        todoEditButton.addEventListener('click', () => {
            domElements.editTodoModal(todo);
            domEvents.closeModalFunction();
        });
            

        


        

        const todoDeleteButton = makeElem('img', {src: deleteicon})

        todoDeleteButton.addEventListener('click', () => {
            const projecttitle = document.getElementById('todo-container').getAttribute('class');
            const todotitle = todoTitle.textContent;
            todoApp.deleteTodo(todo);
            eventsHandler.publish('todoDeleted', projecttitle);
        });

        todoElement.append(todoCheckBox, todoTitle, todoDate, todoExpandButton, todoEditButton, todoDeleteButton, todoDescription);

        return todoElement;
    }, 

    renderProjects: function() {
        eventsHandler.subscribe('projectCreated', domElements.projectElementCreate);
        eventsHandler.subscribe('projectDeleted', domElements.projectContainerRefresh);
        eventsHandler.subscribe('projectDeleted', domEvents.emptyTodoContainer);
    }, 

    renderTodos: function(projectName) {
        console.log(todoApp);

        const todoContainer = document.getElementById('todo-container');
        const projectObject = todoApp.projects.find(({ title }) => title === `${projectName}`);

        const todoArray = projectObject.todos;
        
        const todoElements = todoArray.map((todo) => domElements.todoElementCreate(todo));

        todoContainer.replaceChildren();

        todoElements.forEach((element) => todoContainer.append(element));

    },


};




export { domElements };



