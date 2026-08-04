import React from 'react'
import HeroBg from "../assets/herobg1.avif"
import chk1h from '/chk1h.png'
import Hero from '../components/Hero'
import heroVideo from '../assets/herovideo.mp4'
import { MoveRight} from 'lucide-react'

const Home = () => {
  return (
    <div>
      <div
        className=" min-h-screen bg-cover w-full bg-center relative flex items-center justify-center "
        // style={{ backgroundImage: `url(${heroVideo})` }}
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
            className=" text- text-lg md:text-xl font-bold mb-4 "
          >
            Welcome to Studio ChicNest
          </p>
          <h1
            className=" text-yellow-300 text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight "
          >
            "Where Dreams
            <br />
            Unfold in Design"
          </h1>

          <p className='font-[600] text-white'>Luxury interiors designed with elegance, comfort, and personality.</p>
          <div className='flex py-8'>
            <button className='flex gap-2 px-4 py-2 rounded-full cursor-pointer bg-[#F5EBDD]/70  hover:bg-amber-900 text-amber-900 hover:text-white transition-all duration-500 ease-in-out'>View Galary <MoveRight /></button>
          </div>
        </div>
      </div>
      <Hero />
      
    </div>
  )
}

export default Home