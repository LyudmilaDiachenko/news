import React from 'react'
import { formatedTime, formatedDate } from '../../utils/formatDate'
import style from "../../style/date_location.module.css"

export default function DateLocation(props) {
  const localDateTime = new Date(props?.location?.localtime || null);

  return (props?.location ? 
    <div className={style.container_date}>
      <ul className={style.date_box}>
        <li>{props?.location?.name}</li>
        <li>{formatedTime(localDateTime,  {hour: 'numeric', minute: '2-digit'})}</li>
        <li>{formatedDate(localDateTime,  {weekday: 'long', month:"long", day:'numeric'})}</li>
      </ul>
    </div> : 
    <div className={style.container_date}>
      <ul className={style.date_box}>
        <li>Місто не знайдено (Введіть більше 2 літер)</li>
      </ul>
    </div>
  )
}
