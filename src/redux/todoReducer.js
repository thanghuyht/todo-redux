


const initalState = {
    todoList: [],
    filters: {
        id: undefined,
        status: 'all',
        search: '',
    }
}

function todoReducer(state = initalState, action) {
    let newState
    switch (action.type) {
        case "todoList/add":
            newState = { ...state, todoList: [...state.todoList, action.payload] }
            return newState

        case "todoList/destroy":
            newState = { ...state, todoList: [...state.todoList.filter(todo => todo.id !== action.payload)] }
            return newState

        case "todoList/toggleStatus":
            newState = {
                ...state,
                todoList: [...state.todoList.map(todo => todo.id === action.payload ? { ...todo, status: todo.status === 'active' ? 'completed' : 'active' } : todo)]
            }
            return newState


        case "todoList/clearCompleted":
            newState = { ...state, todoList: [...state.todoList.filter(todo => todo.status !== action.payload)] }
            return newState


        case "filters/searchText":
            newState = {
                ...state,
                filters:
                {
                    ...state.filters,
                    search: action.payload
                }
            }
            return newState


        case "filters/searchStatus":
            newState = {
                ...state,
                filters:
                {
                    ...state.filters,
                    status: action.payload
                }
            }
            return newState

        default:
            return state
    }
}

export default todoReducer