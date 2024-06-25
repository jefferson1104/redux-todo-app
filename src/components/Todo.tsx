import { useState } from 'react'
import { BsPlus, BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux';

import { addTodo, updateSearchTerm } from '../redux/actions';
import { Filter } from './Filter';
import { TodoList } from './TodoList';

function Todo() {
    // Hooks
    const dispatch = useDispatch();

    // States
    const [newTodoText, setNewTodoText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Methods
    const addTodoHandler = (text: string) => {
        dispatch(addTodo(text))
    };

    const searchTermHandler = (value: string) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    };

    const addTodoClickHandler = () => {
        if(newTodoText.trim() !== '') {
            addTodoHandler(newTodoText.trim());
            setNewTodoText('');
        }
    };

    // Renders
    return (
        <div className="max-w-6xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
                TODO APP
            </h2>

            {/* input text and button */}
            <div className="flex items-center mb-4">
                <input
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    name="addTodoInput"
                    id="addTodoInput"
                    placeholder="Type your todo"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button
                    className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={addTodoClickHandler}
                >
                    <BsPlus />
                </button>
            </div>

            {/* filter and search */}
            <div className="flex items-center justify-between">
                <Filter />
                <div className='flex items-center'>
                    <input
                        className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        type="text"
                        name="searchTerm"
                        id="searchTerm"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => searchTermHandler(e.target.value)}
                    />

                    <button
                        className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                        // onClick={addTodoClickHandler}
                    >
                        <BsSearch />
                    </button>
                </div>
            </div>

            {/* todo list */}
            <TodoList />
        </div>
    );
}

export { Todo }
