const dragStart = (event) => {
    console.log("drag start");
    event.target.classList.add("selected");
};

const dragEnd = (event) => {
    console.log("drag end");
    event.target.classList.remove(`selected`);
};

const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;

    return nextElement;
};

const dragOver = (event) => {
    console.log("drag over");
    event.preventDefault();

    const tasksListElement = document.querySelectorAll(".table__list");
    tasksListElement.forEach(elem => {
        const activeElement = elem.querySelector(".selected");
        console.log(activeElement);
        const isMoveble = activeElement !== event.target && event.target.classList.contains("table__task");
        if (!isMoveble) {
            return;
        };
        const nextElement = getNextElement(event.clientY, event.target);

        if (nextElement &&
            activeElement === nextElement.previousElementSibling ||
            activeElement === nextElement) {
            return;
        };
        elem.insertBefore(activeElement, nextElement);
    })
};

// const dragenter = () => {
//     console.log("drag enter");
// };

// const dragleave = () => {
//     console.log("drag leave");
// };

// const dragDrop = () => {
//     console.log("drag drop");
// };