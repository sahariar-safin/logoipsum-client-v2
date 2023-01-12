import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { planshare } from './../../../apis/planshare';
import styles from "./TruthfulTaxesForm.module.css";


const TruthfulTaxesForm = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const router = useNavigate();
  const handleOnSubmit = async (body) => {
    try {
      const res = await planshare({
        ...body,
      });
      router("/thank-you");
      console.log(res);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="container">
      <div className={styles.truthfulTaxesForm}>
        <h2>SORRY</h2>
        <h2>ENTRY IS CLOSED.</h2>
        <h3>CHECK BACK WITH US FOR YOUR CHANCE TO WIN.</h3>
      </div>
      <div>
        <form
          className={styles.mainForm}
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <h3>Share your plan for a chance to win! </h3>
          <div>
            <div className={styles.formInputs}>
              <div>
                <label className="" htmlhtmlFor="firstName">
                  First Name*
                </label>
                <br />
                <input
                  {...register("first_name", { required: true })}
                  type="text"
                  id="firstName"
                />
              </div>
              <div>
                <label className="" htmlhtmlFor="lastName">
                  Last Name*
                </label>
                <br />
                <input
                  {...register("last_name", { required: true })}
                  type="text"
                  id="lastName"
                />
              </div>
            </div>

            <div className={styles.formInputs}>
              <div>
                <label className="" htmlhtmlFor="email">
                  Email*
                </label>
                <br />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <label className="" htmlhtmlFor="phone">
                  Phone*
                </label>
                <br />
                <input
                  {...register("phone_number", { required: true })}
                  type="phone"
                  id="phone"
                />
              </div>
            </div>

            <div className={styles.formInputs}>
              <div>
                <label className="" htmlhtmlFor="address">
                  Full Address*
                </label>
                <br />
                <input
                  {...register("address", { required: true })}
                  type="text"
                  id="address"
                />
              </div>
              <div>
                <label className="" htmlhtmlFor="birthday">
                  Birthday*
                </label>
                <br />
                <input
                  {...register("date_of_birth", { required: true })}
                  type="date"
                  id="birthday"
                />
              </div>
            </div>
            <div className={styles.formInputs}>
              <div>
                <label className="" htmlhtmlFor="laptop">
                  How can winning this laptop bring you closer to your goals?*
                </label>
                <br />
                <textarea
                  {...register("goals", { required: true })}
                  type="text"
                  id="laptop"
                  rows="8"
                />
              </div>
              <div>
                <label className="" htmlhtmlFor="giveaway">
                  How did you hear about this giveaway?*
                </label>
                <br />
                <input
                  {...register("hear_giveaway", { required: true })}
                  type="text"
                  id="giveaway"
                />
              </div>
            </div>
          </div>
            <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TruthfulTaxesForm;
