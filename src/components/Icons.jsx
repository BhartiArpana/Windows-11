import React from 'react'
import './icons.scss'

const Icons = ({ id, icons, label, x, y, onDragStart }) => {
    // console.log(props);
    
  return (
    <div className="desktopIcon"
     draggable
      onDragStart={() => onDragStart(id)}
      style={{
        position: "absolute",
        left: x,
        top: y,
        cursor: "pointer",
        userSelect: "none"
      }}>
        <img src={icons} alt="" />
        <p>{label}</p>
    </div>
  )
}

export default Icons