import React, { useEffect, useState } from 'react'
import galleryData from '../../data/gallery'
const Bedroom = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [closing, setClosing] = useState(false)
  const Bedroom = galleryData.filter(
    (item) => item.category === "Bedroom" 
  )
    
    const closeModal = () => {
      setClosing(true)
  
      setTimeout(() => {
        setSelectedImage(null)
        setClosing(false)
      }, 300)
    }
    useEffect(()=>{
      if(selectedImage){
        document.body.style.overflow = "hidden"
      } else{
        document.body.style.overflow = "auto"
      }
      return ()=>{
        document.body.style.overflow = "auto"
      }
    })
  return (
    <div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 px-6 md:px-12 lg:px-20 py-10 space-y-6">
        {Bedroom.map((item) => (
          <div
          onClick={()=>setSelectedImage(item)}  
          key={item.id}
            className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-108 transition-transform duration-500"
            />
            <div className='bg-black/10 relative'></div>
            <div className="p-4 pt-7 bg-white">
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div> 
          </div>
        ))}
      </div>
      {
        selectedImage && (
          <div 
          data-aos="fade-up"
          className={`fixed inset-0 z-50 flex items-center justify-center p-5 transition-all duration-300
            ${
              closing
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
            }`}>
            <div 
            onClick={(e) => e.stopPropagation()}
            className='relative bg-white lg:max-w-6xl h-auto max-h-[85vh] overflow-y-auto scrollbar-none overflow-hidden rounded-2xl'>
              <button
              onClick={closeModal}
              className={`absolute right-5 top-5 text-xl border py-2 px-3.5  bg-white/60 border-gray-400 rounded-full cursor-pointer hidden md:block transition-transform duration-300 
                ${closing ? "rotate-90" : "rotate-0"}`}
              >✕</button>

              <div className='flex flex-col lg:flex-row'>
                <div className='relative bg-gray-200 overflow-hidden'>
                    <img src={selectedImage.image} 
                    loading='lazy'
                    className=' max-h-[90vh] md:max-w-[70vw] w-auto h-auto object-contain hover:scale-110 transition-all duration-700'
                    alt={selectedImage.category} />
                </div>

                <div className='w-full lg:w-[420px] p-10 overflow-y-auto flex flex-col justify-center bg-[#F5EBDD]'>
                  <span className="uppercase tracking-widest text-[#955927] font-semibold">
                    {selectedImage.category}
                  </span>
                  <h1 className='md:text-4xl text-2xl font-bold mt-4'>
                    {selectedImage.title}
                  </h1>

                  <p className='text-gray-400 mt-5'>
                    {selectedImage.desc}
                  </p>

                </div>

              </div>

            </div>
            
          </div>
        )
      }
    </div>
  )
}

export default Bedroom
