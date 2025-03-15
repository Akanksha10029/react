import { useState } from 'react'
import Card from './components/card'

function App() {
  const [color, setColor] = useState("olive")
  return (
      <div className="container min-w-full min-h-screen flex flex-col" style={{backgroundColor: color}}>
        <h1 className='text-center text-5xl text-amber-900 font-bold'>Background color changer</h1>
        <Card color={color}/>
        <div className="colorBox min-w-[70%] fixed shadow bottom-12 inset-x-0 " >
          <div className="innerColorBox mx-auto flex flex-wrap justify-center gap-2 rounded-3xl bg-white py-2 px-4">
          <button className='red rounded-3xl px-4 py-2 text-center bg-red-600 text-gray-800 cursor-pointer' onClick={()=> setColor("red")}>red</button>
          <button className='lavender rounded-3xl px-4 py-2 text-center bg-purple-200 text-gray-800 cursor-pointer' onClick={()=> setColor("#e9d4ff")}>lavender</button>
          <button className='yellow rounded-3xl px-4 py-2 text-center bg-yellow-300 text-gray-800 cursor-pointer' onClick={()=> setColor("#ffdf20")}>yellow</button>
          <button className='green rounded-3xl px-4 py-2 text-center bg-green-600 text-gray-800 cursor-pointer' onClick={()=> setColor("#00a63e")}>green</button>
          <button className='pink rounded-3xl px-4 py-2 text-center bg-pink-600 text-gray-800 cursor-pointer'onClick={()=> setColor("#e60076")}>pink</button>
          </div>
        </div>          
      </div>
  )
}

export default App
