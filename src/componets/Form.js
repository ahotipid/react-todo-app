import React from 'react';

const Form = ({userInput, setUserInput , toDos, setToDos, setStatus}) => {
    const inputHandler = (e) => {
        setUserInput(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (userInput !== "") {
            setToDos([
                ...toDos,
                {
                    text:userInput,
                    completed:false
                }
            ]);
            setUserInput('');
        }
    }
    const displayHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <label htmlFor="addToDo">Add to-do item</label>
            <input 
                value={userInput} 
                onChange= {inputHandler}
                id="addToDo"
                type="text" 
                className="todo-input"/>
            <button 
                onClick= {submitHandler}
                className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <label htmlFor="display">Display</label>
            <select 
                onChange ={displayHandler}
                name="display" 
                id="display" 
                className="todo-filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </form>
    )
}

export default Form;