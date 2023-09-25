import React from "react";
import {  useEffect, useState } from "react";
const DUMMT_DATA = {
  location: {
    name: "New Delhi",
    region: "Delhi",
    country: "India",
    lat: 28.6,
    lon: 77.2,
    tz_id: "Asia/Kolkata",
    localtime_epoch: 1695566891,
    localtime: "2023-09-24 20:18",
  },
  current: {
    temp_c: 28.0,
    temp_f: 82.4,
    is_day: 0,
    condition: {
      text: "Mist",
      icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
    },
    wind_mph: 4.3,
    wind_kph: 6.8,
    pressure_mb: 1006.0,
    pressure_in: 29.71,
    humidity: 70,
    cloud: 25,
  },
};
export default function Card(props) {
  const [weather, setWeather] = useState(DUMMT_DATA);

  useEffect(() => {
    const getData = async () => {
      const fetchData = async () => {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=c9132431d6d846b28e895250232409&q=${props.country}`
        );
        if (!response.ok) {
          throw new Error("fetching data is failed");
        }
        const data = await response.json();
        setWeather(data);
      };
      await fetchData();
    };
    getData();
  }, [weather, props.country]);
  console.log(weather);
  return (
    <div
      className="w3-card-4"
      style={{
        width: "30%",
        marginLeft: "35%",
        backgroundColor: "lightblue",
      marginTop:'20px'

      }}
    >
      <div className="w3-display-container w3-text-white">
        <img
          src={weather.current.condition.icon}
          alt="Lights"
          style={{ width: "100%", height: "30%" }}
        />
        <div className="w3-xlarge w3-display-bottomleft w3-padding" style={{color:'black'}}>
          {weather.location.country}({weather.location.name}){" "}
          {weather.current.temp_c} C
        </div>
      </div>
      <div className="w3-row">
        <div className="w3-third w3-center">
          <h3>Status</h3>
          <p>{weather.current.condition.text}</p>
        </div>
        <div className="w3-third w3-center">
          <h3>Wind</h3>
          <p>{weather.current.wind_kph} kph</p>
        </div>
        <div classNameName="w3-third w3-center w3-margin-bottom">
          <h3>Humidity</h3>
          <p>{weather.current.humidity}</p>
        </div>
      </div>
    </div>
  );
}
