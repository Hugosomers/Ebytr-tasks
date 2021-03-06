import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import axios from 'axios';
import './css/createTask.css';
import { changeUpdate } from '../redux/actions/taskActions';

export default function CreateTask() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch()

  const createTask = async () => {

    const body = {
      author: name,
      title,
      description,
      status,
    };

    await axios.post('http://localhost:3001/task', body);
    dispatch(changeUpdate())
    // setUpdate(!update)
  }

  return (
    <aside className="aside">
      
      <h1>Insira uma task</h1>

      <form className="create-task-form">

        <input 
          type="text" 
          placeholder="Nome" 
          value={name} 
          onChange={({target}) => setName(target.value)}
          className="createTask-inputs"
        />

        <input 
          type="text" 
          placeholder="Título" 
          value={title} 
          onChange={({target}) => setTitle(target.value)}
          className="createTask-inputs"
        />

        <textarea 
          placeholder="Descrição" 
          value={description} 
          onChange={({target}) => setDescription(target.value)}
          className="createTask-textarea"
        />

        <select 
          onChange={({target}) => setStatus(target.value)}
          className="createTask-select"
        >
          <option value=''>Defina um status</option>
          <option value="Em progresso">Em progresso</option>
          <option value="Pausada">Pausada</option>
          <option value="Finalizada">Finalizada</option>
        </select>

        <button 
          type="button" 
          onClick={createTask}
          className="createTask-button"
          disabled={!name || !description || !title || !status ? true : false}
        >
          Criar Task
        </button>

      </form>
    </aside>
  )
}
