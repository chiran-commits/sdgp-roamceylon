import React from 'react';
import './HomePage.css';
import Navbar from "../AboutUsPage/Navbar";
import BackGroundVideo from '../HomePage/Assets/backgroundVideo.mp4';

export default function HomePage (){
    return(
        <>
            <div>
                <Navbar/>
                <div className='home-container'>
                    <video className='video-bg' autoPlay muted loop playsInline>
                        <source src={BackGroundVideo} type='video/mp4'/>
                    </video>
                    <div className='welcome-text'>
                        <h2>Make Sri Lanka your remote work haven, <span className='explore-now'>Explore now!</span></h2>
                        <div className='main-welcome-heading'>
                            <h3>WELCOME TO ROAMCEYLON</h3>
                        </div>  
                        <div className='welcome-button-area'> 
                            <button class="welcome-btn">
                                Get started
                                <div class="icon">
                                    <svg
                                        height="24"
                                        width="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                        fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                        </div>    
                    </div>
                </div>
                <div className='home-container-about'>
                    <section className='hidden'>
                        <div className='about-us-home'>
                            
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}