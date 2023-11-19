import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
          onAdd({ title });
          setTitle('');
        } else {
          alert('enter a title')
        }
      };

    return (
        <>
        <div className="kanban-column">
              <div className="collapse bg-100 p-card rounded-lg transition-none" id="addListForm">
                <form onSubmit={handleSubmit}>
                    <textarea className="form-control mb-2" value={title} onChange={(e) => setTitle(e.target.value)} data-input="add-list" rows="2" placeholder="Enter list title..."></textarea>
                  <div className="row gx-2">
                    <div className="col"><button className="btn btn-primary btn-sm d-block w-100" type="Submit"  >Add</button></div>
                    <div className="col"><button className="btn btn-outline-secondary btn-sm d-block w-100 border-400" type="button" data-dismiss="collapse">Cancel</button></div>
                  </div>
                </form>
              </div><button className="btn d-block w-100 btn-secondary bg-400 border-400" data-bs-toggle="collapse" data-bs-target="#addListForm" aria-expanded="false" aria-controls="addListForm"><span className="fas fa-plus me-1"> </span>Add another list</button>
        </div>
        </>
    );
}

export default AddTask;