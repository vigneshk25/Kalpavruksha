import React from 'react';
import Header from '../../components/Header';
import headerImg from '../../imgs/img1.png';
import img1 from '../../imgs/img1.png';
import profile from '../../imgs/about us image 1.jpg';
import Logo1 from "../../imgs/land page image 1.jpg";

import '../about/about.css'

import './about.css';

const About = () => {
  return (
    <>
      <Header title='About Us' image={headerImg}  >
      "Discover the essence of Kalpavruksha Care and Rehab Services. We are dedicated to providing exceptional care, fostering a warm community, and creating a genuine home-like environment for seniors. Experience our commitment to enriching lives and ensuring a fulfilling retirement journey."  
      </Header>

      <section className='about_story' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="3000">
        <div className="container about_story_container">
          <div className="about_section_img">
            <img src={Logo1} alt="" />
          </div>
          <div className="about_section_cont">
            <h2>Our story</h2>
              <p>Kalpavruksha Care and Rehab Services is a story of exceptional care and a nurturing environment. With a dedicated team, we provide personalized attention and comprehensive rehabilitation for our residents. We prioritize dignity, respect, and well-being, empowering individuals to thrive in their golden years. Join our community and experience the transformative journey towards renewed independence and happiness</p>
          </div>
        </div>
      </section>


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



      <section className='about_story' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">
        <div className="container about_story_container">
          <div className="about_section_img">
            <img src={profile} alt="" />
          </div>
          <div className="about_section_cont">
            <h2>Our story</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur hic impedit tenetur ducimus cum possimus. Modi ipsum quaerat facere odit mollitia voluptates. Soluta voluptas iusto totam autem minus neque.</p>
          </div>
        </div>
      </section>

{/* 
      <section className='about_story' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">
        <div className="container about_story_containers">
          <div className="MobileView">
            <img src={profile} alt="" />
          </div>
          <div className="about_section_cont">
            <h1>Our story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur hic impedit tenetur ducimus cum possimus. Modi ipsum quaerat facere odit mollitia voluptates. Soluta voluptas iusto totam autem minus neque.</p>
          </div>
          <div className="about_section_img1">
            <img src={profile} alt="" />
          </div>
        </div>
      </section> */}

        {/* staffs */}
        <div className="container staffs_con" data-aos="fade-left"  data-aos-delay="100"  data-aos-duration="3000">
          <h2>Doctors</h2>
          
          <div className='staffs_flex' data-aos="fade-left">
                <img src={profile} alt="" />
                <img src={profile} alt="" />
                <img src={profile} alt="" />
                <img src={profile} alt="" />
          </div>
        </div>
      
    </>
  )
}

export default About;
