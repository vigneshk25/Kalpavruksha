import React, { useState } from "react";
import "./home.css";
<<<<<<< HEAD
import pen from '../../imgs/pen.gif';
import doc from '../../imgs/dovu.gif';



=======
>>>>>>> e524aac416cc7571413ed41fc45fa162ac63dcd8
const GetinTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const message = `Hello, Welcome to Kalpavruksha OldAge service and Rehabilitation, Thank You for Contacting us
=======
    const message = ` Hello ,Welcome to Kalpavruksha OldAge service and Rehabilitation ,Thank You for Contacting us
>>>>>>> e524aac416cc7571413ed41fc45fa162ac63dcd8
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
    <form onSubmit={handleSubmit}>
<<<<<<< HEAD
      <div className="getInTouch" data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">
        <div>

          <div className="icons">
          <img src={doc} alt="" className="doc" />
          <h1>Get in Touch</h1>
          </div>
=======
      <div className="getInTouch">
        <div>
          <h1>Get in Touch</h1>
>>>>>>> e524aac416cc7571413ed41fc45fa162ac63dcd8
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

<<<<<<< HEAD
          <div div className="icon">
          <p className="textName" >Email Address</p>        
          </div>    
                <input
=======
          <p className="textName">Email</p>
          <input
>>>>>>> e524aac416cc7571413ed41fc45fa162ac63dcd8
            type="text"
            name="email"
            id="email"
            placeholder="me@mail.com"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />

<<<<<<< HEAD
          <div className="icon">
          <p className="textName" >Phone Number</p>        
          </div>    
=======
          <p className="textName">Phone Number</p>
>>>>>>> e524aac416cc7571413ed41fc45fa162ac63dcd8
          <input
            type="text"
            name="phone"
            required={true}
            id="phone"
            placeholder="+91 00000 00000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
<<<<<<< HEAD

          <div className="icon">
          <img src={pen} className="pen" alt="" /> 
          <p className="textName" >Query</p>        
          </div>            
=======
          <p className="textName">Email</p>
>>>>>>> e524aac416cc7571413ed41fc45fa162ac63dcd8
          <textarea
            rows={5}
            maxLength={240}
            type="text"
            name="email"
            id="email"
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

<<<<<<< HEAD
export default GetinTouch;
=======
export default GetinTouch;
>>>>>>> e524aac416cc7571413ed41fc45fa162ac63dcd8
