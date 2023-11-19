import React, { useState } from "react";
import Card from "./Card";
import AddCard from "./forms/AddCard";
const Column = ({ tasks, del }) => {

  const [cards, setCards] = useState([])

  const handleAdd = (card) =>{
      setCards([...cards, {id: cards.length + 1, ...card}])
  }
    return (
      <>
      {tasks.map((task) => (
        <div className="kanban-column" key={task.id}>
        <div className="kanban-column-header">
          <h5 className="fs-0 mb-0">{task.title} <span className="text-500">(8)</span></h5>
          <div className="dropdown font-sans-serif btn-reveal-trigger"><button className="btn btn-sm btn-reveal py-0 px-2" type="button" id="kanbanColumn0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h"></span></button>
            <div className="dropdown-menu dropdown-menu-end py-0" aria-labelledby="kanbanColumn0"><a className="dropdown-item" href="#!">Add Card</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Copy link</a>
              <div className="dropdown-divider"></div><button className="dropdown-item text-danger"  onClick={del}>Remove</button>
            </div>
          </div>
        </div>
        <div className="kanban-items-container scrollbar">
          
          <Card cards={cards} task = {task.id} />
          <AddCard onAdd={handleAdd} />   
        </div>
        <div className="kanban-column-footer"><button className="btn btn-link btn-sm d-block w-100 btn-add-card text-decoration-none text-600" type="button"><span className="fas fa-plus me-2"></span>Add another card</button></div>
      </div>
      ))}
      </>
    );
};

export default Column;