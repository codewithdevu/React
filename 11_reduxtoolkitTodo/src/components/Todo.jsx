import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/TodoSlice'
import UpdateTodo from './UpdateTodo'

function Todo({ setInput, setEditId }) {
    const selector = useSelector(state => state.todos)
    const Dispatch = useDispatch()

    return (
        <ul className="list-none">
            {selector.map((todo) => (
                <li
                    key={todo.id}
                    className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                >
                    <div className="text-white">{todo.text}</div>

                    <div className="flex gap-2">
                        <UpdateTodo
                            todo={todo}
                            setInput={setInput}
                            setEditId={setEditId}
                        />

                        <button
                            onClick={() => Dispatch(removeTodo(todo.id))}
                            className="bg-red-500 p-2 rounded text-white"
                        >
                            🗑️
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Todo
