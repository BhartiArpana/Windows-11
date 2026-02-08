import React, { useEffect, useState } from "react";
import "./home.scss";
import { CiSearch } from "react-icons/ci";
import { IoWifi } from "react-icons/io5";
import { IoVolumeHighOutline } from "react-icons/io5";
import { IoIosBatteryFull } from "react-icons/io";
import Icons from "../components/Icons";
import RightClick from "../components/RightClick";

const Home = () => {
const [icons, setIcons] = useState([
    { id: 1, img: "/images/chrome.png", label: "Chrome", x: 10, y: 0 },
    { id: 2, img: "/images/edge.png", label: "Edge", x: 10, y: 90 },
    { id: 3, img: "/images/folder.png", label: "About Me", x: 10, y: 180 },
    { id: 4, img: "/images/recycleBin.png", label: "Recycle Bin", x: 10, y: 270 },
    { id: 5, img: "/images/vsCode.png" ,label:"Vs Code", x:10, y:440},
    { id: 6, img: "/images/calculator.png", label:"Calculator", x:10,y:360}
  ]);
  const [rightMenu, setRightMenu] = useState(false)
  const [draggedId, setDraggedId] = useState(null);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });

   const handleDragStart = (id) => {
    setDraggedId(id);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;

    setIcons(prev =>
      prev.map(icon =>
        icon.id === draggedId ? { ...icon, x: x - 40, y: y - 40 } : icon
      )
    );
     setDraggedId(null);
  }; 

  const showRightMenu=(e)=>{
    e.preventDefault(); 
    setMenuPos({
    x: e.clientX,
    y: e.clientY
  });
    setRightMenu(true)
    
  }

  return (
    <div className="home">
      <img src="/images/homeImage.jpg" alt="" />
      <div className="homeContent">
        <div className="sideElement" onContextMenu={showRightMenu}>
           <div className="desktopIcons "> 
          {/*onClick={() => setRightMenu(false)} */}
              {icons.map(icon => (
        <Icons
          key={icon.id}
          id={icon.id}
          icons={icon.img}
          label={icon.label}
          x={icon.x}
          y={icon.y}
          onDragStart={handleDragStart}
        />
        
      ))}
      {rightMenu && <RightClick  style={{
      top: menuPos.y,
      left: menuPos.x
    }} setRightMenu={setRightMenu} />}
          </div>
        </div>
        <div className="bottomElement">
          <div className="middleElement">
            <div className="element">
              <img src="/images/window.png" alt="" />
            </div>
            <div className="bottomSearch">
              <CiSearch className="searchIcon" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="element">
              <img src="/images/fileExplorer.png" alt="" />
            </div>
            <div className="element">
              <img src="/images/edge.png" alt="" />
            </div>
          </div>
          <div className="rightElement">
            <div className="bottomRightIcon">
              ENG <br />  IN
            </div>
            <div className="bottomRightIcons">
              <div className="bottomRightIcon">
                <IoWifi className="btmIcon" />
              </div>
              <div className="bottomRightIcon">
                <IoVolumeHighOutline className="btmIcon" />
              </div>
              <div className="bottomRightIcon ">
                <IoIosBatteryFull className="btmIcon" />
              </div>
            </div>
            <div className="bottomRightIcon">
              12:25PM <br /> 2/8/2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
