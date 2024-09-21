import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-900'>
      <div className="cards  w-[100vw] flex items-center justify-center gap-6 px-16 ">

        <div className="cards_container w-1/2 ">
            <div className="card relative flex items-center justify-center  h-[45vh] rounded-2xl bg-[#004d43]">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <div className='absolute bottom-8 left-9 px-5 py-1 border-[1px] border-[#cdeb69] rounded-full text-[1vw] text-[#cdeb69]'>&copy;2019-2022</div>
            </div>
        </div>

        <div className="cards_container w-1/4 ">
            <div className="card relative flex items-center justify-center  h-[45vh] rounded-2xl bg-[#212121]">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <div className='absolute bottom-8 left-9 px-5 py-1 border-[1px] border-[#a9a9a9] rounded-full text-[1vw] text-[#dddddd] uppercase font-semibold'>rating 5.0 on clutch</div>
            </div>
        </div>

        <div className="cards_container  w-1/4  ">
            <div className="card relative flex items-center justify-center  h-[45vh] rounded-2xl bg-[#212121]">

                <div className="img w-1/3 ">
                <img className='w-full h-full bg-cover overflow-hidden' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                </div>

            <div className='absolute bottom-8 left-9 px-5 py-1 border-[1px] border-[#a9a9a9] rounded-full text-[1vw] text-[#dddddd] uppercase font-semibold'>Business bootcamp alumni</div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Cards
