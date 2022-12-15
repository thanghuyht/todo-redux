
import { useDispatch, useSelector } from "react-redux";
import { destroyTodo, toggleStatus } from "../redux/actions";
import { todoRemainingSelector } from "../redux/selectors";


function Main() {
    const todoList = useSelector(todoRemainingSelector)

    const dispatch = useDispatch()
    function handleDestroy(id) {
        dispatch(destroyTodo(id))
    }

    const handleChecked = (id) => {
        dispatch(toggleStatus(id))
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <ul className="todo-list">
                {todoList.map((todo) =>
                    <li
                        key={todo.id}
                        className={todo.status === 'completed' ? 'completed' : ''}
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
                                onClick={() => handleDestroy(todo.id)}
                            ></button>
                        </div>

                    </li>)
                }
            </ul>
        </section >
    )
}

export default Main;