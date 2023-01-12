 
import React from "react";
import img from "../../assets/images/about/aboutus.png";
import styles from "./About.module.css";

const AboutHero = () => {
  return (
    <div className={styles.aboutHero}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <h2>
              <span>ABOUT </span>US
            </h2>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
             <img width="1085" height="457" src={img} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
