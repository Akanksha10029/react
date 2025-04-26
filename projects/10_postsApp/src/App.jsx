import { useState } from 'react'
import './App.css'
import PostProvider from './context/PostProvider'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <PostProvider>
      <Header/>
      <main className='min-h-[calc(100vh-10rem)]'>
        <Outlet/>
      </main>
      <Footer/>
    </PostProvider>
  )
}

export default App
