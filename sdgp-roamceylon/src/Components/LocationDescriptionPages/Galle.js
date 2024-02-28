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
                </div>
            </div>
            <div className='indicators'>
                <section className='indicator-section'>
                    <h1>Indicators</h1>
                </section>
            </div>
        </div>
        

    )
}