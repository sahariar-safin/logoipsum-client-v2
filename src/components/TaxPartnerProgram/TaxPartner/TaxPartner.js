import React from "react";
import image from "../../../assets/images/TaxPartner/account-intelligence-hero.jpg";
import styles from "../TaxPartnerProgram.module.css";

const TaxPartner = () => {
  return (
    <div className={styles.TaxPartner}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>TAX PARTNER PROGRAM</h2>
            <p>Earn a years’ worth of income in 120 days. </p>
            <button className="button">Sign Up Now</button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
             <img
              className="img-fluid"
              width="1920"
              height="1080"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxPartner;
