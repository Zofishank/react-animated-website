import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const TextPage = () => {
  return (

<div data-scroll data-scroll-section data-scroll-speed="-.1" className=' w-full h-[140vh] bg-[#cdeb69] text-[#21221c] l rounded-3xl'> 
    <div className="text_box h-[44vh] border-b-[1px] border-[#98b23f] pl-14 pt-24 pr-40">
        <p className='font-poppins text-[3.5vw] leading-[4vw] tracking-tighter'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds</span> , <span className='underline'>sell prod­ucts</span>, <span className='underline'>ex­plain com­plex ideas</span> and <span className='underline'>hire great peo­ple.</span></p>
    </div>

    <div className="paraDiv py-5 px-14 flex justify-between gap-20  border-b-[1px] border-[#98b23f] pb-20">
      <div className="firstpara w-[53vw] ">
      <p className='font-poppins text-[17px]'>What you can expect:</p>
      </div>
      <div className="secPara w-[25vw]">
      <p className='font-poppins text-[17px]'>
      We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
      <p className='font-poppins text-[17px] mt-10'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
      </div>
      <div className="paraLinks  w-[20vw] ml-24 mt-28">
      <p className='font-poppins text-[20px] '>S:</p>
      <a  className='font-abc text-[21px] underline'href="">Instagram</a><br/>
      <a className='font-abc text-[21px] underline' href="">Behance</a><br/>
      <a className='font-abc text-[21px] underline' href="">Facebook</a><br/>
      <a  className='font-abc text-[21px] underline'href="">Linkedin</a>
      </div>
    </div>
      
      <div className="approach px-12 py-4 flex justify-between" >
        <div className='-mt-2'>
        <h2 className="heading font-roboto text-[55px]  font-[500]">Our approach:</h2>
        <div className="btn w-[12vw] px-2 py-2 rounded-full bg-[#212121] text-white flex items-center justify-between font-poppins text-[18px] uppercase mt-5">
          <p className='ml-4'>Read more</p>
        <div className="flex justify-center items-center w-12 h-12 bg-white text-black  ml-[5px] border-zinc-400 border-[1px] rounded-full">
        <span className="rotate-[45deg]">
        <FaArrowUpLong />
        </span>
        </div>
        </div>
        </div>
        <div className="image rounded-full">
          <img className=" rounded-[1vw]"src="../images/img.jpg" alt="img" />
        </div>
      </div>
    </div>

  )
}

export default TextPage
