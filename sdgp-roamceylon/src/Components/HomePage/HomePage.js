import React from 'react';
import './HomePage.css';
import Navbar from "../AboutUsPage/Navbar";
import BackGroundVideo from '../HomePage/Assets/backgroundVideo.mp4';
import { useEffect } from 'react';

export default function HomePage (){
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElement = document.querySelector('.home-container-about .hidden');
        if (hiddenElement) {
            observer.observe(hiddenElement);
        }

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    
    return(
        <>
            <div>
                <Navbar activeOption='home'/>
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
                        <h2>About us</h2>

                        <div className='about-content'>
                            <p>Roamceylon is the website we created to help the people who wants to settle in Sri Lanka but doesnt know what and where to go,ThiRoamceylon is the website we created to help the people who wants to settle in Sri Lanka but doesnt know what and where to go,ThisRoamceylon is the website we created to help the people who wants to settle in Sri Lanka but doesnt know what and where to go,ThiRoamceylon is the website we created to help the people who wants to settle in Sri Lanka but doesnt know what and where to go,This</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}