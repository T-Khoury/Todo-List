import { domEvents } from "./domevents";
import { domElements } from "./domelements";
import { defaultProject, todoApp } from "./todoapp";

const pageLoad = function () {
    domElements.createButtons();
    domEvents.createModalsWithButtons();
    defaultProject();
    todoApp.acceptData();
};


export default pageLoad;
