import React, { useContext, useState } from 'react'
import './Login.css'

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../App'

function Login() {



    let { userData, setUserData } = useContext(userContext)

    let [errMsg, setErrMsg] = useState('')

    let navgate = useNavigate()

    let [data, setData] = useState({
        email: '',
        password: ''
    })

    let getData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })


    }

    let sendData = () => {

        console.log(data);

        axios.post('http://localhost:3000/login', data).then((res) => {
            console.log(res);

            if (res.data.loginStatus) {
                setUserData(res.data.data)
                navgate('/')
            }

        }).catch((err) => {

            setErrMsg(err.response.data.error)
            console.log(err);
        })



    }

    return (
        <div className="login-container">

            <form action="">

                <div className="header">
                    <h1 className="text">LOGIN</h1>
                    <div className="underline"></div>
                </div>
                <div className="inputs">

                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id' name='email' onChange={getData} />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password' name='password' onChange={getData} />
                    </div>

                </div>

                <p style={{ color: 'red', textAlign: 'center' }}>{errMsg}</p>

                <div className='sign'>Have no account? <Link to='/signup'>SIGNUP</Link></div>



                <div className="submit-container">
                    <button className="submit" type='button' onClick={() => { sendData() }}>Login</button>
                </div>

            </form>


        </div>
    )
}

export default Login
