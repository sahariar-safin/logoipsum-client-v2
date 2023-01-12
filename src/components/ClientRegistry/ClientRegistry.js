import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./ClientRegistry.module.css";

const ClientRegistry = ({ setFormNumber }) => {
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
              onSubmit={handleSubmit(handleOnSubmit)}
              className={styles.form}
            >
              <h2>New Client Registration</h2>
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
                    {...register("middle_name", { required: false })}
                    type="text"
                    placeholder="Middle Name"
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
                  <label>Date of Birth*</label>
                  <input
                    {...register("date_of_birth", { required: true })}
                    type="date"
                    placeholder="Date"
                    required={true}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>Email*</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
                    required={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>Phone Number*</label>
                  <input
                    {...register("phone_number", { required: true })}
                    type="number"
                    placeholder="Phone Number"
                    required={true}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>Job Title / Job Position*</label>
                  <input
                    {...register("job_title", { required: true })}
                    type="text"
                    placeholder="Job Title / Job Position"
                    required={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <label>Address *</label>
                  <input
                    {...register("street_address", { required: true })}
                    type="text"
                    placeholder="Street Address"
                    required={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <input
                    {...register("street_address_line_2", { required: false })}
                    type="text"
                    placeholder="Street Address Line 2"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input
                    {...register("state", { required: true })}
                    type="text"
                    placeholder="State / Province"
                    required={true}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="City"
                    required={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <input
                    {...register("postal_code", { required: true })}
                    type="text"
                    placeholder="Postal / Zip Code"
                    required={true}
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

export default ClientRegistry;
