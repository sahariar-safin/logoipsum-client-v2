 
import React from "react";
import { Link } from "react-router-dom";
import styles from "./TrueReceiptCard.module.css";

const TrueReceiptCard = () => {
  const data = [
    {
      id: 1,
      image: "/images/true receipt program/mobile-phone.png",
      header: "PAPERLESS RECEIPT LOCKER",
      text: "Upload Your Tax Receipts To Our Server While Being Anywhere In The World Securely.  Say Goodbye To The Old Way Of Saving Receipts.  We will Calculate All Your Business Expenses And Apply Them To Your Business or Personal Return. All You Have To Do Is Take A Picture and Upload Them On Any Mobile Device via Our Server App.",
      btnLink: "https://www.truereceipt.org/",
    },
    {
      id: 2,
      image: "/images/true receipt program/padlock.png",
      header: "TAX VAULT",
      text: "The True Receipt Program also provides a Tax Vault that will contain all your Tax Related documents to be accessible when needed at any time or anywhere in the world.  W2's, Tax Returns, Student Loan Documents absolutely everything. ",
      btnLink: "https://www.truereceipt.org/",
    },
    {
      id: 3,
      image: "/images/true receipt program/transparency.png",
      header: "Audit Representation against IRS and State Agencies",
      text: "The True Receipt Program will protect all clients who itemize against any audit whether its the IRS or State. TRUTHFUL TAXES will assist and handle the entire audit from beginning to end.",
      btnLink: "https://www.truereceipt.org/",
    },
  ];
  return (
    <div className="container">
      <div className={styles.trueReceiptCards}>
        {data.map((item) => (
          <div className={styles.trueReceiptSingleCards} key={item.id}>
            <div>
               <img src={item.image} alt="" width="37" height="37" />
            </div>
            <div>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
              <Link href={item.btnLink}>Click Here To Sign Up Today</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrueReceiptCard;
