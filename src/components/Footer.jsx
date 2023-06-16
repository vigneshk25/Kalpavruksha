<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../src/imgs/2.png';
import insta from '../../src/imgs/insta.gif';
import fb from '../../src/imgs/fb.gif';
import yt from '../../src/imgs/yt.gif';

import './footer.css'


const Footer = () => {
  return (
        <footer>
            <div className="container footer__container">
                <article >
                    <Link to='/' className='logo' />
                        <img className='logoone' src={logo} alt=""  data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000"/>
                    <Link/>
                    <p className='footer__pr' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio, recusandae accusamus porro aspernatur libero quibusdam voluptas ratione. Ipsa doloremque, sint accusantium exercitationem id sapiente? Officia voluptates ducimus natus accusamus?
                    </p>
                <div className="footer_social" >
                    <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000" >
                        <img src={insta} alt="" className='social_media' />
                    </a>
                        <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener' data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1000">
                            <img src={fb} alt="" className='social_media' />
                        </a>
                        <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener' data-aos="fade-up" data-aos-delay="600"  data-aos-duration="1000">
                                <img src={yt} alt="" className='social_media' />
                        </a>
                </div>
                </article>
            <div className='div_links'>
                <article className='footer__links' data-aos="fade-left" data-aos-delay="100"  data-aos-duration="2000">
                    <h4>permalinmks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article className='footer__links' data-aos="fade-left" data-aos-delay="100"  data-aos-duration="2000">
                    <h4>permalinmks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
            </div>


            </div>
            <div className="copyright" ><small data-aos="fade-up" data-aos-delay="100"  data-aos-duration="2000">2023 | KALPAVRUKSHA OLD AGE HOME &copy; All Rights Reserved </small></div>
        </footer>
  )
}

export default Footer
=======
import React from "react";
import { Link } from "react-router-dom";
import { LuInstagram } from "react-icons/lu";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import logo from "../../src/imgs/2.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo" />
          <img className="logoone" src={logo} alt="" />
          <Link />
          <p className="footer__pr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            odio, recusandae accusamus porro aspernatur libero quibusdam
            voluptas ratione. Ipsa doloremque, sint accusantium exercitationem
            id sapiente? Officia voluptates ducimus natus accusamus?
          </p>
          <div className="footer_social">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener">
              <LuInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener">
              <BsFacebook size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener">
              <AiFillYoutube size={30} />
            </a>
          </div>
        </article>
        <article className="footer__links">
          <h4>permalinmks</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article className="footer__links">
          <h4>permalinmks</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
      </div>
      <div className="copyright">
        <small>
          2023 | KALPAVRUKSHA OLD AGE HOME &copy; All Rights Reserved{" "}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> e524aac416cc7571413ed41fc45fa162ac63dcd8
