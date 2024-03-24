import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import ColImage1 from '../LocationDescriptionPages/Images/lotus-tower.jpg';
import ColImage2 from '../LocationDescriptionPages/Images/museum.jpg';
import ColImage3 from '../LocationDescriptionPages/Images/gallefacegreen.jpg';
import ColImageMain from '../LocationDescriptionPages/Images/colombomain.jpg';
import ColHotel1 from '../LocationDescriptionPages/Images/kingsbury.jpg';
import ColHotel2 from '../LocationDescriptionPages/Images/hilton.jpg';
import ColHotel3 from '../LocationDescriptionPages/Images/cinnamonlakeside.jpg';
import LocationData from './locations.json'
import './Galle.css';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';

export default function Colombo(location){
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return(
        <div className='main'>
            <Navbar activeOption={"locations"}/>
            <div className='location_information'>
                <img src={ColImageMain} className='location_image'></img>
                <div className='location_detail'>
                    <h3>COLOMBO</h3>
                    <div className='location_Des'>
                        <h3 className='description'>
                            Galle is a city on the southwest coastline of Sri Lanka. 
                            The city consists of exotic old trading port blessed with imposing Dutch-colonial buildings,
                            stylish cafes, quirky boutiques and impeccably restored beautiful hotels.
                        </h3>
                    </div>
                </div>
            </div>
            {
                LocationData.map(data => {
                    if (data.location == "Colombo"){
                        return(
                            <div className='scales'>
                                <h1>Indicators</h1>
                                <div className='indicators'>    
                                    <div className='indicator-container'>
                                        <p>
                                            <span className='title' >Weather<br></br></span><p className='weather-type'>Tropical/Hot and Humid</p>
                                            <p className='weatherdata'><FetchWeatherData city="colombo" className="weatherdata"/></p>
                                        </p>
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>Wi-Fi<br></br></span></p>
                                        <div className='indicator-scale'>     
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
                                                            <circle cx="80" cy="80" r="50" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                        </div>    
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>COST OF LIVING<br></br></span></p>
                                        <div className='indicator-scale'>      
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
                                                            <circle cx="80" cy="80" r="50" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                        </div>    
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>URBAN/RURAL<br></br></span><p  className='city-type'>{data.type}</p></p>
                                    </div>
                                </div>    
                            </div>
                        )
                    }
                })
            }
    
            <h3 className='destination-heading'>Popular Destinations</h3>
            <div className='location_destinations'>
                <div className='popular_destination'>
                    <img src={ColImage1} className='destination_image'/>
                    <p className='text_dest'>Colombo Lotus Tower (4.7 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={ColImage2} className='destination_image'/>
                    <p className='text_dest'>Colombo National Museum (4.4 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={ColImage3} className='destination_image'/>
                    <p className='text_dest'>Galle Face Green (4.2 <span class="fa fa-star checked"></span>)</p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Colombo</h3>
            <div className='hotels'>
                <a href='https://www.thekingsburyhotel.com/' target="_blank">
                <div className='locationContainer'>
                    <img src={ColHotel1} className='destination_image'/>
                    <p className='text_dest'>Kingsbury</p>
                </div>
                </a>
                <a href='https://www.hilton.com/en/hotels/colhitw-hilton-colombo/' target="_blank">
                <div className='locationContainer'>
                    <img src={ColHotel2} className='destination_image'/>
                    <p className='text_dest'>Hilton Colombo</p>
                </div>
                </a>
                <a href='https://www.cinnamonhotels.com/cinnamonlakesidecolombo' target='_blank'>
                <div className='locationContainer'>
                    <img src={ColHotel3} className='destination_image'/>
                    <p className='text_dest'>Cinnamon Lakeside Colombo</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="colombo"/>

        </div>
        

    )
}