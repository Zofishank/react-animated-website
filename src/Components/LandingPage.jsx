import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function Landingpage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.8" className="w-full h-screen bg-zinc-900 pt-1">
      <div className='textStructure mt-44 px-20'>
      {["We Create", "Eye Opening", "Presentations"].map((item,index)=>{    return (
                <div className="masker">
                    <div className="w-fit flex ">
                      {index=== 1 && 
                      (<motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className="w-[9vw] flex items-center justify-center bg-[#004d43] repeat-none h-[5.7vw] mr-3 relative top-[12px]  rounded-[7px]">
                        <motion.h1  initial={{width: 0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='font-poppins text-[25px] text-center text-[#cdeb69]' >ochi</motion.h1>
                      </motion.div>)}
                      <h1 className='uppercase text-[7vw] leading-[6.6vw]       tracking-tighter font-medium font-abc'>{item}</h1>
                   </div>
               </div>
      )
                
            })}
      </div>
      <div className="flex justify-between items-center py-5 px-20 border-t-[1px] border-zinc-700 mt-48">
        {["for public and private companies", "From the first pitch to IPO"].map((item,index)=>{
            return(
               <p classname="text-md font-light tracking-tight leading-none">{item}</p>
            )
        })}
              <div className="start flex justify-center items-center">
        <div className="px-4 py-1 border-[1px] font-lighter text-[17px] uppercase border-zinc-500 rounded-full">Start the project</div>
        <div className="flex justify-center items-center w-9 h-9  ml-[5px] border-zinc-400 border-[1px] rounded-full">
        <span className="rotate-[45deg]">
        <FaArrowUpLong />
        </span>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Landingpage
