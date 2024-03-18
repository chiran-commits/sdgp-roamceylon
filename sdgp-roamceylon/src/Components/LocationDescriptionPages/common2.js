import React, { useEffect, useState } from 'react';
import Navbar from '../AboutUsPage/Navbar';
import LocationData from '../LocationDescriptionPages/commonjson.json';
import './Galle.css';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';

export default function Galle({locationName}) {
    const [location, setLocationData] = useState(null);

    useEffect(() => {
        // Find the location data based on the locationName prop
        console.log("Location name:", locationName);
        const locationData = LocationData.find(loc => loc.location === locationName);
        console.log("Location data:", locationData);
        // Set the location data to state
        setLocationData(locationData);
    }, [locationName]);
    
    // If location data is not found, return a message
    if (!location) {
        return <div>No data found for this location</div>;
    }

    return (
        <div>
            <Navbar activeOption={"locations"} />
            <div className='location_information'>
                <img src={require(`../LocationDescriptionPages/Images/${location.destinations[0].image}`).default} className='location_image' alt='Location' />
                <div className='location_detail'>
                    <h3>{location.name}</h3>
                    <div className='location_Des'>
                        <h3>{location.description}</h3>
                    </div>
                </div>
            </div>
            <div className='indicators'>
                <h1>Indicators</h1>
                {location.indicators.map((indicator, index) => (
                    <div key={index} className='indicator-container'>
                        <p>
                            <span className='title'>{indicator.type}:<br /></span> {indicator.value}
                            {indicator.type === 'Weather' && <p className='weatherdata'><FetchWeatherData city={location.name} className="weatherdata" /></p>}
                        </p>
                    </div>
                ))}
            </div>

            <h3 className='destination-heading'>Popular Destinations</h3>
            <div className='location_destinations'>
                {location.destinations.map((destination, index) => (
                    <div key={index} className='popular_destination'>
                        <img src={require(`../LocationDescriptionPages/Images/${destination.image}`).default} className='destination_image' alt={destination.name} />
                        <p className='text_dest'>{destination.name} (4.7 <span className="fa fa-star checked"></span>)</p>
                    </div>
                ))}
            </div>

            <h3 className='destination-heading'>Hotels in {location.location}</h3>
            <div className='galle-hotels'>
                {location.hotels.map((hotel, index) => (
                    <div key={index} className='locationContainer'>
                        <img src={require(`../LocationDescriptionPages/Images/${hotel.image}`).default} className='destination_image' alt={hotel.name} />
                        <p className='text_dest'>{hotel.name}</p>
                    </div>
                ))}
            </div>
            <Review location={location.name} />
        </div>
    );
}
