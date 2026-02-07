import React, { useEffect, useState } from 'react'
import './lockScreen.scss'
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const LockScreen = () => {
    
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());  // update every second
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   const formattedDate = time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className='lock'>
      <img src="/images/lockImage.jpg" alt="" />
      <div className="lockElement"> 
        <div className="lockIcons">
            <div className="lockIconLeft"><IoIosSearch className='icon' /></div>
            <div className="lockIconRight"><CiLocationOn className='icon' /></div>
        </div>
        <div className="lockTime">
            <h1>{formattedTime}</h1>
                    <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  )
}

export default LockScreen