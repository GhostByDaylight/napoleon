import React from 'react'

export default function Dropdown( props ) {
  return (
    <div>
        <label>{props.label}</label>
        { props.children }
        </div>
  )
}
