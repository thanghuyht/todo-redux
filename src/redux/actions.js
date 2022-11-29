
export function addTodo(data) {
    return {
        type: 'add',
        payload: data
    }
}

export function destroyTodo(index) {
    return {
        type: 'destroy',
        payload: index
    }
}


export function toggleCompleted(id) {
    return {
        type: 'toggleCompleted',
        payload: id
    }
}

