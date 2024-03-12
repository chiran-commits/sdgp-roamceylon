import React from 'react'
import './LoginPage.css';
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {authorizationActions} from '../../store';
import LoginVideo from '../LoginPage/Video/backVideoLog.mp4';

export default function Login() {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('');

    const navigate = useNavigate();








    const loginUser = async (e) => {
        e.preventDefault()
        const { email, password } = data
        // try{
        // const {data} = await axios.post('http://localhost:8010/login',{
        //     email,
        //     password
        // });
        //     if (data.error){
        //         //toast.error(data.error)
        //         console.log(data.error)
        //     }
        //     else{
        //         setData({});
        //         navigate('/profile')
        //     }
        // }
        // catch (error){

        // }
        try {

            const data = await axios.post('http://localhost:5009/login', { email, password }).then(
                setError('')
            )
            const token=await data.data.token;
            console.log(token)
            localStorage.setItem('SDGP-roamceylon2', token);
            dispatch(authorizationActions.login())
            setData({ email: '', password: '' })
            navigate('/')

        }

        catch (error) {
            console.log(error)
            setError('The username and password does not match')
        }





    }


    return (
        <>
            <div className='login-page'>
                <video className='video-login' autoPlay muted loop playsInline>
                    <source src={LoginVideo} type='video/mp4' />
                </video>
                <div className='header'>
                    <a href='/'><h2>ROAMCEYLON</h2></a>
                </div>
                <div className="login-box">
                    <h2 className="sub-heading">Be a part of the community.</h2>
                    <form action="" className="loginbox" onSubmit={loginUser}>
                        <h1>Login</h1>
                        <div className="input-box-login">
                            <input type="text" placeholder="Email" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box-login">
                            <input type="password" placeholder="Password" required value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                            <i className='bx bxs-lock-alt' ></i>
                        </div>

                        <div className="remember-account">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <button type="submit" className="login-btn" >Login</button>
                    </form>
                    <div className="register-account">
                        <p>Don't have an account, Click here to <Link to='/register'><a>create a new account</a></Link></p>
                    </div>
                </div>
            </div>
        </>
    )

}




