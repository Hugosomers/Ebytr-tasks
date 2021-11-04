import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';
import TaskCard from './TaskCard';
import './css/tasks.css';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const { updated } = useSelector((state) => state.taskReducer);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:3001/task');
      setTasks(response.data);
    }
    fetchTasks();
  }, [updated]);

  return (
    <div className="tasks-container">
      {!tasks.err && tasks.map((task) => (
        <TaskCard key={task._id} task={ task } />
      ))}
    </div>
  )
}
