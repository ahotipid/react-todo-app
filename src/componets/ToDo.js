import React from 'react';

const ToDo = ( {text, todo , toDos, setToDos}) => {
    const deleteHandler = () => {
        setToDos( toDos.filter( (item) => {
            return item !==todo
        }) 
        )
    }
    const completeHandler = () => {
        setToDos(toDos.map((item) => {
            if(item === todo) {
                return {...item, 
                    completed:!item.completed
                }          
            }
            return item;
        }))
    }
    
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick= {completeHandler}  className="completed"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler}className="trash"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default ToDo;