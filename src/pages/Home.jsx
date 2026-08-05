import React from 'react'
import HeroBg from "../assets/herobg1.avif"
import chk1h from '/chk1h.png'
import Hero from '../components/Hero'
import heroVideo from '../assets/homevideo.mp4'
import { MoveRight} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[#FDFBF8]'>
      <div
        className=" min-h-screen bg-cover w-full bg-center relative flex items-center justify-center "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className='bg-black/30 h-full w-full absolute'></div>
        <div
          className=" relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-5"
        >
          <div className='flex gap-2 items-center py-10'>
            <img src={chk1h} alt="" className='w-15 h-15'/>
            <h1 
          className='font-semibold  leading-5 text-[#955927] '
          >
            STUDIO <br/> CHICNEST
          </h1>
          </div>
          <p
            className="uppercase text- text-lg md:text-xl font-bold mb-4 "
          >
            Welcome to Studio ChicNest
          </p>
          <h1
            className=" text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight "
          >
            "Where Dreams
            <br />
            <span className="text-[#F4D06F]">
            Unfold in Design"
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#F4D06F] rounded-full my-8"></div>
          <p className='text-base md:text-lg lg:text-xl text-gray-200 leading-8'>Luxury interiors designed with elegance, comfort, and personality.</p>
          <div className='flex py-8'>
            <NavLink
            to={"/gallery"}
            className='flex gap-2 px-4 py-2 rounded-full cursor-pointer bg-[#F5EBDD]/70  hover:bg-amber-900 text-amber-900 hover:text-white transition-all duration-500 ease-in-out'>View Gallery <MoveRight /></NavLink>
          </div>
        </div>
      </div>
      <Hero />
      
    </div>
  )
}

export default Home