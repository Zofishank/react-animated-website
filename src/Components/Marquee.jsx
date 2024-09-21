import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
 <div data-scroll data-scroll-section data-scroll-speed=".1" className="bg-zinc-900">
    <div className='w-full h-[60vh] rounded-tl-3xl rounded-tr-3xl bg-[#004d43] py-28'>
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap">
        <motion.h1 initial={{x: "0"}}  animate={{x: "-100%"}} transition={{repeat : Infinity, ease:"linear",duration:"11"}} className='text-[21vw] uppercase leading-none tracking-tighter font-abc font-bold -mt-5 '>We are ochi</motion.h1>
        <motion.h1  initial={{x: "0"}}  animate={{x: "-100%"}} transition={{repeat : Infinity,ease:"linear",duration:"11"}} className='text-[21vw] pl-16 uppercase leading-none tracking-tighter font-abc font-bold -mt-5'>We are ochi </motion.h1>

      </div>
    </div>
</div>
  )
}

export default Marquee
