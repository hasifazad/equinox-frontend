import React, { useState } from 'react'
import './Signup.css'

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'

function LoginSignUp() {

    const [action, setAction] = useState("Sign Up")
    return (
        <div className="signup-container">

            <form action="">


                <div className="header">
                    <h1 className="text">SIGNUP</h1>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name' />
                    </div>

                   
                   

                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id' />
                    </div>

                  
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password' />
                    </div>

                    
                </div>
                {/* <div className="forgot-password">Lost Password? <span>Click Here</span></div> */}

                <div className="submit-container">

                    <div className="submit" onClick={() => { setAction("Login") }}>Login Up</div>
                </div>

            </form>


        </div>
    )
}

export default LoginSignUp