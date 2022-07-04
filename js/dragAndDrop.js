const dragStart = (event) => {
    const tables = document.querySelectorAll(".table__list")
    //  event.target.parentElement.childNodes.forEach((link, index) => {
    //      link.addEventListener('mousemove', () => {
    //      deleteGetTableTask(index, Number(event.target.parentNode.dataset.ulId));
     
    //      })
    //  });
    tables.forEach(table => {
        table.style.minHeight = '50px'
    })
    event.target.classList.add("selected");

};

const dragEnd = (event) => {
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

    event.preventDefault();

    const activeElement = document.querySelector(".selected");
    const tasksListElement = event.target.parentNode;
    const nextElement = getNextElement(event.clientY, event.target);
    const isMoveble = activeElement !== event.target && event.target.classList.contains("table__task");

    if (!isMoveble) {
        return;
    }

    if (
        (nextElement && activeElement === nextElement.previousElementSibling) ||
        activeElement === nextElement
    ) {
        return;
    }

    tasksListElement.insertBefore(activeElement, nextElement);
};
