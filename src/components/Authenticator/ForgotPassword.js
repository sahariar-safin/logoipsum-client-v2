import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword, resetPassword, verifyOtp } from "../../apis/auth";
import closeImg from "../../assets/images/Authenticator/close.png";
import styles from "./Authenticator.module.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState(null);
  const [otp, setOtp] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);
  return (
    <div className={styles.Authenticator}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.closeIcon}>
              <Link to="/" rel="noreferrer">
                <img alt="close" width="20" height="20" src={closeImg} />
              </Link>
            </div>
            {
              step === 1
                ? <SubmitEmail
                  setStep={setStep}
                  email={email}
                  setEmail={setEmail}
                  otp={otp}
                  setOtp={setOtp}
                  password={password}
                  setPassword={setPassword}
                  isVerified={isVerified}
                  setIsVerified={setIsVerified}
                  error={error}
                  setError={setError}
                />
                : step === 2
                  ? <VerifyOTP
                    setStep={setStep}
                    email={email}
                    setEmail={setEmail}
                    otp={otp}
                    setOtp={setOtp}
                    password={password}
                    setPassword={setPassword}
                    isVerified={isVerified}
                    setIsVerified={setIsVerified}
                    error={error}
                    setError={setError} />
                  : <ResetPass
                    setStep={setStep}
                    email={email}
                    setEmail={setEmail}
                    otp={otp}
                    setOtp={setOtp}
                    password={password}
                    setPassword={setPassword}
                    isVerified={isVerified}
                    setIsVerified={setIsVerified}
                    error={error}
                    setError={setError}
                    setConfirmPassword={setConfirmPassword}
                    confirmPassword={confirmPassword}
                    navigate={navigate}
                  />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const SubmitEmail = ({ setStep, email, setEmail, setError, error }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) return setError('Please enter your email address');
      const response = await forgotPassword({ email });
      if (response.data.success) {
        setStep(2);
      }
      setError(null);
    } catch (error) {
      setError(error.response.data.message || 'Something went wrong!');
    }
  };
  return (
    <div className={styles.logIn}>
      <h3>Create New Password</h3>
      <p>Please enter your email address</p>
      <form>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required={true} />
        <button onClick={(e) => handleSubmit(e)} className="button">Create Password</button>
        {
          error && (
            <div className="alert alert-danger mt-2 mb-2">
              {error}
            </div>
          )
        }
      </form>
      <p></p>
    </div>
  );
};

const VerifyOTP = ({ setStep, setOtp, otp, setError, error, email }) => {
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      if (!otp) return setError('Please enter your OTP');
      if (!email) return setStep(1);
      const response = await verifyOtp({ email, otp });
      if (response.data.success) {
        setStep(3);
      }
      setError(null);
    } catch (error) {
      setError(error.response.data.message || 'Something went wrong!');
    }
  };
  return (
    <div className={styles.logIn}>
      <h3>Verify Your OTP</h3>
      <p>Please enter your OTP</p>
      <form>
        <input onChange={(e) => setOtp(e.target.value)} type="number" placeholder="Verify Your OTP" required={true} />
        <button onClick={(e) => handleVerify(e)} className="button">Verify Your OTP</button>
        {
          error && (
            <div className="alert alert-danger mt-2 mb-2">
              {error}
            </div>
          )
        }
      </form>
      <p></p>
    </div>
  );
};

const ResetPass = ({ setStep, password, setPassword, confirmPassword, setConfirmPassword, error, setError, email, navigate }) => {
  const handleReset = async (e) => {
    e.preventDefault();
    try {
      if (!password) return setError('Please enter your password');
      if (!confirmPassword) return setError('Please enter your confirm password');
      if (password !== confirmPassword) return setError('Password and confirm password does not match');
      if (!email) return setStep(1);
      const response = await resetPassword({ email, password });
      if (response.data.success) {
        navigate('/login');
      }
      setError(null);
    } catch (error) {
      setError(error.response.data.message || 'Something went wrong!');
    }
  };
  return (
    <div className={styles.logIn}>
      <h3>New Password</h3>
      <form>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Your New Password"
          required={true}
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Your Password"
          required={true}
        />
        <button onClick={(e) => handleReset(e)} className="button">New Password</button>
        {
          error && (
            <div className="alert alert-danger mt-2 mb-2">
              {error}
            </div>
          )
        }
      </form>
      <p></p>
    </div>
  );
};

export default ForgotPassword;
