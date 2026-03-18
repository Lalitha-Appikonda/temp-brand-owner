import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>home page</h2>
      <button onClick={()=>navigate("/products")}>products list</button>
    </div>
  )
}

export default Home;
