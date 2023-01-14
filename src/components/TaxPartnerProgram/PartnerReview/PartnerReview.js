import React from "react";
import file from "../../../assets/file/TRUTHFUL TAXES Tax Partner Brochure 2021.pdf";
import image from "../../../assets/images/pdf/pdf.webp";
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
              <a
                 href={file}
                 rel="noreferrer"
                 target="_blank"
              >
                 <img src={image} height="60" width="60" alt="" />
              </a>
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
