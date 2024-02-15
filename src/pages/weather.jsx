import React, { useEffect, useState } from 'react'
import { useApp } from '../utils/context'
import Forecast from '../components/weather/forecast';
import DateLocation from '../components/weather/date_location';
import ForecastHour from '../components/weather/forecast_hour';
import ForecastToday from '../components/weather/forecast_today';
import locationLogo from "../assets/icon-location.png"
import style from "../style/weather.module.css"

export default function Weather() {
  const {weatherState, getWeatherData} = useApp()
  const [weather, setWeather] = useState(weatherState)
  const [cityName, setCityName] = useState("")

  useEffect(() => {
    (async () => setWeather(await getWeatherData(cityName, "days=7&aqi=yes&alerts=no")))()
  }, [cityName])

  return (
    <div className={style.weatherContainer}> 
      <form className={style.weatherForm}>
        <input type="text" 
          placeholder='Search' 
          value={cityName} 
          onChange={e=>setCityName(e.target.value)}
          className={style.weatherFormInput + ' weatherFormInput'}
        />
        <img src={locationLogo} alt="Location" />
      </form>
      <div className={style.container_today}>
        <DateLocation location={weather?.location} />
        <ForecastToday weather={weather} />        
      </div>      
      <div className={style.container_hour}>
        <Forecast weather={weather} />
        <ForecastHour />
      </div>

    </div>
  )
}

