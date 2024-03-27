import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="info">
      <div class="row">
        <div class="currentWeather col-6">
          <div class="float-left">
            <img src={props.data.iconUrl} alt={props.data.desc} id="icon" />
            <WeatherTemp celsius={props.data.temp} />
          </div>
          <h6>Humidity: {props.data.humidity}%</h6>
          <h6>Wind: {props.data.wind} km/h</h6>
        </div>
        <div class="col-6">
          <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
        </div>
      </div>
    </div>
  );
}
