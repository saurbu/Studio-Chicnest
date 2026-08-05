import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const quest = [
  {
    qs: "How do I book a consultation?",
    ans: "Simply fill out the contact form or call us directly to schedule your appointment.",
  },
  {
    qs: "Do you provide 3D design previews?",
    ans: "Yes, we create realistic 3D visualizations before project execution.",
  },
  {
    qs: "Can you work within my budget?",
    ans: "Absolutely! We customize designs to match your budget and requirements.",
  },
  {
    qs: "Do you handle complete project execution?",
    ans: "Yes, we manage everything from design planning to installation and finishing.",
  },
  
]

const Questions = () => {
  return (
    <section className=" overflow-hidden my-15">
      <h4 
          data-aos="fade-right"
          className='uppercase tracking-[4px] text-[#955927] text-sm font-semibold mb-4'>FREQUENTLY ASKED QUESTIONS</h4>
        <div className="w-20 h-1 bg-[#B09279] rounded-full mt-5"></div>
      <div className="max-w-7xl mx-auto px-4 py-10">
      
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
        >
          {quest.map((qes, index) => (
            <SwiperSlide key={index}
            className="flex justify-center"
            >
              <div className="bg-[#E9D8C7]/60 rounded-3xl m-5 p-6  shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 w-[90%] md:h-fit h-55 md:w-[70%] mx-auto ">

                <div className="flex flex-col items-center justify-start h-20 md:leading-8.5">

                  <div>
                    <h3 className="font-bold text-amber-950 text-xl">
                      {qes.qs}
                    </h3>

                    <p className="text-md text-amber-900">
                      {qes.ans}
                    </p>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  )
}

export default Questions