import React, { useEffect, useState } from 'react'
import { DiVim } from 'react-icons/di';

const AnimatedVideo = () => {

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
    <div className='w-full h-screen overflow-hidden '>

      <div className="bg_image relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">

  <div className="circles w-1/2 h-96 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-10 ">

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



    </div>
  );
}

export default AnimatedVideo;