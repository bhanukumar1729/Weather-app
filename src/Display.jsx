import "./Display.css"
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ExploreIcon from '@mui/icons-material/Explore';
import ScaleIcon from '@mui/icons-material/Scale';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThermostatIcon from '@mui/icons-material/Thermostat';

export default function Display({info}){
    let [isExpand,setExpand]=useState(false)
    let weatherUrl=''
    function getImage(code){
        switch (code) {
            case '01':
              weatherUrl = 'https://media.istockphoto.com/id/184304316/photo/clear-blue-sky-background-with-scattered-clouds.webp?b=1&s=170667a&w=0&k=20&c=YcQEPfcW3AEmZAk14TOAfv4ieqMVtnQ1cXUQg07Q5DE=';
              break;
            case '02':
              weatherUrl = 'https://media.istockphoto.com/id/171225633/photo/deep-blue-view-on-a-lightly-clouded-day.webp?b=1&s=170667a&w=0&k=20&c=upqx8XS4W6mq12140V16YU3J24c0Er7n-A3U4H1ZQdQ=';
              break;
            case '03':
              weatherUrl = 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWR5fGVufDB8fDB8fHww';
              break;
            case '04':
              weatherUrl = 'https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmV3JTIwY2xvdWRzfGVufDB8fDB8fHww';
              break;
            case '09':
              weatherUrl = 'https://media.istockphoto.com/id/1388636452/photo/rain-drop-infront-of-mango-bud.webp?b=1&s=170667a&w=0&k=20&c=csV5-O0mIadLwh-_Ap-XGuZGhpmYUOuo4_k2fkXr7-4=';
              break;
            case '10':
              weatherUrl = 'https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D';
              break;
            case '11':
              weatherUrl = 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fHww';
              break;
            case '13':
              weatherUrl = 'https://media.istockphoto.com/id/660587298/photo/snowcapped-himalayan-mountain.webp?b=1&s=170667a&w=0&k=20&c=WY416IyCCHLOvxfT8Y8XIu1uJ7c3_ANb4dVeJ4aKFlE=';
              break;
            case '50':
              weatherUrl = 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D';
              break;
            default:
              weatherUrl = 'https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.webp?b=1&s=170667a&w=0&k=20&c=rHd7W8nOPEdKEnuMgpSnfC2OC9B_rwMe1HS7k_d-ORc=';
              break;
          }
          return weatherUrl;

    }
    function Expand(){
        setExpand(!isExpand)
    }
    function timeConvert(utc){
        let unixTimestamp = utc;
        let date = new Date(unixTimestamp * 1000);
        let utcDate = date.toUTCString()
        return utcDate
    }
    function getWindDirection(degrees) {
        let direction;
        switch (true) {
            case (degrees >= 337.5 || degrees < 22.5):
                direction = 'North';
                break;
            case (degrees >= 22.5 && degrees < 67.5):
                direction = 'North East';
                break;
            case (degrees >= 67.5 && degrees < 112.5):
                direction = 'East';
                break;
            case (degrees >= 112.5 && degrees < 157.5):
                direction = 'South East';
                break;
            case (degrees >= 157.5 && degrees < 202.5):
                direction = 'South';
                break;
            case (degrees >= 202.5 && degrees < 247.5):
                direction = 'South West';
                break;
            case (degrees >= 247.5 && degrees < 292.5):
                direction = 'West';
                break;
            case (degrees >= 292.5 && degrees < 337.5):
                direction = 'North West';
                break;
            default:
                direction = 'Invalid degrees';
        }
        return direction;
    }
    
    
    return(
        <div className="infoBox">
            <div className="cardHolder">
        <Card  >
      <CardMedia
      className="image"
        sx={{ height: 350,width:350}}
        image={getImage(info.icon.substring(0,2))}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2"  component="span">
            <h3 ><ThermostatIcon  style={{color:'red'}}/>Temperature : <b>{info.temp}&deg;C</b></h3>
            <h3><ThermostatIcon style={{color:'red'}}/> Min Temperature : <b>{info.tempMin}&deg;C</b></h3>
            <h3><ThermostatIcon  style={{color:'red'}}/> Max Temperature : <b>{info.tempMax}&deg;C</b></h3>
            <h3><AirIcon  style={{color:'grey'}}/>Humidity : <b>{info.humidity}%</b></h3>
            <h4> {info.weather} and feels like {info.feelsLike}&deg;C </h4>
        </Typography>
      </CardContent>
      <Typography style={{color:"red" }}>
      <b><h3>Disclamier! Values may not be accurate. <br /> Image is just for understanding purpose</h3></b>
      </Typography>


      <IconButton aria-label="delete" onClick={Expand}>
       {isExpand?<div>
        <p>Show less</p>
        <KeyboardArrowUpIcon size="large" />
        </div>: <div>
        <p>Show More</p>
        <ExpandMoreIcon size="large" />
        </div>}
      </IconButton>
      {isExpand && 
      <Typography variant="body2"  component="span" className="divHolder">
        <div><h4> <WbSunnyIcon style={{color:'red'}}/> Sunrise:</h4><h3>{timeConvert(info.sunRise)}</h3></div>
        <div><h4> <WbSunnyIcon style={{color:'red'}}/> SunSet:</h4><h3>{timeConvert(info.sunSet)}</h3></div>
        <div><h4><AirIcon  style={{color:'red'}}/>Wind speed : {info.speed} m/s</h4></div>
         <div><h4><ExploreIcon style={{color:'red'}}/>wind direction: {info.deg}&deg; ({getWindDirection(info.deg)} direction)</h4></div>
         <div><h4><ScaleIcon style={{color:'red'}}/>Pressure:{Math.round((info.pressure)*0.00098)} atm</h4></div>
         <div><h4><CloudIcon style={{color:'red'}}/>Cloudiness : {info.cloud} %</h4></div>
         <div><h4><VisibilityIcon style={{color:'red'}}/>Visibilty : {(info.visibility)/1000} km</h4></div>
        </Typography>
        }

    </Card>
    </div>
        </div>  
    )
}