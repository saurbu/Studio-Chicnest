import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Chk from '/chk1h.png'


const Navbar = () => {

  const navigate = useNavigate()
  const [menuOpen, setMenuOpen]=useState(false)

  const navs = [
    {name:"Home", path: "/"},
    {name:"About", path: "/about"},
    {name:"Blog", path: "/blog"},
    {name:"Contact", path: "/contact"},
  ]
  const navClass = ({ isActive }) =>
    `transition-all duration-400 font-semibold ${
      isActive
      ? "text-amber-950 border-b-2 border-amber-950 text-[19px]"
      : "hover:text-amber-950 hover:border-b-2 text-white hover:border-amber-950"
    }`

  const closeMenu = ()=>{
    setMenuOpen(false)
  }

  const goToCategory = (nav) => {
    navigate(nav.path)
    closeMenu()
    window.scrollTo(0,0)
  }

  useEffect(() => {

    const handleScroll = () => {
      setMenuOpen(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <div className="fixed top-2 left-0 w-full flex justify-center  z-50 ">
      <div
        className=" w-[90%]  h-20 pc  rounded-full  flex  items-center  justify-between   px-5 md:px-10 lg:px-20 bg-gradient-to-r  from-[#F5EBDD]/60  via-[#E9D8C7]/60  to-[#B09279]/60 backdrop-blur-md relative "
      >

        <div 
        className='flex gap-3 cursor-pointer'
        onClick={() => navigate("/")}
        >
          <img 
          src={Chk}
          className='w-10 h-10'
          alt=""
          />
          <h1 
          className='font-semibold leading-5 text-[#955927] '
          >
            STUDIO <br/> CHICNEST
          </h1>
        </div>

        <div className='flex gap-3 items-center'>
          <div className='hidden lg:flex gap-10'>
          {
            navs.map((nav)=>(
              <NavLink
              to={nav.path}
              key={nav.path}
              className={navClass}
              >
                {nav.name}
              </NavLink>
            ))
          }

          </div>
          <NavLink
          to="/contact"
          className=" text-[13px] border-2 p-1 px-3 ml-2 bg-amber-950  text-white  hover:bg-white  hover:text-amber-950 whitespace-nowrap transition-all duration-500"
          >
            <span className="hidden md:block">
              BOOK FREE CONSULTATION
            </span>
            <span className="block text-[10px] md:hidden">
              CONSULTATION
            </span>
          </NavLink>

          <button 
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {
          menuOpen && (

            <div
            className=" absolute top-24 right-0 w-52  bg-amber-950 rounded-xl p-5 flex flex-col gap-5 "
            >
            {
              navs.map((nav)=>(
                <NavLink
                key={nav.path}
                to={nav.path}
                onClick={()=>goToCategory(nav)}
                className=" text-white font-semibold "
                >
                  {nav.name}
                </NavLink>
              ))
            }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar