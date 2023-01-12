 
import React from "react";
import { Link } from "react-router-dom";
import styles from "../TaxPartnerProgram.module.css";

const PartnerReview = () => {
  return (
    <div className={styles.PartnerReview}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.partnerPdf}>
              <h4>
                WANT MORE INFORMATION? <br /> DOWNLOAD OUR BROCHURE
              </h4>
              <Link
                href="https://7ba09562-c76e-4cba-9a30-eb64491948d7.filesusr.com/ugd/b41de8_533910f2167b4dcdb689e08116df10e4.pdf"
                rel="noreferrer"
                target="_blank"
              >
                 <img src="/images/pdf/pdf.webp" height="60" width="60" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.review}>
              <p>{`"There's nothing like working on your time and getting paid."`}</p>
              <h3>-Marissa Alicea</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerReview;
