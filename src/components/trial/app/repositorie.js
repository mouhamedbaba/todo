// repositprie.js

import axios from "axios";



export const tasksApi= axios.create(
        {
            baseURL :  "http://localhost:3001",
        }
)

export const getTasks =  (keyword="", page=1, limit=7) => {
    return  tasksApi.get(`/tasks?title_like=${keyword}&_page=${page}&_limit=${limit}`);
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