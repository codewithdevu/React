function UpdateTodo({ todo, setInput, setEditId }) {

    const handleEdit = () => {
        setInput(todo.text)   // 👈 AddTodo input me text aaya
        setEditId(todo.id)    // 👈 update mode ON
    }

    return (
        <button
            onClick={handleEdit}
            title="Edit Todo"
            className="p-2 bg-green-600 hover:bg-green-700 text-white rounded"
        >
            ✏️
        </button>
    )
}

export default UpdateTodo
