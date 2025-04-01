import React, { StrictMode } from 'react'
import { Home, About, Contact, Github, githubInfoLoader } from './components/index.js'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//       {
//         path: 'github',
//         element: <Github />
//       }
//     ]
//   }
// ])

// consise version-easy to read
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="user/:userId" element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
