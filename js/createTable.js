const createNewElement = () => {
    const container = document.querySelector(".container-main");

    const table = document.createElement("div");
    table.className = "table";
    table.setAttribute("draggable", "true");
    table.addEventListener("dragstart", dragstart);
    table.addEventListener("dragend", dragend);
    table.addEventListener("dragover", dragover);
    table.addEventListener("dragenter", dragenter);
    table.addEventListener("dragleave", dragleave);
    table.addEventListener("dragDrop", dragDrop);
    container.appendChild(table);

    const header = document.createElement("div");
    header.className = "table__header";
    table.appendChild(header);

    const headline = document.createElement("h1");
    headline.className = 'table__headline'
    headline.textContent = 'Новая таблица'
    header.appendChild(headline);

    const inputWr = document.createElement('div');
    inputWr.className = 'table__input-wr';
    header.appendChild(inputWr);

    const input = document.createElement("input");
    input.className = "table__input";
    inputWr.appendChild(input);

    const addBtn = document.createElement("button");
    addBtn.textContent = 'Добавить'
    addBtn.className = 'table__add-btn'
    addBtn.addEventListener("click", newElement);
    inputWr.appendChild(addBtn);

    const list = document.createElement("ul");
    list.className = 'table__list';
    list.addEventListener("click", deletElement);
    table.appendChild(list);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X'
    deleteBtn.className = "table__delete-btn";
    deleteBtn.addEventListener("click", deleteTable);
    header.appendChild(deleteBtn);
};

