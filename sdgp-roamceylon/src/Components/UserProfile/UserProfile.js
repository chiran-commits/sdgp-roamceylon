import { useState } from "react";

function UserProfile(){
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(19);
    const [email, setEmail] = useState("guest123@gmail.com");
    const [country,setCountry] = useState("USA");

    return(
        <>
        <div className="profile">
            <img src={img}></img><br></br>
            <button>Edit</button>
            <p>{name}</p>
            <p>{age} years</p>
            <p>From {country}</p>
        </div>
        <div className="info">
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
        </>
    );
}