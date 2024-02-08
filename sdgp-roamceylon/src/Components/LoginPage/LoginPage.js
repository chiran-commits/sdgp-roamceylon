import React from 'react'
import './LoginPage.css';
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
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

            const { data } = await axios.post('http://localhost:8010/login', { email, password }).then(


                setError('')
            )


            setData({ email: '', password: '' })
            navigate('/home')

        }

        catch (error) {
            setError('The username and password does not match')
        }





    }


    return (
        <>
            <div className='login-page'>
                <div className='header'>
                    <h2>ROAMCEYLON</h2>
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
                        <p>Don't have an account, Click here to <a href="#">create a new account</a></p>
                    </div>
                </div>
            </div>
        </>
    )

}




