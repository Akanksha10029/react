import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex items-center justify-between bg-gray-600 text-white p-4'>
        <h1>Posts</h1>
        <ul className='flex space-x-4'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Contact</Link></li>       
        </ul>     
    </div>
  )
}

export default Header