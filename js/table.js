let dataSetTaskId = 1;
let dataSetListId = 1;
let dataDelitId = 1;

const createTable = (tableName, maxId) => {
  console.log("mid", maxId);
  const container = document.querySelector(".container-main-wr");

  const table = document.createElement("div");
  table.className = "table";
  table.setAttribute("draggable", "true");
  table.setAttribute("data-id", `${maxId}`);
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
  inputWr.appendChild(addBtn);

  const list = document.createElement("ul");
  list.className = "table__list";
  list.setAttribute("data-ul-id", `${dataSetListId++}`);
  table.appendChild(list);

  addBtn.addEventListener("click", () => {
    createTask(input.value, list.dataset.ulId);
    patchTask(table.dataset.id, input.value);
    input.value = "";
  });

  const deleteTableBtn = document.createElement("button");
  deleteTableBtn.textContent = "X";
  deleteTableBtn.className = "table__delete-table-btn";
  deleteTableBtn.addEventListener("click", (event) => {
    const tableId = event.target.parentNode.parentElement.dataset.id;
    deleteGetTable(tableId);
  });
  header.appendChild(deleteTableBtn);
};

const createTask = (getName, id) => {
  const task = document.createElement("li");
  task.className = "table__task";
  task.setAttribute("data-id", `${id}`);
  const currentUl = document.querySelector(`[data-ul-id="${task.dataset.id}"]`);
  task.setAttribute("draggable", "true");
  task.setAttribute("data-delet-id", `${dataDelitId++}`);
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
  task.addEventListener("dragover", dragOver);
  task.textContent = getName;
  currentUl.appendChild(task);

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.textContent = "X";
  deleteTaskBtn.className = "table__task-delete-btn";
  task.appendChild(deleteTaskBtn);
  deleteTaskBtn.addEventListener("click", deleteTask);
};

const deleteTable = (event, maxId) => {
  const table = event.target.parentNode.parentElement.dataset.id;
  console.log("123", table);
  // deleteGetTable(maxId);
  // event.target.parentNode.parentElement.parentNode.childNodes.forEach(
  //   (link, index) => {
  //     link.addEventListener("click", () => {
  //       deleteGetTable(index);
  //     });
  //   }
  // );
  // deleteGetTable(event.target.parentNode.parentElement.dataset.id);
};

const deleteTask = (event) => {
  let datasetUlUd = Number(event.target.parentNode.parentElement.dataset.ulId);
  event.target.parentNode.parentElement.childNodes.forEach((link, index) => {
    link.addEventListener("click", () => {
      deleteGetTableTask(index, datasetUlUd);
    });
  });
};

const showCreateTableMenu = (maxId) => {
  console.log(maxId);
  const container = document.querySelector(".container-main");

  const substrate = document.createElement("div");
  substrate.className = "substrate";
  container.appendChild(substrate);

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
  createTableHeadline.textContent = "Введите название таблицы";
  createTableContainer.appendChild(createTableHeadline);

  const tableNameInput = document.createElement("input");
  tableNameInput.classList.add("create-table-pop-up__input");
  createTableContainer.appendChild(tableNameInput);

  const createTableBtn = document.createElement("button");
  createTableBtn.classList.add("create-table-pop-up__create-btn");
  createTableBtn.textContent = "Создать";
  createTableBtn.addEventListener("click", () => {
    postTable(maxId + 1);
  });
  createTableContainer.appendChild(createTableBtn);
  createTableBtn.addEventListener("click", () => {
    createTable(tableNameInput.value, maxId);
    substrate.remove();
  });
};

const btn = document.querySelector(".addTableBtn");
btn.addEventListener("click", getMaxId);
