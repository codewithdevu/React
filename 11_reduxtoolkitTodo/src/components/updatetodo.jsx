function UpdateTodo({ todo, setInput, setEditId }) {

    const handleEdit = () => {
        setInput(todo.text)  
        setEditId(todo.id)   
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
