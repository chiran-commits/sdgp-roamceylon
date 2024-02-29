import React from 'react'
import Navbar from '../AboutUsPage/Navbar';
import GalleImage from './galleimage.jpg';
import './Galle.css';

export default function Galle(){
    return(
        <div>
            <Navbar activeOption={"locations"}/>
            <div className='image_section'>
                <img src={GalleImage} className='location_image'></img>
                <div className='text_location'>
                    <h2>GALLE</h2>
                    <h6 className='location_Des'>
                        <p>Galle is a city on the southwest coastline of Sri Lanka.</p> 
                        <p>The city consists of exotic old trading port blessed with imposing Dutch-colonial buildings,</p>
                        <p>stylish cafes, quirky boutiques and impeccably restored beautiful hotels.</p>
                        <br></br>
                        <p>Popular Destinations: </p>
                    </h6>
                </div>
            </div>
            <div className='indicators'>
        
                <h1>Indicators</h1>
  
            </div>
        </div>
        

    )
}