import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
     const[city , setcity]=useState("");
     const [error, seterror]= useState(false);
     const[loading, setLoading]= useState(false);

    

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="290e4842b436f446e7e6aff4d1e8665a";

    const fetchWeather= async(city)=>{
        seterror(false);
        setLoading(true);
    
    try{
    
    const response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if(!response.ok){
        throw new Error("City not found");
    }
    const jsonResponse= await response.json();
    let result={
     city:city,
     temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description,

    }
    updateInfo(result);
    }
    catch(err){
        seterror(true);
        console.log(err.message);
    }
    finally{
        setLoading(false);
    }
    };
      const handleChange=(event)=>{
            setcity(event.target.value);

            };
        const handleSubmit=(event)=>{
             event.preventDefault();
            if (city.trim()!==""){
          
             fetchWeather(city);
            }
              };

      

     

    return(
        <div className="searchBox">
          
            <h2>search for weather</h2>

            <div>
                <form onSubmit={handleSubmit}>
                <input className="search_bar" type="text" placeholder="city Name" onChange={handleChange} />
                <br /><br />
                <button>Search</button>

                </form>
            </div>
            {loading && <p>Loading weather....</p>
            
            }
            {error&&(
                <p style={{color:"red"}}> <b>location not found</b></p>
        
                )}
         

        </div>
    )

}