import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './assets/login/Login.jsx'
import SignIn from './assets/signin/Signin.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignIn />
  </StrictMode>,
)
