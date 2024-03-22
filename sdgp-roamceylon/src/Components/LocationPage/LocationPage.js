import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Navbar from "../AboutUsPage/Navbar";
import "./LocationPage.css";
import Locations from '../LocationDescriptionPages/commonjson.json';
import LocationDes from '../LocationPage/Locations.json';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authorizationActions } from "../../store";
import { useSelector } from 'react-redux';

// import Common from '../LocationDescriptionPages/common.js'; 

export default function LocationPage() {
    
    // const [loading, setLoading] = useState(true);

    const [value, setValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    // const [searchData, setSearchData] = useState([]);
    const [descriptionData, setDescriptionData] = useState('');
    const [message, setMessage] = useState('');
    const [descriptionPlaceholder, setDescriptionPlaceholder] = useState('Enter the features of your ideal location...');
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [showRightContainer, setShowRightContainer] = useState(false); // State for rightContainer visibility
    const dispatch = useDispatch();

    useEffect(() => {
        const getProfile = async () => {
            const accessToken = localStorage.getItem('roamceylon-accessToken');
            if(accessToken==null){
                dispatch(authorizationActions.logout())
            }else{
                const res = await axios
                .get("https://sdgp-restapi.vercel.app/user",{
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }).then(
                    dispatch(authorizationActions.login())
                )
                .catch((err) => {
                    console.log(err);
                    dispatch(authorizationActions.logout());
                });
            }
        };
        getProfile();
    }, []);

    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    console.log(isLoggedIn);

    const handleDescriptionChange = (event) => {
        setDescriptionData(event.target.value);
    };

    const handleSubmitDescription = async () => {
        window.scrollTo(0,800);
        try {
            const locations = await axios.post('https://spacynlp.pythonanywhere.com/nlp', {"desc": descriptionData});
            console.log(locations.data.locations);
            
            setLocations(locations.data.locations);
            setDescriptionData(''); 
        } catch(error) {
            console.log("Error fetching data:", error);
            setDescriptionData('');
            setDescriptionPlaceholder("please enter a valid description");
            setMessage('Error processing description');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setFilteredData(Locations);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const onChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filtered = Locations.filter(item =>
            item.location && item.location.toLowerCase().includes(searchValue)
        );
        setFilteredData(filtered);
        setValue(searchValue);
    };

    const handleClickLocation = (link) => {
        window.location.href = link;
    };
    
    const redirectToLocation = (locationName) => {
        const foundLocation = Locations.find(loc => loc.location.toLowerCase() === locationName.toLowerCase());
        if (foundLocation) {
            handleClickLocation(foundLocation.link);
            setSelectedLocation(locationName);
        }
    };

    const getDescription = (locationName) => {
        const des = LocationDes.find(item => item.location ===locationName);
        return des ? des.description : "Not Found";
    };
    
    return (
        <div>
            <Navbar activeOption="locations" />
            <div className="mainContainer">
                <div className="location-container">
                    <div className="leftContainer">
                        <div className="input-box-search">
                            <input className='search-bar' type="text" placeholder="Search the location for you...." onChange={onChange} value={value} />
                            <i className='bx bxs-user'></i>
                            {value && (
                                <div className='drop-down'>
                                    {filteredData.map(item => (
                                        <div className='location-item' key={item.location} onClick={() => redirectToLocation(item.location)}>
                                            <h4>{item.name}</h4>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    { isLoggedIn && (
                        <div className="rightContainer" >
                            <h2><center>Provide Recommendation</center></h2>
                            <div className='textarea-center'>
                                <textarea placeholder={descriptionPlaceholder} value={descriptionData}  className="input-box-recommendation" onChange={handleDescriptionChange}>
                                </textarea>
                            </div>
                            <div className='descriptionKeywords'>
                                <h4>*Mandatory Keywords: <br></br></h4>
                                        <h5> Cost of Living (in Sri Lankan Rupees)</h5> 
                                        <h5>WIFI Connectivity (in mbps)</h5> 
                                        <h5>Weather Type</h5> 
                                <br></br>
                                <h5 style={{marginLeft:"10px", color:"darkred"}}>*Cost of Living: 0-50000 (LOW), 50000-200000 (AVERAGE),</h5>
                                <h5 style={{marginLeft:"115px", color:"darkred"}}>More than 200000(HIGH).</h5>
                                <br></br>
                                <h5 style={{marginLeft:"10px", color:"darkred"}}>
                                    *WIFI Connectivity : 0-25 (LOW), 25-50 (AVERAGE), More than 50 (HIGH).
                                </h5>
                            </div>
                            <button type="submit" className="recommendation-btn" onClick={handleSubmitDescription}>Generate Locations</button>
                            <div className="location-cards-container">
                                {locations.length >0 ? (
                                <div>
                                    <h3 style={{fontSize:"30px"}}>Generated Locations</h3>
                                    <br></br>
                                    <div>
                                      {locations.map((location, index) =>(
                                        <div key={index}>
                                            {location === "colombo" ? (
                                                <a href='/colombo'>
                                                  <div className='location-card'>
                                                    <h4>Colombo</h4>
                                                    <p className='locationdesc'>{getDescription("Colombo")}</p>
                                                  </div>  
                                                </a>
                                            ) : location === "kandy" ? (
                                                <a href='/kandy'>
                                                  <div className='location-card'>
                                                    <h4>Kandy</h4>
                                                    <p className='locationdesc'>{getDescription("Kandy")}</p>
                                                  </div>  
                                                </a>
                                            ) : location === "galle" ? (
                                                <a href='/galle'>
                                                   <div className='location-card'>
                                                    <h4>Galle</h4>
                                                    <p className='locationdesc'>{getDescription("Galle")}</p>
                                                   </div> 
                                                </a>
                                            ) : location === "ella" ? (
                                                <a href='/ella'>
                                                  <div className='location-card'>
                                                    <h4>Ella</h4>
                                                    <p className='locationdesc'>{getDescription("Ella")}</p>
                                                  </div>  
                                                </a>
                                            ) : location === "anuradhapura" ? (
                                                <a href='/anuradhapura'>
                                                  <div className='location-card'>
                                                    <h4>Anuradhapura</h4>
                                                    <p className='locationdesc'>{getDescription("Anuradhapura")}</p>
                                                  </div>  
                                                </a>
                                            ) : location ==="jaffna" ? (
                                                <a href='/jaffna'>
                                                  <div className='location-card'>
                                                    <h4>Jaffna</h4>
                                                    <p className='locationdesc'>{getDescription("Jaffna")}</p>
                                                  </div>  
                                                </a>
                                            ) : location ==="arugambay" ? (
                                                <a href='/arugambay'>
                                                  <div className='location-card'>
                                                    <h4>Arugam Bay</h4>
                                                    <p className='locationdesc'>{getDescription("Arugam Bay")}</p>
                                                  </div>  
                                                </a>
                                            ) : location ==="nuwaraeliya" ? (
                                                <a href='/nuwaraeliya'>
                                                  <div className='location-card'>
                                                    <h4>Nuwara-Eliya</h4>
                                                    <p className='locationdesc'>{getDescription("Nuwara-Eliya")}</p>
                                                  </div>  
                                                </a>
                                            ) : location ==="trincomalee" ? (
                                                <a href='/Trincomalee'>
                                                  <div className='location-card'>
                                                    <h4>Trincomalee</h4>
                                                    <p className='locationdesc'>{getDescription("Trincomalee")}</p>
                                                  </div>  
                                                </a>
                                            ) : location ==="matara" ?(
                                                <a>
                                                  <div className='location-card'>
                                                    <h4>Matara</h4>
                                                    <p className='locationdesc'>{getDescription("Matara")}</p>
                                                  </div>  
                                                </a>
                                            ): (
                                                <p className='location-card'>No Locations Found !</p>
                                            )}
                                        </div>
                                        ))}  
                                    </div>
                                </div>
                                ) : (
                                <p></p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Render the Common2 component for each location */}
        </div>
    );
}
