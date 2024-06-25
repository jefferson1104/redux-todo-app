import { ETodoFilterOptions } from "../enums/Todo";
import { ITodoItem, ITodoState } from "../interfaces/todo";
import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, TodoActionTypes, UPDATE_SEARCH_TERM } from "./actionTypes";

const initialState: ITodoState = {
    todos: [],
    filter: ETodoFilterOptions.ALL,
    searchTerm: "",
 };

const todoReducer = (state = initialState, action: TodoActionTypes) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, { id: state.todos.length, text: action.payload.text, completed: false }],
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo: ITodoItem) => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case REMOVE_TODO:
            return {
                todos: state.todos.filter((todo: ITodoItem) => todo.id !== action.payload.id),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case MARK_COMPLETED:
            return {
                todos: state.todos.map((todo: ITodoItem) => todo.id === action.payload.id ? { ...todo, completed: true } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case MARK_INCOMPLETE:
            return {
                todos: state.todos.map((todo: ITodoItem) => todo.id === action.payload.id ? { ...todo, completed: false } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case FILTER_TODOS:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm,
            };
        case MARK_ALL_COMPLETED:
            return {
                todos: state.todos.map((todo: ITodoItem) => ({ ...todo, completed: true })),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case UPDATE_SEARCH_TERM:
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm,
            };
        default:
            return state;
    }
};

export default todoReducer
