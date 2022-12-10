
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState: [
        {
            id: 1, name: 'Do mindX homework', completed: false
        },
        {
            id: 2, name: 'Learn React', completed: true
        },
        {
            id: 3, name: 'Build something awesome', completed: false
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
        deleteTodo: (state, action) => {
            const indexTodoDelete = state.findIndex(todo => todo.id === action.payload);
            state.splice(indexTodoDelete, 1);
        },
        deleteAll: (state) => state = []
    }
})