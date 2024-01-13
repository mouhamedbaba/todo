import { useState } from "react"
import { updateTask,  editTodo } from "./repositorie"

export const EditTask = ({toedit, onEdit}) => {

    const [titletoedit, setTitle] = useState(toedit.title)
    const [completed, setComplete] = useState(toedit.completed)
 
    const handleSubmit = (e) => {
        e.preventDefault();
        let task = {
            title: titletoedit,
            completed: completed
        }
        editTodo(toedit, task.title)
        onEdit(onEdit);
        setTitle("");
        // updateTask(edit.id, task).then(res => {
        //     console.log(res)
        // })
        
    }

    return (
        <div>
            <div className="modal fade" id="edit-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" >
                    <div className="modal-content position-relative">
                    <form onSubmit={handleSubmit}>

                        <div className="position-absolute top-0 end-0 mt-2 me-2 z-index-1 d-flex justify-content-end">
                            <button className="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-0">
                            <div className="rounded-top-lg py-3 ps-4 pe-6 bg-light">
                                <h4 className="mb-1" id="modalExampleDemoLabel">Edit Task </h4>
                            </div>
                            <div className="p-4 pb-0">
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="message-text">Title :</label>
                                        <input  onChange={(e) => setTitle(e.target.value)} className="form-control shadow-none" required />
                                    </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-success" type="submit"  
                            data-bs-dismiss="modal"
                            aria-label="Close">Save  </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}