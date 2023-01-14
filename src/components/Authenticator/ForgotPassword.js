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
                <img width="20" height="20" src={closeImg} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubmitEmail = () => {
  return (
    <div className={styles.logIn}>
      <h3>Create New Password</h3>
      <p>Please enter your email address</p>
      <form>
        <input type="email" placeholder="Email" required={true} />
        <button className="button">Create Password</button>
      </form>
      <p></p>
    </div>
  );
};

const VerifyOTP = () => {
  return (
    <div className={styles.logIn}>
      <h3>Verify Your OTP</h3>
      <p>Please enter your OTP</p>
      <form>
        <input type="number" placeholder="Verify Your OTP" required={true} />
        <button className="button">Verify Your OTP</button>
      </form>
      <p></p>
    </div>
  );
};

const ResetPass = () => {
  return (
    <div className={styles.logIn}>
      <h3>New Password</h3>
      <form>
        <input
          type="password"
          placeholder="Enter Your New Password"
          required={true}
        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          required={true}
        />
        <button className="button">New Password</button>
      </form>
      <p></p>
    </div>
  );
};

export default ForgotPassword;
