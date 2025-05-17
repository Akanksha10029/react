import { createSlice, nanoid } from "@reduxjs/toolkit";
// createSlice is a function that takes an object as an argument and returns a slice. The object can contain the following properties: name, initialState, reducers, extraReducers, and selectors. The name property is required and is used to create the slice. The initialState property is used to set the initial state of the slice. The reducers property is used to define the reducer functions for the slice. The extraReducers property is used to define additional reducers for the slice. The selectors property is used to define selectors for the slice.

//nanoid generates a unique id for each todo item. 

const initialState = {
    todos: [{
        // for demo purpose only
        id:nanoid(),
        title: "Learn Redux Toolkit",
        completed: false
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //properties and functions of the slice
        addTodo:(state, action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            const {id, title} = action.payload;
            const todo = state.todos.find((todo)=>todo.id === id);
            if(todo){
                todo.title = title;
            }
        },
        completedTodo: (state, action)=>{
            const todo = state.todos.find((todo)=>todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        clearCompleted: (state)=>{
            state.todos = state.todos.filter((todo)=> !todo.completed)
        },
    }
})

export const {addTodo, removeTodo, updateTodo, completedTodo, clearCompleted} = todoSlice.actions;

export default todoSlice.reducer;
// The todoSlice.reducer is the reducer function that will be used in the store.