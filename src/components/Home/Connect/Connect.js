 
import React from "react";
import { Link } from "react-router-dom";
import { connectData } from "../../../data/data";
import styles from "./Connect.module.css";

const Connect = () => {
  return (
    <div className={styles.Connect}>
      <h3>CONNECT THE DOTS</h3>
      <h2>Taxes done right</h2>
      <div className="container">
        <div className="row">
          {connectData.map((item, index) => {
            return (
              <div key={item?.id} className="col-lg-6 col-md-6 col-sm-12">
                <div className={styles.card}>
                   <img
                    width="530"
                    height="310"
                    src={item?.img}
                    className="img-fluid"
                    alt=""
                  />
                  <h4>{item?.title}</h4>
                  <p>{item?.text}</p>
                  <Link href="#"><button className="button">{item?.btn}</button></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Connect;
