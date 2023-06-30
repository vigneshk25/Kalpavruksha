import React,{useEffect} from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import MainHeader from '../../components/MainHeader';
import img1 from '../../imgs/img1.png'
import GetinTouch from "./GetinTouch";
import help from '../../imgs/help 1.png';
import hosp from '../../imgs/hospice 1.png';
import hospit from '../../imgs/hospital 1.png';
import rebha from '../../imgs/rehabilitation 1.png';
import med from '../../imgs/medical-equipment-with-heart-symbol 1.png';
import med1 from '../../imgs/medicine 1.png';
import twofour from '../../imgs/24-7.png';




const Home = () => {

    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  return (
    <>
      <MainHeader />

      {/* program section */}
      <div className='whyKV' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="3000">
          <div className="homeCare" >
              <h2>Why Kalpavruksha</h2>
              <p>We Provide Total Senior Healthcare Solutions</p>
          </div>

          <div className="icon_pra">
              <div className='border'>
                <img src={help} className='iconImg' alt="" />
                <h3>Comprehensive medical care</h3>
              </div>

              <div className='border'>
                <img src={hosp} className='iconImg' alt="" />
                <h3>Safe and secure living space</h3>
              </div>

              <div className='border'>
                <img src={hospit} className='iconImg' alt="" />
                <h3>Boarding facilities</h3>
              </div>

              <div className='border'>
                <img src={rebha} className='iconImg' alt="" />
                <h3>Dedicated staff</h3>
              </div>
          </div>

          

        </div>

      {/* VISON */}
      <div className='allmain'>
      
      <div className='vison' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000"> 
        <div className='visionFlex'>
          <div className='visionLeft'>
            <h2>VISION</h2>
            <ul className='orderList'>
                <li>* Become a leading provider of specialized care for the elderly, paralysis patients, and stroke survivors.
            </li>
            <li>
                 * Deliver the highest standard of care and rehabilitation, tailored to the specific needs of each individual.
            </li>
            <li>
                * Offer a range of innovative services and programs that promote holistic healing and well-being</li>
            <li>* Collaborate with experts and stay up-to-date with the latest advancements in geriatric care, paralysis rehabilitation, stroke recovery, and recreational therapies.</li>
            </ul>
          </div>
          <div>
            <img src={img1} alt="visonimg" className="visionImg" />
          </div>
        </div>
      </div>

      {/* MISSION */}
      
      <div className='vison' data-aos="fade-left" data-aos-delay="100"  data-aos-duration="1000"> 
        <div className='visionFlex'>
          <div>
            <img src={img1} alt="visonimg" className="visionImg" />
          </div>
          <div className="visionLeft">
            <h2>MISSION</h2>
            <ul className='orderList'>
                <li>* Provide compassionate and comprehensive care for the geriatric population, individuals with paralysis, stroke survivors, and promote their well-being.</li>
                <li>* Foster independence, maximize functional abilities, and restore dignity and joy in the lives of our clients.</li>
                <li>* Offer personalized care, professional rehabilitation services, and engaging recreational activities.</li>
                <li>* Continuously innovate and collaborate with experts in the field to stay at the forefront of advancements in geriatric care, paralysis rehabilitation, stroke recovery, and recreational therapies.</li>
            </ul>    
          </div>
        </div>
      </div>

      </div>

      {/* service */}
      <div className='servics'  data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">
          <div className="servics_text">
              <h2>SERVICES</h2>
              <p className='ser_pra' >Kalpavruksha offers "Exceptional care and a warm community for a fulfilling retirement. Embrace worry-free living in a personalized, home-like environment."</p>
          </div>

          <div className="service_icon" >
              <div className='border'>
                <img src={med} className='iconImg' alt="" />
                <h3>Geriatric Home Care</h3>
              </div>

              <div className='border'> 
              <img src={med1} className='iconImg' alt="" />
                <h3>Transitional Care</h3>
              </div>

              <div className='border'>
                <img src={twofour} className='iconImg' alt="" />
                <h3>Critical Care</h3>
              </div>
              
          </div>
        

        <Link to="/services" className="readmore1">
          <h3>Read More</h3>
        </Link>
        </div>

       {/* About */}
      
      <div className='aboutus'data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000"> 
        <div className='aboutFlex'>
          <div className='aboutLeft'>
            <h2>About Us</h2>
            <p>
            "Discover the essence of Kalpavruksha Care and Rehab Services. We are dedicated to providing exceptional care, fostering a warm community, and creating a genuine home-like environment for seniors. Experience our commitment to enriching lives and ensuring a fulfilling retirement journey."
            </p>
            <Link to="/about">
              <h3> Read More</h3>
            </Link>
          </div>
          <div>
            <img src={img1} alt="visonimg" className="aboutusimg" />
          </div>
        </div>
      </div>


       {/* get in touch */}
       <GetinTouch  />



       {/* maps */}

       <iframe className='maps' title='kalpavruksha Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.307022837881!2d77.37967781197047!3d12.903937862320502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae382c35fca29d%3A0xf6a96ee3cf98ce71!2skalpavruksha%20health%20care%20center!5e1!3m2!1sen!2sin!4v1687246300549!5m2!1sen!2sin" 
       width="600"
        height="450"
         style={{border:"100"}}
          allowFullScreen={true}
           loading="eager"
            referrerPolicy="no-referrer-when-downgrade">
              

            </iframe>
    </>
  );
};

export default Home;
