import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./Searchbox.css"

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY= import.meta.env.VITE_API_KEY;

    let getWeatherInfo= async()=>{
        try{
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonRes=await res.json();
        console.log(jsonRes)
        const results={
            isSearched:true,
            error:false,
            city:jsonRes.name,
            temp : jsonRes.main.temp,
            tempMin : jsonRes.main.temp_min,
            tempMax : jsonRes.main.temp_max,
            feelsLike :jsonRes.main.feels_like,
            humidity : jsonRes.main.humidity,
            weather : jsonRes.weather[0].description,
            icon : jsonRes.weather[0].icon,
            speed:jsonRes.wind.speed,
            deg:jsonRes.wind.deg,
            pressure:jsonRes.main.pressure,
            cloud:jsonRes.clouds.all,
            sunRise:jsonRes.sys.sunrise,
            sunSet:jsonRes.sys.sunset,
            visibility:jsonRes.visibility
        }
        console.log(results)
        return results
        }catch(err){
            return{ isSearched:false,error:true}
          
        }
    }
    let textEntered = (event) => {
        setCity(event.target.value)
    }
    let formSubmitted=async(evt)=>{
        evt.preventDefault();
        console.log(city);
        let info=await getWeatherInfo();
        updateInfo(info)
        setCity("");
    }
    return (
        <div className="searchbox">
            <form action=""  onSubmit={formSubmitted}>
                <TextField id="city" 
                label="City name" 
                value={city} 
                onChange={textEntered}
                variant="filled" 
                color="success"
                type="search" 
                style={{backgroundColor:"white"}}
                required 
                />
                <Button 
                className="search"
                variant="contained" 
                endIcon={<SearchIcon />} 
                type="submit" 
                color="success">
                    Search
                </Button>
            </form>
        </div>
    )
}