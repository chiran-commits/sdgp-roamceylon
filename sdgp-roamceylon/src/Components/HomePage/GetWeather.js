import React, {useState, useEffect} from "react";

const FetchWeather = ({city}) => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey ='107e8635ede96492ddd44bd8dd9631a2'; //107e8635ede96492ddd44bd8dd9631a2

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