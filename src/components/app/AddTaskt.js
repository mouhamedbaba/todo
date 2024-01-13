import { useState } from "react"
import { createTask, getTask, addTodo, getTodos } from "./repositorie"
import { faRandom } from "@fortawesome/free-solid-svg-icons"

export const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')

    const [modal , setModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let task = {
            id : new Date().toLocaleString(),
            title, complete:false,
            date : new Date().toLocaleString()
        }
        if (title !== ""){
        //     createTask(task)
        //  .then(res => {
        //     setTitle('')
        //     onAdd(onAdd)
        // })
        //  .catch(err => {
        //      console.log(err)
        //  })
        addTodo(task)
        onAdd(onAdd)
        setTitle("")
        
        } else {
            alert("Le titre ne doit pas etre vide ioe tmt")
        }
        
    }

    return (
        <div>
            <div className="modal fade" id="error-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" >
                    <div className="modal-content position-relative">
                    <form onSubmit={handleSubmit}>

                        <div className="position-absolute top-0 end-0 mt-2 me-2 z-index-1 d-flex justify-content-end">
                            <button className="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-0">
                            <div className="rounded-top-lg py-3 ps-4 pe-6 bg-light">
                                <h4 className="mb-1" id="modalExampleDemoLabel">Add Task</h4>
                            </div>
                            <div className="p-4 pb-0">
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="message-text">Title :</label>
                                        <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control shadow-none" id="message-text" required></input>
                                    </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-success" type="submit"   data-bs-dismiss={title !== "" ? "modal" : ""}  aria-label="Close">Save </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}