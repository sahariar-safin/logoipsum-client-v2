 
import React from "react";
import { everyDollarData } from "../../../data/data";
import styles from "./EveryDollar.module.css";

const EveryDollar = () => {
  return (
    <div className={styles.EveryDollar}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <h2>When every dollar matters, it matters who does your taxes</h2> */}
            <h2>Become a Tax Partner</h2>
             <img
              width="590"
              height="467"
              src="/images/image 193.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" >
            {everyDollarData.map((item, index) => {
              return (
                <div key={item?.id} className={styles.card}>
                  <h4>{item?.title}</h4>
                  <p>{item?.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryDollar;
