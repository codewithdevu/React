import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 2 , text: "hello world"}]
}

export const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state , action ) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload)
        },

        updatetodo: (state , action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo , text: action.payload.text} : todo)
        }
    }
})

export {addTodo , removeTodo , updatetodo} from todoslice.actions
export default todoslice.reducer