import React, { useState } from 'react'
import searchIcon from '../../images/search.png'
import ProfilesPictures from '../../utilities/profilesPictures';
import { IoMdClose } from 'react-icons/io';
import { FaArrowLeft } from "react-icons/fa6";

const SearchContainer = () => {
    const [openSearchContainer,setOpenSearchContainer] = useState(true)
  return (
    <div className='w-[300px]'>
        <div className='flex items-center gap-[8px] bg-white z-10'>            
            <FaArrowLeft
                className={`text-[#656768] cursor-pointer`}
                sx={{ display: `${openSearchContainer ? "none" : "block"}` }}
                onClick={()=>{setOpenSearchContainer(false)}}
            />
            <div className="searchContainer bg-[#f0f2f5] flex gap-[5px]  w-[252px] p-[10px] rounded-full">
                <input
                type="text"
                placeholder="Facebook Search"
                className="bg-transparent border-none outline-none text-[#65676B]"
                />
            </div>
        </div>
        <div
            className={`search_result_container w-[100%] h-fit p-[10px] bg-white ${
                openSearchContainer ? "hidden":"block" 
            }`}
            >

            <div className="flex gap-1 items-center my-[10px] pb-1 border-b border-[#f1f1f1]">
                <img width={20} src={searchIcon} alt="" />
                <p className="text-[20px] text-[#050505]">recent</p>
            </div>
            <div>
                {
                ProfilesPictures.map((e)=>{
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
  
  )
}

export default SearchContainer