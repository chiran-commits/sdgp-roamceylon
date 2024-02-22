import React, {useState, useEffect} from "react";

const FetchWeather = ({city}) => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey ='ae80a97df9631a8504b28663ae31cb5f'; //07f0ea201419229d65605a0da62c8cb5

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