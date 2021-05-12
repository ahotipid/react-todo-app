import React, { useEffect, useState } from 'react';
import './App.css';

import Form from './componets/Form';
import ToDoList from './componets/ToDoList';

function App() {
  const [userInput, setUserInput] = useState('');
  const [toDos , setToDos] = useState([])
  const [status , setStatus] = useState('all')
  const [filteredToDos, setFilteredToDos] = useState([...toDos])

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredToDos(toDos.filter(todo => todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(todo => todo.completed===false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  }
  
  useEffect( () => {
    filterHandler();
  } , [toDos, status])

  return (
    <div className="App">
      <header>
        <h1>My To-Do-List</h1>
      </header>
      <Form
        userInput={userInput}
        setUserInput={setUserInput}
        toDos={toDos}
        setToDos={setToDos}
        setStatus={setStatus}
      />
      <ToDoList 
        filteredToDos={filteredToDos}
        toDos={toDos}
        setToDos={setToDos}
      />
      
    </div>
  );
}

export default App;
