import React from 'react';
import Navbar from '../AboutUsPage/Navbar';
import LocationData from './locations.json';
// import KandyImage from './Images/KandyImg.jpg';
import KandyAttraction1 from './Images/Kandy/botanicalGarden.jpg';
import KandyAttraction2 from './Images/Kandy/templeOfTheTooth.jpg';
import KandyAttraction3 from './Images/Kandy/kandyjungle.jpg';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';
import './Kandy.css';

export default function Kandy(){
    return(
        <div>
            <Navbar activeOption={"locations"}/>
            <div className='location_information'>
                <div className='main-kandy'>
                    {/* <img src={KandyImage} className='kandy-location_image'></img> */}
                </div>    
                <div className='location_detail'>
                    <h3>Kandy</h3>
                    <div className='kandy-location_Des'>
                        <h3>
                        Discover Kandy: Immerse yourself in the rich cultural tapestry and natural wonders of this enchanting city nestled in the heart of Sri Lanka. Home to the revered Temple of the Tooth, Kandy beckons visitors with its spiritual allure and vibrant festivals. Explore the lush greenery of Udawattakele Forest Reserve, where hiking trails lead to hidden waterfalls and ancient ruins. Indulge in a leisurely stroll around the picturesque Kandy Lake or lose yourself amidst the colorful hustle and bustle of its bustling markets. With its blend of history, spirituality, and natural beauty, Kandy offers a captivating experience like no other.
                        </h3>
                    </div>
                </div>
            </div>
            {
                LocationData.map(data => {
                    if (data.location == "Kandy"){
                        return(
                            <div className='kandy-indicators'>
                                <h1>Indicators</h1>
                                <div className='kandy-indicator-container'>
                                    <p>
                                        <span className='kandy-title'>Weather:<br></br></span> <p className='kandy-subtitle'>Tropical/ Hot and Humid</p>
                                        <p className='weatherdata'><FetchWeatherData city="kandy" className="weatherdata"/></p>
                                    </p>
                                </div>
                                <div className='kandy-indicator-container'>
                                    <p><span className='title'>Wi-Fi:<br></br></span></p>
                                    <span>
                                        <div className='kandy-weather'>
                                            <div className='kandy-outer'>
                                                <div className='kandy-inner'>
                                                    <div id='kandy-number'>
                                                        MED
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
                                    </span>
                                </div>
                                <div className='kandy-indicator-container'>
                                    <p><span className='title'>COST OF LIVING:<br></br></span></p>
                                    <span>
                                        <div className='kandy-cost'>
                                            <div className='kandy-outer'>
                                                <div className='kandy-inner'>
                                                    <div id='kandy-number'>
                                                        MED
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
                                    </span>
                                </div>
                                <div className='kandy-indicator-container'>
                                    <p><span className='title'>URBAN/RURAL:<br></br></span>{data.type}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
    
            <h3 className='destination-heading'>Popular Destinations</h3>
            <div className='kandy-location_destinations'>
                <div className='kandy-popular_destination'>
                    <div className='kandy-famous-img'>
                        <img src={KandyAttraction1} className='destination_image'/>
                    </div>  
                    <p className='text_dest'>Peradeniya Botanical Gardens (4.7 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='kandy-popular_destination'>
                    <img src={KandyAttraction2} className='destination_image'/>
                    <p className='text_dest'>Temple of the Tooth (4.4 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='kandy-popular_destination'>
                    <img src={KandyAttraction3} className='destination_image'/>
                    <p className='text_dest'>Udawattakele Forest Reserve (4.2 <span class="fa fa-star checked"></span>)</p>
                </div>
            </div>
            <br></br><br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Galle</h3>
            {/* <div className='galle-hotels'>
                <div className='locationContainer'>
                    <img src={LeGrand} className='destination_image'/>
                    <p className='text_dest'>Le Grand Galle</p>
                </div>
                <div className='locationContainer'>
                    <img src={lighthouse} className='destination_image'/>
                    <p className='text_dest'>Jetwing Lighthouse</p>
                </div>
                <div className='locationContainer'>
                    <img src={raddisson} className='destination_image'/>
                    <p className='text_dest'>Raddisson Blu</p>
                </div>
            </div> */}
            <br></br><br></br><br></br><br></br>
            <Review location="kandy"/>
        </div>    
    )
}