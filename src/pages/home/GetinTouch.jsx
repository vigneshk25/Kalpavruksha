import React, { useState } from "react";
import "./home.css";
import pen from '../../imgs/pen.gif';
import doc from '../../imgs/dovu.gif';



const GetinTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, Welcome to Kalpavruksha OldAge service and Rehabilitation, Thank You for Contacting us
    +%0A+
    +%0A+
    Name: +%2a${name}%2a
    +%0A
    Email: +%2a${email}%2a
    +%0A
    Phone: +%2a${phone}%2a
    +%0A
    Query: +%2a${query}%2a
    `;
    const whatsappLink = `https://wa.me/8660784789?text=${message}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <form onSubmit={handleSubmit} id="getIn">
      <div className="getInTouch" data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">
        <div>

          <div className="icons">
          <img src={doc} alt="" className="doc" />
          <h1>Get in Touch</h1>
          </div>
          <p>Let us know how we can help </p>
        </div>

        <div className="inputBox">
          <p className="textName">Name</p>
          <input
            type="text"
            name="name"
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Your Full Name"
          />

          <div div className="icon">
          <p className="textName" >Email Address</p>        
          </div>    
                <input
            type="text"
            name="email"
            id="email"
            placeholder="me@mail.com"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="icon">
          <p className="textName" >Phone Number</p>        
          </div>    
          <input
            type="text"
            name="phone"
            required={true}
            id="phone"
            placeholder="+91 00000 00000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="icon">
          <img src={pen} className="pen" alt="" /> 
          <p className="textName" >Query</p>        
          </div>            
          <textarea
            rows={5}
            maxLength={240}
            type="text"
            name="email"
            id="query"
            placeholder="Enter your query/message"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            <button className="msgBtn">Send Message</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default GetinTouch;
