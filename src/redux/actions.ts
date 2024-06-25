import {
    ADD_TODO,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    REMOVE_TODO,
    TOGGLE_TODO,
    UPDATE_SEARCH_TERM,
    AddTodoAction,
    ToggleTodoAction,
    RemoveTodoAction,
    MarkCompletedAction,
    MarkIncompleteAction,
    FilterTodosAction,
    MarkAllCompletedAction,
    UpdateSearchTermAction,
} from "./actionTypes";

export const addTodo = (text: string): AddTodoAction => ({
    type: ADD_TODO,
    payload: {text}
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
    type: TOGGLE_TODO,
    payload: {id}
});

export const removeTodo = (id: number): RemoveTodoAction => ({
    type: REMOVE_TODO,
    payload: {id}
});

export const markCompleted = (id: number): MarkCompletedAction => ({
    type: MARK_COMPLETED,
    payload: {id}
});

export const markIncomplete = (id: number): MarkIncompleteAction => ({
    type: MARK_INCOMPLETE,
    payload: {id}
});

export const filterTodos = (filter: string): FilterTodosAction => ({
    type: FILTER_TODOS,
    payload: {filter}
});

export const markAllCompleted = (): MarkAllCompletedAction => ({
    type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm: string): UpdateSearchTermAction => ({
    type: UPDATE_SEARCH_TERM,
    payload: {searchTerm}
});
