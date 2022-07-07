const saveElement = async (tableId2, taskName) => {
  const tableX = await fetch(`http://localhost:3000/element/${tableId2}`).then(
    (res) => {
      return res.json();
    }
  );

  await fetch(`http://localhost:3000/element/${tableId2}`, {
     method: "PATCH",
     body: JSON.stringify({
       tasks: [
         ...tableX.tasks,
         {
           task_name: taskName,
           current_id: tableId2,
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
}