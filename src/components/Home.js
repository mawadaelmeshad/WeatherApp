import React, { useState } from "react";
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import search_icon from './Assets/search.png';
import clear_icon from './Assets/clear.png';
import cloud_icon from './Assets/cloud.png';
import drizzle_icon from './Assets/drizzle.png';
import rain_icon from './Assets/rain.png';
import snow_icon from './Assets/snow.png';
import wind_icon from './Assets/wind.png';
import humidity_icon from './Assets/humidity.png';

function Home(){
    let api_key ="9f98f715f46d3d42d0d048a4192ec2b3";
    const [wicon, setwicon] = useState(cloud_icon);
    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            alert("Please write a valid city name");
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = data.wind.speed+"Km/h";
        temprature[0].innerHTML = data.main.temp+"°c";
        location[0].innerHTML = data.name;
        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n" ){
            setwicon(clear_icon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n" ){
            setwicon(cloud_icon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n" ){
            setwicon(drizzle_icon);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n" ){
            setwicon(drizzle_icon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n" ){
            setwicon(rain_icon);
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n" ){
            setwicon(rain_icon);
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n" ){
            setwicon(snow_icon);
        }
        else{
            setwicon(clear_icon);
        }

    }
    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" placeholder="search" className="cityInput"/>
                <div className="search-icon" onClick={()=>search()}>
                    <img src={search_icon} alt="search icon" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="cloud icon"/>
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">Mansoura</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home;