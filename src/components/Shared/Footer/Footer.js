 
import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { Link } from "react-router-dom";
import { footerData } from "../../../data/data";
import styles from "./Footer.module.css";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Link to="/">
               <img
                width="167"
                height="41"
                src="/images/Logo.png"
                className="img-fluid"
                alt=""
              />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc aliquet senectus
              facilisis sed interdum ornare purus. Nisi et eu auctor turpis est
              mattis.
            </p>
            <h4>Follow Us</h4>
            <div className={styles.footerIcon}>
              <Link to="#">
                <BsFacebook className={styles.Icon} />
              </Link>
              <Link to="#">
                <BsTwitter className={styles.Icon} />
              </Link>
              <Link to="#">
                {" "}
                <ImYoutube className={styles.Icon} />
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-4 col-sm-12">
            <div className="row">
              {footerData.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={item?.id}>
                    <h4>{item?.title}</h4>
                    {item?.text?.map((items, index) => {
                      return (
                        <div className={styles.footerList} key={items?.id}>
                          <Link to={items?.link}>{items?.item}</Link>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default Footer;
