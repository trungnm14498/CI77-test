import { combineReducers } from 'redux';

import todoListReducer from "../components/TodoList/TodoSlice";
import filtersReducer from "../components/Filters/FiltersSlice";

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
})

export default rootReducer;
