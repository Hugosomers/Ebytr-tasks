import React from 'react'
import './css/taskCard.css';
import { BsTrash } from 'react-icons/bs';
import axios from 'axios';


export default function TaskCard({ task, setUpdate }) {
  const deleteTask = async () => {
    await axios.delete(`http://localhost:3001/task/${task._id}`);
    setTimeout(() => {
      setUpdate(false);
    }, 1000)
  }

  return (
    <div className="task-card">
      <h1>{task.title}</h1>
      <BsTrash onClick={ deleteTask }/>
      <h3>{task.author}</h3>
      <p>{task.description}</p>
      <p>{task.status}</p>
    </div>
  )
}
