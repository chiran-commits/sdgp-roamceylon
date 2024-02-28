
import Navbar from '../AboutUsPage/Navbar';
import './UserProfile.css';
import React, { useState, useEffect } from 'react';
import ProfileImg from '../AboutUsPage/Asset 1.png'
import axios from 'axios';

function UserProfile(){
    const [img,setImg] = useState(ProfileImg);
    const [fname,setFName] = useState("Guest");
    const [lname,setLName] = useState("Guest");
    const [age,setAge] = useState(19);
    const [email, setEmail] = useState("guest123@gmail.com");
    const [edit,setEdit] = useState(true);
    const [data,setData] = useState({user:{firstName:"",lastName:"",email:"",password:"",age:""}});



  
      useEffect(() => {

        const authToken = localStorage.getItem('SDGP-roamceylon2');
        const getProfile = async () => {
                const res = await axios
                    .get("http://localhost:5009/user",{
                        headers: {
                             Authorization: authToken
                        }
                    })
                    .catch((err) => console.log(err));
                    console.log(res);
                const data = await res.data;
                setData(data);
                console.log(data);
        };
        getProfile();
       
      
      }, []);

   

    function handleEdit(){
        setEdit(false);
        
    }

    function handleSave(){
        setEdit(true);
    }

    function handleFName(event){
        setFName(event.target.value);
    }
    function handleLName(event){
        setLName(event.target.value);
    }
    function handleAge(event){
        setAge(event.target.value);
    }
    function handleEmail(event){
        setEmail(event.target.value);
    }
    
        

    return(<>
    <Navbar></Navbar>
    <div className="outer-container">
    <div className="container">
    <div className="profile-container">
        <img src={img}></img><br></br>
        <p>{fname}</p>
        <p>{lname}</p>
        <p>{age}</p>
    </div>
    </div>
    
    <div className="container">
    <div className="info-container">
        <p>Details</p>
        <button  onClick={handleEdit}>Edit</button>
        <button onClick={handleSave}>Save</button>
        <br></br>
        <label>First Name</label><br></br>
        <input value={data.user.firstName} disabled={edit} onChange={handleFName}></input>
        <br></br>
        <label>Last Name</label><br></br>
        <input type="text" value={data.user.lastName} disabled={edit}  onChange={handleLName}></input>
        <br></br>
        <label>Email</label><br></br>
        <input value={data.user.email} disabled='true' size="30" onChange={handleEmail}></input><br></br>
        <label>Age</label><br></br>
        <input value={age} disabled={edit}  onChange={handleAge}></input><br></br>
    </div>
    </div>
    </div>
    
    
    </>);
}

export default UserProfile;