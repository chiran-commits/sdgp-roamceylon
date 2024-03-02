import React from 'react'
import Navbar from '../AboutUsPage/Navbar';
import GalleImage from '../LocationDescriptionPages/Images/newgalleimge1.jpg';
import galleimage1 from '../LocationDescriptionPages/Images/Galle-Dutch-Fort.jpg';
import galleimage2 from '../LocationDescriptionPages/Images/turtle-hatchery-hikkaduwa.jpg';
import galleimage3 from '../LocationDescriptionPages/Images/Galle_Maritime_Museum.jpg';
import './Galle.css';

export default function Galle(){
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
            <h3 style={{color:"black" , marginTop:70, fontSize:35, marginLeft:40}}>Popular Destinations</h3>
            <div className='location_destinations'>
                <div className='popular_destination'>
                    <img src={galleimage1} className='destination_image'/>
                    <p className='text_dest'>Galle Dutch Fort</p>
                </div>
                <div className='popular_destination'>
                    <img src={galleimage2} className='destination_image'/>
                    <p className='text_dest'>Sea Turtle Hatchery Centre</p>
                </div>
                <div className='popular_destination'>
                    <img src={galleimage3} className='destination_image'/>
                    <p className='text_dest'>Maritime Museum</p>
                </div>
            </div>
            <br></br><br></br>
            <div className='indicators'>
                <h1>Indicators</h1>
  
            </div>
        </div>
        

    )
}