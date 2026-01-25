import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h1>Learn about react toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
