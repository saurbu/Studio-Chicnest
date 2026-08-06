import React from 'react'
import { Phone, Mail, MapPin, Clock} from 'lucide-react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const ContactCard = () => {
    const contact = [
        {icon : <Phone size={20}/> ,h:  "Call Us" ,p: (<><a href="tel:+91 9560870671" className='text-[#8B4513]'>+91 9560870671</a></>)},
        {icon : <Mail size={20}/>, h: "Email Us", p: (<><a href="mailto:ds144169@gmail.com?subject=Interior Design Inquiry" className='text-[#8B4513]'>ds144169@gmail.com</a></>)},
        {icon : <MapPin size={20}/>, h: "Location", p: "New Delhi"},
        {icon : <Clock size={20}/>, h: "Working Hours", p: (<>Monday – Saturday: 10:00 AM – 6:00 PM</>)},
    ]

  return (
    <div className='py-20 '>
      <div 
      data-aos="fade-up "
      className='md:p-10 p-4 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-2xl bg-[#E9D8C7]/80'>
        <div 
        data-aos="fade-up"
        className=' leading-10 '>
          <h4 
          data-aos="fade-right"
          className='text-amber-900'>CONTACT INFORMATION</h4>
          
          <div className='flex md:flex-row flex-col gap-10 p-10 justify-between '
          data-aos="fade-up"
          >
            {contact.map((ct)=>(
                <div
                key={ct.h}
                
                >
                    <h1 className='flex gap-2 items-center text-amber-950'>{ct.icon}{ct.h}</h1>
                    <p className='text-amber-900 px-5'>{ct.p}</p>
                </div>
            ))}

          </div>

          <div
          
          >
            <h1 
            data-aos="fade-right"
            className='text-amber-900'>Get In Touch With Us</h1>
            <div className='px-20 flex justify-center md:justify-start gap-5  items-center mt-5 text-amber-950'
            data-aos="fade-up"
            >
                <a href="https://www.instagram.com/studio_chicnest/" target='_blank' className='hover:text-[#E1306C]'><FaSquareInstagram size={45}/></a>
                {/* <a href="" className='hover:text-[#1877F2]'><FaSquareFacebook size={45}/></a> */}
                {/* <a href="" className='hover:text-[#0A66C2]'><FaLinkedin size={45}/></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
