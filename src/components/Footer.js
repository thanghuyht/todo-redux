import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchText, searchStatus, clearCompleted } from "../redux/actions";
import { todoRemainingSelector } from "../redux/selectors";


function Footer() {
    const [searchInput, setSearchInput] = useState('')
    const [searchSelect, setSearchSelect] = useState('all')

    const todoList = useSelector(todoRemainingSelector)

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        setSearchInput(e.target.value)
        dispatch(searchText(e.target.value))
    }

    const handleChangeSelect = (e) => {
        setSearchSelect(e.target.value)
        dispatch(searchStatus(searchSelect))
    }

    return (
        <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count"><strong>{todoList.length}</strong> item left</span>
            {/* <!-- Remove this if you don't implement routing --> */}
            <div id="search" className="filters">
                <input
                    type="search"
                    name="search"
                    value={searchInput}
                    onChange={(e) => handleSearch(e)}

                />
                <select
                    onChange={(e) => handleChangeSelect(e)}
                >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed"> Completed </option>
                </select>

            </div>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button
                className="clear-completed"
                onClick={() => dispatch(clearCompleted())}
            >
                Clear completed
            </button>
        </footer >
    );
}

export default Footer;