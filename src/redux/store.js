import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../components/TodoList/todoSlice";
import filtersSlice from "../components/Filters/filtersSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer,
    },
});

export default store;
