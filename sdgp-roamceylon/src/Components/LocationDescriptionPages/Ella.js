import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import EllaImage1 from '../LocationDescriptionPages/Images/nine-arch-2-5.jpg';
import EllaImage2 from '../LocationDescriptionPages/Images/ravana-falls-6.jpg';
import EllaImage3 from '../LocationDescriptionPages/Images/ellarock.jpg';
import EllaImageMain from '../LocationDescriptionPages/Images/ellawallpaper.jpg';
import EllaHotel1 from '../LocationDescriptionPages/Images/98acres.jpg';
import EllaHotel2 from '../LocationDescriptionPages/Images/annasa.jpg';
import EllaHotel3 from '../LocationDescriptionPages/Images/dreamcliffjpg.jpg';
import LocationData from './locations.json'
import './Galle.css';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';

export default function Ella(location){
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return(
        <div>
            <Navbar activeOption={"locations"}/>
            <div className='location_information'>
                <img src={EllaImageMain} className='location_image'></img>
                <div className='location_detail'>
                    <h3>ELLA</h3>
                    <div className='location_Des'>
                        <h3 className='description'>
                            Ella is a small town in Sri Lanka's Uva Province, 
                            located about 120 miles east of Colombo. It's known for its natural beauty, 
                            including waterfalls, greenery, and hills. Ella is also rich in history and culture, 
                            with many prominent tourist attractions.
                        </h3>
                    </div>
                </div>
            </div>
            {
                LocationData.map(data => {
                    if (data.location == "Ella"){
                        return(
                            <div className='scales'>
                                <h1>Indicators</h1>
                                <div className='indicators'>
                                    <div className='indicator-container'>
                                        <p>
                                            <span className='title'>Weather<br></br></span><p>Cold</p>
                                            <p className='weatherdata'><FetchWeatherData city="ella" className="weatherdata"/></p>
                                        </p>
                                    </div>
                                    <div className='indicator-container'>
                                        <p><span className='title'>Wi-Fi<br></br></span></p>
                                        <div className='indicator-scale'>     
                                                <div className='weather'>
                                                    <div className='outer'>
                                                        <div className='inner'>
                                                            <div id='number'>
                                                                {data.wifi}
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
                                                                {data.col}
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
                                        <p><span className='title'>URBAN/RURAL<br></br></span><p className='city-type'>{data.type}</p></p>
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
                    <img src={EllaImage1} className='destination_image'/>
                    <p className='text_dest'>Nine Arches Bridge(4.7 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={EllaImage2} className='destination_image'/>
                    <p className='text_dest'>Ravana falls(4.4 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={EllaImage3} className='destination_image'/>
                    <p className='text_dest'>Ella Rock(4.2 <span class="fa fa-star checked"></span>)</p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Ella</h3>
            <div className='hotels'>
                <a href='https://www.grandkandyan.com/' target="_blank">
                <div className='locationContainer'>
                    <img src={EllaHotel1} className='destination_image'/>
                    <p className='text_dest'>98 Acres Resort & Spa</p>
                </div>
                </a>
                <a href='https://www.cinnamonhotels.com/cinnamoncitadelkandy' target="_blank">
                <div className='locationContainer'>
                    <img src={EllaHotel2} className='destination_image'/>
                    <p className='text_dest'>Anasa Wellness Resort</p>
                </div>
                </a>
                <a href='https://www.radissonhotels.com/en-us/hotels/radisson-kandy' target='_blank'>
                <div className='locationContainer'>
                    <img src={EllaHotel3} className='destination_image'/>
                    <p className='text_dest'>Dream Cliff Mountain Resort</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="ella"/>

        </div>
        

    )
}