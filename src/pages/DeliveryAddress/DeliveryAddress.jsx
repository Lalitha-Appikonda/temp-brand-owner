import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DeliveryAddress = () => {
  const [selectedId,setSelectedId]=useState(1);

  const navigate = useNavigate();

  return (

    <div className='address-container'>
      <div className='address-left'>
        <h2>delivery address</h2>
        <div className="address-card">
          <input type="radio"  checked={selectedId===1} onChange={()=>setSelectedId(1)}/>
          <div>
            <h4>sai kumar <span>Home</span></h4>
            <p>techvibe,t.s</p>
            <p>Phone:798989897999</p>
          </div>
        </div>
      </div>
      <div className="address-right">
        <h2>price details</h2>
      </div>
    </div>
    // <div>
    //   <h2>Delivery Address Page</h2>

    //   <button onClick={() => navigate("/address/edit")}>
    //     Edit Address
    //   </button>
    // </div>
  )
}

export default DeliveryAddress;