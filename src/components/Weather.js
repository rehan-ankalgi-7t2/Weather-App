import React from 'react'
import './weather.css'

const Weather = ({ weatherData }) => {
    return (
        <div className='weather' style={ weatherData.weather[0].id === 800 ? {
                backgroundImage: `/images/clearsky.jpg` 
            } : weatherData.weather[0].id >= 500 && weatherData.weather[0].id < 600 ? {
                backgroundImage: `url("/images/rain.jpg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' 
            } : weatherData.weather[0].id > 800 ? {
                backgroundImage: `url("/images/clouds.jpg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } : weatherData.weather[0].id >= 600 && weatherData.weather[0].id < 700 ? {
                backgroundImage: `url("/images/snowfall.jpg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } : weatherData.weather[0].id >= 300 && weatherData.weather[0].id < 400 ? {
                backgroundImage: `url("/images/drizzle.jpg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } : weatherData.weather[0].id >= 200 && weatherData.weather[0].id < 300 ? {
                backgroundImage: `url("/images/thunderstorm.jpg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } : weatherData.weather[0].id >= 700 && weatherData.weather[0].id < 800 ? {
                backgroundImage: `url("/images/atmosphere.jpg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } : { backgroundImage: 'none' }}>
            <div className="weather__card">
                <h1>🚩{weatherData.name}</h1>
                <p><strong>📃 Description: </strong>{weatherData.weather[0].description}</p>
                <p><strong>🌊 Sea level: </strong>{weatherData.main.sea_level}m</p>
                <p><strong>🌡 Temperature: </strong>{weatherData.main.temp} ℃</p>
                <p><strong>💧 Humidity: </strong>{weatherData.main.humidity}</p>
                <p><strong>🌫 Pressure: </strong>{weatherData.main.pressure} Bars</p>
                <p><strong>🙂 Feels like: </strong>{weatherData.main.feels_like} ℃</p>
            </div>
        </div>
    )
}

export default Weather
