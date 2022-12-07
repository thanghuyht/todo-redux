import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from "../redux/actions";


function Header() {

    const dispatch = useDispatch()
    const [todotitle, setTodotitle] = useState('')

    function handleChange(text) {
        !text.startsWith(' ') && setTodotitle(text)
    }

    function handeSubmit(e) {
        if (todotitle.length > 0) {
            dispatch(addTodo(
                {
                    id: uuidv4(),
                    title: todotitle.trim(),
                    status: 'active'
                }
            ))
            setTodotitle('')
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input
                value={todotitle}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={e => handleChange(e.target.value)}
                onKeyUp={
                    (e) => {
                        e.key === "Enter" ? handeSubmit(e) : e.key === "Escape" && setTodotitle('')
                    }
                }
                onBlur={(e) => handeSubmit(e)}
            />
        </header>
    );
}

export default Header;