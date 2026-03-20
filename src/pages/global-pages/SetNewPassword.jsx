import React from 'react'
import Input from '../../components/form elements/Input'
import { Images } from '../../images/Image'
import Buttons from '../../components/form elements/Buttons';

const SetNewPassword = () => {
    const setrules = [
        { text: "Use at least 8–12 characters", icon: Images.wrongtick,  },
        { text: "Mix uppercase and lowercase letters", icon: Images.wrongtick ,  },
        { text: "Include numbers and special symbols", icon: Images.wrongtick },
        { text: "Avoid using your name, phone number, or birthdate", icon: Images.wrongtick }
    ];
    return (
        <div className='setnewpassword-container'>
            <p className='title-text' >Set New Password</p>
            <h4 className='sub-title-text'>Set a new password to keep your account secure. Choose
                a strong password that is easy for you to remember.</h4>
            <div className='input-box-container'>
                <label className='label-text'>New Password</label>
                <div className="input-box">
                    <img src={Images.key} className="icon left" />
                    <Input/>
                    <img src={Images.eyeicon} className="icon right" />
                </div>
            </div>
            <ul className='rules'>
                {setrules.map((rule, index) => (
                    <li
                        key={index}
                        className="rules-img"
                        style={{ color: rule.color }}
                    >
                        <span>
                            <img src={rule.icon} alt="icon" />
                        </span>
                        {rule.text}
                    </li>
                ))}
            </ul>
            <div className='input-box-container'>
                <label className='label-text'>Confirm New Password</label>
                <div className="input-box">
                    <img src={Images.lockicon} className="icon left" />
                    <Input placeholder='Enter' />
                    <img src={Images.eyeicon} className="icon right" />
                </div>
            </div>
            <div className='action-buttons'>
                <Buttons className='cancel-button' variant='btn btn-outline-primary'>Cancel</Buttons>
                <Buttons className='submit-button' variant=' btn btn-secondary'>Submit</Buttons>
            </div>

        </div>

    )
}

export default SetNewPassword