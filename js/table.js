function createTable(tableName) {
  const container = document.querySelector(".container-main-wr");

  const table = document.createElement("div");
  table.className = "table";
  table.setAttribute("draggable", "true");
  // table.addEventListener("dragover", dragOver);
  // table.addEventListener("dragenter", dragenter);
  // table.addEventListener("dragleave", dragleave);
  // table.addEventListener("dragDrop", dragDrop);
  container.appendChild(table);

  const header = document.createElement("div");
  header.className = "table__header";
  table.appendChild(header);

  const headline = document.createElement("h2");
  headline.className = "table__headline";
  headline.textContent = tableName;
  header.appendChild(headline);

  const inputWr = document.createElement("div");
  inputWr.className = "table__input-wr";
  header.appendChild(inputWr);

  const input = document.createElement("input");
  input.className = "table__input";
  inputWr.appendChild(input);

  const addBtn = document.createElement("button");
  addBtn.textContent = "Добавить";
  addBtn.className = "table__add-task-btn";
  addBtn.addEventListener("click", createTask);
  inputWr.appendChild(addBtn);

  const list = document.createElement("ul");
  list.className = "table__list";
  // list.addEventListener("dragover", dragOver);
  table.appendChild(list);

  const deleteTableBtn = document.createElement("button");
  deleteTableBtn.textContent = "X";
  deleteTableBtn.className = "table__delete-table-btn";
  deleteTableBtn.addEventListener("click", deleteTable);
  header.appendChild(deleteTableBtn);

  function createTask() {
    const task = document.createElement("li");
    task.className = "table__task";
    task.setAttribute("draggable", "true");
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
    task.addEventListener("dragover", dragOver);
    task.textContent = input.value;
    list.appendChild(task);


    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.textContent = "X";
    deleteTaskBtn.className = "table__task-delete-btn";
    deleteTaskBtn.addEventListener("click", deleteTask);
    task.appendChild(deleteTaskBtn);

    input.value = "";
  }
}

function deleteTable(event) {
  event.target.parentNode.parentElement.remove();
}

function deleteTask(event) {
  event.target.parentNode.remove();
}

const showCreateTableMenu = () => {
  const container = document.querySelector(".container-main");

  const substrate = document.createElement("div");
  substrate.className = "substrate";
  container.appendChild(substrate)

  const createTableContainer = document.createElement("div");
  createTableContainer.classList.add("create-table-pop-up");
  substrate.appendChild(createTableContainer);

  const createTableCloseBtn = document.createElement("button");
  createTableCloseBtn.classList.add("create-table-pop-up__close-btn");
  createTableCloseBtn.textContent = "X";
  createTableCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    substrate.remove();
  });
  createTableContainer.appendChild(createTableCloseBtn);

  const createTableHeadline = document.createElement("h2");
  createTableHeadline.textContent = "What is the name of the table?";
  createTableContainer.appendChild(createTableHeadline);

  const tableNameInput = document.createElement("input");
  tableNameInput.classList.add("create-table-pop-up__input");
  createTableContainer.appendChild(tableNameInput);

  const createTableBtn = document.createElement("button");
  createTableBtn.classList.add("create-table-pop-up__create-btn");
  createTableBtn.textContent = "Create";
  createTableContainer.appendChild(createTableBtn);

  createTableBtn.addEventListener("click", () => {
    createTable(tableNameInput.value);
    substrate.remove();
  });
};

// const btn = document.querySelector("#createBtn");
const btn = document.querySelector(".addTableBtn");
btn.addEventListener("click", showCreateTableMenu);
