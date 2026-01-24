import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context'

function App() {
  const [todos , settodos ] = useState([])

  const addTodo = (newtodo) => {
    settodos((prev) => [{id: Date.now() , ...newtodo }, ...prev])
  }

  const updateTodo = (id , updatedTodo) => {
    settodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? updatedTodo : prevtodo)))
  }

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((prevtodo) => prevtodo.id !== i))
  }

  const toggleComplete = (id) => {
    settodos((prev) => prev.map((prevtodo) => prevtodo === id ? {...prevtodo , complete: !prevtodo.complete} : prevtodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      settodos(todos)
    }
  } , [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos , toggleComplete , addTodo , deleteTodo , updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
