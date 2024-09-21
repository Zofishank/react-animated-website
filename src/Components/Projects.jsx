import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react'
import { FaCircle } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
const Projects = () => {
    const cards =[useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation()]
    const handleHover= (index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd= (index)=>{
        cards[index].start({y:"100%"})
    }

  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-[300vh] bg-zinc-900 rounded-tr-3xl rounded-tl-3xl'>
        <div className="title text-[4vw] px-16 pt-24 pb-12 border-b-[1px] border-[#b2b2b2]">Featured projects</div>

        <div className="projects">

            <div className="cards relative px-10 py-10 ">

               <div className="pr_name w-full flex items-center justify-evenly ">
                   <p className="px-2 pb-4 w-1/2 uppercase text-[1vw]  font-roboto flex items-center justify-start gap-3"><span className='text-[12px]'><FaCircle /></span>Fyde</p>
                   <p className="px-3 pb-4 w-1/2 uppercase text-[1vw]  font-roboto flex items-center justify-start gap-3"><span className='text-[12px]'><FaCircle /></span>VISE</p>
              </div>

                <div className="card_container flex justify-center gap-5 "> 


                    <motion.div onHoverStart={()=>handleHover(0)} 
                    onHoverEnd={()=>handleHoverEnd(0)} className="card w-[50vw] h-[70vh] rounded-2xl  overflow-hidden " >
                        <img className='w-full h-full bg-cover' src="../images/card1.png" alt="img1" />
                        <h1 className="absolute w-[55vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-[9] -mb-10 leading-none  tracking-tighter font-abc text-[6vw] font-semibold text-[#cdeb69] uppercase overflow-hidden ">
                    {"Cardboard Spaceship".split("").map((item,index)=>{
                    return (
                        <motion.span 
                        initial={{y:"100%"}} animate={cards[0]} transition={{ease: [0.22,1,0.36,1],delay : index*.05}} className='inline-block'  >{item}</motion.span>
                    )
                    })}
              </h1>
                    </motion.div>

                    <motion.div onHoverStart={()=>handleHover(1)} 
                    onHoverEnd={()=>handleHoverEnd(1)} className="card w-[50vw] h-[70vh] rounded-2xl overflow-hidden" >
                        <img className='w-full h-full bg-cover' src="../images/card2.png" alt="img1" />
                        <h1 className="absolute w-[37vw] top-1/2 left-[50%] -translate-x-[50%] -translate-y-[50%] z-[9] -mb-10 leading-none  tracking-tighter font-abc text-[6vw] font-semibold text-[#cdeb69] uppercase overflow-hidden">
                    {"AH2 & Matt Horn".split("").map((item,index)=>{
                    return (
                        <motion.span 
                        initial={{y:"100%"}} animate={cards[1]} transition={{ease: [0.22,1,0.36,1],delay : index*.05}} className='inline-block'  >{item}</motion.span>
                    )
                    })}
               </h1>
                    </motion.div>

                    




                </div>

            </div>

            <div className="cards relative px-10 py-10  ">



                <div className="pr_name w-full flex items-center justify-evenly ">
                   <p className="px-2 pb-4 w-1/2 uppercase text-[1vw]  font-roboto flex items-center justify-start gap-3"><span className='text-[12px]'><FaCircle /></span>Fyde</p>
                   <p className="px-3 pb-4 w-1/2 uppercase text-[1vw]  font-roboto flex items-center justify-start gap-3"><span className='text-[12px]'><FaCircle /></span>VISE</p>
                </div>

                <div className="card_container flex justify-center gap-5"> 
                    <motion.div onHoverStart={()=>handleHover(2)} 
                    onHoverEnd={()=>handleHoverEnd(2)} className="card w-[50vw] h-[70vh] rounded-2xl overflow-hidden" >
                       <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="img3" />

                       <h1 className="absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-[9] -mb-10 leading-none  tracking-tighter font-abc text-[6vw] font-semibold text-[#cdeb69] uppercase overflow-hidden">
                {"FYDE".split("").map((item,index)=>{
                    return (
                        <motion.span 
                        initial={{y:"100%"}} animate={cards[2]} transition={{ease: [0.22,1,0.36,1],delay : index*.05}} className='inline-block'  >{item}</motion.span>
                    )
                })}</h1>
                   </motion.div>

                    <motion.div onHoverStart={()=>handleHover(3)} 
                    onHoverEnd={()=>handleHoverEnd(3)} className="card w-[50vw] h-[70vh] rounded-2xl overflow-hidden" >
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="img4" />

                        <h1 className="absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-[9] -mb-10 leading-none  tracking-tighter font-abc text-[6vw] font-semibold text-[#cdeb69] uppercase overflow-hidden">{"VISE".split("").map((item,index)=>{
                    return (
                        <motion.span 
                        initial={{y:"100%"}} animate={cards[3]} transition={{ease: [0.22,1,0.36,1],delay : index*.05}} className='inline-block'  >{item}</motion.span>
                    )
                })}</h1>
                    </motion.div>


</div>

            </div>


            <div className="cards relative px-10 py-10  ">

                <div className="pr_name w-full flex items-center justify-evenly ">
                     <p className="px-2 pb-4 w-1/2 uppercase text-[1vw]  font-roboto flex items-center justify-start gap-3"><span className='text-[12px]'><FaCircle /></span>Trawa</p>
                     <p className="px-3 pb-4 w-1/2 uppercase text-[1vw]  font-roboto flex items-center justify-start gap-3"><span className='text-[12px]'><FaCircle /></span>Premium Blend</p>
                </div>

                <div className="card_container flex justify-center gap-5"> 
                     <motion.div  onHoverStart={()=>handleHover(4)} 
                    onHoverEnd={()=>handleHoverEnd(4)} className="card w-[50vw] h-[70vh] rounded-2xl overflow-hidden" >
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="img5" />

                        <h1 className="absolute w-[40vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-[9] -mb-10 leading-none  tracking-tighter font-abc text-[6vw] font-semibold text-[#cdeb69] uppercase text-center overflow-hidden ">
                {"Trawa".split("").map((item,index)=>{
                    return (
                        <motion.span 
                        initial={{y:"100%"}} animate={cards[4]} transition={{ease: [0.22,1,0.36,1],delay : index*.05}} className='inline-block'  >{item}</motion.span>
                    )
                })}
                </h1>
                     </motion.div>

                <motion.div onHoverStart={()=>handleHover(5)} 
                    onHoverEnd={()=>handleHoverEnd(5)} className="card w-[50vw] h-[70vh] rounded-2xl overflow-hidden" >
                       <img className='w-full h-full bg-cover' src="../images/card6.png" alt="img6" />

                       <h1 className="absolute w-[40vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-[9] -mb-10 leading-none  tracking-tighter font-abc text-[6vw] font-semibold text-[#cdeb69] uppercase text-center overflow-hidden ">
                {"Premium Blend".split("").map((item,index)=>{
                    return (
                        <motion.span 
                        initial={{y:"100%"}} animate={cards[5]} transition={{ease: [0.22,1,0.36,1],delay : index*.05}} className='inline-block'  >{item}</motion.span>
                    )
                })}
                </h1>
               </motion.div>




</div>

            </div>

            <div className="btn_div w-full flex items-center justify-center mt-10">
            <div className="btn w-[18vw] px-3 py-2 rounded-full bg-white text-black flex items-center justify-between font-poppins text-[18px] uppercase mt-5">
              <p className='ml-4'>view all case studies</p>
              <div className="flex justify-center items-center w-12 h-12 bg-zinc-900 text-white  ml-[5px] border-zinc-400 border-[1px] rounded-full">
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

export default Projects
