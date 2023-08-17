export default function makeElem(type, attributes) {
    const element = document.createElement(type);
    for (key in attributes) {
        element.setAttribute(key, attributes[key])
    };
    return element;
}

