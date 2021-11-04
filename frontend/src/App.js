import React from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';

function App() {

  return (
    <div className="App">
      <CreateTask />
      <Tasks />
    </div>
  );
}

export default App;
