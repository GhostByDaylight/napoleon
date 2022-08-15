import { React, useState, useEffect } from 'react'

export default function Dropdown( props ) {
  
  useEffect(() => {
    props.setOpen(!props.isOpen)
  }, [props.label]);
  
  
  return (
    <div>
        <label onClick={() => props.setOpen(!props.isOpen)} className=' cursor-pointer bg-slate-200'>  {props.label}  </label>
        { props.isOpen && props.children }
        </div>
  )
}
