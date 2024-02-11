import { useEffect, useState } from "react";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { completeTask, deleteTaskt, getTasks, getTodos, deleteTodo, completeTodo} from "./repositorie";
import { AddTask } from "./AddTaskt";
import { EditTask } from "./EditTask";
import { Analytics } from '@vercel/analytics/react';

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
    const [searchTerm, setSearchTerm] = useState('');



    useEffect(() => {
        setState((prevState) => ({ ...prevState, loading: true }));
        handleGetTasks();
        // handleGetTodo();
    }, [])

    const handleGetTasks = () => {
        getTasks().then(res => {
            const tasks = { ...state, todoList: res.data, loading: false, };
            setState(tasks);
        })
    }
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
                if (td.completed === true) {
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
        deleteTaskt(todo.id).then(res => {
            const newlist = state.todoList.filter(td => td.id !== todo.id);

            setState({ ...state, todoList: newlist });
        })

    }

    const handleSearch = (e) => {
        const filteredData = state.todoList.filter((item) =>
          item.title.toLowerCase().includes(e.toLowerCase())
        );
        if (e.length === 0) {
          setState({ ...state, todoList: getTodos() });
        } else if (filteredData.length === 0) {
          setState({ ...state, todoList: [] });
        }
         else {
          setState({ ...state, todoList: filteredData });
        }
      };
    

    const handleDeleteTodo = (todo) => {
        deleteTodo(todo);
        const tasks = { ...state, todoList: getTodos(), loading: false, };
        setState(tasks);

    }
    const paginate = (page) => {
        handleGetTasks();
    }

    const [toedit, setEdit] = useState({});

    const handleEdit = (todo) => {
        setEdit(todo)
    }

    return (
        <div className="container my-5">
            <Analytics />
            <div className="shadow card Card-header p-3 mb-3  d-md-none" >
            <h5 className="mb-0 ">Todo List</h5>

            </div>
            <div className="card shadow">
                <div className="Card-header" >
                    <div className="d-flex justify-content-between align-items-center p-3">
                        <h5 className="mb-0 d-none d-md-block">Todo List</h5>
                        <AddTask onAdd={() => handleGetTasks()} /> 
                        <div className="d-flex ">
                            <div className="">
                            
                                <input className="form-control shadow-none " type="search"  placeholder="Search" aria-label="Search" onChange={(e) => handleSearch(e.target.value)} /> 
                            </div>
                            <button className="btn btn-falcon-default mx-2" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">
                                {/* <span className="d-none d-x-block">Add task</span>  */}
                                <span className="fas fa-plus me-2" ></span>
                            </button>
                        </div>
                    </div>
                </div>
                {
                state.todoList.length === 0 ?<div className="mt-4 p-3 ">
                    <div className="d-flex justify-content-center">
                    <img className="w-25 h-25" src="/assets/notask.svg" alt="no task" />
                    </div>
                    <h6 className="text-center mt-4">No task found</h6>
                </div> 
                 : <div id="tableExample2">
                <div className="table-responsive scrollbar">
                    <table className="table table-bordered table-striped fs--1 mb-0">
                        <thead className="bg-200 text-900">
                            <tr>
                                <th className="sort" data-sort="email">Title</th>
                                <th className="sort" data-sort="age">completed</th>
                                {/* <th className="sort" data-sort="name ">Date</th> */}
                                <th className="no-sort" data-sort=""></th>
                            </tr>
                        </thead>                            
                        {state.loading ? (
                        <tbody className="list">

                        <tr>
                            <td className="name"><h6 className="card-text placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h6></td>
                            <td className="">                  <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5></td>
                            <td className="age">
                            <a href="#" tabindex="-1" className="btn btn-outline-info mx-2 disabled placeholder col-1">
                                <span className="fas-fa-circle"></span>
                            </a>
                            </td>
                            <td className="list-group-item list-group-item-action">
                            <a href="#" tabindex="-1" className="btn btn-outline-danger mx-2 disabled placeholder col-1">
                                <span className="fas-fa-trash"></span>

                            </a>
                            <a href="#" tabindex="-1" className="btn btn-outline-warning mx-2 disabled placeholder col-1">
                            <span className="fas-fa-edit"></span>

                            </a>
                            </td>
                        </tr>
                    </tbody>
                        ) : (
                            <tbody className="list">
                                {state.todoList.map((todo) => (
                                    <tr key={todo.id}>
                                        <td className={todo.completed ? "email text-decoration-line-through" : "email fw-bold "}>{todo.title}</td>
                                        <td className="age d-flex justify-content-center">
                                            <button className={todo.completed ? 'btn btn-success' : 'btn btn-info'} onClick={() => handleComplet(todo)}>
                                                <FontAwesomeIcon icon={todo.completed ? faCheckCircle : faCircle} ></FontAwesomeIcon>
                                            </button>
                                        </td>
                                        {/* <td className="name">{todo.date}</td> */}
                                        <td className="">
                                            <button onClick={() => handleDelete(todo)} className="btn btn-outline-danger mx-2">
                                                <span className="fas fa-trash" ></span>
                                            </button>
                                            <button onClick={() => handleEdit(todo)} className="btn btn-outline-warning mx-2 mt-2 mt-md-0" type="button" data-bs-toggle="modal" data-bs-target="#edit-modal">
                                                <span className="fas fa-edit" ></span>
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
                
                {/* <div className="card-footer">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className={(state.currentPage === 1) ? "page-item disabled d-none" : "page-item"}><a className="page-link" role="button" onClick={() => paginate(state.currentPage - 1)}>
                                <span className="fas fa-arrow-circle-left"></span>
                            </a>
                            </li>
                            {
                                (new Array(state.pages).fill(0)).map((item, index) => (
                                    <li className="page-item" key={index}><a className={(index + 1) === state.currentPage ? "page-link bg-info" : "page-link"} role="button" onClick={() => paginate(index + 1)}>{index + 1}</a></li>
                                ))
                            }
                            <li className={(state.currentPage === state.pages) ? "page-item disabled d-none" : "page-item"}><a className="page-link" href="#" role="button" onClick={() => paginate(state.currentPage + 1)}><span className="fas fa-arrow-circle-right"></span>
                            </a></li>
                        </ul>
                    </nav>
                </div> */}
            </div>
            <EditTask toedit={toedit} onEdit={() => handleGetTodo()} />
        </div>
    );

}