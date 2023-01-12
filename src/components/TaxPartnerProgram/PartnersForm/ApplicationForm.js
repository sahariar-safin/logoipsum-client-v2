import React from "react";
import styles from "../TaxPartnerProgram.module.css";
const ApplicationForm = () => {
  return (
    <div className={styles.ApplicationForm}>
      <form className={styles.Form}>
        <div className="row">
          <div className="col">
            <input type="text" placeholder="First name" required={true} />
          </div>
          <div className="col">
            <input type="text" placeholder="Last name" required={true} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="email"
              placeholder="Enter your Email Address"
              required={true}
            />
          </div>
          <div className="col">
            <input
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
            <input type="text" placeholder="Date" required={true} />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Referred By (name)"
              required={true}
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
            >
              <option selected>Choose A Session</option>
              <option value="1">Session 6</option>
              <option value="2">Session 7</option>
              <option value="3">Session 8</option>
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
            >
              <option selected></option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
