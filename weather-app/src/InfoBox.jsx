import { useState } from "react";
import "./InfoBox.css";
export default function InfoBox({info}){

    const[unit, setUnit]=useState("C");

const HOT_WEATHER_URL="https://i.pinimg.com/474x/a5/e3/03/a5e30311db06925ea01bb72ba5df0be1.jpg";
const COLD_WEATHER_URL="https://i.pinimg.com/736x/62/b9/b3/62b9b33a7a45fc2b7cbf6080348db698.jpg";
const RAINY_WEATHER_URL="https://i.pinimg.com/736x/a0/66/98/a066984158fdd32fc357792cecdc9125.jpg";
const toggleUnit=()=>{
    setUnit((prevUnit)=>
        prevUnit==="C"?"F":"C"
    );
}

const displayTemp=(tempIc)=>{
  return  unit==="C"?info.temp:(info.temp*9)/5+32;
}

  

    return(
        <div className="info_container">
            <h2> Weather Information</h2>
            
            <div className="cardBox">
                <img className="Weather-img" src={
                    info.temp>25
                    ?HOT_WEATHER_URL
                    :info.humidity>80
                    ?RAINY_WEATHER_URL
                    :COLD_WEATHER_URL
                    } 
                    alt="Weather illustration" />
                <div className="weather_info">
                    <div className="info_header">
                <h2>{info.city}</h2>
                <button onClick={toggleUnit}>

                    SWitch to °{unit==="C"?"F":"C"}
                </button>
                </div>
                
                

                <p>Temperature: {displayTemp(info.temp)}°{unit}</p>
                <p>Max_temperature: {displayTemp(info.tempMax)}°{unit}</p>
                <p>Min_temperature:{displayTemp(info.tempMin)}°{unit}</p>
                <p>Humidity:{displayTemp(info.humidity)}°{unit}</p>
                <p> <b> The weather can be describe as {info.weather} and feels like {displayTemp(info.feelsLike)}°{unit}</b></p>
                </div>

                
            </div>
        

     
        

        </div>
    )

}