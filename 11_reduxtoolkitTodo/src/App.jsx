import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todo from './components/Todo'

function App() {

  const [input, setInput] = useState('')
  const [editId, setEditId] = useState(null)

  return (
    <>
      <h1>Learn about react toolkit</h1>

      <AddTodo
        input={input}
        setInput={setInput}
        editId={editId}
        setEditId={setEditId}
      />

      <Todo
        setInput={setInput}
        setEditId={setEditId}
      />
    </>
  )
}

export default App
