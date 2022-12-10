export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: 'todoList/deleteTodo',
        payload: todoId
    }
}

export const deleteAll = () => {
    return {
        type: 'todoList/deleteAll',
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filter/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status
    }
}