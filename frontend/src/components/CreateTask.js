import React, { useState } from 'react'
import axios from 'axios';
import './css/createTask.css';

export default function CreateTask({ update }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const createTask = async () => {

    const body = {
      author: name,
      title,
      description,
      status,
    };

    const response = await axios.post('http://localhost:3001/task', body);
    if (response.data.status === 201) {
      alert('Task criada')
    }
    update(true);
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
