import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import './css/taskCard.css';
import { BsTrash, BsPencil, BsCircleFill } from 'react-icons/bs';
import axios from 'axios';
import { changeUpdate } from '../redux/actions/taskActions';


export default function TaskCard({ task }) {
  const [taskInfos, setTaskInfos] = useState(task);
  const [statusColor, setStatusColor] = useState('#2cb67d');
  const [editMode, setEditMode] = useState(false);
  const { updated } = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();

  const deleteTask = async () => {
    await axios.delete(`http://localhost:3001/task/${task._id}`);
    dispatch(changeUpdate());
  }

  const editTask = async () => {
    const body = {
      author: taskInfos.author,
      title: taskInfos.title,
      description: taskInfos.description,
      status: taskInfos.status
    };
    await axios.put(`http://localhost:3001/task/${task._id}`, body);
    setEditMode(false);
    dispatch(changeUpdate());
  }

  useEffect(() => {
    const color = {
      'Em progresso': '#2cb67d',
      'Pausada': '#ff8e3c',
      'Finalizada': '#f25042'
    }
    setStatusColor(color[task.status])
  }, [task, updated]);

  return (
    <>
    {!editMode ?

      <div className="task-card">
        <div className="task-card-top">
          <h1>{task.title}</h1>

          <div>
            <BsTrash onClick={ deleteTask } className="delete-icon"/>
            <BsPencil onClick={() => setEditMode(!editMode)} className="update-icon"/>
          </div>
        </div>

        <h2>{task.author}</h2>

        <div>
          <p>Descrição: {task.description}</p>
          <div className="task-card-status">
            <p>Status: {task.status}</p>
            <BsCircleFill color={statusColor} className="status-icon"/>
          </div>
        </div>

      </div>

      :

      <div className="task-card">
        <div className="task-card-top">
          <h1>Edição</h1>
          <div>
            <BsTrash onClick={ deleteTask } className="delete-icon"/>
            <BsPencil onClick={() => setEditMode(!editMode)} className="update-icon"/>
          </div>
        </div>

        <div>
          <input type="text" className="createTask-inputs" placeholder="Título" value={taskInfos.title} onChange={({target}) => setTaskInfos({...taskInfos, title:target.value })}/>

          <input type="text" className="createTask-inputs" placeholder="Nome"  value={taskInfos.author} onChange={({target}) => setTaskInfos({...taskInfos, author:target.value })}/>

          <textarea className="createTask-textarea" placeholder="Descrição" value={taskInfos.description} onChange={({target}) => setTaskInfos({...taskInfos, description:target.value })}/>

          <select 
            onChange={({target}) => setTaskInfos({...taskInfos, status:target.value })}
            value={taskInfos.status}
            className="createTask-select"
          >
            <option value="Em progresso">Em progresso</option>
            <option value="Pausada">Pausada</option>
            <option value="Finalizada">Finalizada</option>
          </select>

        </div>
        <button type="button" className="createTask-button" onClick={ editTask }>Editar</button>
      </div>
    }
    </>
  )
}
