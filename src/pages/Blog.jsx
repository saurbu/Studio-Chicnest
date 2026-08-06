import React, { useEffect, useState } from "react";
const Blog = () => {

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [closing, setClosing] = useState(false)
  
  const closeModal = () => {
    setClosing(true)

    setTimeout(() => {
      setSelectedBlog(null)
      setClosing(false)
    }, 300)
  }
  const blogCards = [
  {
    type: "image",
    image: "https://ik.imagekit.io/kaptaanjii/chicnest/main/bl1_result.webp?updatedAt=1786015061559",
    title: "LIVING ROOM",
  },
  {
    type: "text",
    bg: "#5bd5e5",
    title: "Living Room",
    desc: "Discover modern layouts, furniture placement, lighting techniques, and décor tips to create a welcoming living space.",
    btn: "Explore →",
  },
  {
    type: "image",
    image: "https://ik.imagekit.io/kaptaanjii/chicnest/main/bl2_result.webp?updatedAt=1786015059576",
    title: "Modern Fireplace Inspiration",
  },
  {
    type: "text",
    bg: "#d6b89b",
    title: "Modern Fireplace Inspiration",
    desc: "Warm, cozy, and luxurious fireplace designs for contemporary homes.",
    btn: "Read More →",
  },
  {
    type: "text",
    bg: "#c788c5",
    title: "Styling Guide",
    desc: "Learn how to combine colors, textures, furniture, and accessories to create beautifully balanced interiors.",
    btn: "View Guide →",
  },
  {
    type: "image",
    image: "https://ik.imagekit.io/kaptaanjii/chicnest/main/bl3_result.webp?updatedAt=1786015061717",
    title: "Styling Guide",
  },
  {
    type: "text",
    bg: "#8fc24b",
    title: "Design Trends",
    desc: "Explore smart storage, luxury finishes, and modern kitchen layouts designed for everyday living.",
    btn: "Explore →",
  },
  {
    type: "image",
    image: "https://ik.imagekit.io/kaptaanjii/chicnest/main/bl4_result.webp?updatedAt=1786015060450",
    title: "Design Trends",
  },
];

const blogs = [
  {
    id:1,
    category:"Luxury Living Room",
    title:"Living Room",
    images:[
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/living1_result.webp?updatedAt=1786015061767",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/living2_result.webp?updatedAt=1786015061721",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/living3_result.webp?updatedAt=1786015060668",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/living4_result.webp?updatedAt=1786015061610",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/living5_result.webp?updatedAt=1786015061323",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/living6_result.webp?updatedAt=1786015060471",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/living7_result.webp?updatedAt=1786015061093",
      
    ],
    shortDesc:"Discover elegant living room interiors that combine comfort, sophistication, and modern design to create a warm and inviting atmosphere.",
    content:[
      "The living room is the heart of every home—a place where family gathers, guests are welcomed, and everyday moments become lasting memories. At Studio ChicNest, we design living spaces that are both visually stunning and highly functional.",
      "Whether you prefer a contemporary, minimalist, classic, or luxury-inspired interior, we create customized living room designs that blend timeless elegance with practical functionality. Every project is tailored to suit your personality, ensuring a space that feels uniquely yours.",
      "Our approach focuses on balancing aesthetics with comfort. From carefully selected furniture and layered lighting to premium materials, textures, and color palettes, every element is thoughtfully chosen to reflect your lifestyle while maximizing the beauty of your space.",
      "We also pay close attention to space planning, natural lighting, storage solutions, and decorative details to create interiors that feel spacious, welcoming, and effortlessly stylish. Every corner is designed with purpose, making your living room as comfortable as it is beautiful."
    ]
  },
  {
    id:2,
    category:"Luxury Fireplace",
    title:"Modern Fireplace Inspiration",
    images:[
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/fire1_result.webp?updatedAt=1786015062067",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/fire2_result.webp?updatedAt=1786015061725",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/fire3_result.webp?updatedAt=1786015061062",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/fire4_result.webp?updatedAt=1786015061149",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/fire5_result.webp?updatedAt=1786015060078",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/fire6_result.webp?updatedAt=1786015060073",
    ],
    shortDesc:"Explore contemporary fireplace designs that bring warmth, elegance, and a sophisticated focal point to modern living spaces.",
    content:[
      "A beautifully designed fireplace is more than just a source of warmth—it's a statement piece that defines the character of your living space. Modern fireplaces combine clean lines, premium materials, and innovative designs to create a cozy yet luxurious atmosphere.",

      "Whether integrated into a minimalist wall, surrounded by natural stone, or paired with elegant wood finishes, today's fireplace designs seamlessly complement contemporary interiors. They add depth, texture, and a welcoming ambiance to any room.",

      "Lighting, seating arrangements, and carefully selected décor play an important role in enhancing the fireplace's visual appeal. By creating a balanced layout, the fireplace naturally becomes the focal point where family and guests gather to relax and unwind.",

      "At Studio ChicNest, we design fireplace spaces that blend functionality with timeless style. From sleek linear fireplaces to luxurious feature walls with custom shelving and ambient lighting, every detail is thoughtfully planned to reflect your personal taste.",
      ]
  },
  {
    id:3,
    category:"Rich Colors",
    title:"Styling Guide",
    images:[
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/rich1_result.webp?updatedAt=1786015061295",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/rich2_result.webp?updatedAt=1786015062022",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/rich3_result.webp?updatedAt=1786015061003",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/rich4_result.webp?updatedAt=1786015060579",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/rich5_result.webp?updatedAt=1786015061723",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/rich6_result.webp?updatedAt=1786015061765",
    ],
    shortDesc:"Learn how rich colors, luxurious textures, and thoughtful styling choices can transform ordinary interiors into elegant, timeless spaces.",
    content:[
      "Color is one of the most powerful elements of interior design. Rich shades such as emerald green, deep navy, charcoal gray, burgundy, and warm earthy tones instantly add depth, sophistication, and personality to any room while creating a welcoming atmosphere.",

      "A well-styled interior is about achieving the perfect balance between colors, textures, furniture, and decorative accents. Layering materials like velvet, marble, wood, glass, and metal creates visual interest and gives your home a refined, luxurious feel without overwhelming the space.",

      "Lighting plays an equally important role in enhancing rich color palettes. Warm ambient lighting, statement pendant lights, and accent fixtures help highlight textures and create a cozy environment that feels both elegant and comfortable throughout the day.",

      "Accessories such as artwork, decorative cushions, rugs, curtains, indoor plants, and carefully selected décor pieces complete the overall look. These finishing touches bring harmony to the space while reflecting your personal style and lifestyle.",
    ]
  },
  {
    id:4,
    category:"Trending",
    title:"Design Trends",
    images:[
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/trend1_result.webp?updatedAt=1786015061944",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/trend2_result.webp?updatedAt=1786015061062",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/trend3_result.webp?updatedAt=1786015061544",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/trend4_result.webp?updatedAt=1786015061649",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/trend5_result.webp?updatedAt=1786015061556",
      "https://ik.imagekit.io/kaptaanjii/chicnest/main/trend6_result.webp?updatedAt=1786015061185",
    ],
    shortDesc:"Discover the latest kitchen and bedroom design trends that combine elegance, comfort, and functionality to create stylish, modern living spaces.",
    content:[
      "Modern kitchens are becoming cleaner, brighter, and more functional with handleless cabinets, natural stone countertops, smart storage solutions, and warm neutral color palettes. These designs maximize space while creating an inviting atmosphere for everyday living.",

      "Bedroom interiors now focus on comfort and relaxation through soft textures, layered lighting, upholstered headboards, wooden finishes, and calming earth-tone colors. Every element is carefully selected to create a peaceful retreat that promotes rest and well-being.",

      "At Studio ChicNest, we combine contemporary trends with timeless design principles to create kitchens and bedrooms that remain beautiful for years. Our personalized approach ensures every space reflects your lifestyle while balancing luxury, practicality, and lasting quality."
      ]
  },
]

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedBlog.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedBlog.images.length - 1 : prev - 1
    )
  }

  useEffect(() => {
      if (selectedBlog) {
          document.body.style.overflow = "hidden"
      } else {
          document.body.style.overflow = "auto"
      }

      return () => {
          document.body.style.overflow = "auto"
      };
  }, [selectedBlog])

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: 'url("https://ik.imagekit.io/kaptaanjii/chicnest/poster/blog.webp?updatedAt=1786017129804")'}}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://ik.imagekit.io/kaptaanjii/chicnest/BlogVideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <p className="uppercase tracking-[4px] text-[#F5EBDD] font-semibold mb-4">
            Our Blogs
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Design Ideas,
            <br />
            <span className="text-[#F4D06F]">
              Trends & Inspiration
            </span>
          </h1>

          <div className="w-20 h-1 bg-[#F4D06F] mx-auto rounded-full my-8"></div>

          <p className="text-lg md:text-xl text-gray-200 leading-8">
            Discover expert tips, creative ideas, and the <span className="font-semibold text-white">latest trends</span> in
            interior design to help you create beautiful and functional spaces
            you'll love.
          </p>
        </div>
      </section>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1 p-1">
        {blogCards.map((card, index) =>
          card.type === "image" ? (
            <div
              key={index}
              className="relative min-h-[400px] bg-cover bg-center"
            >
              <img
                src={card.image}
                loading="lazy"
                
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition duration-500"></div>
            </div>
          ) : (
            <div
              key={index}
              className="relative min-h-[400px]"
              style={{ backgroundColor: card.bg }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F8F5F0]">
                  {card.title}
                </h2>

                <p className="mt-4 text-[#E8E2D8] leading-7">
                  {card.desc}
                </p>

                <button 
                onClick={() => {
                  const blog = blogs.find(item => item.title === card.title)
                  setSelectedBlog(blog)
                  setCurrentImage(0)
                }}
                className="mt-6 text-[#F2C377] font-semibold hover:tracking-wider cursor-pointer transition-all duration-300">
                  {card.btn}
                </button>
              </div>
            </div>
          )
        )}
      </section>


      {selectedBlog && (
        <div 
        onClick={closeModal}
        data-aos="fade-up"
        className={`fixed inset-0 z-50 flex items-center justify-center p-5 transition-all duration-300
          ${
            closing
              ? "opacity-0 scale-95"
              : "opacity-100 scale-100"
          }`}>

          <div className="relative bg-white rounded-3xl w-full max-w-6xl h-[85vh] overflow-hidden"
           onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className={`absolute right-5 top-5 text-xl border py-2 px-3.5  bg-white/60 border-gray-400 rounded-full cursor-pointer hidden md:block transition-transform duration-300 
                ${closing ? "rotate-90" : "rotate-0"}`}
              >✕</button>

            <div className="grid md:grid-cols-2 h-full">
              <div className="relative h-[350px] md:h-[85vh] bg-gray-200 overflow-hidden">

                {selectedBlog.images.length > 0 ? (
                  <img
                    src={selectedBlog.images[currentImage]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                {selectedBlog.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg text-xl"
                    >
                      ◀
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg text-xl"
                    >
                      ▶
                    </button>
                  </>
                )}

              </div>
              <div className="overflow-y-auto p-10 scrollbar-none bg-[#F5EBDD]/60">

                <span className="uppercase tracking-widest text-[#955927] font-semibold">
                  {selectedBlog.category}
                </span>

                <h1 className="text-5xl font-bold mt-4">
                  {selectedBlog.title}
                </h1>

                <p className="text-gray-600 mt-5 text-lg">
                  {selectedBlog.shortDesc}
                </p>

                <div className="w-20 h-1 bg-[#B09279] my-6 rounded-full"></div>

                {selectedBlog.content.map((para, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-8 mb-5"
                  >
                    {para}
                  </p>
                ))}

              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Blog;