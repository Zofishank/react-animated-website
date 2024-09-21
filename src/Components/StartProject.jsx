import React, { useEffect, useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const StartProject = () => {
    const [Rotate , setRotate] = useState(0);

    useEffect(() => {
      const handleMouseMove = (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
  
        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;
  
        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle - 180);
      };
  
      window.addEventListener("mousemove", handleMouseMove);
  
      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
  return (
    

<div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-screen bg-[#cdeb69] py-20 rounded-3xl'>

<h1 className='uppercase font-abc text-[11vw] leading-none text-[#212121] text-center font-bold'>Ready </h1>
<h1 className='uppercase font-abc text-[11vw] leading-none text-[#212121]  text-center font-bold'>to start </h1>
<h1 className='uppercase font-abc text-[11vw] leading-none text-[#212121]  text-center font-bold'>the project?</h1>

<div className="eyes relative flex items-center justify-center ">

<div className="circles w-1/2 h-96 absolute left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-10 ">

<div className="circle flex items-center justify-center  w-[13vw] h-[13vw] bg-[#f4f4f4] rounded-full ">
<div className="black_circle relative gap-2 w-[7vw] h-[7vw] bg-[#212121] rounded-full">
<div 
style={{ transform: `rotate(${Rotate}deg) `}} 
className="line absolute top-[42%] -translate-x-[50%] -translate-x-[50%] w-full h-5 -translate-x-[50%] -translate-y-[50%] "
>
<div className="white_ball w-[20px] h-[20px] bg-[#f4f4f4] rounded-full"></div>
</div>
</div>
</div>

<div className="circle flex items-center justify-center w-[13vw] h-[13vw] bg-[#f4f4f4] rounded-full">
<div className="black_circle relative w-[7vw] h-[7vw] bg-[#212121] rounded-full">
<div 
style={{ transform:` rotate(${Rotate}deg)` }} 
className="line absolute top-[42%] -translate-x-[50%] -translate-x-[50%] w-full h-5 -translate-x-[50%] -translate-y-[50%] "
>
<div className="white_ball w-[20px] h-[20px] bg-[#f4f4f4] rounded-full"></div>
</div>
</div>
</div>

</div>

</div>

<div className="flex items-center justify-center  mt-6">

<div className="btn  flex flex-col">


<div className="btn w-[17vw] px-2 py-2 rounded-full bg-[#212121] text-white flex items-center justify-between font-poppins text-[18px] uppercase mt-5">
    <p className='ml-4'>start the project</p>
  <div className="flex justify-center items-center w-12 h-12 bg-white text-black  ml-[5px] border-zinc-400 border-[1px] rounded-full">
  <span className="rotate-[45deg]">
  <FaArrowUpLong />
  </span>
  </div>
  </div>

  <div className=" mt-4">
      <p className='font-roboto text-[20px] text-center text-[#212121]'>OR</p>
  </div>

  <div className="btn w-[17vw] px-2 py-2 rounded-full border-2 border-[#212121] text-[#212121] flex items-center justify-between font-poppins text-[18px] uppercase mt-5">
    <p className='ml-4'>Hello@Ochi.design</p>
  <div className="flex justify-center items-center w-12 h-12 bg-white text-black  ml-[5px] border-zinc-400 border-[1px] rounded-full">
  <span className="rotate-[45deg]">
  <FaArrowUpLong />
  </span>
  </div>
  </div>

</div>

</div>

</div>
    
  )
}

export default StartProject
