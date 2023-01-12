 
import React from "react";
import { Link } from "react-router-dom";
import styles from "./TaxServiceCards.module.css";

const TaxServiceCards = () => {
  const data = [
    {
      id: 1,
      images: "/images/tax services/person.png",
      header: "INDIVIDUAL TAXES",
      text: "This service is for all single filers who are not filing married or with a spouse. ",
      btnLink: "/clientregistry",
    },
    {
      id: 2,
      images: "/images/tax services/user.png",
      header: "JOINT FILING​/MARRIED",
      text: "This service is for all filers who will be filing joint/married. ",
      btnLink: "/clientregistry",
    },
    {
      id: 3,
      images: "/images/tax services/stay-at-home.png",
      header: "SELF EMPLOYMENT/1099",
      text: "This service is for all filers who will be filing just self employment or 1099 no W2's. ",
      btnLink: "/clientregistry",
    },
    {
      id: 4,
      images: "/images/tax services/taxes.png",
      header: "EXTENSIVE TAX PREPARATION",
      text: "This service is for all filers who's taxes require several days of extensive tax preparation due to the complexity of the tax situation. ",
      btnLink: "/clientregistry",
    },
  ];
  return (
    <div className="container">
      <div className={styles.cards}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
             <img src={item.images} alt="" width="60" height="60" />
            <h4>{item.header}</h4>
            <p>{item.text}</p>
            <Link href={item.btnLink} className="button">
              Start Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxServiceCards;
