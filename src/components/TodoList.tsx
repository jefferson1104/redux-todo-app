import { useSelector } from "react-redux";
import { ITodoItem, ITodoState } from "../interfaces/todo";
import { TodoItem } from "./TodoItem";

function TodoList() {
    // Hooks
    const filteredTodos = useSelector((state: ITodoState) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo: ITodoItem) => {
            const matchesFilter = (filter === "ALL") || (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed);

            const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesFilter && matchesSearch;
        })
    });

    console.log(filteredTodos);

    // Renders
    return (
        <ul>
            <li className="my-2 text-sm italic">All your notes here...</li>
            {
                filteredTodos.map((todo: ITodoItem) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </ul>
    );
}

export { TodoList }
