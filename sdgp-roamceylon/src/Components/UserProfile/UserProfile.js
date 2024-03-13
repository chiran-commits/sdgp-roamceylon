
import Navbar from '../AboutUsPage/Navbar';
import './UserProfile.css';
import React, { useState, useEffect } from 'react';
import ProfileImg from '../AboutUsPage/Asset 1.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const [img] = useState(ProfileImg);
    const [firstName, setFName] = useState("Guest");
    const [lastName, setLName] = useState("Guest");
    const [Age, setAge] = useState();
    const [edit, setEdit] = useState(true);
    const [data, setData] = useState({ user: { firstName: "", lastName: "", email: "", password: "", age: "" } });
    const nav = useNavigate();




    useEffect(() => {


        const getProfile = async () => {

            const authToken = localStorage.getItem('SDGP-roamceylon2');
            if (authToken == null) {
                nav('/login');
            } else {
                const res = await axios
                    .get("http://localhost:5009/user", {
                        headers: {
                            Authorization: authToken
                        }
                    }).then((res) => {
                        console.log(res);
                        const data = res.data;
                        setData(data);
                        console.log(data);

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

            const { data } = await axios.post('http://localhost:5009/save', { firstName, lastName, Age }).then(
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
                    <p>{data.user.firstName}</p>
                    <p>{data.user.lastName}</p>
                    <p>{data.user.age}</p>
                </div>
            </div>

            <div className="container">
                <div className="info-container">
                    <p>Details</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleSave}>Save</button>
                    <br></br>
                    <label>First Name</label><br></br>
                    <input value={data.user.firstName} disabled={edit} onChange={handleFName}></input>
                    <br></br>
                    <label>Last Name</label><br></br>
                    <input type="text" value={data.user.lastName} disabled={edit} onChange={handleLName}></input>
                    <br></br>
                    <label>Email</label><br></br>
                    <input type='email' value={data.user.email} disabled='true' size="30"></input><br></br>
                    <label>Age</label><br></br>
                    <input value={data.user.age} disabled={edit}  type="number" onChange={handleAge}></input><br></br>
                </div>
            </div>
        </div>


    </>);
}

export default UserProfile;