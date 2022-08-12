import React, {useEffect, useState} from 'react'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'




var key = process.env.REACT_APP_API_KEY;
var baseURL = 'https://api.weatherapi.com/v1/';
var location = 'Toledo';
var airQualityData = 'no';

var request = baseURL + "current.json?key=" + key + "&q=" + location + "&aqi=" + airQualityData;






export default function Weather() {
  
  const [temp, setTemp] = useState();
  const [condition, setCondition] = useState()
  const [icon, setIcon] = useState();
  const [updateTime, setUpdateTime] = useState()
  const [label, setLabel] = useState('Pick a Location');
  const [open, setOpen] = useState(true)


  
  
  

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
    <div className="split topleft ">
    
    The current temperature is {temp}
    <p>The current condition is {condition}</p>
      <p className='bg-green-500 hover:bg-slate-500 duration-1000'>The current icon is <img src={icon} alt=""></img></p>
      <p>This webpage was last updated at {updateTime}</p>

      <Dropdown label={label} setLabel={setLabel} setOpen={setOpen} isOpen={open}>
        <DropdownItem option='Pick a Location' setLabel={setLabel} > </DropdownItem>
        <DropdownItem option='Toledo' setLabel={setLabel} > </DropdownItem>
        <DropdownItem option='Bowling Green' setLabel={setLabel} > </DropdownItem>
        <DropdownItem option='Boob World' setLabel={setLabel} > </DropdownItem>
      </Dropdown>
      
      
      
      </div>
    
  )
  
}
