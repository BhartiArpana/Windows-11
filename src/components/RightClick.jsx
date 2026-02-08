import React from 'react'
import './rightClick.scss'
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdOutlineRefresh } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsDisplay } from "react-icons/bs";
import { IoBrushOutline } from "react-icons/io5";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { TbArrowsSort } from "react-icons/tb";
import { HiMiniChevronRight } from "react-icons/hi2";

const RightClick = ({style,setRightMenu}) => {
    // console.log(setRightMenu);
    
  return (
    <div className='rightMenu' style={style}>
        <div className="menu"><HiOutlineViewGrid className='icon'/><p>View</p><HiMiniChevronRight  className='rightIcon'/></div>
        <div className="menu">
            <div className="sortBy"><TbArrowsSort className='icon'/></div>
            <p>Sort by</p><HiMiniChevronRight   className='rightIcon'/>
            </div>
        <div className="menu" onClick={()=>setRightMenu()}><MdOutlineRefresh  className='icon'/><p>Refresh</p></div>
        <div className=" line"></div>
        <div className="menu"><IoAddCircleOutline className='icon'/><p>New</p><HiMiniChevronRight className='rightIcon' /></div>
        <div className=" line"></div>
        <div className="menu"><BsDisplay className='icon'/><p>Display Settings</p></div>
        <div className="menu"><IoBrushOutline className='icon'/><p>Personalize</p></div>
        <div className="menu"><HiArrowTopRightOnSquare className='icon'/>
<p>Show More Options</p></div>
    </div>
  )
}

export default RightClick