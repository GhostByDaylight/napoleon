import React from 'react'

export default function DropdownItem(props) {
  return (
    <div onClick={() => props.setLabel(props.option)} className=' cursor-pointer bg-slate-500'>{ props.option }</div>
  )
}
