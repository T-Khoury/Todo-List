import { domEvents } from "./domevents";
import { domElements } from "./domelements";

const pageLoad = function () {
    domElements.createButtons();
    domEvents.createModalsWithButtons();
};


export default pageLoad;
