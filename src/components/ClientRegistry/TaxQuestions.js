import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";
import { TagsInput } from "react-tag-input-component";
import styles from "./ClientRegistry.module.css";

const TaxQuestions = ({ setFormNumber }) => {
  const [extraCharge, setExtraCharge] = useState(true);
  const [extraDollar, setExtraDollar] = useState(true);
  const [tagSelected, setTagSelected] = useState([
    "Full Name, Date of Birth and Gender",
  ]);
  const [Selected, setSelected] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (body) => {
    body.child_full_name = tagSelected;
    localStorage.setItem("taxQuestions", JSON.stringify(body));
    setFormNumber(3);
  };

  useEffect(() => {
    localStorage.removeItem("taxQuestions");
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
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="inlineFormCustomSelect">
                    What is your filing status? *
                  </label>
                  <select
                    {...register("filing_status", { required: true })}
                    id="inlineFormCustomSelect"
                  >
                    <option value="">Please Select</option>
                    <option value="Single">Single</option>
                    <option value="Head of Household">Head of Household</option>
                    <option value="Married Filing Joint">
                      Married Filing Joint
                    </option>
                    <option value="Married Filing Separate">
                      Married Filing Separate
                    </option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>Will you be claiming children or dependants? *</p>
                  <div className={styles.radioInput}>
                    <input
                      {...register("claiming_children")}
                      type="radio"
                      id="Yes1"
                      name="claiming_children"
                      value="Yes"
                      onClick={() => setSelected(true)}
                    />
                    <label htmlFor="Yes1">Yes</label>
                    <br />{" "}
                    <input
                      {...register("claiming_children")}
                      type="radio"
                      id="No1"
                      name="claiming_children"
                      value="No"
                      onClick={() => setSelected(false)}
                    />
                    <label htmlFor="No1">No</label>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                {Selected ? (
                  <div>
                    <label>
                      Child/Dependant Full Name, Date of Birth and Gender if
                      applicable.*
                    </label>
                    <div className={styles.addMoreOption}>
                      {/* <pre>{JSON.stringify(tagSelected)}</pre> */}

                      <TagsInput
                        value={tagSelected}
                        onChange={setTagSelected}
                        name="tags"
                        placeHolder="tags"
                      />

                      <AiOutlineDelete
                        className={styles.tagSelectedIcon}
                        onClick={() => setSelected(false)}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>
                    Did you receive an economic stimulus payment from the IRS in
                    2020? (Example: $1,200) *
                  </p>
                  <div className={styles.radioInput}>
                    <input
                      {...register(
                        "did_you_receive_an_economic_stimulus_payment"
                      )}
                      type="radio"
                      id="Yes2"
                      value="Yes"
                      onClick={() => setExtraCharge(false)}
                    />
                    <label htmlFor="Yes2">Yes</label>
                    <br />{" "}
                    <input
                      {...register(
                        "did_you_receive_an_economic_stimulus_payment"
                      )}
                      type="radio"
                      id="No2"
                      value="No"
                      onClick={() => setExtraCharge(true)}
                    />
                    <label htmlFor="No2">No</label>
                  </div>
                  {!extraCharge ? (
                    <div className={styles.extraCharge}>
                      <label>Enter the exact dollar amount received</label>
                      <input
                        {...register("an_economic_stimulus_amount", {
                          required: true,
                        })}
                        type="number"
                        placeholder="$0.00"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>
                    Did you receive a 2nd economic stimulus payment from the IRS
                    in 2020? (Example: $600)
                  </p>
                  <div className={styles.radioInput}>
                    <input
                      {...register(
                        "did_you_receive_2nd_economic_stimulus_payment",
                        { required: true }
                      )}
                      type="radio"
                      id="Yes3"
                      value="Yes"
                      onClick={() => setExtraDollar(false)}
                    />
                    <label htmlFor="Yes3">Yes</label>
                    <br />{" "}
                    <input
                      {...register(
                        "did_you_receive_2nd_economic_stimulus_payment",
                        { required: true }
                      )}
                      type="radio"
                      id="No3"
                      value="No"
                      onClick={() => setExtraDollar(true)}
                    />
                    <label htmlFor="No3">No</label>
                  </div>

                  {!extraDollar && (
                    <div className={styles.extraCharge}>
                      <label>Enter the exact dollar amount received</label>
                      <input
                        {...register("economic_stimulus_amount_2nd", {
                          required: true,
                        })}
                        type="number"
                        placeholder="$0.00"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>Did you pay for child care? *</p>
                  <div className={styles.radioInput}>
                    <input
                      {...register("did_you_pay_for_child_care", {
                        required: true,
                      })}
                      type="radio"
                      id="Yes4"
                      value="Yes"
                    />
                    <label htmlFor="Yes4">Yes</label>
                    <br />{" "}
                    <input
                      {...register("did_you_pay_for_child_care", {
                        required: true,
                      })}
                      type="radio"
                      id="No4"
                      value="No"
                    />
                    <label htmlFor="No4">No</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>Do you own a home or pay a mortgage? *</p>
                  <div className={styles.radioInput}>
                    <input
                      {...register("do_you_own_a_home_or_pay_a_mortgage", {
                        required: true,
                      })}
                      type="radio"
                      id="Yes5"
                      value="Yes"
                    />
                    <label htmlFor="Yes5">Yes</label>
                    <br />{" "}
                    <input
                      {...register("do_you_own_a_home_or_pay_a_mortgage", {
                        required: true,
                      })}
                      type="radio"
                      id="No5"
                      value="No"
                    />
                    <label htmlFor="No5">No</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>Did you attend college this tax year? *</p>
                  <div className={styles.radioInput}>
                    <input
                      {...register("did_you_attend_college", {
                        required: true,
                      })}
                      type="radio"
                      id="Yes6"
                      value="Yes"
                    />
                    <label htmlFor="Yes6">Yes</label>
                    <br />{" "}
                    <input
                      {...register("did_you_attend_college", {
                        required: true,
                      })}
                      type="radio"
                      id="No6"
                      value="No"
                    />
                    <label htmlFor="No6">No</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    Did you purchase health insurance through the health
                    marketplace? *
                  </p>
                  <div className={styles.radioInput}>
                    <input
                      {...register(
                        "did_you_purchase_health_insurance_through_the_health_marketplace",
                        { required: true }
                      )}
                      type="radio"
                      id="Yes7"
                      value="Yes"
                    />
                    <label htmlFor="Yes7">Yes</label>
                    <br />{" "}
                    <input
                      {...register(
                        "did_you_purchase_health_insurance_through_the_health_marketplace",
                        { required: true }
                      )}
                      type="radio"
                      id="No7"
                      value="No"
                    />
                    <label htmlFor="No7">No</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>Did you receive a 1095-A medical statement? *</p>
                  <div className={styles.radioInput}>
                    <input
                      {...register("did_you_receive_1095_A_medical_statement", {
                        required: true,
                      })}
                      type="radio"
                      id="Yes8"
                      name="did_you_receive_1095_A_medical_statement"
                      value="Yes"
                    />
                    <label htmlFor="Yes8">Yes</label>
                    <br />{" "}
                    <input
                      {...register("did_you_receive_1095_A_medical_statement", {
                        required: true,
                      })}
                      type="radio"
                      id="No8"
                      name="did_you_receive_1095_A_medical_statement"
                      value="No"
                    />
                    <label htmlFor="No8">No</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  {" "}
                  <button onClick={() => setFormNumber(1)} className="button">
                    Back
                  </button>
                </div>
                <div className="col d-flex justify-content-end">
                  <button className="button" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxQuestions;
