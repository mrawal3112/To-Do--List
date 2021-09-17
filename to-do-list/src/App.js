import React from 'react';
import CreateTask from './components/CreateTask';
import './components/todo.css'

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <CreateTask />
      </div>
    </React.Fragment>
  );
}

export default App;
