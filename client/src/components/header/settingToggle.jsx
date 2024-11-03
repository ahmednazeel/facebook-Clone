import React from "react";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { MdHelpOutline } from "react-icons/md";

import { RiFeedbackFill } from "react-icons/ri";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import { IoLogOut } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';  

const SettingToggle = ({ img }) => {
  
  
  return (
    <div className="p-[16px] pt-[9px] w-[350px] bg-white flex flex-col gap-[15px] rounded-md shadow-[1px_1px_46px_#00000021] absolute top-[60px] right-[2px]">
      <div>
        <div className="shadow-[1px_1px_10px_#00000021] p-[9px]">
          <a href="#" className="flex items-center gap-[10px] transition-[1s] border-[#ddd] p-[7px] hover:bg-[#d1d1d138]  rounded-[6px]">
            <img className="h-[40px] w-[40px] rounded-full " src={img} alt="" />
            <p className="text-[#050505]">ahmed nazeel</p>
          </a>
          <div className="mt-[5px] pt-[15px] border-t border-[#b9b9b945]">
            <button className="flex justify-center items-center gap-[10px] w-[100%] bg-[#E4E6EB] p-[9px] rounded-[6px] hover:bg-[#050505] hover:text-white transition-[1s]"><PiUserSwitchDuotone/> <span>see all profiles</span></button>
          </div>
        </div>
      </div>
        <div>
            <a href="#" className="flex items-center gap-[5px] my-[15px] group"><CiSettings className="w-[30px] h-[30px] p-[5px] rounded-full bg-[#b9b9b945] transition-[1s] group-hover:text-[#0064d1]"/> <p className="text-[15px]">setting & privacy</p></a>
            <a href="#" className="flex items-center gap-[5px] my-[15px] group"><MdHelpOutline className="w-[30px] h-[30px] p-[5px] rounded-full bg-[#b9b9b945] transition-[1s] group-hover:text-[#0064d1]"/> <p className="text-[15px]">help & support</p></a>
            <a href="#" className="flex items-center gap-[5px] my-[15px] group"><WiMoonAltWaningCrescent5 className="w-[30px] h-[30px] p-[5px] rounded-full bg-[#b9b9b945] transition-[1s] group-hover:text-[#0064d1]"/> <p className="text-[15px]">display & accessibiaty</p></a>
            <a href="#" className="flex items-center gap-[5px] my-[15px] group"><RiFeedbackFill className="w-[30px] h-[30px] p-[5px] rounded-full bg-[#b9b9b945] transition-[1s] group-hover:text-[#0064d1]"/> <p className="text-[15px]">give feedback</p></a>
            <a href="#" className="flex items-center gap-[5px] my-[15px] group"><IoLogOut className="w-[30px] h-[30px] p-[5px] rounded-full bg-[#b9b9b945] transition-[1s] group-hover:text-[#0064d1]"/> <p className="text-[15px]">log out</p></a>
        </div>
        <div className="text-[var(--secondaryIconColor)]  text-[14px] flex gap-1 flex-wrap">
            <a href="#">privacy.</a> <a href="#">terms.</a> <a href="#">advertising.</a> <a href="#">Ad Choices·</a>
            <a href="#">cookies·</a><a href="#">more·</a><span>Ahmednazeel clone@2024</span>
        </div>
    </div>
  );
};

export default SettingToggle;


const ToggleMenu = () => {  
  const [isOpen, setIsOpen] = useState(false);  
  const menuRef = useRef(null);  

  const handleClick = () => {  
    setIsOpen(!isOpen);  
  };  

  const handleClickOutside = (event) => {  
    if (menuRef.current && !menuRef.current.contains(event.target)) {  
      setIsOpen(false);  
    }  
  };  

  useEffect(() => {  
    document.addEventListener('mousedown', handleClickOutside);  
    return () => {  
      document.removeEventListener('mousedown', handleClickOutside);  
    };  
  }, []);  

  return (  
    <div>  
      <button onClick={handleClick}>Toggle Menu</button>  
      {isOpen && (  
        <div ref={menuRef} className="menu">  
          <p>Menu Item 1</p>  
          <p>Menu Item 2</p>  
          <button onClick={() => setIsOpen(false)}>Close Menu</button>  
        </div>  
      )}  
    </div>  
  );  
};  

// export default ToggleMenu;  