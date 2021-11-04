import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import './css/tasks.css';

export default function Tasks({update, setUpdate}) {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:3001/task');
      setTasks(response.data);
    }
    fetchTasks();
    setTimeout(() => {
      setUpdate(!update);
    }, 100)
  }, [update, setUpdate]);

  return (
    <div className="tasks-container">
      {!tasks.err && tasks.map((task) => (
        <TaskCard key={task._id} task={ task } setUpdate={setUpdate} update={update}/>
      ))}
    </div>
  )
}
