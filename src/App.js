import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import { Table } from './components/app/table';

function App() {



  // const addTask = () => {
  //   axios.post('http://localhost:8000/api/tasks/', { title: newTask, completed: false })
  //   .then(response => setTasks([...tasks, response.data])).catch(error => console.error('Error adding task:', error));
  // }; 
  
//   const toggleTask = (taskId) => { axios.patch('http://localhost:8000/api/tasks/', 
//   { completed: true }) .then(response => { 
//     const updatedTasks = tasks.map(task   => (task.id === taskId ? response.data : task)); setTasks(updatedTasks);
// }) .catch (error => console.error('Error updating task: ', error)); };


return (
  <Router>
    <Routes>
    < Route path="/" element={<Table/>} />
      <Route path="*" element={<Table/>} />
    </Routes>
  </Router>

); 
}


export default App;