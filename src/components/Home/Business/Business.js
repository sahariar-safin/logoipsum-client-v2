 
import React from "react";
import { Link } from "react-router-dom";
import { businessData } from "../../../data/data";
import styles from "./Business.module.css";

const Business = () => {
  return (
    <div className={styles.Business}>
      {/* <h2>The best guarantees in the business</h2> */}
      <h2>Why Truthful Taxes</h2>
      <p>A truthful approach to filing taxes and tax services</p>
      <div className="container">
        <div className="row">
          {businessData.map((item, index) => {
            return (
              <div key={item?.id} className="col-lg-6 col-md-6 col-sm-12" >
                <div className={styles.card}>
                  <div className={styles.cardImg}>
                     <img
                      width="48"
                      height="48"
                      src={item?.img}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <h4>{item?.title}</h4>
                  <p>
                    {item?.text}
                  </p>
                </div>
              </div>
            );
          })}
          <Link to="/truthful-taxes"><button className="button">Reserve your post</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Business;
