import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../AboutUsPage/Navbar';
import './Galle.css';
import Locations from './path.json';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';

export default function Common({ locationName = "" }) {
    const [location, setLocationData] = useState(null);
    
    useEffect(() => {
        if (locationName) {
            // Find the location data based on the locationName parameter
            const foundLocation = Locations.find(loc => loc.location.toLowerCase() === locationName.toLowerCase());
            if (foundLocation) {
                setLocationData(foundLocation);
            }
        }    
    }, [locationName]);


    return (
        <div>
            <Navbar activeOption="locations" />
            {location && (
                <div key={location.id}>
                    <div className='location_information'>
                        <img src={require(`../LocationDescriptionPages/Images/${location.image}`).default} className='location_image' alt={location.location} />
                        <div className='location_detail'>
                            <h3>{location.location}</h3>
                            <div className='location_Des'>
                                <p>{location.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='indicators'>
                        <h2>Indicators</h2>
                        <div className='indicator-container'>
                            <p>
                                <span className='title'>Weather:<br></br></span> Tropical/ Hot and Humid
                                <p className='weatherdata'><FetchWeatherData city={location.location} className="weatherdata"/></p>
                            </p>
                        </div>
                        <div className='indicator-container'>
                            <p><span className='title'>Wi-Fi:</span> {location.wifi}</p>
                            <div className='wifi'>
                                <div className='outer'>
                                    <div className='inner'>
                                        <div className='number'>
                                            {location.wifi}
                                        </div>
                                    </div>
                                </div>
                                <svg className='scale' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id={`GradientColor_${location.id}`}>
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="29" strokeLinecap="round" stroke={`url(#GradientColor_${location.id})`} />
                                </svg>
                            </div>
                        </div>
                        <div className='indicator-container'>
                            <p><span className='title'>Cost of Living:</span> {location.costOfLiving}</p>
                            <div className='cost'>
                                <div className='outer'>
                                    <div className='inner'>
                                        <div className='number'>
                                            {location.costOfLiving}
                                        </div>
                                    </div>
                                </div>
                                <svg className='scale' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id={`GradientColor_${location.id}`}>
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="29" strokeLinecap="round" stroke={`url(#GradientColor_${location.id})`} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h2 style={{ color: "black", marginTop: 70, fontSize: 35, marginLeft: 40 }}>Popular Destinations</h2>
                    <div className='location_destinations'>
                        {location.destinations.map((destination, index) => (
                            <div key={index} className='popular_destination'>
                                <img src={require(`../LocationDescriptionPages/Images/${destination.image}`).default} className='destination_image' alt={destination.location} />
                                <p className='text_dest'>{destination.location}</p>
                            </div>
                        ))}
                    </div>
                    <br /><br />
                    <Review location={location.location.toLowerCase()} key={location.id} />
                </div>
            )}
        </div>
    );
}

Common.propTypes = {
    locationName: PropTypes.string
};
