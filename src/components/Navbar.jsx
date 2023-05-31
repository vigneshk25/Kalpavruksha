import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
import Logo from "../imgs/kv-1.png";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="continer nav_continer">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="navlogo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle"
          onClick={() => setIsNavShowing((prev) => !prev)}>
          {isNavShowing ? <AiOutlineClose /> : <AiOutlineBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
