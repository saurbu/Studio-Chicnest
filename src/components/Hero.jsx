import React from 'react'
import { NavLink } from 'react-router-dom'
import { MoveRight, Star} from 'lucide-react'
import Resi from '../assets/resi.jpg'
import Comi from '../assets/comi.jpg'
import Ferni from '../assets/ferni.jpg'
import Plan from '../assets/plan.jpg'
import Fp1 from "../assets/fp1.jpg"
import Fp2 from "../assets/fp2.jpg"
import Fp3 from "../assets/fp3.jpg"
import Fp4 from "../assets/fp4.jpg"
import offVideo from '../assets/offvideo.mp4'
import ContactCard from './ContactCard'
import Questions from './Questions'

const Hero = () => {

  const service = [
    { img: Resi, name: "Residential Interior Design" , description: "Transform your home into a stylish, comfortable, and functional living space tailored to your lifestyle."},
    { img: Comi, name: "Commercial Interiors" , description: "Professional interior solutions that enhance productivity, customer experience, and brand identity."},
    { img: Ferni, name: "Furniture & Decor" , description: "Custom-crafted furniture and décor elements that add personality and elegance to every space."},
    { img: Plan, name: "Space Planning" , description: "Smart space planning that maximizes functionality while maintaining aesthetics and comfort."},

  ]
  const review = [
    {msg: "The team completely transformed our living room into a warm and elegant space. Every detail was thoughtfully planned, and the final result exceeded our expectations.", name: "Priya Sharma", client: "Homeowner"},
    {msg: "From the initial consultation to the final installation, the entire process was seamless. Their creativity and attention to detail made our dream home a reality.", name: "Rahul Verma", client: "Villa Owner"},
    {msg: "They perfectly balanced style and functionality in our office redesign. The new workspace has significantly improved both productivity and client impressions.", name: "Aman Gupta", client: "Business Owner"},
  ]
  return (

    <div className='flex flex-col justify-center py-15 md:px-25 px-15'>

      {/* service */}
      <div className='py-20 '>
        <div 
        data-aos="fade-up"
        className=' leading-10 '>
          <h4 className='uppercase tracking-[4px] text-[#955927] text-sm font-semibold mb-2'>SERVICES</h4>
          <h3 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4'>Transforming Spaces <br /> Into Beautiful Experiences</h3>
          <p className='text-gray-600 w-[60%] leading-6'>We design interiors that blend style, comfort, and functionality to bring your vision to life.</p>
          <div className="w-20 h-1 bg-[#B09279] rounded-full mt-5"></div>
        </div>
        <div className="grid md:grid-cols-2 w-full max-w-[350px] md:max-w-full mx-auto mt-10 gap-10">
          {service.map((srv) => (
            <div
              key={srv.name}
              data-aos="fade-in"
              className="rounded-xl overflow-hidden flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.4)] group bg-[#F5EBDD]/20"
            >
              <div className="overflow-hidden md:h-[360px] h-[200px]">
                <img
                  src={srv.img}
                  loading="lazy"
                  alt={srv.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="px-5 py-4">
                <h2 className="text-xl text-zinc-800 py-2">{srv.name}</h2>

                <p className="text-zinc-600">{srv.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* feature */}
      <div 
      data-aos="fade-up"
      className='py-20'>
        <div 
        data-aos="fade-up"
        className=' leading-10 md:flex'>
          <div>
            <h4 className='uppercase tracking-[4px] text-[#955927] text-sm font-semibold mb-2'>FEATURED PROJECTS</h4>
            <h3 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4'>Inspired Interiors, <br /> Lasting Impressions</h3>
            <p className='text-gray-600 w-[60%] leading-6'>We create thoughtfully designed interiors that combine elegance, comfort, and functionality, turning everyday spaces into timeless living experiences.</p>
            <div className="w-20 h-1 bg-[#B09279] rounded-full mt-5"></div>
          </div>
          <div className='flex items-end'>

          <NavLink
          to={"/gallery"}
          className='flex gap-2 hover:text-red-400 items-center hover:pl-3 transation-transform duration-200 cursor-pointer'>Explore Galary<MoveRight /></NavLink>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col gap-7 mt-10"
        >
          <div className="flex flex-col md:flex-row gap-7">
            <div className="w-full md:w-2/3 h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer"
            data-aos="fade-up"
            >
              <img
                src={Fp1}
                loading="lazy"
                alt="Living Room"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20"></div>

              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-semibold">
                    Living Room
                  </h3>
                  <p className="text-white/80">Modern Interior</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer"
            data-aos="fade-up"
            >
              <img
                src={Fp2}
                loading="lazy"
                alt="Bedroom"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-semibold">
                    Bedroom
                  </h3>
                  <p className="text-white/80">Luxury Design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-7">
            <div className="w-full md:w-1/3 h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer"
            data-aos="fade-up"
            >
              <img
                src={Fp3}
                loading="lazy"
                alt="Kitchen"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-semibold">
                    Kitchen
                  </h3>
                  <p className="text-white/80">Elegant Style</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer"
            data-aos="fade-up"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                // style={{ backgroundImage: `url(${Fp4})` }}
              />
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={offVideo} type="video/mp4" />
                </video>
                <div className='bg-black/30 h-full w-full absolute'></div>
              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-semibold">
                    Office Space
                  </h3>
                  <p className="text-white/80">Modern Workspace</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div 
      data-aos="fade-up"
      className='py-20'>
        <div 
        data-aos="fade-up"
        className=' leading-10 '>
          <h4 className='uppercase tracking-[4px] text-[#955927] text-sm font-semibold mb-2'>TESTIMONIALS</h4>
          <h3 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4'>What Our Clients <br /> Say About Us</h3>
          <p className='text-gray-600 w-[60%] leading-6 mt-2'>Hear from homeowners and businesses who trusted us to transform their spaces with thoughtful design and exceptional craftsmanship.</p>
          <div className="w-20 h-1 bg-[#B09279] rounded-full mt-5"></div>
          <div className='flex md:flex-row flex-col gap-10 p-10 '>
            {review.map((crd)=>(
              <div 
              key={crd.name}
              data-aos="fade-up"
              className='flex flex-col gap-3 px-4 shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-700 rounded-2xl py-5 md:w-1/3 bg-[#F5EBDD]/20'>
                <div className="flex gap-1 ">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className='leading-6 text-zinc-700'>"{crd.msg}"</p>
                <div>

                  <h2 className='text-xl'>— {crd.name}</h2>
                  <p className='text-gray-500 '>{crd.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      

      {/* questions */}
      <Questions />

      {/* contact card */}
      <ContactCard />
    </div>
  )
}

export default Hero
