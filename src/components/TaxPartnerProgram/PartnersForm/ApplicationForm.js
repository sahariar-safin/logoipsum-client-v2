import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "../TaxPartnerProgram.module.css";
import { taxpartner } from './../../../apis/taxpartner';
const ApplicationForm = () => {
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
      const res = await taxpartner({
        ...body,
      });
      router("/thank-you");
      console.log(res);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.ApplicationForm}>
      <form className={styles.Form} onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="row">
          <div className="col">
            <input
              {...register("first_name", { required: true })}
              type="text"
              placeholder="First name"
              required={true}
            />
          </div>
          <div className="col">
            <input
              {...register("last_name", { required: true })}
              type="text"
              placeholder="Last name"
              required={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your Email Address"
              required={true}
            />
          </div>
          <div className="col">
            <input
              {...register("phone_number", { required: true })}
              type="number"
              placeholder="Phone number (with country code)"
              required={true}
              min={1000000000}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
              onInvalid={(e) =>
                e.target.setCustomValidity("Phone number at least 10 digits")
              }
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input
              type="date"
              {...register("date_of_birth", { required: false })}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Referred By (name)"
              {...register("referred_name", { required: false })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>
              COURSE/SESSION DATE DESIRED SEE DATES ON CALENDAR BELOW{" "}
            </label>
            <select
              className="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              {...register("Session_date_information", { required: true })}
            >
              <option selected>Choose A Session</option>
              <option value="Session 6">Session 6</option>
              <option value="Session 7">Session 7</option>
              <option value="Session 8">Session 8</option>
            </select>
          </div>
          <div className="col">
            <label>
              Were You Referred By A Current Tax Partner? If Yes Enter Name
              Below{" "}
            </label>
            <select
              className="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              {...register("Referred_By_A_Current_Tax", { required: true })}
            >
              <option selected></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;