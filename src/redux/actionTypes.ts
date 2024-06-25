export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const MARK_INCOMPLETE = 'MARK_INCOMPLETE';
export const FILTER_TODOS = 'FILTER_TODOS';
export const MARK_ALL_COMPLETED = 'MARK_ALL_COMPLETED';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

export type AddTodoAction = {
    type: typeof ADD_TODO;
    payload: { text: string };
};

export type ToggleTodoAction = {
    type: typeof TOGGLE_TODO;
    payload: { id: number };
};

export type RemoveTodoAction = {
    type: typeof REMOVE_TODO;
    payload: { id: number };
};

export type MarkCompletedAction = {
    type: typeof MARK_COMPLETED;
    payload: { id: number };
};

export type MarkIncompleteAction = {
    type: typeof MARK_INCOMPLETE;
    payload: { id: number };
};

export type FilterTodosAction = {
    type: typeof FILTER_TODOS;
    payload: { filter: string };
};

export type MarkAllCompletedAction = {
    type: typeof MARK_ALL_COMPLETED;
};

export type UpdateSearchTermAction = {
    type: typeof UPDATE_SEARCH_TERM;
    payload: { searchTerm: string };
};

export type TodoActionTypes =
    | AddTodoAction
    | ToggleTodoAction
    | RemoveTodoAction
    | MarkCompletedAction
    | MarkIncompleteAction
    | FilterTodosAction
    | MarkAllCompletedAction
    | UpdateSearchTermAction;
