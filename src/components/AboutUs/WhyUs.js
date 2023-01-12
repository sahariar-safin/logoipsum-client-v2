 
import React from "react";
import { aboutUsLogo } from "../../data/data";
import styles from "./About.module.css";

const WhyUs = () => {
  return (
    <div className={styles.WhyUs}>
      <h2>WHY US?</h2>
      <div className="container">
        <div className="row">
          <div className={styles.whyUsLogo}>
            {aboutUsLogo?.map((item, index) => {
              return (
                <div className={styles.logoImg} key={item?.id}>
                   <img
                    width={100}
                    height={100}
                    className="img-fluid"
                    src={item?.img}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
