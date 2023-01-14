import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import image from "../../assets/images/tax witholding/calculate-withholding-tax.png";
import styles from "./TaxCalculator.module.css";

const TaxCalculator = () => {
  return (
    <div className="container">
      <div className={styles.taxCalculator}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.taxCalculatorDiv}>
              <h2>
                <span>TAX WITHOLDING</span> <br />
                CALCULATOR
              </h2>
              <p>
                Try the IRS Free Tax Withholding Calculator To Know How Much
                Your Exemptions Should Be On Your Paycheck.
              </p>
              <a href="https://apps.irs.gov/app/tax-withholding-estimator" target="_blank" rel="noreferrer">
                Calculate Now{" "}
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.taxCalculatorImgDiv}>
               <img
                src={image}
                alt=""
                width="852"
                height="568"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
