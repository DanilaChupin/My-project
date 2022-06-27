function createNewElement() {
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

  const headline = document.createElement("h2");
  headline.className = "table__headline";
  headline.textContent = "Новая таблица";
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
  table.appendChild(list);

  const deleteTableBtn = document.createElement("button");
  deleteTableBtn.textContent = "X";
  deleteTableBtn.className = "table__delete-table-btn";
  deleteTableBtn.addEventListener("click", deleteTable);
  header.appendChild(deleteTableBtn);
  
  function createTask() {
    const task = document.createElement("li");
    task.className = "table__task";
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

const btn = document.querySelector("#createBtn");
btn.addEventListener("click", createNewElement);
