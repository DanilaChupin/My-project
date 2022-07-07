const postTable = async (tableId) => {
  const inputTableName = document.querySelector(
    ".create-table-pop-up__input"
  ).value;

  await fetch("http://localhost:3000/element", {
    method: "POST",
    body: JSON.stringify({
      table_name: inputTableName,
      table_id: tableId,
      tasks: [],
    }),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("POST:", data);
    });
};

const getTable = () => {
  fetch("http://localhost:3000/element")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const arr = [];
      data.map((element) => arr.push(element.id));
      let maxId = arr.length !== 0 ? Math.max(...arr) : 0;

      data.forEach((table) => {
        createTable(table.table_name, table.id);
      });
    })
    .catch((err) => console.log("Error:", err));
};

const getMaxId = () => {
  fetch("http://localhost:3000/element")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const arr = [];
      data.map((element) => arr.push(element.id));
      let maxId = arr.length !== 0 ? Math.max(...arr) : 0;
      return showCreateTableMenu(maxId);
    })
    .catch((err) => console.log("Error:", err));
};

getTable();

const deleteGetTable = async (id) => {
  fetch(`http://localhost:3000/element/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("DELETE:", data);
    });
};

const patchTask = async (tableId, taskName) => {
  const tableX = await fetch(`http://localhost:3000/element/${tableId}`).then(
    (res) => {
      return res.json();
    }
  );
  fetch(`http://localhost:3000/element/${tableId}`, {
    method: "PATCH",
    body: JSON.stringify({
      tasks: [
        ...tableX.tasks,
        {
          task_name: taskName,
          current_id: tableId,
        },
      ],
    }),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("PATCH:", data);
    });
};

const getTask = () => {
  fetch(`http://localhost:3000/element`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((task) => {
        task.tasks.forEach((taskName) => {
          createTask(taskName.task_name, taskName.current_id);
        });
      });
    })
    .catch((err) => console.log("Error:", err));
};

getTask();

const deleteGetTableTask = async (id, datasetUlUd) => {
  const tableX = await fetch(
    `http://localhost:3000/element/${datasetUlUd}`
  ).then((res) => {
    return res.json();
  });
  fetch(`http://localhost:3000/element/${datasetUlUd}`, {
    method: "PATCH",
    body: JSON.stringify({
      tasks: tableX.tasks
        .slice(0, id)
        .concat(tableX.tasks.slice(id + 1, tableX.tasks.length)),
    }),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("PATCH:", data);
    });
};
