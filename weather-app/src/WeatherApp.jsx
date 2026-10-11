import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo , setweatherInfo]= useState({

        city:"mumbai",
        feelsLike: 31.47,
        humidity:43,
        temp:31.07,
        tempMax: 31.07,
        tempMin: 31.07,
        weather: "clear sky"

    });
    const updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div>
          <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
         
            

        </div>
    )

}