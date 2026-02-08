import React from "react";
import "./home.scss";
import { CiSearch } from "react-icons/ci";
import { IoWifi } from "react-icons/io5";
import { IoVolumeHighOutline } from "react-icons/io5";
import { IoIosBatteryFull } from "react-icons/io";
import Icons from "./Icons";

const Home = () => {
  return (
    <div className="home">
      <img src="/images/homeImage.jpg" alt="" />
      <div className="homeContent">
        <div className="sideElement">
          <div className="desktopIcons">
              <Icons icons="/images/chrome.png" label="Google chrome" />
               <Icons icons="/images/edge.png" label="Microsoft Edge" />
                <Icons icons="/images/fileExplorer.png" label="About Me" />
                 <Icons icons="/images/recycleBin.png" label="Recycle Bin" />
                 <Icons icons="/images/calculator.png" label="Calculator" />
                  <Icons icons="/images/vsCode.png" label="VS Code" />
                 
          </div>
        

        </div>
        <div className="bottomElement">
          <div className="middleElement">
            <div className="element">
              <img src="/images/window.png" alt="" />
            </div>
            <div className="bottomSearch">
              <CiSearch className="searchIcon"/>
              <input type="text" placeholder="Search"/>
            </div>
            <div className="element">
              <img src="/images/fileExplorer.png" alt="" />
            </div>
            <div className="element">
              <img src="/images/edge.png" alt="" />
            </div>
          </div>
          <div className="rightElement">
            <div className="bottomRightIcon">ENG <br /> IN</div>
            <div className="bottomRightIcons">
              <div className="bottomRightIcon"><IoWifi  className="btmIcon" /></div>
            <div className="bottomRightIcon"><IoVolumeHighOutline className="btmIcon" /></div>
            <div className="bottomRightIcon "><IoIosBatteryFull  className="btmIcon"/></div>
            </div>
            <div className="bottomRightIcon">12:25PM <br /> 2/8/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
