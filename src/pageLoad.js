import { domEvents } from "./domevents";
import { domElements } from "./domelements";
import { defaultProject, todoApp } from "./todoapp";

const pageLoad = function () {
    
    domElements.createButtons();
    domEvents.createModalsWithButtons();
    todoApp.acceptData();
    domElements.renderProjects();
    domEvents.domUpdates();
    defaultProject();
    
};


export default pageLoad;
