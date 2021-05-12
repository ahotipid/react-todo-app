
import ToDo from './ToDo';

const ToDoList  = ( { toDos, setToDos, filteredToDos } ) => {
    return(
        <div className="todoContainer">
            <ul className="todoList">
              {
                filteredToDos.map( (todo ,index) => {
                    return (
                        <ToDo 
                        text= {todo.text}
                        key={index}
                        todo={todo}
                        toDos={toDos}
                        setToDos = {setToDos}
                        />
                    )     
                })
              }
            </ul>
        </div>
    )
}

export default ToDoList;