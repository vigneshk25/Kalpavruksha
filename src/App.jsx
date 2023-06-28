import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Services from './pages/services/Services';
import Notfound from './pages/notfound/Notfound';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const App = () => {

    
  

    
        const galleryPhotos = [
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/land%20page%20image%201.jpg?alt=media&token=093ae4b6-e887-4f5f-9476-86a47458ea7f"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0016.jpg?alt=media&token=7e94d640-91a3-4ddb-b294-98fcbac8824a"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0047.jpg?alt=media&token=9e743c5b-83f9-4234-91ba-9cfd7e5e82a1"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0051.jpg?alt=media&token=54ea8157-b116-4e15-92d6-2b4b0cbdee6d"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0058.jpg?alt=media&token=b4cc045a-cea4-46f3-9f3d-7300e07ae691"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0060.jpg?alt=media&token=53320e7c-6af9-44f6-b00b-99c4c26eb78a"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0062.jpg?alt=media&token=047c8c97-fac5-493d-ac5f-22445aa28ae4"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0071.jpg?alt=media&token=ef55deab-53d1-46fa-b43b-703a0e431b38"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0072.jpg?alt=media&token=a2530fe2-6906-4f1e-9c44-c035d0db8e90"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0084.jpg?alt=media&token=9ab82bfc-ec31-4e38-86b8-a0631cb7a63d"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0086.jpg?alt=media&token=5de426bf-cc97-45bb-8e00-f553670c728d"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0096.jpg?alt=media&token=99bd6159-c7b9-4a04-bb7c-39306fce8295"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0137.jpg?alt=media&token=8b74e055-6d99-4b26-a789-1afc18164c0a"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0150.jpg?alt=media&token=d080f073-4d6f-40c8-bfdd-4da1c50d4342"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0158.jpg?alt=media&token=98e5a707-1678-43bf-9f7e-d4974395b9c7"},
                {img:"https://firebasestorage.googleapis.com/v0/b/kalpavruksha-9c31b.appspot.com/o/DSC_0161.jpg?alt=media&token=2880adfe-9057-4e79-9bc1-61ec8df1c978"},
                

    ];
    return (

        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="gallery" element={<Gallery galleryPhotos={galleryPhotos}/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}

export default App;
