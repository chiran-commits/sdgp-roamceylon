import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import GalleImage from '../LocationDescriptionPages/Images/newgalleimge1.jpg';
import galleimage1 from '../LocationDescriptionPages/Images/Galle-Dutch-Fort.jpg';
import galleimage2 from '../LocationDescriptionPages/Images/turtle-hatchery-hikkaduwa.jpg';
import galleimage3 from '../LocationDescriptionPages/Images/Galle_Maritime_Museum.jpg';
import LeGrand from '../LocationDescriptionPages/Images/leGrand.jpg';
import raddisson from '../LocationDescriptionPages/Images/raddisson.jpg';
import lighthouse from '../LocationDescriptionPages/Images/lighthouse.jpg';
import LocationData from './locations.json'
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
                <img src={GalleImage} className='location_image'></img>
                <div className='location_detail'>
                    <h3>GALLE</h3>
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
                    if (data.location == "Galle"){
                        return(
                            <div className='indicators'>
                                <h1>Indicators</h1>
                                <div className='indicator-container'>
                                    <p>
                                        <span className='title' style={{marginLeft:"18px"}}>Weather<br></br></span><p style={{marginLeft:"12px"}}>Tropical/ Hot and Humid</p>
                                        <p className='weatherdata' style={{marginLeft:"13px"}}><FetchWeatherData city="galle" className="weatherdata"/></p>
                                    </p>
                                </div>
                                <div className='indicator-container'>
                                    <p><span className='title' style={{left:"56px"}}>Wi-Fi<br></br></span></p>
                                    <div className='indicator-scale'>     
                                            <div className='weather' style={{right:"21px", marginTop:"10px"}}>
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
                                    </div>    
                                </div>
                                <div className='indicator-container'>
                                    <p><span className='title' style={{left:"36px"}}>COST OF LIVING<br></br></span></p>
                                    <div className='indicator-scale'>      
                                            <div className='cost' style={{right:"105px", marginTop:"10px"}}>
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
                                    </div>    
                                </div>
                                <div className='indicator-container'>
                                    <p><span className='title' style={{left:"8px"}}>URBAN/RURAL<br></br></span><p style={{marginTop:"20px", marginLeft:"10px"}}>{data.type}</p></p>
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
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Galle</h3>
            <div className='galle-hotels'>
                <a href='https://www.legrandgalle.lk/' target="_blank">
                <div className='locationContainer'>
                    <img src={LeGrand} className='destination_image'/>
                    <p className='text_dest'>Le Grand Galle</p>
                </div>
                </a>
                <a href='https://www.jetwinghotels.com/jetwinglighthouse/#gref' target="_blank">
                <div className='locationContainer'>
                    <img src={lighthouse} className='destination_image'/>
                    <p className='text_dest'>Jetwing Lighthouse</p>
                </div>
                </a>
                <a href='https://www.radissonhotels.com/en-us/hotels/radisson-blu-galle?checkInDate=2024-03-13&checkOutDate=2024-03-14&searchType=lowest&promotionCode=&voucher=&memberOnlyRatesHotelCodes=LKCMBGAL&adults%5B%5D=2&children%5B%5D=0&aoc%5B%5D=NaN' target='_blank'>
                <div className='locationContainer'>
                    <img src={raddisson} className='destination_image'/>
                    <p className='text_dest'>Raddisson Blu</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="galle"/>

        </div>
        

    )
}