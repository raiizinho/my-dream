import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login.jsx'
import SignIn from './pages/Signin.jsx'
import Home from './pages/Home.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import "./index.css"

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/my-dream/", 
        element: <Login />
      },
    ],
  },
  {
    path: "/my-dream/home",
    element: <Home />
  },
  {
    path: "/my-dream/signin",
    element: <SignIn />
  },
  {
    path: "*",
    element: <div>Página não encontrada</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
