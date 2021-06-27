import React, { useState, useEffect } from 'react'
import './App.css'
import Weather from './components/Weather'

function App() {

  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
        
        console.log(`latitude value: ${lat}`)
        console.log(`longitude value: ${lon}`)
      })

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      })
    }

    fetchData()
  },[lat, lon]) 


  return (
    <div className="App">
      <header>
        <h1>⛅Weather App</h1>
      </header>
      { typeof data.main != 'undefined' ? (
        <Weather weatherData={data}/>
      ):(
        <div>
          <h3>Unable to get data! 😢</h3>
        </div>
      )}
    </div>
  );
}

export default App;
