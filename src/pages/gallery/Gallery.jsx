import './gallery.css';
import Header from '../../components/Header.jsx';
import headerImg from '../../imgs/img1.png';
import React, { useEffect, useState } from "react";
import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleXmark,
    faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons'


const Gallery = ({galleryPhotos}) => {

  const [slideNumber , setSlideNumvber] = useState(0)
    const [openModal , setOpenModal] = useState(false)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const handleOpen =(index) =>{
        setSlideNumvber(index)
        setOpenModal(true)
    }


    const handleClose = () => {
        setOpenModal(false)
    }
    // prv imagey
    
    const handleLeft = () => {
        slideNumber === 0 ? setSlideNumvber(galleryPhotos.length -1 ) : setSlideNumvber( slideNumber -1)
    }
    // next line
    const handleRight = () => {
        slideNumber + 1 === galleryPhotos.length ? setSlideNumvber(0) : setSlideNumvber (slideNumber +1)
    }
  return (
    <>
      <Header title='Our Gallery' image={headerImg}>
      "Explore the vibrant world of Kalpavruksha Care and Rehab Services. Our gallery captures the moments of joy, connection, and well-being within our warm and inclusive community. Witness the essence of exceptional care and vibrant senior living through our captivating visual journey." 
      </Header>

      <div className="oneTwo">
            {openModal && 
                <div className="slideWrap" >
                    <FontAwesomeIcon icon={faCircleXmark}  className='btnClose' onClick={handleClose} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnLeft' onClick={handleLeft} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnRight' onClick={handleRight} />
                    <div className="fullScreen">
                        <img src={galleryPhotos[slideNumber].img} alt="" />
                    </div>
                </div>
            } 

            <div className="galleryWrap"  data-aos="fade-up" data-aos-delay="200"  data-aos-duration="5000">
                <h1  data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000">Gallery</h1>
                {
                    galleryPhotos && galleryPhotos.map((slide , index)=>{
                        return(
                            <div className="single"  data-aos="fade-up" data-aos-delay="100"  data-aos-duration="2000" key={index} onClick={()=> handleOpen(index)}>
                                <img src={slide.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Gallery