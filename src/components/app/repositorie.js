// repositprie.js

import axios from "axios";



export const tasksApi= axios.create(
        {
            baseURL :  "http://localhost:8000/api",
        }
)

// export const getTasks =  (keyword="", page=1, limit=7) => {
//     return  tasksApi.get(`/tasks?title_like=${keyword}&_page=${page}&_limit=${limit}`);
// }

export const getTasks =  () => {
    return  tasksApi.get(`/todo`);
}
export const  getTask = async (todo) => {
    return await tasksApi.get(`/tasks/${todo.id}`);
}

export const deleteTaskt = async (todo) => {
    return await tasksApi.delete(`/tasks/${todo.id}`);
}

export const completeTask = async (todo) => {
    return await tasksApi.patch(`/tasks/${todo.id}`, {completed : !todo.completed});
}

export const createTask = async (todo) => {
    return await tasksApi.post("/tasks", todo);
}


export const updateTask = async (id, todo) => {
    return await tasksApi.put( `/tasks/${id}`, todo);
}


class Todo {
    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}


let todolist = []
if (localStorage.getItem("todolist")) {
    todolist = JSON.parse(localStorage.getItem("todolist"));
  } else {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }





export const getTodos = () =>{
    return todolist;
}



export const addTodo = (todo) =>{
    todolist.unshift(todo);
        localStorage.setItem("todolist", JSON.stringify(todolist));

}

// export const deleteTodo = (todo) =>{
//     const index = todolist.indexOf(todo);
//     // if (index !== -1) {
//         todolist.splice(index, 1);
//     // }
//         localStorage.setItem("todolist", JSON.stringify(todolist));

// }

export const deleteTodo = (todo) => {
    todolist = todolist.filter(item => item.id !== todo.id);
    localStorage.setItem("todolist", JSON.stringify(todolist));
}

export const completeTodo = (todo) =>{
    todo.completed = !todo.completed;
        localStorage.setItem("todolist", JSON.stringify(todolist));

}


// import { firestore } from "./firebase.js";

// // Exemple de récupération de données
// firestore.collection("utilisateurs").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   });
// });
