import React from 'react';
import {Link} from 'react-router-dom'
import {LuInstagram} from 'react-icons/lu'
import {BsFacebook} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import logo from '../../src/imgs/2.png'
import './footer.css'


const Footer = () => {
  return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to='/' className='logo'/>
                        <img className='logoone' src={logo} alt="" />
                    <Link/>
                    <p className='footer__pr'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio, recusandae accusamus porro aspernatur libero quibusdam voluptas ratione. Ipsa doloremque, sint accusantium exercitationem id sapiente? Officia voluptates ducimus natus accusamus?
                    </p>
                <div className="footer_social">
                    <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener' >
                        <LuInstagram size={30}/></a>
                        <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'>
                        <BsFacebook size={30}/></a>
                        <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'>
                        <AiFillYoutube size={30}/></a>
                </div>
                </article>
                <article className='footer__links'>
                    <h4>permalinmks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article className='footer__links'>
                    <h4>permalinmks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>


            </div>
            <div className="copyright"><small>2023 | KALPAVRUKSHA OLD AGE HOME &copy; All Rights Reserved </small></div>
        </footer>
  )
}

export default Footer