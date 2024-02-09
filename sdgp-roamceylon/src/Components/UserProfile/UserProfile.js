
import Navbar from '../AboutUsPage/Navbar';
import './UserProfile.css';
import React, { useState, useEffect } from 'react';



function UserProfile(){
    const [img,setImg] = useState("https://via.placeholder.com/150");
    const [fname,setFName] = useState("Guest");
    const [lname,setLName] = useState("Guest");
    const [age,setAge] = useState(19);
    const [email, setEmail] = useState("guest123@gmail.com");
    const [password,setPassword] = useState("1234");
    const [edit,setEdit] = useState(true);
   

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
    
    function handlePassword(event){
        setPassword(event.target.value);
    }
        

    return(<>
    <Navbar></Navbar>
    <div className="outer-container">
    <div className="container">
    <div className="profile-container">
        <img src={img}></img><br></br>
        <button>Edit</button>
        <p>{fname}</p>
        <p>{lname}</p>
    </div>
    </div>
    
    <div className="container">
    <div className="info-container">
        <p>Details</p>
        <button  onClick={handleEdit}>Edit</button>
        <button onClick={handleSave}>Save</button>
        <br></br>
        <label>First Name</label><br></br>
        <input value={fname} disabled={edit} onChange={handleFName}></input>
        <br></br>
        <label>Last Name</label><br></br>
        <input type="text" value={lname} disabled={edit}  onChange={handleLName}></input>
        <br></br>
        <label>Email</label><br></br>
        <input value={email} disabled={edit} size="30" onChange={handleEmail}></input><br></br>
        <label>Password</label><br></br>
        <input value={password} disabled={edit}  onChange={handlePassword}></input><br></br>
    </div>
    </div>
    </div>
    
    
    </>);
}

export default UserProfile;