import React, { useEffect, useRef, useState } from "react";

import { FacebookOutlined } from "@mui/icons-material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { FaHouseCrack } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

import { IoIosNotifications } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import myimg from "../../images/Myimg_3.jpg";
import arrowDown from "../../images/icons/arrowDown.svg";
import SettingToggle from "./settingToggle"
import { IoMdClose } from "react-icons/io";

import ProfilesPictures from '../../utilities/profilesPictures'

import closeIcon  from "../../images/icons/closeIcon.png"
import SearchContainer from "./searchContainer";
const Header = () => {
    const [openSearchContainer, setOpenSearchContainer] = useState(false);
  
    const [OpenSettingToggle, setOpenSettingToggle] = useState(false);
    const settingContainerRef= useRef(null)

    const extendSearchContainer = () => {
        setOpenSearchContainer(true);
    };
    const handleClickOutside = (event) =>{
        if(settingContainerRef.current && !settingContainerRef.current.contains(event.target) ) {
            setOpenSettingToggle(false)
        }
    }
    const HeaderLinks = document.querySelectorAll(".icon");

    const changesRealStateOfHeaderLinks = (elem, child) => {
        const HeaderLinks = document.querySelectorAll(".icon").forEach((elem) => {
        elem.classList.remove("after:w-[100%]");
        elem.children[0].classList.remove("text-[#0866ff]");
        });
        elem.classList.add("after:w-[100%]");
        child.classList.add("text-[#0866ff]");
    };

    const OpenSettingContainer =() => {
        setOpenSettingToggle(!OpenSettingToggle);
        console.log(settingContainerRef.current);
        
    }
    useEffect(()=>{
        document.addEventListener("mousedown",handleClickOutside)
        return () => {
        document.removeEventListener("mousedown",handleClickOutside)
        }
    },[])


  return (
        <header className="p-[10px] bg-white h-[65px]">
            {openSearchContainer?
                <div className="header-content">
                    <div className={`${"w-fit"}`}>
                        <div className="flex items-center gap-[8px] bg-white z-10">
                            <a className="logoImage">
                                <FacebookOutlined
                                sx={{ width: "48px", height: "48px", color: "#0866ff" }}
                                />
                            </a>   
                            
                            <div className="searchContainer bg-[#f0f2f5] flex gap-[5px]  w-[252px] p-[10px] rounded-full">
                                <SearchIcon
                                className={`text-[#656768]`}
                                sx={{ display: `${openSearchContainer ? "none" : "block"}` }}
                                />
                                <input
                                type="text"
                                placeholder="Facebook Search"
                                className="bg-transparent border-none outline-none text-[#65676B]"
                                onClick={extendSearchContainer}
                                />
                            </div>
                        </div>
                    </div>
                </div>:<SearchContainer/>
            }
            <h1>Header</h1>
        </header>
  )
}

export default Header