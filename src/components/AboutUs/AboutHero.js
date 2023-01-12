 
import React from "react";
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
             <img width="1085" height="457" src="/images/about/aboutus.png" alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
