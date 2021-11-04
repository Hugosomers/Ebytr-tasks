import React, { useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';

function App() {
  const [update, setUpdate] = useState(false);
  return (
    <div className="App">
      <CreateTask update={setUpdate}/>
      <Tasks update={update} setUpdate={setUpdate}/>
    </div>
  );
}

export default App;
