import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import KandyImage1 from '../LocationDescriptionPages/Images/botanicalGarden.jpg';
import KandyImage2 from '../LocationDescriptionPages/Images/templeOfTheTooth.jpg';
import KandyImage3 from '../LocationDescriptionPages/Images/kandyjungle.jpg';
import KandyImageMain from '../LocationDescriptionPages/Images/kandyImg.jpg';
import KandyHotel1 from '../LocationDescriptionPages/Images/KHotel1.jpg';
import KandyHotel2 from '../LocationDescriptionPages/Images/KHotel2.jpg';
import KandyHotel3 from '../LocationDescriptionPages/Images/KHotel3.jpg';
import LocationData from '../LocationPage/Locations.json';
import './Galle.css';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';

export default function Galle(location){
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return(
        <div>
            <Navbar activeOption={"locations"}/>
            <div className='location_information'>
                <img src={KandyImageMain} className='location_image'></img>
                <div className='location_detail'>
                    <h3>KANDY</h3>
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
                    if (data.location == "Kandy"){
                        return(
                            <div className='scales'>
                                <h1>Indicators</h1>
                                <div className='indicators'>
                                    <div className='indicator-container'>
                                        <p>
                                            <span className='title'>Weather<br></br></span><p className='weather-type'>Hot and Humid</p>
                                            <p className='weatherdata'><FetchWeatherData city="kandy" className="weatherdata"/></p>
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
                                                            <circle style={{strokeDashoffset:"200"}} cx="80" cy="80" r="50" stroke-linecap="round" />
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
                                                            <circle style={{strokeDashoffset:"280"}} cx="80" cy="80" r="50" stroke-linecap="round" />
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
            <a href='https://www.tripadvisor.com/Attraction_Review-g1194819-d523519-Reviews-Royal_Botanical_Gardens-Peradeniya_Kandy_District_Central_Province.html' target='_blank'>
                <div className='popular_destination'>
                        <img src={KandyImage1} className='destination_image'/>
                        <p className='text_dest'>Botanical Garden(4.7 <span class="fa fa-star checked"></span>)</p>
                </div>
                </a>
                <a href='https://www.tripadvisor.com/Attraction_Review-g304138-d317476-Reviews-Temple_of_the_Sacred_Tooth_Relic-Kandy_Kandy_District_Central_Province.html' target='_blank'>
                <div className='popular_destination'>

                        <img src={KandyImage2} className='destination_image'/>
                        <p className='text_dest'>Temple of the tooth(4.4 <span class="fa fa-star checked"></span>)</p>
                    
                </div>
                </a>
                <a href='https://www.tripadvisor.com/Attraction_Review-g304138-d2534649-Reviews-Udawattekele_Sanctuary-Kandy_Kandy_District_Central_Province.html' target='_blank'>
                <div className='popular_destination'>

                        <img src={KandyImage3} className='destination_image'/>
                        <p className='text_dest'>Udawattakele Forest Reserve(4.2 <span class="fa fa-star checked"></span>)</p>
                  
                </div>
                </a>
            </div>
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Kandy</h3>
            <div className='hotels'>
                <a href='https://www.grandkandyan.com/' target="_blank">
                <div className='locationContainer'>
                    <img src={KandyHotel1} className='destination_image'/>
                    <p className='text_dest'>The Grand Kandyan Hotele</p>
                </div>
                </a>
                <a href='https://www.cinnamonhotels.com/cinnamoncitadelkandy' target="_blank">
                <div className='locationContainer'>
                    <img src={KandyHotel2} className='destination_image'/>
                    <p className='text_dest'>Cinnamon Citadel Kandy</p>
                </div>
                </a>
                <a href='https://www.radissonhotels.com/en-us/hotels/radisson-kandy' target='_blank'>
                <div className='locationContainer'>
                    <img src={KandyHotel3} className='destination_image'/>
                    <p className='text_dest'>Radisson Hotel Kandy</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="kandy"/>

        </div>
        

    )
}