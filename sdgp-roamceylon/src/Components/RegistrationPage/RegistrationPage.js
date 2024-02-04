import loader from "../Helper/loader";
import "./RegistrationPage.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';





export const RegistrationPage = () => {


    const [loading, setLoading] = useState(true);

    const [data,setData]=useState({
        firstName:'',lastName:"",email:'',password:''
    })
  
    const [error,setError]=useState('');

    const registerUser = async(e) => {
        e.preventDefault()
        const {firstName,lastName,email,password}=data

   
        try{

            

            const {data}=await axios.post('http://localhost:8010/register',{firstName,lastName,email,password}).then(

            
            setError('')
            ).catch((err)=>{
                setError(err.response.data.error)
            })

            setData({ firstName:'',lastName:'',email:'',password:''})

            
            

            

        }catch (err) {
            setError("The username already exists")
        }
            
       

    }

    useEffect(() => {
  
        setTimeout(() => {
          setLoading(false); 
        }, 2000);
      }, []);

  return (
    
    <>
        <div className="register-page">
            <div className='header'>
                <h2>ROAMCEYLON</h2>
            </div>
            <div className="register-box">
                <h2 className="sub-heading">Be a part of the community.</h2>
                <form  className="registerbox" onSubmit={registerUser}> 
                    <h1>Register</h1>
                    <div>
                        <div className="input-box-register">
                            <input type="text" placeholder="First Name" required  value={data.firstName} onChange={(e)=>setData({...data,firstName:e.target.value})}/>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box-register">
                            <input type="text" placeholder="Last Name" required  value={data.lastName} onChange={(e)=>setData({...data,lastName:e.target.value})}/>
                            <i className='bx bxs-user'></i>
                        </div>
                    </div>
                    <div className="input-box-register">
                        <input type="text" placeholder="Email" required value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box-register">
                        <input type="password" placeholder="Password" required value={data.password} minLength={6} onChange={(e)=>setData({...data,password:e.target.value})}/>
                        <i className='bx bxs-lock-alt' ></i>
                    </div>
                    {error && <p style={{ color: 'red' } }className="error">{error}</p>}
                    <button type="submit" className="register-btn">Create account</button>
                </form>
                <div className="register-account">
                        <p>If you already have a account, Click here to <a href="#">Login</a></p>
                </div> 
            </div>
        </div>    
    </> 
  )
}
