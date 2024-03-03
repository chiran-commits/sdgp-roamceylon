import React from 'react'
import Navbar from '../AboutUsPage/Navbar';
import GalleImage from '../LocationDescriptionPages/Images/newgalleimge1.jpg';
import galleimage1 from '../LocationDescriptionPages/Images/Galle-Dutch-Fort.jpg';
import galleimage2 from '../LocationDescriptionPages/Images/turtle-hatchery-hikkaduwa.jpg';
import galleimage3 from '../LocationDescriptionPages/Images/Galle_Maritime_Museum.jpg';
import LocationData from './locations.json'
import './Galle.css';
import Review from '../ReviewSection/Review';

export default function Galle(location){
    return(
        <div>
            <Navbar activeOption={"locations"}/>
            <div className='location_information'>
                <img src={GalleImage} className='location_image'></img>
                <div className='location_detail'>
                    <h3>GALLE</h3>
                    <div className='location_Des'>
                        <h3>
                            Galle is a city on the southwest coastline of Sri Lanka. 
                            The city consists of exotic old trading port blessed with imposing Dutch-colonial buildings,
                            stylish cafes, quirky boutiques and impeccably restored beautiful hotels.
                        </h3>
                    </div>
                </div>
            </div>
            {
                LocationData.map(data => {
                    if (data.location == "Galle"){
                        return(
                            <div className='indicators'>
                                <h1>Indicators</h1>
                                <div className='indicator-container'>
                                    <p><span className='title'>Weather:<br></br></span> Tropical / Hot and Humid</p>
                                </div>
                                <div className='indicator-container'>
                                    <p><span className='title'>Wi-Fi:<br></br></span>Fast</p>
                                    {/* <span>
                                        <div className='weather'>
                                            <div className='outer'>
                                                <div className='inner'>
                                                    <div id='number'>
                                                        Fast
                                                    </div>
                                                </div>
                                            </div>
                                            <svg className='scale' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                    <defs>
                                                        <linearGradient id="GradientColor">
                                                        <stop offset="0%" stop-color="#e91e63" />
                                                        <stop offset="100%" stop-color="#673ab7" />
                                                        </linearGradient>
                                                    </defs>
                                                    <circle cx="80" cy="80" r="29" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                    </span> */}
                                </div>
                                <div className='indicator-container'>
                                    <p><span className='title'>COST OF LIVING:<br></br></span>High</p>
                                    {/* <span>
                                        <div className='cost'>
                                            <div className='outer'>
                                                <div className='inner'>
                                                    <div id='number'>
                                                        High
                                                    </div>
                                                </div>
                                            </div>
                                            <svg className='scale' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                    <defs>
                                                        <linearGradient id="GradientColor">
                                                        <stop offset="0%" stop-color="#e91e63" />
                                                        <stop offset="100%" stop-color="#673ab7" />
                                                        </linearGradient>
                                                    </defs>
                                                    <circle cx="80" cy="80" r="29" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                    </span> */}
                                </div>
                                <div className='indicator-container'>
                                    <p><span className='title'>URBAN/RURAL:<br></br></span>{data.type}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
    
            <h3 className='destination-heading'>Popular Destinations</h3>
            <div className='location_destinations'>
                <div className='popular_destination'>
                    <img src={galleimage1} className='destination_image'/>
                    <p className='text_dest'>Galle Dutch Fort (4.7 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={galleimage2} className='destination_image'/>
                    <p className='text_dest'>Sea Turtle Hatchery Centre (4.4 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={galleimage3} className='destination_image'/>
                    <p className='text_dest'>Maritime Museum (4.2 <span class="fa fa-star checked"></span>)</p>
                </div>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="galle"/>

        </div>
        

    )
}