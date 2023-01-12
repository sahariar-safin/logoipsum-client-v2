import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./ExistingClient.module.css";

const Irs = ({setFormNumber}) => {
  const [extraCharge, setExtraCharge] = useState(true);
  const [extraDollar, setExtraDollar] = useState(true);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState(null);

  const [stateIDLinks, setStateIDLinks] = useState([]);

  const handleUploadFile = async (file) => {
    const data = new FormData();
    data.append("file", file);
    const response = await axios.post("/file/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  const handleFileEvent = async (e) => {
    const response = await handleUploadFile(e.target.files[0]);
    setStateIDLinks([...stateIDLinks, response.link]);
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    setUploadedFiles(chosenFiles);
  };

  const deleteFile = (file) => {
    const found = uploadedFiles.filter((element) => element.name !== file);
    setUploadedFiles(found);
  };

const {register,
  handleSubmit,
  watch,
  formState: { errors },} = useForm();

  const handleOnSubmit = (body) => {  
      body.state_id_image = stateIDLinks;  
      localStorage.setItem("irsQuestions", JSON.stringify(body) )
      setFormNumber(3);
  }
  
  useEffect(() => {
    localStorage.removeItem("irsQuestions");
  }, []);

  return (
    <div className={styles.clientRegistry}>
      <div className="container">
        <div className="row" id={styles.clientRegistry}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <form className={styles.form}   onSubmit={handleSubmit(handleOnSubmit)}>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>
                    Did you receive a 3rd economic stimulus payment from the IRS
                    in 2021? (Example: $1,400) *
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
                    <label for="Yes2">Yes</label>
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
                    <label for="No2">No</label>
                  </div>
                  {!extraCharge && (
                    <div className={styles.extraCharge}>
                      <label>Enter the exact dollar amount received</label>
                      <input {...register("an_economic_stimulus_amount", {
                          required: true,
                        })} type="number" placeholder="$0.00" />
                    </div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    Did you receive an IRS letter 6419 for advance child tax
                    payments (You would have received monthly payments from the
                    IRS)*
                  </p>
                  <div className={styles.radioInput}>
                    <input
                      type="radio"
                      id="Yes3"
                      name="economic_stimulus"
                      value="Yes"
                      onClick={() => setExtraDollar(false)}
                    />
                    <label for="Yes3">Yes</label>
                    <br />{" "}
                    <input
                      type="radio"
                      id="No3"
                      name="economic_stimulus"
                      value="No"
                      onClick={() => setExtraDollar(true)}
                    />
                    <label for="No3">No</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {!extraDollar && (
                    <div className="">
                      <p>Upload your IRS letter 6419 if Yes</p>
                      <div className={styles.browseFile}>
                        <label for="fileUpload" className={styles.fileLabel}>
                          <AiOutlineCloudUpload className={styles.fileIcon} />{" "}
                          <br />
                          Browse Files <br />
                          Drag and drop files here
                        </label>
                      </div>
                      <input
                        type="file"
                        id="fileUpload"
                        multiple="multiple"
                        className={styles.fileType}
                        onChange={handleFileEvent}
                      />
                      <div className={styles.uploadedFiles}>
                        {uploadedFiles.map((file) => (
                          <div key={file.name}>
                            <p>
                              {" "}
                              {file.name}{" "}
                              <span onClick={() => deleteFile(file.name)}>
                                <RiDeleteBin6Line />
                              </span>{" "}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col mb-4">
                  <button className="button" onClick={() => setFormNumber(1)}>Back</button>
                </div>
                {error && (
                  <div className="alert alert-danger mt-2">
                    <p>{error}</p>
                  </div>
                )}
                <div className="col d-flex justify-content-lg-end justify-content-md-end justify-content-sm-start mb-4">
                  <button className="button">Next</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Irs;
