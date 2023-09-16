import { domEvents } from "./domevents";
import { domElements } from "./domelements";
import { todoApp } from "./todoapp";
import storage from "./localstorage";

const pageLoad = function () {
    
    domElements.createButtons();
    domEvents.createModalsWithButtons();
    todoApp.acceptData();
    domElements.renderProjects();
    domEvents.domUpdates();
    const todayButton = document.getElementById('today');
    todayButton.classList.add('selected');

    storage.retrieveStorage();
    storage.getUpdates();
    domEvents.dateListeners();
    todoApp.todaysTodos();
    

};


export default pageLoad;
