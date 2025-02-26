import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementCounter = ()=>{
    if(count<20){
      setCount(count+1)
      console.log(count);      
    }
    
  }
  const decrementCounter = ()=>{
    if(count>0){
      setCount(count-1)
      console.log(count);
    }
    
  }
  return (   
      <div className="counter">
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
  )
}

export default App
