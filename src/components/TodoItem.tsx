import { useDispatch } from "react-redux";
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { ITodoItem } from "../interfaces/todo"
import { markCompleted, markIncomplete, removeTodo, toggleTodo } from "../redux/actions";

interface ITodoItemProps {
    todo: ITodoItem;
}

function TodoItem({ todo }: ITodoItemProps) {
    // Hooks
    const dispatch = useDispatch();

    // Renders
    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
            <div className="flex items-center">
                <span className="mr-4 text-gray-500">{todo.id}</span>
                <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
            </div>

            <div className="space-x-3 ml-8">
                <button
                    className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
                    onClick={() => dispatch(toggleTodo(todo.id))}
                >
                    {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
                </button>

                <button
                    className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded"
                    onClick={() => dispatch(removeTodo(todo.id))}
                >
                    <FaTrash />
                </button>

                {!todo.completed && (
                    <button
                        className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
                        onClick={() => dispatch(markCompleted(todo.id))}
                    >
                        <FaCheck />
                    </button>
                )}

                {todo.completed && (
                    <button
                        className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded"
                        onClick={() => dispatch(markIncomplete(todo.id))}
                    >
                        <FaTimes />
                    </button>
                )}
            </div>
        </li>
    );
}

export { TodoItem }
