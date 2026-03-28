import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { SignupProvider } from "./context/SignupContext";
import { BrowserRouter } from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignupProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SignupProvider>
  </StrictMode>,
)
