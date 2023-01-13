
import React from "react"

const WeatherForecast = ({
  img,

  day, 

  conditions,
  
  time
}) => {
  return (
    // Classname weather to link to CSS
    <div className = "weather">

    <img src = {img} alt="weather icon" />

    <p>  <span day /> {day} 
    <span conditions time /> {conditions} {time}</p>

    </div>
  )
}

export default WeatherForecast