import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>SignUp</h2>

      <button onClick={() => navigate("/access/category")}>
        Go to Category
      </button>
    </div>
  )
}

export default SignUp