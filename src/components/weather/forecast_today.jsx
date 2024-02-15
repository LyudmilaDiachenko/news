import React from 'react'
import s from "../../style/forecast_today.module.css"
import sunrise from "../../assets/sun_icon/icon_sunrise.png"
import sunset from "../../assets/sun_icon/icon_sunset.png"
import humidity from "../../assets/icon-humidity.png"
import pressure from "../../assets/icon-pressure.png"
import wind from "../../assets/icon-wind.png"
import uv from "../../assets/icon-uv.png"

export default function ForecastToday(props) {
  return (
    <div>
        <div className={s.container_temp}>
            <ul className={s.list}>
                <li className={s.temp_text}>
                   {Math.round(props?.weather?.current?.temp_c)} °C
                </li>
                <li className={s.feelslike_text}>
                    Відчувається як: {Math.round(props?.weather?.current?.feelslike_c)} °C
                </li>
                <li className={s.list_style}> 
                    <div>
                        <img src={sunrise} alt="" />                        
                    </div>
                    <div>
                        <p>Схід сонця</p>
                        <p>{props.weather?.forecast?.forecastday[0]?.astro.sunrise}</p>
                    </div>                    
                </li>
                <li className={s.list_style}>
                    <div>
                        <img src={sunset} alt="" />                        
                    </div>
                    <div>
                        <p>Захід сонця</p>
                        <p>{props.weather?.forecast?.forecastday[0]?.astro.sunset}</p>
                    </div>                    
                </li>
            </ul>
            <ul className={s.list}>
                <li className={s.list_item}>
                    <div className=''>
                        <img src={props?.weather?.current?.condition?.icon} alt="img" />
                    </div>
                    <p>
                        {props?.weather?.current?.condition?.text}
                    </p>
                </li>
            </ul>
            <ul className={s.list}>
                <li>
                    <img src={humidity} alt="" />
                    <p>{props?.weather?.current?.humidity} %</p>
                    <p>Вологість</p>
                </li>
                <li>
                    <img src={pressure} alt="" />
                <p>{props?.weather?.current?.pressure_mb} мм рт. ст.</p>
                <p>Тиск</p>
                </li>
            </ul>
            <ul className={s.list}>
                <li>
                    <img src={wind} alt="" />
                    <p>{Math.round(props?.weather?.current?.wind_kph)} км/год</p>
                    <p>Швидкість вітру</p>
                </li>
                <li>
                    <img src={uv} alt="" />
                <p>{props?.weather?.current?.uv}</p>
                <p>УФ</p>
                </li>
            </ul>            
        </div>
    </div>
  )
}
