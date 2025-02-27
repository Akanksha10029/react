import { useState } from 'react'
import './App.css'
import Card from './components/cardProps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-5xl font-bold underline">Hi I'm Akanksha</h1>
      <p className='text-2xl text-green-400 underline p-4'>hello</p>
      <div>
        <p>Count: {count}</p>
        <button className='m-4' onClick={() => 
          setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <div className="card">
        <Card name="todoroki" />
      </div>
    </>
  )
}

export default App