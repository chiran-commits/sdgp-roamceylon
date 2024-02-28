import React from 'react';
import Navbar from "../AboutUsPage/Navbar";
import "./LocationPage.css";
import { useState, useEffect } from 'react';
import Locations from '../LocationPage/Locations.json';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authorizationActions } from "../../store";
import { useSelector } from 'react-redux';



export default function LocationPage() {
    
    const [loading, setLoading] = useState(true);

    const [value, setValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [descriptionData, setDescriptionData] = useState('');
    const [message, setMessage] = useState('');
    const [descriptionPlaceholder, setDescriptionPlaceholder] = useState('Enter the features of your ideal location...');
    const dispatch = useDispatch();

    useEffect(() => {

  
          
      const getProfile = async () => {
          
          const authToken = localStorage.getItem('SDGP-roamceylon2');
          if(authToken==null){
            dispatch(authorizationActions.logout())
  
          }else{
              const res = await axios
              .get("http://localhost:5009/user",{
                  headers: {
                       Authorization: authToken
                  }
              }).then(
                dispatch(authorizationActions.login())
              )
              .catch((err) => {console.log(err)
                dispatch(authorizationActions.logout())
  
                  
              }
              );
             
            
          }
             
      };
      getProfile();
      
     
    
    }, []);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);


    const handleDescriptionChange = (event) => {
        setDescriptionData(event.target.value);
    };

    const handleSubmitDescription = async () => {
        try {
            

            const keyword = await axios.post('http://localhost:5009/keywords', { descriptionData: descriptionData });
            console.log(keyword);   
            setMessage(keyword.data.message); 
            setDescriptionData(''); 
        }
        catch(error)
        {
            console.log("Error fetching data:", error);
            setDescriptionData('')
            setDescriptionPlaceholder("please enter a valid description")
            setMessage('Error processing description')
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Here we set the filtered data to the original data when the component mounts
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
            item.location.toLowerCase().startsWith(searchValue)
        );
        setFilteredData(filtered);
        setValue(searchValue);
    };

    const redirectToLocation = (link) => {
        window.location.href = link;
    };


    return (
        <div>
            <Navbar activeOption="locations" />
            <div className="mainContainer">
                <div className="location-container">
                    <div className="leftContainer">
                        <h2>Manual Search</h2>
                        <div className="input-box-search">
                            <input type="text" placeholder="Search the location for you...." onChange={onChange} value={value} />
                            <i className='bx bxs-user'></i>
                            {value && (
                                <div className='drop-down'>
                                    {filteredData.map(item => (
                                        <div className='location-item' key={item.location} onClick={() => redirectToLocation(item.link)}>
                                            <h4>{item.location}</h4>
                                            <div className='show-desc'>
                                                {item.description}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {isLoggedIn&&
                      <div className="rightContainer">
                      <h2><center>Provide Recommendation</center></h2>
                      <div className='textarea-center'>
                          <textarea placeholder={descriptionPlaceholder} value={descriptionData}  className="input-box-recommendation" onChange={handleDescriptionChange}>
                          </textarea>
                      </div>
                      <button type="submit" className="recommendation-btn" onClick={handleSubmitDescription}>Generate Locations</button>
                      {message && <p>{message}</p>}
                    </div>


                    }

                  
                </div>
            </div>
        </div>
    );
}