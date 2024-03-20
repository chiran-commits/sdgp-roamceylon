import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import AnuImage1 from '../LocationDescriptionPages/Images/botanicalGarden.jpg';
import AnuImage2 from '../LocationDescriptionPages/Images/templeOfTheTooth.jpg';
import AnuImage3 from '../LocationDescriptionPages/Images/kandyjungle.jpg';
import AnuImageMain from '../LocationDescriptionPages/Images/kandyImg.jpg';
import AnuHotel1 from '../LocationDescriptionPages/Images/KHotel1.jpg';
import AnuHotel2 from '../LocationDescriptionPages/Images/KHotel2.jpg';
import AnuHotel3 from '../LocationDescriptionPages/Images/KHotel3.jpg';
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
                <img src={AnuImageMain} className='location_image'></img>
                <div className='location_detail'>
                    <h3>ANURADHAPURA</h3>
                    <div className='location_Des'>
                        <h3 className='description'>
                        Anuradhapura is a major city located in the north central plain of Sri Lanka. 
                        It is the capital city of North Central Province and the capital of Anuradhapura District. T
                        he city lies 205 kilometers north of the current capital of Colombo in the North Central Province, 
                        on the banks of the historic Malwathu Oya
                        </h3>
                    </div>
                </div>
            </div>
            {
                LocationData.map(data => {
                    if (data.location == "Anuradhapura"){
                        return(
                            <div className='scales'>
                                <h1>Indicators</h1>
                                <div className='indicators'>
                                    <div className='indicator-container'>
                                        <p>
                                            <span className='title'>Weather<br></br></span><p>Cold</p>
                                            <p className='weatherdata'><FetchWeatherData city="anuradhapura" className="weatherdata"/></p>
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
                                        <p><span className='title'>URBAN/RURAL<br></br></span><p>{data.type}</p></p>
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
                    <img src={AnuImage1} className='destination_image'/>
                    <p className='text_dest'>Botanical Garden(4.7 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={AnuImage2} className='destination_image'/>
                    <p className='text_dest'>Temple of the tooth(4.4 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={AnuImage3} className='destination_image'/>
                    <p className='text_dest'>Udawattakele Forest Reserve(4.2 <span class="fa fa-star checked"></span>)</p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Anuradhapura</h3>
            <div className='hotels'>
                <a href='https://www.grandkandyan.com/' target="_blank">
                <div className='locationContainer'>
                    <img src={AnuHotel1} className='destination_image'/>
                    <p className='text_dest'>The Grand Kandyan Hotele</p>
                </div>
                </a>
                <a href='https://www.cinnamonhotels.com/cinnamoncitadelkandy' target="_blank">
                <div className='locationContainer'>
                    <img src={AnuHotel2} className='destination_image'/>
                    <p className='text_dest'>Cinnamon Citadel Kandy</p>
                </div>
                </a>
                <a href='https://www.radissonhotels.com/en-us/hotels/radisson-kandy' target='_blank'>
                <div className='locationContainer'>
                    <img src={AnuHotel3} className='destination_image'/>
                    <p className='text_dest'>Radisson Hotel Kandy</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="anuradhapura"/>

        </div>
        

    )
}