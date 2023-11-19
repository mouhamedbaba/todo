import React, { useState } from "react";
import Column from "./column";
import Card from "./Card";
import AddTask from "./forms/AddTask";

const ColumnContainer = () => {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
  };
    return (
        <div className="kanban-container scrollbar me-n3">
            <Column tasks={tasks} />
            <AddTask onAdd={handleAdd}/>
       </div>
    );
}

export default ColumnContainer;