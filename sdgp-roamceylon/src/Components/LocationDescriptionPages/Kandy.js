import React from 'react'
import Navbar from '../AboutUsPage/Navbar';
import './Kandy.css';

export default function Kandy(){
    return(
        <div>
            <Navbar activeOption={"locations"}/>
            <div className='Kandy-page'>
                <div className='Kandy-image'>
                    <img class="img"/>
                </div>
                <div className='Kandy-text'>
                    <h1>Kandy</h1>
                    <h3>The coastal city of Southern Sri Lanka</h3>
                </div>   
            </div>
        </div>
    )
}