import { useState } from 'react'
import SearchBox from './SearchBox'
import Display from  './Display'
import "./body.css"
import Error from "./error"

export default function Body(){
    const [weatherInfo,setWeatherInfo]=useState({
            isSearched:false,
        }
   
    )
    function updateInfo(info){
    setWeatherInfo(info)
    }
    return(
        <div className='WeatherBody'>
            <h1 style={{textAlign:"center"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/><br /><br />
            {weatherInfo.isSearched && <Display info={weatherInfo}/>}
            {weatherInfo.error && <Error/>}
        </div>
    )
}