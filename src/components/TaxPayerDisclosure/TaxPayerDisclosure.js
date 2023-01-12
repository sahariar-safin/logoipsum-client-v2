 
import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/pdf/40d80b8089c8418a961cb75d96d491f7.png";
import styles from "./TaxPayerDisclosure.module.css";

const TaxPayerDisclosure = () => {
  return (
    <div className="container">
      <div className={styles.taxPayerDisclosure}>
        <h2>
          TAX PAYER RIGHT TO <br /> KNOW/DISCLOSURE
        </h2>
        <p>
          <span>*</span>Tax Payer Is Entitled To Receive A Free Copy Of Every
          Tax Return Prepared And Filed.
        </p>
        <p>
          <span>*</span>Both The Tax Payer And The Tax Preparers Of TRUTHFUL
          TAXES Must Sign Every Prepared And Finalized Return.
        </p>
        <p>
          <span>*</span> TRUTHFUL TAXES Tax Preparers Are NOT Licensed By The
          State Board For Public Accounting, Or Is Not A member Of The New York
          State Bar.
        </p>
        <p>
          <span>*</span>
          {` TRUTHFUL TAXES Owner Is A Licensed Tax Preparer And Licensed ERO "Electronic Return Originator" For Profit And Is An Approved E-File Provider.`}
        </p>
        <p>
          <span>*</span>TRUTHFUL TAXES Tax Preparers Will NOT Represent You If
          You Get Audited.
        </p>
        <p>
          <span>*</span>TRUTHFUL TAXES Will Assist In Gathering All The
          Paperwork Needed To Help The Tax Payer With An Audit.
        </p>
        <p>
          <span>*</span>Tax Payer Has The Right To A Free Copy Of NY State
          Consumer Bill Of Rights Regarding Tax Preparers
        </p>
        <div className={styles.partnerPdf}>
          <h4>NY STATE CONSUMER BILL OF RIGHTS</h4>
          <Link
            href="https://www.truthfultaxes.com/_files/ugd/821f13_ea48c046ad0a4ae5b816ea264f67cfbc.pdf"
            rel="noreferrer"
            target="_blank"
          >
             <img
              src={img}
              height="120"
              width="100"
              alt=""
            />
          </Link>
          <h6>Templates PDF.pdf</h6>
        </div>
      </div>
    </div>
  );
};

export default TaxPayerDisclosure;
