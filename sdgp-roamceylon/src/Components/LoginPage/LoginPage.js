import React from 'react'
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className='main-container'>
      <span className='heading'>ROAMCEYLON</span>
      <div className='box' />
      <div className='pic'>
        <div className='pic-2'>
          <div className='box-2'>
            <span className='create-new-account'>Dont have an account? Click here to </span>
            <a href="#" className='create-new-account'>create account</a>
          </div>
          <span className='subheading'>Be a part Of The Community</span>
          <div className='login-box'>
            <span className='login'>Log In</span>
            <span className='username'>Username</span>
            <input type="text" name="username" className='input-box'/>
            <span className='password'>
              Password
              <br />
            </span>
            <input type="password" name="password" className='input-box'/>
            <button type="submit" className='login-button'>Login</button>
          </div>
          <a href="#" className='forget-password'>Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;