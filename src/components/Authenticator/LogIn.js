import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import closeImg from "../../assets/images/Authenticator/close.png";
import fbImg from "../../assets/images/Authenticator/facebook.png";
import googleImg from "../../assets/images/Authenticator/google.png";
import { FacebookSignIn, GoogleSignIn } from "../../firebase/SocialMediaAuth";
import useAuth from "../../hooks/useAuth";
import styles from "./Authenticator.module.css";

const LogIn = () => {
  const router = useNavigate();
  const { socialSignIn, LoginController } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const HandleLogin = async (body) => {
    try {
      const res = await LoginController(body);
      router("/");
    } catch (error) {
      setErrorMsg(error.response.data.message || "Something want wrong!!");
    }
  };

  const handleSocialAuth = async (authFunction) => {
    try {
      const socialData = await authFunction();
      const res = await socialSignIn(socialData.user._delegate.accessToken || socialData.user._delegate.idToken);
      router('/');
    } catch (error) {
      // console.log(error);
      setErrorMsg(error?.response?.data.message || "Something want wrong!!");
    }
  }
  return (
    <div className={styles.Authenticator}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.closeIcon}>
              <Link to="/" rel="noreferrer">
                 <img
                  alt="close"
                  width="20"
                  height="20"
                  src={closeImg}
                />
              </Link>
            </div>
            <div className={styles.logIn}>
              <h2>Log In</h2>
              <p>
                New to this site ?
                <Link to="/signUp" rel="noreferrer">
                  Sign Up
                </Link>{" "}
              </p>
              <form onSubmit={handleSubmit(HandleLogin)}>
                <input
                  {...register("email", { required: true })}
                  type="email" placeholder="Email" required={true} />
                <input
                  {...register("password", { required: true })}
                  type="password" placeholder="Password" required={true} />
                <div className={styles.forgotPassword}>
                  <Link to="/forgotPass" rel="noreferrer">
                    Forgot password?
                  </Link>
                </div>
                <button type="submit" className="button">Log In</button>
              </form>
              {/* error message */}
              {
                errorMsg && (
                  <div className="alert alert-danger">
                    {errorMsg}
                  </div>
                )
              }
              <p>or / log in with</p>
              <div className={styles.loginIcon}>
                 <img
                  onClick={() => handleSocialAuth(FacebookSignIn)}
                  alt="facebook"
                  width="35"
                  height="35"
                  src={fbImg}
                />
                 <img
                  onClick={() => handleSocialAuth(GoogleSignIn)}
                  alt="google"
                  width="35"
                  height="35"
                  src={googleImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
