import React from "react";
import image from "../../../assets/images/thank.png";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  return (
    <div className={styles.thankYou}>
       <img
        src={image}
        alt=""
        width="500"
        height="500"
        className="img-fluid"
      />
      <h2>Thank You!</h2>
      <p>Your submission has been received</p>
    </div>
  );
};

export default ThankYou;
