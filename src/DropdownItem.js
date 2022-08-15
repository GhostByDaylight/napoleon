import React, { useEffect } from 'react'

export default function DropdownItem(props) {
  
  
  
  return (
    <div onClick={() => 
    props.setLabel(props.option)
    } >
      
      <label className='cursor-pointer bg-slate-500 m-0 p-1'> { props.option } </label>
      
      </div>
  )
}
