import React from 'react'
import './LoginPage.css';
import 'node_modules/boxicons/css/boxicons.css';


const LoginPage = () => {
  return (
        <div className="login-box">
            <h2 className="sub-heading">Be a part of the community.</h2>
            <form action="" className="loginbox"> 
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <i className='bx bxs-lock-alt' ></i>
                </div>

                <div className="remember-account">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" className="login-btn">Login</button>
            </form>
                <div className="register-account">
                    <p>Don't have an account, Click here to <a href="#">create a new account</a></p>
                </div>
        </div>
  );
}

export default LoginPage;