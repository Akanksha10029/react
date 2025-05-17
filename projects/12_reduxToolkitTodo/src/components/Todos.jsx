import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completedTodo, removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {

  const todos = useSelector(state=>state.todos)
  const dispatch = useDispatch()
  
  const [editId, setEditId] = useState(null)
  const [updateTitle, setUpdateTitle] = useState("");

  const handleEdit = (todo)=>{
    setEditId(todo.id)  // Marks this todo as being edited
    setUpdateTitle(todo.title) // Pre-fills the input with the current title
  }
  const handleUpdate = (id) => {
    dispatch(updateTodo({id, title: updateTitle}))
    console.log(updateTitle);
    setEditId(null)
    setUpdateTitle("")
  }
  const handleCompleted = (id)=>{
    dispatch(completedTodo(id))
    
  }
  return (
    <div className='w-200 mt-10 bg-gray-400 rounded-xl'>
      <div className='text-center text-3xl font-bold'>My Todos</div>
      <ul className='flex flex-col justify-center items-center gap-2 p-4 '>
        {todos.map((todo)=>(
          <li
            className="mt-4 w-full flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}>

            <input type="checkbox" name="complete" id="complete" onClick={()=>{handleCompleted(todo.id)}}/>  

            <input 
              type="text"                            
              readOnly={editId !== todo.id} 
              value={editId === todo.id ? updateTitle : todo.title} 
              onChange={(e) => setUpdateTitle(e.target.value)}
              className={`bg-zinc-700 text-white px-2 py-1 rounded flex-3/5 ${todo.completed === true? "line-through": "" }` }
            /> 

            {editId === todo.id ? (
              <button disabled={todo.completed} onClick={(e)=>handleUpdate(todo.id)} className={`text-white bg-green-500 px-2 py-1 ml-2 rounded text-md ${todo.completed === true? "disabled:cursor-not-allowed": ""}`}>
                Save  
              </button>
            ): (
              <button disabled={todo.completed} onClick={(e=> handleEdit(todo))} className={`text-white bg-blue-500 px-2 py-1 ml-2 rounded text-md ${todo.completed === true? "disabled:cursor-not-allowed": ""}`}>
                Edit
              </button>
            )}

            {/* remove button functionality */}
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md ml-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>       
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos