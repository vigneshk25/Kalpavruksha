import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Services from "./pages/services/Services";
import Notfound from "./pages/notfound/Notfound";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
=======
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Services from './pages/services/Services';
import Notfound from './pages/notfound/Notfound';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="gallery" element={<Gallery/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
>>>>>>> b3addb9113a8a0d505870b5e54d41302400c7030

export default App;
