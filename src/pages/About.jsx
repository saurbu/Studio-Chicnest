import React from 'react'
import { Sparkles, Gem, ShieldCheck, HeartHandshake } from "lucide-react";
const About = () => {

  const values = [
  {
    icon: <Sparkles size={36} />,
    title: "Creativity",
    desc: "We bring fresh ideas and unique concepts to every project.",
  },
  {
    icon: <Gem size={36} />,
    title: "Quality",
    desc: "We use premium materials and pay attention to every detail.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Integrity",
    desc: "We believe in honest communication and transparent pricing.",
  },
  {
    icon: <HeartHandshake size={36} />,
    title: "Client Satisfaction",
    desc: "Your vision is our priority, and your satisfaction is our success.",
  },
];

  return (
    <div>
      {/* main */}
      <div
        className=" min-h-screen bg-cover w-full bg-center relative flex items-center justify-center "
        style={{ backgroundImage: 'url("https://ik.imagekit.io/kaptaanjii/chicnest/poster/abt.webp")'}}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover"
          >
          <source src="https://ik.imagekit.io/kaptaanjii/chicnest/AbtVideo.mp4" type="video/mp4" />
        </video>
        <div className='bg-black/30 h-full w-full absolute'></div>
        <div
          className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6"
        >

          <p
            className="uppercase tracking-[4px] text-[#F5EBDD] text-sm md:text-base font-semibold mb-4"
          >
            About Studio ChicNest
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl"
          >
            Creating Beautiful Spaces
            <br />
            <span className="text-[#F4D06F]">
              That Inspire Everyday Living
            </span>
          </h1>

          <div className="w-20 h-1 bg-[#F4D06F] rounded-full my-8"></div>

          <p
            className="max-w-3xl text-base md:text-lg lg:text-xl text-gray-200 leading-8"
          >
            At <span className="font-semibold text-white">STUDIO CHICNEST</span>, we
            believe every space has the power to tell a unique story. Our passion is
            transforming ordinary interiors into elegant, functional environments that
            perfectly reflect your personality, lifestyle, and vision.
          </p>

        </div>
      </div>

      {/* story */}
      <div
        data-aos="fade-up"
        className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF8]"
      >
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto"
        >
          <h4 className="uppercase tracking-[4px] text-[#955927] text-sm font-semibold mb-4">
            Our Story
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Who We Are
          </h2>

          <div className="w-20 h-1 bg-[#B09279] rounded-full mb-8"></div>

          <p className="text-gray-600 text-lg md:text-xl leading-9">
            <span className="font-semibold text-gray-800">
              Studio ChicNest
            </span>{" "}
            is a passionate interior design studio dedicated to creating timeless,
            elegant, and functional spaces. Whether it's a cozy home, a modern
            office, or a luxurious commercial space, our team works closely with
            every client to design interiors that truly reflect their personality
            and lifestyle.
            <br />
            <br />
            From the first consultation to the final installation, we focus on
            delivering exceptional craftsmanship, thoughtful designs, and a seamless
            experience that transforms your vision into reality.
          </p>
        </div>
      </div>

      {/* mission */}
      <div
        data-aos="fade-up"
        className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF8]"
      >
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto"
        >
          <h4 className="uppercase tracking-[4px] text-[#955927] text-sm font-semibold mb-4">
            Our Mission
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Designing Spaces That Feel Like Home
          </h2>

          <div className="w-20 h-1 bg-[#B09279] rounded-full mb-8"></div>

          <p className="text-gray-600 text-lg md:text-xl leading-9">
            Our mission is to create inspiring interiors that enhance the way people live, work, and connect. We strive to combine creativity, innovation, and practicality to deliver spaces that are both beautiful and functional.
          </p>
        </div>
      </div>

      {/* vision */}
      <div
        data-aos="fade-up"
        className="py-16 md:py-24 px-6 md:px-12 bg-[#FDFBF8]"
      >
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto"
        >
          <h4 className="uppercase tracking-[4px] text-[#955927] text-sm font-semibold mb-4">
            Our Vision
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Shaping the Future of Interior Design
          </h2>

          <div className="w-20 h-1 bg-[#B09279] rounded-full mb-8"></div>

          <p className="text-gray-600 text-lg md:text-xl leading-9">
            We envision becoming a trusted name in interior design by delivering innovative, sustainable, and personalized solutions that exceed client expectations and stand the test of time.
          </p>
        </div>
      </div>
      
      {/* values */}
      <div
        data-aos="fade-up"
        className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF8]"
      >
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto"
        >
          <h4 className="uppercase tracking-[4px] text-[#955927] text-sm font-semibold mb-4">
            Our Values
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            What Drives Us
          </h2>

          <div className="w-20 h-1 bg-[#B09279] rounded-full mb-8"></div>

          <p className="text-gray-600 text-lg md:text-xl leading-9 mb-14 max-w-4xl">
            Our values guide every project we undertake, helping us create inspiring,
            functional, and timeless interiors while building lasting relationships
            with our clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-md border border-[#EEE7DF] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-18 h-18 rounded-full bg-[#F5EBDD] flex items-center justify-center text-[#955927] mx-auto mb-6">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
