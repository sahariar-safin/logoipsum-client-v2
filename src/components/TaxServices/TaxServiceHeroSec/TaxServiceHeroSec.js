import React from "react";
import image from "../../../assets/images/11062b_af6bcd5887df450d8cfa4d04286ac78c_mv2.png";
import styles from "./TaxServiceHeroSec.module.css";

const TaxServiceHeroSec = () => {
  return (
    <div className={styles.heroSecMain}>
      <div className="container">
        <div className={styles.heroSec}>
          <div className={styles.heroSecHeader}>
            <h2>TAX SERVICES</h2>
            <p>
              No matter what your tax need is we got you covered. If you need
              additional services feel free to contact us and let us know how we
              can help you.
            </p>
          </div>
          <div className={styles.heroSecImage}>
             <img
              src={image}
              alt=""
              width="804"
              height="379"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxServiceHeroSec;
