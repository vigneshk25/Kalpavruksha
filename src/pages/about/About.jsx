<<<<<<< HEAD
import React from 'react';
import Header from '../../components/Header';
import headerImg from '../../imgs/img1.png';
import profile from '../../imgs/profile.png';
import img1 from '../../imgs/img1.png';
import '../about/about.css'

import './about.css';

const About = () => {
  return (
    <>
      <Header title='About Us' image={headerImg}  >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At odio esse iste ea? Veritatis deleniti repellendus nesciunt delectus vitae distinctio officiis laboriosam. Illo eos deserunt labore corrupti ratione  
      </Header>

      <section className='about_story' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="3000">
        <div className="container about_story_container">
          <div className="about_section_img">
            <img src={profile} alt="" />
          </div>
          <div className="about_section_cont">
            <h1>Our story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur hic impedit tenetur ducimus cum possimus. Modi ipsum quaerat facere odit mollitia voluptates. Soluta voluptas iusto totam autem minus neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur hic impedit tenetur ducimus cum possimus. Modi ipsum quaerat facere odit mollitia voluptates. Soluta voluptas iusto totam autem minus neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur hic impedit tenetur ducimus cum possimus. Modi ipsum quaerat facere odit mollitia voluptates. Soluta voluptas iusto totam autem minus neque.</p>

          </div>
        </div>
      </section>


      {/* VISON */}
      
      <div className='vison' data-aos="fade-left" data-aos-delay="100"  data-aos-duration="2000"> 
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
      
      <div className='vison' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000"> 
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



      <section className='about_story' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">
        <div className="container about_story_container">
          <div className="about_section_img">
            <img src={profile} alt="" />
          </div>
          <div className="about_section_cont">
            <h1>Our story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur hic impedit tenetur ducimus cum possimus. Modi ipsum quaerat facere odit mollitia voluptates. Soluta voluptas iusto totam autem minus neque.</p>
          </div>
        </div>
      </section>


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
      </section>

        {/* staffs */}
        <div className="container staffs_con" data-aos="fade-left"  data-aos-delay="100"  data-aos-duration="3000">
          <h1>Nursing Staffs</h1>
          
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
=======
import React from "react";
import "./about.css";
import { about, nursingStaff } from "./aboutData";

const About = () => {
  return (
    <div>
      About
      <div className="panelMembers">panelMembers</div>
      <div>
        {about.map(({ name, position, imageSrc, About }, index) => {
          return (
            <div key={index}>
              <div
                className={
                  index.toString() === "0"
                    ? "imageN"
                    : index.toString() === "2"
                    ? "imageN"
                    : "image"
                }>
                <img src={imageSrc} alt="panelmembersImage" />
              </div>
              <div
                className={
                  index.toString() === "0"
                    ? "nameN"
                    : index.toString() === "2"
                    ? "nameN"
                    : "name"
                }>
                <h1>{name}</h1>
                <h5>{position}</h5>
              </div>
              <p
                className={
                  index.toString() === "0"
                    ? "aboutN"
                    : index.toString() === "2"
                    ? "aboutN"
                    : "about"
                }>
                {About}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        {nursingStaff.map(({ imageSrc, position }, index) => {
          return (
            <div>
              <div key={index}>
                <img className="NurseImg" src={imageSrc} alt="NurseImg" />
              </div>
              <h6 className="position">{position}</h6>
            </div>
          );
        })}
      </div>
      <div className="img"></div>
    </div>
  );
};
>>>>>>> e524aac416cc7571413ed41fc45fa162ac63dcd8

export default About;
