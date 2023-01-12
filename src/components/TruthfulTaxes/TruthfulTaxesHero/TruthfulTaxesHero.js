 
import React from "react";
import styles from "./TruthfulTaxesHero.module.css";

const TruthfulTaxesHero = () => {
  return (
    <div className="container">
      <div className={styles.truthfulHero}>
        <div className={styles.truthfulHeroInfo}>
          <h2>WE ARE TRUTHFUL TAXES</h2>
          <h3>Are you an aspiring Entrepreneur?</h3>
          <p>
            Truthful Taxes wants to help the entrepreneurs of the future. Tell
            us how a new laptop can help push your journey to the next level.
            The best business plan will be awarded with a new laptop and
            scholarship into the Tax Partnership Program
          </p>
          <h5>SORRY ENTRY IS CLOSED, CHECK BACK LATER.</h5>
        </div>
        <div>
           <img src="/images/truthfultax.jpg" alt="" width="4000" height="2000" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default TruthfulTaxesHero;
