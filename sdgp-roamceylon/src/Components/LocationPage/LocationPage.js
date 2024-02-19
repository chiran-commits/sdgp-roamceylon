import React from 'react';
import Navbar from "../AboutUsPage/Navbar";
import "./LocationPage.css";
import {useState, useEffect} from 'react';
import Locations from '../LocationPage/Locations.json';



export default function LocationPage(){

    const [value, setValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [searchData, setSearchData] = useState([])

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


    return(
        <div>
            <Navbar activeOption="locations"/>
            <div className="mainContainer">
                <div className="location-container">
                    <div className="leftContainer">
                        <h2>Manual Search</h2>
                        <div className="input-box-search">
                            <input type="text" placeholder="Search the location for you...." onChange={onChange} value={value}/>
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
                    
                    <div className="rightContainer">
                        <h2><center>Provide Recommandation</center></h2>
                        <div className='textarea-center'>
                            <textarea placeholder='Enter the features of your ideal location...' className="input-box-recommendation"> 
                            </textarea>
                        </div>
                        <button type="submit" className="recommendation-btn">Generate Locations</button>
                    </div> 
                </div>
            </div>
        </div>
    );
}