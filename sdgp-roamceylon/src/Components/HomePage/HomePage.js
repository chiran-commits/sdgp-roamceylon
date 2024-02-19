import React from 'react';
import './HomePage.css';
import Navbar from "../AboutUsPage/Navbar";
import sdgpVideo from '../HomePage/Assets/sdgpVideo.mp4';
import { useEffect} from 'react';
import colomboImage from '../HomePage/Assets/colombo.jpg';
import kandyImage from '../HomePage/Assets/kandy.jpg';
import mataraImage from '../HomePage/Assets/matara.jpg';
import galleImage from '../HomePage/Assets/galle.jpg';
import { Link } from 'react-router-dom';
import FetchWeather from './GetWeather';

export default function HomePage (){
    function anchorTagAbout(){
        const target = document.getElementById("target-about-us");
        const position = target.getBoundingClientRect().top + window.scrollY -33;

        // Scroll smoothly to the target position
        window.scrollTo({
            top: position,
            behavior: "smooth" // Smooth scrolling
        });
    }
  

    function anchorTagCountry(){
        const target = document.getElementById("target-country");
        const position = target.getBoundingClientRect().top + window.scrollY -33;

        // Scroll smoothly to the target position
        window.scrollTo({
            top: position,
            behavior: "smooth" // Smooth scrolling
        });
    }

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
                        <source src={sdgpVideo} type='video/mp4'/>
                    </video>
                    <div className='welcome-text'>
                        <h2>Make Sri Lanka your remote work haven, <span className='explore-now'>Explore now!</span></h2>
                        <div className='main-welcome-heading'>
                            <h3>WELCOME TO ROAMCEYLON</h3>
                        </div>  
                        <div className='button-area'>  
                            <div className='welcome-button-area'> 
                                <button class="welcome-btn" onClick={anchorTagCountry}>
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
                            <div className='welcome-button-area'> 
                                <button class="welcome-btn" onClick={anchorTagAbout}>
                                    About us
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
                </div>
                <div className='home-container-about' id='target-about-us'>
                    <section className='hidden'>
                        <h2>About us</h2>

                        <div className='about-content'>
                            <p>At Roamceylon, we're passionate about empowering digital nomads to embrace the freedom of remote work while immersing themselves in the vibrant culture and breathtaking landscapes of Sri Lanka. Our platform serves as a gateway to personalized recommendations, expert guidance, and a supportive community, ensuring that every aspect of your relocation journey is smooth and fulfilling. Whether you're seeking the perfect work environment, cultural experiences, or simply a new adventure, Roamceylon is your trusted partner in making your digital nomad dreams a reality. Join us and embark on an unforgettable journey of discovery, connection, and growth in the tropical paradise of Sri Lanka.</p>
                        </div>
                    </section>
                </div>
                <div className='home-container-country' id='target-country'>
                    <h2>Popular Locations</h2>
                    <div className='country-box-container'>
                        <Link to='/colombo'>
                            <div className='coutnry-box'>
                                <h3>Colombo</h3>
                                <h3><FetchWeather city="colombo"/></h3>
                                <img className='img' src={colomboImage}></img>
                                <p>Colombo, Sri Lanka's capital, boasts a dynamic mix of history and modernity. Its vibrant streets, rich culture, and diverse cuisine make it a captivating destination for travelers.</p>
                                <a href='#1'className='country-btn'>Learn More</a>
                            </div>
                        </Link>

                        <div className='coutnry-box'>
                            <h3>Kandy</h3>
                            <h3><FetchWeather city="kandy"/></h3>
                            <img class='img' src={kandyImage}></img>
                            <p>Colombo, Sri Lanka's capital, boasts a dynamic mix of history and modernity. Its vibrant streets, rich culture, and diverse cuisine make it a captivating destination for travelers.</p>
                            <a href='#1'className='country-btn'>Learn More</a>
                        </div>

                        <div className='coutnry-box'>
                            <h3>Jaffna</h3>
                            <h3><FetchWeather city="jaffna"/></h3>
                            <img class='img' src={mataraImage}></img>
                            <p>Colombo, Sri Lanka's capital, boasts a dynamic mix of history and modernity. Its vibrant streets, rich culture, and diverse cuisine make it a captivating destination for travelers.</p>
                            <a href='#1'className='country-btn'>Learn More</a>
                        </div>

                        <div className='coutnry-box'>
                            <h3>Galle</h3>
                            <h3><FetchWeather city="galle"/></h3>
                            <img class='img' src={galleImage}></img>
                            <p>Colombo, Sri Lanka's capital, boasts a dynamic mix of history and modernity. Its vibrant streets, rich culture, and diverse cuisine make it a captivating destination for travelers.</p>
                            <a href='#1'className='country-btn'>Learn More</a>
                        </div>
                    </div>
                </div>
                <footer className='home-footer'>
                    <h3>ROAMCEYLON</h3>
                    <div className='social-panel'>
                        Hi
                    </div>
                    <hr></hr>
                    <div className='footer-bot'>
                        <p>Copyright 2024 - Roamceylon</p>
                    </div>
                </footer>
            </div>
        </>
    );
}