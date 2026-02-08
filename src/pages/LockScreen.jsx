import React, { useEffect, useRef, useState } from 'react'
import './lockScreen.scss'
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const LockScreen = () => {
    
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate()
  const [unlock, setunlock] = useState(false)
   

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());  // update every second
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   const formattedDate = time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
  
   useEffect(()=>{
    window.addEventListener('click',handleUnlock)
    window.addEventListener('keydown',handleUnlock)
   })
   const handleUnlock = ()=> setunlock(true)
 const containerRef = useRef();

useGSAP(
  () => {
    if (!unlock) return;

    gsap.fromTo(
      ".lock",
      { y: 0 },
      {
        y: "-100%",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => navigate("/login"),
      }
    );
  },
  {
    scope: containerRef,
    dependencies: [unlock],
  }
);


  return (
    <div className="lock-container" ref={containerRef}>
        <div className='lock' ref={containerRef}>
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
    </div>
   
  )
}

export default LockScreen