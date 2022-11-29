// import { useState } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroyTodo, toggleCompleted } from "../redux/actions";


function Main() {
    const todoList = useSelector(state => state.todoList)
    const [editStatus, setEditStatus] = useState(false)

    const dispatch = useDispatch()
    console.log(todoList)
    function handleDestroy(index) {
        dispatch(destroyTodo(index))
        console.log(index)
    }
    const handleChecked = (id) => {
        dispatch(toggleCompleted(id))
    }

    const startEdit = (id) => {
        setEditStatus(true)
    }
    const endCompleteteEdit = () => {
        setEditStatus(false)
    }
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" >Mark all as complete</label>
            <ul className="todo-list">
                {todoList.map((todo, index) =>
                    <li
                        key={todo.id}
                        className={todo.completed ? 'completed' : editStatus ? 'edditing' : ''}
                        onDoubleClick={() => startEdit(todo.id)}
                    >
                        <div className="view" >
                            <input className="toggle" type="checkbox" onChange={() => handleChecked(todo.id)} checked={todo.completed} />
                            <label>{todo.title}</label>
                            <button
                                className="destroy"
                                onClick={() => handleDestroy(index)}
                            ></button>
                        </div>
                        <input className="edit" defaultValue="Rule the web" onBlur={() => endCompleteteEdit(todo.id)} />
                    </li>)
                }
            </ul>
        </section >
    )
}

export default Main;