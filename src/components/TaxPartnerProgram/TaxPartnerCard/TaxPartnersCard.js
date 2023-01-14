 
import React from "react";
import { Link } from "react-router-dom";
import { taxPartnersCard } from "../../../data/data";
import styles from "../TaxPartnerProgram.module.css";

const TaxPartnersCard = () => {
  return (
    <div className={styles.PartnersCard}>
      <div className="container">
        <div className="row">
          {taxPartnersCard?.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12" key={item?.id}>
                <div className={styles.Card}>
                   <img
                    className="img-fluid"
                    width="38"
                    height="30"
                    src={item?.img}
                    alt=""
                  />
                  <h3>{item?.title}</h3>
                  <p>{item?.text}</p>
                  {/* <Link href={item?.link} rel="noreferrer">
                    {item?.read}
                  </Link> */}
                </div>
              </div>
            );
          })}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.partnerShip}>
              <h3>Why Join the</h3>
              <h2>TAX PARTNERSHIP PROGRAM</h2>
              <ul>
                <li>Earn a years’ worth of income in 120 days.</li>
                <li>Relax the rest of the year.</li>
                <li>
                  <strong>Work for yourself</strong> and be your own boss.
                </li>
                <li>
                  <strong>Work from anywhere</strong> at anytime
                </li>
              </ul>
              <Link className="button" to="/signup" rel="noreferrer">
                Sign Up Now{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxPartnersCard;
