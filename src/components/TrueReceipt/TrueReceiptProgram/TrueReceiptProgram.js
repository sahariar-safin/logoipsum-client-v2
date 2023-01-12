 
import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/true receipt program/b69a347cdbfd4c1eb90e1336b57c5bc0.png";
import styles from "./TrueReceiptProgram.module.css";

const TrueReceiptProgram = () => {
  return (
    <div>
      <div className={styles.heroSecMain}>
        <div className="container">
          <div className={styles.heroSec}>
            <div className={styles.heroSecHeader}>
              <h2>
                TRUE RECEIPT <br /> PROGRAM
              </h2>
              <h4>Need help managing your receipts?</h4>
              <p>
                Saving your receipts can be a major tax benefit helping keep
                more of you hard earned money and keeping you out of trouble
                with the IRS.
              </p>
              <Link href="https://www.truereceipt.org/">
                Click Here To Sign Up Today
              </Link>
            </div>
            <div className={styles.heroSecImage}>
               <img
                src={img}
                alt=""
                width="717"
                height="395"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueReceiptProgram;
