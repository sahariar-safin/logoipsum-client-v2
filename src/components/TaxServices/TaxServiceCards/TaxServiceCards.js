import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../../assets/images/tax services/person.png";
import icon3 from "../../../assets/images/tax services/stay-at-home.png";
import icon4 from "../../../assets/images/tax services/taxes.png";
import icon2 from "../../../assets/images/tax services/user.png";
import styles from "./TaxServiceCards.module.css";

const TaxServiceCards = () => {
  const data = [
    {
      id: 1,
      images: icon1,
      header: "INDIVIDUAL TAXES",
      text: "This service is for all single filers who are not filing married or with a spouse. ",
      btnLink: "/clientregistry",
    },
    {
      id: 2,
      images: icon2,
      header: "JOINT FILING​/MARRIED",
      text: "This service is for all filers who will be filing joint/married. ",
      btnLink: "/clientregistry",
    },
    {
      id: 3,
      images: icon3,
      header: "SELF EMPLOYMENT/1099",
      text: "This service is for all filers who will be filing just self employment or 1099 no W2's. ",
      btnLink: "/clientregistry",
    },
    {
      id: 4,
      images: icon4,
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
