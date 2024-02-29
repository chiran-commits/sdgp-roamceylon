import React, {useState, useEffect} from "react";

const FetchWeather = ({city}) => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey ='45ccb464658998752cb22e35e9fef64e'; //1023b4ae9f3124c521bc27981a9d5ae9

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`;

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
            })
            .catch(error =>{
                console.error('Error fetching weather data:', error);
            });
    });

    return(
        <div>
            { weatherData && weatherData.main &&(
                <h5>Temperature: {Math.round(((weatherData.main.temp)-32)*5/9)}°C</h5>
            )}
        </div>
    );
 
};

export default FetchWeather;