import React, { useState } from "react";

const AddCard = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    // const [column, setColum] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (title.trim()){
            onAdd({title});
            setTitle('');
        } else {
            alert('please enter a title')
        }
    } 
    return (
        <>
        <form onSubmit={handleSubmit} class=" mt-3 formaddcard">
            <textarea value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" data-input="add-card" rows="2" placeholder="Enter a title for this card..."></textarea>
            <div class="row gx-2 mt-2">
              <div class="col"><button class="btn btn-primary btn-sm d-block w-100" type="submit">Add</button></div>
              <div class="col"><button class="btn btn-outline-secondary btn-sm d-block w-100 border-400" type="button" data-btn-form="hide">Cancel</button></div>
            </div>
        </form>
        </>
    )
} 

export default AddCard;