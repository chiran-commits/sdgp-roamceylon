import React from 'react'
import Navbar from '../AboutUsPage/Navbar';
import './colombo.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import LocationData from './locations.json'
import Review from '../ReviewSection/Review';

const Colombo = () => {

   
    return (
        <div className='colombopage'>
            <Navbar></Navbar>

            <section className="colombopagehero">
                <div className="colombopagetext-container">
                    <h2>Colombo</h2>
                    {
                        LocationData.map(data => {
                            if (data.location == "Colombo") {
                                return (
                                    <div className="colombopageindicators">
                                        <p>WEATHER: Tropical</p>
                                        <p>WIFI:</p>
                                        <span>
                                            <div className='weather'>
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
                                        </span>
                                        <p>COST OF LIVING:</p>
                                        <span>
                                            <div className='cost'>
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
                                        </span>
                                        <p>URBAN/RURAL: {data.type}</p>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </section>
            <Review/>
            

        </div>
    )
}

export default Colombo


