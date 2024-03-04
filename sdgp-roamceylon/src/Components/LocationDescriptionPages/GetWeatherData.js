import React, {useState, useEffect} from "react";

const FetchWeatherData = ({city}) => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey ='107e8635ede96492ddd44bd8dd9631a2';

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
                <div>
                    <h5>{Math.round(((weatherData.main.temp)-32)*5/9)}°C</h5>
                    <h5>{weatherData.weather[0].description}</h5> 
                </div>
                

            )}
        </div>
    );
 
};

export default FetchWeatherData;