import {React, useState } from 'react'

export default function Dropdown( props ) {
  
  const [open, setOpen] = useState(false)
  
  return (
    <div>
        <label onClick={() => setOpen(!open)} className=' cursor-pointer'>  {props.label}  </label>
        { open && props.children }
        </div>
  )
}
