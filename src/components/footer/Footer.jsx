import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>KALPAVRUKSHA OLD AGE HOME</h3>
            <p>
              Senior citizens - Both male and female are admitted as residents
              of the old age home on short term and long term basis. Full
              boarding and lodging facility, personal laundry, nursing, library,
              and Single/Common/Sharing room facilities like TV, indoor games,
              etc. Yoga classes will be held for the benefit of the residents.
              Residents who are immobile/bedridden needing constant attention.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Enquiry</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>ADDRESS</h3>
            <p>
              #786 2nd Main Road, Laxmipura Road. Near Dodda Alada Mara,
              Chunchankuppe, Bangalore 562130
            </p>
          </div>
          <div className="footer-section">
            <h3>CONTACT US</h3>
            <p>
              <a href="mailto:kalpavrukshabanglore@gmail.com">
                kalpavrukshabanglore@gmail.com
              </a>
            </p>
            <p>+91 96329 83695</p>
            <p>+91 94833 42695</p>
            <p>+91 8618579052</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Company name</p>
      </div>
    </footer>
  );
};

export default Footer;
