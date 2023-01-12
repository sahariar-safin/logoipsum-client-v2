 
import React from "react";
import img from "../../assets/images/about/Award.webp";
import styles from "./About.module.css";

const Award = () => {
  return (
    <div className={styles.Award}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p>
              At TRUTHFUL TAXES we are focused on providing Truthful, Honest,
              and Reliable Tax services with the highest levels of customer
              satisfaction & we will do everything we can to meet your
              expectations. After years of seeing clients being cheated out of
              there rightfully earned money I decided to create TRUTHFUL TAXES
              so that we can operate in Truthfulness, Honesty, and Integrity; so
              that all my clients can receive all the hard earned money they
              rightfully deserve.
            </p>
            <p>
              With a variety of offerings to choose from, {`we're `}sure
              {` you'll`} be happy working with us. Look around our website and
              if you have any comments or questions, please feel free to contact
              us. We hope to see you again! Check back later for new updates to
              our website. {`There's`} much more to come!
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.awardImg}>
               <img
                width="395"
                height="258"
                src={img}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
