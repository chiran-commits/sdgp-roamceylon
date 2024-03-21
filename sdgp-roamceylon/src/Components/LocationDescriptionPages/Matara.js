import React, { useEffect } from 'react'
import Navbar from '../AboutUsPage/Navbar';
import MataraImage1 from '../LocationDescriptionPages/Images/smb.jpg';
import MataraImage2 from '../LocationDescriptionPages/Images/ruwanwelisaya.jpg';
import MataraImage3 from '../LocationDescriptionPages/Images/thuparamaya.jpg';
import MataraImageMain from '../LocationDescriptionPages/Images/matara.jpg';
import MataraHotel1 from '../LocationDescriptionPages/Images/capeweli.jpg';
import MataraHotel2 from '../LocationDescriptionPages/Images/baymarriott.jpg';
import MataraHotel3 from '../LocationDescriptionPages/Images/w15.jpg';
import LocationData from './locations.json'
import './Galle.css';
import Review from '../ReviewSection/Review';
import FetchWeatherData from './GetWeatherData.js';

export default function Matara(location){
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return(
        <div>
            <Navbar activeOption={"locations"}/>
            <div className='location_information'>
                <img src={MataraImageMain} className='location_image'></img>
                <div className='location_detail'>
                    <h3>MATARA</h3>
                    <div className='location_Des'>
                        <h3 className='description'>
                        Matara is a coastal town in southern Sri Lanka that's a major commercial hub and a good place 
                        to experience tropical Sri Lanka without the crowds. 
                        It's known for its Dutch architecture, ramparts, well-preserved fort, and street life. 

                        </h3>
                    </div>
                </div>
            </div>
            {
                LocationData.map(data => {
                    if (data.location == "Matara"){
                        return(
                            <div className='scales'>
                                <h1>Indicators</h1>
                                <div className='indicators'>
                                    <div className='indicator-container'>
                                        <p>
                                            <span className='title'>Weather<br></br></span><p>Cold</p>
                                            <p className='weatherdata'><FetchWeatherData city="matara" className="weatherdata"/></p>
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
                                                            <circle cx="80" cy="80" r="29" stroke-linecap="round" />
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
                                                            <circle cx="80" cy="80" r="29" stroke-linecap="round" />
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
                    <img src={MataraImage1} className='destination_image'/>
                    <p className='text_dest'>Jaya Sri Maha Bodhi(4.9 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={MataraImage2} className='destination_image'/>
                    <p className='text_dest'>Ruwanweli Maha Seya(4.9 <span class="fa fa-star checked"></span>)</p>
                </div>
                <div className='popular_destination'>
                    <img src={MataraImage3} className='destination_image'/>
                    <p className='text_dest'>Thuparama vihara(4.8 <span class="fa fa-star checked"></span>)</p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <h3 className='destination-heading'>Hotels in Anuradhapura</h3>
            <div className='hotels'>
                <a href='https://www.grandkandyan.com/' target="_blank">
                <div className='locationContainer'>
                    <img src={MataraHotel1} className='destination_image'/>
                    <p className='text_dest'>Cape Weligama</p>
                </div>
                </a>
                <a href='https://www.cinnamonhotels.com/cinnamoncitadelkandy' target="_blank">
                <div className='locationContainer'>
                    <img src={MataraHotel2} className='destination_image'/>
                    <p className='text_dest'>Weligama Bay Marriott Resort & Spa</p>
                </div>
                </a>
                <a href='https://www.radissonhotels.com/en-us/hotels/radisson-kandy' target='_blank'>
                <div className='locationContainer'>
                    <img src={MataraHotel3} className='destination_image'/>
                    <p className='text_dest'>W15 Weligama</p>
                </div>
                </a>
            </div>
            <br></br><br></br><br></br><br></br>
            <Review location="matara"/>

        </div>
        

    )
}