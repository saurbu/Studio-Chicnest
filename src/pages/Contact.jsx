import { useState } from 'react'
import cntVideo from '../assets/cntVideo.mp4'
import ContactCard from '../components/ContactCard'

const Contact =   () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = async (e)=>{
    e.preventDefault()

    const formData = new FormData(e.target) 
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept:"application/json" 
      },
      body: json
    })

    const result = await response.json()

    if(result.success){
      setSubmitted(true)
      e.target.reset()
    }
    setTimeout(() => {
      setSubmitted(false)
    }, 2000);
  }
  return (
    <div 
    >
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
          <source src={cntVideo} type="video/mp4" />
        </video>
        <div className='bg-black/40 h-full w-full absolute'></div>
        <div
          className=" relative z-10 h-full grid lg:grid-cols-2 text-white px-5"
        >
          <div className='mt-25 px-10 leading-10'>
            <p className='uppercase tracking-[4px] text-[#F5EBDD] text-sm md:text-base font-semibold mb-4'>CONTACT</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl"
            >
              Let's Create Your Dream
              <br />
              <span className="text-[#F4D06F]">
                Space Together
              </span>
            </h1>
            <div className="w-20 h-1 bg-[#F4D06F] rounded-full my-8"></div>
            <p className='text-base md:text-lg lg:text-xl text-gray-200 leading-8 '>Whether you're <span className="font-semibold text-white">planning</span> a home makeover, office renovation, or a complete interior transformation, our team is here to turn your vision into reality. Just leave a Message.</p>
          </div>

          <div 
          className={`bg-black/40 md:m-20 lg:h-[570px] my-15 p-5 rounded-2xl text-center ${
            submitted ? "flex items-center justify-center" : "space-y-5"
          }`}
          >
            {submitted ? (
              <div className='flex flex-col items-center'>
                <h2 className="text-4xl text-green-400 font-bold ">
                  Thank You!
                </h2>

                <p className="mt-4 text-white">
                  Your message has been sent successfully.
                </p>

                <p className="text-gray-300 mt-2">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ): (
              <form
              onSubmit={handleSubmit}
              className='space-y-5'
              >
                <h2 className='text-3xl'>Send Us a Message</h2>
                <p>Tell us about your project, and we'll get back to you within 24 hours.</p>
                
                <input
                  type="hidden"
                  name="access_key"
                  value="89ff3379-8ca9-41e2-a6f1-bb1b0bfb20bb"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Contact Request Studio Chicnest"
                />

                <input
                  type="hidden"
                  name="from_name"
                  value="STUDIO CHICNEST"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border p-3 rounded w-full"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border p-3 rounded w-full"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="border p-3 rounded w-full"
                />

                <textarea
                  name="message"
                  placeholder="Project Details..."
                  rows="5"
                  required
                  className="border p-3 rounded w-full"
                />

                <button
                  type="submit"
                  className="hover:bg-black hover:text-white cursor-pointer px-6 py-3 rounded transition-all duration-600 bg-white text-black"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
      
      <div className='py-20 md:px-25 px-15'>

        <ContactCard />
      </div>
    </div>
  )
}

export default Contact
