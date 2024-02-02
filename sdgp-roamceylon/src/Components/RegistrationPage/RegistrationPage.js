

import loader from "../Helper/loader";
import "./RegistrationPage.css";
import React, { useState, useEffect } from 'react';



export const RegistrationPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
  
        setTimeout(() => {
          setLoading(false); 
        }, 2000);
      }, []);

  return (
    
    <>
            <div className='header'>
                <h2>ROAMCEYLON</h2>
            </div>
            <div className="login-box">
                <h2 className="sub-heading">Be a part of the community.</h2>
                <form action="" className="loginbox"> 
                    <h1>register</h1>
                    <div>
                        <div className="input-box">
                            <input type="text" placeholder="First Name" required/>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Last Name" required/>
                            <i className='bx bxs-user'></i>
                        </div>

                    </div>
                
                    
                    <div className="input-box">
                        <input type="text" placeholder="Email" required/>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="user name" required/>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                        <i className='bx bxs-lock-alt' ></i>
                    </div>


                    <button type="submit" className="login-btn">Create account</button>
                </form>
                    
            </div>
        </> 
  )
}
