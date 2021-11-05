import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { TiSortAlphabeticallyOutline } from 'react-icons/ti';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { VscGear } from 'react-icons/vsc';

import axios from 'axios';
import TaskCard from './TaskCard';
import './css/tasks.css';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [settingsToggle, setSettingsToggle] = useState(false);
  const { updated } = useSelector((state) => state.taskReducer);
  console.log(tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:3001/task');
      setTasks(response.data);
    }
    fetchTasks();
  }, [updated]);

  const sortTasks = (sortBy) => {
    if (tasks.length > 0) {
      const sortedTasks = tasks.sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy])
      });
      setTasks([...sortedTasks]);
    }
  }

  return (
    <div className="tasks-main-div">

      <div className="task-settings-div">
        <VscGear className="task-settings-icon" onClick={ () => setSettingsToggle(!settingsToggle)}/>
        {settingsToggle ?
          <div className="task-settings-div-inner">
            <TiSortAlphabeticallyOutline className="task-settings-icons-inner" onClick={() => sortTasks('author')}/>
            <MdOutlineDoneOutline className="task-settings-icons-inner" onClick={() => sortTasks('status')} />
          </div>
          :
          null
        }
      </div>

      <div className="tasks-container">
        {!tasks.err && tasks.map((task) => (
          <TaskCard key={task._id} task={ task } />
        ))}
      </div>
    </div>
  )
}
