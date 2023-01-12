 
import React from "react";
import styles from "./TaxPartnerClass.module.css";

const TaxPartnerClass = () => {
  return (
    <div className="container">
      <div className={styles.taxPartnerClass}>
        <h2>
          <span>Stay Tuned</span> <br />
          for live sessions and updates.
              </h2>
               <img src="/images/TaxPartner/student-class-looking-course.jpg" alt="" width="600" height="376" className="img-fluid"/>
      </div>
    </div>
  );
};

export default TaxPartnerClass;
