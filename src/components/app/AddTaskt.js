import { useState } from "react"
import { createTask, getTask, addTodo } from "./repositorie"
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
            <div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document" >
                    <div class="modal-content position-relative">
                    <form onSubmit={handleSubmit}>

                        <div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
                            <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-0">
                            <div class="rounded-top-lg py-3 ps-4 pe-6 bg-light">
                                <h4 class="mb-1" id="modalExampleDemoLabel">Ajouter un tache</h4>
                            </div>
                            <div class="p-4 pb-0">
                                    <div class="mb-3">
                                        <label class="col-form-label" for="message-text">Title :</label>
                                        <textarea value={title} onChange={(e) => setTitle(e.target.value)} class="form-control shadow-none" id="message-text" required></textarea>
                                    </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-success" type="submit"   data-bs-dismiss={title !== "" ? "modal" : ""}  aria-label="Close">Ajouter </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}