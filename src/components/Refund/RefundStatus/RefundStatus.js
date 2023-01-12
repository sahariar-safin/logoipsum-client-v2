import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/refund status/refund.jpg";
import styles from "./RefundStatus.module.css";

const RefundStatus = () => {
  const data = [
    {
      id: 1,
      header: "Federal Refund Status",
      text: "Where's My Federal Refund >",
      link: "https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp",
    },
    {
      id: 2,
      header: "Amended Federal Return Status",
      text: "Where's My Amended Federal Return >",
      link: "https://sa.www4.irs.gov/wmar/tech-diff",
    },
    {
      id: 3,
      header: "New York State Status",
      text: "New York State Refund Status >",
      link: "https://www8.tax.ny.gov/PRIS/prisStart",
    },
    {
      id: 4,
      header: "New Jersey Refund Status",
      text: "New Jersey Refund Status >",
      link: "https://www16.state.nj.us/TYTR_TGI_INQ/jsp/prompt.jsp",
    },
    {
      id: 5,
      header: "Connecticut Refund Status",
      text: "Connecticut Refund Status >",
      link: "https://drsindtax.ct.gov/AUT/welcomeindividual.aspx",
    },
  ];
  return (
    <div className="container">
      <div className={styles.refundStatus}>
        <h2>REFUND STATUS</h2>
        <div className={styles.refundStatusInfo}>
          <div className={styles.refundStatusLists}>
            {data.map((item) => (
              <div className={styles.refundStatusList} key={item.id}>
                <h4>{item.header}</h4>
                <Link href={item.link}>{item.text}</Link>
              </div>
            ))}
          </div>
          <div className={styles.refundStatusImage}>
             <img
              src={image}
              alt=""
              width="1500"
                          height="750"
                          className="img-fluid"
            />
          </div>
        </div>
        <div className={styles.refundStatusNotes}>
          <p>
            * Please allow 24 hours after Email Confirmation of Acceptance of
            your taxes in order to check your refund status.
          </p>
          <p>
            * When checking on the status of your refund for both Federal and
            State make sure to have your finalized filed 1040 tax returns
            available to input information from the tax return.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundStatus;
