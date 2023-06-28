import React from "react";
import Logo1 from "../../src/imgs/land page image 1.jpg";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1 className='main_text' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000">Enjoy the Invaluable Rewards of Growing Old</h1>
          <p data-aos="fade-right" data-aos-delay="400"  data-aos-duration="1000">Every family has a unique story. Understanding that story is the key to helping you find the right living arrangement for your loved one. We Kalpavruksha, have always connected to the families.</p>
         <a href="/#getIn"> <button   className='btn lg' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000"> Get Started</button></a>
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
