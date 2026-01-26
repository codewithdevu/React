import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updatetodo } from '../features/todo/TodoSlice'

function AddTodo({ input, setInput, editId, setEditId }) {

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        if (!input.trim()) return

        if (editId) {
            dispatch(updatetodo({ id: editId, text: input }))
            setEditId(null)
        } else {
            dispatch(addTodo(input))
        }

        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 text-gray-100 py-1 px-3"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
                className="text-white bg-indigo-500 px-6 py-2 rounded"
            >
                {editId ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    )
}

export default AddTodo
