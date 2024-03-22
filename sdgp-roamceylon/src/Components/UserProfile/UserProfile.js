
import Navbar from '../AboutUsPage/Navbar';
import './UserProfile.css';
import React, { useState, useEffect } from 'react';
import ProfileImg from '../AboutUsPage/Asset 1.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const [img] = useState(ProfileImg);
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [Age, setAge] = useState();
    const [edit, setEdit] = useState(true);

    const nav = useNavigate();




    useEffect(() => {


        const getProfile = async () => {

            const accessToken = localStorage.getItem('roamceylon-accessToken');
            if (accessToken == null) {
                nav('/login');
            } else {
                const res = await axios
                    .get("http://localhost:5009/user", {
                        headers: {
                          Authorization: `Bearer ${accessToken}`
                        }
                          
                      }).then((res) => {
                        console.log(res);
                        
                        setFName(res.data.user.firstName);
                        setLName(res.data.user.lastName);
                        setEmail(res.data.user.email);
                        setAge(res.data.user.Age);
        

                    })
                    .catch((err) => {
                        console.log(err)

                    }
                    );


            }

        };
        getProfile();


    }, []);



    function handleEdit() {
        setEdit(false);

    }

    const handleSave = async () => {
        setEdit(true);
        
        try {

            const { data } = await axios.patch('http://localhost:5009/save', { firstName, lastName, Age,email }).then(
            ).catch((err) => {
                console.log(err)
            })

        } catch (err) {
            console.log(err)
        }
        
    }

    function handleFName(event) {
        setFName(event.target.value);
    }
    function handleLName(event) {
        setLName(event.target.value);
    }
    function handleAge(event) {
        setAge(event.target.value);
    }
   



    return (<>
        <Navbar isProfile={true}></Navbar>
        <div className="outer-container">
            <div className="container">
                <div className="profile-container">
                    <img src={img}></img><br></br>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{Age}</p>
                </div>
            </div>

            <div className="container">
                <div className="info-container">
                    <p>Details</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleSave}>Save</button>
                    <br></br>
                    <label>First Name</label><br></br>
                    <input value={firstName} disabled={edit} onChange={handleFName}></input>
                    <br></br>
                    <label>Last Name</label><br></br>
                    <input type="text" value={lastName} disabled={edit} onChange={handleLName}></input>
                    <br></br>
                    <label>Email</label><br></br>
                    <input type='email' value={email} disabled='true' size="30"></input><br></br>
                    <label>Age</label><br></br>
                    <input value={Age} disabled={edit}  type="number" onChange={handleAge}></input><br></br>
                </div>
            </div>
        </div>


    </>);
}

export default UserProfile;