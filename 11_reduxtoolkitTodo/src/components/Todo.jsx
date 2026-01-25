import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/TodoSlice'

function Todo() {
    const selector = useSelector(state => state.todos)
    const Dispatch = useDispatch()
    return (
        <h1>todo</h1>
    )
}

export default Todo
