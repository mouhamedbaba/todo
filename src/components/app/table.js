import { useEffect, useState } from "react";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { completeTask, deleteTaskt, getTasks, getTodos,  addTodo, deleteTodo, completeTodo} from "./repositorie";
import { AddTask } from "./AddTaskt";
import { EditTask } from "./EditTask";

// import {  db, getCities  } from "../../firebase";

// Exemple de récupération de données

export const Table = () => {
    const [state, setState] = useState({
        todoList: [],
        currentPage: 1,
        limit: 7,
        keyword: '',
        pages: 0,
        loading: true,
    });

    useEffect(() => {
        setState((prevState) => ({ ...prevState, loading: true }));
        // handleGetTasks();
        handleGetTodo();
    }, [])

    // const handleGetTasks = (keyword, page, limit) => {
    //     getTasks(keyword, page, limit).then(res => {
    //         const TotalTasks = res.headers['x-total-count'];
    //         let pages = Math.floor(TotalTasks / limit);
    //         if (TotalTasks % limit !== 0) {
    //             pages++;
    //         };
    //         const tasks = { ...state, todoList: res.data, keyword: keyword, currentPage: page, limit: limit, pages: pages, loading: false, };
    //         setState(tasks);
    //     })
    // }

    const handleGetTasks = () => {
        getTasks().then(res => {
            const tasks = { ...state, todoList: res.data, loading: false, };
            setState(tasks);
        })
    }

    const handleGetTodo = () => {
        const tasks = { ...state, todoList: getTodos(), loading: false, };
        setState(tasks);
        
    }

    const playSound = (status) => {
        let audio = ""
        if (status === true) {
            audio = new Audio('/assets/mp3/success.mp3');
        } else if (status === false) {
            audio = new Audio('/assets/mp3/failed.mp3');
        }
        if (audio) {
            audio.play();
        }
    }
    

    const handleComplet = (todo) => {
        completeTask(todo).then(res => {
            const newlist = state.todoList.map(td => {

                if (td.id === todo.id) {
                    td.completed = !td.completed
                    if (td.completed == true) {
                        playSound(true);
                    } else {
                        playSound(false);
                    }
                }
                return td;
            })
            setState({ ...state, todoList: newlist });
        })
    }

    const handleCompletTodo = (todo) => {
        completeTodo(todo);

        const newlist = state.todoList.map(td => {

            if (td.id === todo.id) {
                td.completed = td.completed
                if (td.completed == true) {
                    playSound(true);
                } else {
                    playSound(false);
                }
            }
            return td;
        })
        setState({ ...state, todoList: newlist });
    }

    const handleDelete = (todo) => {
        deleteTaskt(todo).then(res => {
            const newlist = state.todoList.filter(td => td.id !== todo.id);

            setState({ ...state, todoList: newlist });
        })

    }

    const handleDeleteTodo = (todo) => {
        deleteTodo(todo.id);
        const newlist = state.todoList.filter(td => td.id !== todo.id);
        setState({ ...state, todoList: newlist });

    }
    const paginate = (page) => {
        handleGetTasks();
    }

    const [edit, setEdit] = useState();

    const handleEdit = (todo) => {
        setEdit(todo)
    }

    return (
        <div class="container my-5">
            <div class="card shadow">
                <div class="Card-header" >
                    <div class="d-flex justify-content-between align-items-center p-3">
                        <h5 class="mb-0 ">Todo List</h5>
                        <AddTask onAdd={() => handleGetTodo()} />
                        <div class="d-flex ">
                            <div class="">
                                <input class="form-control shadow-none " type="search" placeholder="Search" aria-label="Search" onChange={(e) => handleGetTasks(e.target.value, 1, state.limit)} />
                            </div>
                            <button class="btn btn-falcon-default mx-2" type="button" data-bs-toggle="modal" data-bs-target="#error-modal"> Add task
                                <span class="fas fa-plus me-2" ></span>
                            </button>
                        </div>
                    </div>
                </div>
                {
                state.todoList.length === 0 ?<div className="mt-4 p-3 ">
                    <div className="d-flex justify-content-center">
                    <img className="w-25 h-25" src="/assets/notask.svg" />
                    </div>
                    <h6 className="text-center mt-4">No task found</h6>
                </div> 
                 : <div id="tableExample2">
                <div class="table-responsive scrollbar">
                    <table class="table table-bordered table-striped fs--1 mb-0">
                        <thead class="bg-200 text-900">
                            <tr>
                                <th class="sort" data-sort="email">Title</th>
                                <th class="sort" data-sort="age">completed</th>
                                <th class="sort" data-sort="name">Date</th>
                                <th class="no-sort" data-sort=""></th>
                            </tr>
                        </thead>                            
                        {state.loading ? (
                        <tbody class="list">

                        <tr>
                            <td class="name"><h6 class="card-text placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h6></td>
                            <td class="">                  <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5></td>
                            <td class="age">
                            <a href="#" tabindex="-1" class="btn btn-outline-info mx-2 disabled placeholder col-1">
                                <span class="fas-fa-circle"></span>
                            </a>
                            </td>
                            <td class="list-group-item list-group-item-action">
                            <a href="#" tabindex="-1" class="btn btn-outline-danger mx-2 disabled placeholder col-1">
                                <span class="fas-fa-trash"></span>

                            </a>
                            <a href="#" tabindex="-1" class="btn btn-outline-warning mx-2 disabled placeholder col-1">
                            <span class="fas-fa-edit"></span>

                            </a>
                            </td>
                        </tr>
                    </tbody>
                        ) : (
                            <tbody class="list">
                                {state.todoList.map((todo) => (
                                    <tr key={todo.id}>
                                        <td class={todo.completed ? "email text-decoration-line-through" : "email fw-bold "}>{todo.title}</td>
                                        <td class="age">
                                            <button class={todo.completed ? 'btn btn-success' : 'btn btn-info'} onClick={() => handleCompletTodo(todo)}>
                                                <FontAwesomeIcon icon={todo.completed ? faCheckCircle : faCircle} ></FontAwesomeIcon>
                                            </button>
                                        </td>
                                        <td class="name">{todo.date}</td>
                                        <td class="list-group-item list-group-item-action">
                                            <button onClick={() => handleDeleteTodo(todo)} class="btn btn-outline-danger">
                                                <span class="fas fa-trash" ></span>
                                            </button>
                                            <button onClick={() => handleEdit(todo)} class="btn btn-outline-warning mx-2" type="button" data-bs-toggle="modal" data-bs-target="#edit-modal">
                                                <span class="fas fa-edit" ></span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
                }
                
                {/* <div class="card-footer">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class={(state.currentPage === 1) ? "page-item disabled d-none" : "page-item"}><a class="page-link" role="button" onClick={() => paginate(state.currentPage - 1)}>
                                <span class="fas fa-arrow-circle-left"></span>
                            </a>
                            </li>
                            {
                                (new Array(state.pages).fill(0)).map((item, index) => (
                                    <li class="page-item" key={index}><a class={(index + 1) === state.currentPage ? "page-link bg-info" : "page-link"} role="button" onClick={() => paginate(index + 1)}>{index + 1}</a></li>
                                ))
                            }
                            <li class={(state.currentPage === state.pages) ? "page-item disabled d-none" : "page-item"}><a class="page-link" href="#" role="button" onClick={() => paginate(state.currentPage + 1)}><span class="fas fa-arrow-circle-right"></span>
                            </a></li>
                        </ul>
                    </nav>
                </div> */}
            </div>
            <EditTask edit={edit} />
        </div>
    );

}