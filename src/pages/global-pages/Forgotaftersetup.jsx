import React from 'react'
import { Images } from '../../images/Image'
import Input from '../../components/form elements/Input';
import Buttons from '../../components/form elements/Buttons';
import { useNavigate } from 'react-router-dom';

const Forgotaftersetup = () => {
  const navigate = useNavigate()
  const question = [
    " 1.  What is your favorite food?",
    " 2.  What is your first school name?",
    " 3.  What is your best friend's name?",
  ];
  return (
    <div className='aftersetup-container'>
      <div className="back-btn" onClick = {()=>navigate('/login/forgotpssword')}>
        <img src={Images.lessThan} alt="" />
      </div>
      <p className='title-text'>Answer Your Security Question</p>
      <h3 className='sub-title-text'>Answer your already setup question after that you can
        change login password. </h3>

      <div className="ques-container">
        {question.map((q, index) => (
          <div className="boxes" key={index}>
            <div >
              <div className="row1">

                <img src={Images.quesIcon} alt="" />

                <p className="ques">{q}</p>

              </div>
              <div className='ans-input'>
                <Input placeholder='Answer' />
              </div>

            </div>
          </div>
        ))}
      </div>

      <Buttons  className='submit-button' variant='btn btn-secondary' onClick = {()=>navigate('/login/setnewpassword')}>Submit</Buttons>
    </div>
  )
}

export default Forgotaftersetup