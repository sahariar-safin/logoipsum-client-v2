import React from "react";
import { Link } from "react-router-dom";
import closeImg from "../../assets/images/Authenticator/close.png";
import styles from "./Authenticator.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.Authenticator}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.closeIcon}>
              <Link href="/" rel="noreferrer">
                 <img
                  width="20"
                  height="20"
                  src={closeImg}
                />
              </Link>
            </div>
            <div className={styles.logIn}>
              <h3>Create New Password</h3>
              <p>Please enter your email address</p>
              <form>
                <input type="email" placeholder="Email" required={true} />
                <button className="button">Create Password</button>
              </form>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
