// import { useState } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroyTodo, toggleStatus } from "../redux/actions";
import { todoRemainingSelector } from "../redux/selectors";


function Main() {
    const todoList = useSelector(todoRemainingSelector)

    const dispatch = useDispatch()
    // const [editStatus, setEditStatus] = useState(false)

    function handleDestroy(index) {
        dispatch(destroyTodo(index))
    }

    const handleChecked = (id) => {
        dispatch(toggleStatus(id))
    }

    // const startEdit = () => {
    //     setEditStatus(true)
    //     console.log('edit stt', editStatus);
    // }
    // const endCompleteteEdit = () => {
    //     setEditStatus(false)
    // }
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" >Mark all as complete</label>
            <ul className="todo-list">
                {todoList.map((todo, index) =>
                    <li
                        key={todo.id}
                        className={todo.status === 'completed' ? 'completed' : ''}
                    // onDoubleClick={() => startEdit()}
                    >
                        <div className="view" >
                            <input
                                className="toggle"
                                type="checkbox"
                                onChange={() => handleChecked(todo.id)}
                                checked={todo.status === 'completed'}
                            />
                            <label>{todo.title}</label>
                            <button
                                className="destroy"
                                onClick={() => handleDestroy(index)}
                            ></button>
                        </div>
                        <input className="edit" defaultValue="Rule the web" onBlur={() => { }} />
                    </li>)
                }
            </ul>
        </section >
    )
}

export default Main;