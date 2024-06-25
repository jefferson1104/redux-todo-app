import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";
import { ETodoFilterOptions } from "../enums/Todo";
import { ITodoState } from "../interfaces/todo";

function Filter() {
    // Hooks
    const dispatch = useDispatch();
    const currentFilter = useSelector((state: ITodoState) => state.filter);

    // Methods
    const filterHandler = (filter: ETodoFilterOptions) => {
        dispatch(filterTodos(filter))
    };

    // Renders
    return (
        <div className="flex space-x-4 items-center">
            <select
                className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
                value={currentFilter}
                onChange={(e) => filterHandler(e.target.value as ETodoFilterOptions)}
            >
                <option value="ALL">All</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>

            <button
                className="text-sm px-2 py-1 bg-purple-500 hover:bg-purple-600 text-white ml-2 rounded"
                onClick={() => dispatch(markAllCompleted())}
            >
                Mark All Completed
            </button>
        </div>
  )
}

export { Filter }
