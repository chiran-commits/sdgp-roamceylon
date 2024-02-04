
import './UserProfile.css';
import React, { useState, useEffect } from 'react';



function UserProfile(){
    const [img,setImg] = useState("https://placehold.jp/150.png");
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(19);
    const [email, setEmail] = useState("guest123@gmail.com");
    const [country,setCountry] = useState("USA");
    const [edit,setEdit] = useState(true);
    const [loading, setLoading] = useState(true);


    


    function handleEdit(){
        setEdit(false);
    }

    function handleSave(){
        setEdit(true);
    }

    function handleName(event){
        setName(event.target.value);
    }
    function handleAge(event){
        setAge(event.target.value);
    }
    function handleEmail(event){
        setEmail(event.target.value);
    }
    
    function handleCountry(event){
        setCountry(event.target.value);
    }
    useEffect(() => {
  
        setTimeout(() => {
          setLoading(false); 
        }, 2000);
      }, []);

    return(
        <>

        <div className="outer-container">
        <div className="container">
        <div className="profile-container">
            <img src={img}></img><br></br>
            <button>Edit</button>
            <p>{name}</p>
            <p>{age} years</p>
            <p>From {country}</p>
        </div>
        </div>

        <div className="container">
        <div className="info-container">
            <p>Details</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleSave} disabled={edit}>Save</button><br></br>
            <label>Name</label><br></br>
            <input value={name} disabled={edit} onChange={handleName}></input>
            <br></br>
            <label>Age</label><br></br>
            <input type="number" value={age} disabled={edit}  onChange={handleAge}></input>
            <br></br>
            <label>Email</label><br></br>
            <input value={email} disabled={edit} size="30" onChange={handleEmail}></input><br></br>
            <label>Country</label><br></br>
            <input value={country} disabled={edit}  onChange={handleCountry}></input><br></br>
        </div>
        </div>
        </div>
        </>
    );
}

export default UserProfile;