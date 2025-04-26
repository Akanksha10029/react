import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex items-center justify-between bg-gray-800 text-white p-4'>
        <h1>Recipe App</h1>
        <Search/>
        <ul className='flex space-x-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Header