import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { BrowserRouter } from "react-router-dom";
import Styleguide from './Styleguide/Styleguide';
import ProductCategory from './ProductCategory';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductCategory />
    </BrowserRouter>
  </StrictMode>,
)
