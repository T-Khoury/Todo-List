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

    storage.retrieveStorage();
    storage.getUpdates();

    
};


export default pageLoad;
