import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeProvider from './context/RecipeProvider'


function App() {

  return (
    <RecipeProvider>
      <Header />
      <main className='min-h-[calc(100vh-10rem)]'>
        <Outlet />
      </main>
      <Footer />
    </RecipeProvider>
  )
}

export default App
