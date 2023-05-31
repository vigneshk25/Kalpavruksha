import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Image from "../../imgs/v204_725.png";
import MainHeader from "../../components/MainHeader";
import icon from "../../imgs/icon.png";
import img1 from "../../imgs/img1.png";

const Home = () => {
  return (
    <>
      <MainHeader />

      {/* program section */}
      <div className="whyKV">
        <div className="homeCare">
          <h2>Why Kalpavruksha</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            labore.
          </p>
        </div>

        <div className="icon_pra">
          <div>
            <img src={icon} className="iconImg" alt="" />
            <h3>Home Care</h3>
          </div>

          <div>
            <img src={icon} className="iconImg" alt="" />
            <h3>Home Care</h3>
          </div>

          <div>
            <img src={icon} className="iconImg" alt="" />
            <h3>Home Care</h3>
          </div>

          <div>
            <img src={icon} className="iconImg" alt="" />
            <h3>Home Care</h3>
          </div>
        </div>
      </div>

      {/* VISON */}

      <div className="vison">
        <div className="visionFlex">
          <div className="visionLeft">
            <h2>VISION</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate nihil amet similique, fugit officia sed, dicta soluta
              eius, eaque repellendus laborum blanditiis? Minima obcaecati ex
              deleniti alias mollitia ipsam consequuntur? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ipsa ea commodi iste autem
              aperiam magni exercitationem? Nam quaerat nulla architecto.
            </p>
          </div>
          <div>
            <img src={img1} alt="visonimg" className="visionImg" />
          </div>
        </div>
      </div>

      {/* MISSION */}

      <div className="vison">
        <div className="visionFlex">
          <div>
            <img src={img1} alt="visonimg" className="visionImg" />
          </div>
          <div className="visionLeft">
            <h2>MISSION</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate nihil amet similique, fugit officia sed, dicta soluta
              eius, eaque repellendus laborum blanditiis? Minima obcaecati ex
              deleniti alias mollitia ipsam consequuntur? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ipsa ea commodi iste autem
              aperiam magni exercitationem? Nam quaerat nulla architecto.
            </p>
          </div>
        </div>
      </div>

      {/* service */}
      <div className="servics">
        <div className="servics_text">
          <h2>SERVICES</h2>
          <p className="ser_pra">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem
            quam, mollitia natus quis doloremque obcaecati maiores rem rerum
            nisi optio explicabo veniam ad eligendi a voluptatibus sed beatae!
            Inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga, labore.
          </p>
        </div>

        <div className="service_icon">
          <div>
            <img src={icon} className="iconImg" alt="" />
            <h3>Home Care</h3>
          </div>

          <div>
            <img src={icon} className="iconImg" alt="" />
            <h3>Home Care</h3>
          </div>

          <div>
            <img src={icon} className="iconImg" alt="" />
            <h3>Home Care</h3>
          </div>
        </div>

        <Link to="/services" className="readmore1">
          <h3>Read More</h3>
        </Link>
      </div>

      {/* About */}

      <div className="aboutus">
        <div className="aboutFlex">
          <div className="aboutLeft">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate nihil amet similique, fugit officia sed, dicta soluta
              eius, eaque repellendus laborum blanditiis? Minima obcaecati ex
              deleniti alias mollitia ipsam consequuntur? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ipsa ea commodi iste autem
              aperiam magni exercitationem? Nam quaerat nulla architecto.
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

      <div className="getInTouch">
        <div>
          <h1>Get in Touch</h1>
          <p>Let us know how we can help </p>
        </div>

        <div className="inputBox">
          <p className="textName">Name</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
          />

          <p className="textName">Email</p>
          <input type="text" name="name" id="name" placeholder="me@mail.com" />

          <p className="textName">Phone Number</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="+91 00000 00000"
          />

          <div>
            <button className="msgBtn">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
