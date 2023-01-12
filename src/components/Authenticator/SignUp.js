 import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FacebookSignIn, GoogleSignIn } from "../../firebase/SocialMediaAuth";
import useAuth from "../../hooks/useAuth";
import styles from "./Authenticator.module.css";

const SignUp = () => {
  const router = useNavigate();
  const { socialSignIn, RegisterController } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const HandleSignUp = async (body) => {
    try {
      const res = await RegisterController(body);

      router('/');
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
                  src="/images/Authenticator/close.png"
                />
              </Link>
            </div>
            <div className={styles.logIn}>
              <h2>Sign Up</h2>
              <p>
                New to this site?
                <Link to="/logIn" rel="noreferrer">
                  Log In
                </Link>{" "}
              </p>
              <form onSubmit={handleSubmit(HandleSignUp)}>
                <input
                  {...register("email", { required: true })}
                  type="email" placeholder="Email" required={true} />
                <input
                  {...register("password", { required: true })}
                  type="password" placeholder="Password" required={true} />
                <button type="submit" className="button">Sign Up</button>
                {/* error message */}
                {
                  errorMsg && (
                    <div className="alert alert-danger">
                      {errorMsg}
                    </div>
                  )
                }
              </form>
              <p>Or / Sign Up With</p>
              <div className={styles.loginIcon}>
                 <img
                  onClick={() => handleSocialAuth(FacebookSignIn)}
                  alt="facebook"
                  width="35"
                  height="35"
                  src="/images/Authenticator/facebook.png"
                />
                 <img
                  onClick={() => handleSocialAuth(GoogleSignIn)}
                  alt="google"
                  width="35"
                  height="35"
                  src="/images/Authenticator/google.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
