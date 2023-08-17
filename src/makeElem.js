export default function makeElem(type, attributes, text) {
    const element = document.createElement(type);
    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    };
    if (text) {
        element.textContent = text
    };
    return element;
}

