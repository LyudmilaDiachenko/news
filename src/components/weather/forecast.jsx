import React from 'react'
import { useApp } from '../../utils/context'
import { formatedDate } from '../../utils/formatDate'
import s from "../../style/forecast.module.css"

export default function Forecast(props) {

    const { weatherState, updateIndex } = useApp()
    const weatherData = weatherState?.forecast?.forecastday

    if (!weatherData) {
        return null
    }
    const localDateTime = new Date(props?.weather?.forecast?.forecastday || null);
    
    function onforecastItemClick (e){
        const currentIndex = weatherData.filter((item) => item.date === e.currentTarget.id) 
        const index = weatherData.indexOf(...currentIndex)
        updateIndex(index)
    }
    
    return (
        <div className={s.forecast_container + ' forecast_container'}>
            <h2>Прогноз на {weatherData.length} днів</h2>
            <ul className={s.date_box}>
                {weatherData?.map((item) =>
                (<li onClick={onforecastItemClick} id={item.date} key={item.date_epoch}>
                    <img src={item.day.condition.icon} alt="" />
                    <p className={s.text_style}>{Math.round(item.day.avgtemp_c)} °C</p>
                    <p>{formatedDate(new Date(item.date_epoch * 1000), { weekday: 'long', month: "long", day: 'numeric' })}</p>
                </li>)
                )}
            </ul>
        </div>
    )
}