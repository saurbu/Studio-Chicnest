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

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
