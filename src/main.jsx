import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Styleguide from './Styleguide/Styleguide'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Styleguide />
  </StrictMode>,
)
