import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from "../redux/actions";


function Header() {

    const dispatch = useDispatch()
    const [todotitle, setTodotitle] = useState('')

    function handleChange(e) {
        let todoTitle = e.target.value
        !todoTitle.startsWith(' ') && setTodotitle(todoTitle)
    }

    function handeSubmit(e) {
        dispatch(addTodo({
            id: uuidv4(),
            title: todotitle,
            completed: false
        }))
        setTodotitle('')
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input
                value={todotitle}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={e => handleChange(e)}
                onKeyUp={
                    (e) => {
                        e.keyCode === 13 && handeSubmit(e)
                    }
                }
            />
        </header>
    );
}

export default Header;