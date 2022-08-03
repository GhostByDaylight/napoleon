import React, {useState} from 'react'


var key = '';
var baseURL = 'https://api.weatherapi.com/v1/';
var location = 'Toledo';
var airQualityData = 'no';

var request = baseURL + "current.json?key=" + key + "&q=" + location + "&aqi=" + airQualityData;






export default function Weather() {
  
  const [temp, setTemp] = useState();
  const [condition, setCondition] = useState()
  const [icon, setIcon] = useState();
  const [updateTime, setUpdateTime] = useState()

  fetch(request)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setTemp(data.current.temp_f);
      setCondition(data.current.condition.text);
      setIcon(data.current.condition.icon);
      setUpdateTime(data.current.last_updated);
    });
  
  return (
    <div className="split topleft ">Weather
    
    The current temperature is {temp}
    <p>The current condition is {condition}</p>
      <p className='bg-green-500 hover:bg-slate-500 duration-1000'>The current icon is <img src={icon}></img></p>
      <p>This webpage was last updated at {updateTime}</p>
      
      
      </div>
    
  )
}

