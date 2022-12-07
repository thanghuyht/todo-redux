import { createSelector } from "@reduxjs/toolkit"



export const todoListSelector = state => state.todoList
export const todoSearchFilterSelector = state => state.filters.search
export const todoStatusFilterSelector = state => state.filters.status

export const todoRemainingSelector = createSelector(todoListSelector, todoSearchFilterSelector, todoStatusFilterSelector, (todoList, searchText, searchStatus) => {
    return todoList.filter(todo => {
        if (searchStatus === 'all') {
            return todo.title.includes(searchText)
        } else {
            return todo.title.includes(searchText) && todo.status === searchStatus
        }
    })
}) 