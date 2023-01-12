 
import React from "react";
import styles from "../TaxPartnerProgram.module.css";
import ApplicationForm from "./ApplicationForm";
import PartnerCalendar from "./PartnerCalendar";

const PartnersForm = () => {
  return (
    <div className={styles.PartnersForm}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
            <div className={styles.partnersText}>
              <h2><span>TAX PARTNER </span> SIGN UP FORM </h2>
              <p>1. SIGN UP BELOW</p>
              <p>2. PICK A SESSION ON THE CALENDAR</p>
              <p>
                3. Take the lessons and start earning, {`it's`} that simple...
              </p>
            </div>
            <div className={styles.partnersImg}>
               <img
                src="/images/TaxPartner/main-removebg-preview.png"
                width="258"
                height="268"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ApplicationForm />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <PartnerCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersForm;
