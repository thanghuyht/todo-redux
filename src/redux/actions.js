
export function addTodo(data) {
    return {
        type: 'todoList/add',
        payload: data
    }
}

export function destroyTodo(id) {
    return {
        type: 'todoList/destroy',
        payload: id
    }
}


export function toggleStatus(id) {
    return {
        type: 'todoList/toggleStatus',
        payload: id
    }
}

export function clearCompleted() {
    return {
        type: 'todoList/clearCompleted',
        payload: "completed"
    }
}

export function searchText(text) {
    return {
        type: 'filters/searchText',
        payload: text
    }
}

export function searchStatus(status) {
    return {
        type: 'filters/searchStatus',
        payload: status
    }
}

