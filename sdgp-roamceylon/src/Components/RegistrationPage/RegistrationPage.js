

import loader from "../Helper/loader";
import "./RegistrationPage.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';





export const RegistrationPage = () => {


    const [loading, setLoading] = useState(true);

    const [data,setData]=useState({
        firstName:'',lastName:"",email:'',password:''
    })
  

    const registerUser = (e) => {
        e.preventDefault()
        const {firstName,lastName,email,password}=data

   
        try{

            axios.post('http://localhost:8010/register',{firstName,lastName,email,password}).then(
                setData({ firstName:'',lastName:'',email:'',password:''})

            )
            
                
            
            

            
            
        

        }catch (err) {
            console.log(err);
        }
            
       

    }

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
                <form  className="loginbox" onSubmit={registerUser}> 
                    <h1>register</h1>
                    <div>
                        <div className="input-box">
                            <input type="text" placeholder="First Name" required  value={data.firstName} onChange={(e)=>setData({...data,firstName:e.target.value})}/>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Last Name" required  value={data.lastName} onChange={(e)=>setData({...data,lastName:e.target.value})}/>
                            <i className='bx bxs-user'></i>
                        </div>

                    </div>
                
                    
                    <div className="input-box">
                        <input type="text" placeholder="Email" required value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
                        <i className='bx bxs-lock-alt' ></i>
                    </div>


                    <button type="submit" className="login-btn">Create account</button>
                </form>
                    
            </div>
        </> 
  )
}
