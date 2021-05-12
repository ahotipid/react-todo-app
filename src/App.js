import React, { useEffect, useState } from 'react';
import './App.css';

import Form from './componets/Form';
import ToDoList from './componets/ToDoList';

function App() {
  const [userInput, setUserInput] = useState('');
  const [toDos , setToDos] = useState([])
  const [status , setStatus] = useState('all')
  const [filteredToDos, setFilteredToDos] = useState([])

  //function to filter toDos so it display depend on status
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

  //function to save to local storage to have the list persist
  const saveToLocal = () => {
    //save to local from toDos state
    localStorage.setItem("todo", JSON.stringify(toDos));
  }

  //function get todo from local storage
  const getFromLocal = () => {
    //if nothing in local storage then set to empty array else parse from local storage and set to toDos state
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem("todo"));
      setToDos(todoFromLocal);
    }
  }
  //run for the first time
  useEffect( () => {
    //get toDos from local storage it there's any
    getFromLocal();
  },[])

  //run when there is change to toDos and status
  useEffect( () => {
    //save to local when there a change in toDos
    saveToLocal();
    //filter todos when there is change to toDos or status
    filterHandler();
  } ,[toDos, status])

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
