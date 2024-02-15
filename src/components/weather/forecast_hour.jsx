import React from "react";
import { useApp } from "../../utils/context";
import { formatedTime } from "../../utils/formatDate";
import wind_arrow from '../../assets/wind_icon/Navigation.png'
import s from "../../style/forecast_hour.module.css"

export default function HourForecast() {
  const { weatherState, index } = useApp();

  if (!weatherState) {
    return null;
  }
  
  const forecastData = weatherState?.forecast?.forecastday[index]?.hour;

  const options = {
    hour: "numeric",
    minute: "2-digit",
  };

  return (
    <div>
      <div className={s.hour_container + ' hour_container'}>
        <h2>Погодинний прогноз</h2>
          <ul className={s.list}>
            {forecastData?.map((item) => {
              const localDateTime = new Date(item.time || null);
              return (
                <li key={item.time} className={s.item}>
                  <p>{formatedTime(localDateTime, options)}</p>
                  <img key={item.time} src={item.condition.icon} alt="" />
                  <p>{Math.round(item.temp_c)} °C</p>
                  <img style={{ transform: `rotate(${item.wind_degree}deg)` }} src={wind_arrow} alt="" width={"50px"} />
                  <p className={s.text}>{Math.round(item.wind_kph)} км/год</p>
                </li>
              );
            })}
          </ul>
      </div>
    </div>
  );
}