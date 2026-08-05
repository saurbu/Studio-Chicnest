import { Route, Routes,  } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTop from './components/ScrollTop'
import Gallery from './pages/Gallery.jsx'
import All from './components/gallery/All'
import Kitchen from './components/gallery/Kitchen'
import Bedroom from './components/gallery/Bedroom'
import Wardrobes from './components/gallery/wardrobes'
import Living from './components/gallery/Living'
import Office from './components/gallery/Office'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='bg-[#FDFBF8] select-none'>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gallery" element={<Gallery/>}>
          <Route path="" element={<All />}/>
          <Route path="kitchen" element={<Kitchen />}/>
          <Route path="bedroom" element={<Bedroom/>}/>
          <Route path="wardrobes" element={<Wardrobes/>}/>
          <Route path="office" element={<Office />}/>
          <Route path="living-room" element={<Living/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
