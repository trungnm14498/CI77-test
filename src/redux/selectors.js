import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    (todoList, status, searchText, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return todo.name.includes(searchText);
            }

            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed)
            );
        });
    });