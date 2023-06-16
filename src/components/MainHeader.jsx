import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../src/imgs/v204_725.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1 className='main_text' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000">Bringing Smiles to People’s Faces</h1>
          <p data-aos="fade-right" data-aos-delay="400"  data-aos-duration="1000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat suscipit provident quod assumenda, inventore illo.</p>
          <Link to='/services'  ><button className='btn lg' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000"> Get Started</button></Link>
        </div>

        <div className="main__header-right">
          <div className="main_header-cricle">
            <div className="main_header-image">
            <img src={Logo1} alt="" data-aos="fade-left" data-aos-delay="200"  data-aos-duration="2000"/>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default MainHeader;
