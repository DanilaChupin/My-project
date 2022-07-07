const dragStart = (event) => {
    const tables = document.querySelectorAll(".table__list")
    tables.forEach(table => {
        table.style.minHeight = '50px'
    })
    event.target.classList.add("selected");
    const tableId1 = event.target.parentNode.dataset.ulId;
    event.target.parentNode.childNodes.forEach((link, index) => {
        link.addEventListener("dragend", () => {

            deleteGetTableTask(index, tableId1)
            console.log(index, tableId1);
        });
    });

};

const dragEnd = (event) => {
    event.target.classList.remove(`selected`);

    const tableId2 = event.target.parentNode.dataset.ulId;
    const taskName = event.target.textContent[0]

    saveElement(tableId2, taskName)

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
