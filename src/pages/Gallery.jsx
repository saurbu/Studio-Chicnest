import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Gallery = () => {

  const gallery = [
    {name:"All", path: "/gallery"},
    {name:"Kitchen", path: "/gallery/kitchen"},
    {name:"Bedroom", path: "/gallery/bedroom"},
    {name:"Wardrobes", path: "/gallery/wardrobes"},
    {name:"Office", path: "/gallery/office"},
    {name:"Living Room", path: "/gallery/living-room"},
  ]


  const navcls = ({ isActive }) => 
    ` border-1 border-amber-800 px-3 py-2 text-center rounded-full shadow-[0_0_5px_rgba(0,0,0,0.2)] ${
      isActive 
      ? "bg-amber-800  text-white "
      : "bg-amber-50"
    }`
  return (
    <div>
      <div
        className=" min-h-screen bg-cover w-full bg-center relative flex items-center justify-center "
        style={{ backgroundImage: 'url("https://ik.imagekit.io/kaptaanjii/chicnest/poster/gal.webp?updatedAt=1786017129724")'}}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover"
          >
          <source src="https://ik.imagekit.io/kaptaanjii/chicnest/GalleryVideo.mp4" type="video/mp4" />
        </video>
        <div className='bg-black/30 h-full w-full absolute'></div>
        <div
          className=" relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-5"
        >
          <p
            className="uppercase text- text-lg md:text-xl font-bold mb-4 "
          >
            Our Gallery
          </p>
          <h1
            className=" text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight "
          >
            Explore Our
            <br />
            <span className="text-[#F4D06F]">
            Design Portfolio
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#F4D06F] rounded-full my-8"></div>
          <p className='max-w-3xl text-base md:text-lg lg:text-xl text-gray-200 leading-8'>Step inside our collection of thoughtfully <span className="font-semibold text-white">designed interiors</span>, featuring elegant living rooms, modern kitchens, luxurious bedrooms, stylish workspaces, and timeless décor that inspire every lifestyle.</p>

        </div>
      </div>

      <div>
        <div className='flex flex-wrap px-15 md:px-25 py-10 gap-2'>
          {
            gallery.map((nav)=>(
              <NavLink
              to={nav.path}
              key={nav.path}
              end={nav.path === "/gallery"}
              className={navcls}
              >
                {nav.name}
              </NavLink>
            ))
          }
          
          </div>

          <div>
            <Outlet />
            
          </div>
      </div>
    </div>
  )
}

export default Gallery
