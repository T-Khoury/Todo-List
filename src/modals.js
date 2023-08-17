import makeElem from "./makeElem";

function todoModal() {
    const todoInputModal = makeElem('div', {class: 'modal'});
    const todoForm = makeElem('form', {id: 'todoForm'});

    const titleLabel = makeElem('label', {for: 'todo_title'}, 'Title');
    const titleInput = makeElem('input', {type: 'text', id: 'todo_title', name: 'todo_title', placeholder: 'Title', required: ''});

    const descLabel = makeElem('label', {for: 'todo_description'}, 'Description');
    const descInput = makeElem('input', {type: 'text', id: 'todo_description', name: 'todo_description', placeholder: 'Description', required: ''});

    const dueDateLabel = makeElem('label', {for: 'todo_dueDate'}, 'Due Date');
    const dueDateInput = makeElem('input', {type: 'date', id: 'todo_dueDate', name: 'todo_dueDate', required: ''});

    const priorityLabel = makeElem('label', {for: 'todo_priority'}, 'Priority');
    const priorityInput = makeElem('select', {id: 'todo_priority', name: 'todo_priority'});
    const priorityOptionLow = makeElem('option', {value: 'Low'}, 'Low');
    const priorityOptionMed = makeElem('option', {value: 'Med'}, 'Med');
    const priorityOptionHigh = makeElem('option', {value: 'High'}, 'High');

    priorityInput.append(priorityOptionLow, priorityOptionMed, priorityOptionHigh)

    const todoSubmit = makeElem('button', {type: 'submit'});

    todoForm.append(titleLabel, titleInput, descLabel, descInput, dueDateLabel, dueDateInput, priorityLabel, priorityInput, todoSubmit);

    todoInputModal.append(todoForm);

    const content = document.getElementById('content');
    content.append(todoInputModal);




    



}