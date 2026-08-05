import React from "react"
import { useNavigate } from "react-router-dom"
import Chk from '/chk1h.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="relative bottom-0  bg-gradient-to-r from-[#F5EBDD]/80 via-[#E9D8C7]/80 to-[#B09279]/80 backgroud-blur-lg text-white">

      <div className={`max-w-6xl text-amber-950 lg:mx-auto mx-15 px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-18`}>

        <div 
        onClick={() => navigate("/")}
        >
          <div className="flex flex-wrap gap-3 cursor-pointer">
                <img src={Chk}
                  className='w-10 h-10 ' 
                  alt="" />
                  <h1 className='font-semibold leading-5 text-[#955927] hidden relative lg:block md:bl0ck'>
                    STUDIO <br />CHICNEST
                  </h1>

                  </div>
                  <p className=" mt-2">Your Dream Our Design!</p>
              </div>

        <div className="">
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-amber-800 font-semibold w-fit">
            <li onClick={() => navigate("/")} className="cursor-pointer hover:text-white">Home</li>
            <li onClick={() => navigate("/about")} className="cursor-pointer hover:text-white">About</li>
            <li onClick={() => navigate("/blog")} className="cursor-pointer hover:text-white">Blog</li>
            <li onClick={() => navigate("/contact")} className="cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className=" mb-3 font-bold">Top Categories</h3>
          <ul className="space-y-2 text-sm text-amber-800 font-semibold w-fit">
            <li onClick={() => navigate("/gallery/kitchen")} className="hover:text-white cursor-pointer">Kitchen</li>
            <li onClick={() => navigate("/gallery/wardrobes")} className="hover:text-white cursor-pointer">Wardropes</li>
            <li onClick={() => navigate("/gallery/Bedroom")} className="hover:text-white cursor-pointer">Bedroom</li>
            <li onClick={() => navigate("/gallery/living-room")} className="hover:text-white cursor-pointer">Living Room</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-amber-800">
            <li 
            className="hover:text-white cursor-pointer font-semibold" 
            onClick={() => navigate("/contact")}
            type="email"
            >Contact Us</li>
            <div className='px-5 flex  md:justify-start gap-2  items-center mt-5 text-amber-950'
            data-aos="fade-up"
            >
                <a href="" className='hover:text-[#E1306C]'><FaSquareInstagram size={35}/></a>
                <a href="" className='hover:text-[#1877F2]'><FaSquareFacebook size={35}/></a>
                <a href="" className='hover:text-[#0A66C2]'><FaLinkedin size={35}/></a>
            </div>

          </ul>
        </div>

      </div>

      <div className="border-t flex justify-center gap-10 px-5 border-amber-950 items-center py-4 text-center text-amber-900 text-sm">
        © {new Date().getFullYear()} STUDIO CHICNEST. All rights reserved.
        <p>||</p>
        <p>Design and Developed by <a href="https://saurbu.vercel.app/" 
        className="text-red-500 text-xl" 
        target="_blank"
        >"saurbu"</a></p>
      </div>

    </footer>
  )
}

export default Footer