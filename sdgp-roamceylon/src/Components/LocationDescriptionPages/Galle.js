import React from 'react'
import Navbar from '../AboutUsPage/Navbar';
import GalleImage from '../HomePage/Assets/galle.jpg';
import './Galle.css';

export default function Galle(){
    return(
        <div>
            <Navbar activeOption={"locations"}/>
            <div className='galle-page'>
                <div className='galle-image'>
                    <img class="img" src={GalleImage}/>
                </div>
                <div className='galle-text'>
                    <h1>Galle</h1>
                    <h3>The coastal city of Southern Sri Lanka</h3>
                </div>   
            </div>
        </div>
    )
}