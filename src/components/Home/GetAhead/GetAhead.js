import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/image 114.png";
import styles from "./GetAhead.module.css";

const GetAhead = () => {
  return (
    <div className={styles.GetAhead}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.aheadImg}>
               <img
                width="590"
                height="480"
                src={image}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.aheadText}>
              <h3>GET AHEAD THIS YEAR</h3>
              <h2>Year-end tax tips</h2>
              <p>
                Tax Day will likely look different for many of us, which is why
                smart tax planning and thinking ahead could really pay off.
              </p>
              <Link to="/contact-us"><button className="button">Get tax tips</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAhead;
