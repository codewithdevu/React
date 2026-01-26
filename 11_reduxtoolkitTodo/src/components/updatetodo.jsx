import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatetodo } from '../features/todo/TodoSlice'

function UpdateTodo({ todo }) {
    const [isEdit, setIsEdit] = useState(false)
    const [text, setText] = useState(todo.todo)
    const dispatch = useDispatch()

    const handleUpdate = () => {
        dispatch(updatetodo({ id: todo.id, text }))
        setIsEdit(false)
    }

    return (
        <>
            {isEdit ? (
                <div className="flex gap-2">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="px-2 py-1 rounded outline-none"
                    />
                    <button
                        onClick={handleUpdate}
                        className="bg-green-500 px-3 py-1 rounded text-white"
                    >
                        Save
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setIsEdit(true)}
                    className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                >
                    ✏️
                </button>
            )}
        </>
    )
}

export default UpdateTodo
