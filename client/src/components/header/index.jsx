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
import searchIcon from '../../images/search.png'
import { IoMdClose } from "react-icons/io";

import img from '../../images/i.jpg'
import img1 from '../../images/i1.jpg'
import img2 from '../../images/i2.jpg'
import img3 from '../../images/i3.jpg'
import img4 from '../../images/i4.jpg'
import img5 from '../../images/i5.jpg'
import img6 from '../../images/i6.jpg'
import img7 from '../../images/i7.jpg'
import img8 from '../../images/i8.jpg'
import img9 from '../../images/i9.jpg'
import closeIcon  from "../../images/icons/closeIcon.png"

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

  let ProfilesSearched = [
    { id: 1, name: "John Doe", image: img },
    { id: 2, name: "peter ali", image: img1 },
    { id: 3, name: "sara mor", image: img2 },
    { id: 4, name: "hazem mohamed", image: img3 },
    { id: 5, name: "maner illed", image: img4 },
    { id: 6, name: "polter shamer", image: img5 },
    { id: 7, name: "hamze ahmed", image: img6 },
    { id: 8, name: "mohamed mshad", image: img7 },
    { id: 9, name: "ahmed waled", image: img8 },
    { id: 10, name: "taha tota", image: img9 },
  ]
  return (
    <>
      <header className="p-[10px] bg-white h-[65px]">
        {/*  */}
        <nav className="flex gap-[10px] relative justify-between h-full">
          <div className={`${ openSearchContainer? 
                                        "absolute top-[-8px] left-[-10px] shadow-[1px_1px_15px_#0000001f] bg-[white] p-[15px] rounded-[8px] z-10"
                                        : "w-fit"}`
                                        }>
                <div className="flex items-center gap-[8px] bg-white z-10">
                  {
                    openSearchContainer ? (
                      <KeyboardBackspaceRoundedIcon
                        sx={{width:"40px",height:"40px", backgroundColor:"#f1f1f1",borderRadius:"50%",color:"var(--secondaryColor)",cursor:"pointer"}}
                        onClick={() => setOpenSearchContainer(false)}
                      />
                    ) : (
                      <a className="logoImage">
                        <FacebookOutlined
                          sx={{ width: "48px", height: "48px", color: "#0866ff" }}
                        />
                      </a>
                    )
                  }

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
                <div
                  className={`search_result_container w-[100%] h-fit p-[10px] ${
                    openSearchContainer ? "block" : "hidden"
                  }`}
                >

                  <div className="flex gap-1 items-center my-[10px] pb-1 border-b border-[#f1f1f1]">
                    <img width={20} src={searchIcon} alt="" />
                    <p className="text-[20px] text-[#050505]">recent</p>
                  </div>
                  <div>
                    {
                      ProfilesSearched.map((e)=>{
                        return(
                        <div key={e.id} className="has-[:focus]:hidden relative flex items-center gap-[8px] p-[10px] ps-[2px] transition hover:bg-[var(--hoverGreyColor)] rounded-[15px] cursor-pointer">
                          <img className="w-[40px] h-[40px] rounded-full object-cover border border-[#ddd]" src={e.image} alt="" />
                          <h4 className="text-[19px]">{e.name}</h4>
                          <IoMdClose className=":focus:hidden absolute right-[2px] top-[21px] w-[20px] h-[20px] bg-[var(--hoverGreyColor)] rounded-full" />
                      </div>
                        )
                      })
                    }
                  </div>
                </div>
          </div>
          <div className={`${openSearchContainer ? "block w-[308px]" : "hidden"}`}>.</div>
          {/*  */}

          <div className="links flex flex-1 shrink items-center justify-between gap-2">
            <a
              href="#d"
              onClick={(e) => {
                changesRealStateOfHeaderLinks(
                  e.currentTarget,
                  e.currentTarget.children[0]
                );
              }}
              className="icon group  
                h-full flex flex-1
                items-center 
                justify-center 
                rounded-[15px] 
                text-[#65676B] 
                hover:bg-[#6567681a] 
                hover:transition-[1s]  
                cursor-pointer
                relative
                after:content[''] after:bottom-[-11px] after:bg-[#0866ff] after:transition-[1s] after:h-[2px] after:left-0 after:absolute"
            >
              <FaHouseCrack className="w-[24px] h-[24px]" />
            </a>
            <a
              href="#"
              onClick={(e) =>
                changesRealStateOfHeaderLinks(
                  e.currentTarget,
                  e.currentTarget.children[0]
                )
              }
              className="icon group  
                h-full flex flex-1 
                items-center 
                justify-center 
                rounded-[15px] 
                text-[#65676B] 
                hover:bg-[#6567681a] 
                hover:transition-[1s]  
                cursor-pointer
                relative
                after:content[''] after:bottom-[-11px] after:bg-[#0866ff] after:w  after:transition-[1s] after:h-[2px] after:left-0 after:absolute"
            >
              <FaUserFriends className="w-[24px] h-[24px]" />
            </a>
            <a
              href="#"
              onClick={(e) =>
                changesRealStateOfHeaderLinks(
                  e.currentTarget,
                  e.currentTarget.children[0]
                )
              }
              className="icon group  
                h-full flex flex-1 
                items-center 
                justify-center 
                rounded-[15px] 
                text-[#65676B] 
                hover:bg-[#6567681a] 
                hover:transition-[1s]  
                cursor-pointer
                relative
                after:content[''] after:bottom-[-11px] after:bg-[#0866ff] after:w  after:transition-[1s] after:h-[2px] after:left-0 after:absolute"
            >
              <MdGroups className="w-[24px] h-[24px]" />
            </a>
          </div>

          <div className="rest_profile_links_setting w-fit flex items-center gap-[8px]">
            <button className="bg-[#ebf5ff] text-[#0064d1] h-[37px] w-[105px] rounded-[50px]">
              find friends
            </button>
            <button className="bg-[#E4E6EB] p-[10px] rounded-full">
              <CgMenuGridR className="h-[20px] w-[20px]" />
            </button>
            <button className="bg-[#E4E6EB] p-[10px] rounded-full">
              <FaFacebookMessenger className="h-[20px] w-[20px]" />
            </button>
            <button className="bg-[#E4E6EB] p-[10px] rounded-full">
              <IoIosNotifications className="h-[20px] w-[20px]" />
            </button>
            <button className="h-[35px] w-[35px] relative cursor-pointer" onClick={OpenSettingContainer} >
              <img src={myimg} className="h-full w-full rounded-full" />
              <img
              
                src={arrowDown}
                alt=""
                className="absolute right-[0] bottom-[-5px]"
              />
            </button>
          </div>
          {
            OpenSettingToggle&&<div ref={settingContainerRef}><SettingToggle img={myimg}/></div>
          }
        </nav>
      </header>
    </>
  );
};

export default Header;
