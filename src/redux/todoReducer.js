
const initalState = {
    todoList: [
        {
            id: 1,
            title: "chic la thich nhat",
            completed: true
        },
        {
            id: 2,
            title: "chic la vui",
            completed: false
        }
    ],
    filters: {
        completed: false,
        search: ''
    }
}


function todoReducer(state = initalState, action) {
    let newState

    // console.log(state, action);
    switch (action.type) {
        case "add":
            newState = { ...state, todoList: [...state.todoList, { ...action.payload, title: action.payload.title.trim() }] }
            return newState

        case "destroy":
            newState = { ...state }
            newState.todoList.splice(action.payload, 1)
            return newState

        case "toggleCompleted":
            newState = { ...state, todoList: [...state.todoList.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)] }
            return newState
        default:
            return state
    }
}

export default todoReducer