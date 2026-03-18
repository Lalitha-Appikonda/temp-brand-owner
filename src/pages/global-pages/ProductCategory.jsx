import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const ProductCategory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="category-container">

      <div className="logo">logo</div>

      <div className="title">Create Your Account</div>

      <div className="subtitle">
        Continue managing your sales, purchases, and reports by signing in securely.
      </div>

      <select className="select">
        <option>Aquaculture</option>
        <option>Agriculture</option>
        <option>Human Medicine</option>
        <option>Other</option>
      </select>

      <div className="custom-select">

         
        <div 
          className="select-box"
          onClick={() => setOpen(!open)}
        >
          <span>Select Types</span>

          
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {open && (
          <div className="dropdown">

            <div className="dropdown-item">
              <input type="checkbox" /> Probiotic
            </div>

            <div className="dropdown-item">
              <input type="checkbox" /> Minerals
            </div>

            <div className="dropdown-item">
              <input type="checkbox" /> Medicine
            </div>

            <div className="dropdown-item">
              <input type="checkbox" /> Feeds
            </div>

          </div>
        )}

      </div>

      <button className='button'>Next</button>
      
      <p className='terms-conditions'>
        By clicking, I confirm that I have read, understood, and agree to the 
        <span> Terms of Service</span>
          <span></span> of Sri Animalife Biotech Pvt Ltd.
      </p>

    </div>
  )
}

export default ProductCategory
