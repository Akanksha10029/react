import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='text-center text-gray-100 text-3xl font-bold '>Learn about redux toolkit</h1>
      <div className='max-w-[70vw] mx-auto mt-12 flex flex-col justify-center items-center'>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
