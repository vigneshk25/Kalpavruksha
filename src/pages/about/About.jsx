import React from "react";
import "./about.css";
import { about, nursingStaff } from "./aboutData";

const About = () => {
  return (
    <div>
      About
      <div className="panelMembers">panelMembers</div>
      <div>
        {about.map(({ name, position, imageSrc, About }, index) => {
          return (
            <div key={index}>
              <div
                className={
                  index.toString() === "0"
                    ? "imageN"
                    : index.toString() === "2"
                    ? "imageN"
                    : "image"
                }>
                <img src={imageSrc} alt="panelmembersImage" />
              </div>
              <div
                className={
                  index.toString() === "0"
                    ? "nameN"
                    : index.toString() === "2"
                    ? "nameN"
                    : "name"
                }>
                <h1>{name}</h1>
                <h5>{position}</h5>
              </div>
              <p
                className={
                  index.toString() === "0"
                    ? "aboutN"
                    : index.toString() === "2"
                    ? "aboutN"
                    : "about"
                }>
                {About}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        {nursingStaff.map(({ imageSrc, position }, index) => {
          return (
            <div>
              <div key={index}>
                <img className="NurseImg" src={imageSrc} alt="NurseImg" />
              </div>
              <h6 className="position">{position}</h6>
            </div>
          );
        })}
      </div>
      <div className="img"></div>
    </div>
  );
};

export default About;
