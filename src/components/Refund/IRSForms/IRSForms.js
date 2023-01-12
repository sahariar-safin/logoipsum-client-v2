 
import React from "react";
import { GrDocumentDownload } from "react-icons/gr";
import { Link } from "react-router-dom";
import styles from "./IRSForms.module.css";

const IRSForms = () => {
  const data = [
    {
      id: 1,
      header: "IRS Tax Transcript",
      text: "Download this federal form to request an official IRS Tax Transcript for any year from the IRS.  * Please note that this transcript does not include your state tax return, this is only the FEDERAL. ",
      image: "/images/pdf/84b64599ffd4d19e6d5920d5a29fdcd4.png",
      subText: "4506T REQUEST FOR TAX TRANSCRIPT FORM",
      link: "https://www.truthfultaxes.com/_files/ugd/821f13_e84ea4384fd341839d9c60dbea9e5ba4.pdf",
    },
    {
      id: 2,
      header: "Installment agreement",
      text: "Download this federal form to request an installment agreement for filers who owe the IRS money and do not want to pay one lump sum while still be in compliance.  ",
      image: "/images/pdf/84b64599ffd4d19e6d5920d5a29fdcd4.png",
      subText: "9465 IRS INSTALLMENT AGREEMENT FORM",
      link: "https://www.truthfultaxes.com/_files/ugd/821f13_8e0fd449b3634ccdaee01dcf61873da1.pdf",
    },
    {
      id: 3,
      header: "Extension to file",
      text: "Download this federal form to request for an extension to file your taxes for all late filers.  ",
      image: "/images/pdf/84b64599ffd4d19e6d5920d5a29fdcd4.png",
      subText: "4868 IRS EXTENSION FORM",
      link: "https://www.truthfultaxes.com/_files/ugd/821f13_c7343117aa1c470a812a0933b05b8c60.pdf",
    },
    {
      id: 4,
      header: "Separate your tax responsibilities",
      text: "Download this federal form to request to separate your tax responsibilities from your spouse.  * Please note that this does not guarantee that your request will be honored by the IRS.",
      image: "/images/pdf/84b64599ffd4d19e6d5920d5a29fdcd4.png",
      subText: "8379 INJURED SPOUSE ALLOCATION FORM",
      link: "https://www.truthfultaxes.com/_files/ugd/821f13_41da3e904f8c4c298243f3f3534f83a1.pdf",
    },
  ];
  return (
    <div className="container">
      <div className={styles.irsForms}>
        <h2>
          <span>
            <GrDocumentDownload />
          </span>{" "}
          IRS DOWNLOADABLE FORMS
        </h2>
        <div className={styles.iRSFormsInfo}>
          {data.map((item) => (
            <div key={item.id} className={styles.iRSFormsInfoCards}>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
              <Link href={item.link}>
                <div>
                   <img src={item.image} alt="" width="85" height="85" />
                </div>
                <h6>{item.subText}</h6>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IRSForms;
