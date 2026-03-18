import React, { useState } from 'react'

const ProductCategory = () => {
  const [open,setOpen]=useState(false)

  return (
    <div className="category-container">

      <div className="logo">logo</div>

      <div className="title">Create Your Account</div>

      <div className="subtitle">
        Continue managing your sales, purchases, and reports by signing in securely.
      </div>

      <select className="select">
        <option value="">Aquaculture</option>
        <option value="">Agriculture</option>
        <option value="">Human Medicine</option>
        <option value="">Other</option>
      </select>

      <div className="custom-select">

        <div 
          className="select-box"
          onClick={()=>setOpen(!open)}
        >
          Select Types
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


      <button className='button'>next</button>

    </div>
  )
}

export default ProductCategory