import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
import logo from '../../src/imgs/2.png';



const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
        <div className="continer nav_continer">
            <Link to='/' className='logo' onClick={()=> setIsNavShowing(false)}>
                <img src={logo} alt="navlogo" className="nav_logo" data-aos="fade-down" data-aos-delay="100"  data-aos-duration="1000"/>
            </Link>
            <ul  className={`nav_links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name,path},index)=>{
                        return (
                            <li key={index}  >
                                <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''}
                                onClick={()=> setIsNavShowing(prev => !prev)}
                                >{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle"  onClick={()=> setIsNavShowing(prev => !prev)}>
               {
                    isNavShowing ? <AiOutlineClose/> :  <AiOutlineBars/>
               }
            </button>
        </div>
    </nav>
  );
};

export default Navbar;
