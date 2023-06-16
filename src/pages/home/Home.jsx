import React from 'react'
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




const Home = () => {
  return (
    <>
    <MainHeader/>
      
      {/* program section */}
      <div className='whyKV' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="3000">
          <div className="homeCare" >
              <h2>Why Kalpavruksha</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, labore.</p>
          </div>

          <div className="icon_pra">
              <div>
                <img src={help} className='iconImg' alt="" />
                <h3>Home Care</h3>
              </div>

              <div>
                <img src={hosp} className='iconImg' alt="" />
                <h3>Home Care</h3>
              </div>

              <div>
                <img src={hospit} className='iconImg' alt="" />
                <h3>Home Care</h3>
              </div>

              <div>
                <img src={rebha} className='iconImg' alt="" />
                <h3>Home Care</h3>
              </div>
          </div>
      </div>

      {/* VISON */}
      
      <div className='vison' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000"> 
        <div className='visionFlex'>
          <div className='visionLeft'>
            <h2>VISION</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nihil amet similique, fugit officia sed, dicta soluta eius, eaque repellendus laborum blanditiis? Minima obcaecati ex deleniti alias mollitia ipsam consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea commodi iste autem aperiam magni exercitationem? Nam quaerat nulla architecto.</p>
            </div>
            <div>
              <img src={img1} alt="visonimg" className='visionImg' />
            </div>
        </div>
      </div>


      {/* MISSION */}
      
      <div className='vison' data-aos="fade-left" data-aos-delay="100"  data-aos-duration="1000"> 
        <div className='visionFlex'>
          <div>
              <img src={img1} alt="visonimg" className='visionImg' />
          </div>
          <div className='visionLeft'>
            <h2>MISSION</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nihil amet similique, fugit officia sed, dicta soluta eius, eaque repellendus laborum blanditiis? Minima obcaecati ex deleniti alias mollitia ipsam consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea commodi iste autem aperiam magni exercitationem? Nam quaerat nulla architecto.</p>
          </div>
            
        </div>
      </div>



      {/* service */}
      <div className='servics'  data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">
          <div className="servics_text">
              <h2>SERVICES</h2>
              <p className='ser_pra' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem quam, mollitia natus quis doloremque obcaecati maiores rem rerum nisi optio explicabo veniam ad eligendi a voluptatibus sed beatae! Inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, labore.</p>
          </div>

          <div className="service_icon" >
              <div>
                <img src={med} className='iconImg' alt="" />
                <h3>Home Care</h3>
              </div>

              <div>
                <img src={med1} className='iconImg' alt="" />
                <h3>Home Care</h3>
              </div>

              <div>
                <img src={rebha} className='iconImg' alt="" />
                <h3>Home Care</h3>
              </div>
              
          </div>

          <Link to='/services' className='readmore1'><h3>Read More</h3></Link>
      </div>


       {/* About */}
      
      <div className='aboutus'data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000"> 
        <div className='aboutFlex'>
          <div className='aboutLeft'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nihil amet similique, fugit officia sed, dicta soluta eius, eaque repellendus laborum blanditiis? Minima obcaecati ex deleniti alias mollitia ipsam consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea commodi iste autem aperiam magni exercitationem? Nam quaerat nulla architecto.</p>
            <Link to='/about'><h3> Read More</h3></Link>
            </div>
            <div>
              <img src={img1} alt="visonimg" className='aboutusimg' />
            </div>
        </div>
      </div>


       {/* get in touch */}
       <GetinTouch  />
    </>
  )
}

export default Home