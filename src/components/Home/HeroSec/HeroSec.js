 
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import image from "../../../assets/images/herosec.png";
import styles from "./HeroSec.module.css";

const HeroSec = () => {
  return (
    <div className={styles.heroSec}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-7 col-md-6 col-sm-12" >
            <h1>
              The Most Trusted <span>Tax Services</span>
            </h1>
            <p>
              MAXIMUM REFUND GUARNTEED!
            </p>
            <Link to="/clientregistry">
               <button className="button">File My Taxes Now</button>
           </Link>
            <Link to="/locations">
              <button className="button">Find a Tax Consultant</button>
           </Link>
            
            <div className={styles.review}>
              <AiFillStar className={styles.icon} />
              <AiFillStar className={styles.icon} />
              <AiFillStar className={styles.icon} />
              <AiFillStar className={styles.icon} />
              <AiFillStar className={styles.icon} />
              <p>5 Star Ratings (2K+ Review)</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12" >
             <img
              width="699"
              height="685"
              src={image}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
