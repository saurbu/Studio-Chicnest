import React from "react"
import { useNavigate } from "react-router-dom"
import Chk from '/chk1h.png'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="relative bottom-0 bg-gradient-to-r from-[#F5EBDD]/80 via-[#E9D8C7]/80 to-[#B09279]/80 backgroud-blur-lg text-white">

      <div className={`max-w-6xl text-amber-950 mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8`}>

        <div 
        onClick={() => navigate("/")}
        >
          <div className="flex gap-3 cursor-pointer">
                <img src={Chk}
                  className='w-10 h-10 ' 
                  alt="" />
                  <h1 className='font-semibold leading-5 text-[#955927] hidden relative lg:block md:bl0ck'>
                    STUDIO <br />CHICNEST
                  </h1>

                  </div>
                  <p className=" mt-2">Your Dream Our Design!</p>
              </div>

        <div>
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
            <li className="hover:text-white cursor-pointer">Kitchen</li>
            <li className="hover:text-white cursor-pointer">Wardropes</li>
            <li className="hover:text-white cursor-pointer">Bed Room</li>
            <li className="hover:text-white cursor-pointer">Living Room</li>
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

          </ul>
        </div>

      </div>

      <div className="border-t border-amber-950 py-4 text-center text-amber-900 text-sm">
        © {new Date().getFullYear()} STUDIO CHICNEST. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer