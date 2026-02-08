import React from 'react'
import './icons.scss'

const Icons = (props) => {
    console.log(props);
    
  return (
    <div className="desktopIcon">
        <img src={props.icons} alt="" />
        <p>{props.label}</p>
    </div>
  )
}

export default Icons