import React from 'react'

var key = '4763766bfee040fe939163516222107';
var baseURL = 'https://api.weatherapi.com/v1/';
var location = 'Toledo';
var airQualityData = 'no';

var request = baseURL + "current.json?key=" + key + "&q=" + location + "&aqi=" + airQualityData;
var response = fetch(request);
var weather = response.json();



export default function Weather() {
  return (
    <div className="split topleft ">Weather</div>
  )
}
