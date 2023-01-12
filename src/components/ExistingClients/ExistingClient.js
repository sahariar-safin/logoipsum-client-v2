import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./ExistingClient.module.css";

const ExistingClient = ({ setFormNumber }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (body) => {
    localStorage.setItem("personalData", JSON.stringify(body));
    setFormNumber(2);
  };

  useEffect(() => {
    localStorage.removeItem("personalData");
  }, []);

  return (
    <div className={styles.clientRegistry}>
      <div className="container">
        <div className="row" id={styles.clientRegistry}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <form
              className={styles.form}
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              <h2>Existing Client Information</h2>
              <div className="row">
                <p>Name*</p>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <input
                    {...register("first_name", { required: true })}
                    type="text"
                    placeholder="First Name"
                    required={true}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <input
                    type="text"
                    placeholder="Middle Name"
                    {...register("middle_name", { required: false })}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <input
                    {...register("last_name", { required: true })}
                    type="text"
                    placeholder="Last Name"
                    required={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>Email*</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
                    required={true}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>Phone Number*</label>
                  <input
                    {...register("phone_number", { required: true })}
                    type="number"
                    placeholder="Phone Number"
                    required={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Address*</label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    required={true}
                    {...register("street_address", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Street Address Line 2"
                    {...register("street_address_line_2", { required: false })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="text"
                    placeholder="State / Province"
                    required={true}
                    {...register("state", { required: true })}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="text"
                    placeholder="City"
                    required={true}
                    {...register("city", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Postal / Zip Code"
                    required={true}
                    {...register("postal_code", { required: true })}
                  />
                </div>
              </div>
              <button className="button" type="submit">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingClient;
