import { ETodoFilterOptions } from "../enums/Todo";

export interface ITodoItem {
    id: number;
    text: string;
    completed: boolean;
}

export interface ITodoState {
    todos: ITodoItem[];
    filter: ETodoFilterOptions;
    searchTerm: string;
}
