import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Images } from '../../images/Image';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home-page'>

      <div className="banner-container">

        <div className="banner-title">
          <p> Building Aquaculture </p>
          <img className="icons left" src={Images.mainlogotext} />
          <p>Success with</p>
        </div>
 <div className='banner-title'>
          <div className='title-imgback'><img
            src={Images.mainlogotext1}
            alt="right"
            className=""
          /></div>
            <p> Every Drop of Probiotic Power.</p>
        </div>
       


       
        <div className="banner-content">

          <div>
            
          </div>

           {/* <div className="badge">
              🏆 95% Success Ratio
            </div> */}
          <div className="main-card">

           
           

            {/* Button */}
            <button className="shop-btn">
              Shop Now →
            </button>

          </div>

        
          {/* <div className="side-cards">
            <div className="small-card"></div>
            <div className="small-card"></div>
          </div> */}

        </div>
      </div>





      {/* <h2>home page</h2>
      <button onClick={()=>navigate("/products")}>products list</button> */}
    </div>
  )
}

export default Home;
