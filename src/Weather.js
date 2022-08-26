import React, {useEffect, useState} from 'react'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'


export default function Weather() {
  
  
  
  
  
  const [temp, setTemp] = useState();
  const [condition, setCondition] = useState()
  const [icon, setIcon] = useState();
  const [updateTime, setUpdateTime] = useState()
  const [label, setLabel] = useState('Pick a Location');
  const [open, setOpen] = useState(true)


  

  
  var key = process.env.REACT_APP_API_KEY;
  var baseURL = 'https://api.weatherapi.com/v1/';
  //var location = {label};
  var airQualityData = 'no';

  var url = baseURL + "current.json?key=" + key + "&q=" + label + "&aqi=" + airQualityData;
  
  
  useEffect(() => {
    if (label === "Pick a Location")
      return
    else
      request(url)
  }, [label]);


  

  function request(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setTemp(data.current.temp_f);
      setCondition(data.current.condition.text);
      setIcon(data.current.condition.icon);
      setUpdateTime(data.current.last_updated);
    });
  }
  


  const myStyle = {
    backgroundImage: "url(" + icon + ")",
    backgroundSize: "50%",
    
    
  };
  console.log(myStyle)

  return (

    
    <div className="split topleft bg-slate-200 text-center" style={myStyle}>
       
      <div className='font-mono' >
        <Dropdown label={label} setLabel={setLabel} setOpen={setOpen} isOpen={open}>
          
          <DropdownItem option='Toledo, OH' setLabel={setLabel} > </DropdownItem>
          <DropdownItem option='Bowling Green, OH' setLabel={setLabel} > </DropdownItem>
          <DropdownItem option='Mobile, AL' setLabel={setLabel} > </DropdownItem>
          <DropdownItem option='Peck, MI' setLabel={setLabel} > </DropdownItem>
        </Dropdown>
      </div>
    
    <p>The current location is {label} </p>
    <p>The current temperature is {temp} </p>
    <p>The current condition is {condition}</p>
    <p>This webpage was last updated at {updateTime}</p>

      
    
      
      
      
      </div>
    
  )
  
}
